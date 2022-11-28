templates.hero = function(data){
  var content = `
    <div id="hero">
      <h2>`+data.subtitle+`</h2>
      <h1 class="title">`+data.title+`</h1>
      <button class="btn btn-prim title"><a href="/#survey">`+data.cta+`</a></button>
    </div>
    `;
    return content;
};
