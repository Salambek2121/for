let sum = [ -2, -3 , -44, 1, 2 ,4, 6, 7, 8 ,9]
accumulator = 0
let i = 0 
while(i < sum.length){
    if(sum[i] > 0 ){
    accumulator += sum[i]
}
i++
}
console.log(accumulator)