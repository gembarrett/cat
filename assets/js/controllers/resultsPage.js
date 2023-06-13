controllers.resultsPage = function(data, params){

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
    
    // placeholder for testing
    currentState.answered = [`data-encryption-0-0-0`,`data-encryption-1-0-0`,`device-compartmentalization-0-1-10`,`external-threats-0-2-15`,`external-threats-1-1-0`,`external-threats-2-0-70`,`external-threats-3-0-20`,`external-threats-4-1-0`,`external-threats-5-0-20`,`installing-software-0-1-10`,`installing-software-1-1-0`,`internal-risks-0-2-10`,`internal-risks-1-0-0`,`internal-risks-2-2-5`,`internal-risks-3-1-10`,`internal-risks-4-2-10`,`legal-risks-0-2-10`,`managing-data-0-2-15`,`managing-data-1-1-5`,`managing-data-2-1-5`,`managing-data-3-2-5`,`messaging-collab-0-2-15`,`messaging-collab-1-2-15`,`messaging-collab-2-1-5`,`office-security-0-5-0`,`office-security-1-1-10`,`office-security-2-0-10`,`office-security-3-1-5`,`office-security-4-1-5`,`office-security-5-2-10`,`op-continuity-0-2-15`,`op-continuity-1-0-0`,`op-continuity-2-1-10`,`passwords-authentication-0-2-15`,`passwords-authentication-1-0-5-o`,`passwords-authentication-2-1-5`,`policy-docs-0-0-0`,`policy-docs-1-0-0-o`,`policy-docs-2-3-15-o`,`policy-docs-3-2-10-o`,`system-updates-0-2-15`,`third-party-0-0-0`,`third-party-1-0-0`,`third-party-2-0-20`,`third-party-3-2-20`,`third-party-4-1-10`,`training-support-0-2-0`,`training-support-1-4-10-o`,`training-support-2-1-10-o`,`training-support-3-1-5`,`training-support-4-1-5`,`travel-policy-0-3-0`,`travel-policy-1-1-10-o`,`vp-network-0-3-20`,`web-security-0-0-0`,`web-security-1-0-0-o`,`web-security-2-2-5-o`,`web-security-3-1-10-o`,`web-security-4-1-5-o`,`web-security-5-0-30-o`,`your-org-0-2-15`,`your-org-1-3-0`,`your-org-2-1-5`,`your-org-3-1-0`,`your-org-4-0-10`,`your-org-5-0-10`,`your-org-6-1-0`,`your-org-6-4-0`,`your-org-6-7-5`,`your-org-7-1-0`,`your-org-7-3-0`,`your-org-7-4-15`,`your-org-8-1-0`,`your-org-9-2-0`];

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
