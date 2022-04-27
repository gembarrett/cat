templates.how = function(data, params){

  var content = `<div id="how" class="format">
                  <div class="basics-head">
                    <h1 class="title">`+data.process.title+`</h1>
                    <img src="/assets/images/3-header.png" />
                  </div>`;

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button>`;

  content = parseContent(data.process.content, content, 'salford-text');

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
