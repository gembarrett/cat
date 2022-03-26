templates.policyTemplate = function(data, params){

  // use the received array
  // for each object
    // display the area title
    // replace the points placeholder (here??) and display sentence
    // display the object's content

  var content =
    `<div class="box contain">
      <div id="results">
        <h2>Your results</h2>
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
