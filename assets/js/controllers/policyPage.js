controllers.policyPage = function(data, params){

  var tally = {};
  console.log(tally);
  console.log(currentState);

  // for each of the items in rs.content
  for (var r=0; r<rs.content.length; r++) {
    // if the tally doesn't already have a bucket for this area
    if (!tally[rs.content[r].area]) {
      // add the area, initialise with a 0
      tally[rs.content[r].area] = 0;
    } else {
      console.log('already stored');
    }
  }

  // for each of the categories
  for (const rr in Object.keys(tally)){
    // check each of the answers
    for (var ans=0; ans<currentState.answers; ans++){
      // to see if the area matches the key
      if (currentState.answers[ans].c === rr){
        console.log('matches');
        tally[rr] += currentState.answers[ans].p;
      }
    }
  }

  console.log(tally);

  // when all answers are processed, loop through the array
  // for each object, compare the tallied points to the area's limits
  // push the relevant content to the object

  // pass this array to the template

  var policyContainer = templates.policyTemplate(tally);
  utils.render('page', policyContainer);
};
