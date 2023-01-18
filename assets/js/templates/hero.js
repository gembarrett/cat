templates.hero = function(data){
  var content = `
    <div id="hero" class="contain-lrg">
      <div id="hero-header">
        <div id="hero-header-text">
          <h2>`+data.subtitle+`</h2>
          <h1>`+data.title+`</h1>
          <button class="btn btn-prim"><a href="/#survey">`+data.cta+`</a></button>
        </div>
        <div id="hero-header-img"><img src="assets/images/hero-image.png" /></div>
      </div>`;
    content += `</div>`;
    return content;
};
