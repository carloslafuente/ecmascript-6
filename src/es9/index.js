const obj = {
	name: 'Carlos',
	age: 23,
	country: 'BO',
};

let { country, ...all } = obj;
console.log(country, all);

const obj1 = {
	name: 'Carlos',
	age: 23,
};

const obj2 = {
	...obj1,
	country: 'BO',
};

console.log(obj2);

const helloWorld = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve('Hello world');
			  }, 3000)
			: reject(new Error('Test error'));
	});
};

helloWorld()
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => {
		console.log('Finalizado');
	});

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
console.log(match);
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
