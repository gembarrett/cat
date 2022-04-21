controllers.homePage = function(data, params){
  var homeContent = templates.hero();
  homeContent += templates.trio();
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', homeContent);
};
