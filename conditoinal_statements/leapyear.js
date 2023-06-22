let year = 2050;

const result =
	(0 == year % 4 && 0 != year % 100) || 0 == year % 400
		? year + " is a leap year"
		: year + " is not a leap year";

console.log(result);
