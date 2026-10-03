// function happy(N, X) {
//   let index = 0;
//   let alpacas = [];
//   let happy = 0;

//   if ((N - X) % 2 !== 0) {
//     return "-1";
//   }

//   for (let i = 0; i < N; i++) {
//     alpacas.push(1);
//   }
//   let sum = alpacas[index] + alpacas[index + 1];
//   if (sum % 2 === 0) {
//     happy += 1;
//     index += 1;
//     if (happy === X) {
//       let a = 1;
//       for (let i = 1; i <= N - X; i++) {
//         alpacas[index + a] += 1;
//         a += 2;
//       }
//     }
//   }
//   return alpacas;
// }

// console.log(happy(8, 4));

function happy(N, X) {
  // 1. Check if the number of sad alpacas (N - X) is odd
  if ((N - X) % 2 !== 0) {
    return "-1";
  }

  // 2. Start with a baseline array filled with 1s
  let alpacas = Array(N).fill(1);

  // 3. Alternate the first (N - X) elements to create the required sad alpacas
  let sadNeeded = N - X;
  for (let i = 0; i < sadNeeded; i++) {
    if (i % 2 === 0) {
      alpacas[i] = 2; // Flip every other element to a 2
    }
  }

  return alpacas;
}

console.log(happy(8, 4));
