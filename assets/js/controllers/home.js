controllers.homePage = function(data, params){
  var homeContent = templates.hero(data.header);
  homeContent += `<div class="gather home">`;
  homeContent += `<div id="intro-container">`;
  homeContent += templates.about(data.intro);
  homeContent += templates.how(data.process);
  homeContent += templates.who(data.users);
  homeContent += `</div>`;
  homeContent += templates.tweets(data.intro.title);
  homeContent += `</div>`;
  homeContent += `<div class="cta"><button class="btn btn-prim title right"><a href="/#survey">`+data.process.cta+`</a></button></div>`
  homeContent += templates.team(data.team);
  document.querySelector('#page').classList.remove('survey');
  utils.render('page', homeContent);
};
