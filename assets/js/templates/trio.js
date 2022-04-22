templates.trio = function(data){
  var text = en_oc;
  var titles = [text.team.title, text.legal.title, text.process.title];
  var colors = ['brown', 'yellow', 'green'];
  var cols = '';
  for (var i = 3; i > 0; i--) {
    cols += `<div class="trio-col">`;
    cols += `<img src="assets/images/`+i+`-ombre.png">`;
    cols += `<img src="assets/images/`+i+`-vertical.png">`;
    cols += `<h2 class="title bg-`+colors[i-1]+`">`+titles[i-1]+`</h2></div>`;
  }
  var content = `<div id="trio">`+cols+`</div>`;
    return content;
};
