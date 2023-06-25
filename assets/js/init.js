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
    initialisePanels();
};

function initialisePanels(){
    // grab the save buttons
    buttons = document.querySelectorAll('.later');
    // add a click listener for each that shows the save panel
    for (var b=0; b<buttons.length; b++){
        buttons[b].addEventListener('click', function(){
            showSavePanel();
        });
    }
    overlays = document.querySelectorAll('.overlay');
    for (var o=0; o < overlays.length; o++){
        overlays[o].addEventListener('click', function(e){
            if (document.querySelector('.inner-panel').contains(e.target)){
                // do nothing
                console.log('click happens inside panel');
            } else {
                hidePanels();
            }
        })
    }
    // find the dismiss button
    dismiss = document.querySelectorAll('.dismiss');
    for (var d=0; d < dismiss.length; d++){
        dismiss[d].addEventListener('click', function(){
            hidePanels();
        });        
    }
    
    document.querySelector('.overlay button.copy').addEventListener('click', function(){
        copyUrl();
    });
        
    emailInput = document.querySelector('#email-field');
    emailInput.addEventListener('input', function(){
        // if an email is entered, the send button becomes enabled
        if (checkForEmail(emailInput.value) === true){
            document.querySelector('button.send').removeAttribute('disabled');
        } else {
            document.querySelector('button.send').setAttribute('disabled', 'disabled');
        }
    });
    
    
    sendButtons = document.querySelectorAll('button.send');    
    for (var s = 0; s<sendButtons.length; s++){
       sendButtons[s].addEventListener('click', function(){
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

// this connects the short ref names with the longer cat names for use in rebuilding from a generated link
function buildCatRefLib(){
    for (cat in sections){
        for (subcat in sections[cat].subs){
            subCatName = sections[cat].subs[subcat].name;
            subCatBits = subCatName.split('-');
            subCatRef = subCatBits[0][0]+subCatBits[0][1]+subCatBits[1][0];
            thisRef = {
                [subCatRef]: subCatName
            };
            currentState.catRefLib.push(thisRef);
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
    catRefLib: []
}