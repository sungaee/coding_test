function solution(arr) {
  return arr.map((obj) => {
      if(obj >= 50 && obj % 2 === 0){
        return  obj / 2
      }else if(obj < 50 && obj % 2 !== 0){
        return obj * 2
      }else{
        return obj
      }
  })  
}