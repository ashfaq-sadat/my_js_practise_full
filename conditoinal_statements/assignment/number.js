let number = 100;

if (number > 100 && number < 200 && number % 2 === 0) {
	console.log("Number is even and it is in between 100 & 200");
} else {
	console.log("Condition not fullfilled");
}

console.log(
	number > 100 && number < 200 && number % 2 === 0
		? "Number is even and it is in between 100 & 200"
		: "Condition not fullfilled"
);

switch (true) {
	case number > 100 && number < 200 && number % 2 === 0:
		console.log("Number is even and it is in between 100 & 200");
		break;
	default:
		console.log("Condition not fullfilled");
		break;
}
