//test link: http://localhost:8000/#survey?m00m10n00b01b11b21b31b41b51l00l10d03d10d20d30d40j01g00g10g20g30k00k10k20i03i10i20i30i40i50q00q10q20o00o10o20c00c10c20c30p00r00r10r20r30r40e02e10e20e30e40f00f10s00h00h11h23h30h40h51a00a10a20a31a41a51a60a61a62a71a72a73a80a90


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
            // figure out the parameters to pass along         
            var params = extract_params(temp[1]);
              parseGeneratedURL(params, temp[0]);
            changeBackground('understand-risk');              
          } else {
            // if not, show the default first section
            changeBackground('understand-risk');              
          }
                    
      } else if (temp[0] === 'results'){
            if(route_split > 1){
                // figure out the parameters to pass along         
                var params = extract_params(temp[1]);
                var dataForResults = parseGeneratedURL(params, temp[0]);
            }
          
//          // if there's preselected answers and no new ones
//          if (currentState.preSelections && currentState.answered.length === 0){
//              // push the preselections to the answered object
//              currentState.answered = currentState.preSelections;
//          } // otherwise the answered object should take precedence
          
          // if the user has completed the survey or they're restoring results
          if (currentState.answered.length > 0 || typeof dataForResults === 'object'){
              function_to_invoke = 'resultsView';
              var data = { 
                    "rs": textStore.rs,
                    "ui": textStore.oc,
                    "tally": dataForResults
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
    // if we have to do anything specific after a page has loaded, do it here
    render: function(element_id, content, sender, selected_dest){
        document.getElementById(element_id).innerHTML = content;
        
        window.scrollTo(0,0);
        initialiseHandlers(sender);
        // if a destination has been chosen from the mobile menu
        if (selected_dest) {
            goToSection(selected_dest);
        }
        // if there are already answers and we're headed to the survey
        if (currentState.preSelections && sender === 'survey'){
            // pre-select the relevant answers
            doThePreselections();
        }

    }
  };
})();
