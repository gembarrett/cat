templates.overlay = function(data, params){
    // check for small screen size
    
    var content = `<div id="overlay-${params}" class="overlay`; 

    if (params === 'resume' || params === 'result' || params === 'email'){
        // add the content for this panel
        content += ` hide"><div class="inner-panel"><img src="assets/images/close.png" class="dismiss" /><div class="panel-content">`;
        if (params === 'result'){
            content += `<h3>${data.copy.content.result.title}</h3><p>${data.copy.content.result.content}</p>`;
        } else if (params === 'email'){
            content += `<h3>${data.copy.content.email.title}</h3><p>${data.copy.content.email.content}</p>`;
        } else {
            content += `<h3>${data.copy.content.resume.title}</h3>`;
            content = parseContent(data.copy.content.resume.content, content);
        }
        if (params !== 'email'){
            content += `<textarea placeholder=${data.copy.placeholder} readonly></textarea><button class="copy">${data.copy.cta}</button><div id="email-prompt"><p>${data.email.content}</p>`;            
        } 
        content += `<div><input type="text" placeholder="${data.email.placeholder}" id="email-field"><button class="send">${data.email.cta}</button></div>`;
        // close the right number of divs!
        if (params !== 'email'){
            content += `</div></div></div>`;
        } else {
            content += `</div></div>`;
        }
    } else {
        // add the content for this panel
        content += `"><div class="inner-panel"><img src="assets/images/close.png" class="dismiss" /><div class="panel-content"><h3>${data.title}</h3><p>${data.content}</p>`;
        content += `<button class="send">${data.buttons[0]}</button><button class="dismiss">${data.buttons[1]}</button></div></div>`;
    }
    content += `</div>`;
    return content;
};

