templates.questionsTemplate = function(data, params){
  // if there's a snapshot url then build the currentState array
  // TODO: add error catching
  if (params){
    // get the answer groups
    var snapQs = params[0].split("_");
    var count = 0;
    // for each answer group
    for (var s = 0; s < snapQs.length; s++){
      snapQ = snapQs[s].split("-")[0];
      snapA = snapQs[s].split("-")[1];
      // if there's multiple answers for this question
      if (snapA.length > 1){
        snapA = snapA.split("");
        for (var a = 0; a < snapA.length; a++){
          // get each answer and add it to the currentState array
          currentState.answers[count] = {
            q:snapQ,
            a:snapA[a]
          }
          count++;
        }
      } else {
        // if there's just one (radio) then add that answer
        currentState.answers[count] = {
          q:snapQ,
          a:snapA
        }
        count++;

      }
    }
  }
  // build the page elements
  var content = `
      <div class="level">
        <div class="inner">
            <h1 class="zup">Level</h1>
            <img class="number" src="assets/images/1-level.png">
            <img src="assets/images/1-block.png">
        </div>
        <img src="assets/images/1-horizontal.png">
      </div>
      <div class="box">
        <div class="progress"><progress max="`+questionsList.length+`" value="0"></progress></div>`;

  for(var i = 0; i < questionsList.length; i++) {
      var question = data[i];
      var currentQ = "q-"+i;
      // create the start of the form
      content += `<form id="`+currentQ+ `" class="questionContent salford-text`+ (i !== 0 ? '">' : ' current">');
      // if it's a question
      // if (question.isQ) {
        var panel = "";
        // add the question
        content += '<h1>' + question.q + '</h1>';

        content += '<div class="answers-container">';

        // add the answers
        for (var j = 0; j < question.answers.length; j++){
           // premake the id and name
           thisID = 'id="' +currentQ+ "-a-"+ j+ '"';
           thisName = 'name="' +currentQ+  '-el"';
           // if this is an input field then create the label
           thisLabel = '<label for="' +currentQ+ "-a-"+ j+ '">';
           thisLabel += question.answers[j].a+ '</label>';
           // start the form
           content += '<div class="form-el">';

             // find a match for this question and answer object - used for managing selections, NOT sure if needed, keep for now
             // var qMatch = currentState.answers.filter(o => (o.q === question.id.split('q')[1] && o.a === String(j)));

             // if there's a previous answer for this
             // if ((qMatch !== 'undefined' && qMatch.length > 0)){
             //   // add a checked element
             //   content += '<input type="' +question.answers[j].type+ '"' +thisID+thisName+ ' checked="true">' + thisLabel;
             // } else {
               // otherwise make an unchecked one
               content += '<input type="radio"' +thisID+thisName+ '>' + thisLabel;
           // end the form
           content += '</div>';
         }
      // } else {
      //   // add the title and paragraphs
      //   content += '<h1>' + question.q + '</h1>';
      //   console.log(question);
      //   content = formatArray(question.answers, content);
      // }
      // if its the first question
      // no closing div, just closing form
      content += '</div></form>';
  }
  pause = '<div><button title="Click to get a snapshot link you can use to finish this process later. Using this link will pre-select your current answers. Note that no text answers are included in the snapshot" id="snapshotPolicy" disabled class="btn btn-tert" title="Click or press U to get a URL for returning to this process later">Get snapshot</button><div id="snapshotGroup" class="hidden"><div><input id="snapshotLink" type="text" readonly value="No snapshot available"><i title="Click to copy this snapshot link" id="copyBtn" class="fas fa-copy"></i></div><p>Need to pause this process? Use your snapshot link to pre-select your answers on your return. Note that no text entries are included in this snapshot, and this link is not stored.</p></div></div>';
  content += '<div class="btn-wrap wrap-r">'+pause+'<div><button disabled id="previewPolicy" class="previewButton btn btn-seco" title="Click or press P to view your policy preview">Preview</button><button id="submitAnswers" onclick="handleSubmit()" class="nextButton btn btn-prim" title="Click or press Enter to go to the next question">Next</button></div></div></div>';
  return content;
};
