//arrow function is an ES6 construct that allows for function declaration w/out binding issues
//arrow functions do not have their own "this", 
//which means "this" will refer to the original/parent object

var favoriteThings = ['raindrops', 'roses', 'whiskers', 'kittens'];

console.log(favoriteThings);


var anonFunc = favoriteThings.map(function(thing){
    return thing.length;
});
console.log(anonFunc);

var arrowFunc = favoriteThings.map((thing) => {
    return thing.length;
});
console.log(arrowFunc);

console.log(favoriteThings.map(({length}) => length ));

function Student(){
    this.age = 18;

    setInterval(() => {
        this.age++; //"this" refers to Student() not mature()
    }, 1000);
}

var s = new Student();

console.log(s.age);
