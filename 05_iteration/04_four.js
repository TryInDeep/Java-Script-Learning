// ===================for Each Loop==============
//================== call back function ==============

const programming = ["java","python","javasscript","cpp","ruby"]


//function defination

programming.forEach(function (key){
    //console.log(key);  
})

//arrow function 

programming.forEach((key)=>{
    // console.log(key);
})


// set as function

function printme (key)
{
    //console.log(key);
}

programming.forEach(printme)


// other peremeters in for each loop 

programming.forEach((key, index, arr)=>{
    // console.log(key,index,arr);
})


// how get access of a object which is under in a array 

const mycoding = [
    {
        languageName : "JavaScript",
        languageFile : "js"
    },
    {
        languageName : "JAVA",
        languageFile : "java"
    },
    {
        languageName : "Python",
        languageFile : "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.languageName);

})

