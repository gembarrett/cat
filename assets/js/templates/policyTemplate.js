templates.policyTemplate = function(data){
  var docContent = compileDoc(true, true);
  output = docContent;
  var resources = ros[0].background[0].links;
  var links = "<div><p>For more information on organizational and personal security, and how you can get the most out of your new policy, check out these resources:</p>";
  for (var r = 0; r<resources.length; r++){
    links += `<a href="`+resources[r].url+`" target="_blank" class="btn btn-seco" title="Get more info about `+resources[r].name+`">`+resources[r].name+`</a>`;
  }
  txt = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'plain\')"><i class="fas fa-download"></i> Text (.txt)</button>';
  editTxt = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'plain\', true)"><i class="fas fa-download"></i> Download this policy text (.txt)</button>';

  md = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'markdown\')"><i class="fas fa-download"></i> Markdown (.md)</button>';
  html = '<button class="btn btn-prim pink-border-glow" onclick="downloadPolicy(\'html\')"><i class="fas fa-download"></i> HTML (.html)</button>';
  var content =
    `<div class="qContainer contain">
      <div id="policy-dl" class="window pink-border-glow">
        <h3>Get policy</h3>
        <div class="dlBtnWrapper">
          <p>Download pre-formatted versions of your report in plaintext, markdown and HTML.</p>
        <div>`+ txt + md + html + `</div>
      </div>
      </div>
      <div id="policy-reset" class="window pink-border-glow">
        <h3>Start over</h3>
        <div>
          <p>All done? You'll need to reload the page before building another policy.</p>
          <button id="reset" onclick="clearData()" class="btn btn-seco">
            <i class="fas fa-redo"></i> Build another policy
          </button>
        </div>
      </div>
      </div>`;
  return content;
};
