(function () {
    "use strict";
    const inputs = ['3 5 4', '6 16 7', '101 317 64', '571 317 420', '1699 1409 1334'];

    inputs.forEach(x => {
        const strValues = x.split(' ');
        const numValues = strValues.map(y => {
            return parseInt(y, 10);
        });
        const result = solve(numValues[0], numValues[1], numValues[2]);

        console.log(numValues);
        console.log(result);
    });


    function solve(a, b, z) {

        const buckets = {
            small: {capacity: a, current: 0},
            large: {capacity: b, current: 0}
        };
        let output = '[';

        while (!(buckets.large.current == z || buckets.small.current == z)) {
            if (buckets.large.current == 0) {
                fill(buckets.large);
                output += getValuePair(buckets);
            } else if (buckets.large.current == buckets.large.capacity) {
                transfer(buckets.large, buckets.small);
                output += getValuePair(buckets);
            } else {
                empty(buckets.small);
                output += getValuePair(buckets);
                transfer(buckets.large, buckets.small);
                output += getValuePair(buckets);
            }
            if (buckets.large.current == buckets.large.capacity && buckets.small.current == buckets.small.capacity) {
                return 'no solution\n';
            }
        }

        return output.substr(0, output.length - 2) + ']\n';

        function fill(bucket) {
            bucket.current = bucket.capacity;
        }

        function empty(bucket) {
            bucket.current = 0;
        }

        function transfer(sourceBucket, destinationBucket) {
            const destinationRemainingCapacity = destinationBucket.capacity - destinationBucket.current;
            const amountToTransfer = Math.min(sourceBucket.current, destinationRemainingCapacity);
            sourceBucket.current -= amountToTransfer;
            destinationBucket.current += amountToTransfer;
        }

        function getValuePair(buckets) {
            return `(${buckets.small.current},${buckets.large.current}), `;
        }
    }
})();
