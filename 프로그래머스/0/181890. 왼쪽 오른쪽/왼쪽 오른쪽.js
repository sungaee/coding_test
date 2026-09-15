function solution(str_list) {
    var answer = [];
    let lStr = str_list.indexOf("l")
    let rStr = str_list.indexOf("r")
    if(lStr === -1 && rStr === -1){
        return []
    }
    if(lStr !== -1 && (rStr === -1 || lStr < rStr)){
        return str_list.slice(0, lStr)
    }else{
        return str_list.slice(rStr + 1)
    }
}