function solution(num_list) {
    var answer = 0;
    let odd= '';
    let even= '';
    for(let chr of num_list){
        if(chr % 2 === 0){
            even += chr
        }else
            odd += chr
    }
    
    return Number(even)+Number(odd);
}
