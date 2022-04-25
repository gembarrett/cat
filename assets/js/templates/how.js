templates.how = function(data, params){

  var content = `<div id="how" class="format">
                  <h1 class="title">`+data.process.title+`</h1>`;

  content = parseContent(data.process.content, content);

  content += `<button class="btn btn-prim title format">`+data.ux.content[0].text+`</button></div>`;
  return content;
};
