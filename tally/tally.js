const inputs = ["abcde", "dbbaCEDbdAacCEAadcB", "dbbaCEDbdAacCEAadcB"];

function tally(writtenScore) {
  return (results = writtenScore.split("").reduce(
    (accum, cur) => ({
      ...accum,
      [cur.toLowerCase()]:
        (accum[cur.toLowerCase()] || 0) + (cur.charCodeAt(0) > 96 ? 1 : -1)
    }),
    {}
  ));
}

function order(talliedScore) {
  return Object.keys(talliedScore)
    .sort((a, b) => talliedScore[b] - talliedScore[a])
    .map(player => ({
      player,
      score: [talliedScore[player]]
    }));
}

function print(orderedScore) {
  console.log(
    orderedScore.map(pair => `${pair.player}:${pair.score}`).join(", ")
  );
}

inputs.forEach(input => print(order(tally(input))));
