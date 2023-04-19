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