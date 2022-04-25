templates.team = function(data){
  var content = `<div id="team" class="format">
                <h1 class="title">`+data.team.title+`</h1>`;

  for (var t = 0; t < data.team.content.length; t++) {
    content += `<p><span>`+data.team.content[t].name+`</span>`+ data.team.content[t].p+`</p>`;
  }

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
