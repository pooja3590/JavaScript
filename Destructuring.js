//Destructuring

//Array ---------------------------------------------------------
let cityL1 = ["pune","mumbai","dehli","jaipur"]
let [p1,p2,p3,p4] =cityL1
console.log (p1)

let Category = [["onion","tomato","patato"],["carrot","radish","cucumber"],["spinach","cauliflower","cabbage"]]
console.log (Category[0][1])

let [[p11,p12,p13],[p14,p15,p16],[p17,p18,p19]] = Category
console.log (p11,p12,p19,p15)

//------------------------objects Destructuring--------------------------------------

let School ={
     Name: "dyalsingh",
     Place:"karnal",
     type1school:"English",
     type2school:"Hindi",
     noofStudents: 250
}

let{Name:N1,noofStudents:S1,Place:P20}=School
console.log(N1,S1,P20)


//------------------------------------------------------

let SchoolL1 ={
    Name: "DPS",
    Place:"Dehli",
    type1school:"English",
    noofStudents: 250,
    class:["SectionA","SectionB","SectionC"],
    TeacherName:{
        Teacher1:"Vaibhav",
        Teacher2:"Sanjay",
        Teacher3:"Chinmay",
        Teacher4:"Mayuri",
}
}

let {Name} = SchoolL1

//Place:P2,class:[Sec1]













