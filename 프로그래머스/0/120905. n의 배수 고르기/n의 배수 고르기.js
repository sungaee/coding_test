function solution(n, numlist) {
    return numlist.filter((obj) => obj % n === 0)
}