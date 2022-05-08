// update current version here
var catv = "2.0.0";
var thisEnv = window.location.origin;

var templates = {};
var controllers = {};
var views = {};
var bodyLang = "en";
var textStore = {
  qs : window[bodyLang+"_qs"],
  rs : window[bodyLang+"_rs"],
  oc : window[bodyLang+"_oc"]
}


function updateLang(language) {
  textStore.qs = window[language+"_qs"];
  textStore.rs = window[language+"_rs"];
  textStore.oc = window[language+"_oc"];
}

function setUpMenu() {
  var burger = document.querySelector('#menu-trigger');
  var close = document.querySelector('#close-menu');

  burger.addEventListener("click", function(e) {
    toggleMenu(e);
  });
  close.addEventListener('click', function() {
    toggleMenu("c");
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
  setUpMenu();
    // setUpFeedback();
  utils.router();
};

var sections = [];
var sectionLabels = [];

// initialise counters with the first section and question, this is updated at the end of questions and sections
// TODO: add a way to track which question is in which section
for (var q = 0; q < textStore.qs.length; q++){
  sections.push(textStore.qs[q].questions);
  sectionLabels.push(textStore.qs[q].level);
}

// loop through and create list of questions
var questionsList = [];
// for each of the sections
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
  // which number in the section queue are we?
  sectionC: 0,
  // which section's data is in use?
  sectionQ: sections[0],
  // which number in the question queue are we?
  questionC: 0,
  // which question's data is in use?
  questionQ: questionsList[0],
  // position in section
  questionP: 0,
  // which answers have been given for which questions?
  answers: [],
  // list of exclusions, updated on every submission and checked on every question load
  exclusions: []
}
// for storing the storeAs names and values
var dict = {};
// for storing the team-content names and values
var teamContent = [];

// for storing the orgName when it's entered on the home page
var homeName = "";

// for holding the end result
var policyText = [];
var appendixText = [];
var output;
