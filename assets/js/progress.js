// when a radio button is selected
function updateProgress(event) {
    // when a question has been answered, push it to the currentState, check if it's required
    // when there's at least (70 - optional) in the array, the form is ready for submission
    
    // count how many of the fieldsets have a selected box
    
    // get all visible fieldsets
    const fieldsets = Array.prototype.slice.call(document.querySelectorAll('fieldset'));
    const visibleFieldsets = fieldsets.filter(fieldset => fieldset.clientHeight > 0);
    console.log(visibleFieldsets);
    
    // how many of them
    
    // check each fieldset for 
//    const sibs = event.target.parentElement.parentElement.elements;
//    for (var sib = 0; sib < sibs.length; sib++){
//        
//    }
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
