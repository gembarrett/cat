templates.questionsTemplate = function(menuData, questionData, additionalData, params){
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

var intro = '<div id="survey-intro"><img src="assets/images/survey-image.png" /><h1>'+additionalData.title+'</h1>';
intro = parseContent(additionalData.content, intro);
intro += '<div class="dots"><span class="circle"></span><span class="circle"></span><span class="circle"></span><span class="circle"></span></div></div>';

function addSubmitHandler() {
  document.getElementById('submitAnswers').addEventListener('click', function() {
    handleSubmit();
  });
}

function buildSectionMenu(sections) {
  var menu = "";
  for (var s = 0; s < sections.length; s++) {
    menu += `<div id="`+sections[s].trigger+`"`+(s === 0 ? `class="selected">` : `>`);
    menu += `<div class="subMenuTitle"><h4>`+sections[s].name+`</h4></div><ul>`;
    menu += (s === 0 ? buildSubMenu(sections[s].subs, true) : buildSubMenu(sections[s].subs, false));
    menu += `</ul></div>`;
  }
  return menu;
}

function buildSubMenu(subsections, first) {
  var subMenu = "";
  for (var t = 0; t < subsections.length; t++) {
    // if it's the first li being created then add class of "selected"
    if (first && (t === 0)) {
      subMenu += `<li class="selected" id="`;
    } else {
      subMenu += `<li id="`;
    }
    subMenu += subsections[t].trigger+`">`+subsections[t].title+`</li>`;
  }
  return subMenu;
}

function buildSurvey(qItems) {
  var theseQs = "";
  for (var q = 0; q < qItems.length; q++){ // 3 top-level sections
    theseQs += `<div class="group">`;
    theseQs += buildQuestions(qItems[q]);
    theseQs += `</div>`;
  }
  return theseQs;
}
    
// this puts together the groups of questions
function buildQuestions(items) {
  var questionEls = "";
  for (var i = 0; i < items.length; i++){
    questionEls += `<div class="`+items[i].trigger+ (counter === 1 ? ` active` : ``) +` subgroup">`;
    if (i === 0) {
        questionEls += intro;
    }
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
    answers += `<span><input type="`+type+`" id="`+r+`" name="`+r+`">`;
    answers += `<label for="`+r+`">`+aArr[a].aText+`</label></span>`;
  }
  return answers;
}

// build the page elements
var content = "";
// Left column needs to contain all the category titles
var cats = buildSectionMenu(menuData);
content += `<div class="contain-md"><div class="left-col add-shadow submenu">`+cats+`</div>`;
// Right column needs to contain all the questions
var counter = 1; // not keen on this being a global variable but it'll do for now
var survey = buildSurvey(questionData);


// TODO: split things up so that the submenu and questions are compiled in separate template files
content += `<div class="right-col add-shadow">`;
content += `<form>`+survey+`</form></div><button class="save-btn add-shadow">`+additionalData.ux.save.title+`</button>`;
content += `<img src="assets/images/rhombus-yellow.png"></div>`;

return content;
};
