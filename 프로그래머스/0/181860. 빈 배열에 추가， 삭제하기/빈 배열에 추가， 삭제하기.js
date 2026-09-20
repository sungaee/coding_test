function solution(arr, flag) {
    return flag.reduce((acc, isTrue, i) => {
        if(isTrue){
            return acc.concat(Array(arr[i] * 2).fill(arr[i]))
        }else{
            return acc.slice(0, acc.length - arr[i])
        }
    },[])
}