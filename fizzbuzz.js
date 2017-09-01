// Create a program that prints 1 -100 to the console. For each number that is divisible by 3
//print "Fizz" instead, and for each number divisible by 5 print "Buzz" instead. For each number
// that is divisible by both 3 and 5 print "Fizz Buzz" rather than the number.

for (let p = 1; p <= 100; p++) {
	if (p % 3 === 0 && p % 5 === 0) {
		console.log("Fizz Buzz");
	} else if (p % 3 === 0) {
		console.log("Fizz");
	}else if ( p % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(p);
	}
} 