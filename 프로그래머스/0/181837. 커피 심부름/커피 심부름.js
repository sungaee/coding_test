function solution(order) {
    let price = 0
    return order.reduce((acc, price) => {
       if(price.includes("americano") || price === "anything"){
           acc += 4500
       } else{
           acc += 5000
       }
        return acc
    },0)   
}