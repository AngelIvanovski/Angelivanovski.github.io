const productsUrl = "https://dummyjson.com/products?limit=50";
const productContainer = document.getElementById("product-container");

function generateProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const card = document.createElement('div');

        card.className = 'col-md-4 mb-4'; 

        card.innerHTML = `
            <div class="product-card">
                <img src="${product.images}" class="card-img-top">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        `;

        productContainer.appendChild(card);
    }
}

function getProducts(url) {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            generateProducts(data.products);
        })
        .catch(function (err) {
            console.log("ERROR:", err);
        });
}

window.addEventListener("load",function(){
getProducts(productsUrl);

})
