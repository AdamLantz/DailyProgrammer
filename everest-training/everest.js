(function () {
	require('process');
	const input = [
		[1, 2, 2, 5, 9, 5, 4, 4, 1, 6],
		[4, 9, 4, 9, 9, 8, 2, 9, 0, 1],
		[0, 5, 4, 6, 9, 1, 7, 6, 7, 8],
		[1, 2, 20, 13, 6, 15, 16, 0, 7, 9, 4, 0, 4, 6, 7, 8, 10, 18, 14, 10, 17, 15, 19, 0, 4, 2, 12, 6, 10, 5, 12, 2, 1, 7, 12, 12, 10, 8, 9, 2, 20, 19, 20, 17, 5, 19, 0, 11, 5, 20],
		[3, 1, 2, 2, 5, 9, 5, 4, 4, 1, 6]
	];

	input.forEach((item) => {
		console.time('Time Taken');
		const trainingRoute = doTraining(item);
		console.log("Result:", trainingRoute);
		console.timeEnd('Time Taken');
	});

	function doTraining(peaks) {
		let depthMap = {};
		let greatestDepth = 0;
		let result = [];

		for(let i = 0; i < peaks.length; i++)
		{
			depthMap[i] = depthMap[i] || 0;
			calculateDepthOfChildren(i, 0);
		}

		let currentDepth = greatestDepth;
		for(let k = peaks.length - 1; k >= 0; k--){

			if(depthMap[k] === currentDepth){
				result.unshift(peaks[k]);
				currentDepth--;
			}
		}


		return result;


		function calculateDepthOfChildren(index, startingDepth){
			if(startingDepth > greatestDepth){
				greatestDepth = startingDepth;
			}
			if(!depthMap[index] || depthMap[index] < startingDepth){
				depthMap[index] = startingDepth; // If we are now deeper than the stored value, update the stored value
			}

			for(let j = index + 1; j < peaks.length; j++){
				if(peaks[j] > peaks[index]){
					calculateDepthOfChildren(j, startingDepth + 1);
				}

			}

		}
	}

})();

