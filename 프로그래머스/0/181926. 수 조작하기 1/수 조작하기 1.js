function solution(n, control) {
    const res = 0
    for(let chr of control){
        if(chr === 'w'){
            n += 1;
        }else if(chr === 's'){
            n -= 1;
        }else if(chr === 'd'){
            n += 10;
        }else{
            n -= 10;
        }
    }
    return n;
}