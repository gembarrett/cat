// File for all the policy-related functions

// function which takes two boolean values which determine which document is needed
function compileDoc(p,a){
  var doc = {
    plain: "",
    markdown: "",
    html: ""
  };
  // create the temporary values
  var tempPolicy = [];
  var tempGeneralA = [];
  var tempReviewA = [];
  var tempTipsA = [];

  var contextP = [];
  var deviceP = [];
  var commsP = [];
  var acctsP = [];
  var incResP = [];
  var travelP = [];
  var envP = [];
  var networkP = [];
  var appContent = {
    general: [],
    review: [],
    tips: [],
    links: []
  };

  // what is the first q in the answers array?
  var prevQ = 0;

  // for each of the answer references
  for (var i = 0; i < currentState.answers.length; i++){
    // get quick ref for answers
    aRef = currentState.answers[i].a;
    // get quick ref for question number
    qRef = currentState.answers[i].q;
    // set up question name
    var thisQ = 'q'+qRef;
    // search for the relevant data using the answer reference
    for (var j = 0; j < sections.length; j++){
      // store if the data is found
      var found = sections[j].find(ans => ans.id === thisQ);
      // if there's data
      if (found){
        switch (true) {
          case qRef < 6:
            contextP = getPolicyContent(qRef, prevQ, aRef, contextP, found);
            break;
          case qRef < 9:
            deviceP = getPolicyContent(qRef, prevQ, aRef, deviceP, found);
            break;
          case qRef < 13:
            commsP = getPolicyContent(qRef, prevQ, aRef, commsP, found);
            break;
          case qRef < 20:
            acctsP = getPolicyContent(qRef, prevQ, aRef, acctsP, found);
            break;
          case qRef < 22:
            incResP = getPolicyContent(qRef, prevQ, aRef, incResP, found);
            break;
          default:
            console.log(qRef + ' not found');
        }
      }
    }
    // store this question's ID for comparison in the next loop
    prevQ = qRef;
  }

  doc.plain = 'Organizational Security Policy\n\nCreated '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.markdown = '# Organizational Security Policy \n#### Created '+dateStamp()+'\n\n'+contextP.join('\n');
  doc.html = '<!DOCTYPE html><html><head><title>Organizational Security Policy '+dateStamp()+'</title></head><body><h1>Organizational Security Policy</h1><h4>Created '+dateStamp()+'</h4><p>'+contextP.join('</p><p>')+'</p>';

  if (deviceP.length > 0){
    doc.plain += '\n\nDevice Security\n' + deviceP.join('\n');
    doc.markdown += '\n\n### Device Security \n' + deviceP.join('\n');
    doc.html += '<h3>Device Security</h3><p>' + deviceP.join('</p><p>')+'</p>';
  }
  if (commsP.length > 0){
    doc.plain += '\n\nCommunications Security\n' + commsP.join('\n');
    doc.markdown += '\n\n### Communications Security \n' + commsP.join('\n');
    doc.html += '<h3>Communications Security</h3><p>' + commsP.join('</p><p>')+'</p>';
  }
  if (acctsP.length > 0){
    doc.plain += '\n\nAccounts Security\n' + acctsP.join('\n');
    doc.markdown += '\n\n### Accounts Security \n' + acctsP.join('\n');
    doc.html += '<h3>Accounts Security</h3><p>' + acctsP.join('</p><p>')+'</p>';
  }
  if (travelP.length > 0){
    doc.plain += '\n\nTravel Security\n' + travelP.join('\n');
    doc.markdown += '\n\n### Travel Security \n' + travelP.join('\n');
    doc.html += '<h3>Travel Security</h3><p>' + travelP.join('</p><p>')+'</p>';
  }
  if (envP.length > 0){
    doc.plain += '\n\nEnvironmental Security\n' + envP.join('\n');
    doc.markdown += '\n\n### Environmental Security \n' + envP.join('\n');
    doc.html += '<h3>Environmental Security</h3><p>' + envP.join('</p><p>')+'</p>';
  }
  if (networkP.length > 0){
    doc.plain += '\n\nNetwork Security\n' + networkP.join('\n');
    doc.markdown += '\n\n### Network Security \n' + networkP.join('\n');
    doc.html += '<h3>Network Security</h3><p>' + networkP.join('</p><p>')+'</p>';
  }
  if (incResP.length > 0){
    doc.plain += '\n\nWhat to do if...\n' + incResP.join('\n\n');
    doc.markdown += '\n\n### What to do if...\n' + incResP.join('\n\n');
    doc.html += '<h3>What to do if...</h3><p>' + incResP.join('</p><p>')+'</p>';
  }

  doc.plain += '\n\nPlease note: it is recommended that this policy undergoes a legal review prior to being implemented in your organization. \n\nBuilt with SOAP v.'+catv;
  doc.markdown += '\n\n#### *Please note: it is recommended that this policy undergoes a legal review prior to being implemented in your organization.* \n\n##### Built with SOAP v.'+catv;
  doc.html += '<h4>Please note: it is recommended that this policy undergoes a legal review prior to being implemented in your organization.</h4><h5>Built with SOAP v. '+catv+'</h5></body></html>';

  var teamPolicies = [];
  // for each of the teams in teamContent
  for (var t=0; t<teamContent.length; t++){
    // if there are selected areas for this team
    if (teamContent[t].areas.length > 0){

      // get the area numbers
      areas = teamContent[t].areas;

      // add the contextP
      pText = '\n\n'+teamContent[t].name + '\n\nOrganizational Security Policy\n\nCreated '+dateStamp()+'\n\n'+contextP.join('\n');
      mText = '\n\n# '+teamContent[t].name + '\n## Organizational Security Policy \n#### Created '+dateStamp()+'\n\n'+contextP.join('\n');
      hText = '<!DOCTYPE html><html><head><title>Organizational Security Policy '+dateStamp()+'</title></head><body><h1>'+teamContent[t].name+'</h1><h2>Organizational Security Policy</h2><h4>Created '+dateStamp()+'</h4><p>'+contextP.join('</p><p>')+'</p>';

      // for each of the optional areas
      for (var a = 0; a< areas.length; a++){
        // add the area title
        // add the corresponding policy text in each format
        switch (areas[a]) {
          case 0:
            pText += '\n\nDevice Security\n' + deviceP.join('\n');
            mText += '\n\n### Device Security \n' + deviceP.join('\n');
            hText += '<h3>Device Security</h3><p>' + deviceP.join('</p><p>')+'</p>';
            break;
          case 1:
            pText += '\n\nCommunications Security\n' + commsP.join('\n');
            mText += '\n\n### Communications Security \n' + commsP.join('\n');
            hText += '<h3>Communications Security</h3><p>' + commsP.join('</p><p>')+'</p>';
            break;
          case 2:
            pText += '\n\nAccounts Security\n' + acctsP.join('\n');
            mText += '\n\n### Accounts Security \n' + acctsP.join('\n');
            hText += '<h3>Accounts Security</h3><p>' + acctsP.join('</p><p>')+'</p>';
            break;
          case 3:
            pText += '\n\nTravel Security\n' + travelP.join('\n');
            mText += '\n\n### Travel Security \n' + travelP.join('\n');
            hText += '<h3>Travel Security</h3><p>' + travelP.join('</p><p>')+'</p>';
            break;
          case 4:
            pText += '\n\nEnvironmental Security\n' + envP.join('\n');
            mText += '\n\n### Environmental Security \n' + envP.join('\n');
            hText += '<h3>Environmental Security</h3><p>' + envP.join('</p><p>')+'</p>';
            break;
          case 5:
            pText += '\n\nNetwork Security\n' + networkP.join('\n');
            mText += '\n\n### Network Security \n' + networkP.join('\n');
            hText += '<h3>Network Security</h3><p>' + networkP.join('</p><p>')+'</p>';
            break;
          default:
          console.log(areas[a]);
        }

      }
      // then add any other default content
      if (incResP.length > 0){
        pText += '\n\nWhat to do if...\n' + incResP.join('\n\n');
        mText += '\n\n### What to do if...\n' + incResP.join('\n\n');
        hText += '<h3>What to do if...</h3><p>' + incResP.join('</p><p>')+'</p>';
      }
      // and push the team policies to the array
      teamPolicies.push({
        "team":teamContent[t].name,
        "plain": pText,
        "markdown": mText,
        "html": hText,
      });
    }
  }
  for (var tm=0; tm<teamPolicies.length; tm++){
    // get the content of each team pushed
    doc.plain += teamPolicies[tm].plain;
    doc.markdown += teamPolicies[tm].markdown;
    doc.html += teamPolicies[tm].html;
  }

  output = doc;
  return doc;
}


