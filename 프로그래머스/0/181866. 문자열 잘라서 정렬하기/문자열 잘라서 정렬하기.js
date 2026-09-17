function solution(myString) {
   return myString
       .split("x")
       .filter((obj) => obj !== "")
       .sort()  
}