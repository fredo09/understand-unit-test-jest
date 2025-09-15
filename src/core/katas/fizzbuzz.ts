import { match } from 'x-match-expression';

export function fizzBuzz(n: number) {
	//! funcion de orden superior
	const divisibleBy = divsible => n => n % divsible === 0;

	return match(n)
		.case(divisibleBy(15), 'FizzBuzz')
		.case(divisibleBy(5), 'Buzz')
		.case(divisibleBy(3), 'Fizz')
		.default(n);
}


// export const fizzBuzz = (n: number) => {
// 	if (n % 15 === 0)
// 		return 'FizzBuzz';

// 	if(n % 3 === 0)
// 		return 'Fizz';

// 	if(n % 5 === 0)
// 		return 'Buzz';

// 	return n;
// }

//! Otra implementacion mas visible
// export function fizzBuzz(n: number) {
// 	const divisibleBy = (divider, n) => n % divider === 0;

// 	if (divisibleBy(15, n))
// 		return 'FizzBuzz';

// 	if (divisibleBy(3, n))
// 		return 'Fizz';

// 	if (divisibleBy(5, n))
// 		return 'Buzz'
	
// 	return n;
// }

