templates.legal = function(data){
  var content = `<div id="legal" class="basics">
                  <div class="bg-yellow format">
                    <div class="basics-head contain-70">
                      <h2 class="title"><span>`+data.legal.title+`</span>`+data.legal.subtitle+`</h2>
                      <img src="/assets/images/2-header.png" />
                    </div>
                  </div>`;

  content += '<div class="salford-text contain-70">';

  content = parseContent(data.legal.content, content);

  content += `<button class="btn btn-prim title format right">`+data.ux.content[0].text+`</button></div></div>`;
  return content;
};
