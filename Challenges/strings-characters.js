var str = "hello world";
var str2 = 'hello mars from earth $$_89';
var str3 = 'hello mars from earth $$_89';
console.log(str.length);
console.log("I am a sentence.".length);

var rep = str.replace("hello", "goodbye");
rep
console.log(str2 === str3);


function LetterCapitalize(str){

    var words = str.split(" ");
    
    //for loop splits the string into array and capitalizes first letter of every word
    for (var i = 0; i < words.length; i++){
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

console.log(LetterCapitalize(str));
str