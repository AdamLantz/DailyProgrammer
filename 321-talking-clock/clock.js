(function () {
	const input_data = [
		'00:00',
		'01:30',
		'12:05',
		'14:01',
		'20:29',
		'21:00',
		'12:00',
		'13:46'
	];

	input_data.forEach((t) => { talkify(t);});

	function talkify(time) {
		const numbers = ['oh ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
			'eleven ', 'twelve ', 'thirteen ','fourteen ','fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ', 'twenty '];
		numbers[30] = 'thirty ';
		numbers[40] = 'forty ';
		numbers[50] = 'fifty ';
		const hourNbr = parseInt(time.slice(0, 2), 10);
		const minuteNbr = parseInt(time.slice(3, 5), 10);

		const period = hourNbr >= 12 ? 'pm' : 'am';
		const hour = convertNumber(hourNbr % 12, false);
		const minute = convertNumber(minuteNbr, true);

		
		console.log(`${time} - It's ${hour}${minute}${period}`);

		function convertNumber(number, isHour) {
			if(!number){
				return isHour? '' : numbers[12];
			}
			if(number <= 20){
				if(number <= 9 && number >= 1) {
					return (isHour ? numbers[0] : '') + numbers[number];
				}
				return numbers[number];
			} else {
				const ones = number % 10;
				return numbers[number - ones] + (ones ? numbers[number % 10] : '');
			}
		}
	}
})();
