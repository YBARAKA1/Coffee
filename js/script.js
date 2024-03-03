document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');
    console.log(navbar); // Check if navbar is correctly selected
    document.querySelector('#menu-btn').onclick = () => {
        console.log("Menu button clicked"); // Check if the event listener is triggered
        navbar.classList.toggle('active');
    };
});

document.addEventListener('DOMContentLoaded', function() {
    let cartItem = document.querySelector('.cart-items-container');
    console.log(cartItem); // Check if cart items container is correctly selected
    document.querySelector('#cart-btn').onclick = () => {
        console.log("Cart button clicked"); // Check if the event listener is triggered
        cartItem.classList.toggle('active');
    };
});
