templates.resultsTemplate = function(data, params){
    var currentDate = dateStamp();
    var introContent = "";
    introContent = parseContent(data.ui.results.intro, introContent);
    var dateString = dataToPass.ui.results.date;
    currentDate = dateString.replace('[[date]]', currentDate);

    var intro = `<h1>${data.recs.title}</h1><img src="assets/images/CAT-collage-results.png" />`;
    intro += `${introContent}<p>${dateString}</p>`;
    
    var buttons = `<button class="later result-generate">${dataToPass.ui.results.save.btns[0]}</button><button class="later result-email">${dataToPass.ui.results.save.btns[1]}</button><button class="result-print">${dataToPass.ui.results.save.btns[2]}</button>`;
    
    var answers = ``;
    var level;
    var submenu = `<ul>`;
    var overview = ``;
    var firstElement = 'understanding-risk';
    
    for (const item in data.recs.content){
        
        // if the submenu doesn't include the current section heading, add it, plus the overview bar
        if (!submenu.includes(data.recs.content[item].section)){
            shortRef = data.recs.content[item].section.toLowerCase().replaceAll(' ', '-');
            if (shortRef === firstElement){
                liInfo = `id="r-${shortRef}" class="selected"`;
            } else {
                liInfo = `id="r-${shortRef}"`;
            }
            submenu += `<li ${liInfo}>${data.recs.content[item].section}</li>`;
            overview += `<h4>${data.recs.content[item].section}</h4>`;
        }
        overview += `<div class="overview"><p>${data.recs.content[item].title}</p>`;
                
      if (data.tally[item] >= data.recs.reusables.below.threshold) { // if it's a high score
        recLevel = data.recs.reusables.below;
        reslevel = data.recs.content[item].results.below;
          progValue = "10";
      } else if ((data.tally[item] >= data.recs.reusables.ok.threshold) && (data.tally[item] < data.recs.reusables.below.threshold)){
        recLevel = data.recs.reusables.ok;
        reslevel = data.recs.content[item].results.ok;
          progValue = "20";
      } else if (data.tally[item] < data.recs.reusables.ok.threshold) { // if it's a low score
        recLevel = data.recs.reusables.exceeds;
        reslevel = data.recs.content[item].results.exceeds;
          progValue = "30";
     } else {
        console.log('Something is wrong with '+item);
      }
          resScore = data.tally[item];
        overview += `<progress value="${progValue}" max="30"></progress></div>`;
        
        answers += generateRecommendation(data.recs.content[item], recLevel, reslevel, data.recs.reusables.general, progValue, firstElement, resScore);
    }
    
    submenu += `</ul>`;

    var feedback = `<div class="feedback"><h4>${data.ui.results.feedback.title}</h4><button class="send-feedback">${data.ui.results.feedback.btn}</button></div>`;
    
  var content = `
    <div class="contain-lrg">
        <div class="left-col add-shadow submenu">
            ${submenu}
        </div>
        <div class="right-col">
            <div class="overlap-col">
                <div class="contain-sidebar">
                    <div class="save-results">
                        <h4>${data.ui.results.save.title}</h4>
                        <button class="later result-generate">${dataToPass.ui.results.save.btns[0]}</button>
                        <button class="later result-email">${dataToPass.ui.results.save.btns[1]}</button>
                        <button class="result-print">${dataToPass.ui.results.save.btns[2]}</button>
                    </div>
                    ${feedback}
                </div>
            </div>`;
    
    content += `<div class="contain-results add-shadow"><div class="results-intro">${intro}</div><div class="results-overview">${overview}</div><div class="results-content">${answers}</div><div id="nextStepButtons">${buttons}</div></div>${feedback}</div></div>`;
  return content;
};
