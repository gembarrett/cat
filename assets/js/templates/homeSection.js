templates.homeSection = function(data){
  var text = data;
  var list = "";
  // if there's an array
  if (Array.isArray(text.content)){
    // for each array item
    for (var i = 0; i<text.content.length; i++){
      // check if it's got "name"
      if (text.content[i].name){
        list += `<h4>`+text.content[i].name+`</h4>`;
        list +=  `<p>`+text.content[i].p+`</p>`;
      } else if (text.content[i].type) { // check if it's got "type"
        list += `<`+text.content[i].type+`>`;
        for (var ii = 0; ii < text.content[i].items.length; ii++) {
          list += `<li>`+text.content[i].items[ii]+`</li>`;
        }
        list += `</`+text.content[i].type+`>`;
      } else {
        // if it hasn't got either and is just a string then
        list += `<p>`+text.content[i]+`</p>`;
      }
    }
  }
  var content = `
  <div class="window">
    <h3>`+text.title+`</h3>
    <div class="">`+list+`</div>
  </div>`;
  return content;
};
