import {createStickerManager} from './initializeSticker.js';

document.addEventListener('DOMContentLoaded',function(){
  // GSAP ScrollSmoother 초기화
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const section01Sticker = createStickerManager('.section01 .sticker_wrap');

  ScrollSmoother.create({
      wrapper: ".smooth-wrapper", // 스크롤을 감싸는 요소
      content: ".smooth-content", // 스크롤 콘텐츠
      smooth: 1, // 부드러운 스크롤 속도 (값이 클수록 느려짐)
      effects: true // ScrollTrigger와 함께 애니메이션 효과 활성화
  });

  // 인트로
  const container = document.getElementById('container');
  const body = document.body;
  const header = document.getElementById('header');

    // 리프레쉬 버튼
    document.querySelector('.section01 .btn_refresh').addEventListener('click',function(){
      section01Sticker.reset();
    })

  function intro(){
    const intro = document.getElementById('intro');
    const introImgSet = document.querySelector('#intro .img_set');
    const introImage = document.querySelector('#intro img');
    let currentImageIndex = 1;
    const totalImages = 6;
    introImgSet.classList.remove('dn');
  
    function changeIntroImage(){
      // 이미지 반복
      currentImageIndex = currentImageIndex === totalImages ? 1 : currentImageIndex + 1;
      introImage.src = `./image/intro_${currentImageIndex - 1}.png`;
    }
  
    let introInterval = setInterval(changeIntroImage, 150);
  
    setTimeout(() => {
      clearInterval(introInterval);
      introImage.src = `./image/intro_0.png`;
      gsap.set(container,{
        autoAlpha : 0,
      })
      setTimeout(()=>{
        const clipElement = document.querySelector('.section01');
        document.getElementById('container').classList.add('on');
        // 애니메이션 실행
        gsap.to(clipElement, {
          duration: 2,  // 애니메이션 지속 시간
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // 전체 화면으로 확장
          ease: 'power2.inOut',  // 부드러운 이징 효과
          onComplete: function() {
            intro.classList.add('dn');
            header.classList.add('opa1');
            body.classList.remove('oh');
            section01Marquee();
            section01VideoPlay();
            section01Sticker.createRandom();
          }
        });
        gsap.to(container, {
          duration: 2,
          autoAlpha: 1,
          ease:'power2.inOut',
        })
      },1000)
    }, 3000)
  } 
  intro();

  // 테스트할때 켜기
  function test(){
    document.getElementById('container').classList.add('on');
    const clipElement = document.querySelector('.section01');
    gsap.to(clipElement, {
      duration: 0,  // 애니메이션 지속 시간
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // 전체 화면으로 확장
    });
    document.getElementById('intro').classList.add('dn');
    header.classList.add('opa1');
    body.classList.remove('oh');
  } 
  // test();

  // 마우스 휠 방향에 따른 헤더 숨김 처리
  function headerScrollAni(){
    document.addEventListener('wheel',(event)=>{
      if(event.deltaY < 0) { // 위로
        header.classList.remove('hide');
      } else if(event.deltaY > 0) { // 아래로
        header.classList.add('hide');
      }
    });
  } headerScrollAni();

  function section01Marquee(){
    document.querySelector('.section01 .marquee_wrap').classList.add('on');
  }

  function section01VideoPlay(){
    const video = document.querySelector('.section01 video');
    if(video) {
      video.play();
    }
  }
})
