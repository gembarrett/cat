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
        if (tooManyChecks === true){
            // find the relevant span (give it id that matches the name value)
            // add a red-bold class on it to highlight
        } else {
            // remove the highlight class on the relevant span
        }
        
        for (var s = 0; s < selections.length; s++){
            currentState.answered.push(isRequired(selections[s]));
            // update the progress bar here
        }
    }
    updateBar();
}

// update the circle in the submenu
        // black center and green border = default, no selections made
        // green center = at least one selection made


    // if <3 checkboxes selected, turn the "Choose your top three" text red
    
function updateBar(){
    count = 0;
    // first, sort the answers
    currentState.answered.sort();
    // how many required questions have stored answers
    for (var i=0; i<currentState.answered.length; i++){
        // if answer should be counted (it's from an uncounted, required question)
        if (countThis(i) && !currentState.answered[i].endsWith('-o')){
            count++;
        } else {
            // don't count this question
        }
    }
    
    // calculate the % complete
    percentage = count/currentState.totalQs * 100;
            
    // update the value of the progress bar
    document.getElementById('survey-progress').value = count;
    // update the value in the label
    document.querySelector('label[for="survey-progress"] span').innerHTML = Math.round(percentage);
    
    // current page
    currentPage = document.querySelector('.submenu li.selected').id;
    updateButtons(currentPage);    
}

function countThis(i){
    // check if the answer is from the same question as before
    if (i > 0){
         // how many answers does this question have
        current = currentState.answered[i].split('-');
        current = current[0]+current[1]+current[2];
        prev = currentState.answered[i-1].split('-');
        prev = prev[0]+prev[1]+prev[2];

        // if the current question is different from the previous question
        if (current !== prev){
            // count this question
            return true;
        } else {
            // don't count this question (only count one answer per question)
            return false;
        }   
    } else {
        return true; // always count the first answer
    }
}

function isRequired(el){
    if (el.required === true){
        return el.id;
    } else if (el.required === false) {
        return el.id+'-o';
    } else {
        console.log(el.required);      
    }
}

function tooManyChecks(arr){
    if (arr[0].type === "checkbox" && arr.length > 3){
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
    // get the progress status
    prog = document.querySelector('label[for="survey-progress"] span').innerHTML;
    
    prog = parseInt(prog);
    
    status = "";
    
    // TODO: add checks in to test whether the right class is already applied
    
    // if we're on first page and not ready to submit
    if (page === 'your-org' && prog < 100){
        status = "first-start"; // hide prev/submit
    } 
    // if we're on first page and ready to submit
    else if (page === 'your-org' && prog === 100){
        status = "first-end"; // hide prev/next
    } 
    // if we're on last page and not ready to submit
    else if (page === 'vp-network' && prog < 100){
        status = "last"; // hide next/submit
    }
    // if we're on any other page and not ready to submit
    else if (prog < 100){
        status = "mid-start"; // hide submit
    }
    // if we're on any other page and ready to submit
    else if (prog === 100){
        status = "mid-end"; // hide next
    } else {
        status = "mid-start";
    }
    
    stBtns = document.getElementById('progressButtons');
    stBtns.classList = status;
}