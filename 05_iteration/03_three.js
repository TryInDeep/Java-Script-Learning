// ----------------------------- for in ----------------------------------
//object
const myobj = {
    js : "JavaScript",
    cpp:"C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myobj) {
    // console.log(`${key} shortcut for ${myobj[key]}`);
    
}

//array 
const programming = ["java","python","javasscript","cpp"]

for (const key in programming) {
   //console.log(`${programming[key]}`);
    
}



// We can't do in MAP iteration 
// const map = new Map();
// map.set('IND',"INDIA")
// map.set('USA',"UNITED STATE OF AMERICA")
// map.set('FR',"FRANCE")

// for (const key in map) {
//     console.log(key);
    
// }

// // console.log(map);
// //console.log();