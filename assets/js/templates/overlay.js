templates.overlay = function(data, params){
    var content = `<div id="overlay-${params}"`;
        console.log(data);

    if (params === 'resume'){
        content += ` class="panel">`;
    } else {
        content += ` class="hide panel">`;
    }
    content += `</div>`;
    return content;
};

