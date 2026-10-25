function solution(n) {
   return [...String(n)].reduce((acc, obj) => acc + Number(obj), 0)
}