const marvel_heros  = ["thor","Captian America","Spiderman"]

const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// concat creates a new array 



const all_new_heros  = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4,5,6], 7, [6,7, [4, 5]]]

const my_unusable_another_array = another_array.flat(Infinity)
console.log(my_unusable_another_array);
console.log();

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Tridip "})); // interesting 

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3))