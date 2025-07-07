document.addEventListener('DOMContentLoaded', function(){
  
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

  const headerH = document.querySelector('#header').clientHeight;
  const windowH = window.innerHeight - headerH;
  const stringWindowH = windowH.toString();
  function calcWindowH (num = 1){
    return (num * windowH).toString();
  }
  console.log(calcWindowH(3))

  // section1 -> section2 
  ScrollTrigger.create({
    trigger: ".section1",
    start: `top ${headerH}`,
    end: stringWindowH,
    scrub: true,
    pin: true,
    markers:true,
    // pinType: 'transform',
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content1', {opacity: 1 - progress});
      gsap.to('.content2', {opacity: progress});
    }
  })

  // section2 -> section3 
  ScrollTrigger.create({
    trigger: ".section2",
    start: `top ${headerH}`,
    end: stringWindowH,
    scrub: true,
    pin: true,
    markers:true,
    // pinType: 'transform',
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content2', {opacity: 1 - progress});
      gsap.to('.content3', {opacity: progress});
    }
  })

  // section3 -> section4 
  const section3TitleSet = document.querySelectorAll('.content3 .title_set');
  ScrollTrigger.create({
    trigger: ".section3",
    start: `top ${headerH}`,
    end: calcWindowH(4),
    scrub: true,
    pin: true,
    markers:true,
    // pinType: 'transform',
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      console.log(progress)
      section3TitleSet.forEach(ele => {
        ele.classList.remove('on')
      })
      if(progress < 0.25) {
        section3TitleSet[0].classList.add('on')
      } else if (progress < 0.5) {
        section3TitleSet[1].classList.add('on')
      } else if (progress < .75) {
        section3TitleSet[2].classList.add('on')

      }

      if (progress < 0.75) {
          gsap.to('.content3', { opacity: 1 });
          gsap.to('.content4', { opacity: 0 });
      } else {
          // progress 0.75~1.0 → 0~1로 리매핑
          const localProgress = (progress - 0.75) / 0.25;
          gsap.to('.content3', { opacity: 1 - localProgress });
          gsap.to('.content4', { opacity: localProgress });
      }
    }
  })

  // section4 -> section5 
  ScrollTrigger.create({
    trigger: ".section4",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    markers:true,
    // pinType: 'transform',
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content4', {opacity: 1 - progress});
      gsap.to('.content5', {opacity: progress});
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