function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    return Number(nums.reduce((acc, obj, i) =>  acc.replaceAll(obj, i), numbers))

}