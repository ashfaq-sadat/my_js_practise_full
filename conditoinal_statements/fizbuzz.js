// provlem: FizzBuzz
// Take a number
// if it is divisible by 3 print fizz
// if it is divisible by 5 print buzz
// if it is divisible by both print FizzBuzz
//otherwisw print nothing

let num = 13;

if (num % 3 === 0 && num % 5 === 0) {
	console.log("FizzBuzz");
} else if (num % 3 === 0) {
	console.log("Fizz");
} else if (num % 5 === 0) {
	console.log("Buzz");
} else {
	console.log("Nothing");
}
