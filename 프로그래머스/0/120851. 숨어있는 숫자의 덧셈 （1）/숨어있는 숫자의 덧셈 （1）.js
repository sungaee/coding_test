function solution(my_string) {
    let sum = 0;
    for(const char of my_string){
        if(!isNaN(char)){
            sum += Number(char)
        }
    }
    return sum
}