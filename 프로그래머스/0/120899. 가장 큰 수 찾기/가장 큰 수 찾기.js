function solution(array) {
    const num = Math.max(...array)
    const numAry = array.indexOf(num)
    return [num,numAry];
}