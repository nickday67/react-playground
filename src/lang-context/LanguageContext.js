import React from "react";

const LanguageContext = React.createContext({
  lang: window.navigator.language
  setLang: () => {

  },
});

export default LanguageContext;

// It's important to note that this context is in it's own file, 
// so it can be directly imported into any other file.