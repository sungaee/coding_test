function solution(number) {
    var answer = 0;
    for(let chr of number){
        answer += Number(chr)
    }
    
    return answer % 9;
}