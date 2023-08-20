/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/




// using builtin function

// function isPalindrome(str) {
//   let ignore = str.replace(/[^a-z0-9]/gi, "");

//   let lower = ignore.toLowerCase();
//   let str2arr = lower.split("");

//   let reverseArr = str2arr.reverse();

//   let reverseString = reverseArr.join("");

//   if (lower === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// palindrome without built in function 

//Reversing the string
function reverse (str){
  let newString = ""
  for(i=str.length-1 ; i>=0 ; i--){
    newString += str[i]
  }
  return newString
}

//should not use replace() to remove the spaces , ? 

function transform(str){
  let answer = ""
  for(let i =0; i<str.length;i++){
    if(str[i]=== " " || str[i]=== "," || str[i]==="?" || str[i]==="!" || str[i]==="."){
       // do not add into answer 
      // leave it as empty
    }else{
      answer += str[i]
    }
  }
  return answer
}

function isPalindrome(str){
  str = str.toLowerCase();
  str = transform(str)
  let reverseString = reverse(str)
  if(reverseString === str){
    // console.log("it is an palindrome")
    return true
  }else{
    // console.log("it is not an palindrome")
    return false
  }
}

// isPalindrome("race ?car")




module.exports = isPalindrome;
