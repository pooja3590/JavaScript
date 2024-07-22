let Headtag = document.querySelector('h1')
console.log (Headtag)

let button= document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
    button.style.color ='red'
})

button.addEventListener('click',function(){
    Headtag.style.color = 'green'
    Headtag.style.backgroundColor ='blue'
    Headtag.textContent ='new Text'
    Headtag.textContent = Headtag.textContent.toUpperCase()
    
})

