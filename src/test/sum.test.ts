import { sum } from '../core/sum';

test('sum of 1 and 2 should be 3', () => {
	const num1 = 1;
	const num2 = 2;
	const numberExpected = 3;

	const result = sum(num1, num2);

	expect(result).toBe(numberExpected);
});