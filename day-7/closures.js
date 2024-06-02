// function counter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// const count = counter();

// function counter() {
//   let count = 0;
//   return ++count;
// }

// const count = counter();

// console.log(counter());
// console.log(counter());
// console.log(count());
// console.log(count());

// function demo() {
//   return (par) => {
//     return console.log(par);
//   };
// }

// const print = demo();

// const print = (par) => {
//   console.log(par);
// };

// print("Hello, world!");
// let count = 24;
// print(count);

function demo() {
  let score = 0;

  function addPts(value) {
    score += value;
    return score;
  }

  function minusPts(value) {
    score -= value;
    return score;
  }
  function displayScore() {
    console.log(score);
  }
  return { addPts, minusPts, displayScore };
}

let scoreCalculator = demo();
scoreCalculator.addPts(10);
console.log(scoreCalculator.score); //Gives Undefined
scoreCalculator.displayScore();
