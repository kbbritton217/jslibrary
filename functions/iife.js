//Immediately Invoked Function Expression - runs as soon as it is defined
//does not have to be called
//contains 1.an anonymous function with lexical scope, prevents global pollution
    //prevents access to variables defined within the IIFE
//also contains 2.an immediately executing function expression, how JS engine 
    //interprets the function


(function(){
    var myName = "Kaylea";
})();
//console.log(myName); //--doesn't work, cannot access var. from outside the IIFE
var result = (function(){
    var myName = "Kaylea";
    return myName;
})();
//console.log(myName); //--doesn't work, cannot access var. from outside the IIFE

console.log(result);

//entire function is enclosed in () with () at the end as well