let a1= document.querySelector('h1')
console.log(a1)

let a2= document.querySelector('#new')
console.log(a2)

let a3 =document.querySelector('.one')
console.log(a3)

let a4= document.querySelector('h1[name="old"]')
console.log(a4)

let li =document.querySelector('li')
console.log(li)

let allli = document.querySelectorAll('li')
console.log(allli)

let AL1 = document.querySelectorAll('[name="old"]')
console.log(AL1)


for (i=0; i<allli.length;i++){
    console.log(i)
    console.log(allli.length[i].textContent)
    allli.length[i].style.color="red"
    
}
