function solution(str_list, ex) {
    return str_list.filter((obj) => !obj.includes(ex)).join("")
}