// function to replace temporary placeholder text in policy
function replaceStr(string) {
  var editedStr = string;
  // for each of the stored keys
  for (var key in dict){
    // if it's a list of things and the last item does not start with an " and "
    if ((Array.isArray(dict[key])) && (!dict[key][dict[key].length-1].startsWith(" and "))){
      last = dict[key][dict[key].length-1];
      // add "and" plus a full stop to the last item
      dict[key][dict[key].length-1] = "and " + last;
      // prepend each item in the array with a space
      for (var i = 0; i < dict[key].length; i++){
        dict[key][i] = " " + dict[key][i];
      }
    }
    var regexKey = key.replace('[', '\\[').replace(']', '\\]');
    var regex = new RegExp(regexKey, 'gi');
    // check if that key exists in the string and replace it with value from dict
    editedStr = editedStr.replace(regex, dict[key]);
  }
  // if string contains items that start [date+
  if (editedStr.match(/\[date\+[\.\d]+\]/g)){
    // grab all instances in this string
    dates = editedStr.match(/\[date\+[\.\d]+\]/g);
    // for each instance
    for (var d = 0; d < dates.length; d++){
      // take the number after the +
      num = dates[d].split('+');
      num = num[1].split(']');
      num = num[0];

      // get the current date
      start = new Date();
      // add the appropriate number of months/years to it
      start.setMonth(start.getMonth()+parseInt(num, 10));

      future = start.getDate();
      var options = {month:'long'};
      future += ' ' + new Intl.DateTimeFormat('en-UK', options).format(start);
      future += ' ' + start.getFullYear();

      // update the edited string
      editedStr = editedStr.replace(dates[d], future);
    }
  }
  return editedStr;
}

