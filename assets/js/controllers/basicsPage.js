controllers.basicsPage = function(data, params){
  var basicsContent = templates.how();
  basicsContent += templates.legal();
  basicsContent += templates.team();
  console.log(params);
  utils.render('page', basicsContent, params);
};
