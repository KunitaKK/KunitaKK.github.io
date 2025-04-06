import products from "./products.js";

const cart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let iconCart = document.querySelector('.icon-cart');
    let iconCartSpan = iconCart.querySelector('span');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let checkoutPage = document.querySelector('.checkout');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Initialize cart quantity to 0
    iconCartSpan.innerText = '0';

    // open and close tab
    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });
    checkoutPage.addEventListener('click', () => {
        document.location = 'checkout.html';
    });

    const setProductInCart = (idProduct, value) => {
        let positionThisProductInCart = cartItems.findIndex((item) => item.product_id == idProduct);
        if (value <= 0) {
            cartItems.splice(positionThisProductInCart, 1);
        } else if (positionThisProductInCart < 0) {
            cartItems.push({
                product_id: idProduct,
                quantity: 1
            });
        } else {
            cartItems[positionThisProductInCart].quantity = value;
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        addCartToHTML();
    };

    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        
        // Calculate total quantity, default to 0 if cart is empty
        let totalQuantity = 0;
        if (cartItems && cartItems.length > 0) {
            totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        }
        iconCartSpan.innerText = totalQuantity;

        // Calculate total price
        let totalPrice = 0;
        if (cartItems && cartItems.length > 0) {
            totalPrice = cartItems.reduce((total, item) => {
                let positionProduct = products.findIndex((value) => value.id == item.product_id);
                if (positionProduct < 0) return total;
                let info = products[positionProduct];
                return total + (info.price * item.quantity);
            }, 0);

            // Add items to cart HTML
            cartItems.forEach(item => {
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = item.product_id;

                let positionProduct = products.findIndex((value) => value.id == item.product_id);
                if (positionProduct < 0) return;
                let info = products[positionProduct];
                listCartHTML.appendChild(newItem);
                newItem.innerHTML = `
                <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">฿ ${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}"><</span>
                        <span class="quantity-value">${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">></span>
                    </div>
                `;
            });
        }

        // Update total price display
        let totalPriceElement = document.querySelector('.totalPriceSum');
        if (totalPriceElement) {
            totalPriceElement.innerText = `Total Price: ฿ ${totalPrice}`;
        } else {
            let totalPriceDiv = document.createElement('div');
            totalPriceDiv.classList.add('totalPriceSum');
            totalPriceDiv.innerText = `Total Price: ฿ ${totalPrice}`;
            listCartHTML.appendChild(totalPriceDiv);
        }
    };

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let quantity = null;
        let positionProductInCart = cartItems.findIndex((value) => value.product_id == idProduct);
        if (buttonClick.classList.contains('addCart')) {
            quantity = (positionProductInCart < 0) ? 1 : cartItems[positionProductInCart].quantity + 1;
            setProductInCart(idProduct, quantity);
        } else if (buttonClick.classList.contains('minus')) {
            if (positionProductInCart >= 0) {
                quantity = cartItems[positionProductInCart].quantity - 1;
                setProductInCart(idProduct, quantity);
            }
        } else if (buttonClick.classList.contains('plus')) {
            if (positionProductInCart >= 0) {
                quantity = cartItems[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
            }
        }
    });

    const initApp = () => {
        // Set initial cart quantity to 0
        iconCartSpan.innerText = '0';
        
        // Load cart from localStorage if it exists
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cartItems = JSON.parse(storedCart);
            addCartToHTML();
        }
    };

    // Initialize the app
    initApp();
};

export default cart;