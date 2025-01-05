// const myNums = [1,2,3,4,5,6,7,8,10]

// const newNum = myNums.filter((num) => num > 5)
// const newNum = myNums.filter((num) => {
//     return num > 5
// })
// console.log(newNum);

// used for each 
const myNums = [1,2,3,4,5,6,7,8,10]
const newArr = []
myNums.forEach((num) => {
    if(num > 5)
    {
        newArr.push(num);
    }
})
// console.log(newArr);

//books DB access
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//filter : give the output which is have the genre of History  

// const userbooks = books.filter((bk) => bk.genre === "History")
// console.log(userbooks);

//filter : give me the output of those books  that published 

// const userbooks2 = books.filter((bk) => bk.publish > 2000)
// console.log(userbooks2);

//filter : give me the output of those books  that published & ive the output which is have the genre of History 
const userbooks3 = books.filter((bk) => 
    {
        return bk.genre === "History" && bk.publish >= 1999;
    })
console.log(userbooks3); // if it not possible it will give empty array 

/***************************************** filter means true**************/