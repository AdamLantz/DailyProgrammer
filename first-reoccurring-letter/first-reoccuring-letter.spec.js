const findFirstRecurringLetter = require('./first-reoccurring-letter');
describe('first-reoccurring-letter', () => {

	it('should solve the challenge inputs', () => {
		let challenges = [
			{input: 'AB', output: 'No reoccurring letters found'},
			{input: 'IKEUNFUVFV', output: 'U, first seen at index 3'},
			{input: 'PXLJOUDJVZGQHLBHGXIW', output: 'J, first seen at index 3'},
		];

		challenges.forEach((challenge) => {
			let answer = findFirstRecurringLetter(challenge.input);
			console.log(answer);
			expect(answer).toEqual(challenge.output)
		});
	});

	it('should solve for symbols', () => {
		let answer = findFirstRecurringLetter('*lJ?)yn%R[}~1"=k7]9;0[$');
		console.log(answer);
		expect(answer).toEqual(`[, first seen at index 9`)
	});

});