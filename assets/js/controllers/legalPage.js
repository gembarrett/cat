controllers.legalPage = function(data, params){
  var legalContent = templates.legal(data);
  document.querySelector('#page').classList.remove('survey');
  utils.render('page', legalContent);
};
