// STACK (uses Primitive ) and HEAP (uses Non-Primitive)

//Stack means copy of a variable 


let myYoutubename = "Tridip"
let anotherYTName = myYoutubename

anotherYTName = "TryInDeep"

console.log(myYoutubename);
console.log(anotherYTName);



//Heap reference of origianl value

let userOne = {
    email:"user@gmail.com",
    upi: "tridip@ybl"
}

let userTwo = userOne;
userTwo.email = "Tridipprmanick@ltimindtree.com"

console.log(userOne.email);
console.log(userTwo.email);





