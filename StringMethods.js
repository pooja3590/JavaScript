
// methods 

let city = "pune"
console.log(city)

//  0   1   2    3
//  p   u   n   e
console.log(city[0])

// charAt()
let e1 = city.charAt(0)
console.log(e1)

// concat()
let str1 = "i am learning js"
let str2 = " and also learning python"
let str3 = str1.concat(str2)
console.log(str3)

// includes()
let city2 = "nagpur"
let str4 = city2.includes("nag")
let str5 = city2.includes("n")
console.log(str4)
console.log(str5)

// indexOf()
let city4 = "wardha"
// 0   1    2   3   4  5
// w   a    r   d   h  a
let e2 = city4.indexOf("A")
console.log(e2)
let e4 = city4.lastIndexOf('a')
console.log(e4)

// replace()
let info = "i am learning javascript"
e5 = info.replace("javascript","python")
console.log(e5)

//slice()
let city5 = "chandrapur"
// 0    1    2   3   4   5  6  7   8  9
// c    h    a   n   d   r  a  p   u  r
// -10 -9   -8  -7  -6  -5 -4 -3  -2  -1
//city5.slice(startIndex,endIndex(not included))

console.log(city5.slice(2))
console.log(city5.slice(2,8))
console.log(city5.slice(-9,8))
console.log(city5.slice(1,-3))
console.log(city5.slice(-7))
console.log(city5.slice(-1,-4))

// startsWith()

let city7 = "nagpur"
let q1 = city7.startsWith('n')
let q2 = city7.startsWith('nag')
let q3 = city7.startsWith('Nag')
console.log(q1)
console.log(q2)
console.log(q3)

// endsWith()

let city8 = "pune"
let q4 = city8.endsWith("e")
let q5 = city8.endsWith("ne")
let q6 = city8.endsWith("E")

console.log(q4)
console.log(q5)
console.log(q6)

// trim()

let city10 = " goa "
// let q7 = city10.trim()
// console.log(q7.length)


// trimStart()
// city10 = " goa "
// let q8 = city10.trimStart()
// console.log(q8.length)


// trimEnd()
city10 = "goa "
let q11 = city10.trimEnd()
console.log(q11.length)

// toUpperCase()

let city11 = "wardha"
let q12 = city11.toUpperCase()
console.log(q12)

// toLowerCase()
city12 = "NAGPUR"
let q13 = city12.toLowerCase()
console.log(q13)

// Split()

let email = "chinmaydeshpande010@gmail.com"
let q14 = email.split('@')
console.log(q14)
//["chinmaydeshpande010","gmail.com"]

let  namee = "chinmaydeshpande"
let q15 = namee.split('a')
console.log(q15)
console.log(q15.join("a"))

//["chinm","ydeshp","nde"]

// Substring()


//-----------------------------------------------------------------//

let firstName = "Chinmay"
let q1 = firstName.toUpperCase()
console.log(q1)


let q2 = firstName.toLowerCase()
console.log(q2)

// program 2

// startswith()
// endswith()

let lastName = "deshpande"
let q3 = lastName.startsWith("de")
let q4 = lastName.startsWith("D")
let q5 = lastName.startsWith("d")
console.log(q3)
console.log(q4)
console.log(q5)

// program 3

let lastNamee = "Dani"
let q6 = lastNamee.endsWith("i")
let q7 = lastNamee.endsWith("ni")
let q8 = lastNamee.endsWith("Ni")

console.log(q6)
console.log(q7)
console.log(q8)

// program 4
let info2 = "i am learning js"
let q9 = info2.replace('js',"python")
console.log(q9)


//program 6

let cit1 = "wardha"
// 0    1   2   3   4   5 
// w    a   r   d   h   a
let q10 = cit1.indexOf('a')
let q11 = cit1.indexOf('A')
let q12 = cit1.lastIndexOf('a')

console.log(q10)
console.log(q11)
console.log(q12)

let q13 = cit1.charAt(2)
console.log(q13)

// program 7
// trim()

let city2 = " nagpur "
let q14 = city2.trim()
console.log(q14)
console.log(q14.length)

// trimStart()
city2 = " nagpur "
let q15 = city2.trimStart()
console.log(q15.length)

// trimEnd()
city2 = "  nagpur "
console.log(city2.length)
let q16 = city2.trimEnd()
console.log(q16.length)

// includes()
let fruits  = "apple mango banana grapes orange papaya"
let q17 = fruits.includes('Grapes')
console.log(q17)


// concat()
let fn = "chinmay"
let q18 = "The one who is learning js is ".concat(fn)
console.log(q18)

// splice()
let city4 = "chandrapur"
//city4.slice(startIndex,endIndex)

// 0      1       2      3      4     5    6     7      8     9
// c      h       a      n      d     r    a     p      u      r
//-10     -9     -8     -7     -6    -5   -4    -3     -2     -1

console.log(city4.slice(3))
console.log(city4.slice(3,8))
console.log(city4.slice(3,-4))
console.log(city4.slice(-9,7))
console.log(city4.slice(-9))
console.log(city4.slice(-9))
console.log(city4.slice(-1,-4))


