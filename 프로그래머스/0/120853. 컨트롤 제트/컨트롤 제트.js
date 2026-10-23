function solution(s) {
    let chr = s.split(" ")
    let stack = []
    for(const obj of chr){
        if(obj !== 'Z') {
            stack.push(Number(obj))
       }else{
           stack.pop()
       }
    }
    return stack.reduce((acc, num) => acc + num ,0)
}