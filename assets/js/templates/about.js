templates.about = function(data){
  var content = `
      <div id="intro">`;
    content = parseContent(data.content, content);
    content += `</div>`;
    return content;
};
