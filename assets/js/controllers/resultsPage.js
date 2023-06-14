controllers.resultsPage = function(data, params){
  document.querySelector('#page').classList = 'survey results';
  var tally = {};
  var resText = data.content;
    
    // this builds up the tally object to keep track of the scores for each sub/section
  // for each of the items in rs.content
  for (const res in resText) {
    if (!tally[res]) {
      // add the area, initialise with a 0
      tally[res] = 0;
    } else {
      console.log('already stored');
    }
  }

  // for each of the categories
  for (const rr in tally){
    // check each of the answers
    for (var ans=0; ans<currentState.answered.length; ans++){
        // get the subsection
        currAnswer = currentState.answered[ans].split('-');
        subGroup = `${currAnswer[0]}-${currAnswer[1]}`;
        
      // if the area matches the key
      if (subGroup === rr){
//          currQuestion = currAnswer[2];
        tally[rr] += parseInt(currAnswer[4]);
      } else {
        // doesn't match: skip
      }
    }
  }

  // pass this array to the template
  var resultsContainer = templates.resultsTemplate(tally);
  utils.render('page', resultsContainer);
};
