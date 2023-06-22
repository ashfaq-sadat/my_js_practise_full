//even odd

let number = 2;

if (number % 2 === 0) {
	console.log("This is an even Number");
} else {
	console.log("This is an odd Number");
}

console.log(number % 2 === 0 ? "Even" : "Odd");

switch (true) {
	case number % 2 === 0:
		console.log("Even No");
		break;
	default:
		console.log("Odd No");
		break;
}
