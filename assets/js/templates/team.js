templates.team = function(data){
  var content = `<div id="team" class="basics">
                    <div class="bg-brown format">
                      <div class="basics-head contain-75">
                        <h2 class="title">`+data.team.title+`</h2>
                        <img src="/assets/images/1-header.png" />
                      </div>
                    </div>
                    <div class="salford-text">`;

  for (var t = 0; t < data.team.content.length; t++) {
    content += `<p><span class="salford-bold">`+data.team.content[t].name+`</span>`+ data.team.content[t].p+`</p>`;
  }

  content += `</div><button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
