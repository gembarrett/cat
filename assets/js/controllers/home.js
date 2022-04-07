controllers.homePage = function(data, params){
  var homeContent = templates.intro();
  homeContent += '<div class="contain">';
  homeContent += templates.homeSection(en_oc.proj);
  homeContent += templates.homeSection(en_oc.team);
  homeContent += templates.homeSection(en_oc.process);
  homeContent += templates.homeSection(en_oc.users);
  homeContent += templates.homeSection(en_oc.legal);
  homeContent += templates.homeSection(en_oc.start);
  homeContent += '</div>';
  document.querySelector('body').classList.remove('buildPage');
  utils.render('page', homeContent);
};
