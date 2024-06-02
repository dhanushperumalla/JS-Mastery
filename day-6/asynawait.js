async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
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
