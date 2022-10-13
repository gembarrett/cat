controllers.basicsPage = function(data, params){
  document.querySelector('body').classList.remove('buildPage');
  var basicsContent = templates.how(data);
  basicsContent += templates.legal(data);
  basicsContent += templates.team(data);
  utils.render('page', basicsContent, params);
};
