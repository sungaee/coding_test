function solution(s) {
   return [...s].filter((obj) => s.indexOf(obj) === s.lastIndexOf(obj)).sort().join('')
}