// let cache = {};
// function multiplication(n) {
//   if (n in cache) {
//     console.log(cache[n]);
//   } else {
//     console.log("Long Process");
//     cache[n] = 2 * n;
//     console.log(cache[n]);
//   }
// }
// multiplication(19);
// multiplication(18);
// multiplication(20);
// multiplication(18);
// console.log(cache);

// function createMultiplier() {
//   let cache = {};

//   function multiplication(n, m) {
//     const key = n & m;

//     if (key in cache) {
//       console.log("Using cached result:", cache[key]);
//       return cache[key];
//     } else {
//       const result = n * m;
//       cache[key] = result;
//       console.log(result);
//       return result;
//     }
//   }

//   return multiplication;
// }

// const multiply = createMultiplier();

// multiply(19, 3); // Calculate and cache
// multiply(18, 3); // Use cached result
// multiply(20, 4); // Calculate and cache
// multiply(18, 3); // Use cached result

// console.log("Cache:", multiply.cache);

// function createMultiplier() {
//   let cache = {};

//   function multiplication(n, m) {
//     let key = n & m;
//     if (key in cache) {
//       console.log(cache[key]);
//     } else {
//       const result = n * m;
//       cache[key] = result;
//       console.log(result);
//       return result;
//     }
//   }

//   return { multiplication };
// }

// const multiply = createMultiplier();
// multiply.multiplication(2, 3);

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const factorial = memoize(function (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});

console.log(factorial(5)); // 120
console.log(factorial(5)); // 120
console.log(factorial(5)); // Retrieved from cache, 120
