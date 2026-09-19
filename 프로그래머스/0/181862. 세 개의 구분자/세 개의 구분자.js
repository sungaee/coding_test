function solution(myStr) {
    let str = myStr.split(/[abc]/).filter(Boolean)
    return str.length === 0 ? ["EMPTY"] : str
}