templates.resultsTemplate = function(data, params){

    var answers = "";
    var level;
    for (const item in data){
      answers += `<h2>`+textStore.rs.content[item].title+`</h2>`;
      // FUNCTION TODO: replace placeholder score with real one
      answers += `<p>`+textStore.rs.content[item].score+`</p>`;
      if (data[item] <= textStore.rs.reusables.below.threshold) { // if number is 0 - 10
        answers += `<h3>`+textStore.rs.reusables.below.title+`</h3>`;
        answers += `<p>`+textStore.rs.reusables.below.content+`</p>`;
        level = textStore.rs.content[item].results.below;
      } else if ((data[item] > textStore.rs.reusables.below.threshold) && (data[item] <= textStore.rs.reusables.ok.threshold)){ // if number is under 21
        answers += `<h3>`+textStore.rs.reusables.ok.title+`</h3>`;
        answers += `<p>`+textStore.rs.reusables.ok.content+`</p>`;
        level = textStore.rs.content[item].results.ok;
      } else if (data[item] > textStore.rs.reusables.ok.threshold) { // if number is over 20
        answers += `<h3>`+textStore.rs.reusables.exceeds.title+`</h3>`;
        answers += `<p>`+textStore.rs.reusables.exceeds.content+`</p>`;
        level = textStore.rs.content[item].results.exceeds;
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
      answers += `<h3>`+textStore.rs.reusables.general.why+`</h3>`;
      for (var y = 0; y < textStore.rs.content[item].general.why.length; y++) {
          answers += `<p>`+textStore.rs.content[item].general.why[y]+`</p>`;
      }
      answers += `<h3>`+textStore.rs.reusables.general.eg+`</h3>`;
      for (var eg = 0; eg < textStore.rs.content[item].general.eg.length; eg++) {
          answers += `<p>`+textStore.rs.content[item].general.eg[eg]+`</p>`;
      }
    }

  var content =
    `<div class="contain">
      <div id="results">
        <h2>`+textStore.rs.title+`</h2>
        `+answers+`
      </div>
      <div id="reset">
        <h3>Start over</h3>
        <div>
          <p>All done? You'll need to reload the page before using the tool again.</p>
          <button id="reset" onclick="clearData()" class="btn btn-seco">
            <i class="fas fa-redo"></i> Start again
          </button>
        </div>
      </div>
      </div>`;
  return content;
};
