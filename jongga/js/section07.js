document.addEventListener('DOMContentLoaded',()=>{

  let swiper = new Swiper('.continental', {
    slidesPerView: '4.5',
    loop: true,
    centeredSlides: true,
    on: {
      init: function(){

      },
      slideChange: function () {

      }
    }
  })
  swiper.on('slideChange', function () {
    let realIndex =  swiper.realIndex % 5;
    let ripples = document.querySelectorAll('.qwer .ripple');
    ripples.forEach(ripple => {
      ripple.classList.remove('active');
    })
    ripples[realIndex].classList.add('active')
  });




})