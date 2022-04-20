templates.hero = function(data){
  var text = en_oc;
  var content = `
    <div id="hero">
      <div id="logoContainer">
        <div><img id="logoBig" alt="CAT logo" src="" height="80" width="100" /></div>
        <h1>`+text.proj.title+`</h1>
      </div>
      <h2>`+text.proj.content[0]+`</h2>
      <p>`+text.proj.content[1]+`</p>
      <div class="btn-wrap wrap-c">
        <button class="btn btn-prim" id="submit-home-q1">Let's go!</button>
        </div>
      </div>
    </div>
    `;
    return content;
};
