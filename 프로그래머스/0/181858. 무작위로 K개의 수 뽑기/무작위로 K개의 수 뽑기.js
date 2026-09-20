function solution(arr, k) {
    const unique = [...new Set(arr)]
    if(unique.length >= k){
         return unique.slice(0, k)
    }
    return unique.concat(Array(k - unique.length).fill(-1) )
}