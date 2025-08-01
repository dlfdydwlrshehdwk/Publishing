const section03Swiper = new Swiper(".section3 .swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    // loopedSlides: 13,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000, 
    768: {
    },
    1024: {
    },
})
section03Swiper.autoplay.start();