const matches = [
	[20, 65515],
	[32000, 101],
	[42000, 42],
	[13, 12345],
	[9999, 9999],
	[8008, 37331],
	[54311, 2],
	[31200, 34335]
];

matches.forEach(match => {
	const answer = findSimilarity(match[0], match[1]);
	const output = formatAnswer(answer);
	console.log(output);
});



function findSimilarity(a, b) {

	const result = {};

	result.partner1 = {value: a, opposite: findOpposite(a)};
	result.partner2 = {value: b, opposite: findOpposite(b)};
	const similarActiveBitsInValue = unsign(result.partner1.value & result.partner2.value);
	const similarActiveBitsInOpposite = unsign(result.partner1.opposite & result.partner2.opposite);
	const compositeSimilarity = unsign(similarActiveBitsInValue | similarActiveBitsInOpposite);
	result.compatibility = countBits(compositeSimilarity) / 32;

	function findOpposite(a) {
		return unsign(~a);
	}

	function countBits(n) {
		let count = 0;
		while (n) {
			n = unsign(n & (n - 1));
			count++;
		}
		return count;
	}

	return result;

	function unsign(v) {
		return v >>> 0;
	}
}

function formatAnswer(answer) {
	return `${answer.compatibility * 100}% of compatibility\n` +
		`${answer.partner1.value} should avoid ${answer.partner1.opposite}\n` +
		`${answer.partner2.value} should avoid ${answer.partner2.opposite}\n`
}
