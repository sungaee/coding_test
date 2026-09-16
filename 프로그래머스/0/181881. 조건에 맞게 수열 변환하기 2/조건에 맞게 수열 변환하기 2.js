function solution(arr) {
    let current = arr;
    let num = 0;
    
    while(true){
        const next = current.map((n) => {
            if(n >= 50 && n % 2 === 0){
                return n / 2
            }else if(n < 50 && n % 2 !== 0){
                return n * 2 + 1
            }else {
                return n
            }
        });
        
        if(JSON.stringify(current) === JSON.stringify(next)){
            return num;
        }
        
        current = next;
        num++;
    }
}