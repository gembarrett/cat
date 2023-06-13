controllers.resultsPage = function(data, params){

  var tally = {};
  var resText = data.content;

    // this builds up the tally object to keep track of the scores for each sub/section
  // for each of the items in rs.content
  for (const res in resText) {
      console.log(res);
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
      // to see if the area matches the key
      if (currentState.answered[ans].c === rr){
        tally[rr] += currentState.answered[ans].p;
      } else {
        // no match
          console.log(`answer: ${currentState.answered[ans]}`);
          console.log(`sub/section: ${tally[rr]}`);
      }
    }
  }

  // pass this array to the template
  var resultsContainer = templates.resultsTemplate(tally);
  utils.render('page', resultsContainer);
};
