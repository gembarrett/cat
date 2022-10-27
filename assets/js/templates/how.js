templates.how = function(data, params){

  var content = `<div id="how" class="basics contain">
                      <h2 class="title"><span>`+data.process.title+`</span> `+data.process.subtitle+`</h2>`;


  content = parseContent(data.process.content, content);

  content += `<button class="btn btn-prim title right"><a href="/#survey">`+data.ux.content[0].text+`</a></button></div>`;
  return content;
};
