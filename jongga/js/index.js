import { createStickerManager } from './initializeSticker.js';
import { setupDraggableWithCursor } from './draggableWithCursor.js';

document.addEventListener('DOMContentLoaded', () => {
  // 전역 상태 초기화
  window._stickerState = window._stickerState || {};
  window._stickerState.preventNextClick = false;

  // GSAP ScrollSmoother 초기화
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  if (!ScrollTrigger.isTouch) {
    ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 1,
      effects: true
    });
  }

  const section01Sticker = createStickerManager('.section01 .sticker_wrap');
  const customCursor = document.querySelector('.custom_cursor_sticker');
  const mouse = { x: 0, y: 0 };
  const pos = { x: 0, y: 0 };
  const speed = 0.1;
  const mainCenter = document.querySelector('.section01 .main_center');
  const container = document.getElementById('container');
  const body = document.body;
  const header = document.getElementById('header');
  const intro = document.getElementById('intro');
  const introImgSet = document.querySelector('#intro .img_set');
  const introImage = document.querySelector('#intro img');
  const btnTop = document.querySelector('.btn_top');
  const section02 = document.querySelector('.section02')
  let section02TriggerY = section02.offsetTop / 2;
  let isPinned = false;

  btnTop.addEventListener('click',function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  })
  // .main_center 드래그 설정
  setupDraggableWithCursor(mainCenter, mainCenter, customCursor);

  // 리프레시 버튼
  const refreshBtn = document.querySelector('.section01 .btn_refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      section01Sticker.reset();
    });
  }

  gsap.ticker.add(() => {
    const scrollY = ScrollSmoother.get().scrollTop();
  
    if (!isPinned && scrollY >= section02TriggerY) {
      btnTop.classList.add('active');
    } else {
      btnTop.classList.remove('active');
    }
  });

  // 마우스 좌표 추적
  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // 애니메이션 루프
  function animateCursor() {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  // 인트로 애니메이션
  function introAnimation() {
    let currentImageIndex = 1;
    const totalImages = 6;
    introImgSet.classList.remove('dn');

    const changeIntroImage = () => {
      currentImageIndex = currentImageIndex === totalImages ? 1 : currentImageIndex + 1;
      introImage.src = `./image/intro_${currentImageIndex - 1}.png`;
    };

    const introInterval = setInterval(changeIntroImage, 150);

    setTimeout(() => {
      clearInterval(introInterval);
      introImage.src = `./image/intro_0.png`;
      gsap.set(container, { autoAlpha: 0 });

      setTimeout(() => {
        const clipElement = document.querySelector('.section01');

        container.classList.add('on');

        gsap.to(clipElement, {
          duration: 2,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power2.inOut',
          onComplete: () => {
            intro.classList.add('dn');
            header.classList.add('opa1');
            body.classList.remove('oh');
            startSection01();
          }
        });

        gsap.to(container, {
          duration: 2,
          autoAlpha: 1,
          ease: 'power2.inOut'
        });
      }, 1);
    }, 3);
  }

  function startSection01() {
    document.querySelector('.section01 .marquee_wrap')?.classList.add('on');
    const video = document.querySelector('.section01 video');
    video?.play();
    section01Sticker.createRandom?.();
  }

  // 헤더 스크롤 애니메이션
  function headerScrollAnimation() {
    document.addEventListener('wheel', (e) => {
      if (e.deltaY < 0) {
        header.classList.remove('hide');
      } else if (e.deltaY > 0) {
        header.classList.add('hide');
      }
    });
  }

  // 테스트용 초기화 함수 (필요 시 test() 호출)
  function test() {
    container.classList.add('on');
    const clipElement = document.querySelector('.section01');
    gsap.to(clipElement, { duration: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' });
    intro.classList.add('dn');
    header.classList.add('opa1');
    body.classList.remove('oh');
  }

  function centerMainCenter() {
    // section01의 크기와 main_center의 크기 구하기
    const section01Rect = document.querySelector('.section01').getBoundingClientRect();
    const mainCenterRect = mainCenter.getBoundingClientRect();
    
    // section01의 중앙과 main_center의 크기를 고려하여 위치 계산
    const top = (section01Rect.height - mainCenterRect.height) / 2;
    const left = (section01Rect.width - mainCenterRect.width) / 2;

    // main_center 위치 설정
    mainCenter.style.position = 'absolute';
    mainCenter.style.top = `${top}px`;
    mainCenter.style.left = `${left}px`;
  }


  // GSAP 타임라인 생성
const tl1 = gsap.timeline();

// 타임라인에 애니메이션 추가
tl1
.to({}, {duration: .5})
.to('.qwer', {width: '100%',height: '100vh',duration: 1})
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
window.onload = function() {
  ScrollTrigger.create({
    trigger: ".section07",
    start: "bottom bottom",
    end: "4000px",
    pin: true,
    pinSpacing: true,
    scrub: true,
    animation: tl1,
    // markers:true,
    onEnter: () => isPinned = true,
    onEnterBack: () => isPinned = true,
    onLeave: () => isPinned = false,
    onLeaveBack: () => isPinned = false,
  });
};
  // 창 크기 변경 시 다시 중앙 정렬
  window.addEventListener('resize', centerMainCenter);
  
  // 처음 로드 시 중앙 정렬
  centerMainCenter();

  // 초기 실행
  introAnimation();
  headerScrollAnimation();
  centerMainCenter();
  // test(); // 필요 시 주석 해제
});