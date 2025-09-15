import { fizzBuzz } from '../../core/katas/fizzbuzz';

describe('FizzBuzz Testing', () => {
	it('Sep up testing', () => {
		expect(true).toBe(true);
	});

	it('Should return one if receive one', () => {
		expect(fizzBuzz(1)).toBe(1);
	});

	it('Should return fizz if receive three', () => {
		expect(fizzBuzz(3)).toBe('Fizz');
	});

	it('Should return buzz if receive five', () => {
		expect(fizzBuzz(5)).toBe('Buzz');
	});

	it('Should return "FizzBuzz" if receive fifteen', () => {
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});

	it('Should return "Fizz" if receive any number divisble by three', () => {
		expect(fizzBuzz(9)).toBe('Fizz');
	});

	it('Should return "Buzz", if receive any number divisible by five', () => {
		expect(fizzBuzz(25)).toBe('Buzz');
	});

	it('Should return "Buzz" if receive any number divisible by fifteen', () => {
		expect(fizzBuzz(30)).toBe('FizzBuzz');
	});

	it('Should return the same number that receives', () => {
		expect(fizzBuzz(4)).toBe(4);
	});
});
