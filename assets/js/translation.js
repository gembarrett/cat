var translation = (function () {

  var selectedLang = document.getElementsByName("lang")[0].value;
  // Properties
  var language = selectedLang;
  var translations = {};
  var onLangChangeCallbacks = [];

  // Private methods
  function loadTranslations(lang) {
    this.translations[lang] = {};
  }
  function fireOnLangChange() {
    for (const callback in onLangChangeCallbacks) {
      callback();
    }
  }

  // Public methods
  return {
    getCurrentLanguage: function () {
      return this.language;
    },
    setLanguage: function (lang) {
      this.language = lang;
      this.loadTranslations(lang);
      this.fireOnLangChange();
    },
    getTranslation: function (key) {
      return this.translations[this.language][key];
    },
    onLangChange: function (callback) {
      this.onLangChangeCallbacks.push(callback);
    }
  };
})();
