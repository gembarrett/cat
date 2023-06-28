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

function moveMenu(direction, sub){
    // if we're going back a menu
    if (direction[0] === 'back'){
        menus = document.querySelectorAll('#sNav ul');
        // check if we can go any further back first
        if (menus[menus.length-1].classList[0].endsWith('4')){
            console.log("Out of range");
            return;
        } else {
            for (const menu of menus){
                currentPosition = menu.classList[0];
                currentPosition = currentPosition.split('pos')[1];
                currentPosition = parseInt(currentPosition);
                newPosition = `pos${currentPosition+1}`;
                menu.classList.replace(menu.classList[0], newPosition); 
            }
            // make sure all the "show" classes on the subcats are hidden
            showingSubCats = document.querySelectorAll('#nav-subcats li.show');
            if (el !== undefined){
                for (const el of showingSubCats){
                    el.classList.remove('show');
                }
            }
        }
        
    } else if (direction[0] === 'to'){
        menus = document.querySelectorAll('#sNav ul');
        // loop through the menus
        if (menus[0].classList[0].endsWith('0')){
            console.log("Out of range");
            return;
        } else {
            for (const menu of menus){
                currentPosition = menu.classList[0];
                currentPosition = currentPosition.split('pos')[1];
                currentPosition = parseInt(currentPosition);
                newPosition = `pos${currentPosition-1}`;
                menu.classList.replace(menu.classList[0], newPosition);                
            }
            // if the id contains four words it's probably got matching subcats
            if (sub.id.split('-').length === 4){
                // build the class name out of 0,2,3
                searchFor = sub.id.split('-');
                searchFor.splice(1,1);
                searchFor = searchFor.join('-');
                // see if there's a matching class
                matchingSubcats = document.querySelectorAll(`#nav-subcats .${searchFor}`);
                console.log(matchingSubcats);
                if (typeof matchingSubcats === 'object' && matchingSubcats.length > 0){
                    // there are matching subcategories in the mobile menu
                    for (const el of matchingSubcats) {
                        el.classList.add('show');
                    }
                }
            }
        }
    }
}

function resetMenu() {
    menus = document.querySelectorAll('#sNav ul');
    for (var i = 2; i < 5; i++){
        menus[i-2].classList.replace(menus[i-2].classList[0], `pos${i}`);
    }
}

function prepTheMenu(){
    // when user clicks on mobile menu icon
    trigger = document.getElementById('mobile-menu');
    trigger.addEventListener('click', function(){
        toggleMenu('nav-container');
    });
    
    // when user clicks on an item in the mobile nav
    // get all the li elements in the #sNav, not: 'later'
    mobTriggers = document.querySelectorAll('#sNav li:not(.later)');
    for (el of mobTriggers){
        el.addEventListener('click', function(e){
            // when user clicks
            // what's the id attached to it
            clicked = e.target.id;
            // if it starts with "go" then its internal
            if (clicked.startsWith('go-')){
                // go where?
                clicked = clicked.split('go-');
                // tidy up the array
                clicked = clicked.filter(item => item !== '');
                moveMenu(clicked[0].split('-'), e.target);
            } else if (clicked.startsWith('m-')){
                clicked = clicked.split('m-');
            }
            
        });
    }
    
    // click listener for each of the subsections of the mobile menu
    triggers = document.getElementById('nav-subcats').querySelectorAll('[id^="m-"]');
    for (v = 0; v < triggers.length; v++){
        triggers[v].addEventListener('click', function(e){
            // where are we going
            id = e.target.id.split(`m-`);
            // where are we coming from
            lilink = `li#${id[1]}`;
            if (document.querySelector(lilink)){
                // desktop submenu is on the page, so simulate click
                document.querySelector(lilink).click();
            } else {
                // we're not on the survey page, so pass url change with section id
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
    resetMenu();
}

window.onload = function(){
  document.querySelector('#no-js').remove();
  window.addEventListener(
      "hashchange",
      function(){utils.router()}
  );
//  setUpMenu();
    buildMobileMenu(sections);
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
    menu = '<div id="nav-container">';
    
    menu += `<div id="sNav">
                    <ul id="nav-main" class="pos2">
                        <li id="go-to-cats">Go to section...</li>
                        <li class="later">Save &amp; resume later</li>
                    </ul>
                    <ul id="nav-cats" class="pos3">
                        <li id="go-back-main">Back</li>
                        <li id="go-to-understand-risk">Understanding Risk</li>
                        <li id="go-to-op-sec">Operational Security</li>
                        <li id="go-to-devices-accounts">Device and Account Security</li>
                    </ul>
                    <ul id="nav-subcats" class="pos4">
                        <li id="go-back-cats">Back</li>
                        <li id="m-your-org" class="go-understand-risk">About Your Organization</li>
                        <li id="m-external-threats" class="go-understand-risk">External Threats</li>
                        <li id="m-policy-docs" class="go-op-sec">Policy &amp; Documentation</li>
                        <li id="m-internal-risks" class="go-op-sec">Internal Risks</li> 
                        <li id="m-training-support" class="go-op-sec">Staff Training &amp; Support</li>
                        <li id="m-travel-policy" class="go-op-sec">Travel Policy</li>        
                        <li id="m-managing-data" class="go-op-sec">Managing Data</li>  
                        <li id="m-web-security" class="go-op-sec">Website Security</li>  
                        <li id="m-office-security" class="go-op-sec">Office Policies &amp; Systems</li>  
                        <li id="m-legal-risks" class="go-op-sec">Legal Risks</li>                        
                        <li id="m-messaging-collab" class="go-devices-accounts">Messaging &amp; Collaboration</li>
                        <li id="m-installing-software" class="go-devices-accounts">Installing Software</li> 
                        <li id="m-data-encryption" class="go-devices-accounts">Data Encryption</li>  
                        <li id="m-device-compartmentalization" class="go-devices-accounts">Compartmentalization</li>  
                        <li id="m-passwords-authentication" class="go-devices-accounts">Passwords &amp; Authentication</li>   
                        <li id="m-system-updates" class="go-devices-accounts">System Updates</li> 
                        <li id="m-op-continuity" class="go-devices-accounts">Operational Continuity</li>
                        <li id="m-third-party" class="go-devices-accounts">Third-Party Services</li>
                        <li id="m-vp-network" class="go-devices-accounts">VPN</li>                  
                    </ul>

                </div>`;
//    //for each of the main sections
//    for (var m = 0; m < s.length; m++){
//        //  build an element for it
//        menu += `<p id="nav-${s[m].section}">${s[m].title}</p><img src="assets/images/menu-forward.png" alt="View survey sections"/><div id="subs-${s[m].section}">`;
//        
//        // for each of the subsections
//        for (var i=0; i<s[m].subs.length; i++){
//            menu += `<p id="sub-${s[m].subs[i].name}">${s[m].subs[i].subtitle}</p>`;
//        }
//        menu += `</div>`;   
//    }
//    menu += '</div>';
//    // append after menu trigger
    document.getElementById('lang-container').insertAdjacentHTML('afterend', menu);
    prepTheMenu();
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