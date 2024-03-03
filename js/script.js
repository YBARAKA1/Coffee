let navbar = null;
let searchForm = null;
let cartItem = null;

document.addEventListener('DOMContentLoaded', function() {
    navbar = document.querySelector('.navbar');
    searchForm = document.querySelector('.search-form');
    cartItem = document.querySelector('.cart-items-container');
    
    console.log(navbar, searchForm, cartItem); // Check if elements are correctly selected
    
    document.querySelector('#menu-btn').onclick = () => {
        console.log("Menu button clicked");
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    };

    document.querySelector('#search-btn').onclick = () => {
        console.log("Search button clicked");
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    };

    document.querySelector('#cart-btn').onclick = () => {
        console.log("Cart button clicked");
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    };
});

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};
