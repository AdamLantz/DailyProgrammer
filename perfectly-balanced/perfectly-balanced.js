const inputs = [
  "xxxyyy",
  "yyyxxx",
  "xxxyyyy",
  "yyxyxxyxxyyyyxxxyxyx",
  "xyxxxxyyyxyxxyxxyy",
  "",
  "x"
];

const bonus_inputs = [
  "xxxyyyzzz",
  "abccbaabccba",
  "xxxyyyzzzz",
  "abcdefghijklmnopqrstuvwxyz",
  "pqq",
  "fdedfdeffeddefeeeefddf",
  "www",
  "x",
  ""
];

function totalValues(text) {
  return text.split("").reduce(
    (accum, cur) => ({
      ...accum,
      [cur]: accum[cur] ? accum[cur] + 1 : 1
    }),
    {}
  );
}

function balanced(text) {
  const totals = totalValues(text);
  return totals.x === totals.y;
}

function balanced_bonus(text) {
  const allEqual = array => array.every(v => v === array[0]);
  return allEqual(Object.values(totalValues(text)));
}

inputs.forEach(input => {
  console.log(`balanced("${input}") => ${balanced(input)}`);
});
console.log("\n");
bonus_inputs.forEach(input => {
  console.log(`balanced_bonus("${input}") => ${balanced_bonus(input)}`);
});
