templates.questionsTemplate = function(menuData, questionData, additionalData, params){

var intro = '<div id="survey-intro"><img src="assets/images/survey-image.png" /><h1>'+additionalData.survey.title+'</h1><div id="intro-p">';
intro = parseContent(additionalData.survey.content, intro);
intro += `<span><a href="mailto:buildteam@fordfoundation.org">buildteam@fordfoundation.org</a></span></div>`;
intro += '<div class="dots"><span class="circle"></span><span class="circle"></span><span class="circle"></span><span class="circle"></span></div></div>';

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
    questionEls += `<div class="${items[i].trigger}`;
    // make the first subsection active
    if (counter === 1){
        questionEls += ` active subgroup">`;
    } else {
        questionEls += ` subgroup">`;
    }
    if (items[i].trigger === "your-org") {
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
    element += `<fieldset `+(el[e].reqd === "true" ? `class="required">` : `>`);
    element += `<legend>`+counter+`. `+el[e].qText;

    // is there error text to be included here
    if (typeof el[e].err === 'string'){
        element += `<span id="error-${ref}" class="hide">`+el[e].err+`</span>`;
    }
    element += `</legend>`;
    
    element += buildAnswers(ref, el[e].input, el[e].reqd, el[e].answers);
    element += `</fieldset>`;
    if (el[e].reqd === "true"){
        currentState.totalQs++;
    }
    counter++;
  }
  return element;
}

function buildAnswers(r, type, req, aArr){
  var answers = "";
  for (var a = 0; a< aArr.length; a++){
    id = r +`-`+ a;
//    answers += `<span><input type="${type}" data-pts="${aArr[a].pts}" id="${id}" name="${r}" ` + ;
    answers += `<span><input type="${type}" data-pts="${aArr[a].pts}" id="${id}" name="${r}" ` + (req === "true" ? `required ` : ``) + (aArr[a].ifyes === true ? `ifyes="true">` : `>`);
    answers += `<label for="${id}">${aArr[a].aText}</label></span>`;
  }
  return answers;
}
    
// build the page elements
var content = "";
// Left column needs to contain all the category titles
var cats = buildSectionMenu(menuData);
content += `<div class="contain-md"><div class="left-col add-shadow submenu">`+cats+`</div>`;
// Right column needs to contain all the questions
var counter = 1; // not keen on this being a global variable
var survey = buildSurvey(questionData);
var progressElement = `<div class="progressBar"><progress id="survey-progress" max="`+currentState.totalQs+`" value="0"></progress><label for="survey-progress">`+additionalData.survey.ux.nav.progress[0]+`<span>0</span>%`+additionalData.survey.ux.nav.progress[1]+`</label></div>`;
var progressButtons = `<div id="progressButtons" class="first-start"><button class="back">`+additionalData.survey.ux.nav.prev+`</button><button class="forward">`+additionalData.survey.ux.nav.next+`</button><button class="submit">`+additionalData.survey.ux.nav.submit+`</button></div>`;

// TODO: split things up so that the submenu and questions are compiled in separate template files
    content += `<div class="right-col"><div class="overlap-col"><button class="later save-btn add-shadow">`+additionalData.save.copy.content.resume.label+`</button><div class="rhombus r top"></div><div class="rhombus l mid"></div><div class="rhombus r base"></div></div>`;
    content += `<div class="contain-survey add-shadow"><form>`+survey+`</form>`;
    content += progressButtons+progressElement+`</div></div>`;

return content;
};
