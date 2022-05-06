templates.team = function(data){
  var content = `<div id="team" class="basics">
                    <div class="format bg-brown">
                      <div class="basics-head contain-70">
                        <h2 class="title"><span>`+data.team.title+`</span>`+data.team.subtitle+`</h2>
                        <img src="/assets/images/1-header.png" />
                      </div>
                    </div>
                    <div class="people contain-70 salford-text">`;

  // put team.content into an array
  var team = [];
  var teamContent = '';
  for (var t = 0; t < data.team.content.length; t++) {
    team.push(data.team.content[t]);
  }

  // this countdown (rather than count up) is deliberate
  for (var r=team.length; r>0; r--) {
    // choose random element from array
    const rando = team[Math.floor(Math.random() * team.length)];
    // add img, span name and p for that element
    teamContent += `<div class="person">
                      <div class="inner">
                        <img src="/assets/images/`+rando.ref+`.png" />
                        <p><span class="salford-bold">`+rando.name+`</span>`+rando.p+`</p>
                      </div>
                      <div class="borders">
                        <div class="brown"></div>
                        <div class="grey"></div>
                      </div>
                    </div>`;
    // remove ref from array
    team = team.filter(person => person.ref !== rando.ref);
  }

  // add the randomised list of team members to the page
  content += teamContent + `<button class="btn btn-prim title format right"><a href="/#build">`+data.ux.content[0].text+`</a></button></div></div>`;
  return content;
};
