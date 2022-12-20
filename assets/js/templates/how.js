templates.how = function(data, params){

  var content = `<div id="how">
                      <h2 class="title">`+data.title+`</h2>`;
  content = parseContent(data.content, content);

  content += `</div>`;
  return content;
};
