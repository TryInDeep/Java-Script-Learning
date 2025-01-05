//  ==============  Reduce ================ 

const myNum = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ]

// const mytotal = myNum.reduce((acc, currval) => {
//     return acc + currval 
// },0)



// Trying in arrow functon

// const mytotal = myNum.reduce((acc,currval) => acc + currval,0)
// console.log(mytotal);


// shopping cart 

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Mobile Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    }
]

const  totalMoney = shoppingCart.reduce((acc, item ) => (acc + item.price),0)
console.log(totalMoney);
