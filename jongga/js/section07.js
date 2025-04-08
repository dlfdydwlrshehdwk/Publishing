document.addEventListener('DOMContentLoaded',()=>{

  let swiper = new Swiper('.continental', {
    slidesPerView: '4.5',
    loop: true,
    centeredSlides: true,
    grabCursor: true, 
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



  const continental = document.querySelector('.continental');
  const cursor = continental.querySelector('.continental_cursor');
  
  continental.addEventListener('pointerenter', () => {
    cursor.classList.add('active');
  });

  continental.addEventListener('pointerleave', () => {
    cursor.classList.remove('active');
  });

  // 드래그 중에도 따라가게 하기 위해 pointermove 사용
  continental.addEventListener('pointermove', (e) => {
    const rect = continental.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
  });
})