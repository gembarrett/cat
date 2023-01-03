controllers.homePage = function(data, params){
  var homeContent = templates.hero(data.header);
  homeContent += `<div class="gather home">`;
  homeContent += templates.about(data.intro);
  homeContent += templates.tweets(data.intro.title);
  homeContent += templates.how(data.process);
  homeContent += `</div>`;
  homeContent += `<div class="cta"><button class="btn btn-prim title right"><a href="/#survey">`+data.process.cta+`</a></button></div>`
  homeContent += templates.team(data.team);
  document.querySelector('#page').classList.remove('survey');
  utils.render('page', homeContent);
};
