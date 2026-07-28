function solution(l, r) {
    var answer = [];
    
    for(let i = l; i <= r; i++){
        const isValid = String(i).split('').every(ch => ch === '0' || ch === '5');
        if(isValid) answer.push(i)
    }
    
    return answer.length > 0 ? answer : [-1];
}