let birthyear3=[1948,1980,1982,1990,1984]
let q11 = birthyear3.map(function(el,index,arr){
    return 2024-el
})
console.log(q11)

//---------------------------------------------------------//

//program - to add up the value 

let numberlist =[201, 301,401,501]
let q12 = numberlist.map(function(el,index,arr){
    return el + 2 
})
console.log(q12)
//------------------------------------------------------------//
//Program - to filter the values  

let marks = [60,70,80,98,99,100,200,300,400,500]
let q13 = marks.filter(function(el,index,arr){
    return el >= 99
})
console.log (q13)

//------------------------------------------//

//program -to get total value 

let listtotal =[10,20,70]
let q14 = listtotal.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console .log (q14)

//program

let NumbersList2 = [10,20,30,40,50,60,70,80,90,100]
let q15= NumbersList2.find(function(el,index,arr){
    return el>90
})


   


