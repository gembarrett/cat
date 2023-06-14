templates.resultsTemplate = function(data, params){

    var intro = "";
    var answers = "";
    var level;
    
    for (const item in data.recs.content){
      answers += `<h2>`+data.recs.content[item].title+`</h2>`;
      // FUNCTION TODO: replace placeholder score with real one
      answers += `<p>`+data.recs.content[item].score+`</p>`;
      if (data.tally[item] <= data.recs.reusables.below.threshold) { // if number is 0 - 10
        answers += `<h3>`+data.recs.reusables.below.title+`</h3>`;
        answers += `<p>`+data.recs.reusables.below.content+`</p>`;
        level = data.recs.content[item].results.below;
      } else if ((data.tally[item] > data.recs.reusables.below.threshold) && (data[item] <= data.recs.reusables.ok.threshold)){ // if number is under 21
        answers += `<h3>`+data.recs.reusables.ok.title+`</h3>`;
        answers += `<p>`+data.recs.reusables.ok.content+`</p>`;
        level = data.recs.content[item].results.ok;
      } else if (data.tally[item] > data.recs.reusables.ok.threshold) { // if number is over 20
        answers += `<h3>`+data.recs.reusables.exceeds.title+`</h3>`;
        answers += `<p>`+data.recs.reusables.exceeds.content+`</p>`;
        level = data.recs.content[item].results.exceeds;
      } else {
        console.log('Something is wrong with '+item);
      }
      for (var rec = 0; rec < level.length; rec ++) {
        if (level[rec].title !== "") {
          answers += `<h3>`+level[rec].title+`</h3>`;
        } else {
          // don't add the title if empty
        }
        for (const text in level[rec].content) {
          if (typeof level[rec].content[text] === "string") {
            answers += `<p>`+level[rec].content[text]+`</p>`;
          } else if (level[rec].content[text].type === "title") {
            answers += `<h4>`+level[rec].content[text].heading+`</h4>`;
          } else if ((typeof level[rec].content[text] === "ul") || (typeof level[rec].content[text] === "ol")) {
            answers += `<`+level[rec].content[text].type+`>`;
            for (var pt = 0; pt < level[rec].content[text].items; pt++) {
              answers += `<li>`+level[rec].content[text].items[pt]+`</li>`;
            }
            answers += `</`+level[rec].content[text].type+`>`;
          } else if (level[rec].content[text].type === "table") {
            answers += `<table><thead><tr>`;
            for (var th = 0; th < level[rec].content[text].rows[0].length; th++) {
              answers += `<th>`+level[rec].content[text].rows[0][th] + `</th>`;
            }
            answers += `</tr></thead><tbody>`;
            for (var tr = 1; tr < level[rec].content[text].rows.length-1; tr++) {
              answers += `<tr>`;
              for (var td = 0; td < level[rec].content[text].rows[tr].length; td++){
                answers += `<td>`+level[rec].content[text].rows[tr][td]+`</td>`;
              }
              answers += `</tr>`;
            }
            answers += `</tbody></table>`;
          }
        }
      }
      answers += `<h3>`+data.recs.reusables.general.why+`</h3>`;
      for (var y = 0; y < data.recs.content[item].general.why.length; y++) {
          answers += `<p>`+data.recs.content[item].general.why[y]+`</p>`;
      }
      answers += `<h3>`+data.recs.reusables.general.eg+`</h3>`;
      for (var eg = 0; eg < data.recs.content[item].general.eg.length; eg++) {
          answers += `<p>`+data.recs.content[item].general.eg[eg]+`</p>`;
      }
    }

  var content = `
    <div class="contain-md">
        <div class="right-col">
            <div class="overlap-col">
                <button class="save-btn add-shadow">text</button>
            </div>`;
    
    content += `<div class="contain-results add-shadow"><h2>`+data.recs.title+`</h2>${answers}</div></div></div>`;
  return content;
};