function dateStamp(){
  // get the current date
  var today = new Date();
  // start creating the date stamp
  var fullDate = today.getDate();
  var options = {month:'long'};
  fullDate += ' ' + new Intl.DateTimeFormat('en-UK', options).format(today);
  fullDate += ' ' + today.getFullYear();
  return fullDate; // is there a way to return date + 3 months (no day)?
}

function clearData(){
  currentState = null;
  dates  = null;
  dict = null;
  output = null;
  qRef = null;
  tmpContent = null;
  window.location.reload(true);
}


// function to download data to a file
function downloadPolicy(type, edit) {
  var data;
  // if we're looking to download an edited policy
  if (edit === true){
    // grab the edited textcontent
    var editedPolicy = document.querySelector('.policyHolder').value;
    // store it in data
    if (editedPolicy !== ""){
      data = editedPolicy;
    } else {
      data = output[type];
    }
  } else {
    // else grab the content from output as usual
    data = output[type];
  }

  var format = 'text/'+type;
  var filename = "SOAP-policy";
  if (type === 'markdown'){
    filename += '.md';
  } else if (type === 'plain'){
    filename += '.txt';
  } else {
    filename += '.'+type;
  }

  var file = makeFile(data, filename, format);

  if (window.navigator.msSaveOrOpenBlob){ // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  } else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      }, 1000);
  }
}

function makeFile(d, n, f){
  try {
    return new File([d], n,{type: f});
  } catch (exception) {
    const blob = new Blob([d], {type: f, name: n});
    return blob;
  }
}

function getPolicyContent(question, previous, answer, policy, content){
  // if it's a new question and there's policyEntry
  if ((question !== previous) && (content.policyEntry !== "")) {
    // edit the policyEntry and push it to the policy
    thisContent = replaceStr(content.policyEntry);
    policy.push(thisContent);
  } else {
    console.log(question + ' is not a new question');
  }

  // TODO: add a case that deals with the first question
  // if q1 isn't answered then the next answered question is being skipped over because it's the same as previous
  // need to check (one-time) if the question is same as previous but has not been processed before

  // if the answer has a policyEntry
  if (content.answers[answer].policyEntry !== ""){
    // edit the policyEntry and push it to the policy
    thisContent = replaceStr(content.answers[answer].policyEntry);
    policy.push(thisContent);
  } else {
    console.log(question + ' does not have an answer-specific entry');
  }
  return policy;
}

function resetChanges(){
  // could also use textContent instead of output here
  document.querySelector('.policyHolder').value = output.plain;
}
