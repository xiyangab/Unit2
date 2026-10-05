function megabyteCalculator(X, N, used) {
  let current = X;
  let a = 0;
  for (let i = 0; i < N; i++) {
    current = current - used[a];
    a += 1;
    current += X;
  }
  return current;
}

console.log(megabyteCalculator(10, 3, [4, 6, 2]));
console.log(megabyteCalculator(10, 3, [10, 2, 12]));
console.log(megabyteCalculator(15, 3, [15, 10, 20]));
