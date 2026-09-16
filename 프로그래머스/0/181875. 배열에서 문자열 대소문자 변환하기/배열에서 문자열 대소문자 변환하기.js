function solution(strArr) {
    return strArr.map((obj, idx) => idx % 2 === 0 ? obj.toLowerCase() : obj.toUpperCase())
}