function solution(rank, attendance) {
    let trueList = attendance.reduce((acc, obj, idx) => {
        if(obj) acc.push(idx)
        return acc
    },[])
 trueList.sort((a,b) => rank[a] - rank[b])
  const [a, b, c] = trueList
  return (10000 * a) + (100 * b) + c
}