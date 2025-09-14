document.addEventListener("DOMContentLoaded", function () { 
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",    // 슬라이드 개별 너비 적용
    slidesPerGroup: 1,
    spaceBetween: 10,
    centeredSlides: true,     // 활성 슬라이드 중앙 정렬
    slideToClickedSlide: true, // 클릭한 슬라이드로 이동
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    on: {
      init: function () {
        try {
          const activeSlide = this.slides[this.activeIndex];
          const slides = this.slides
          if (!activeSlide) return;

          const rect = activeSlide.getBoundingClientRect();
          const windowWidth = window.innerWidth;

          // 지시하신 대로, 윈도우 기준 양옆 여백 값을 명시적으로 계산합니다.
          const leftMargin = rect.left;
          const rightMargin = windowWidth - rect.right;

          // 두 여백의 차이를 계산하여 보정 값을 구합니다.
          const correction = (rightMargin - leftMargin) / 2;
          
          const swiperWrapper = this.el.querySelector('.swiper-wrapper');
          if (!swiperWrapper) return;

          // wrapper의 position이 'relative'가 아니면 설정해줘야 left 속성이 적용됨
          if (window.getComputedStyle(swiperWrapper).position !== 'relative') {
            swiperWrapper.style.position = 'relative';
          }

          // 현재 left 값에 보정치를 더하여 새로운 left 값 계산
          const currentLeft = parseFloat(swiperWrapper.style.left) || 0;
          const newLeft = currentLeft + correction;

          swiperWrapper.style.left = newLeft + 'px';
          slides.forEach((slide)=>{
            slide.style.transition = 'all .3s';
          })
        } catch (e) {
          console.error("Error during manual centering:", e);
        }
      },
    },

  });
});
