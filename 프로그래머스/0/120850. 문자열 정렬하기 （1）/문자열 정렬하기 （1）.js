function solution(my_string) {
    let numList = [...my_string].filter((obj) => !isNaN(obj))
    return numList
        .map(Number)
        .sort((a,b) => a-b)
}