function copyUrl(){    
  try {
    // does copy work here?
    if (document.queryCommandSupported('copy')) {
      var copyText = document.querySelector('.overlay textarea');
      copyText.select();
      document.execCommand('copy');
    } else {
      window.alert('Sorry, CAT can\'t access your clipboard right now');
    }
  } catch (error){
    console.log(error);
  }
}

function checkForEmail(val){
    var checkEmail = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, 'g');
    result = val.match(checkEmail);
    if (Array.isArray(result)){
        return true;
    } else {
        return false;
    }
}

function openPanel(el){
    // what are we opening
    panelID = el.target.classList;
    console.log(panelID);
    
    if (panelID.contains('result-email') || panelID.contains('result-generate')){
        // if we're on the results page, the link needs to direct to results page
        urlToShare = generateLink('results');
        console.log(urlToShare);
    } else {
        // try to generate a link based on questions answered so far
        urlToShare = generateLink('survey');        
    }
    
  
   // disable the email button until an email is entered 
    if (document.querySelector('#email-field').value === ""){
        document.querySelector('button.send').setAttribute('disabled', 'disabled');   
    }
    
    // if no link has been generated
    if (urlToShare === false){
        // if there's no link to add to the textarea, display a message instead
        document.querySelector(`#overlay-resume textarea`).placeholder = "Not enough completed answers to create link."
        // disable the copy button
        document.querySelector('button.copy').setAttribute('disabled', 'disabled');
    } else {
        document.querySelector(`.overlay textarea`).value = urlToShare;
        // remove any disabled attributes from buttons
        document.querySelector('button.copy').removeAttribute('disabled');
    }

    // are we talking about the email overlay
    if (panelID.contains('result-email')){
        document.querySelector('#overlay-email').classList.remove('hide');
    } else {
        // dim the background and show the other panel
        document.querySelector('.overlay').classList.remove('hide');
    }
    
}

function hidePanel(panel){    
// hide any overlays that are open
    console.log(panel);
    // if it's the mobile prompt overlay
    if (panel.parentElement.id.endsWith('mobile')){
        // remove it from the DOM altogether to avoid accidentally reopening it
        panel.parentElement.remove();
    } else {
        // otherwise just hide it
        panel.parentElement.classList.add('hide');               
    }
}

function generateLink(page){
   // if there's answers stored
   if (currentState.answered.length !== 0 || typeof dataToPass.tally === 'object'){
       if (page === 'results'){
          var saveLink = `${thisEnv}/#results?`;
           
           // for each tallied category
           for (key in dataToPass.tally){
          
               let thisAnswerRef;
               // for each category reference
               for (key2 in currentState.catRefLib){
                   // if the tallied category name is in the category reference library as a value
                   if (key === currentState.catRefLib[key2]){
                       // connect the short reference name with the tallied value
                       thisAnswerRef = `${key2}${dataToPass.tally[key]}`;
                    } else {
                      // didn't match
                  }
               }
               
                // add the ref-tally to the link
                saveLink += thisAnswerRef;

           }
        
       } else {
           var saveLink = `${thisEnv}/#survey?`;           
           for (var a = 0; a < currentState.answered.length; a++){
               // each answer in the array has category name ([0] and [1], question number in that category [2], answer number in that question [3] and points for that answer [4]
               // not all questions will have been answered
               // change the category name to a shorter ref

               catBits = currentState.answered[a].split('-');

               catName = `${catBits[0]}-${catBits[1]}`;

               let thisAnswerRef;

               // for each of the keys
                  for(key in currentState.catRefLib) {
                      // if the name matches
                    if(currentState.catRefLib[key].indexOf(catName)!=-1) {
                        // use the key plus question and answer numbers to create the link
                      thisAnswerRef = key+catBits[2]+catBits[3];
                    }
                  }
               saveLink += thisAnswerRef;
           }
       }
       return saveLink;
   } else {
        return false;
    }   
}

