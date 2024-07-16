export function renderProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products.forEach(product => addProductToDOM(product));
}

export function addProductToDOM(product) {
    const container = document.getElementById('products-container');
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="delete-btn" data-product-id="${product.id}">Eliminar</button>
    `;
    container.appendChild(productCard);
}

export function removeProductFromDOM(productId) {
    // Código para eliminar el producto del DOM y del backend (no implementado aquí)
    const productElement = document.querySelector(`button[data-product-id="${productId}"]`).parentElement;
    productElement.remove();
}
