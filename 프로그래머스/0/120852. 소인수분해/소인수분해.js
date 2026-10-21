function solution(n) {
   let divisor = 2
   let res = []
    while(n >= 2){
        if(n % divisor === 0){
            res.push(divisor)
            n = n / divisor    
        }else{
            divisor++
        }
    }
    return [...new Set(res)]
}