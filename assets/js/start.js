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

// this is the function that's called when a user submits their answers
function handleSubmit() {
    utils.router('results');
}


// this takes the preselected answers from the url and stores them
function parseGeneratedURL(data, route){
    if (route === 'survey'){
        urlParts = data[0].split(/([a-z][0-9][0-9])/);
        // remove any empty strings from the array
        urlParts = urlParts.filter(part => part !== '');

            var preSelections = [];

            for (const part of urlParts){
                // match up the first character with the category in the catRefLib
                if (typeof currentState.catRefLib[part.charAt(0)] === 'string'){
                    c = currentState.catRefLib[part.charAt(0)];
                    q = part.charAt(1);
                    a = part.charAt(2);
                    preSelections.push(`${c}-${q}-${a}`);
                } else {
                    console.log(`Unable to parse: ${part}`);
                }

            }
            // add the preselections to currentState)
            currentState.preSelections = preSelections;    
    } else if (route === 'results'){
        // split the data into pattern of letter (cat reference) plus series of numbers (the tally)
        urlParts = data[0].split(/([a-z][\d]+)/);
        // remove any empty strings from the array
        urlParts = urlParts.filter(part => part !== '');
        
        var importedTally = {};
        
        // for each of the url parts
        for (const part of urlParts){
            // match the first character with the category in the catRefLib
            if (typeof currentState.catRefLib[part.charAt(0)] === 'string'){
                total = part.split(part.charAt(0));
                total = parseInt(total[1]);
                // add it to the tally object
                importedTally[currentState.catRefLib[part.charAt(0)]] = total;
            } else {
                // doesn't match
            }
        }
    return importedTally;
    } else {
        // fail silently
    }
    

}

function doThePreselections(){
        
    for (const item of currentState.preSelections){
        element = document.querySelector(`input#${item}`);
        if (element !== null){
//            element.click(); 
            // what's involved in this click:
                // updateProgress(e) happens
            // check the button
            element.checked = true;
            // push it to the answered array
            currentState.answered.push(isRequired(element));
        } else {
            // skip this one
        }
    }
    // then update the progress bar
    updateBar();
    
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
