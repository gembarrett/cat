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
  var burger = document.querySelector('#lang-trigger');

  burger.addEventListener("click", function(e) {
    toggleMenu(e);
  });

  document.querySelector('body').addEventListener('click', function(e){
    // the menu container only contains close when the menu is closed
    var isMenuClosed = document.querySelector('#lang-container').classList.contains('close');

    // the click shouldn't have occurred on the menu-trigger nor inside the menu
    var isClickInside = (e.target.id === 'lang-trigger') || (e.target.id === 'lang-container');

    // if menu is open and click was outside of menu trigger or container
    if (!isMenuClosed && !isClickInside) {
      // close the menu
      toggleMenu("c");
    }
  });
}

function toggleMenu(order) {
  var menu = document.querySelector('#lang-container');
  if (order === "c") {
    document.querySelector('#lang-trigger').classList.remove('dim');
    menu.classList.add('close');
  } else {
    document.querySelector('#lang-trigger').classList.toggle('dim');
    menu.classList.toggle('close');
  }
}

function prepTheMenu(){
    // when user clicks on mobile menu icon
    trigger = document.getElementById('mobile-menu');
    trigger.addEventListener('click', function(){
        toggleMenu('nav-container');
    });
    // when user clicks on "go to section"
    trigger = document.getElementById('section-trigger');
    trigger.addEventListener('click', function(){
        toggleMenu('section-menu');
        // replace text with "back"
        trigger.innerHTML = '<img src="assets/images/menu-back.png" alt="Back to main menu"/><p>Back</p>';
    });
    // when user clicks on a section
    triggers = document.querySelectorAll('#section-menu > p');
    for (t = 0; t < triggers.length; t++){
        triggers[t].addEventListener('click', function(e){
            // which item is it
            id = e.target.id;
            id = id.split('nav-')[1];
            toggleMenu(`subs-${id}`);
        });
    }
    // click listener for each of the subsections with class starting nav-
    triggers = document.getElementById('section-menu').querySelectorAll('[id^="sub-"]');
    for (v = 0; v < triggers.length; v++){
        triggers[v].addEventListener('click', function(e){
            // where are we going
            id = e.target.id.split(`sub-`);
            // where are we coming from
            lilink = `li#${id[1]}`;
            if (document.querySelector(lilink)){
                // desktop submenu is on the page, so simulate click
                document.querySelector(lilink).click();
            } else {
                // we're not on the survey page, so pass url change with section id
                
                // can we pass the destination a different way
                // document.location.href = document.location + '#survey?' + id[1];
                utils.router('survey', id);
            }
            // close the menu
            toggleMenu('nav-container');
            window.scrollTo(0,0);
        });
    }
}

function toggleMenu(el){
    document.getElementById(el).classList.toggle('open');
}

// can't put links into the html because will reload the page
function navToSurvey(){
    // if user clicks on a subsection
    // check if the li with the right id is on the page
    // if we are, then simulate a click on the relevant menu item
    // if we're on a different page, pass as param by creating a url like /#survey?${subsection}
    // pass it to the routing mechanism for processing (will need to load up the page and simulate the click)
}                             

window.onload = function(){
  document.querySelector('#no-js').remove();
  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );
//  setUpMenu();
    buildMobileMenu(sections);
    prepTheMenu();
    utils.router();
};

function buildMobileMenu(s){
    // get the mobile menu
    menu = '<div id="section-menu">';
    //for each of the main sections
    for (var m = 0; m < s.length; m++){
        //  build an element for it
        menu += `<p id="nav-${s[m].section}">${s[m].title}</p><img src="assets/images/menu-forward.png" alt="View survey sections"/><div id="subs-${s[m].section}">`;
        
        // for each of the subsections
        for (var i=0; i<s[m].subs.length; i++){
            menu += `<p id="sub-${s[m].subs[i].name}">${s[m].subs[i].subtitle}</p>`;
        }
        menu += `</div>`;   
    }
    menu += '</div>';
    // append after menu trigger
    document.getElementById('section-trigger').insertAdjacentHTML('afterend', menu);
}

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
