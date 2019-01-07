const inputs = [[255, 99, 71], [184, 134, 11], [189, 183, 107], [0, 0, 205]];
const bonuses = [["#000000", "#778899"], ["#E6E6FA", "#FF69B4", "#B0C4DE"]];

function hexcolor(r, g, b) {
  const hexVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const getHex = value =>
    `${hexVals[Math.floor(value / 16)]}${hexVals[value % 16]}`;
  return "#".concat([r, g, b].map(getHex).join(""));
}

function blend(colorStrings) {
  const splitColorString = s => s.substring(1).match(/.{1,2}/g);

  const convertHexToDecimal = hex => parseInt(hex, 16);

  const mergeColors = colors =>
    [0, 1, 2].map(valIndex =>
      Math.round(
        colors.reduce((acc, cur) => acc + cur[valIndex], 0) / colors.length
      )
    );

  const inputsAsDecimal = colorStrings.map(s =>
    splitColorString(s).map(convertHexToDecimal)
  );
  const resultDecimalValues = mergeColors(inputsAsDecimal);

  return hexcolor(...resultDecimalValues);
}

console.log("\n### OUTPUT ###");
inputs.forEach(input => console.log(hexcolor(...input)));
console.log("\n### BONUS OUTPUT ###");
bonuses.forEach(bonus => console.log(blend(bonus)));
