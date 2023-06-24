function copyUrl(){
  try {
    // does copy work here?
    if (document.queryCommandSupported('copy')) {
      var copyText = document.querySelector('#snapshotLink');
      copyText.select();
      document.execCommand('copy');
    } else {
      window.alert('Sorry, CAT can\'t access your clipboard right now');
    }
  } catch (error){
    console.log(error);
  }
}

function showOverlay(overlayToShow){
    
}

function generateLink(){
   // if there's answers stored
   if (currentState.answered.length !== 0){
       var saveLink = `${thisEnv}/#re-`;
       curr = "";
       for (var a = 0; a < currentState.answered.length; a++){
           // each answer in the array has category name ([0] and [1], question number in that category [2], answer number in that question [3] and points for that answer [4]
           // not all questions will have been answered
           // change the category name to a shorter ref
           catBits = currentState.answered[a].split('-');
           // this must match subCatRef creation in buildCatRefLib()
           catRef = catBits[0][0]+catBits[0][1]+catBits[1][0];
           // if this catRef is not the same as the previous
           if (curr !== catRef){
                // update it
                curr = catRef;
               // then just add the question and answer
                catRef += catBits[2]+catBits[3];

           } else {
               // if we're on the same category, don't repeat the ref
               catRef = `-${catBits[2]}${catBits[3]}`;
           }
           
           // keep question and answer numbers
           saveLink += catRef;
       }
       console.log(saveLink);
   }
    else {
        console.log('Not enough answers to generate link');
    }
}
    


// TODO: snapshot link should be generated when Save & Resume Later button is clicked
function getSnapshotURL(){
  var snapshotUrl = thisEnv+"/#b-"+catv+"-p";
  // since questions are now grouped, it doesn't matter which question is current
  var qNo = "0";
  for (var i = 0; i < currentState.answers.length; i++){
    // if we're on the same question
    if (qNo === currentState.answers[i].q){
      // add the a value to rest of that answer group
      snapshotUrl += currentState.answers[i].a;
    } else if (isCheckableQ(parseInt(currentState.answers[i].q))) {
      // get the new question number
      qNo = currentState.answers[i].q;
      // start new answer group, format appropriately if it's the first answer
      snapshotUrl += snapshotUrl[snapshotUrl.length - 1] === "p" ? "?" : "_";
      // add the question number and first answer for that question
      snapshotUrl += qNo + "-" + currentState.answers[i].a;
    } else {
      // tell the user why they're not getting what they expect
      console.log('either no answers or no questions');
    }
  }
  // get the input box and update the value
  document.querySelector('#snapshotLink').value = snapshotUrl;
}

