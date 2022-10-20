controllers.homePage = function(data, params){
  var homeContent = templates.hero();
  homeContent += templates.how(data);
  homeContent += templates.legal(data);
  homeContent += templates.team(data);
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', homeContent);
};
