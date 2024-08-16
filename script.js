$(document).ready(function(){
    $('.internship-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
spaceBetween: 20,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
pagination: {
el: '.swiper-pagination',
clickable: true,
},
breakpoints: {
1200: {
slidesPerView: 3,
spaceBetween: 20,
},
992: {
slidesPerView: 2,
spaceBetween: 20,
},
768: {
slidesPerView: 2,
spaceBetween: 15,
},
576: {
slidesPerView: 1,
spaceBetween: 10,
},
},
on: {
init: function () {
this.update();
},
resize: function () {
this.update();
}
}
});
document.addEventListener("DOMContentLoaded", function() {
    // Animate icons to slide in
    const icons = document.querySelectorAll('.task-icon, .lms-icon, .feature img');
    icons.forEach(icon => {
        icon.classList.add('slide-in');
    });

    // Animate images to bounce
    const images = document.querySelectorAll(' .task-image, .lms-image, image-content');
    images.forEach(image => {
        image.classList.add('bounce');
    });
});