templates.how = function(data, params){
  console.log(params);
  var text = en_oc;
  var content = `
    <div id="how" class="format">
      <h1 class="title">`+text.process.title+`</h1>
      <p>`+text.process.content[0]+`<p>
      <p>`+text.process.content[1]+`<p>
      <p>`+text.process.content[2].items[0]+`<p>
      <p>`+text.process.content[2].items[1]+`<p>
      <p>`+text.process.content[2].items[2]+`<p>
      <p>`+text.process.content[2].items[3]+`<p>
      <p>`+text.process.content[3]+`<p>
      <p>`+text.process.content[4]+`<p>
      <button class="btn btn-prim title format">`+text.ux.content[0].text+`</button>
    </div>
    `;
    return content;
};
