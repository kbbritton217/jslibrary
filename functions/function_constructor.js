//Function Constructors are used with the new keyword
//allows you to make an object type, "creating many objects of the same 'type'"
//call it with the new keyword to create a new instance of that type

var multiply = new Function('x', 'y', 'return x * y');
console.log(multiply(1,2));