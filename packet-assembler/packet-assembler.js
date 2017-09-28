(function () {

	const fs = require('fs');
	const readLine = require('readline');
	const inputStream = fs.createReadStream('input.txt');
	const lineReader = readLine.createInterface(inputStream);
	lineReader.on('line', line => {
		processLine(line);
	});

	let messages = {};

	function processLine(line){
		const split = line.split(/\s{2,}/);
		addToMessage(split[0], split[1], parseInt(split[2]), split[3] || '');
	}

	function addToMessage(messageId, packetID, packetCount, text){
		if(typeof messages[messageId] === 'undefined'){
			messages[messageId] = { id:messageId, handled: 0, packets: {} };
		}
		let thisMessage = messages[messageId];
		thisMessage.packets[packetID] = text;
		thisMessage.handled++;
		checkCompletedMessage(thisMessage, packetCount);
	}

	function checkCompletedMessage(message, packetCount){
		if(message.handled === packetCount){
			printCompletedMessage(message);
			delete messages[message.id];
		}
	}

	function printCompletedMessage(message){
		for(let i = 0; i < message.handled; i ++){
			console.log(message.packets[i]);
		}
	}


})();