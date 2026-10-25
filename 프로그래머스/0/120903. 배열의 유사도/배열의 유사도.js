function solution(s1, s2) {
    return s1.filter((obj) => s2.includes(obj)).length
}