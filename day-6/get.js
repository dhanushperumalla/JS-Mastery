function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      return response.json();
    })
    .then((data) => displayData(data))
    .catch((error) => console.error("Fetch error:", error));
}

function displayData(data) {
  const dataDiv = document.getElementById("data");
  data.forEach((item) => {
    const postDiv = document.createElement("div");
    postDiv.textContent = `Title: ${item.title}`;
    dataDiv.appendChild(postDiv);
  });
}

fetchData();
