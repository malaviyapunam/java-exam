
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");

let products = JSON.parse(localStorage.getItem("products")) || [];

function displayProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("li");
        productItem.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productTitle = document.createElement("h4");
        productTitle.textContent = product.title;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price}`;

        const productCategory = document.createElement("p");
        productCategory.textContent = `Category: ${product.category}`;

        productInfo.appendChild(productTitle);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productCategory);

        productItem.appendChild(productImage);
        productItem.appendChild(productInfo);

        productList.appendChild(productItem);
    });
}

displayProducts();

productForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value;

    const newProduct = {
        title: title,
        price: price,
        image: image,
        category: category
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    productForm.reset();
    displayProducts();
});