const tinderUser  = {
    name : "tridip pramanick",
    mail : "Tridip@gmail.com",
    gender : "men",
    number : " 7044254471",
    location :"Bangalore"
    
}

// if you want to acess the youhave do (.)  method

console.log(tinderUser.name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isloggedIn"));

const course = {
    cousreName : "Js in Hindi",
    price :"999",
    courseInstructor : " Tridip Pramanick"
}

// behalf of using  (.) we will use syntactical sugar
console.log(course.courseInstructor);

// Value de - structure 
const {courseInstructor : ME } = course;

console.log(ME);

// difference between object and json 
// object key value pairs and json uses key value pairs but string 

// {
//     "name": "Tridip",
//     "course" : "js in hindi",
//     "price" : "free"
// }

// api can get in array format 
[
    {},
    {},
    {}
]