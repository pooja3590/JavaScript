// Object

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:23,
    mobile:7709192441
}
// Retrive (dot notation and bracket notation)
console.log(info2['firstName'])
console.log(info2.firstName)

// Update (dot notation and bracket notation)
info2['firstName'] = "ninad"
info2['lastName'] = "dani"
console.log(info2)

info2.firstName = "rahul"
info2.lastName = "singh"
console.log(info2)
 
// Add(dot notation and bracket notation)
info2.city = "pune"
info2['country'] = "india"
console.log(info2)
// Remove(dot notation and bracket notation)

delete info2['city']
delete info2.firstName
console.log(info2)

//-------------- program 2----------------------------------

let vehicle = {
    color:"red",
    type:"sedane"
}
// console.log(vehicle.color)
// vehicle.color = "blue"
// vehicle.model = "QA"
// delete vehicle.type

vehicle = {
    color:"red",
    type:"sedane"
}

console.log(vehicle['color'])
vehicle['color'] = "red"
vehicle['model']  = "Q4"
delete vehicle['model']


let info33 = ["niand","dani",23,55]

for(let i = 0 ; i < info33.length ; i++){
    console.log(info33[i])
}
//-------------------------------
info4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobileNo:7709192441,
    age:23,
    rollNo:89,
    age:44
}
// ------------------loop - bracket notation-------------------------
for(let prop in info4){
    console.log(prop,info4[prop])
}
