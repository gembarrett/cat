function addSubmenuHandlers(menu, page) {
    subs = document.querySelectorAll('.submenu h4, .submenu li');
    subs.forEach(sub => sub.addEventListener('click', updateSubmenu));
    
    if (page === 'survey'){
        var progButtons = document.querySelectorAll('#progressButtons button');
        for (var p = 0; p < progButtons.length; p++){
            progButtons[p].addEventListener('click', nextPage);
        }        
    }
}

function addResultsPageHandlers(){
    
}

// this is the function that's called when a user submits their answers
function handleSubmit() {
    utils.router('results');
}

function parseGeneratedURL(data){
    urlParts = data[0].split(/([a-z][0-9][0-9])/);
    // remove any empty strings from the array
    urlParts = urlParts.filter(part => part !== '');
    
    console.log(urlParts);
}

// function to add li or p formatting to array
function parseContent(data, array){
  for (var p = 0; p < data.length; p++){
    if (data[p].type !== undefined) {
      // if type is defined, it'll be a list
      // check if there's an intro line accompanying it
      if (data[p].text !== undefined) {
        array += '<p>'+data[p].text+'</p>';
      }
      array += '<'+data[p].type+'>';
      for (var l = 0; l < data[p].items.length; l++) {
        array += '<li>'+data[p].items[l]+'</li>';
      }
      array += '</'+data[p].type+'>';
    } else {
      array += '<p>'+data[p]+'</p>';
    }
  }
  return array;
}

function parseQuotes(data, array) {
  for (var q=0; q<data.length; q++) {
    array += '<div>'+data[q]+'</div>';
  }
  return array;
}
