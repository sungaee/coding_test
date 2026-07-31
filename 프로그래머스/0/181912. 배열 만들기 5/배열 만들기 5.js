function solution(intStrs, k, s, l) {
    let answer = []
    const arr = intStrs.map(str => str.split(''));
    
    for(let i = 0; i < arr.length; i++){
        const sliced = arr[i].slice(s, s+l).join('')
        const num = Number(sliced)
        if(num > k){
            answer.push(num)
        }
    }
   return answer
}