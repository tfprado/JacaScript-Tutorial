function FirstReverse(str) { 
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; // "olleh"
         
}
 
var str1 = "TorontoITSolutions";
var str2 = "Toronto IT Soltuions";
// keep this function call here 
console.log(str1);
console.log(str2);

console.log(FirstReverse(str1));
console.log(FirstReverse(str2));














                            
                            
                            
  