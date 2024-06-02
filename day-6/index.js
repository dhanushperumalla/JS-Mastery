//Fetch
// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

//Http
fetch("https://dummyjson.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => console.error("HTTP Error:", error));

// Async / Await;
// async function getProducts() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Products:", data);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// }

// getProducts();
