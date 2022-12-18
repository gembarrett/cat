templates.about = function(data){
  var content = `
      <div id="intro"><h2 class="title">`+data.title+`</h2>`;
    content = parseContent(data.content, content);
    content = parseQuotes(data.quotes, content);
    content += `</div>`;
    return content;
};
