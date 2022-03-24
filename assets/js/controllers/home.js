controllers.homePage = function(data, params){
  var homeContent = templates.intro();
  homeContent += '<div class="contain">';
  homeContent += templates.homeSection(oc.proj);
  homeContent += templates.homeSection(oc.team);
  homeContent += templates.homeSection(oc.process);
  homeContent += templates.homeSection(oc.users);
  homeContent += templates.homeSection(oc.legal);
  homeContent += templates.homeSection(oc.start);
  homeContent += '</div>';
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', homeContent);
};
