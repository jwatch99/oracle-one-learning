import { validateForm } from './formValidation.js';
import { renderProducts, addProductToDOM, removeProductFromDOM } from './productRender.js';
import { getProducts, addProduct } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('add-product-form');
    const productsContainer = document.getElementById('products-container');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (validateForm(form)) {
            const product = {
                name: form['product-name'].value,
                price: form['product-price'].value,
                imageUrl: form['product-image-url'].value
            };
            const newProduct = await addProduct(product);
            if (newProduct) {
                addProductToDOM(newProduct);
            }
            form.reset();
        }
    });

    productsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const productId = event.target.dataset.productId;
            removeProductFromDOM(productId);
        }
    });

    const products = await getProducts();
    renderProducts(products);
});
