export function validateForm(form) {
    const name = form['product-name'].value.trim();
    const price = form['product-price'].value.trim();
    const imageUrl = form['product-image-url'].value.trim();

    if (!name || !price || !imageUrl) {
        alert('Todos los campos son obligatorios.');
        return false;
    }

    if (isNaN(price) || parseFloat(price) <= 0) {
        alert('El precio debe ser un número positivo.');
        return false;
    }

    return true;
}
