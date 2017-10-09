(function () {
    "use strict";

    const input = [270, 541, 993, 649, 2010741];

    let knownPrimes = {};
    const checkIfPrime = num => {
        const sqrt = Math.sqrt(num);
        for (let i = 2; i < sqrt; i++) {
            if (!checkIfPrime(i)) {
                continue;
            }
            if (num % i == 0) {
                return false;
            }
        }
        knownPrimes[num] = true;
        if (knownPrimes[num]) {
            return true;
        }
    };

    const findNearestPrimes = num => {
        if (checkIfPrime(num)) {
            return `${num} is prime.`;
        } else {
            let lower;
            let higher;
            let distance = 0;
            while (!lower || !higher) {
                lower = lower || (checkIfPrime(num - distance) ? num - distance : false);
                higher = higher || (checkIfPrime(num + distance) ? num + distance : false);
                distance++;
            }
            return `${lower} < ${num} < ${higher}`;
        }
    };

    input.forEach(x => {
        console.log(findNearestPrimes(x));
    });

})();
