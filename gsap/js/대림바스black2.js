document.addEventListener('DOMContentLoaded', function(){

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // swiper
  const swiperEle = document.querySelectorAll('.content20 .category_list')
  swiperEle.forEach(ele => {
      new Swiper(ele, {
        slidesPerView: 3,
        spaceBetween: 40,
      })
  })

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

  function calcWindowH (num = 1){
    // return (num * windowH).toString();
    return (num * 400).toString();
  }

// section1 -> section2
const section1Timeline = gsap.timeline({ paused: true });
section1Timeline
  .to('.content1', { opacity: 0, duration: 1, ease: 'none' })
  .to('.content2', { opacity: 1, duration: 1, ease: 'none' });

ScrollTrigger.create({
  trigger: ".section1",
  start: `top ${headerH}`,
  end: calcWindowH(),
  scrub: true,
  pin: true,
  anticipatePin: 1,
  onUpdate: (self) => {
    section1Timeline.progress(self.progress);
  }
});

// section2 -> section3
const section2Timeline = gsap.timeline({ paused: true });
section2Timeline
  .to('.content2', { opacity: 0, duration: 1, ease: 'none' }, 0)
  .to('.content3', { opacity: 1, duration: 1, ease: 'none' }, 0);

ScrollTrigger.create({
  trigger: ".section2",
  start: `top ${headerH}`,
  end: calcWindowH(),
  scrub: true,
  pin: true,
  anticipatePin: 1,
  onUpdate: (self) => {
    section2Timeline.progress(self.progress);
  }
});

  // section3 -> section4 +
  const section3TitleSet = document.querySelectorAll('.content3 .title_set');
  // 1. timeline 생성
  const section3Timeline = gsap.timeline({ paused: true });

  // 타이틀 on/off 함수
  function setTitleOn(idx) {
    section3TitleSet.forEach((ele, i) => {
      ele.classList.toggle('on', i === idx);
    });
  }

  // timeline 구성
  section3Timeline
    // 타이틀1 on
    .call(() => setTitleOn(0), null, 0)
    // 타이틀2 on
    .call(() => setTitleOn(1), null, 0.25)
    // 타이틀3 on
    .call(() => setTitleOn(2), null, 0.5)
    // bg 이동 (0~1 구간에서 yPercent -10까지)
    .to('.content3 .bg img', { yPercent: -10, duration: 1, ease: 'none' }, 0)
    // 화면전환 (0.75~1 구간에서 opacity 전환)
    .to('.content3', { opacity: 0, duration: 0.25, ease: 'none' }, 0.75)
    .to('.content4', { opacity: 1, duration: 0.25, ease: 'none' }, 0.75);

  // 2. ScrollTrigger에서 timeline 동기화
  ScrollTrigger.create({
    trigger: ".section3",
    start: `top ${headerH}`,
    end: calcWindowH(5),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      section3Timeline.progress(self.progress);
    }
  });
  // section4 -> section5 
  // 1. timeline 생성
  const section4Timeline = gsap.timeline();

  section4Timeline
    .to('.content4', { opacity: 0, duration: 1, ease: 'none' }, 0)
    .to('.content5', { opacity: 1, duration: 1, ease: 'none' }, 0);

  // 2. ScrollTrigger에서 timeline 동기화
  ScrollTrigger.create({
    trigger: ".section4",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // onUpdate: (self) => {
    //   section4Timeline.progress(self.progress);
    // }
  });

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
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      // 모든 아이템/라인 숨김
      gsap.set([section5Item1, section5Item2, section5Item3, section5Line1, section5Line2, section5Line3], { opacity: 0 });

      // progress에 맞게 아이템 등장
      if(progress >= section5Split * 1) gsap.set(section5Item1, {opacity:1 });
      if(progress >= section5Split * 2) gsap.set(section5Line1, {opacity:1 });
      if(progress >= section5Split * 3) gsap.set(section5Item2, {opacity:1 });
      if(progress >= section5Split * 4) gsap.set(section5Line2, {opacity:1 });
      if(progress >= section5Split * 5) gsap.set(section5Item3, {opacity:1 });
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
  return
  // section6 -> section7 
  ScrollTrigger.create({
    trigger: ".section6",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
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
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content7', {opacity: 1 - progress});
      gsap.to('.content8', {opacity: progress});
    }
  })

  // section8 -> section9 
  ScrollTrigger.create({
    trigger: ".section8",
    start: `top ${headerH}`,
    end: calcWindowH(2),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const rawProgress = self.progress;
      const progress = Math.round(rawProgress * 1000) / 1000;
      // 화면전환
      gsap.to('.content8', {opacity: 1 - progress});
      gsap.to('.content9', {opacity: progress});

      // bg 확대
      gsap.to('.content8 .bg', {scale: 1 + 0.5 * progress, overwrite: 'auto'})
    }
  })

  // section9 -> section10 
  const section9Length = 10;
  const section9Split = 1 / section9Length;
  const section9BgWrap = document.querySelector('.content9 .bg_wrap')
  const section9BgWrap2 = document.querySelector('.content9 .bg_wrap2')
  const section9Title = document.querySelector('.content9 .title')
  const section9SubTitle1 = document.querySelector('.content9 .sub_title1');
  const section9SubTitle2 = document.querySelector('.content9 .sub_title2');
  
  ScrollTrigger.create({
    trigger: ".section9",
    start: `top ${headerH}`,
    end: calcWindowH(section9Length), 
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const step = Math.floor(progress / section9Split);
      const rawProgress = (progress - step * section9Split) / section9Split; // 일반 progress 각섹션에 맞게 1등분씩 된 조정되지 않은 진행률
      const localProgress = Math.round(rawProgress * 1000) / 1000; // 소수점 3자리 까지
      const clampedProgress = Math.min(1, Math.max(0, localProgress)); // localProgress에서 소수점 끝자리 보정

      // 초기화
      if(step >=0) {
        gsap.to(section9Title, {opacity: 1, duration: 0.3});
      } else {
        gsap.to(section9Title, {opacity:0, duration: 0.3});
      }

      // 분기별
      switch(step) {
        case 0:
          break;
        case 1:
          gsap.to(section9SubTitle1, { opacity: localProgress });
          gsap.to(section9BgWrap, { opacity: localProgress });
          break;
        case 2:
          break;
        case 3: 
          gsap.to(section9SubTitle1, { opacity: 1- localProgress });
          gsap.to(section9BgWrap, {xPercent: clampedProgress * -50})
          break
        case 4:
          break;
        case 5:
          gsap.to(section9SubTitle2, { opacity: localProgress });
          break
        case 6: 
          gsap.to(section9SubTitle2, { opacity: 1 - localProgress });
          gsap.to(section9BgWrap2, {xPercent: clampedProgress * -50})
          break
        case 7:
          break;
        case 8:
          break;
      }
      // 정확하게 50%를 만들기 위함
      if (step === 3) {
        const targetX = clampedProgress >= 0.98 ? -50 : clampedProgress * -50;
        gsap.to(section9BgWrap, { xPercent: targetX });
      }
      if (step === 5) {
        const targetX = clampedProgress >= 0.98 ? -50 : clampedProgress * -50;
        gsap.to(section9BgWrap2, { xPercent: targetX });
      }
      if (step === 7) {
          gsap.to('.content9', {opacity: 1 - clampedProgress});
          gsap.to('.content10', {opacity: clampedProgress});
      }

    }
  })


  // section10 -> section11 
  ScrollTrigger.create({
    trigger: ".section10",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content10', {opacity: 1 - progress});
      gsap.to('.content11', {opacity: progress});
    }
  })

  // section11 -> section12
  ScrollTrigger.create({
    trigger: ".section11",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to('.content11', {opacity: 1 - progress});
      gsap.to('.content12', {opacity: progress});

      // bg 확대
      gsap.to('.content11 .bg', {scale: 1 + 0.5 * progress, overwrite: 'auto'})
    }
  })


  // section12 -> section13 
  const section12Length = 15;
  const section12Split = 1 / section12Length;
  const section12 = document.querySelector('.content12')
  const section12Bg1 = document.querySelector('.content12 .bg1')
  const section12Bg2 = document.querySelector('.content12 .bg2')
  const section12Bg3 = document.querySelector('.content12 .bg3')
  const section12Bg3Img = document.querySelector('.content12 .bg3 img')
  const section12ItemWrap1 = document.querySelector('.content12 .item_wrap1')
  const section12ItemWrap2 = document.querySelector('.content12 .item_wrap2')
  const section12Item1 = document.querySelector('.content12 .item1')
  const section12Item2 = document.querySelector('.content12 .item2')
  const section12Title = document.querySelector('.content12 .title')
  const section12SubTitle1 = document.querySelector('.content12 .sub_title1');
  const section12SubTitle2 = document.querySelector('.content12 .sub_title2');

  // 요소기본값초기화
  gsap.set([section12ItemWrap1,section12ItemWrap2], {yPercent : 100});
  gsap.set([section12SubTitle1,section12SubTitle2], {yPercent : 100})
  gsap.set([section12Bg3], {yPercent: 100, opacity: 0})
  ScrollTrigger.create({
    trigger: ".section12",
    start: `top ${headerH}`,
    end: calcWindowH(section12Length), 
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const step = Math.floor(progress / section12Split);
      // const localProgress = (progress - step * section12Split) / section12Split;
      const rawProgress = (progress - step * section12Split) / section12Split; // 일반 progress 각섹션에 맞게 1등분씩 된 조정되지 않은 진행률
      const localProgress = Math.round(rawProgress * 1000) / 1000; // 소수점 3자리 까지
      const clampedProgress = Math.min(1, Math.max(0, localProgress)); // localProgress에서 소수점 끝자리 보정

      // yPercent시 소수점 끝자리 방지 변수 0 - 100 (사이즈 딱 맞게)
      const targetY = 
      clampedProgress <= 0.02 ? 0 : 
      clampedProgress >= 0.98 ? -100 : 
      Math.round(clampedProgress * -100) * 1000 / 1000;
      // 초기화
      gsap.set(section12Bg2, {opacity: 0});

      if(step >= 0) {
        gsap.to(section12Title, {opacity: 1, duration: 0.3});
      } else {
        gsap.to(section12Title, {opacity:0, duration: 0.3});
      }
      if(step >= 2) {
        gsap.to(section12Bg2, {opacity: 1, duration: 0});
      }

      // 분기별
      switch(step) {
        case 0:
          gsap.to(section12Bg1, {opacity:clampedProgress});
          break;
        case 1:
          break;
        case 2:
          // 전구켜짐
          break;
        case 3:
          // 배경이동
          gsap.to(section12Bg1, { yPercent: targetY });
          gsap.to(section12Bg2, { yPercent: targetY });
          break;
        case 4:
          break;
        case 5:
          // 아이템 배경 이동
          gsap.to(section12ItemWrap1, {yPercent: targetY + 100});
          gsap.to(section12ItemWrap2, {yPercent: targetY + 100}); 
          break;
        case 6: 
          // 소제목 이동  
          gsap.to(section12SubTitle1, {yPercent: targetY + 100, opacity: clampedProgress});
          break;
        case 7:
          // 아이템 이동
          gsap.to(section12Item1, {
            left: `${17.291 + (14 - 17.291) * clampedProgress}%`,
            top: `${-6.526 + (0 - -6.526) * clampedProgress}%`
          })
          gsap.to(section12Item2, {
            right: `${11.875 - 5 * clampedProgress}%`,
            bottom: `${-30.273 + 5 * clampedProgress}%`
          })
          break
        case 8:   
          // 아이템 배경 이동
          gsap.to(section12ItemWrap1, {yPercent: targetY, opacity : 1 - clampedProgress });
          gsap.to(section12ItemWrap2, {yPercent: targetY, opacity : 1 - clampedProgress}); 
          // 소제목 이동  
          gsap.to(section12SubTitle1, {yPercent: targetY, opacity: clampedProgress});
          break
        case 9:
          break
        case 10: 
          // 배경이동
          gsap.to(section12Bg3, { yPercent: targetY + 100, opacity: clampedProgress});
          break
        case 11: 
          gsap.to(section12SubTitle2, {yPercent: targetY + 100, opacity: clampedProgress});
          break
        case 12: 
          gsap.to(section12Bg3Img, {yPercent: -15 * localProgress});
          break
        case 13: 
          gsap.to(section12, {opacity: 1 - clampedProgress });
        case 15:
          // 배경전환
          gsap.to('.content13', {opacity: clampedProgress});
      }

    }
  })


  // section13 -> section14 
  const section14Video = document.querySelector('.content14 video');
  ScrollTrigger.create({
    trigger: ".section13",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      
      gsap.to('.content13', {opacity: 1 - progress});
      gsap.to('.content14', {opacity: progress});
      if(progress > 0) {
        section14Video.playbackRate = 0.8; // 영상 조금 느리게 재생
        section14Video.play();
        gsap.set('.content14 .title', {opacity: progress})
      } else {
        section14Video.currentTime = 0;
        section14Video.pause();
      }
    }
  })

  // section14 -> section15 
  ScrollTrigger.create({
    trigger: ".section14",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
        // 배경전환
        gsap.set('.content14', {opacity: 1- progress});
        gsap.set('.content15', {opacity: progress});
        gsap.set('.content14 .bg', {scale: 1 + 0.5 * progress, overwrite: 'auto'})
    }
  })

  // section15 -> section16 
  const section15Length = 11;
  const section15Split = 1 / section15Length;
  ScrollTrigger.create({
    trigger: ".section15",
    start: `top ${headerH}`,
    end: calcWindowH(section15Length),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const step = Math.floor(progress / section15Split);
      const rawProgress = (progress - step * section15Split) / section15Split; // 일반 progress 각섹션에 맞게 1등분씩 된 조정되지 않은 진행률
      const localProgress = Math.round(rawProgress * 1000) / 1000; // 소수점 3자리 까지
      const clampedProgress = Math.min(1, Math.max(0, localProgress)); // localProgress에서 소수점 끝자리 보정

      switch (step) {
        case 0:
          gsap.set('.content15 .title', {opacity: clampedProgress});
          break;
        case 1:
          break;
        case 2:
          gsap.set('.content15 .bg1', {opacity: clampedProgress});
          break;
        case 3:
          gsap.set('.content15 .sub_title1', {opacity: clampedProgress});
          break;
        case 4:
          gsap.set('.content15 .bg1', {scale: 1 + 0.5 * clampedProgress, overwrite: 'auto', opacity: 1 - clampedProgress});
          break;
        case 5:
          gsap.set('.content15 .bg2', {opacity: clampedProgress});
          break;
        case 6: 
          break;
        case 7: 
          gsap.set('.content15 .bg2', {scale: 1 + 0.5 * clampedProgress, overwrite: 'auto', opacity: 1 - clampedProgress});
          gsap.set('.content15 .sub_title1', {opacity: 1 - clampedProgress});
          break;
        case 8:
          gsap.set('.content15 .bg3', {opacity: clampedProgress});
          gsap.set('.content15 .sub_title2', {opacity: clampedProgress});
          break;
        case 9: 
          break;
        case 10:
          gsap.set('.content15', {opacity: 1 - clampedProgress});
          gsap.set('.content16', {opacity: clampedProgress});
          break;
      }
    }
  })

  // section 16 -> 17
  ScrollTrigger.create({
    trigger: ".section16",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
        // 배경전환
        gsap.set('.content16', {opacity: 1- progress});
        gsap.set('.content17', {opacity: progress});
    }
  })

  // section 17 -> 18
  ScrollTrigger.create({
    trigger: ".section17",
    start: `top ${headerH}`,
    end: calcWindowH(),
    scrub: true,
    pin: true,
    // markers:true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
        // 배경전환
        gsap.set('.content17', {opacity: 1- progress});
        gsap.set('.content17 .bg', {scale: 1 + 0.5 * progress, overwrite: 'auto'})
    }
  })

  // // section18 -> section19 
  const section18Length = 14;
  const section18Split = 1 / section18Length;
  const section18bg2Wrap = document.querySelector('.content18 .bg_wrap2')
  const section18bg2Img = document.querySelector('.content18 .bg_wrap2 img');
  const section18bg3 = document.querySelector('.content18 .bg3')
  gsap.set([section18bg2Wrap, section18bg3], {yPercent: 100});
  gsap.set([section18bg2Img], {yPercent: -50});
  // ScrollTrigger.create({
  //   trigger: ".section18",
  //   start: `top ${headerH}`,
  //   end: calcWindowH(section18Length),
  //   scrub: true,
  //   pin: true,
  //   anticipatePin: 1,
  //   onUpdate: (self) => {
  //     // const progress = self.progress;
  //     // const step = Math.floor(progress / section18Split);
  //     // const rawProgress = (progress - step * section18Split) / section18Split; // 일반 progress 각섹션에 맞게 1등분씩 된 조정되지 않은 진행률
  //     // const localProgress = Math.round(rawProgress * 1000) / 1000; // 소수점 3자리 까지
  //     // const clampedProgress = Math.min(1, Math.max(0, localProgress)); // localProgress에서 소수점 끝자리 보정

  //     // // yPercent시 소수점 끝자리 방지 변수 0 - 100 (사이즈 딱 맞게)
  //     // const targetY = 
  //     // clampedProgress <= 0.02 ? 0 : 
  //     // clampedProgress >= 0.98 ? -100 : 
  //     // Math.round(clampedProgress * -100) * 1000 / 1000;

  //     // switch (step) {
  //     //   case 0:
  //     //     gsap.to('.content18', {opacity: clampedProgress});
  //     //     break;
  //     //   case 1:
  //     //     break;
  //     //   case 2:
  //     //     gsap.to('.content18 .bg1', {opacity: clampedProgress});
  //     //     gsap.to('.content18 .sub_title', {opacity: clampedProgress}); 
  //     //     break;
  //     //   case 3:
  //     //     break;
  //     //   case 4:
  //     //     gsap.to('.content18 .bg1', {yPercent: targetY});
  //     //     break;
  //     //   case 5:
  //     //     break;
  //     //   case 6: 
  //     //     gsap.to('.content18 .bg2_wrap2', {yPercent: targetY + 100, opacity: clampedProgress});
  //     //     break;
  //     //   case 7: 
  //     //     gsap.to('.content18 .bg_wrap2 img',{x: -100 * clampedProgress });
  //     //     break;
  //     //   case 8:
  //     //     gsap.to('.content18 .bg_wrap2', {yPercent: targetY, opacity: 1 - clampedProgress});
  //     //     break;
  //     //   case 9: 
  //     //     gsap.to('.content18 .sub_title', {opacity: 1 - clampedProgress});
  //     //     break;
  //     //   case 10:
  //     //     gsap.to('.content18 .bg3', {yPercent: targetY + 100, opacity: clampedProgress});
  //     //     break;
  //     //   case 12: 
  //     //     gsap.to('.content18 .title', {opacity: 1 - clampedProgress});
  //     //     break
  //     //   case 13:
  //     //     gsap.to('.content18 .bg3', {opacity: 1 - clampedProgress});
  //     //     gsap.to('.content19', {opacity: clampedProgress});
  //     //     break
  //     //   case 14: 
  //     //      gsap.to('.content19', {opacity: 1- progress});
  //     //     break
  //     // }
  //   }
  // })
  // 1. timeline 생성 (애니메이션 순서대로 추가)
