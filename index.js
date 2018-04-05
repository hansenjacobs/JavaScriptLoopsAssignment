for(let i = 1; i < 101; i++){
	let divisibleByThree = isDivisibleBy(i, 3);
	let divisibleByFive = isDivisibleBy(i, 5);

	if(!divisibleByThree && !divisibleByFive){
		console.log(i);
	} else if (divisibleByThree && !divisibleByFive) {
		console.log("fizz");
	} else if (!divisibleByThree && divisibleByFive) {
		console.log("buzz");
	} else {
		console.log("fizzbuzz");
	}
}

function isDivisibleBy(numerator, denominator){
	let remainder = numerator % denominator;
	if(remainder === 0){
		return true;
	} else {
		return false;
	}
}