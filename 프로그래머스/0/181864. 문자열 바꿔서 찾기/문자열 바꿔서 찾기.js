function solution(myString, pat) {
    const result = myString
        .split('')
        .map(char => {
            if (char === 'A') return 'B'
            if (char === 'B') return 'A'
            return char;
        })
        .join('')
    
    return result.includes(pat) ? 1 : 0;
}