async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.thumbnail;
    productImage.alt = product.title;

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = `${Math.floor(product.price * 40)}₹`;

    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);

    productContainer.appendChild(productCard);
  });
}

async function init() {
  const products = await fetchProducts();
  displayProducts(products);
}

init();
