const inputs = [
  ["leave", "eave"],
  ["reset", "rest"],
  ["dragoon", "dragon"],
  ["eave", "leave"],
  ["sleet", "lets"],
  ["skiff", "ski"]
];

const bonusInputs = ["dragoon", "boats", "affidavit"];

const fs = require("fs");
const file = fs.readFileSync(__dirname + "/resources/enable1.txt");
const wordList = file.toString().split("\n");

function funnel(source, target) {
  if (target.length >= source.length) {
    return false;
  }
  const sourceChars = source.split("");
  const targetChars = target.split("");
  let firstDifference = 0;
  for (let i = 0; i < sourceChars.length; i++) {
    if (sourceChars[i] !== targetChars[i]) {
      firstDifference = i;
      break;
    }
  }
  const leftR = new RegExp(`^${source.substring(0, firstDifference)}`);
  const rightR = new RegExp(`${source.substring(firstDifference + 1)}$`);
  return leftR.test(target) && rightR.test(target);
}

function bonus(source) {
  return wordList.filter(target => funnel(source, target));
}

console.log('### OUTPUT ###')
inputs.forEach(input => console.log(funnel(...input)));

console.log('\n### BONUS OUTPUT ###')
bonusInputs.forEach(input => console.log(bonus(input)));
