let numbersone = [
	1, 2, 3, 4
]

let numberstwo = [
	4, 3, 2, 1
]

let numbers = numbersone.map(function (num, idx) {
	return num + numberstwo[idx];
});
// 	for (p = 0; p < numbersone.length; p++) {
// 	for (x = 0; x < numberstwo.length; x++){
// 		if (p === x) {
// 			console.log(numbersone[p] + numberstwo[x])
// 		}
// 	}
// }
// }

console.log(numbers);
