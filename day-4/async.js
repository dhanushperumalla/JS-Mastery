// Write an async function that waits for 3 seconds and then returns "Async/Await resolved".

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Hello() {
  await wait(3000); // Wait for 3 seconds
  return "Async/Await resolved";
}

Hello().then((message) => console.log(message));

// Create an async function that fetches data from the same mock API used above and logs the data using await.
async function fetchData(fetch) {
  data = await fetch();
  console.log(data);
}

function fetch() {
  return new Promise((resolve) =>
    setTimeout(() => {
      let data = { name: "JhonDoe" };
      resolve(data);
    }, 2000)
  );
}

fetchData(fetch);

// function fetchMockAPI() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       const data = { name: "John Doe" };
//       resolve(data);
//     }, 2000);
//   });
// }

// async function fetchData(fetch) {
//   const data = await fetch();
//   console.log(data);
// }

// fetchData(fetchMockAPI);
