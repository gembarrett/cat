controllers.legalPage = function(data, params){
  var legalContent = templates.legal(data);
  document.querySelector('#page').classList.remove('survey');
    legalContent += templates.overlay(data.ui.save, 'resume');
  utils.render('page', legalContent);
};
