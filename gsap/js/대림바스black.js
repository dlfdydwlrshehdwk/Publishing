document.addEventListener('DOMContentLoaded', function(){
  return
  gsap.registerPlugin(ScrollTrigger);

  // 1. Lenis 인스턴스 생성
  const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,             // 부드러움 정도 (0.0 ~ 1.0)
      wheelMultiplier: 1.0,  // 마우스 휠 속도
      touchMultiplier: 1.0,  // 터치 스크롤 속도
      smoothTouch: true,     // 모바일도 적용여부
  });

  // 2. Lenis의 스크롤 이벤트와 ScrollTrigger 연동
  lenis.on('scroll', () => {
      ScrollTrigger.update();
  });

  // 3. requestAnimationFrame 루프
  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 4. (선택) GSAP ticker에 동기화하려면 아래도 추가 가능
  // gsap.ticker.add((time) => lenis.raf(time * 1000));
  // gsap.ticker.lagSmoothing(0);

  const headerH = document.querySelector('#header').scrollHeight;
  // section1 -> section2 
  ScrollTrigger.create({
    trigger: ".section1",
    start: `top ${headerH}`,
    end: '1000',
    scrub: true,
    pin: true,
    // markers:true,
    pinType: 'transform',
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.section1', {opacity: 1 - progress});
      gsap.to('.section2', {opacity: progress});
    }
  })














  // 페이지네이션
  // const sections = document.querySelectorAll(".section");
  // const paginationItems = document.querySelectorAll(".pagination li");

  // sections.forEach(function (section, index) {
  //     ScrollTrigger.create({
  //         trigger: section,
  //         start: "top center",
  //         end: "bottom center",
  //         onEnter: () => setActive(index),
  //         onEnterBack: () => setActive(index),
  //     });
  // });

  // function setActive(index) {
  //     paginationItems.forEach((el, i) => {
  //         el.classList.toggle("on", i === index);
  //     });
  // }
})