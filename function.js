// function rectangleArea(a,b){
//     return (a*b);
// }
// console.log(rectangleArea(10,20));
// console.log(rectangleArea(30,30));
// function getFactorial(num) {
//     if(num==1){
//       return 1; // Termination condition
//     }
//     if(num==0 || num<0){
//       return 0; // Termination condition
//     }
//     return num*getFactorial(num-1);
//   }
  
//   console.log(getFactorial(5)) // 120
//   console.log(getFactorial(10)) // 479001600
  function letterCount(str, c) {
    var count=0;
    str=str.toLowerCase(); //Case insensitive
    for(var i=0;i<str.length;i++){
       if(str.charAt(i)==c){ 
         count++; //Increment count
       }
    }
    return count;
  }
  
  console.log(letterCount("Connect",'c')) 
  console.log(letterCount("first person",'s')) 