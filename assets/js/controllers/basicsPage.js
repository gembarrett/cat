controllers.basicsPage = function(data, params){
  var basicsContent = templates.how(data);
  basicsContent += templates.legal(data);
  basicsContent += templates.team(data);
  utils.render('page', basicsContent, params);
};
