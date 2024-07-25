let textbox = document.querySelector('input')
console.log(textbox)

let classoneB1 = document.querySelector('#one')
console.log(classoneB1)

let listL2 = document.querySelector('ul')
console.log(listL2)

classoneB1.addEventListener('click',function(){
    let newLi = document.createElement('li')
    let valuei = textbox.value
    newLi.textContent= valuei
    createbuttons(newLi)
    listL2.append(newLi)
    textbox.value =""
})

/*creating buttons new added list element*/





