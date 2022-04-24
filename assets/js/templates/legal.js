templates.legal = function(data){
  console.log(data);
  var text = en_oc;
  var content = `
    <div id="legal" class="format">
      <h1 class="title">`+text.legal.title+`</h1>
      <p>`+text.legal.content[0]+`<p>
      <p>`+text.legal.content[1]+`<p>
      <p>`+text.legal.content[2]+`<p>
      <p>`+text.legal.content[3].items[0]+`<p>
      <p>`+text.legal.content[3].items[1]+`<p>
      <p>`+text.legal.content[4]+`<p>
      <p>`+text.legal.content[5].items[0]+`<p>
      <p>`+text.legal.content[5].items[1]+`<p>
      <p>`+text.legal.content[5].items[2]+`<p>
      <p>`+text.legal.content[6]+`<p>
      <button class="btn btn-prim title format">`+text.ux.content[0].text+`</button>
    </div>
    `;
    return content;
};
