function copyUrl(){
  try {
    // does copy work here?
    if (document.queryCommandSupported('copy')) {
      var copyText = document.querySelector('#snapshotLink');
      copyText.select();
      document.execCommand('copy');
    } else {
      window.alert('Sorry, this tool can\'t access your clipboard right now');
    }
  } catch (error){
    console.log(error);
  }
}

function getSnapshotURL(){
  var snapshotUrl = thisEnv+"/#b-"+catv+"-p";
  var qNo = "0";
  for (var i = 0; i < currentState.answers.length; i++){
    // if we're on the same question
    if (qNo === currentState.answers[i].q){
      // add the a value to rest of that answer group
      snapshotUrl += currentState.answers[i].a;
    } else {
      // get the new question number
      qNo = currentState.answers[i].q;
      // start new answer group, format appropriately if it's the first answer
      snapshotUrl += snapshotUrl[snapshotUrl.length - 1] === "p" ? "?" : "_";
      // add the question number and first answer for that question
      snapshotUrl += qNo + "-" + currentState.answers[i].a;
    }
  }
  // get the input box and update the value
  document.querySelector('#snapshotLink').value = snapshotUrl;
  // show the link
  document.querySelector('#snapshotGroup').classList.remove('hidden');
}
