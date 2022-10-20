// remove if design doesn't require this
var headChange = document.getElementById('head');
window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop >= headChange.offsetHeight ) {
        headChange.classList.add("nav-scroll");
        headChange.classList.remove("nav-start");
    }
    else {
        headChange.classList.add("nav-start");
        headChange.classList.remove("nav-scroll");
    }
};
