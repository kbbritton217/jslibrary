let user = Math.floor(Math.random()*90)

function userInput(u){
	
		if (u <= 18 ) {
			console.log("You have your whole life ahead of you!");
		} else if (u <= 25){
			console.log("You can vote but you can't rent a car!");
		} else {
			console.log("Wow you're a full on adult!");
		}
}

console.log(userInput(user));
