import products from './products.js';
import cart from './cart.js';

// Initialize DOM elements
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// Display products function
function displayProducts(productsToShow) {
    // Get listProduct after template is loaded
    const listProduct = document.querySelector('.listProduct');
    
    if (!listProduct) {
        console.error('listProduct element not found');
        return;
    }
    
    console.log('Displaying products:', productsToShow); // Debug log
    
    listProduct.innerHTML = '';
    productsToShow.forEach((value) => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item', 'product', value.category);
        newProduct.innerHTML = `
            <img src="${value.image}" onclick="window.location.href='detail.html?id=${value.id}'">
            <div class="title">
                <h2 class="product-name">${value.name}</h2>
            </div>
            <div class="price">฿${value.price.toLocaleString()}</div>
            <button class="addCart" data-id="${value.id}">Add To Cart</button>
        `;
        listProduct.appendChild(newProduct);
    });

    // Add cart functionality
    document.querySelectorAll('.addCart').forEach(button => {
        button.addEventListener('click', () => {
            cart.addProduct(button.getAttribute('data-id'));
        });
    });
}

// Initialize app
function initApp() {
    if (!Array.isArray(products) || products.length === 0) {
        console.error('Products data is not available');
        return;
    }
    console.log('Initializing app with products:', products);
    displayProducts(products);
}

// Filter products
function filterProduct(value) {
    const buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        button.classList.toggle('active', value.toUpperCase() === button.innerText.toUpperCase());
    });

    document.querySelectorAll(".item:not(.slider .item)").forEach((element) => {
        if (value.toLowerCase() === "all") {
            element.classList.remove("hide");
        } else {
            element.classList.toggle("hide", !element.classList.contains(value));
        }
    });

    // Handle slider
    const slider = document.querySelector('.slider .list');
    const items = document.querySelectorAll('.slider .list .item');
    const dots = document.querySelectorAll('.slider .dots li');
    const active = 0;

    if (slider && items.length > 0) {
        slider.style.left = -items[active].offsetLeft + 'px';
        const lastActiveDot = document.querySelector('.slider .dots li.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
            dots[active]?.classList.add('active');
        }
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search");
    
    if (!searchInput || !searchButton) {
        console.error('Search elements not found');
        return;
    }

    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            displayProducts(products);
            return;
        }

        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );

        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);
        } else {
            const listProduct = document.querySelector('.listProduct');
            if (listProduct) {
                listProduct.innerHTML = `
                    <div class="no-results">
                        <p>No products found matching "${searchInput.value}"</p>
                    </div>
                `;
            }
        }
    }

    // Add event listeners
    searchInput.addEventListener("input", searchProducts);
    searchButton.addEventListener("click", searchProducts);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") searchProducts();
    });
}

// Load template and initialize app
const loadTemplate = () => {
    fetch('./template.html') // Changed to relative path
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            if (!app) {
                console.error('App element not found');
                return;
            }
            
            app.innerHTML = html;
            
            const contentTab = document.getElementById('contentTab');
            if (!contentTab || !temporaryContent) {
                console.error('Required elements not found');
                return;
            }
            
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart();
            initApp(); // Initialize app after template is loaded
            initializeSearch();
        })
        .catch(error => {
            console.error('Error loading template:', error);
            // Try to display products even if template fails
            initApp();
        });
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); // Debug log
    loadTemplate();
});

// Make filterProduct available globally
window.filterProduct = filterProduct;