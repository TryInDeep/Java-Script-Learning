function printingMyName (){
    console.log("T");
    console.log("R");
    console.log("I");
    console.log("D");
    console.log("I");
    console.log("P");
}
// printingMyName();


function addTwoNumbers(num1 , num2 ) // peremeters 
{
    //  const result = num1 + num2;
    //  return result;
    return num1 + num2;
     console.log("Tridp"); //after return statement code will not execute 
     
}

// addTwoNumbers(3,5); // arguments

const result = addTwoNumbers(3,5);
// console.log("Result :",result);

function userLoggedIn (userName = "Dan") //default value
{
    if (!userName){
        console.log("Please enter a user name");
        return
    }
    else{
        return `${userName} just logged in`
    }
    
}

// console.log (userLoggedIn("Tridip")) 
// console.log (userLoggedIn("")) // empty string 
// console.log (userLoggedIn()) // undefined 


function calculateCartPrice (...num1)
{
    return num1;  
}

console.log(calculateCartPrice(5,100,200));

// How can we use a object 

const user = {
    name : "Tridip Pramanick",
    price : 999
}

function handleObject (anyObject) 
{
    console.log(`The name is ${anyObject.name} and the price is ${anyObject.price}`)

}

// handleObject(user);
handleObject({
    name : "Tridip",
    price: 976
})


// how we can use  array 
const  myNewArray = [300,123,5658];

function retunSecondElement (getArray)
{
    return getArray[1];
}

// console.log(retunSecondElement(myNewArray));
console.log(retunSecondElement([100,200,2999]));
