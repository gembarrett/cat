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

// create the answer elements
function buildAnswers(count, answers, storage){
  var id = 'q-'+count;
  for (var an = 0; an < answers.length; an++){
    storage += `<div class="form-el">
      <input type="radio" id="`+id+`-a-`+an+`" name="`+id+`-el">
      <label for="`+id+`-a-`+an+`">`+answers[an].a+`</label>
    </div>`;
  }
  return storage;
}

function buildProgressBar(){
  // add 6 circles
  var progress = `<div class="p-circ"></div>`;
  // give each circle a border but only the first has a fill class
  // when user scrolls to a question whose ID is divisble by 4
  // then add a fill class to the next circle
  // after three circle have fill class, show the halfway-point content break
  return progress;
}

// build the page elements

var content = "";
var c = 0; // this counts the total number of questions that have been added
// this route creates three distinct sections which are hidden and shown. Another alternative is to only change the question container and update the image sources, progress bar background to reflect section change.
for (var level = 0; level < sections.length; level++){
  content += `<div class="outer lvl-`+[level+1]+ (level === 0 ? ` current">` : `">`);
  content += `<div class="left-col">
    <div class="level">
      <div class="inner">
        <h1>`+Object.keys(textStore.qs[0])[0]+`</h1>
        <img class="number" src="assets/images/`+[level+1]+`-level.png">
        <img src="assets/images/`+[level+1]+`-block.png">
      </div>
      </div>
      <img src="assets/images/`+[level+1]+`-horizontal.png">
    </div>`;
  content += `<div class="content box">
      <div class="progress bg-brown">`;
// add 6 circles
// give each circle a border but only the first has a fill class
// when user scrolls to a question whose ID is divisble by 4
// then add a fill class to the next circle
// after three circle have fill class, show the halfway-point content break
        // `<progress max="`+questionsList.length+`" value="0"></progress>`
  content += buildProgressBar();
  content += `</div>`;
  for (var el = 0; el < sections[level].length-1; el++) { // add the question to the parent container
      content += `<form id="q-`+c+`" class="questionContent salford-text">
        <h2>`+data[c].q+`</h2>
        <div class="answers">`;
      content = buildAnswers(c, data[c].answers, content);
      content += `</div></form>`;
      c++;
    } // end of the loop that adds questions
    content += `</div></div>`;
  // content += '<button id="submitAnswers" onclick="handleSubmit()" class="nextButton btn btn-prim" title="Click or press Enter to go to the next level">Next</button>';
}
return content;
};
