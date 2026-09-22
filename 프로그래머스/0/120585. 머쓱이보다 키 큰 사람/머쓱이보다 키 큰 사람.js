function solution(array, height) {
    return array.filter((obj) => obj > height).length;
}