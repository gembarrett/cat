function generateRecommendation(result, rec, res, gen, prog, first){
    thisCat = result.section.toLowerCase().replaceAll(' ', '-');
    thisScore = rec.content.replace('[[level]]', '<span>'+ rec.title.toLowerCase()+'</span>');    
    thisScore = thisScore.replace('[[section]]', result.title);
    
    section = `<h4 class="section">${result.section}</h4><progress value="${prog}" max="30"></progress>`;
    heading = `<h2>${result.title}</h2>`;
    
    resContent = '';
    
    if (Array.isArray(res.you)){
        resContent += `<h3>${gen.you}</h3>`;
        resDisplay = createResDisplay(res.you, gen, result.general);
    }

    if (Array.isArray(res.third)){
        resContent += `<h3>${gen.third}</h3>`;
        resDisplay = createResDisplay(res.third, gen, result.general);
    }

    
    if (thisCat === first){
        divInfo = `class="result r-${thisCat} active"`;
    } else {
        divInfo = `class="result r-${thisCat}"`;
    }
    
    return `<div ${divInfo}>`+section+heading+`<p class="score">${thisScore}</p>`+resDisplay+`</div>`;
}

function createResDisplay(who, generic, additional){
    for (var i = 0; i < who.length; i ++) {
        if (who[i].title !== "") {
          resContent += `<h4>${who[i].title}</h4>`;
        }
        for (const text in who[i].content) {
            thisRec = who[i].content[text];
            // each item inside content

            // check if it's an array of objects
            if (Array.isArray(thisRec)){
                resContent += `<div class="extra-recs">`;
                // if it's an array then do all the above checks again
                for (const r in thisRec){
                    resContent += getRecsContent(thisRec[r]);
                }
                resContent += `</div>`;
            } else {
                resContent += getRecsContent(thisRec);
            }
        }
        general = `<h3>${generic.why}</h3>`;

        for (var y = 0; y < additional.why.length; y++) {
            checkedText = findReplaceLinks(additional.why[y]);
            general += `<p>${checkedText}</p>`;
        }
        general += `<div class="rec-example"><h3>${generic.eg}</h3>`;

        for (var eg = 0; eg < additional.eg.length; eg++) {
            checkedText = findReplaceLinks(additional.eg[eg]);
            general += `<p>${checkedText}</p>`;
        }
        general += `</div>`;
  }
    return resContent+general;
}

function getRecsContent(el){
    if (typeof el === "string"){
        el = findReplaceLinks(el);
        return `<p>${el}</p>`;
    } else if (el.type === "ul" || el.type === "ol"){
        list = `<${el.type}>`;
        for (var pt = 0; pt < el.items; pt++) {
            checkedPoint = findReplaceLinks(el.items[pt]);
            list += `<li>${point}</li>`;
        }
        list += `</${el.type}>`;
        return list;
    } else if (el.type === "table"){
        table = `<table><thead><tr>`;
        for (var th = 0; th < el.rows[0].length; th++) {
          table += `<th>${el.rows[0][th]}</th>`;
        }
        table += `</tr></thead><tbody>`;
        for (var tr = 1; tr < el.rows.length; tr++) {
            table += `<tr>`;
            for (var td = 0; td < el.rows[tr].length; td++){
                table += `<td>${el.rows[tr][td]}</td>`;
            }
            table += `</tr>`;
        }
        table += `</tbody></table>`;
        return table;
    } else if (el.type === "title") {
        highlight = `<h4>${el.heading}</h4>`;
        checkedContent = findReplaceLinks(el.content);
        highlight += `<p>${checkedContent}</p>`;
        return highlight;
    } else {
        console.log(el);
    }
}

function dateStamp(){
    let today = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    today = today.toLocaleDateString('en-US', options);  
    return today;
}

function clearData(){
  currentState = null;
  tmpContent = null;
  window.location.reload(true);
}

function findReplaceLinks(string){
    // set up the regex to search for text within [[ ]] that is followed by text within ()
    
// 0 has the full match
// 1 has the text without [[]]
// 2 has the link in ()
// input contains the full unedited string

    
    var findLinkRefs = new RegExp(/\[\[([^\[]+)\]\]\(([^\)]*)\)/, 'g');
    var matches = [...string.matchAll(findLinkRefs)];
    if (matches.length > 0){
        // if there are matches
        // for each matching group
        for (var m = 0; m < matches.length; m++){
            wordsToReplace = matches[m][0];
            // get the matching link
            linkRef = matches[m][2].split('.');
            // get the current language from the body
            currentLang = document.body["lang"];
            // if there's a matching url in the links array
            if (links[linkRef[1]][linkRef[2]] !== undefined){
                urlMatch = links[linkRef[1]][linkRef[2]][currentLang];
                string = string.replace(wordsToReplace, `<a href="${urlMatch}" target="_blank">${matches[m][1]}</a>`);
            } else {
                // remove the [[]] and the link reference
                string = string.replace(matches[m][0], matches[m][1]);
            }            
        }
        return string; // edited
    } else {
        return string; // unedited
    }
}
