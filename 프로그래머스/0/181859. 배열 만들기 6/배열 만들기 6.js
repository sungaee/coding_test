function solution(arr) {
    let stk = []
    for(let obj of arr){
        if(stk.length > 0 && stk.at(-1) === obj) {
            stk.pop()
        }else{
            stk.push(obj)
        }
    }
    return stk.length > 0 ? stk : [-1]
}