function LetterCapitalize(str) { 
    return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); 
  }
     
  // keep this function call here 
  LetterCapitalize("testing this hRRRAd");