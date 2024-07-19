//document.querySelector('h1').addEventListener('click',function(){
   //document.querySelector('h1').style.color = "green"
//})

let bytagname = document.querySelector('h1')
console.log(bytagname)

let byclass = document.querySelector('.yes')
console.log(byclass)

let byid = document.querySelector('#one')
console.log(byid)

// aattributr 

let byattribute =document.querySelector('h1[name="no"]')
console.log(byattribute)
///-------------------------------------------------------------------//

let bytagname1 = document.querySelector('h2')
console.log(bytagname1)

let byid1 = document.querySelector('#two')
console.log(byid1)

let byclassname1 = document.querySelector('.green')
console.log(byclassname1)


let byattribute1 = document.querySelector('h2[name="yellow"]')
console.log(byattribute1)

byclassname1.addEventListener('click',function(){
    byclassname1.textContent="DOM5 Practice"

})

//byid1.addEventListener('click',function(){
 //   byid1.textContent="exit"
//})

let bybutton = document.querySelector('button')
console.log(bybutton)

bybutton.addEventListener('click',function(){
    bybutton.textContent="exit"
})