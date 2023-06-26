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

window.onload = function(){
  document.querySelector('#no-js').remove();
  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );
//  setUpMenu();
    buildMobileMenu(sections);
    prepTheMenu();
    buildCatRefLib();
    utils.router();
};

function addSaveResumeEventListeners(){
    /* Event Listener added to all 'Save and resume later' buttons */
    
    // grab the save buttons
    buttons = document.querySelectorAll('.later');
    // add a click listener for each that shows the save panel
    for (var b=0; b<buttons.length; b++){
        buttons[b].addEventListener('click', function(e){
            openPanel(e);
        });
    }
    
    /* Event Listener added to all overlays to hide when clicked outside */
    
    overlays = document.querySelectorAll('.overlay');
    for (const element of overlays){
        element.addEventListener('click', function(e){
            // find the open panel
            panel = document.querySelector('.overlay:not(.hide) .inner-panel');
            if (panel !== null && !panel.contains(e.target)){
                hidePanel(panel);
            } else {
                // do nothing
            }                
        })
    }
    
    /* Event listener added to all X or dismiss buttons on overlays */
    
    // find the dismiss button
    dismiss = document.querySelectorAll('.dismiss');
    for (const element of dismiss){
        element.addEventListener('click', function(){
            panel = document.querySelector('.overlay:not(.hide) .inner-panel');
            if (panel !== null){
                hidePanel(panel);
            }
        });        
    }
    
    /* Event listener added to all "copy url" buttons */
    
    document.querySelector('.overlay button.copy').addEventListener('click', function(){
        copyUrl();
    });

    
    /* Event listener added to all "email url" buttons to check validity and enable/disable the send button */
    
    emailInput = document.querySelector('#email-field');
    emailInput.addEventListener('input', function(){
        // if an email is entered, the send button becomes enabled
        if (checkForEmail(emailInput.value) === true){
            document.querySelector('button.send').removeAttribute('disabled');
        } else {
            document.querySelector('button.send').setAttribute('disabled', 'disabled');
        }
    });
    
    /* Event listener added to all "send email" buttons */
    
    sendButtons = document.querySelectorAll('button.send'); 
    for (const element of sendButtons){
//    for (var s = 0; s<sendButtons.length; s++){
       element.addEventListener('click', function(){
           // is there an email
           if (emailInput.value !== ""){
                // yes: check for link
               if (document.querySelector('.overlay textarea').value !== ""){
                   // send generated link to email               
                   sendEmail(emailInput.value, document.querySelector('.overlay textarea').value);
               } else {
                   // send main url to email
                   sendEmail(emailInput.value, window.location);
               }
           } else {
            // no:
                // send window location to empty recipient field  
                sendEmail("", window.location);
           }
        })
    }
}


function addPrintBtnEventListener(){
    /* Event listener added to all print buttons */
    
    printBtns = document.querySelectorAll('.result-print');
    for (var p = 0; p < printBtns.length; p++){
        printBtns[p].addEventListener('click', function(){
            window.print();
        });
    }
}

function addFeedbackBtnEventListener(){
    /* Event listener added to all feedback buttons */
    
    feedbacks = document.querySelectorAll('.send-feedback');
    for (var f=0; f<feedbacks.length; f++){
        feedbacks[f].addEventListener('click', function(){
            window.location = `mailto:buildteam@fordfoundation.org?subject=Feedback on CAT`;
        })
    }
}

function addFormProgressHandler(){
        if (document.querySelector('form')){
            var form = document.querySelector('form');
            form.addEventListener('change', function(e){
                updateProgress(e);
            });
        }     
}

function goToSection(dest){
   // click on the relevant link in the main submenu
    document.querySelector(`li#${dest}`).click();
    // update the URL
    url = window.location;
    url = url.toString();
    // figure out if we're on home page
    url = url.split('#');
    url = `${url[0]}#survey`;
    history.pushState({}, "", url);
    // close the mobile menu button
//    document.getElementById('mobile-menu').click();
}

function initialiseHandlers(page){
    
    switch (page) {
        case 'home':
        case 'legal':
            addSaveResumeEventListeners();
            break;
        case 'survey':
            addSubmenuHandlers(document.querySelector('.submenu'), 'survey');
            addFormProgressHandler();
//            addMobilePromptEventListener();
            addSaveResumeEventListeners();
            break;
        case 'results':
            addSubmenuHandlers(document.querySelector('.submenu'), 'results');
            addSaveResumeEventListeners();
            addPrintBtnEventListener();
            addFeedbackBtnEventListener();
            break;
        default:
            console.log(page);
    }
    
}

function sendEmail(email, link){
    // if the window location was used
    if (typeof link === 'object'){
        // turn it into a string before sending
        link = window.location.toString();
    }
    window.location = `mailto:${email}?subject=${textStore.oc.save.email.subject}&body=${textStore.oc.save.email.body}${link}`;
}

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

// TODO: limit the scope if poss
var sections = [];
// push the questions in their groups, plus labels, into variables for processing
for (var q = 0; q < textStore.qs.length; q++){
  sections.push(textStore.qs[q]);
}

// this connects the cat names with a short 1-letter reference for use in rebuilding from a generated link
// WARNING: IF THIS IS CHANGED THEN GENERATED LINKS WILL BREAK
function buildCatRefLib(){
    var n = 0;
    for (cat in sections){
        for (var c = 0; c < sections[cat].subs.length; c++){
            subCatName = sections[cat].subs[c].name;
            subCatRef = String.fromCharCode(97 + n);
            currentState.catRefLib[subCatRef] = subCatName;
            n++;
        }
    }
}


// set up progress tracking
var currentState = {
    // which questions have been answered?
    answered: [],
    // how many questions are in the survey
    totalQs: 0,
    // what are the references for each subcategory
    catRefLib: {}
}