document.addEventListener('DOMContentLoaded',()=>{

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
    ripples[realIndex].classList.add('active')
  });

// return;


window.onload = function() {
  const section = document.querySelector('.section07');
  const qwer = document.querySelector('.section07 .qwer');
  
  console.log(section.clientHeight)
  console.log(qwer.offsetHeight)
  const targetOffset = section.offsetHeight - qwer.offsetHeight;
  
  console.log(`.qwer은 .section07 내부에서 ${targetOffset}px 아래에 있어`);

  // GSAP 타임라인 생성
  const tl1 = gsap.timeline();
  
  // // 타임라인에 애니메이션 추가
  tl1
  .to({}, {duration: .5})
  .to('.qwer', {width: '100%',height: '100vh',duration: 1,bottom:0})
  .to('.qwer .depth1 .dim', {autoAlpha:.3} ,"<+.5")
  .to('.qwer .depth1 .img2 img',{autoAlpha:0,filter:"blur(10px)"})
  .to({}, {duration: .2})
  .to('.qwer .depth1 .img3', {autoAlpha:1, filter:'blur(0px)'})
  .to('.qwer .depth1 .dim', {autoAlpha:1})
  .to('.qwer .depth1 .img3', {autoAlpha:0, filter:'blur(10px)'})
  .fromTo('.qwer .global', {autoAlpha:0,y:20},{autoAlpha:1,y:0})
  .to('#footer',{autoAlpha:1},"<")
  .to({}, {duration: .5})
  .fromTo('.qwer .continental', {y:-10,autoAlpha:0,filter:'blur(5px)'},{y:0,autoAlpha:1,filter:'blur(0px)'})
  .to('.ripple_set',{autoAlpha:1})
  ScrollTrigger.create({
    trigger: ".section07",
    start: `top+=${qwer.offsetHeight} top`,
    end: "4000px",
    scrub: true,
    pin:true,
    pinSpacing: true,
    // animation: tl1,
    markers:true,
    onEnter: () => console.log("스크롤 시작됨"),
  });
};

})

