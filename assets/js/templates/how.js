templates.how = function(data, params){

  var content = `<div id="how" class="basics">
                  <div class="bg-green format">
                    <div class="basics-head contain-70">
                      <h2 class="title"><span>`+data.process.title+`</span>`+data.process.subtitle+`</h2>
                      <img src="/assets/images/3-header.png" />
                      </div>
                    </div>`;

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button>`;

  content = parseContent(data.process.content, content, '"salford-text contain-70"');

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
