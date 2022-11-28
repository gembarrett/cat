templates.hero = function(data){
  var text = en_oc;
  var content = `
    <div id="hero">
      <h2>`+text.about.subtitle+`</h2>
      <h1 class="title">`+text.about.title+`</h1>
      <button class="btn btn-prim title"><a href="/#survey">`+text.about.cta+`</a></button>
    </div>
    `;
    return content;
};
