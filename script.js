const products = [
    { id: 1, name: 'Handcrafted Necklace', price: 35.00, image: 'necklace.jpg' },
    { id: 2, name: 'Beaded Bracelet', price: 25.00, image: 'bracelet.jpg' },
    { id: 3, name: 'Earrings', price: 15.00, image: 'earrings.jpg' }
];

const productList = document.querySelector('.product-list');

function renderProducts() {
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src='${product.image}' alt='${product.name}'>
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}

renderProducts();