const tl = gsap.timeline({ paused: true });

tl
  .to('.content18', { opacity: 1, duration: 1 }, 0)
  .to('.content18 .bg1', { opacity: 1, duration: 1 }, 1 * 2)
  .to('.content18 .sub_title', { opacity: 1, duration: 1 }, 1 * 2)
  .to('.content18 .bg1', { yPercent: -100, opacity: 0, duration: 1 }, 1 * 4)
  .to({},{},1 * 5)
  .to('.content18 .bg_wrap2', { yPercent: 0, opacity: 1, duration: 1 }, 1 * 6)
  .to('.content18 .bg_wrap2 img', { x: -100, yPercent : -50, duration: 1 }, 1 * 7)
  .to('.content18 .bg_wrap2', { yPercent: 0, opacity: 0, duration: 1 }, 1 * 8)
  .to('.content18 .sub_title', { opacity: 0, duration: 1 }, 1 * 9)
  .to('.content18 .bg3', { yPercent: 0, opacity: 1, duration: 1 }, 1 * 10)
  .to('.content18 .title', { opacity: 0, duration: 1 }, 1 * 12)
  .to('.content18 .bg3', { opacity: 0, duration: 1 }, 1 * 13)
  .to('.content19', { opacity: 1, duration: 1 }, 1 * 13)
  .to('.content19', { opacity: 0, duration: 1 }, 1 * 14);

