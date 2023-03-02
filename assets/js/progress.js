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