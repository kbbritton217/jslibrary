function person (first, last, age, school) {
	this.name = {
		first,
		last
	} ,
	this.age = age,
	this.school= school 
}
function teacher(first, last, age, school, subject) {
	person.call(this, first, last, age, school);

	this.subject = subject;
}

person.prototype.greeting = function () {
	console.log("Hi! My name is  " + teacher1.name.first + ".");
};

let teacher1 = new teacher('Kaylea', 'Britton', 27, 'Ivy Tech', 'Student Success');

person.prototype.greeting();