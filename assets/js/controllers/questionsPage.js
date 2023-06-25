controllers.questionsPage = function(data, params){
  // document.getElementById('bu').classList.add('active');
  document.querySelector('#page').classList.add('survey');
  window.scrollTo(0,0);

  var menuData = [];
  var questionData = [];
    var goTo = "";
    // if there's a preset destination subsection
    if (typeof data.go === 'string'){
        goTo = data.go;
    }

  function getSubsections(section, items){
    // create an object for holding the questions and the subsections
    var list = {
      "questions": [],
      "subs": []
    };
    // loop through the subsections
    for (var l = 0; l<items.length; l++){
      // create a temporary sub object
      var sub = {
        "trigger": items[l].name,
        "title": items[l].subtitle
      };
      // push that sub object to the list.subs object
      list.subs.push(sub);
      // get the questions for this subsection, associate them with the sub trigger
      var qObjs = {
        "section": section,
        "trigger": sub.trigger,
        "title": sub.title,
        "questions": getQuestions(sub, items[l].questions)
      }
      // push this array of questions to the list.questions object
      list.questions.push(qObjs);
    }
    return list;
  }

  function getQuestions(sub, list) {
    var questions = [];
    for (var j = 0; j <list.length; j++) {
      var theseAnswers = getAnswers(list[j].area, list[j]);
      var questionItem = {
        "trigger": sub.trigger,
        "qText": list[j].q,
          "err": list[j].errorText,
        "reqd": list[j].required,
        "input": list[j].type,
        "answers": theseAnswers
      }
      questions.push(questionItem);
    }
    return questions;
  }

  function getAnswers(area, question){
    var answers = [];
    for (var a=0; a<question.answers.length; a++){
      var answerItem = {
        "aText": question.answers[a].a,
        "ptsArea": area, // might be unnecessary
        "pts": question.answers[a].pts
      }
      answers.push(answerItem);
    }
    return answers;
  }

  for (var i=0; i<data.qs.length;i++){
    var surveyData = getSubsections(data.qs[i].title, data.qs[i].subs);
    var menuItem = {
      'trigger': data.qs[i].section,
      'name': data.qs[i].title,
      'subs': surveyData.subs
    }
    menuData.push(menuItem);
    questionData.push(surveyData.questions);
  }
    
  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(menuData, questionData, data.ui, params);
    
    // set up the overlays
    questionContainer += templates.overlay(data.ui.save, 'resume');

    // if we're on a device with screen < 800px then add the mobile overlay too
    if (window.innerWidth < '800'){
        questionContainer += templates.overlay(data.ui.survey.ux.mobile, 'mobile');
    }

  utils.render('page', questionContainer, goTo);
};
