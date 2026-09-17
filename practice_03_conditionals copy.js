// ==========================================================
// AP CSP — JavaScript: Conditionals & Boolean Logic
// practice_03_conditionals.js
//
// Complete each TODO below. Run this file (node practice_03_conditionals.js)
// and check the console output against the expected results in the comments.
// ==========================================================

// ---------- Problem 1: Number Classifier ----------
// Return a string describing num:
//   "zero"            if num is 0
//   "positive even"   if num is positive and even
//   "positive odd"    if num is positive and odd
//   "negative even"   if num is negative and even
//   "negative odd"    if num is negative and odd
function classifyNumber(num) {
  if (num === 0) {
    return "zero";
  } else if (num > 0 && num % 2 === 0) {
    return "postive even";
  } else if (num > 0 && num % 2 !== 0) {
    return "postive odd";
  } else if (num < 0 && num % 2 === 0) {
    return "negative even";
  } else if (num < 0 && num % 2 !== 0) {
    return "negative odd";
  }
}

console.log(classifyNumber(0)); // "zero"
console.log(classifyNumber(4)); // "positive even"
console.log(classifyNumber(7)); // "positive odd"
console.log(classifyNumber(-4)); // "negative even"
console.log(classifyNumber(-7)); // "negative odd"

// ---------- Problem 2: Grade Calculator ----------
// Return the letter grade for score (0-100):
//   90+     -> "A"
//   80-89   -> "B"
//   70-79   -> "C"
//   60-69   -> "D"
//   below 60 -> "F"
// If score is less than 0 or greater than 100, return "Invalid score".
function getLetterGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  } else if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score < 60 && score >= 0) {
    return "F";
  }
}

console.log(getLetterGrade(95)); // "A"
console.log(getLetterGrade(82)); // "B"
console.log(getLetterGrade(59)); // "F"
console.log(getLetterGrade(-5)); // "Invalid score"
console.log(getLetterGrade(150)); // "Invalid score"

// ---------- Problem 3: FizzBuzz ----------
// Return:
//   "Fizz"     if num is divisible by 3
//   "Buzz"     if num is divisible by 5
//   "FizzBuzz" if num is divisible by both 3 and 5
//   otherwise, num converted to a string
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return String(num);
  }
}

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7)); // "7"

// ---------- Problem 4: Shipping Cost Calculator ----------
// If isMember is true:
//   weight <= 5  -> 0 (free)
//   weight > 5   -> 3
// If isMember is false:
//   weight <= 1  -> 5
//   weight <= 5  -> 8
//   weight > 5   -> 12
function getShippingCost(weight, isMember) {
  if (isMember === true) {
    if (weight <= 5) {
      return "Shipping: Free";
    } else {
      return "Shipping: $3";
    }
  } else if (isMember === false) {
    if (weight <= 1) {
      return "Shipping: $5";
    } else if (weight <= 5) {
      return "Shipping: $8";
    } else if (weight > 5) {
      return "Shipping: $12";
    }
  }
}

console.log(getShippingCost(3, true)); // 0
console.log(getShippingCost(8, true)); // 3
console.log(getShippingCost(0.5, false)); // 5
console.log(getShippingCost(4, false)); // 8
console.log(getShippingCost(10, false)); // 12

// ---------- Stretch (optional) ----------
// Rewrite the even/odd check from Problem 1 using the ternary operator
// instead of if / else.

function isEvenTernary(num) {
  const even = num % 2 === 0 ? "True" : "False";
  return even;
}

console.log(isEvenTernary(4)); // true
console.log(isEvenTernary(7)); // false
