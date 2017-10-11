(function () {
	'use strict';

	let inputs = ['"Clint Eastwood" ? "Old West Action"',
		'"parliament" ? "partial man"',
		'"wisdom" ? "mid sow"',
		'"Seth Rogan" ? "Gathers No"',
		'"Reddit" ? "Eat Dirt"',
		'"Schoolmaster" ? "The classroom"',
		'"Astronomers" ? "Moon starer"',
		'"Vacation Times" ? "I\'m Not as Active"',
		'"Dormitory" ? "Dirty Rooms"',
		'"p.u,n?c~t!u@a#t$i%o^n*" ? "punctuation"',
	];

	inputs.forEach(x => {
		console.log(detect(x));
	});

	function detect(input){
		const res = /^"(.+)"\s[?]\s"(.+)"$/.exec(input);
		const reduce = str => {
			return str.toLowerCase().replace(/[^\w]/g, '').split('').sort((a, b) => {
				return a.localeCompare(b);
			}).join('');
		};
		return (input.replace(/ ([?]) /, () => {
			return reduce(res[1]) === reduce(res[2]) ? ' is an anagram of ' : ' is NOT an anagram of ';
		}));
	}


})();