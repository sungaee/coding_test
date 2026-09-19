function solution(arr) {
    return arr.flatMap(obj => Array(obj).fill(obj));
}