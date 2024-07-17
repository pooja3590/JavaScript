let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        skills:["sql"]
    },
    {
        firstName:"poorva",
        lastName:"vyas",
        age:29,
        skills:["javascript","django","cpp"]
    },
    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        skills:["python","javascript","sql","power BI"]
    },
    {
        firstName:"amit",
        lastName:"bhure",
        age:28,
        skills:["python","jquery"]
    }

]

students.forEach(function(el){
    console.log(students.firstName[0]) 
})

students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})

students.forEach(function(el){
    if(el.age < 30)
        console.log (el.skills)
})

students.forEach(function(el){
    if (el.skills.includes("python")){
        console.log(el.firstName)
    }
})


// print name of students with python
//students.forEach(function(el){
  //  if(el.skills.includes("python")){
    //    console.log(el.firstName)
    //}
//})



