let NumbersList = [11,22,33,44,55]
let q15 = NumbersList.find(function(el,index,arr){
    return el <= 22
})
console.log (q15)



let numbersN  = [33,55,66,33,44,55,10,5]
let q9  = numbersN.some(function(el,index,arr){
    return el >= 5
})
console.log(q9)


// every()

let q10 = numbersN.every(function(el,index,arr){
    return el > 10
})
console.log(q10)


let names = ['p001','P002']
let q2 = names.push("nisha")
console.log(names)
console.log(q2)




