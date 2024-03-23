templates.legal = function(data){
  var disc = '';
  disc = parseContent(data.content, disc);
  var legalContent = `<div class="brown-bg"><div class="contain-sm add-shadow">
                      <h2>`+data.title+`</h2>`
                      +disc+`</div></div>`;
  return legalContent;
};
