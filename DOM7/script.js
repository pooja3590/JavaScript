
//CSS selector -----query selector --
let idname =document.querySelector('#one')
console.log (idname)

//------get element method by id  ------

let id2 = document.getElementById('one')
console.log(id2)

//------get element method by class name  ------

let getbyclass1 =document.getElementsByClassName('class1')
console.log(getbyclass1)

let getbyclass2 =document.getElementsByClassName('fr')
console.log(getbyclass2)
//--------------------------------query selector by class name -------

let byClassName = document.querySelectorAll('.fr')
console.log(byClassName)  // nodeList

// bytagName query selector -------------------------------------

let allElements = document.querySelectorAll('li')
console.log(allElements) // nodeList

// bytagName get element  -------------------------------------

let allElementsB = document.getElementsByTagName('li')
console.log(allElementsB) // html collections

// name----------------query selector 
let byNames = document.querySelectorAll('[name = "h1tag"]')
console.log(byNames)

// name----------------get element 

let byNamesB = document.getElementsByName('h2tag')
console.log(byNamesB)


// javascript attribute create
// javascript attribute update 
// javascript attribute delete 
// javascript attribute value retrive 




// javascript element create
// javascript element update 
// javascript element - retrive
// javascript element delete




let ele1 = document.getElementById('two')
console.log(ele1.className)

ele1.classList.add('three')
console.log(ele1.className)

ele1.classList.remove('class2')
console.log(ele1.className)

// toggle 
ele1.classList.toggle('three')
ele1.classList.toggle('three')
console.log(ele1.className)