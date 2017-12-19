(function () {

	let inputs = [
		'AB',
		'IKEUNFUVFV',
		'PXLJOUDJVZGQHLBHGXIW',
		'*l1J?)yn%R[}9~1"=k7]9;0[$'
	];

	inputs.forEach((input) => {
		const result = findFirstRecurringLetter(input);
		console.log(result);
	});

	function findFirstRecurringLetter(inputString) {
		const chars = inputString.split('');
		let seen = {};
		for (let i = 0; i < chars.length; i++) {
			if (seen[chars[i]]) {
				return `${chars[i]}, first seen at index ${seen[chars[i]].index}`;
			} else {
				seen[chars[i]] = {index: i};
			}
		}
		return 'No reoccurring letters found';
	}

})();
