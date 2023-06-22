// provlem: FizzBuzz
// Take a number
// if it is divisible by 3 print fizz
// if it is divisible by 5 print buzz
// if it is divisible by both print FizzBuzz
//otherwisw print nothing

let num3 = 15;

console.log(
	num3 % 3 === 0 && num3 % 5 === 0
		? "FizzBuzz"
		: num3 % 3 === 0
		? "Fizz"
		: num3 % 5 === 0
		? "Buzz"
		: "Nothing"
);

//when to use ternay and when to use
// if conditons are more than three then use if-elsestatments
// if the number of conditions are within 2-3 then use ternary operators.
