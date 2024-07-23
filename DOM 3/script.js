let Heading = document.querySelector('h1')
console.log(Heading)
let InputT1 = document.querySelector('input')
console.log(InputT1)
let ButtonB1 = document.querySelector('button')
console.log (ButtonB1)

ButtonB1.addEventListener('click',function(){
    let readvalue = InputT1.value
    Heading.style.color = readvalue
    InputT1.value=""
})





//buttonT.addEventListener('click',function(){
   // let colorText = inputT.value
   // headT.style.color = colorText
   // inputT.value = ""
//})