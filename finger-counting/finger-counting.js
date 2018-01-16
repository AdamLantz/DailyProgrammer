let inputs = ['0111011100', '1010010000', '0011101110', '0000110000', '1111110001', '1111111111111111', '111'];

inputs.forEach(input => {
	let result;
	try {
		result = countFingers(input);
	} catch (e) {
		result = e.message;
	}
	console.log(result);
});

function countFingers(bothHands) {
	let fingerValues = [10, 10, 10, 10, 50, 5, 1, 1, 1, 1];
	if (bothHands.length > 10) {
		throw new Error('Invalid. Polydactyly isn\'t allowed.')
	} else if (bothHands.length < 10) {
		throw new Error('Invalid. Oligodactyly isn\'t allowed.')
	}
	return bothHands.split('').map(finger => parseInt(finger)).reduce((accumulator, finger, index, fingers) => {
		let rtl = index < 3; // These fingers cannot be up if the next finger is down
		let ltr = index > 6; // These fingers cannot be up if the previous finger is down
		if (rtl && finger > fingers[index + 1]) {
			throw new Error('Invalid.');
		}
		if (ltr && finger > fingers[index - 1]) {
			throw new Error('Invalid.');
		}
		if (finger) {
			return accumulator;
		} else {
			accumulator -= fingerValues[index];
		}
		return accumulator;
	}, 99);
}
