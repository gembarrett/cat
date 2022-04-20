// var translation = (function () {
//
//   var selectedLang = document.getElementsByName("lang")[0].value;
//   // Properties
//   var language = selectedLang;
//   var translations = {};
//   var onLangChangeCallbacks = [];
//
//   // Private methods
//   function loadTranslations(lang) {
//     this.translations[lang] = {};
//   }
//   function fireOnLangChange() {
//     for (const callback in onLangChangeCallbacks) {
//       callback();
//     }
//   }
//
//   // Public methods
//   return {
//     getCurrentLanguage: function () {
//       return this.language;
//     },
//     setLanguage: function (lang) {
//       this.language = lang;
//       this.loadTranslations(lang);
//       this.fireOnLangChange();
//     },
//     getTranslation: function (key) {
//       return this.translations[this.language][key];
//     },
//     onLangChange: function (callback) {
//       this.onLangChangeCallbacks.push(callback);
//     }
//   };
// })();

bodyLang = document.body.log;
// checkLanguage(bodyLang);

function checkLanguage(lang){

  // where is language selected
  var langDrop = document.getElementsByName("language")[0];
  console.log(langDrop.value);
  checkForSame(langDrop.value, bodyLang);
  // watch that element for language change
  langDrop.addEventListener("change", (event) => {
    checkForSame(langDrop.value, lang);
  });
console.log(document.body.lang + " " + bodyLang);
}

function checkForSame(first, second){
  // if the language just selected is not the same as the current language
  if (first !== second){
    // set the body's language attribute to match the selection
    document.body.lang = first;
    // update the variable
    bodyLang = document.body.lang;
    updateLang(first);
  } else {
    console.log('selection and body are same');
  }
}
