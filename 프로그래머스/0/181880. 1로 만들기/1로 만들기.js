function solution(num_list) {
    let current = num_list
    let num = 0;
    
    while(true){
        const isAllOne = current.every((n) => n === 1)
        if(isAllOne){
           break;
        }
        current = current.map((obj) => {
            if(obj === 1){
                return 1;
            }
            num++
            if(obj % 2 === 0){
                return obj / 2
            }else{
                return (obj - 1) / 2
            }
        })
    }
    return num;
}