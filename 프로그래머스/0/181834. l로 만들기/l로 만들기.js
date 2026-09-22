function solution(myString) {
    let shrArray = [...myString]
    return shrArray.map((obj) => obj < 'l' ? 'l' : obj).join("")
}