// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP error! status: " + response.status);
//       }
//       return response.json();
//     })
//     .then((post) => {
//       console.log("Post:", post);
//       return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP error! status: " + response.status);
//       }
//       return response.json();
//     })
//     .then((user) => console.log("User:", user))
//     .catch((error) => console.error("Fetch error:", error));
// }

// fetchData();

function fetch() {
  return new Promise((resolve, reject) => {
    const data = { name: "Jhon" };
    resolve(data);
  });
}

fetch().then((response) => console.log(response)); 
