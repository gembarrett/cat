controllers.legalPage = function(data, params){
  var legalContent = templates.legal(data.legal);
  document.querySelector('#page').classList.remove('survey');
    // set up the overlays
    legalContent += templates.overlay(data.save, 'resume');

    utils.render('page', legalContent, 'legal');
};
