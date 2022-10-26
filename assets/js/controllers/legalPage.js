controllers.legalPage = function(data, params){
  var legalContent = templates.legal(data);
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', legalContent);
};
