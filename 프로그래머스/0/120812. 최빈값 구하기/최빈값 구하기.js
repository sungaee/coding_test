function solution(array) {
    const counts = new Map()
    
    for(const num of array){
        counts.set(num, (counts.get(num) || 0) + 1)
    }
    const maxCount = Math.max(...counts.values())
    
    const modes = []
    
    for(const [num, count] of counts){
        if(count === maxCount) modes.push(num)
    }
    return modes.length > 1 ? -1 : modes[0]
}