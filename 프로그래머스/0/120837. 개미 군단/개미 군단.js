function solution(hp) {
    let count = 0;
    let remain = hp;
    
    // 장군개미
    count += Math.floor(remain / 5) 
    remain = remain % 5 
    
    // 병정개미
    count += Math.floor(remain / 3)
    remain = remain % 3 
    
    // 일개미
    count += Math.floor(remain / 1) 
    remain = remain % 1 
    
    return count
}