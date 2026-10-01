function solution(age) {
    let ageList = [...String(age)] // ['2','3']
    let alpaList = "abcdefghij"
    return ageList.map((obj) => alpaList[obj]).join('')
}