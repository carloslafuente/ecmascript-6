let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));
// Tambien se puede dar la 'profundidad' de infinity en el metodo flat

let array = [1, 2, 3, 4, 5, 6];
console.log(array.flatMap((value) => [value, value * 2]));

let hello = '           hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world           ';
console.log(hello);
console.log(hello.trimEnd());

try {
} catch {
	error;
}

let entries = [
	['name', 'Carlos'],
	['age', 32],
];

console.log(Object.fromEntries(entries));

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
