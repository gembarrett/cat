templates.how = function(data, params){

  var content = `<div id="how" class="basics contain">
                      <h2 class="title">`+data.title+`</h2>`;


  content = parseContent(data.content, content);

  content += `<button class="btn btn-prim title right"><a href="/#survey">`+data.cta+`</a></button></div>`;
  return content;
};
