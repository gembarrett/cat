function updateSubmenu(e){
    dest = e.target;
    // did the user click on a subcategory or a category (is it an li or a h4)
    if (dest.nodeName === 'LI'){
    // subcategory selected
        // compare the dest to the current submenu selections
        origin = document.querySelector('.submenu li.selected');
        if (dest.id !== origin.id) {
        // is dest a different subcategory
            // remove selected class from elsewhere in the submenu
            origin.classList.remove('selected');
            // apply it to the subcategory
            dest.classList.add('selected');
            // and show the relevant questions
            updateQuestions(dest.id, origin.id);
            updateButtons(dest.id);
            // position the polygons, change their images
            positionPolygons();
            parent = dest.parentElement.parentElement.id
            // change the background if we're in a new section
            changeBackground(parent);
            // do we need to update the category too?
            if (!document.querySelector(`.submenu div#${parent}`).classList.contains('selected')){
                document.querySelector('.submenu div.selected').classList.remove('selected');
                document.querySelector(`.submenu div#${parent}`).classList.add('selected');
            }
        }
    } else if (dest.nodeName === 'H4'){
    // category selected
        // remove selected class from current category
        document.querySelector('.submenu div.selected').classList.remove('selected');
        // add selected class to dest category        
        dest.parentElement.parentElement.classList.add('selected');
    }
}

function updateQuestions(d, o){
    if (d !== o){
        // find the currently active question group
        active = document.querySelector('form div.active');
        // verify that it matches the origin
        if (active.classList[0] === o){
            active.classList.remove('active');
            document.querySelector(`form div.${d}`).classList.add('active');
        } else {
            console.log(active.classList[0], o);
        }
    }
}

// if we're on desktop
    // if (window.innerWidth > X)
// call this each time the submenu is clicked
function positionPolygons(){
    // get the height of the containing block
    var containerH = document.querySelector('.contain-survey').clientHeight;
    // account for the intro height
    var introH = document.querySelector('#survey-intro').clientHeight;
    // get the three polygons
    var images = document.querySelectorAll('.rhombus');
    // decide on the 3 positions, based on the height
    // divide up the space between introH and containerH
    var gapH = containerH - introH;
    // if the gap is taller than a certain amount, decide how many rhombus can fit
    var top = gapH / 3;
    var mid = gapH / 2;
    var base = containerH - top;

    // apply display:block and top value to each
    images[0].style.top = top + 'px';
    if (containerH > 800){
        images[1].style.top = mid + 'px';
        images[2].style.top = base + 'px';
        images[1].style.display = 'block';
        images[2].style.display = 'block';   
    } else {
        images[1].style.display = 'none';
        images[2].style.display = 'none';   
    }
}

function changeBackground(sectionID) {
    var page = document.querySelector('#page');
    if (!page.classList.contains(sectionID)){
        page.classList = "survey "+sectionID;
    } else {
        return;
    }
}

// when a radio button is selected
function updateProgress(e) {
    // when there's an answer, we need to know:
        // which answer was selected (for results processing)
        // was the answer already selected
        // was there aleady an answer for that question which needs to be replaced
        
    // has this question been answered before?
    newAnswerCheck = isNewAnswer(e.target); // returns either true or the matching answers
    
    if (newAnswerCheck === true){
        // if this is a new answer, push optional or required id to the answers list
        currentState.answered.push(isRequired(e.target));
    } else {
        // get an updated list of the new answers from this question
        selections = document.querySelectorAll(`input[name=${e.target.name}]:checked`);
        
        // add a check in here for the number of checkboxes (should be max of 3)
        if (tooMany(selections) === true){
            // find the error text
            thisError = document.querySelector('span#error-'+e.target.name);
            // if the error is hidden
            if (thisError.classList.contains('hide')){
                thisError.classList.remove('hide');
            }
        } else {
            // remove the highlight class on the relevant span
            thisError = document.querySelector('span#error-'+e.target.name);
            thisError.classList.add('hide');
        }

        // if this question already has stored answers, find & remove them
        for (var i = 0; i < newAnswerCheck.length; i++){
            // get the position in current answers array
            position = currentState.answered.indexOf(newAnswerCheck[i]);
            currentState.answered.splice(position, 1);
        }
        
        for (var s = 0; s < selections.length; s++){ 
            currentState.answered.push(isRequired(selections[s]));
        }
    }
    updateBar();
}
    
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
    
    currentPage = document.querySelector('.submenu li.selected').id;
    updateButtons(currentPage);
    
    // if there's answers and the section has been started
    if (percentage > 0){
        // update the circle in submenu        
        sectionStarted(currentPage);
    }
}

function sectionStarted(page){
    // what's the current subcategory
    sub = document.querySelector(`.submenu li#${page}`);
    // what's the current category
    cat = document.querySelector(`.submenu div.selected`);
    // check if the category has been started
    if (!cat.classList.contains('started')){
        cat.classList.add('started');
    }
    // check if the subcategory has been started
    if (!sub.classList.contains('started')){
        sub.classList.add('started');
    }    
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

function tooMany(arr){
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


function nextPage(e) {
    // when user clicks next, figure out what subcategory they want to go to
    const clicked = e.target.className;
    // get all the subcategories
    var submenuItems = document.querySelectorAll('.submenu li');
    // figure out which subcategory we're in
    const selectedSubmenuItem = (element) => element.classList.contains('selected');
    // create an array of the subcategories
    submenuItems = Array.from(submenuItems);
    // get an index number for the subcategory
    const selectedIndex = submenuItems.findIndex(selectedSubmenuItem);
    
    // if the user wants to go to the previous page
    if (clicked === "back"){
        // if  they're not on the first page
        if (selectedIndex !== 0) {
            // simulate a click on the previous index
            submenuItems[selectedIndex-1].click();
        } 
        else {
            // if they're on the first page they can't go back
        }
    } 
    // if the user wants to go to the next page
    else if (clicked === "forward"){
        // if  they're not on the last page
        if (selectedIndex !== submenuItems.length) {
            // simulate a click on the next index
            submenuItems[selectedIndex+1].click();
        }  
        else {
            // if they're on the last page they can't go forward
        }
    } 
    // or if they want to submit their answers
    else { 
        // handleSubmit();
    } 
    // scroll to the top of the page
    window.scrollTo(0,0);
}


function updateButtons(page){
    // get the progress status
    prog = document.querySelector('label[for="survey-progress"] span').innerHTML;
    
    prog = parseInt(prog);
    
    status = "";
        
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
    
    // if doesn't already have this class
    if (!stBtns.classList.contains(status)){
        // update the classlist
        stBtns.classList = status;        
    } else {
        // already got this class so do nothing
    }
}