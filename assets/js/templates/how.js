templates.how = function(data, params){

  var content = `<div id="how" class="basics contain">
                      <h2 class="title">`+data.process.title+`</h2>`;


  content = parseContent(data.process.content, content);

  content += `<button class="btn btn-prim title right"><a href="/#survey">`+data.process.cta+`</a></button></div>`;
  return content;
};
