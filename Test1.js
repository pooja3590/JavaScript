birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
 })
 console.log(q1)


 //program 1
 birthYear2=[1980,1982,1984,1990]
 let q2 = birthYear2.map(function(el,index,arr){
    return 2024-el

 })
console.log(q2)

 //Program 2 ---//[23,34,45,56,67,78,89,100]

 let numberslist = [22,33,44,55,66,77,88,99]
 let q3 = numberslist.map(function(el,index,arr){
     return el + 2
 })
 console.log(q3)



// program 3 -filter function

let marks = [60,62,44,77,33,44,56]
let q5 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q5)

//fn(acc,el,index,arr)

let numbersC = [10,10,10]
let q4 = numbersC.reduce(function(acc,el,index,arr){
    return acc + el // acc - 66
},0)
console.log(q4)


 