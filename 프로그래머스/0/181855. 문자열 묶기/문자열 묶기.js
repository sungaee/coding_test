function solution(strArr) {
       let countLength = strArr.reduce((acc, str) => {
           let len = str.length;
           acc[len] = (acc[len] || 0) + 1;
           return acc;
       },{})
       return Math.max(...Object.values(countLength))
}