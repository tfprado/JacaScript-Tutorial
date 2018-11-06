function LetterCapitalize(str) { 
    return str.replace(/\w\w*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); 
  }
     
  // keep this function call here 
  console.log(LetterCapitalize("ARmber ScoTT"));