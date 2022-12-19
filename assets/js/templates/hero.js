templates.hero = function(data){
  var content = `
    <div id="hero" class="home">
      <div id="hero-header">
        <div id="hero-header-text">
          <h2>`+data.subtitle+`</h2>
          <h1>`+data.title+`</h1>
          <button class="btn btn-prim"><a href="/#survey">`+data.cta+`</a></button>
        </div>
        <img src="assets/images/hero-image.png" />
      </div>`;
    content += `</div>`;
    return content;
};
