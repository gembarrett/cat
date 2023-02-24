function addSubmenuHandlers(menu) {
    for (var n=0; n < menu.childNodes.length; n++) {
      // first narrow it down to the submenu items in this section
      var subs = menu.childNodes[n].childNodes;
      // then get the handlers added to the elements
      addShowHideHandlers(subs);
    }
}

function addShowHideHandlers(els){
  // first add the event handlers to the category titles
  var title = els[0];
  title.addEventListener('click', showHideCategories);
  // then narrow it down to the list items
  var subCats = els[els.length-1].childNodes;
  for (var el=0; el<subCats.length; el++){
    subCats[el].addEventListener('click', showHideQuestions);
  }
}

// TODO: combine this with the other function that hides/shows questions?
function showHideCategories(e){
  // which section is currently selected
  var currentCat = document.querySelectorAll('.submenu div.selected');
  // which section is now selected
  var newCat = e.target.parentNode.parentNode;
  if (currentCat.length > 0) {
    for (var c = 0; c < currentCat.length; c++){
      // if user is selecting a new category
      if (currentCat[c].textContent !== e.target.textContent) {
        // remove the class from current selection
        currentCat[c].classList.remove("selected");
        // close that class' ul
        e.target.parentNode.parentNode.classList.add('selected');
      } else {
        console.log(currentCat[c].textContent);
        console.log(e.target.textContent);
      }
    }
  }
  e.target.classList.add('selected');
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
    console.log(images);
    // decide on the 3 positions, based on the height
    // divide up the space between introH and containerH
    var gapH = containerH - introH;
    // if the gap is taller than a certain amount, decide how many rhombus can fit
    var top = gapH / 3;
    var mid = gapH / 2;
    var base = containerH - top;

    // apply display:block and top value to each
    images[0].style.top = top + 'px';
    images[1].style.top = mid + 'px';
    images[2].style.top = base + 'px';

}


function showHideQuestions(e){
  // get the currently shown question group
  var thisSubSection = e.target.id;
  // use e.target.id to find the matching question group
  var matchingQs = document.querySelector('.'+thisSubSection);
  // toggle the hide and show classes (hide is default)
  var currentQs = document.querySelector('.active');
  if (matchingQs !== currentQs) {
    // find other instances of "selected" class and remove them
    var selected = document.querySelectorAll('.submenu li.selected');
    if (selected.length > 0) {
      for (var s = 0; s < selected.length; s++){
          selected[s].classList.remove("selected");
      }
    }
    // add class of "selected" to e.target.classList
    e.target.classList.add('selected');
    currentQs.classList.toggle('active');
    matchingQs.classList.toggle('active');
      positionPolygons();
      // position the polygons
      // change their images
      // change the background if we're in a new section (maybe move this bit up)
  } else {
    // if the selected content is already showing, do nothing
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

// this is the function that's called when a user submits an answer
// TODO: move this to a more suitable file, given it's not a "startup" function
function handleSubmit() {
  // search for the currently shown element - question and answer
  var match = document.querySelector('.current');
  // this gets the current question id number e.g. q0
  var id = currentState.questionQ;
  collectAnswers(false);

  // THIS MAY BE DELETED IF EXCLUSIONS AND EDIT ARE NOT IMPLEMENTED
  // if we're at the last question
  // if(parseInt(id) === questionsList.length-1){
  //   // disable the edit button
  //   document.getElementById('editBtn').classList.add('disabled');
  // } else {
  //   // collect the exclusions for this question
  //   collectExclusions(id);
  // }

  // TODO: move this class to the currently-displayed container of questions
  match.classList.remove("current");
  // go to next question
  nextQuestion();
  window.scrollTo(0,0);
}

function nextQuestion(){
  // if there's more questions left in this section
  if (currentState.questionP < currentState.sectionQ.length) {
    // grab the next question's element and add class of current
    var nextQ = document.getElementById("q-"+currentState.questionQ);
    nextQ.classList.add("current");
  }
  // if there's more sections left
  // consider whether this should happen here, before the last q, or after it
  else if (currentState.sectionC < sections.length-1) {
    // increase the section counter
    currentState.sectionC++;
    // reset the position counter
    currentState.questionP = 0;
    // get the next section
    currentState.sectionQ = sections[currentState.sectionC];
    // as before, grab the next question's element and add class of current
    var nextQ = document.getElementById("q-"+currentState.questionQ);
    nextQ.classList.add("current");
  }
  // if we're out of questions and sections then show the policy
  else {
    // if there are answers
    if (currentState.answers.length > 0) {
      window.location.href="/#results";
    } else {
      if (window.confirm("Oh no! It seems you haven't answered enough questions. Start again?")) {
        location.reload(false);
      } else {
        window.location.href = "/";
      }
    }
  }
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
