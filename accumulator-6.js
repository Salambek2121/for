let  mas = [1,2,3,4,5,6,7,8,9]
accumulatorOdd = 0
for(let i = 0; i < mas.length;i++){
    if(mas[i] % 2 !== 0){
        accumulatorOdd += mas[i]
    }
}console.log(accumulatorOdd)