function solution(my_string, s, e) {
    var answer = '';
    const first = my_string.slice(0, s);
    const target = my_string.slice(s, e+1);
    const last = my_string.slice(e + 1)
    
    const reverseTarget = target.split("").reverse().join("")
    
    
    return first + reverseTarget + last;
}