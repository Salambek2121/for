let sum = ['salam', 'muslim', 'djamal', 'antar', 'muhammad', 'adam', 'islam', 'salah', 'mansur', 'ibrohim']
let accumulator = []
for(let i = 0; i < sum.length;i++){
    if(sum[i][0] === 'a'){
    accumulator.push(sum[i])
    }
}
console.log(accumulator)