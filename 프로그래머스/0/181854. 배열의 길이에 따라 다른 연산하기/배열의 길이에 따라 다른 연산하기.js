function solution(arr, n) {
    const arrayTarget = arr.length % 2 === 0 ? 1 : 0;
    return arr.map((obj, i) => i % 2 === arrayTarget ? obj + n : obj)
}