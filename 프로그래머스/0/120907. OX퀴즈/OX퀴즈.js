function solution(quiz) {
    let res
   return quiz.map((item) => {
        const [a, op, b, , result] = item.split(" ")
        switch(op){
            case "+" : res = Number(a) + Number(b); break;
            case "-" : res = Number(a) - Number(b); break;
        }
         return res === Number(result) ? "O" : "X" 
    })
}