var utils = (function(){
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

  return {
    router: function(route, data){
      route = route || location.hash.slice(1) || 'home';

      var temp = route.split('?');
      var route_split = temp.length;
      var function_to_invoke;
      if (temp[0] === 'basics') {
        function_to_invoke = 'basicsView';
        var data = en_oc;
    } else if (temp[0] === 'build') { // TODO: references to 'build' should be changed to 'start'
        function_to_invoke = 'questionsView';
        // could the question data be passed here instead of in a global variable?
      } else {
        function_to_invoke = temp[0] || false;
      }

      if(route_split > 1){
        var params = extract_params(temp[1]);
      }

      if(function_to_invoke){
        views[function_to_invoke](data, params);
      }
    },

    render: function(element_id, content, scroll_loc){
        document.getElementById(element_id).innerHTML = content;
        // if there's a location to scroll to
        if ((scroll_loc !== undefined) && (scroll_loc[0])) {
          var element = document.getElementById(scroll_loc[0]);
          // TODO: calculate current height of header then add equal margin-top inline to element before scrolling
          element.scrollIntoView();
        } else { // otherwise just scroll to top
          window.scrollTo(0,0);
        }
    },

  };

})();

function parseContent(data, array){
  for (var p = 0; p < data.length; p++){
    if (data[p].items !== undefined) {
      array += `<ul>`;
      for (var l = 0; l < data[p].items.length; l++) {
        array += `<li>`+data[p].items[l]+`</li>`;
      }
      array += `</ul>`;
    } else {
      array += `<p>`+data[p]+`</p>`;
    }
  }
  console.log(array);
  return array;
}

function testingLocality(word) {
  console.log(word);
}
