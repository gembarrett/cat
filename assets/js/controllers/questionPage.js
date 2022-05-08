controllers.questionPage = function(data, params){
  // document.getElementById('bu').classList.add('active');
  // add class to body to change nav-start/scroll
  document.querySelector('body').classList.add('buildPage');
  var templateContext = [];
  window.scrollTo(0,0);
  // queue up all the questions in this section
  // for each of the sections
  for (var i = 0; i < sections.length; i++){
    // get each of the questions
    for (var j = 0; j < sections[i].length; j++){
      var el = sections[i][j];
      var item = {
        's': i,
        'q': el.q,
        'area': el.area,
        'answers': el.answers,
      };
      templateContext.push(item);
    }
  }

  // put that data into the template and return it for rendering
  var questionContainer = templates.questionsTemplate(templateContext, params);
  utils.render('page', questionContainer);
};
