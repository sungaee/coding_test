function solution(my_string, n) {
    return [...my_string].reduce((acc, obj) => {
       return acc + obj.repeat(n)
    },"")  
}