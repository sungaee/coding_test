function solution(array, n) {
    return array.reduce((acc,obj,i) => {
        obj === n ? acc += 1 : 0 
        return acc
        },0)
}