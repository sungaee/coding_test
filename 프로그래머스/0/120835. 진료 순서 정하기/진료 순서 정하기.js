function solution(emergency) {
   const mapped = emergency.map((value, idx) => {
       return {value: value, idx: idx}
   })
   mapped.sort((a,b) => b.value - a.value) 
    
    let result = Array(emergency.length).fill(0)
    mapped.forEach((obj, i) => {
        result[obj.idx] = i + 1
    })
    return result;
}