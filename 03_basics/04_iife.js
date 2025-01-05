// Immediatly Invoked Function Expression (IIFE)

(function chai ()
{
    // Named IIFE
    console.log(`DB CONNECTED`);
})();
// ()() => (function defination)(execution  call)
// to revoke the global palution in create function we use IIFE
// chai();

((name) => {
    //Unnamed IFFE
    console.log(`DB connected Two ${name}`);
    
})("Tridip"); // some time ; is needed