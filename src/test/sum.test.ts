import { sum } from '../core/sum';

describe('Suma de dos numeros', () => {
	test('sum of 1 and 2 should be 3', () => {
		const num1 = 1;
		const num2 = 2;
		const numberExpected = 3;

		const result = sum(num1, num2);

		expect(result).toBe(numberExpected);
	});
})

//* Un ejemplo de test mas simplicada
// test('sum of 1 and 2 should be 3', () => {
// 	expect(sum(1,2)).toBe(3);
// });

describe('Comparacion de objetos', () => {
	test('Comparar objetos', () => {
		const data = { one: '1' };
		data['two'] = 2;
		const expected = { one: '1', two: 2 };
		expect(data).toEqual(expected);
	});
});
