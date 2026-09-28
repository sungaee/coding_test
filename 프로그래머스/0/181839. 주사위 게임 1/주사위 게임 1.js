function solution(a, b) {
    const isAHold = a % 2 !== 0;
    const isBHold = b % 2 !== 0;
    
    if(isAHold && isBHold){ // 모두 홀수
        return a**2 + b**2
    } 
    if(isAHold || isBHold){ // a,b중 하나만 홀수
        return 2 * (a + b)
    }
    // 모두 홀수가 아니라면
    return Math.abs(a - b)
}