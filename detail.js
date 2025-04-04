import products from './products.js';
import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if(!thisProduct){
        window.location.href = "/";
    }

    // Display current product details
    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '฿' + thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;

    // Get related products (4 items)
    let relatedProducts = products
        .filter(product => product.id !== thisProduct.id) // Exclude current product
        .filter(product => product.category === thisProduct.category) // Same category
        .slice(0, 4); // Get only 4 items

    // If we don't have enough products in the same category, add from other categories
    if (relatedProducts.length < 4) {
        const remainingCount = 4 - relatedProducts.length;
        const otherProducts = products
            .filter(product => 
                product.id !== thisProduct.id && 
                product.category !== thisProduct.category
            )
            .slice(0, remainingCount);
        
        relatedProducts = [...relatedProducts, ...otherProducts];
    }

    // Display related products
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = ''; // Clear existing content

    relatedProducts.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `<a href="/detail.html?id=${product.id}">
            <img src="${product.image}">
        </a>
        <h2>${product.name}</h2>
        <div class="price">฿${product.price}</div>
        <button 
            class="addCart" 
            data-id='${product.id}'>
                Add To Cart
        </button>`;
        listProductHTML.appendChild(newProduct);
    });
}