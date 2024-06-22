



var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function login() {
    x.style.left = '50px';
    y.style.left = '-400px';
    z.style.left = '0';
}

function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// JavaScript for Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}





      // Function to add animation classes to elements
      function addAnimationClass() {
        var elements = document.querySelectorAll('.animate');
        elements.forEach(function(element) {
            var animationClass = element.getAttribute('data-animation');
            if (isElementInViewport(element)) {
                element.classList.add(animationClass);
            }
        });
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Event listener for scrolling to add animations
    window.addEventListener('scroll', addAnimationClass);
    window.addEventListener('load', addAnimationClass);
    
    // Page Transition Animation
    document.addEventListener('DOMContentLoaded', (event) => {
        const body = document.querySelector('body');
        const loader = document.createElement('div');
        loader.classList.add('page-transition-enter');
        body.appendChild(loader);
    
        setTimeout(() => {
            loader.classList.add('page-transition-enter-active');
        }, 10);
    
        window.addEventListener('beforeunload', function () {
            loader.classList.add('page-transition-exit');
            setTimeout(() => {
                loader.classList.add('page-transition-exit-active');
            }, 10);
        });
    });
    
    
        