// when a radio button is selected
function updateProgress(e) {
    // when there's an answer, we need to know:
        // which answer was selected (for results processing)
        // was the answer already selected
        // was there aleady an answer for that question which needs to be replaced
    
    // we need a list of the questions that already have answers
    // and what those answers are
    
    // when an input button is clicked
    // which question is this? (e.target.name)
    // has this question been answered before?
    newAnswerCheck = isNewAnswer(e.target); // returns either true or the matching answers
    
    if (newAnswerCheck === true){
        // if this is a new answer, push optional or required id to the answers list
        currentState.answered.push(isRequired(e.target));
    } else {
        // if this question already has stored answers, find & remove them
        for (var i = 0; i < newAnswerCheck.length; i++){
            // get the position in current answers array
            position = currentState.answered.indexOf(newAnswerCheck[i]);
            currentState.answered.splice(position, 1);
        }
        // get an updated list of the new answers from this question
        selections = document.querySelectorAll(`input[name=${e.target.name}]:checked`);
        // add a check in here for the number of checkboxes (should be max of 3)
        
        for (var s = 0; s < selections.length; s++){
            currentState.answered.push(isRequired(selections[s]));
            // update the progress bar here
        }
    }
    console.log(currentState.answered);    
    
}
    // when there's at least (70 - optional) in the array, the form is ready for submission

    // update the value of the progress bar, and its label
    // update the circle in the submenu
        // black center and green border = default, no selections made
        // green center = at least one selection made


    // if <3 checkboxes selected, turn the "Choose your top three" text red
    
    // when all required answers have an answer selected, progressbar should be 100%
    // when an answer is selected, update the progressbar values
    // if a checkbox is selected, don't update the progress bar until three have been selected



// only update the progress bar once if checkboxes, or is it worth 3?
function updateBar(el){    
    // should the progress % be updated because this question has been answered?
    if (!isOptional(el.id)){ // if it's required, update the progress bar
        console.log('Number of questions: '+currentState.answered.length);  
        // check whether all the required questions have been answered
    } else { // if it is required, update the progress bar
        // don't update the progress bar      
        return;
    }
}

function isRequired(el){
    if (el.required === true){
        return el.id;
    } else {
        return el.id+'-o';
    }
}

function isRadio(el){
    if (el.type === "radio"){
        return true;
    } else {
        return false;
    }
}

function isNewAnswer(el){
    // find all the previous answers for this question
    matches = currentState.answered.filter(x => x.startsWith(el.name));
    if (matches.length === 0){
        // if this questions has no stored answers
        return true;
    } else {
        // return the stored answers
        return matches;
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