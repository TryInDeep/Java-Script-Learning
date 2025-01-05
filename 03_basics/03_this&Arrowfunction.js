const user = {
    username : "Tridip",
    price : 977,
    // this keyword uses for current context 
    welcomemessage : function (){
        console.log(`${this.username}, welcome to the website!!`); 
    }
}

// user.welcomemessage()

// console.log(user)

// user.username = "Kousik"
// user.welcomemessage()

// console.log(user)
// console.log(this);

// function chai (){
//     myname : "Tridip",
//     console.log(this.myname) // we can't use this in function we can use in object only 

// }
// chai()

// function as a variable 
// const chai = function () 
// {
//     username : "Tridip",
//     console.log(this.username);
    
// }

// chai()

//  

// const chai =  ()  => { 
//     username : "Tridip",
//     console.log(this.username);
    
// }

// chai();


// const addTwo = (num1,num2) => {
//     return num1 + num2; // explicit return
// }

// const addTwo = (num1,num2) => (num1 + num2) // implicit return

const addTwo = (num1,num2) => ({username:"Tridip"})



console.log(addTwo(3,4));
