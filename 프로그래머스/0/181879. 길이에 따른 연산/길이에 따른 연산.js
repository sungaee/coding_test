function solution(num_list) {
    if(num_list.length >= 11){
        return num_list.reduce((acc, n) => acc + n, 0)
    } else{
        return num_list.reduce((acc, n) => acc * n, 1)
    }
}