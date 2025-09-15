/**
 * Calculates the nth Fibonacci number.
 * @param n Number to calculate fibonacci
 * @returns The nth Fibonacci number
 */
// export const fibonacci = (n) => {
// 	// * Implementacion Falsa cuando se recibe 0 o 1 y 2
// 	//return n === 0 ? 0 : 1;
// 	if (n === 0) {
// 		return 0;
// 	}

// 	if(n === 1 || n === 2) {
// 		return 1;
// 	} else {
// 		//return 2;
// 		//* cuando resibe 3 y debe retornar 4
// 		return fibonacci(n - 1) + fibonacci(n -2);
// 	}
// }

export function fibonacci (n: number) {
	const partialFibonacci = (n) => 
		n === 1
			? 1
			: fibonacci(n - 1) + fibonacci(n - 2);
		return n === 0
			? 0
			: partialFibonacci(n); 
}