templates.overlay = function(data, params){
    // check for small screen size
    
    var content = `<div id="overlay-${params}" class="overlay`; 

    if (params === 'resume'){
        // add the content for this panel
        content += ` hide"><div class="inner-panel"><img src="assets/images/close.png" class="dismiss" /><div class="panel-content"><h3>${data.title}</h3>`;
        content = parseContent(data.copy.content, content);
        content += `<textarea placeholder=${data.placeholder} readonly></textarea><button class="copy">${data.copy.cta}</button><div id="email-prompt"><p>${data.email.content[0]}</p>`;
        content += `<input type="text" placeholder="${data.email.placeholder}" id="email-field"><button class="send">${data.email.cta}</button></div>`;
        content += `</div></div>`;
    } else {
        // add the content for this panel
        content += `"><div class="inner-panel"><img src="assets/images/close.png" class="dismiss" /><div class="panel-content"><h3>${data.title}</h3><p>${data.content}</p>`;
        content += `<button class="send">${data.buttons[0]}</button><button class="dismiss">${data.buttons[1]}</button></div></div>`;
    }
    content += `</div>`;
    return content;
};

