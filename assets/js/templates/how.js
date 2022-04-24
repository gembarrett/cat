templates.how = function(data, params){
  var content = `
    <div id="how" class="format">
      <h1 class="title">`+data.process.title+`</h1>
      <p>`+data.process.content[0]+`<p>
      <p>`+data.process.content[1]+`<p>
      <p>`+data.process.content[2].items[0]+`<p>
      <p>`+data.process.content[2].items[1]+`<p>
      <p>`+data.process.content[2].items[2]+`<p>
      <p>`+data.process.content[2].items[3]+`<p>
      <p>`+data.process.content[3]+`<p>
      <p>`+data.process.content[4]+`<p>
      <button class="btn btn-prim title format">`+data.ux.content[0].text+`</button>
    </div>
    `;
    return content;
};
