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
    createButtons(newLi)
    listL2.append(newLi)
    textbox.value =""
})

/*creating buttons new added list element*/

function createButtons(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)
}

function createButtons(li){
    let U= document.createElement('button')
    U.textContent='Up'
    U.classList.add('Up')
    li.appendChild(U)

}

function createButtons(li){
    let D= document.createElement('button')
    D.textContent ='Down'
    D.classList.add('down')
    li.appendChild(D)
}


