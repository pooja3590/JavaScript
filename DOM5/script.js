let textbox = document.querySelector('input')
console.log(textbox)

let buttonB3 = document.querySelector('button')
console.log(buttonB3)

let listL2 = document.querySelector('ul')
console.log(listL2)

buttonB3.addEventListener('click',function(){
    let newLi = document.createElement('li')
    let valuei = textbox.value
    newLi.textContent= valuei
    listL2.append(newLi)
    textbox.value =""
})

