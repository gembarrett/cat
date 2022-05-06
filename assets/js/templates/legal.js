templates.legal = function(data){
  var legalContent = `<div id="legal" class="basics">
                  <div class="bg-yellow format">
                    <div class="basics-head contain-70">
                      <h2 class="title"><span>`+data.legal.title+`</span>`+data.legal.subtitle+`</h2>
                      <img src="/assets/images/2-header.png" />
                    </div>
                  </div>`;

  legalContent += '<div class="salford-text contain-70">';

  legalContent = parseContent(data.legal.content, legalContent);

  legalContent += `<button class="btn btn-prim title format right"><a href="/#build">`+data.ux.content[0].text+`</a></button></div></div>`;
  return legalContent;
};
