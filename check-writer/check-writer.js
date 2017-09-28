(function(){
	const inputs = ['333.88',
		'742388.15',
		'919616.12',
		'12.11',
		'13',
		'2.0',
		'80.10',
		'12.05',
		'0.0',
		'0.8',
		'333000.50',
		'789456123999999999999999.99'];

	inputs.forEach(input => {
		console.log(writeCheck(input));
	});

	function writeCheck(input){
		const sets = breakIntoSets(input);
		const words = sets.map(set => convertSetToWords(set));
		return assemblePhrase(words);
	}

	function breakIntoSets(numberAsString){
		const decimalIndex = numberAsString.indexOf('.');
		if(decimalIndex === -1){ // If there is no decimal point, add one and re-run the function
			return breakIntoSets(numberAsString + '.');
		}
		const dollars = numberAsString.substr(0, decimalIndex);
		const cents = (numberAsString + '00').substr(decimalIndex + 1, 2); //Pad the cents out in case digits were not given
		let sets = [cents];
		let currentSet = '';
		for(let i = dollars.length - 1; i >= 0; i --){
			currentSet = dollars.charAt(i) + currentSet;
			if(currentSet.length === 3 || i === 0){
				sets.unshift(currentSet);
				currentSet = '';
			}
		}
		return sets;
	}

	function convertSetToWords(set){
		const nbr = parseInt(set, 10);
		return numToWord(nbr);

		function numToWord(number){

			let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
				'eleven', 'twelve', 'thirteen','fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
			words[30] = 'thirty';
			words[40] = 'forty';
			words[50] = 'fifty';
			words[60] = 'sixty';
			words[70] = 'seventy';
			words[80] = 'eighty';
			words[90] = 'ninety';
			let h = '', t = '', o = '';
			let hQ = Math.floor(number / 100);
			let hR = number % 100;
			let tQ = Math.floor(hR / 10);
			let tR = hR % 10;

			if(hQ){
				h = words[hQ] + ' hundred ';
			}
			if(hR){
				if(hR > 20){
					if(tR){
						t = words[tQ*10] + '-';
						o = words[tR] + '';
					} else {
						t = words[tQ*10];
					}
				} else {
					t = words[hR];
				}
			}
			return (h + t + o);
		}
	}

	function assemblePhrase(wordSets){
		let output = '';
		for(let i = wordSets.length - 1; i >= 0; i-- ){
			let setDescriptor = '';
			switch (wordSets.length - 1 - i){
				case 2:
					setDescriptor = ' thousand';
					break;
				case 3:
					setDescriptor = ' million';
					break;
				case 4:
					setDescriptor = ' billion';
					break;
				case 5:
					setDescriptor = ' trillion';
					break;
				case 6:
					setDescriptor = ' quadrillion';
					break;
				case 7:
					setDescriptor = ' quintillion';
					break;
				case 8:
					setDescriptor = ' sextillion';
					break;
				default:
					break;
			}
			if(wordSets.length - 1 - i === 0){
				output += 'and ' + (wordSets[i] || 'zero') + ' cents.';
			} else if (wordSets.length - 1 - i === 1){
				output = (wordSets[i] || (wordSets.length === 2 ? 'zero' : '') ) + ' dollars ' + output;
			} else {
				output = wordSets[i] + setDescriptor + (wordSets[i+1] ? ', ' : ' ') + output;
			}

		}
		output = output.substr(0,1).toUpperCase() + output.substr(1); // Capitalize the first letter
		output = output.replace(/\s{2,}/g,' '); // Remove any extra spaces
		return output;
	}

})();
