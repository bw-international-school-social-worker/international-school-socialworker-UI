let toggleMenu = function(){
    mobileMenu.classList.toggle('menu-open')
}

let mobileMenuButton = document.querySelector('.menu-button')

let mobileMenu = document.querySelector('.mobile-nav')

mobileMenuButton.addEventListener('click', toggleMenu)