const mainUrl = "https://dummyjson.com/products?limit=8";
const mainContainer = document.getElementById("container");
const categoryList = document.getElementById("categoryList");
const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const makePurchase = document.getElementById("makePurchase");
const cartDropdown = document.getElementById("cartDropdown");
const closeCart = document.getElementById("closeCart");
const continueShopping = document.getElementById("continueShopping");
const overlay = document.getElementById("overlay");

let currentPage = 1;
let currentCategory = "all";
let totalProducts = 0; 
let cart = [];

function renderData(products) {
    mainContainer.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "col mb-4";

        card.innerHTML = `
            <div class="card h-100 d-flex flex-column">
                <img src="${product.thumbnail}" class="card-img-top img-fluid" alt="${product.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column p-3">
                    <h4 class="card-title">${product.title}</h4>
                    <p class="card-text fs-7">${product.description}</p>
                    <h5 class="card-text">${product.price}$</h5>
                    <button class="btn btn-primary mt-auto btn-sm add-to-cart" data-id="${product.id}" data-price="${product.price}" data-title="${product.title}">Add to Cart</button>
                </div>
            </div>
        `;
        mainContainer.appendChild(card);
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

function addToCart(event) {
    const productId = event.target.getAttribute("data-id");
    const productPrice = parseFloat(event.target.getAttribute("data-price"));
    const productTitle = event.target.getAttribute("data-title");

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, title: productTitle, price: productPrice, quantity: 1 });
    }

    updateCart();
    cartDropdown.classList.add("open"); 
    overlay.classList.add("active"); 
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "d-flex justify-content-between align-items-center mb-2";
        cartItem.innerHTML = `
            <span>${item.title} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

function clearCart() {
    cart = [];
    updateCart();
}

makePurchase.addEventListener("click", () => {
    clearCart();
    alert("Thank you for your purchase!");
    cartDropdown.classList.remove("open"); 
    overlay.classList.remove("active"); 
});

closeCart.addEventListener("click", () => {
    cartDropdown.classList.remove("open");
    overlay.classList.remove("active");
});

continueShopping.addEventListener("click", () => {
    cartDropdown.classList.remove("open");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    cartDropdown.classList.remove("open");
    overlay.classList.remove("active");
});


async function fetchProducts(url) {
    try {
        const fetchedData = await fetch(url);
        const data = await fetchedData.json();
        totalProducts = data.total; 
        renderData(data.products);

      
        if ((currentPage * 8) >= totalProducts) {
            nextPage.style.display = "none";
        } else {
            nextPage.style.display = "block";
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


categoryList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("list-group-item-action")) {
        currentCategory = target.getAttribute("data-category");
        currentPage = 1;
        const url =
            currentCategory === "all"
                ? `${mainUrl}&skip=${(currentPage - 1) * 8}`
                : `https://dummyjson.com/products/category/${currentCategory}?limit=8&skip=${(currentPage - 1) * 8}`;
        fetchProducts(url);
    }
});


prevPage.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        const url =
            currentCategory === "all"
                ? `${mainUrl}&skip=${(currentPage - 1) * 8}`
                : `https://dummyjson.com/products/category/${currentCategory}?limit=8&skip=${(currentPage - 1) * 8}`;
        fetchProducts(url);
    }
});


nextPage.addEventListener("click", () => {
    currentPage++;
    const url =
        currentCategory === "all"
            ? `${mainUrl}&skip=${(currentPage - 1) * 8}`
            : `https://dummyjson.com/products/category/${currentCategory}?limit=8&skip=${(currentPage - 1) * 8}`;
    fetchProducts(url);
});

fetchProducts(mainUrl);
