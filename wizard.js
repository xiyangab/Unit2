function wizard(start, amount, battles) {
  let current = `${start}`;
  let obeyed = 1;
  let mastered = [start];

  for (battle of battles) {
    if (battle.includes(current) && battle[1] === current) {
      current = battle[0];
      if (!mastered.includes(current)) {
        obeyed += 1;
        mastered.push(current);
      }
    }
  }
  return `${current}\n${obeyed}`;
}

console.log(
  wizard("A", 3, [
    ["B", "A"],
    ["C", "B"],
    ["D", "A"],
  ]),
);
console.log(
  wizard("N", 5, [
    ["D", "A"],
    ["N", "B"],
    ["B", "A"],
    ["C", "D"],
    ["F", "A"],
  ]),
);
console.log(
  wizard("X", 4, [
    ["A", "X"],
    ["B", "X"],
    ["X", "A"],
    ["D", "A"],
  ]),
);
