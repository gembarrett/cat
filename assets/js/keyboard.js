// user presses a key
document.addEventListener('keydown', reactToPress);

function reactToPress(e){
  var keyNavArr = ['KeyS', 'KeyE', 'KeyP', 'Enter'];

  // is key on the list - stop if no
  if (keyNavArr.includes(e.code)){
    // is key being pressed continuously - stop if yes
    if (onRepeat(e)){
      return false;
    } else {
      // get active element
      var focusEl = document.activeElement;
      simulateClick(focusEl, e, keyNavArr);
    }
  } else {
    return false;
  }
}

function simulateClick(el, key, keys){
  switch (key.code) {
    case keys[0]: // select
      if (el.type === "radio" || el.type === "checkbox"){ // focus is on a selectable thing
        // if preview is open, do nothing, else select the thing
        isPreviewOpen() ? false : el.click();
      } else {
        return false;
      }
      break;
    case keys[1]: // edit
      if (isThisText(el) === false){ // if it's not text entry
        if (isPreviewOpen() === false){ // if the preview isn't open
          document.getElementById('editBtn').classList.contains('disabled') ? false : document.getElementById('editBtn').click();
        } else { // else if the preview is open
          return false;
        }
      } else { // else if it's a text entry, do nothing
        return false;
      }
      break;
    case keys[2]: // next
      if (isThisText(el) === false){ // if it's not a text entry
        if (isPreviewOpen() === false){ // if the preview isn't open
          if (document.getElementById("submitAnswers").disabled === false){ // if the next button is enabled
            document.getElementById('submitAnswers').click();
            // this won't work as there is no summary section
            document.querySelector('.current summary') ? document.querySelector('.current summary').focus() : document.querySelector('#logo');
            key.preventDefault();
          } else { // if the next button is disabled, do nothing
            return false;
          }
        } else { // if the preview is open
          return false;
        }
      } else {
        key.preventDefault();
      }
      break;
    default:
      return false;
  }

}

// remove this function as overlay code has been deleted
function isPreviewOpen(){
  pre = document.getElementById('preview');
  // if modal doesn't exist, or does exist and is closed
  if (!pre || pre.classList.contains('closed')){
    return false;
  } else { // else if modal is open
    return true;
  }
}

function isThisText(el){
  if (el.type == "text"){
    return true;
  } else {
    return false;
  }
}

function onRepeat(e){
  if (e.repeat){
    return true;
  } else {
    return false;
  }
}
