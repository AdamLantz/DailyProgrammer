(function () {
    "use strict";

    listenForInput();

    function listenForInput() {
        process.stdin.on('data', function (text) { // A function to execute when input is received
            parseInput(text);
        });

        process.stdin.resume(); // Begin processing input
        process.stdin.setEncoding('utf8');
        console.log('Enter an expression: ');
    }

    function parseInput(input) {
        const reggy = / *?(-?\d+) *?([*+/^\-]) *?(-?\d+) *?/;
        const capturedInput = reggy.exec(input);
        if (capturedInput) {
            const a = parseInt(capturedInput[1]);
            const op = capturedInput[2];
            const b = parseInt(capturedInput[3]);

            const result = execute(a, op, b);
            console.log(`Result: ${result}`);
        } else {
            console.log("Invalid input");
        }

    }

    function execute(a, op, b) {
        return operation(op)(a, b);
    }

    function operation(op) {
        switch (op) {
            case '+':
                return add;
            case '-':
                return subtract;
            case '*':
                return multiply;
            case '/':
                return divide;
            case '^':
                return exponent;
        }
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a + negate(b);
    }

    function multiply(a, b) {
        let product = 0;
        if( a === 0 || b === 0){
            return 0;
        } else if (a > 0 && b < 0) { // A is positive, B is negative
            for (let i = 0; i < a; i++) {
                product += b;
            }
        } else if (b > 0 && a < 0) { // A is negative, B is positive
            for (let i = 0; i < b; i++) {
                product += a;
            }
        } else if (a > 0 && b > 0) { // Both are positive
            for (let i = 0; i < a; i++) {
                product += b;
            }
        } else { // Both are negative or pigs can fly
            return multiply(negate(a), negate(b));
        }

        return product;
    }

    function divide(a, b) {
        if (a === 0) {
            return b === 0 ? 'Undefined' : 0;
        }
        if (b === 0) {
            return 'Cannot divide by zero'
        }
        if (a > 0 && b < 0) { // A is positive, B is negative
            const positiveResult = divide(a, negate(b));
            return typeof positiveResult == "string" ? positiveResult : negate(positiveResult);
        } else if (a > 0 && b < 0) { // A is negative, B is positive
            const positiveResult = divide(negate(a), b);
            return typeof positiveResult == "string" ? positiveResult : negate(positiveResult);
        } else if (a > 0 && b > 0) { // Both are positive
            let quotient = 0;
            let remainder = a; // -6
            while (remainder >= b) {
                remainder = subtract(remainder, b);
                quotient++;
            }
            if (remainder != 0) {
                return 'Non-integral answer';
            }
            return quotient;
        } else { // Both are negative or hell freezes over
            return divide(negate(a), negate(b));
        }

    }

    function exponent(a, b) {
        let result = 1;
        if( b < -1){
            result = 'Non-integral answer';
        }
        for (let i = 0; i < b; i++) {
            result = multiply(result, a);
        }
        return result;
    }

    function negate(x) {
        if (x > 0) {
            const negative_one = Number.MIN_SAFE_INTEGER + 9007199254740990;
            return multiply(x, negative_one);
        } else {
            let i = 0;
            while (i + x < 0) {
                i++;
            }
            return i;
        }
    }

})();