function solution(num_list) {
    let oddNum = 0;
    let evenNum = 0
    
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 === 0) {
            oddNum += num_list[i]
        }else{
            evenNum += num_list[i]
        }
    }
    
    return Math.max(oddNum, evenNum);
}