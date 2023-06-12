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
        var data = en_oc; // TODO: replace the hardcoded language files
      } else if (temp[0] === 'legal') {
        function_to_invoke = 'legalView';
        var data = en_oc['legal'];
      } else if (temp[0] === 'survey') {
        // prepare to load the Survey page
        function_to_invoke = 'questionsView';
        var data = {
            "qs": en_qs,
            "ui": en_oc['survey']
        }
        // if we have a subsection to open
        if (surveyDestination){
            data["go"] = surveyDestination;
        }
          
          // if there's multiple parts to the url
          if(route_split > 1){
            // use the above function to figure out the parameters to pass along         
            var params = extract_params(temp[1]);
          } else {
            // if not, show the default first section
            changeBackground('understand-risk');              
          }
      } else {
        function_to_invoke = temp[0] || false;
        var data = en_oc;
      }

      // if there's something specified in the url then use it to load the right page with the right parameters
      if(function_to_invoke){
        views[function_to_invoke](data, params);
      }
    },
    // if we have to scroll to a particular section, based on the parameters, that happens here
    render: function(element_id, content, selected_dest){
        document.getElementById(element_id).innerHTML = content;
        
          window.scrollTo(0,0);
        // TODO: move these and check just for survey page then call the functions
        if (document.querySelector('.submenu')){
            addSubmenuHandlers(document.querySelector('.submenu'));
            var form = document.querySelector('form');
            form.addEventListener('change', function(e){
                updateProgress(e);
            });
            // if a destination has been chosen from the mobile menu
            if (selected_dest) {
               // click on the relevant link in the main submenu
                document.querySelector(`li#${selected_dest}`).click();
                // update the URL
                url = window.location;
                url = url.toString();
                // figure out if we're on home page
                url = url.split('#');
                url = `${url[0]}#survey`;
                history.pushState({}, "", url);
            }
        }
    }
  };
})();
