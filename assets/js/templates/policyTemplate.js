templates.policyTemplate = function(data){
  var docContent = compileDoc(true, true);
  output = docContent;
  txt = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'plain\')"><i class="fas fa-download"></i> Text (.txt)</button>';
  md = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'markdown\')"><i class="fas fa-download"></i> Markdown (.md)</button>';
  html = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'html\')"><i class="fas fa-download"></i> HTML (.html)</button>';
  var content =
    `<div class="qContainer contain">
    <div id="report" class="window">
      <p>`+output.plain+`</p>
    </div>
      <div id="policy-dl" class="window">
        <h3>Download report</h3>
        <div class="dlBtnWrapper">
          <p>Download pre-formatted versions of your report in plaintext, markdown and HTML.</p>
        <div>`+ txt + md + html + `</div>
      </div>
      </div>
      <div id="policy-reset" class="window">
        <h3>Start over</h3>
        <div>
          <p>All done? You'll need to reload the page before taking the questionnaire again.</p>
          <button id="reset" onclick="clearData()" class="btn btn-seco">
            <i class="fas fa-redo"></i> Use the tool again
          </button>
        </div>
      </div>
      </div>`;
  return content;
};