// 2. ScrollTrigger에서 timeline의 progress를 동기화
ScrollTrigger.create({
  trigger: ".section18",
  start: `top ${headerH}`,
  end: calcWindowH(section18Length),
  scrub: true,
  pin: true,
  anticipatePin: 1,
  onUpdate: (self) => {
    tl.progress(self.progress);
  }
});

  // // section19 -> section20
  //   ScrollTrigger.create({
  //   trigger: ".section19",
  //   start: `top ${headerH}`,
  //   end: calcWindowH(),
  //   scrub: true,
  //   // pin: true,
  //   anticipatePin: 1,
  //   onUpdate: (self) => {
  //     const progress = self.progress;
  //       // 배경전환
  //       gsap.set('.content19', {opacity: 1- progress});
  //       // gsap.set('.content20', {opacity: progress});
  //   }
  // })

  // ScrollTrigger.create({
  //   trigger: '.section20', 
  //   start: `top ${headerH}`,
  //   // end: '100%',
  //   // pin: true,
  //   // markers: true,
  //   // end: calcWindowH(),
  //   // scrub: true,
  //   // anticipatePin: 1,
  //   // onUpdate: ()=>console.log('qw')
  // })

  ScrollTrigger.create({
    trigger:'.content19',
    start: `top ${headerH}`,
    end: calcWindowH(),
    pin: true,
    markers: true,
    end: calcWindowH(),
    scrub: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      const progress = self.progress;
        // 배경전환
        // gsap.set('.content19', {opacity: 1- progress});
        gsap.set('.content20', {opacity: progress});
    }
  })













  // 페이지네이션
  const sections = document.querySelectorAll("#container section");
  const sectionGroups = [
    { name: "black", match: ".section1, .section2" },
    { name: "tech", match: ".section3, .section4, .section5, .section6, .section7" },
    { name: "thor", match: ".section8, .section9, .section10" },
    { name: "column", match: ".section11, .section12, .section13" },
    { name: "lusso", match: ".section14, .section15, .section16" },
    { name: "valle", match: ".section17, .section18, .section19" },
    { name: "product", match: ".section20" },
  ];
  const paginationItems = document.querySelectorAll(".pagination li");

  // 각 섹션에 맞는 카테고리에 페이지네이션 클래스 토글
  sectionGroups.forEach((group, index) => {
    document.querySelectorAll(group.match).forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      });
    });
  });

  function setActive(index) {
      paginationItems.forEach((el, i) => {
          el.classList.toggle("on", i === index);
      });
  }

  // 페이지네이션 클릭시 각 섹션으로 이동하는 이벤트
  paginationItems.forEach(ele => {
    ele.addEventListener('click', function(e){
      e.preventDefault();
      const target = this.querySelector('a').dataset.target;
      const targetEle = document.querySelector('.' + target);

      if (targetEle) {
        // 해당 section의 ScrollTrigger 인스턴스 찾기
        // let scrollToY = 0; // 초기값
  
        // ScrollTrigger 인스턴스 찾기
        const triggers = ScrollTrigger.getAll();
        const st = triggers.find(t => t.trigger === targetEle);
        let scrollToY = st ? st.start : targetEle.offsetTop - headerH;

        // 인터랙션 차단
        disableInteraction();

        // if (st) {
        //   // pin이 시작되는 정확한 위치
        //   scrollToY = st.start;
        // } else {
        //   // fallback: section의 top
        //   scrollToY = targetEle.offsetTop - headerH;
        // }

        // 페이지네이션 활성화 토글
        paginationItems.forEach(ele => ele.classList.remove('on'))
        this.classList.add('on')

        // 스크롤이동
        lenis.scrollTo(scrollToY, { 
          duration: 1, onComplete: ()=> {
            ScrollTrigger.update()

            // 스크롤 후 opacity가 0이 아닌 경우 방지 
            if(st) {
              const className = st.vars.trigger;
              const sectionNumber = className.match(/\d+/)?.[0]; 
              const content = document.querySelectorAll('.content');
              
              content.forEach(el => {
                  if (el.classList.contains(`content${sectionNumber}`)) return;
                  gsap.set(el, { opacity: 0 });
              });
            }
          }
        });

        // 인터랙션 해제 
        enableInteraction();
      } else if (target === 'black') {
        // 인터랙션 차단
        disableInteraction();
        // 스크롤 이동
        lenis.scrollTo(0, { 
          duration: 1,
          // 완료시 인터랙션 해제
          onComplete: ()=>{
            enableInteraction();
          } 
        });

      }
    })
  })


  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.lenis) window.lenis.resize?.();
      ScrollTrigger.refresh();
    }, 200);
  });

})


function disableInteraction() {
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
  window.addEventListener('keydown', preventKeyScroll, { passive: false });
  window.addEventListener('click', preventClick, true); // 캡처단계에서 차단
}

function enableInteraction() {
  window.removeEventListener('wheel', preventDefault, { passive: false });
  window.removeEventListener('touchmove', preventDefault, { passive: false });
  window.removeEventListener('keydown', preventKeyScroll, { passive: false });
  window.removeEventListener('click', preventClick, true);
}

function preventDefault(e) {
  e.preventDefault();
}

function preventKeyScroll(e) {
  const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];
  if (keys.includes(e.key)) {
      e.preventDefault();
  }
}

function preventClick(e) {
  e.stopPropagation();
  e.preventDefault();
}
