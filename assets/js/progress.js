// when a radio button is selected
function updateProgress(e) {
    // when there's an answer, we need to know:
        // which answer was selected (for results processing)
        // was the answer already selected
        // was there aleady an answer for that question which needs to be replaced
    
    // we need a list of the questions that already have answers
    // and what those answers are
    
    // when an input button is clicked
    // which question is this?
    let clickedQ = e.target.name;
    
    // has this question been answered before?
    match = currentState.answered.filter(x => x.startsWith(e.target.name));
    // if there's no previous answer for this question
    if (match.length === 0){
        // add this answer to the list
        currentState.answered.push(e.target.id);
        updateBar(e.target);
    } else {
        // is this a 1-answer question? (radio or checkbox)
        if (match.length === 1){
            
            // if there's only one match get the position of match's first element in the answers list
            position = currentState.answered.indexOf(match[0]);
            
            // because you can't unselect radio buttons, but this may be a multiple checkbox answer
            if (e.target.type === "checkbox"){
                selectedMultiples = document.querySelectorAll(`input[name=${e.target.name}]:checked`);
                if (selectedMultiples.length < 4){
                    // add them to the answers list
                    currentState.answered.concat(selectedMultiples);
                    updateBar(e.target);
                } else {
                    // TODO: alert the user
                    console.log("Too many items selected.");
                }                
            } else {
                // replace the old answer with the new
                currentState.answered[position] = e.target.id;                
            }
        } else {
            // checkbox question
            for (var i = 0; i < match.length; i++){
                // get the position in current answers array
                position = currentState.answered.indexOf(match[i]);
                // remove the element from array
                currentState.answered.splice(position);
            }
            // get all the selected answers in that question
            selectedMultiples = document.querySelectorAll(`input[name=${e.target.name}]:checked`);
            // check that there's no more than 3
            if (selectedMultiples.length < 4){
                // add them to the answers list
                currentState.answered.concat(selectedMultiples);
                updateBar(e.target);
            } else {
                // TODO: alert the user
                console.log("Too many items selected.")
            }
        }
    }
    // out of total number of questions, how many do we have in currentState list?
    
    
    // when there's at least (70 - optional) in the array, the form is ready for submission
}
    // update the value of the progress bar, and its label
    // update the circle in the submenu
        // black center and green border = default, no selections made
        // green center = at least one selection made


    // user clicks on an answer
    // is this a checkbox or radio
        // if it's a radio, update the progress bar values
        // if it's a checkbox, are there 2 others selected for this question
            // if 3 checkboxes selected, update the progress bar values
            // if <3 checkboxes selected, turn the "Choose your top three" text red
    // 
    
    // when all required answers have an answer selected, progressbar should be 100%
    // when an answer is selected, update the progressbar values
    // if a checkbox is selected, don't update the progress bar until three have been selected


function updateBar(el){
    // should the progress % be updated?
    if (isOptional(el.id)){
        // update the progress bar
        console.log('Number of questions: '+currentState.answered.length);
    } else {
        // do nothing
        return;
    }
}


function isOptional(element){
    if (element.required = true) {
        return false; // this is not an optional question
    } else {
        return true; // this is an optional question
    }
}

function nextPage(event) {
    const clicked = event.target.className;
    // when user clicks next
    // loop through all the list items in the submenu
    var submenuItems = document.querySelectorAll('.submenu li');
    const selectedSubmenuItem = (element) => element.classList.contains('selected');
    submenuItems = Array.from(submenuItems);
    const selectedIndex = submenuItems.findIndex(selectedSubmenuItem);
    
    if (clicked === "back"){
        // if this is the first item
        if (selectedIndex === 0) {
            // do nothing bc the button should be hidden
        } else if (selectedIndex === 1){ 
            // check if the previous item is the first one
            // simulate a click on the previous index
            submenuItems[selectedIndex-1].click();
            window.scrollTo(0,0);
            // hide/show the Previous button here -> put this into a function I can call if VPNs is selected
        } else {
            // simulate a click on the next index
            submenuItems[selectedIndex-1].click();
            window.scrollTo(0,0);
        }
    } else {
            // check if this is the last item
        if (selectedIndex === submenuItems.length) {
            // take this as a Submit action and act accordingly
            // might not be necessary if the Next button is replaced with Submit
            console.log('Check progress and submit or reject');
        } else if (selectedIndex === submenuItems.length-1){ 
            // check if the next item is the last one
            // simulate a click on the next index
            submenuItems[selectedIndex+1].click();
            window.scrollTo(0,0);
            // hide/show a Submit button here rather than changing text & colour -> put this into a function I can call if VPNs is selected
        } else {
            // simulate a click on the next index
            submenuItems[selectedIndex+1].click();
            window.scrollTo(0,0);
        }
    }               
}

function updateButtons(page){
    if (page === 'start'){
        document.querySelector('.progressButtons').classList.remove('endStatus');
        document.querySelector('.progressButtons').classList.add('startStatus');
    } else if (page === 'end'){
        document.querySelector('.progressButtons').classList.remove('startStatus');
        document.querySelector('.progressButtons').classList.add('endStatus');
    } else {
        document.querySelector('.progressButtons').classList.remove('startStatus','endStatus');
    }
}