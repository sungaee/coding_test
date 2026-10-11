function solution(numbers) {
    numbers.sort((a,b) => b-a)
    let large = numbers.slice(0,2)
    const [a, b] = large
    return a * b
}