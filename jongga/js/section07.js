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


// GSAP 타임라인 생성
const tl1 = gsap.timeline();

// 타임라인에 애니메이션 추가
tl1
.to({}, {duration: 1})
.to('.qwer', {width: '100%',height: '100vh',duration: 1})
.to('.qwer .depth1 .dim', {autoAlpha:.3} ,"<+.5")
.to('.qwer .depth1 .img2 img',{autoAlpha:0,filter:"blur(10px)"})
.to('.qwer .depth1 .img3', {autoAlpha:1, filter:'blur(0px)'})
.to('.qwer .depth1 .dim', {autoAlpha:1})
.to('.qwer .depth1 .img3', {autoAlpha:0, filter:'blur(10px)'})
.fromTo('.qwer .global', {autoAlpha:0,y:20},{autoAlpha:1,y:0})
.to('#footer',{autoAlpha:1},"<")
.to({}, {duration: .5})
.fromTo('.qwer .continental', {y:-10,autoAlpha:0,filter:'blur(5px)'},{y:0,autoAlpha:1,filter:'blur(0px)'})
.to('.ripple_set',{autoAlpha:1})
window.onload = function() {
  ScrollTrigger.create({
    trigger: ".section07",
    start: "bottom bottom",
    end: "3000px",
    pin: true,
    pinSpacing: true,
    scrub: true,
    animation: tl1,
    // markers:true,
  });

};

})