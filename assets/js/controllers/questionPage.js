controllers.questionPage = function(data, params){
  // document.getElementById('bu').classList.add('active');
  document.querySelector('body').classList.add('buildPage');
  window.scrollTo(0,0);

  var menuData = [];
  var questionData = [];

  function getSubsections(items){
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
      var qObjs = getQuestions(sub.trigger, items[l].questions);
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
        "trigger": sub,
        "q-text": list[j].q,
        "reqd": list[j].required,
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
        "a-text": question.answers[a].a,
        "pts-area": area,
        "pts": question.answers[a].pts
      }
      answers.push(answerItem);
    }
    return answers;
  }


  for (var i=0; i<data.length;i++){
    var surveyData = getSubsections(data[i].subs);
    var menuItem = {
      'trigger': data[i].section, // might not be needed if we use <detail> to group the menu items with subs
      'name': data[i].title,
      'subs': surveyData.subs
    }
    menuData.push(menuItem);
    questionData.push(surveyData.questions);
  }
  console.log(menuData);
  console.log(questionData);



  // gather the section titles
    // gather their subsection titles
    // gather area

  // gather areas
    // gather questions data



  // // queue up all the questions in this section
  // // for each of the sections
  // for (var i = 0; i < sections.length; i++){
  //   // get each of the questions
  //   for (var j = 0; j < sections[i].length; j++){
  //     var el = sections[i][j];
  //     var item = {
  //       's': i,
  //       'q': el.q,
  //       'area': el.area,
  //       'answers': el.answers,
  //     };
  //     templateContext.push(item);
  //   }
  // }

  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(menuData, questionData, params);
  utils.render('page', questionContainer);
};
