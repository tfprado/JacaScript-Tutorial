function LetterChange(str){
    var newString = '';
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 122){
            newString += String.fromCharCode(97);
        }
        else if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 122) {
            newString += String.fromCharCode(str.charCodeAt(i) + 1);
        }
     }
    for (var i=0; i< str.length; i++){
        if (newString.charAt(i) === 'a') {
            newString = newString.replace('a', 'A')
        }
        else if (newString.charAt(i) === 'e'){
            newString = newString.replace('e', 'E')
        } 
        else if (newString.charAt(i) === 'i' ){
            newString = newString.replace('i', 'I')
        }
        else if (newString.charAt(i) === 'o' ){
            newString = newString.replace('o', 'O')
        }
        else if (newString.charAt(i) === 'u'){
            newString = newString.replace('u', 'U')
        }
    }
    return newString;
}

console.log(LetterChange("a b c z"));