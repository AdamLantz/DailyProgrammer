(function(){

	const input = [
		5,
		[1, 2, 3, 4, 5, 5, 1, 2, 3, 4, 4, 5, 1, 2, 3, 3, 4, 5, 1, 2, 2, 3, 4, 5, 1],
		2,
		[1, 3, 3, 4],
		4,
		[1, 2, 3, 4, 1, 3, 2, 4, 2, 3, 4, 1, 4, 3, 2, 1],
		3,
		[1, 2, 3, 3, 1, 2, 2, 3, 1],
		1,
		[1]
	];

	for(let i = 0; i < input.length; i++){
		if(typeof input[i] === "number"){
			let result = checkLatin(input[i], input[i+1]);
			console.log(result);
		}
	}

	function checkLatin(size, array){
		if(Math.sqrt(array.length) !== size){
			return false;
		} else {
			let expectedSum = 0;
			for(let j = 0; j < size; j++){
				let sumOfColumn = 0;
				let sumOfRow = 0;
				for(let k = 0; k < size; k++){
					sumOfColumn += array[j+(k*size)];
					sumOfRow += array[k+(j*size)];
				}
				if(j === 0){
					expectedSum = sumOfColumn;
				}
				if (sumOfColumn !== expectedSum || sumOfRow !== expectedSum){
					return false;
				}
			}
			return true;
		}
	}

})();
