// if & Switch  you know 


// truly and falsy value

const useremail = []
if(useremail)
{
    console.log(`User Email: ${useremail}`);
}
else{
    console.log("user dont have any email");
   
 }


// falsy value 
// false, 0, -0, BigInt 0n, "",null, underfined, NaN

// truthy values
// "0", 'false' , " ", [] , function(){} , 


if (useremail.length === 0){

    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}


// Nullish coalescing operator (??) | null , Undefined

//  let val1 = 5 ?? 10;
// let val1 = null ?? 10;
// let val1 = undefined ?? 10;
let val1 = null ?? 10 ?? 15;
console.log(val1);

// Ternary Operator 
// condintion ? true : false ;

const candyPrice = 80 ;
candyPrice > 80 ? console.log("Price more than 80 ") : console.log("Price less than 80");






