const inputs = [4210000526, 3600029145, 12345678910, 1234567];

function getCheckDigit(upc) {
  const padTo11Digits = x => `00000000000${upc.toString()}`.match(/\d{11}$/)[0];
  const digits = padTo11Digits(upc)
    .split("")
    .map(d => parseInt(d, 10));
  const evenDigitResult = digits
    .filter((_, i) => !(i % 2))
    .reduce((acc, cur) => acc + cur, 0);
  const oddDigitResult = digits
    .filter((_, i) => i % 2)
    .reduce((acc, cur) => acc + cur, evenDigitResult * 3);
  const check = oddDigitResult % 10;

  return check ? 10 - check : check;
}

inputs.forEach(input => console.log(`${input}:\t${getCheckDigit(input)}`));
