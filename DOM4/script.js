let inputT =document.querySelector('input')
console.log(inputT)

let buttonB2 = document.querySelector('button')
console.log(buttonB2)

let listL1 = document.querySelector('ul')
console.log(listL1)

buttonB2.addEventListener('click',function(){
    let addvalue = inputT.value
    let newele = document.createElement('ul')
    newele.textContent = addvalue
    listL1.appendchild(newele)

})
