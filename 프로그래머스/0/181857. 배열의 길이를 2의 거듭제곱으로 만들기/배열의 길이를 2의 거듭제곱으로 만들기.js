function solution(arr) {
    let target = 1;
    while(target < arr.length){
        target *= 2;
    }
    
    const result = [...arr]; // 스프레드로 내용물을 꺼내서 새 배열에 담음
    while(result.length < target){
        result.push(0)
    }
    return result
    
}