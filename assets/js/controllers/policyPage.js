controllers.policyPage = function(data, params){

  var tally = {};
  var resText = rs.content;

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
    for (var ans=0; ans<currentState.answers.length; ans++){
      // to see if the area matches the key
      if (currentState.answers[ans].c === rr){
        tally[rr] += currentState.answers[ans].p;
      } else {
        // no match
      }
    }
  }

  // pass this array to the template
  var policyContainer = templates.policyTemplate(tally);
  utils.render('page', policyContainer);
};
