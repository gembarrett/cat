templates.trio = function(data){
  var text = en_oc;
  var titles = [text.team.title, text.legal.title, text.process.title];
  console.log(titles);
  var cols;
  for (var i = 3; i > 0; i--) {
    cols += `<div class="trio-3">`;
    cols += `<img src="assets/images/`+i+`-ombre.png">`;
    cols += `<img src="assets/images/`+i+`-vertical.png">`;
    cols += `<h2 class="title">`+titles[i]+`</h2></div>`;
  }
  var content = `
    <div id="trio" class="contain">
      `+cols+`
    </div>
    `;
    return content;
};
