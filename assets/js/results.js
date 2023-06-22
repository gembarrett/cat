function generateRecommendation(result, rec, res, gen, prog){
    thisCat = result.section.toLowerCase().replaceAll(' ', '-');
    thisScore = rec.content.replace('[[level]]', '<span>'+ rec.title.toLocaleLowerCase()+'</span>');    
    thisScore = thisScore.replace('[[section]]', result.title);
    
    section = `<h4 class="section">${result.section}</h4><progress value="${prog}" max="30"></progress>`;
    heading = `<h2>${result.title}</h2>`;
    
    resContent = '';
      for (var i = 0; i < res.length; i ++) {
        if (res[i].title !== "") {
          resContent += `<h4>${res[i].title}</h4>`;
        }
        for (const text in res[i].content) {
            thisRec = typeof res[i].content[text];
            // each item inside content
            resContent += getContentType(res[i].content[text]);
                // check if it's a string (title + content)
                if (thisRec === "string"){
                    resContent += `<p>${res[i].content[text]}</p>`;
                }
                // check if it's a table (type + rows)
                if (thisRec.type === "table"){
                    resContent += `<table><thead><tr>`;
                    for (var th = 0; th < res[i].content[text].rows[0].length; th++) {
                      resContent += `<th>${res[i].content[text].rows[0][th]}</th>`;
                    }
                    resContent += `</tr></thead><tbody>`;
                    for (var tr = 1; tr < res[i].content[text].rows.length-1; tr++) {
                        resContent += `<tr>`;
                        for (var td = 0; td < res[i].content[text].rows[tr].length; td++){
                            resContent += `<td>${res[i].content[text].rows[tr][td]}</td>`;
                        }
                        resContent += `</tr>`;
                    }
                    resContent += `</tbody></table>`;
                }
                // check if it's a list (ul/ol + items)
                if (thisRec.type === "ul" || thisRec.type === "ol"){
                    resContent += `<${res[i].content[text].type}>`;
                    for (var pt = 0; pt < res[i].content[text].items; pt++) {
                        resContent += `<li>${res[i].content[text].items[pt]}</li>`;
                    }
                    resContent += `</${res[i].content[text].type}>`;
                }
                // check if it's an array
                if (Array.isArray(thisRec)){
                    // if it's an array then do all the above checks again
                }


            
//            if (typeof res[i].content[text] === "string") {
//                resContent += `<p>${res[i].content[text]}</p>`;
//            } 
//            else {
//                if (Array.isArray(res[i].content[text])){
//                    resContent += `<div class="subrec">`;
//                    if (res[i].content[text].type === "title") {
//                        resContent += `<h4>${res[i].content[text].heading}</h4><p>${res[i].content[text].content}</p>`;
//                    } 
//                    else if ((typeof res[i].content[text] === "ul") || (typeof res[i].content[text] === "ol")) {
//                        resContent += `<${res[i].content[text].type}>`;
//                        for (var pt = 0; pt < res[i].content[text].items; pt++) {
//                            resContent += `<li>${res[i].content[text].items[pt]}</li>`;
//                        }
//                        resContent += `</${res[i].content[text].type}>`;
//                    } 
//                    else if (res[i].content[text].type === "table") {
//                        resContent += `<table><thead><tr>`;
//                        for (var th = 0; th < res[i].content[text].rows[0].length; th++) {
//                          resContent += `<th>${res[i].content[text].rows[0][th]}</th>`;
//                        }
//                        resContent += `</tr></thead><tbody>`;
//                        for (var tr = 1; tr < res[i].content[text].rows.length-1; tr++) {
//                            resContent += `<tr>`;
//                            for (var td = 0; td < res[i].content[text].rows[tr].length; td++){
//                                resContent += `<td>${res[i].content[text].rows[tr][td]}</td>`;
//                            }
//                            resContent += `</tr>`;
//                        }
//                        resContent += `</tbody></table>`;
//                    }
//                    resContent += `</div>`;
//                }
//            }
        }
        general = `<h3>${gen.why}</h3>`;
          
        for (var y = 0; y < result.general.why.length; y++) {
            general += `<p>${result.general.why[y]}</p>`;
        }
        general += `<div class="rec-example"><h3>${gen.eg}</h3>`;
          
        for (var eg = 0; eg < result.general.eg.length; eg++) {
            general += `<p>${result.general.eg[eg]}</p>`;
        }
        general += `</div>`;
      }
    
    return `<div class="result r-${thisCat}">`+section+heading+`<p class="score">${thisScore}</p>`+`<h3 class="what">${gen.what}</h3>`+resContent+general+`</div>`;
}

function getContentType(el){
    if (el === "string"){
        return `<p>${el}</p>`;
    } else if ()
               
    } else if (el.type === "table"){
        table = `<table><thead><tr>`;
        for (var th = 0; th < el.rows[0].length; th++) {
          table += `<th>${el.rows[0][th]}</th>`;
        }
        table += `</tr></thead><tbody>`;
        for (var tr = 1; tr < el.rows.length-1; tr++) {
            table += `<tr>`;
            for (var td = 0; td < el.rows[tr].length; td++){
                table += `<td>${el.rows[tr][td]}</td>`;
            }
            table += `</tr>`;
        }
        resContent += `</tbody></table>`;
        return "table";
    }
}

function dateStamp(){
  // get the current date
  var today = new Date();
  // start creating the date stamp
  var fullDate = today.getDate();
  var options = {month:'long'};
  fullDate += ' ' + new Intl.DateTimeFormat('en-UK', options).format(today);
  fullDate += ' ' + today.getFullYear();
  return fullDate;
}

function clearData(){
  tally = null;
  currentState = null;
  dates  = null;
  dict = null;
  output = null;
  qRef = null;
  tmpContent = null;
  window.location.reload(true);
}

function resetChanges(){
  // could also use textContent instead of output here
  document.querySelector('.policyHolder').value = output.plain;
}
