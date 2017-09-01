let person = {
	name: "Kaylea",
	age: 27,
	occupation: "Student"
}

let y;
let txt = "";

for (y in person){
	txt += person[y] + "_"
}
console.log(txt);