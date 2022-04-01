templates.policyTemplate = function(data, params){

// rs.title - page title

// rs.content["risk-threat"].title - area title
// data["risk-threat"] - score total
// rs.content["risk-threat"].content.score - your org has scored...
// rs.reusables.below.threshold - is score total below this or others

// rs.reusables.below.title - might not be needed
// rs.reusables.below.content - this means it has a...
// rs.reusables.general.what - recommendation title

// rs.content["risk-threat"].results.below[X].title
// rs.content["risk-threat"].results.below[X].content
// rs.reusables.general.why - title
// rs.content["risk-threat"].content.general.why
// rs.reusables.general.eg - example title
// rs.content["risk-threat"].content.general.eg

    var answers = "";
    var level;
    for (const item in data){
      answers += `<h2>`+rs.content[item].title+`</h2>`;
      // FUNCTION TODO: replace placeholder score with real one
      answers += `<p>`+rs.content[item].score+`</p>`;
      if (data[item] <= rs.reusables.below.threshold) { // if number is 0 - 10
        answers += `<h3>`+rs.reusables.below.title+`</h3>`;
        answers += `<p>`+rs.reusables.below.content+`</p>`;
        level = rs.content[item].results.below;
      } else if ((data[item] > rs.reusables.below.threshold) && (data[item] <= rs.reusables.ok.threshold)){ // if number is under 21
        answers += `<h3>`+rs.reusables.ok.title+`</h3>`;
        answers += `<p>`+rs.reusables.ok.content+`</p>`;
        level = rs.content[item].results.ok;
      } else if (data[item] > rs.reusables.ok.threshold) { // if number is over 20
        answers += `<h3>`+rs.reusables.exceeds.title+`</h3>`;
        answers += `<p>`+rs.reusables.exceeds.content+`</p>`;
        level = rs.content[item].results.exceeds;
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
      answers += `<h3>`+rs.reusables.general.why+`</h3>`;
      for (var y = 0; y < rs.content[item].general.why.length; y++) {
          answers += `<p>`+rs.content[item].general.why[y]+`</p>`;
      }
      answers += `<h3>`+rs.reusables.general.eg+`</h3>`;
      for (var eg = 0; eg < rs.content[item].general.eg.length; eg++) {
          answers += `<p>`+rs.content[item].general.eg[eg]+`</p>`;
      }
    }

  var content =
    `<div class="box contain">
      <div id="results">
        <h2>`+rs.title+`</h2>
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
