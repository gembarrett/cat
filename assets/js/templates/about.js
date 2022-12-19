templates.about = function(data){
  var content = `
      <div id="intro" class="home">
      <div class="left-col">`;
    content = parseContent(data.content, content);
    content += `</div>
                <div class="right-col">
                  <h2 class="title">`+data.title+`</h2>`;
    content += `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">NGOs, learn how you can protect your work &amp; your staff by using our new, FREE Cybersecurity Assessment Tool! Developed by <a href="https://twitter.com/FordFoundation?ref_src=twsrc%5Etfw">@FordFoundation</a> BUILD team&#39;s own Matt Mitchell. <a href="https://t.co/rH1W9WrFPd">https://t.co/rH1W9WrFPd</a></p>&mdash; Kathy Reich (@kdreich) <a href="https://twitter.com/kdreich/status/1329486658035720192?ref_src=twsrc%5Etfw">November 19, 2020</a></blockquote>`+`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Proud to have worked with <a href="https://twitter.com/geminiimatt?ref_src=twsrc%5Etfw">@geminiimatt</a> and the <a href="https://twitter.com/FordFoundation?ref_src=twsrc%5Etfw">@FordFoundation</a> on the creation of a cybersecurity assessment tool for NGOs. Congrats on the launch! <a href="https://t.co/mWE3557Iu5">https://t.co/mWE3557Iu5</a></p>&mdash; Runa Sandvik (@runasand) <a href="https://twitter.com/runasand/status/1329584094724939777?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote>`
    content += `</div></div>`;
    return content;
};
