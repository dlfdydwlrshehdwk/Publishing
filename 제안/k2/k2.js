document.addEventListener('DOMContentLoaded', function(){
  const section1Swiper = new Swiper(".section1_swiper", {
    loop: true,
    slidesPerView: 1,
    // autoplay: {
        // delay: 3000
    // },
    // allowTouchMove: false,
    on: {
      slideChange: function () {
          const activeSlide = this.slides[this.activeIndex];
          const items = activeSlide.querySelectorAll('div');

          // 초기화
          items.forEach(function(el){
              el.style.opacity = 0;
          });

          // 순차 등장
          items.forEach(function(el, i){
              setTimeout(function(){
                  el.style.opacity = 1;
              }, i * 200); // 0.2초 간격
          });
      }
    }
  });

  const section6Swiper = new Swiper(".section6_swiper", {
    // loop: true,
    slidesPerView: 1.15,
    centeredSlides: true,
    spaceBetween: 10,
    loopAdditionalSlides: 6,
    // autoplay: {
        // delay: 3000
    // },
    // allowTouchMove: false,
  });
})