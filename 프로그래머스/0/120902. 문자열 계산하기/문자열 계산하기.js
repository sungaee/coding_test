function solution(my_string) {
    const arr = my_string.split(' ');
    
    // 첫 번째 숫자로 누적값 초기화
    let result = Number(arr[0]);
    
    // 인덱스 1부터 시작하여 연산자와 다음 숫자를 2개씩 건너뛰며 순회
    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const nextNum = Number(arr[i + 1]);
        
        switch (operator) {
            case '+':
                result += nextNum;
                break;
            case '-':
                result -= nextNum;
                break;
        }
    }
    
    return result;
}