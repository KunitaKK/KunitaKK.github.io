// Import products data
import products from './products.js';

let cartItems = [];

// Get data cart from localStorage
function checkCart() {
    try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cartItems = JSON.parse(storedCart);
            console.log('Cart data loaded:', cartItems); // Debug log
        }
    } catch (error) {
        console.error('Error parsing cart data from localStorage:', error);
        cartItems = [];
    }
}

function addCartToHTML() {
    // Clear default data
    const listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    const totalQuantityHTML = document.querySelector('.totalQuantity');
    const totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    console.log('Adding cart items to HTML:', cartItems); // Debug log

    // If there are products in the cart
    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            console.log('Processing cart item:', item); // Debug log
            // Find the product info
            const product = products.find(p => p.id === parseInt(item.product_id));
            console.log('Found product:', product); // Debug log

            if (product) {
                const newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">฿${product.price.toLocaleString()}</div>
                    </div>
                    <div class="quantity">${item.quantity}</div>
                    <div class="returnPrice">฿${(product.price * item.quantity).toLocaleString()}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity += item.quantity;
                totalPrice += product.price * item.quantity;
            }
        });
    }
    
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '฿' + totalPrice.toLocaleString();
    console.log('Total quantity:', totalQuantity, 'Total price:', totalPrice); // Debug log
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Checkout page loaded'); // Debug log
    checkCart();
    addCartToHTML();
});