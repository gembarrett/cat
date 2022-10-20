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
      window.location.href="/#policy";
    } else {
      if (window.confirm("Oh no! It seems you haven't answered enough questions. Start again?")) {
        location.reload(false);
      } else {
        window.location.href = "/";
      }
    }
  }
}

// function to add formatting to array
function formatArray(arr, storage) {
  if (Array.isArray([arr])) {
    for (var i=0; i<arr.length; i++) {
      storage += '<p>'+arr[i] + '</p>';
    }
    return storage;
  }
}


function parseContent(data, array){
  for (var p = 0; p < data.length; p++){
    if (data[p].items !== undefined) {
      array += `<ul>`;
      for (var l = 0; l < data[p].items.length; l++) {
        array += `<li>`+data[p].items[l]+`</li>`;
      }
      array += `</ul>`;
    } else {
      array += `<p>`+data[p]+`</p>`;
    }
  }
  return array;
}
