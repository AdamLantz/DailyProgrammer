(function () {

    let inputs = [
        'snitch thepackagehasbeendelivered',
        'bond theredfoxtrotsquietlyatmidnight',
        'train murderontheorientexpress',
        'garden themolessnuckintothegardenlastnight'
    ];

    let bonusInputs = [
        'cloak klatrgafedvtssdwywcyty',
        'python pjphmfamhrcaifxifvvfmzwqtmyswst',
        'moore rcfpsgfspiecbcc'
    ];

    inputs.forEach(input => {
        let inputValues = input.split(' ');
        let secret = inputValues[0];
        let message = inputValues[1];
        console.log(encryptMessage(secret, message));
    });

    bonusInputs.forEach(input => {
        let inputValues = input.split(' ');
        let secret = inputValues[0];
        let message = inputValues[1];
        console.log(decryptMessage(secret, message));
    });


    function getValueFromLetter(letter) {
        return letter.charCodeAt(0) - 97;
    }

    function getLetterFromValue(value) {
        return String.fromCharCode(value + 97);
    }

    function encryptMessage(secret, message) {
        let encrypted = '';
        let messageChars = message.split('');
        for (let i = 0; i < messageChars.length; i++) {
            encrypted += encryptLetter(secret.charAt(i % secret.length), messageChars[i]);
        }
        return encrypted;
    }

    function encryptLetter(secretLetter, messageLetter) {
        return getLetterFromValue((getValueFromLetter(secretLetter) + getValueFromLetter(messageLetter)) % 26);
    }

    function decryptMessage(secret, encrypted) {
        let message = '';
        let encryptedChars = encrypted.split('');
        for (let i = 0; i < encryptedChars.length; i++) {
            message += decryptLetter(secret.charAt(i % secret.length), encryptedChars[i]);
        }
        return message;
    }

    function decryptLetter(secretLetter, encryptedLetter) {
        return getLetterFromValue((getValueFromLetter(encryptedLetter) - getValueFromLetter(secretLetter) + 26) % 26);
    }

})();