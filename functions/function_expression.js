//Function Expressions can be named or anonymous
//not hoisted - cannot be used before they are defined
//Can be used as an IIFE

var getRectArea = function(width, height){
    return width * height;
}

console.log(getRectArea(3,4));

(function(num1, num2){
    console.log(num1 + num2);
})(3,4);

