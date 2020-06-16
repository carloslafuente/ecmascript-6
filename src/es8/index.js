const data = {
	frontend: 'Carlos',
	backend: 'Cristian',
	design: 'Gerardo',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
for (let i = 0; i < entries.length; i++) {
	console.log(entries[i].length);
}

console.log(Object.values(data));
console.log(Object.keys(data));

const string = 'Hello';
console.log(string.padStart(10, 'abcdefghijk'));
console.log(string.padEnd(12, ' -- -- --'));

const HelloWorld = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('Hello World'), 3000)
			: reject(new Error('Test Error'));
	});
};

const helloAsync = async () => {
	let hello = await HelloWorld();
	console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
	try {
		const hello = await HelloWorld();
		console.log(hello);
	} catch (error) {
		console.error(error);
	}
};

anotherFunction();
