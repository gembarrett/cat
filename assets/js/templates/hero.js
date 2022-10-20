templates.hero = function(data){
  var text = en_oc;
  var content = `
    <div id="hero" class="format">
      <img alt="CAT logo" src="assets/images/CAT-logo_bg.png" />
      <img alt="CAT logo" src="assets/images/CAT-logo_black.png" />
      <h1 class="title">`+text.proj.title+`</h1>
      <button class="btn btn-prim title format"><a href="/#survey">`+text.ux.content[0].text+`</a></button>
    </div>
    `;
    return content;
};
