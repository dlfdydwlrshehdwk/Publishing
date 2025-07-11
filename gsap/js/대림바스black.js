document.addEventListener('DOMContentLoaded', function(){

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    end: calcWindowH(5),
    scrub: true,
    pin: true,
    markers:true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      // 이미지 위로
      const maxYPercent = -24.62;
      const yValue = progress * maxYPercent;
      gsap.set('.content3 .bg', {
          yPercent: yValue
      });

      // 타이틀 on 초기화
      section3TitleSet.forEach(ele => {
        ele.classList.remove('on')
      })
      
      // 타이틀 on 토글
      if(progress < 0.25) {
        section3TitleSet[0].classList.add('on')
      } else if (progress < 0.5) {
        section3TitleSet[1].classList.add('on')
      } else if (progress < .75) {
        section3TitleSet[2].classList.add('on')
      }

      // 화면전환
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
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content4', {opacity: 1 - progress});
      gsap.to('.content5', {opacity: progress});
    }
  })

  // section5 -> section6 
  const section5Item1 = document.querySelector('.content5 .item1 .main_image');
  const section5Item2 = document.querySelector('.content5 .item2 .main_image');
  const section5Item3 = document.querySelector('.content5 .item3 .main_image');
  const section5Line1 = document.querySelector('.content5 .item1 .line');
  const section5Line2 = document.querySelector('.content5 .item2 .line');
  const section5Line3 = document.querySelector('.content5 .item3 .line');
  const section5Length = 8;
  const section5Split = 1 / section5Length;
  
  ScrollTrigger.create({
    trigger: ".section5",
    start: `top ${headerH}`,
    end: calcWindowH(section5Length),
    scrub: true,
    pin: true,
    markers:true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      // 모든 아이템/라인 숨김
      gsap.set([section5Item1, section5Item2, section5Item3, section5Line1, section5Line2, section5Line3], { opacity: 0 });

      // progress에 맞게 아이템 등장
      if(progress >= section5Split * 1) gsap.set(section5Item1, {opacity:1 });
      if(progress >= section5Split * 2) gsap.set(section5Item2, {opacity:1 });
      if(progress >= section5Split * 3) gsap.set(section5Item3, {opacity:1 });
      if(progress >= section5Split * 4) gsap.set(section5Line1, {opacity:1 });
      if(progress >= section5Split * 5) gsap.set(section5Line2, {opacity:1 });
      if(progress >= section5Split * 6) gsap.set(section5Line3, {opacity:1 });

      // 화면전환
      if (progress < section5Split * (section5Length - 1)) {
          gsap.to('.content5', { opacity: 1 });
          gsap.to('.content6', { opacity: 0 });
      } else {
          // progress 리매핑
          const localProgress = (progress - section5Split * (section5Length - 1)) / section5Split;
          gsap.to('.content5', { opacity: 1 - localProgress });
          gsap.to('.content6', { opacity: localProgress });
      }
    }
  })

  // section6 -> section7 
  ScrollTrigger.create({
    trigger: ".section6",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    markers:true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content6', {opacity: 1 - progress});
      gsap.to('.content7', {opacity: progress});
    }
  })

  // section7 -> section8 
  ScrollTrigger.create({
    trigger: ".section7",
    start: `top ${headerH}`,
    end: calcWindowH(2),
    scrub: true,
    pin: true,
    markers:true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      // 화면전환
      gsap.to('.content7', {opacity: 1 - progress});
      gsap.to('.content8', {opacity: progress});

      // bg 확대
      gsap.to('.content7 .bg', {scale: 1 + 0.5 * progress, overwrite: 'auto'})
    }
  })

  // section8 -> section9 
  const section8Length = 6;
  const section8Split = 1 / section8Length;
  const section8Bg1 = document.querySelector('.content8 .bg1');
  const section8Bg2 = document.querySelector('.content8 .bg2');
  const section8SubTitle1 = document.querySelector('.content8 .sub_title1');
  const section8SubTitle2 = document.querySelector('.content8 .sub_title2');
  const section8Item1 = document.querySelector('.content8 .item1');
  const section8Item2 = document.querySelector('.content8 .item2');
  const section8Item3 = document.querySelector('.content8 .item3');
  const section8Item4 = document.querySelector('.content8 .item4');

  ScrollTrigger.create({
    trigger: ".section8",
    start: `top ${headerH}`,
    end: calcWindowH(section8Length), 
    scrub: true,
    pin: true,
    markers:true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      console.log(progress)
      console.log(section8Split)
      // 초기화
      gsap.set([section8Bg1, section8Bg2,section8SubTitle1, section8SubTitle2, section8Item1, section8Item2, section8Item3, section8Item4], { opacity: 0 });
      // progress에 맞게 아이템 등장
      if(progress >= section8Split * 1) {

      };
      if(progress >= section8Split * 2) {
        gsap.set(section8Bg1, {opacity: 1});
        gsap.set(section8SubTitle1, {opacity: 1});
      };
      if(progress >= section8Split * 3) {
        gsap.set(section8SubTitle1, {opacity: 0, topPercent: 100});
      };
      if(progress >= section8Split * 4) {

      };
      if(progress >= section8Split * 5) {

      };
      if(progress >= section8Split * 6) {

      };


      // 화면전환
      // gsap.to('.content7', {opacity: 1 - progress});
      // gsap.to('.content8', {opacity: progress});

    }
  })
























  // 페이지네이션
  // const sections = document.querySelectorAll(".section");
  const paginationItems = document.querySelectorAll(".pagination li");

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

  // 페이지네이션 클릭시 각 섹션으로 이동하는 이벤트
  paginationItems.forEach(ele => {
    ele.addEventListener('click', function(e){
      e.preventDefault();
      const target = this.querySelector('a').dataset.target;
      const targetEle = document.querySelector('.' + target);

      if (targetEle) {
        // 해당 section의 ScrollTrigger 인스턴스 찾기
        let scrollToY = 0; // 초기값
  
        // ScrollTrigger 인스턴스 찾기
        const triggers = ScrollTrigger.getAll();
        const st = triggers.find(t => t.trigger === targetEle);
        
        if (st) {
          // pin이 시작되는 정확한 위치
          scrollToY = st.start;
        } else {
          // fallback: section의 top
          scrollToY = targetEle.offsetTop - headerH;
        }
        // 페이지네이션 활성화 토글
        paginationItems.forEach(ele => ele.classList.remove('on'))
        this.classList.add('on')
        // 스크롤이동
        lenis.scrollTo(scrollToY, { duration: 1 });
      } else if (target === 'black') {
        lenis.scrollTo(0, { duration: 1 });
      }
    })
  })
})
