templates.legal = function(data){
  var content = `
    <div id="legal" class="format">
      <h1 class="title">`+data.legal.title+`</h1>
      <p>`+data.legal.content[0]+`<p>
      <p>`+data.legal.content[1]+`<p>
      <p>`+data.legal.content[2]+`<p>
      <p>`+data.legal.content[3].items[0]+`<p>
      <p>`+data.legal.content[3].items[1]+`<p>
      <p>`+data.legal.content[4]+`<p>
      <p>`+data.legal.content[5].items[0]+`<p>
      <p>`+data.legal.content[5].items[1]+`<p>
      <p>`+data.legal.content[5].items[2]+`<p>
      <p>`+data.legal.content[6]+`<p>
      <button class="btn btn-prim title format">`+data.ux.content[0].text+`</button>
    </div>
    `;
    return content;
};
