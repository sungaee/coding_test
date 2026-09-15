function solution(todo_list, finished) {
   const fIdx = finished.reduce((acc, value, idx) => {
        if(!value) acc.push(idx)
        return acc
    },[])
   const res = fIdx.map(idx => todo_list[idx])
   return res
}