controllers.questionPage = function(data, params){
  // document.getElementById('bu').classList.add('active');
  document.querySelector('body').classList.add('buildPage');
  window.scrollTo(0,0);
  console.log(data);

  var menuData = [];
  var questionData = [];

  function getSubsections(items){
    var list = [];
    for (var l = 0; l<items.length; l++){
      var sub = {
        "trigger": items[l].name,
        "title": items[l].subtitle
      };
      list.push(sub);
    }
    return list;
  }

  function getQuestions(list) {
    var questions = [];

    return questions;
  }

  for (var i=0; i<data.length;i++){
    subsList = getSubsections(data[i].subs);
    var menuItem = {
      'trigger': data[i].section,
      'name': data[i].title,
      'subs': subsList
    }
    menuData.push(subsList);
  }

  console.log(menuData);
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
