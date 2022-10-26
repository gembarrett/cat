templates.legal = function(data){
  var legalContent = `<div id="legal" class="basics">
                    <div class="basics-head contain-70">
                      <h2 class="title">`+data.title+`</h2>
                    </div>`;

  legalContent += '<div class="contain-70">';

  legalContent = parseContent(data.content, legalContent);

  return legalContent;
};
