templates.resultsTemplate = function(data, params){

    var currentDate = dateStamp();
    var dateString = dataToPass.ui.intro;
    currentDate = dateString.replace('[[date]]', currentDate);

    var intro = `<h1>${data.recs.title}</h1><img src="assets/images/CAT-collage-results.png" /><p>${currentDate}</p>`;
    
    
    var buttons = `<button class="results-generate">${dataToPass.ui.save[0].btn}</button><button class="results-email">${dataToPass.ui.save[1].btn}</button><button class="results-print">${dataToPass.ui.save[2].btn}</button>`;
    
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
                
      if (data.tally[item] >= data.recs.reusables.below.threshold) { // if scored 30
        recLevel = data.recs.reusables.below;
        reslevel = data.recs.content[item].results.below;
          progValue = "10";
      } else if ((data.tally[item] >= data.recs.reusables.ok.threshold) && (data.tally[item] < data.recs.reusables.below.threshold)){ // if over 16 but less than 30
        recLevel = data.recs.reusables.ok;
        reslevel = data.recs.content[item].results.ok;
          progValue = "20";
      } else if (data.tally[item] < data.recs.reusables.ok.threshold) { // if under 16
        recLevel = data.recs.reusables.exceeds;
        reslevel = data.recs.content[item].results.exceeds;
          progValue = "30";
     } else {
        console.log('Something is wrong with '+item);
      }
        overview += `<progress value="${progValue}" max="30"></progress></div>`;
        
        answers += generateRecommendation(data.recs.content[item], recLevel, reslevel, data.recs.reusables.general, progValue, firstElement);
    }
    
    submenu += `</ul>`;

  var content = `
    <div class="contain-lrg">
        <div class="left-col add-shadow submenu">
            ${submenu}
        </div>
        <div class="right-col">
            <div class="overlap-col">
                <button class="save-btn add-shadow">text</button>
            </div>`;
    
    content += `<div class="contain-results add-shadow"><div class="results-intro">${intro}</div><div class="results-overview">${overview}</div><div class="results-content">${answers}</div><div id="nextStepButtons">${buttons}</div></div></div></div>`;
  return content;
};
