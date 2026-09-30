function solution(n) {
    const arrayList = Array.from({length : n}, () => Array(n).fill(0))
  
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;
    
    while(top <= bottom && left <= right){
        // 1. 왼쪽 -> 오른쪽 (윗줄 채우기)
        for( let col = left; col <= right; col++){
            arrayList[top][col] = num++
        }
        top++;
        
        // 2. 위 -> 아래 (오른쪽 줄 채우기)
        for (let row = top; row <= bottom; row++){
            arrayList[row][right] = num++
        }
        right--;
        
        // 3. 오른쪽 -> 왼쪽 (아랫줄 채우기)
        for (let col = right; col >= left; col--){
            arrayList[bottom][col] = num++;
        }
        bottom--;
        
        // 4. 아래 -> 위 (왼쪽 줄 채우기)
        for (let row = bottom; row >= top; row--){
            arrayList[row][left] = num++;
        }
        left++
    }
    return arrayList;
}
