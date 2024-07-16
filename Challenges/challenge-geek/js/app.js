import { validateForm } from './formValidation.js';
import { renderProducts, addProduct, deleteProduct } from './productRender.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-product-form');
    const productsContainer = document.getElementById('products-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(form)) {
            const product = {
                name: form['product-name'].value,
                price: form['product-price'].value,
                imageUrl: form['product-image-url'].value
            };
            addProduct(product);
            form.reset();
        }
    });

    productsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const productId = event.target.dataset.productId;
            deleteProduct(productId);
        }
    });

    renderProducts();
});
