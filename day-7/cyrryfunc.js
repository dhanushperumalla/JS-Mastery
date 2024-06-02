const print = (str) => {
  console.log(str);
}; // just created Print Func insted of console.log function😁

function add(a) {
  // currying function
  return (b) => {
    return a + b;
  };
}

// const addFive = add(5);
// print(addFive(3));
// print(addFive(10));

// print(add(5)(10));

async function fetchData() {
  const data = await fetch();
  console.log(data);
}

function fetch() {
  return new Promise((resolve) =>
    setTimeout(() => {
      const data = { name: "John Doe" };
      resolve(data);
    }, 2000)
  );
}

fetchData(fetch);
