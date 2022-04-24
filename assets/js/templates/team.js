templates.team = function(data){
  var content = `
    <div id="team" class="format">
      <h1 class="title">`+data.team.title+`</h1>
      <p>`+data.team.content[0].name+`<p>
      <p>`+data.team.content[0].p+`<p>

      <p>`+data.team.content[1].name+`<p>
      <p>`+data.team.content[1].p+`<p>

      <p>`+data.team.content[2].name+`<p>
      <p>`+data.team.content[2].p+`<p>

      <p>`+data.team.content[3].name+`<p>
      <p>`+data.team.content[3].p+`<p>

      <p>`+data.team.content[4].name+`<p>
      <p>`+data.team.content[4].p+`<p>

      <p>`+data.team.content[5].name+`<p>
      <p>`+data.team.content[5].p+`<p>
      <button class="btn btn-prim title format">`+data.ux.content[0].text+`</button>
    </div>
    `;
    return content;
};
