function addSubmenuHandlers(menu) {
//    for (var n=0; n < menu.childNodes.length; n++) {
//      // first narrow it down to the submenu items in this section
//      var subs = menu.childNodes[n].childNodes;
//        
//        console.log(subs);
//      // then get the handlers added to the elements
//      addShowHideHandlers(subs);
//    }
    subs = document.querySelectorAll('.submenu h4, .submenu li');
    subs.forEach(sub => sub.addEventListener('click', updateSubmenu));
    
    var progButtons = document.querySelectorAll('#progressButtons button');
    for (var p = 0; p < progButtons.length; p++){
        progButtons[p].addEventListener('click', nextPage);
    }

}

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


function moveForward(id) {
  // this increases the counter
  currentState.questionC++;
  // start looking at the next question
  // increase the question id number
  id++;
  currentState.questionQ = id;
  // increase position in the array
  currentState.questionP++;
  return id;
}


// TODO: Add this back when snapshot link is re-implemented
// function enableSnapshot(s){
//   // if there's answers stored
//   if (currentState.answers.length !== 0){
//     // check the ids against the checkableQs
//     for (count = 0; count< currentState.answers.length; count++){
//       if (isCheckableQ(parseInt(currentState.answers[count].q))){
//         // enable the snapshot button
//         s.removeAttribute('disabled');
//         s.addEventListener('click', getSnapshotURL);
//         document.querySelector('#copyBtn').addEventListener('click', copyUrl);
//         return;
//       } else {
//         console.log(currentState.answers[count].q + ' is not a question that can be snapshotted');
//       }
//     }
//   } else {
//     console.log('More answers needed for snapshotting');
//   }
// }

// this is the function that's called when a user their answers
function handleSubmit() {
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
