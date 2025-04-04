import products from './products.js';

let cartItems = [];

function checkCart() {
    try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cartItems = JSON.parse(storedCart);
        }
    } catch (error) {
        console.error('Error parsing cart data from localStorage:', error);
        cartItems = [];
    }
}

function calculateTotal() {
    let totalPrice = 0;
    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            const product = products.find(p => p.id === parseInt(item.product_id));
            if (product) {
                totalPrice += product.price * item.quantity;
            }
        });
    }
    document.querySelector('.totalPrice').innerText = '฿' + totalPrice.toLocaleString();
}

document.addEventListener('DOMContentLoaded', () => {
    checkCart();
    calculateTotal();
});