function newFunction(name, age, country) {
	let name1 = name || 'Carlos';
	let age1 = age || 23;
	let country1 = country || 'BO';
	console.log(name1, age1, country1);
}

// es6
function newFunction2(name = 'Carlos', age = 23, country = 'BO') {
	console.log(name, age, country);
}

newFunction2();

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
	"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

// es6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting.`;

console.log(lorem);
console.log(lorem2);

let person = {
	name: 'Carlos',
	age: 23,
	country: 'BO',
};
console.log(person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Carlos', 'Juan', 'Pedro'];
let team2 = ['Maria', 'Camila', 'Sofia'];

let education = ['David', ...team1, ...team2];
console.log(education);

{
	var globalVar = 'Global Var';
}

{
	let globalLet = 'Global Let';
	console.log(globalLet);
}

console.log(globalVar);

let name = 'Carlos';
let age = 23;

obj = {
	name: name,
	age: age,
};

// es6
obj2 = { name, age };

console.log(obj);
console.log(obj2);

const names = [
	{
		name: 'Carlos',
		age: 23,
	},
	{
		name: 'Juan',
		age: 30,
	},
];

let listOfNames = names.map(function (item) {
	console.log(item.name);
	return item;
});
console.log(listOfNames);

// es6
let listOfNames2 = names.map((item) => {
	console.log(item.name);
	return item;
});
console.log(listOfNames2);

const listOfNames3 = (name, age, country) => {
	// ...
};

const listOfNames4 = name => {
	// ...
};

const square = num => num * num;
console.log(square(5));

const helloPromise = () => {
	return new Promise((resolve, reject) => {
		true ? resolve('Salio bien') : reject('Salio mal');
	});
};

helloPromise()
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});
