templates.intro = function(data){
  var text = ros[0];
  var content = `
    <div id="intro" class="nav-start contain">
        <h1>`+text.head+`</h1>
      <h2>`+text.subhead+`</h2>
      <a id="bu" class="btn btn-prim" href="/#build" title="Use tool">Let's go!</a>
      </div>
    </div>
    `;
    return content;
};
