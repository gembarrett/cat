templates.hero = function(data){
  var text = en_oc;
  var content = `
    <div id="hero">
      <h1 class="title">`+text.proj.title+`</h1>
      <button class="btn btn-prim title"><a href="/#survey">`+text.ux.content[0].text+`</a></button>
    </div>
    `;
    return content;
};
