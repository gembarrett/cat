controllers.policyPage = function(data, params){

  var tally = {};
  var resText = rs.content;

  // for each of the items in rs.content
  for (var r=0; r<resText.length; r++) {
    // if the tally doesn't already have a bucket for this area
    if (!tally[resText[r].area]) {
      // add the area, initialise with a 0
      tally[resText[r].area] = 0;
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

  // title of page: resText.title
  // content match: tally[key] to match resText.content[X].area
  // title of area: resText.content[X].title
  // area intro: resText.content[X].general.why
    // loop through array and add items between <p> tags
  // area example: resText.content[X].general.eg
  // scoretext: tally[key] adds to resText.content[X].score
  // conditional on score:
    // if tally[key] is < 10
      // use resText.content[X].results.exceeds
    // if tally[key] is < 20
      // use resText.content[X].results.ok
    // if tally[key] is > 20
      // use resText.content[X].results.below


  // when all answers are processed, loop through the array
  // for each object, compare the tallied points to the area's limits
  // push the relevant content to the object

  // pass this array to the template

  var policyContainer = templates.policyTemplate(tally);
  utils.render('page', policyContainer);
};
