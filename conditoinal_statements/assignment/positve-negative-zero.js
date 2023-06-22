let number = 25;

console.log(number < 0 ? "Negative" : number === 0 ? "Zero" : "Positive");

switch (true) {
	case number < 0:
		console.log("Positive");
		break;
	case number === 0:
		console.log("Zero");
		break;
	case number > 0:
		console.log("Positive");
		break;
}
