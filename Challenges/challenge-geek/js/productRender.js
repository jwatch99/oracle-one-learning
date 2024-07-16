let products = [];

export function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="delete-btn" data-product-id="${index}">Eliminar</button>
        `;
        container.appendChild(productCard);
    });
}

export function addProduct(product) {
    products.push(product);
    renderProducts();
}

export function deleteProduct(productId) {
    products.splice(productId, 1);
    renderProducts();
}
