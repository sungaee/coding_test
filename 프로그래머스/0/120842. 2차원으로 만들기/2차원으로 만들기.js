function solution(num_list, n) {
    let rowCount = num_list.length / n
    
    return Array.from({length : rowCount}, (_, i) =>{
        return num_list.slice(i * n, i * n + n)
    })
}