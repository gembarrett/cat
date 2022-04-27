templates.legal = function(data){
  var content = `<div id="legal" class="format">
                  <h1 class="title">`+data.legal.title+`</h1>`;

  content = parseContent(data.legal.content, content, 'salford-text');

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
