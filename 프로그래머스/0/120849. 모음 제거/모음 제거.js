function solution(my_string) {
    const chr = ['a','e','i','o','u']
    return [...my_string]
        .filter((obj) => !chr.includes(obj))
        .join('')
}