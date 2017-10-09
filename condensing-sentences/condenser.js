(function () {
	"use strict";

	const inputs = [
		'Deep episodes of Deep Space Nine came on the television only after the news.',
		'Digital alarm clocks scare area children.',
		'The quick brown fox jumped over the extremely lazy dog.'
	];

	let outputs = inputs.map(i => condense(i));
	outputs.forEach(o => console.log(o));

	function condense(sentence) {
		// (\S+) - capture group of one or more non-whitespace character
		// \s - one or more whitespace character
		// \1 - represents the capture group from before
		// $1 - the result of the capture group
		return sentence.replace(/(\S+)\s+\1/g, '$1');
	}

})();
