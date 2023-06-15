// function reverseString(str) {
//     let reversed = '';
  
//     // Loop through each character in the string in reverse order and add it to the new string
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
  
//     return reversed;
//   }
  
//   // Example usage
//   let str = 'Poovarsan';
//   console.log(reverseString(str)); // Output: !dlroW ,olleH
// function checkPalindrome(str) {  
//     // get the total length of the words  
//     const len = str.length;  
  
//     // Use for loop to divide the words into 2 half  
//     for (let i = 0; i < len / 2; i++) {  
//         // validate the first and last characters are the same  
//         if (str[i] !== str[len - 1 - i]) {  
//           alert( 'It is not palindrome'); 
//           return;
//         }  
//     }  
//   // If they are not the same, then it is not a palindrome
//     alert( 'It is a palindrome');  
// }  
  
// take input of the string or number from the prompt  
// const string = prompt('Enter a string or number to check for Palindrome: ');  
  
// const value = checkPalindrome(string);  

// // log it's value in the console
// console.log(value);
const str= "hello world a comman world is hello";
const findDuplicateWords = str => {
   const strArr = str.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};
console.log(findDuplicateWords(str));
