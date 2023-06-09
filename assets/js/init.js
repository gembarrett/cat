// update current version here
var catv = "2.0.0";
var thisEnv = window.location.origin;

var templates = {};
var controllers = {};
var views = {};
var bodyLang = "en";
var textStore = {
  qs : window[bodyLang+"_qs"],
  // rs : window[bodyLang+"_rs"],
  oc : window[bodyLang+"_oc"]
}

function updateLang(language) {
  textStore.qs = window[language+"_qs"];
  // textStore.rs = window[language+"_rs"];
  textStore.oc = window[language+"_oc"];
}

// TODO: update this to suit language change
function setUpMenu() {
  var burger = document.querySelector('#menu-trigger');

  burger.addEventListener("click", function(e) {
    toggleMenu(e);
  });

  document.querySelector('body').addEventListener('click', function(e){
    // the menu container only contains close when the menu is closed
    var isMenuClosed = document.querySelector('#menu-container').classList.contains('close');

    // the click shouldn't have occurred on the menu-trigger nor inside the menu
    var isClickInside = (e.target.id === 'menu-trigger') || (e.target.id === 'menu-container');

    // if menu is open and click was outside of menu trigger or container
    if (!isMenuClosed && !isClickInside) {
      // close the menu
      toggleMenu("c");
    }
  });
}

function toggleMenu(order) {
  var menu = document.querySelector('#menu-container');
  if (order === "c") {
    document.querySelector('#menu-trigger').classList.remove('dim');
    menu.classList.add('close');
  } else {
    document.querySelector('#menu-trigger').classList.toggle('dim');
    menu.classList.toggle('close');
  }
}

window.onload = function(){
  document.querySelector('#no-js').remove();
  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );
//  setUpMenu();
  utils.router();
};


// question list is only used in findContent() - can it be replaced?

var sections = [];
// push the questions in their groups, plus labels, into variables for processing
for (var q = 0; q < textStore.qs.length; q++){
  sections.push(textStore.qs[q]);
}

// this will connect the question numbers (0-70) with their positions in each section (0-25)
var questionsList = [];
// for each of the sections, loop through and create list of questions
for (var i = 0; i < sections.length; i++) {
  // get the section data
  tmpContent = sections[i];
  // for each of the questions in that section
  for (var j = 0; j < tmpContent.length; j++) {
    // push the id to the queue
    questionsList.push(j);
  }
}


// set up progress tracking
var currentState = {
    // which questions have been answered?
    answered: [],
    totalQs: 0
}

// for storing the storeAs names and values
// NOTE: this may not be necessary, but check with link replacement functionality before deletion
var dict = {};
