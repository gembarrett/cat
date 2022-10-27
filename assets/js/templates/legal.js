templates.legal = function(data){
  var disc = '';
  disc = parseContent(data.content, disc);
  var legalContent = `<div class="contain">
                      <h2\>`+data.title+`</h2>`
                      +disc+`</div>`;
  return legalContent;
};
