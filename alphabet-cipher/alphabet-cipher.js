(function () {

    let inputs = ['snitch thepackagehasbeendelivered',
        'bond theredfoxtrotsquietlyatmidnight',
        'train murderontheorientexpress',
        'garden themolessnuckintothegardenlastnight'];

    inputs.forEach(input => {
        let inputValues = input.split(' ');
        let secret = inputValues[0];
        let message = inputValues[1];
        console.log(encryptMessage(secret, message));
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

})();