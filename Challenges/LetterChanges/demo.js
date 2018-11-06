function LetterChange(str){
    var newString = '';
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 122){
            newString += String.fromCharCode(97);
        }
        else if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 122) {
            newString += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        else{
            newString += str.charAt(i);
        }
     }
    for (var x=0; x< str.length; x++){
        if (newString.charAt(x) === 'a') {
            newString = newString.replace('a', 'A')
        }
        else if (newString.charAt(x) === 'e'){
            newString = newString.replace('e', 'E')
        } 
        else if (newString.charAt(x) === 'i' ){
            newString = newString.replace('i', 'I')
        }
        else if (newString.charAt(x) === 'o' ){
            newString = newString.replace('o', 'O')
        }
        else if (newString.charAt(x) === 'u'){
            newString = newString.replace('u', 'U')
        }
    }
    return newString;
}

console.log(LetterChange("hello*3"));