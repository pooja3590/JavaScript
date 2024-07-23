let Heading = document.querySelector(h1)
console.log(Headingeading)
let Inputtext = document.querySelector(input)
console.log(Inputtext)
let ButtonB1 = document.querySelector(button)
console.log (ButtonB1)

ButtonB1.addEventListener('click',function(){
    let Colortext = Inputtext.value
    Headingeading.style.color = Colortext
})



//buttonT.addEventListener('click',function(){
   // let colorText = inputT.value
   // headT.style.color = colorText
   // inputT.value = ""
//})