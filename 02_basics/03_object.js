// Object 
// Object.create
// singleton 
const mySym = Symbol("key1")
const jsuser = {
    name : "Tridip",
    "full name" : "Tridip Pramanick", // useally js set like this if it's not like key value pair we need access the value in []
    [mySym] : "myke1", // Symbol Syntax
    email : "Tridip@google.com",
    age : 22,
    isLoggedIn : false,
    Location : "Bangalore",
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(jsuser.name);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

//for changing the value in object 
jsuser.email = "Tridip@chatgpt.com"
//console.log(jsuser.email);

// freeze any object 
//Object.freeze(jsuser);
jsuser.email = "Tridip@gmail.com"


//console.log(jsuser);

jsuser.greeting = function (){
    console.log("Hello Js User");
    
}

jsuser.greetingTwo = function (){
    console.log(`Hello Js User ${this.Location}`);
    
}


// console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

