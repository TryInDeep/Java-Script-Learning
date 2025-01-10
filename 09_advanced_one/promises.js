// fetch('https://something.com').then().catch().finally();

//+++++++++++++++++++ USING RESOLVED and REJECT +++++++++++++++++ //

// method 1 
const promiseOne = new Promise(function(resolve, reject){
    // do async task 
    // db calls, cryptography , networkcall 
    setTimeout(function () {
        console.log("Async task is completed!!");
        resolve();
    },1000)
    
});
promiseOne.then(function() {
    console.log("Promise consumed!!");
})


// method 2
new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is completed!!");
        resolve();
},1000)
}).then(function(){
    console.log("Promise Consumed!!");
    
})


// method 3 

// sending arguments in resolve , method 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({username:"Tridip", emailId : "Tridip@tryindeep.com"});     
    },1000)
})

promiseThree.then(function (user){
    console.log(user);

})



// method 4 

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Tridip", password : "123"})
        }else{
            reject('ERROR : Something went wrong')
        }
        
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
 console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))


// method 5
