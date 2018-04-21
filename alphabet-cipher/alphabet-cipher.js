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
        console.log(transformMessage(secret, message));
    });

    bonusInputs.forEach(input => {
        let inputValues = input.split(' ');
        let secret = inputValues[0];
        let message = inputValues[1];
        console.log(transformMessage(secret, message, true));
    });

    function transformMessage(secret, message, decrypt) {
        let transformed = '';
        let transformLetter = decrypt ? decryptLetter : encryptLetter;
        let messageChars = message.split('');
        for (let i = 0; i < messageChars.length; i++) {
            transformed += transformLetter(secret.charAt(i % secret.length), messageChars[i]);
        }
        return transformed;
    }

    function encryptLetter(secretLetter, messageLetter) {
        return getLetterFromValue((getValueFromLetter(secretLetter) + getValueFromLetter(messageLetter)) % 26);
    }

    function decryptLetter(secretLetter, encryptedLetter) {
        return getLetterFromValue((getValueFromLetter(encryptedLetter) - getValueFromLetter(secretLetter) + 26) % 26);
    }

    function getValueFromLetter(letter) {
        return letter.charCodeAt(0) - 97;
    }

    function getLetterFromValue(value) {
        return String.fromCharCode(value + 97);
    }

})();