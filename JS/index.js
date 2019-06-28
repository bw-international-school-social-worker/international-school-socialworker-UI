imgCounter = 1

class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        console.log(this.carousel)
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.imgList = document.querySelectorAll('.carousel-img');
        // this.selectedImg = document.querySelector(`.carousel-img[data-tab = '${imgCounter}']`)
        this.leftButton.addEventListener('click', () => this.leftClick());
        this.rightButton.addEventListener('click', () => this.rightClick());
        this.displayImg();
    }
    displayImg(){
        let images = this.imgList;
        images.forEach(function(img){
            img.style.display = 'none'
        })
        let newImg = document.querySelector(`.carousel-img[data-tab='${imgCounter}']`);
        // let newImg = this.imgList[`data-tab = '${imgCounter}'`] 
        // let newImg = this.selectedImg;l

        newImg.style.display = 'inline';
    }
    leftClick() {
        if(imgCounter != 1){
            imgCounter -= 1;
            console.log(imgCounter);
            this.displayImg();
        } else {
            imgCounter = (this.imgList.length);
            console.log(imgCounter);
            this.displayImg();
        }
        this.displayImg();
    }
    rightClick() {
        if(imgCounter != this.imgList.length){
            imgCounter += 1;
            console.log(imgCounter);
            this.displayImg();
        } else {
            imgCounter = 1;
            console.log(imgCounter);
            this.displayImg();
        }
        
    }
}


let carousel = document.querySelector('.carousel');

let newCarousel = new Carousel(carousel);



let toggleMenu = function(){
    mobileMenu.classList.toggle('menu-open')
}

let mobileMenuButton = document.querySelector('.menu-button')

let mobileMenu = document.querySelector('.mobile-nav')

mobileMenuButton.addEventListener('click', toggleMenu)