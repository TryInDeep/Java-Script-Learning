//--------------------------- for of ----------------------------------

// ["","",""]
// [{},{},{}]

// array 
const arr = [23,45,76,98];
for (const i of arr) {
    // console.log(i);
     
}
// =-------- string ---------
const name = "tridip";

for (const char of name) {
    // console.log(`Character is ${char}`);
    
}

//================Map=============== 

const map = new Map();

map.set('IND',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('FR',"FRANCE")

// console.log(map);
console.log();


for (const [key , value] of map) {
    // console.log(key+":-"+value);
}

//========= object =============
/*
const myObject = {
    "game1" : "NFS",
    "game2" : "BGMI"
}

for (const [key,value] of myObject) {  // Can't
    console.log(key+":-"+value);  
}
*/
