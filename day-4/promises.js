// Write a function that returns a promise which resolves with "Promise resolved" after 2 seconds.
// function fetchData() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Create a function that fetches data from a mock API (use setTimeout to simulate an API call)
// and returns a promise. Handle the promise to log the data.

// function fetchDataFromMockAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { id: 1, name: "Mock Data" };
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchDataFromMockAPI()
//   .then((data) => {
//     console.log("Data fetched:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// fetching data from web api
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
let data;
async function main() {
  const data = await fetchData();
  //   console.log("Data fetched:", data);
  console.log(data.products[0]);
}
main();
