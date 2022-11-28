templates.questionsTemplate = function(menuData, params){
  // UNCOMMENT WHEN SNAPSHOT IS RELEVENT: if there's a snapshot url then build the currentState array
  // TODO: add error catching
  // if (params){
  //   // get the answer groups
  //   var snapQs = params[0].split("_");
  //   var count = 0;
  //   // for each answer group
  //   for (var s = 0; s < snapQs.length; s++){
  //     snapQ = snapQs[s].split("-")[0];
  //     snapA = snapQs[s].split("-")[1];
  //     // if there's multiple answers for this question
  //     if (snapA.length > 1){
  //       snapA = snapA.split("");
  //       for (var a = 0; a < snapA.length; a++){
  //         // get each answer and add it to the currentState array
  //         currentState.answers[count] = {
  //           q:snapQ,
  //           a:snapA[a]
  //         }
  //         count++;
  //       }
  //     } else {
  //       // if there's just one (radio) then add that answer
  //       currentState.answers[count] = {
  //         q:snapQ,
  //         a:snapA
  //       }
  //       count++;
  //     }
  //   }
  // }

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

function addSubmitHandler() {
  document.getElementById('submitAnswers').addEventListener('click', function() {
    handleSubmit();
  });
}


// build the page elements
var content = "";
var cats = [];
// Left column needs to contain all the category titles
content += `<div class="left-col"><div>`;
console.log(menuData);
// Object.entries(textStore.rs["content"]).forEach(([key, value]) => {
//   content += `<p>`+value["title"]+`</p>`;
//   // use this later to find the relevant questions
//   cats.push(key);
// });
content += `</div></div>`;
// Right column needs to contain all the questions



// this route creates three distinct sections which are hidden and shown. Another alternative is to only change the question container and update the image sources, progress bar background to reflect section change.
// for (var level = 0; level < sections.length; level++){
//   content += `<div class="outer lvl-`+[level+1]+ (level === 0 ? ` current">` : `">`);
//
//   content += `<div class="right-col"><div class="content">`;
//   midpoint = Math.round(sections[level].length/2);
//   for (var el = 0; el < sections[level].length-1; el++) { // add the question to the parent container
//       content += `<form id="q-`+c+`" class="questionContent`;
//       if (el === midpoint){
//         content += ` midway">`;
//       } else {
//         content += `">`
//       }
//       content += `<h2 class="">`+data[c].q+`</h2>
//         <div class="answers ">`;
//       content = buildAnswers(c, data[c].answers, content);
//       content += `</div></form>`;
//       c++;
//     } // end of the loop that adds questions
//     content += `</div></div>`;
//     content += `<div class="action"><button id="submitAnswers" class="nextButton  btn btn-prim" title="Click or press Enter to go to the next level">`+textStore.oc.ux.content[2].text+`</button></div></div>`; // closes the content box
// }

return content;
};
