templates.team = function(data){
  var content = `<div id="team" class="home">
                    <h1>`+data.title+`</h1><div class="people">`;

  // put team.content into an array
  var team = [];
  var teamContent = '';
  for (var t = 0; t < data.content.length; t++) {
    team.push(data.content[t]);
  }

  // this countdown (rather than count up) is deliberate
  for (var r=team.length; r>0; r--) {
    // choose random element from array
    const rando = team[Math.floor(Math.random() * team.length)];
    // add img, span name and p for that element
    teamContent += `<div class="person">
                      <img src="./assets/images/`+rando.ref+`.png" />
                      <p><span class="person-name">`+rando.name+`</span>`+rando.text+`</p>
                    </div>`;
    // remove ref from array
    team = team.filter(person => person.ref !== rando.ref);
  }

  // add the randomised list of team members to the page
  content += teamContent + `</div></div>`;
  return content;
};
