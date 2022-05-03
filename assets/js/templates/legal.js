templates.legal = function(data){
  var content = `<div id="legal" class="basics">
                  <div class="bg-yellow format">
                    <div class="basics-head contain-75">
                      <h2 class="title"><span>`+data.legal.title+`</span>`+data.legal.subtitle+`</h2>
                      <img src="/assets/images/2-header.png" />
                    </div>
                  </div>`;

  content = parseContent(data.legal.content, content, 'salford-text');

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
