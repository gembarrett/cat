var utils = (function(){
  // This first part looks for parameters in the url, e.g. for "saved" answers
  var extract_params = function(params_string){
      var params = {};
      var raw_params = params_string.split('&');
      var j = 0;
      for(var i = raw_params.length - 1; i >= 0; i--){
          var url_params = raw_params[i].split('=');
          if(url_params.length == 2){
              params[url_params[0]] = url_params[1];
          }
          else if(url_params.length == 1){
              params[j] = url_params[0];
              j += 1;
          }
          else{
              //param not readable. pass.
          }
      }

      return params;
  };
  // This part figures out which page to load, based on the parameters
  return {
    router: function(route, data){
      // if there's a # in the url then grab whatever's after that
      route = route || location.hash.slice(1) || 'home';
        // if there's data, save it as a survey destination
        if (Array.isArray(data)){
            surveyDestination = data[1];
        }
        
      // if there's a ? in the url then split it at that point
      var temp = route.split('?');
      // how many parts did it get split into?
      var route_split = temp.length;
      // this is going to hold the name of the page to load
      var function_to_invoke;
      if (route === 'home') {
        function_to_invoke = 'home';
        var data = textStore.oc;
      } else if (temp[0] === 'legal') {
        function_to_invoke = 'legalView';
        var data = textStore.oc;
      } else if (temp[0] === 'survey') {
        // prepare to load the Survey page
        function_to_invoke = 'questionsView';
        var data = {
            "qs": textStore.qs,
            "ui": textStore.oc
        }
        
        // if we have a subsection to open
        if (typeof surveyDestination === "string" && surveyDestination !== ""){
            data["go"] = surveyDestination;
        }
          
          // if there's multiple parts to the url
          if(route_split > 1){
            // use the above function to figure out the parameters to pass along         
            var params = extract_params(temp[1]);
              console.log(params);
              parseGeneratedURL(params);
            changeBackground('understand-risk');              
          } else {
            // if not, show the default first section
            changeBackground('understand-risk');              
          }
                    
      } else if (temp[0] === 'results'){
          // temp data for development
          currentState.answered = ["data-encryption-0-0-0","data-encryption-1-0-0","device-compartmentalization-0-1-10","external-threats-0-0-50","external-threats-1-0-60","external-threats-2-1-0","external-threats-3-0-20","external-threats-4-0-20","external-threats-5-0-20","installing-software-0-0-5","installing-software-1-0-35","internal-risks-0-0-0","internal-risks-1-0-0","internal-risks-2-0-0","internal-risks-3-0-0","internal-risks-4-0-0","legal-risks-0-0-0","managing-data-0-0-0","managing-data-1-0-0","managing-data-2-0-0","managing-data-3-0-0","messaging-collab-0-0-0","messaging-collab-1-0-0","messaging-collab-2-0-0","office-security-0-0-15","office-security-1-0-0","office-security-2-0-10","office-security-3-0-0","office-security-4-0-0","office-security-5-0-0","op-continuity-0-1-10","op-continuity-1-0-0","op-continuity-2-0-0","passwords-authentication-0-2-15","passwords-authentication-1-1-10-o","passwords-authentication-2-0-0","policy-docs-0-0-0","policy-docs-1-0-0-o","policy-docs-2-0-0-o","system-updates-0-0-0","third-party-0-1-10","third-party-1-1-10","third-party-2-0-20","third-party-3-0-0","third-party-4-0-0","training-support-0-0-10","training-support-3-0-0","training-support-4-0-0","travel-policy-0-0-0","vp-network-0-3-20","web-security-0-0-0","web-security-1-0-0-o","web-security-2-0-15-o","web-security-3-0-5-o","web-security-4-0-0-o","your-org-0-0-0","your-org-1-0-0","your-org-2-0-0","your-org-3-0-10","your-org-4-0-10","your-org-5-2-5","your-org-6-0-0","your-org-6-1-0","your-org-6-2-0","your-org-7-0-0","your-org-7-2-0","your-org-7-3-0","your-org-8-2-0","your-org-9-0-0"]; 
          
          // if the user has completed the survey
          if (currentState.answered.length > 0){
              function_to_invoke = 'resultsView';
              var data = { 
                    "rs": textStore.rs,
                    "ui": textStore.oc
                };

          } else {
              // if not, send them to the home page
              function_to_invoke = "home";
            var data = textStore.oc;
              
              // update the URL
                url = window.location;
                url = url.toString();
                // take off the end bit
                url = url.split('#');
                url = `${url[0]}`;
              window.location = url;
          }
      }
        else {
        function_to_invoke = temp[0] || false;
        var data = textStore.oc;
      }

      // if there's something specified in the url then use it to load the right page with the right parameters
      if(function_to_invoke){
        views[function_to_invoke](data, params);
      }
    },
    // if we have to scroll to a particular section, based on the parameters, that happens here
    render: function(element_id, content, sender, selected_dest){
        document.getElementById(element_id).innerHTML = content;
        
        window.scrollTo(0,0);
        initialiseHandlers(sender);
        // if a destination has been chosen from the mobile menu
        if (selected_dest) {
            goToSection(selected_dest);
        }
        
//        if (document.querySelector('.results')){
//            addSubmenuHandlers(document.querySelector('.submenu'), 'results');
//        }
                
        // TODO: move these and check just for survey page then call the functions
//        if (document.querySelector('form')){
//            addSubmenuHandlers(document.querySelector('.submenu'), 'survey');
//            var form = document.querySelector('form');
//            form.addEventListener('change', function(e){
//                updateProgress(e);
//            });
//            // if a destination has been chosen from the mobile menu
//            if (selected_dest) {
//               // click on the relevant link in the main submenu
//                document.querySelector(`li#${selected_dest}`).click();
//                // update the URL
//                url = window.location;
//                url = url.toString();
//                // figure out if we're on home page
//                url = url.split('#');
//                url = `${url[0]}#survey`;
//                history.pushState({}, "", url);
//            }
//        }
    }
  };
})();
