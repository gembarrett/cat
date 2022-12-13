templates.questionsTemplate = function(menuData, questionData, params){
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


function addSubmitHandler() {
  document.getElementById('submitAnswers').addEventListener('click', function() {
    handleSubmit();
  });
}

function buildSectionMenu(sections) {
  var menu = "";
  for (var s = 0; s < sections.length; s++) {
    menu += `<div id="`+sections[s].trigger+`"><h2>`+sections[s].name+`</h2><ul>`;
    menu += buildSubMenu(sections[s].subs);
    menu += `</ul></div>`;
  }
  return menu;
}

function buildSubMenu(subsections) {
  var subMenu = "";
  for (var t = 0; t < subsections.length; t++) {
    subMenu += `<li id="`+subsections[t].trigger+`">`+subsections[t].title+`</li>`;
  }
  return subMenu;
}

function buildSurvey(qitems) {
  var theseQs = "";
  for (var q = 0; q < qitems.length; q++){ // 3 top-level sections
    theseQs += `<div class="group">`;
    // theseQs += `<p>`+qitems[q].title+`</p>`;
    theseQs += buildQuestions(qitems[q]);
    theseQs += `</div>`;
  }
  return theseQs;
}

// this puts together the groups of questions
function buildQuestions(items) {
  var questionEls = "";
  for (var i = 0; i < items.length; i++){
    questionEls += `<div class="`+items[i].trigger+`">`;
    questionEls += `<h3>`+items[i].section+`</h3>`;
    questionEls += `<h4>`+items[i].title+`</h4>`;
    questionEls += buildElements(items[i].questions);
    questionEls += `</div>`;
  }
  return questionEls;
}

// this puts together the question elements for the subsection
function buildElements(el){
  var element = "";
  for (var e=0; e< el.length; e++){
    var ref = el[e].trigger +`-`+e;
    element += `<fieldset>`;
    element += `<legend>`+counter+`. `+el[e].qText+`</legend>`;
    element += buildAnswers(ref, el[e].input, el[e].reqd, el[e].answers);
    element += `</fieldset>`;
    counter++;
  }
  return element;
}

function buildAnswers(r, type, req, aArr){
  var answers = "";
  for (var a = 0; a< aArr.length; a++){
    answers += `<input type="`+type+`" id="`+r+`" name="`+r+`">`;
    answers += `<label for="`+r+`">`+aArr[a].aText+`</label>`;
  }
  return answers;
}

// build the page elements
var content = "";
// Left column needs to contain all the category titles
var cats = buildSectionMenu(menuData);
content += `<div class="left-col submenu">`+cats+`</div>`;
// Right column needs to contain all the questions
var counter = 1; // not keen on this being a global variable but it'll do for now
var survey = buildSurvey(questionData);
content += `<div class="right-col"><form>`+survey+`</form></div>`;

return content;
};
