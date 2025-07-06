document.addEventListener('DOMContentLoaded',()=>{

  const global = document.querySelector('.section07 .global ');

  let swiper = new Swiper('.continental', {
    slidesPerView: 'auto',
    loop: true,
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
    switch (realIndex) {
      case 0:
        // 아시아
        global.classList.remove('ver2');
        global.classList.remove('ver3');
        break;
        case 1:
          // 유럽
          global.classList.remove('ver2');
          global.classList.remove('ver3');
        break;
      case 2:
        // 북아메리카
        global.classList.remove('ver2');
        global.classList.add('ver3');
        break;
      case 3:
        // 오세아니아
        global.classList.add('ver2');
        global.classList.remove('ver3');
        break;
      case 4:
        // 아프리카
        global.classList.remove('ver2');
        global.classList.remove('ver3');
        break;
      default: global.classList.remove('ver2')
                global.classList.remove('ver3');
        break;
    }
    ripples[realIndex].classList.add('active')
  });

})

