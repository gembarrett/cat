templates.team = function(data){
  console.log(data);
  var text = en_oc;
  var content = `
    <div id="team" class="format">
      <h1 class="title">`+text.team.title+`</h1>
      <p>`+text.team.content[0].name+`<p>
      <p>`+text.team.content[0].p+`<p>

      <p>`+text.team.content[1].name+`<p>
      <p>`+text.team.content[1].p+`<p>

      <p>`+text.team.content[2].name+`<p>
      <p>`+text.team.content[2].p+`<p>

      <p>`+text.team.content[3].name+`<p>
      <p>`+text.team.content[3].p+`<p>

      <p>`+text.team.content[4].name+`<p>
      <p>`+text.team.content[4].p+`<p>

      <p>`+text.team.content[5].name+`<p>
      <p>`+text.team.content[5].p+`<p>
      <button class="btn btn-prim title format">`+text.ux.content[0].text+`</button>
    </div>
    `;
    return content;
};
