controllers.homePage = function(data, params){
  var homeContent = templates.hero(data.about);
  homeContent += templates.how(data.process);
  homeContent += templates.team(data.team);
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', homeContent);
};
