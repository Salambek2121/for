let sum = ['jawa', 'css', 'php', 'html', 'js', 'python', 'swift', 'sq1', 's#' ,'c++']
let accumulator = []
let i = 0
while(i < sum.length){
    if( sum[i].length  > 3){
        accumulator.push(sum[i])
    }
    i++
}
console.log(accumulator)