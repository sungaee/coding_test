function solution(num_list) {
    let even = 0
    let odd = 0
    num_list.filter((obj) => {
        if(obj % 2 === 0){
            even++
        }else{
            odd++
        }
    })
    return [even,odd]
}