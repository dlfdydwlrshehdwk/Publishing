document.addEventListener('DOMContentLoaded', function(){
  document.body.classList.add('black')
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


  // section1 마스크 애니메이션 처음시점 빠르게
  const section1Mask = document.querySelector('.container_black .content1 .mask');

  section1Mask.addEventListener('animationend', function handler() {
      section1Mask.removeEventListener('animationend', handler);

      // 무한 반복 애니메이션 시작
      section1Mask.style.animation = 'section1_animation 6s ease-in-out infinite';
  });

  let productTrigger;
  let mainTimeline;
  let swiperInstances = [];
  let swiperInstances2 = [];
  let paginationSwiper = null;
  let headerH = 0;
  let windowH = 0;
  const clickLabelList = ["click_black", "click_tech", "click_thor", "click_column", "click_lusso", "click_valle", "click_product"];
  const scrollLabelList =['scroll_black', 'scroll_tech', 'scroll_thor', 'scroll_column', 'scroll_lusso', 'scroll_valle', 'scroll_product'];
  let timelineLength = isMobileBrowser() ? 90 : 60;
  let totalDuration = 0;
  let scrollContainerHeight = 0;
  let isUserNavigating = false; // 모바일 페이지네이션 상태변수
  let scrollCancelTimer = null;

  function updateTotalDuration() {
      totalDuration = mainTimeline?.duration?.() || 0;
  }
  // 헤더높이 윈도우 높이 재계산
  function recalcLayoutValues() {
    headerH = document.querySelector('#header').clientHeight;
    windowH = window.innerHeight - headerH;
    scrollContainerHeight = parseFloat(calcWindowH(timelineLength)); // timelineLength는 상수 or 별도 설정
  }
  // content15 재설정 함수
  function initScrollTriggerForContent15() {
      // 기존 ScrollTrigger 제거
      if (productTrigger) {
          productTrigger.kill();
      }

      const tl = gsap.timeline()

      if(isMobileBrowser()){
        tl.to({},{duration: 1});
      }  else {
        tl.to({},{duration: .5});
      }
      tl.to(".content15", { opacity: 1, duration: 1 })
      .addLabel("scroll_product")
      .addLabel("click_product");

      // 다시 생성
      productTrigger = ScrollTrigger.create({
          id: "product-trigger",
          trigger: ".content15",
          start: `top ${headerH}`,
          end: ()=>calcWindowH(isMobileBrowser() ? 2 : 1.5),
          scrub: .7,
          pin: true,
          // pinType: 'transform',
          pinType: 'fixed',
          pinSpacing: true,
          // markers:true,
          animation: tl
      });
  }

  // swiper 초기화
  function initSwiperIfNeeded() {
      // 768px 이상일 때만 swiper 작동
      const shouldEnable = window.innerWidth >= 768;
  
      // 이미 만들어진 swiper 모두 제거
      swiperInstances.forEach(swiper => swiper.destroy(true, true));
      swiperInstances = [];
      swiperInstances2.forEach(swiper => swiper.destroy(true, true));
      swiperInstances2 = [];
  
      if (shouldEnable) {
          const swiperEle = document.querySelectorAll('.content15 .category_list');
          swiperEle.forEach(ele => {
              const swiper = new Swiper(ele, {
                  slidesPerView: 2,
                  spaceBetween: 12,
                  breakpoints: {
                    1441: {
                      spaceBetween: 40,
                      slidesPerView: 3,
                    }, 
                    980: {
                      spaceBetween: 20,
                      slidesPerView: 3,
                    },
                    768: {
                      spaceBetween: 12,
                      slidesPerView: 2,
                    }
                  }
              });
              swiperInstances.push(swiper);
          });

          const swiperEle2 = document.querySelectorAll('.content15 .category_head .swiper');
          swiperEle2.forEach(ele => {
            const swiper2 = new Swiper(ele, {
              slidesPerView: 'auto',
              breakpoints: {
                1441: {
                  spaceBetween: 40,
                }, 
                980: {
                  spaceBetween: 30,
                },
                768: {
                  spaceBetween: 20,
                }
              }
            })
            swiperInstances2.push(swiper2);
          })
      }
  }

  //모바일 브라우저 감지
  function isMobileBrowser() {
    // User Agent 체크 (가장 확실한 방법)
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone', 'mobile'];
    const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));
    
    // 터치 지원 여부
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // 화면 크기
    const isSmallScreen = window.innerWidth <= 768;
    
    // 모바일 기기인지 확인
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return isMobileUA || isMobileDevice || (hasTouch && isSmallScreen);
  }

  // resize 시 throttle 적용
  window.addEventListener('resize', _.throttle(() => {

    if(isMobileBrowser()) return;

    recalcLayoutValues();
    createMainTimeline();
    initSwiperIfNeeded();
    initPaginationSwiper();
    initScrollTriggerForContent15();
    updateTotalDuration(); // duration 값 갱신
    mobileToast();
    initPaginationTrigger();
    ScrollTrigger.refresh();
  },200));

  // 1. Lenis 인스턴스 생성
  const lenis = new Lenis({
      smooth: !isMobileBrowser(),
      smoothTouch: !isMobileBrowser(),     // 모바일도 적용여부
      lerp: isMobileBrowser() ? 0.05 : 0.1,             // 부드러움 정도 (0.0 ~ 1.0)
      wheelMultiplier: isMobileBrowser() ? 0.7 : 1.0,  // 마우스 휠 속도
      touchMultiplier: isMobileBrowser() ? 0.4 : 1.0,  // 터치 스크롤 속도
  });

  // 2. Lenis의 스크롤 이벤트와 ScrollTrigger 연동
  lenis.on('scroll', () => {
      ScrollTrigger.update();
      // Lenis 스크롤이 일어날 때마다 pagination 업데이트 실행
      updatePaginationByLabel();
      // Lenis 스크롤이 일어날 때마다 프로그레스바 업데이트 실행(mo전용)
      // updateScrollProgressBar();
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

  // 페이지네이션 스와이퍼 
  function initPaginationSwiper() {
    const isMobile = window.innerWidth <= 767;
    const swiperContainer = document.querySelector('.pagination.swiper');

    if (!swiperContainer) return;

    if (isMobile) {
        if (paginationSwiper) {
            paginationSwiper.destroy(true, true);
        }

        paginationSwiper = new Swiper(swiperContainer, {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
            freeMode: true,
        });
    } else {
        if (paginationSwiper) {
            paginationSwiper.destroy(true, true);
            paginationSwiper = null;
        }
    }
  } initPaginationSwiper();

  function calcWindowH (num = 1){
    return (num * windowH).toString();
  }

  // 메인 인터랙션 타임라인
  function createMainTimeline() {
    const section3TitleSet = document.querySelectorAll('.content3 .title_set');
    const windowW = window.innerWidth;
    
    recalcLayoutValues();

    if(mainTimeline) {
      mainTimeline.scrollTrigger?.kill();
      mainTimeline.kill();
    }

    // 초기화 공통
    gsap.set('.content1', {opacity:1});
    gsap.set('.content5 .bg', {yPercent: 5})
    gsap.set(['.content7 .title', '.content9 .title', '.content10 .sub_title1', '.content10 .sub_title2', '.content11 .title', '.content13 .title'],{y: 20})
    gsap.set(['.content8 .sub_title','.content12 .sub_title1','.content12 .sub_title2','.content12 .sub_title3','.content12 .sub_title4', '.content14 .sub_title'],{yPercent: 100})
    gsap.set('.content14 .bg_wrap .bg img', {yPercent: -50})
    // 반응형 초기화
    if(windowW > 767 ) { // pc
      gsap.set(['.content5 .item1 .main_image','.content5 .item2 .main_image', '.content5 .itme3 .main_image', '.content5 .item .line', '.content5 .item2 .line', '.content5 .item3 .line'], {y:10});
    } else { // mo
      gsap.set('.content5 .item_wrap .inner', {xPercent: 0})
      gsap.set('.content5 .item_title > div', {y: 10})
    }
    mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll_container",
        start: `top ${headerH}`,
        end: () => calcWindowH(timelineLength),
        scrub: .7,
        pin: true,
        anticipatePin: 1,
      }
    });
    mainTimeline
    .addLabel("scroll_black")
    .addLabel("click_black")
    .to({}, { duration: 0.3 })
    // content1 → content2
    .to('.content1', { opacity: 0, duration: 1 })
    .to('.content2', { opacity: 1, duration: 1 })
    .to({}, { duration: 1 })
    // content2 → content3
    .to('.content2', { opacity: 0, duration: 1 })
    .to({}, { duration: 1 })
    .addLabel('scroll_tech')
    .to('.content3', {opacity: 1, duration: 1})
    .to({}, { duration: 0.5 })
    .addLabel('click_tech')
    .to('.content3', {
      duration: 4.5,
      onUpdate: function () {
        const progress = this.progress();
        const activeIndex = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;
        section3TitleSet.forEach((el, i) => {
          el.classList.toggle('on', i === activeIndex);
        });
        // yPercent 애니메이션
        const maxY = -16;
        const yValue = progress * maxY;
        gsap.set('.content3 .bg img', { yPercent: yValue });
      }
    })
    .to({}, { duration: 0.5 })
    // content3 → content4
    .to('.content3', { opacity: 0, duration: 1 })
    .to('.content4', { opacity: 1, duration: 1 })
    .to({}, { duration: 1 }) 
    // content4 -> content5
    .to('.content4', {opacity: 0, duration: 1})
    .to({}, { duration: 1 }) 
    .to('.content5', {opacity:1, duration:1},'<')
    .to('.content5 .bg', {yPercent: 0, duration:1},'<');
    if(windowW > 767) {
      mainTimeline
      .to('.content5 .item1 .main_image', {opacity:1, y:0, duration:.7})
      .to('.content5 .item1 .line', {opacity:1, y:0, duration:.7})
      .to('.content5 .item2 .main_image', {opacity:1, y:0, duration:.7})
      .to('.content5 .item2 .line', {opacity:1, y:0, duration:.7})
      .to('.content5 .item3 .main_image', {opacity:1, y:0, duration:.7})
      .to('.content5 .item3 .line', {opacity:1, y:0, duration:.7})
      .to({}, { duration: 1.5 })
      // content5 -> content6
      .to('.content5', {opacity: 0, duration: 1});
    } else {
      mainTimeline
      .to({}, { duration: 1 })
      .to('.content5 .item1 .main_image', {opacity:1, y:0, duration: 1})
      .to('.content5 .item2 .main_image', {opacity:1, y:0, duration:0},"<")
      .to('.content5 .item3 .main_image', {opacity:1, y:0, duration:0},"<")
      .to('.content5 .item_title1', {opacity: 1, y: 0, duration:1},"<")
      .to({}, { duration: 1.5 })
      .to('.content5 .item_wrap .inner', {
        xPercent: -100,
        yPercent: -40,
        duration: 8,
        onUpdate: function(){
          const progress = this.progress();
          const items = document.querySelectorAll('.content5 .item');

          items.forEach(function(item, index) {
            const total = items.length;
            const sectionStart = index / total;
            const sectionEnd = (index + 1) / total;

            let itemProgress = (progress - sectionStart) / (sectionEnd - sectionStart);
            itemProgress = Math.min(Math.max(itemProgress, 0), 1); // clamp 0~1

            // 사선으로 부드럽게 올라가고 되돌아옴
            const y = -60 * itemProgress;
            const x = 0;

            item.style.transform = `translate(${x}px, ${y}px)`;
          });
        }
      })

      .to('.content5 .item_title1', {opacity: 0, y: -20, duration: .5}, "<")
      .to('.content5 .item_title2', {opacity: 1, y: 0, duration: .5}, "<+1")
      .to('.content5 .item_title2', {opacity: 0, y: -20, duration: .5}, "<+1")
      .to('.content5 .item_title3', {opacity: 1, y: 0, duration: .5}, "<+1")
      .to('.content5 .item_title3', {opacity: 0, y: -20, duration: .5}, "<+1")
      // content5 -> content6
      .to('.content5', {opacity: 0, duration: 1},"<")
    }
    mainTimeline
    .to({}, { duration: 1 })
    .to('.content6', {opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content6', {opacity: 0, duration: 1})
    .to({}, { duration: 0.5 })
    // content6 -> content7
    .addLabel('scroll_thor')
    .to('.content7', {opacity: 1, duration: 1})
    .to('.content7 .title', {opacity: 1, y:0, duration: 1})
    .addLabel("click_thor")
    .to({}, { duration: 1 })
    .to('.content7', {opacity: 0, duration: 1,})
    .to('.content7 .bg', {scale: 1.2, duration: 1},"<")
    // content7 -> content8
    .to('.content8', {opacity: 1, duration: 1})
    .to('.content8 .title', {opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content8 .bg1', {opacity: 1, duration: 1})
    .to('.content8 .sub_title1', {opacity: 1, yPercent:0, duration: 1})
    .to({}, { duration: 1 })
    .to('.content8 .sub_title1', {opacity:0, yPercent: -100, duration: 1})
    .to('.content8 .bg1', {opacity: 0, duration: 1}, "<")
    .to({}, { duration: 1 });
    if(windowW > 767) {
      mainTimeline
      // .to('.content8 .bg_wrap2', {xPercent: -100, duration: 8, ease: "power1.out"})
      .to(['.content8 .item1','.content8 .item2'], {x: '-135vw', duration: 8, ease: "power1.out"})
      .to(['.content8 .item3','.content8 .item4'], {x: '-35vw', duration: 8, ease: "power1.out"},"<")
      .to('.content8 .bg2', {opacity:1, duration: 2},'<')
      .to('.content8 .item.pc', {opacity:1, duration: 2},'<')
      .to('.content8 .sub_title2', {opacity:1, yPercent:0, duration:1},"<")
      .to('.content8 .fake_dim', {opacity: 1, duration: 1}, "<+2")
      .to('.content8 .sub_title2', {opacity: 0, yPercent: -100, duration: 1},'<+.5')
      .to('.content8', {opacity: 0, duration: 2},"<+3")
      .to({}, { duration: 1 });
    } else {
      mainTimeline
      // bg등장
      .to('.content8 .bg_wrap2', {yPercent: -70, duration: 8})
      .to('.content8 .bg2', {opacity:1, duration: 2},'<')
      .to('.content8 .sub_title2', {opacity:1, yPercent:0, duration:1},"<+.5")
      .to('.content8 .sub_title2', {opacity: 0, yPercent: -100, duration: 1},'<+2')
      // .to('.content8 .fake_dim', {opacity: 1, duration: 1}, "<+1")
      .to('.content8', {opacity: 0, duration: 2},"<+2");
    }



    mainTimeline
    // content8 -> content9
    .addLabel('scroll_column')
    .to('.content9', {opacity: 1, duration: 1})
    .to('.content9 .title', {opacity: 1, y: 0, duration: 1})
    .addLabel("click_column")
    .to({}, { duration: 1 })
    .to('.content9 .bg', {scale: 1.2, duration: 1})
    // content9 -> content10
    .to(".content9", {opacity: 0, duration: 1}, "<")
        .to({}, { duration: 1 })
    .to('.content10', {opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content10 .bg1', {opacity: 1, duration: 1})
    .to({}, { duration: 2 })
    .to('.content10 .bg2', {opacity: 1, duration: 0})
    .to({}, { duration: 2 })
    // .to('.content10 .bg1', {opacity: 0, yPercent: -100, duration: 2, ease: "power1.out"})
    // .to('.content10 .bg2', {opacity: 0, yPercent: -100, duration: 2, ease: "power1.out"},"<")
    .to('.content10 .bg1', {opacity: 0, duration: 2, ease: "power1.out"})
    .to('.content10 .bg2', {opacity: 0, duration: 2, ease: "power1.out"},"<")
    .to({}, {duration: 2})
    if(windowW > 767) {
      gsap.set('.content10 .item_wrap',{yPercent: 0})
      mainTimeline
      .to('.content10  .item_wrap', {opacity: 1, duration: 1})
      .to('.content10 .sub_title1', {opacity: 1, y: 0, duration: 1})
      .to({}, { duration: 2 })
      .to('.content10  .item1', {
        xPercent: -6,
        yPercent: 7,
        duration: 1
      })
      .to('.content10  .item2', {
        xPercent: 6,
        yPercent: -7,
        duration: 1
      }, "<")
      .to('.content10 .sub_title1', {y: -20, opacity: 0, duration: 1},"<+.5")
      .to('.content10 .item_wrap', {opacity: 0, duration: 2},"<");
    } 
    else {
      gsap.set('.content10 .item_wrap',{yPercent: 30})
      mainTimeline
      .to('.content10 .sub_title1', {opacity: 1, y: 0, duration: 1})
      .to('.content10  .item_wrap', {opacity: 1, duration: 1},"<")
      // .to({}, { duration: 2 })
      .to('.content10  .item_wrap', {yPercent: -40, duration: 3},"<")
      // .to('.content10  .item2', {
      //   xPercent: 6,
      //   yPercent: -4,
      //   duration: 1
      // }, "<");
      .to('.content10 .item_wrap', {opacity: 0, duration: 1},"<+2")
      .to('.content10 .sub_title1', {y: -20, opacity: 0, duration: 1},"<")
    }
    mainTimeline
    // .to('.content10 .sub_title1', {y: -20, opacity: 0, duration: 1},"<+.5")
    // .to('.content10 .item_wrap', {opacity: 0, duration: 2},"<")
    .to({}, { duration: 1 })
    .to('.content10 .bg3', {opacity: 1,  duration: 1})
    .to('.content10 .sub_title2', {y: 0, opacity: 1, duration: 1})
    .to({}, { duration: 1.5 })
    .to('.content10 .bg3 img', {y: -50, duration: 2})
    .to('.content10', {opacity: 0, duration: 2}, "<+.7")
    .addLabel('scroll_lusso')
    // content10 -> content11
    .to({}, { 
      duration: 1,
      onStart: function () {
        const video = document.querySelector('.content11 video');
        if (video) {
          video.currentTime = 0; // 영상 초기화
          video.playbackRate = 1; // 재생속도 설정 0~1
          video.play(); // 영상 실행
        }
      }
    })
    .to('.content11', {opacity: 1, duration: 1})
    .to('.content11 .title', {opacity: 1, y: 0, duration: 1})
    .addLabel("click_lusso")
    .to({}, { duration: 1.5 })
    .to('.content11 .bg', {scale: 1.2, opacity: 1, duration: 1})
    .to('.content11', {opacity: 0, duration: 1}, "<.5")
    .to({}, { duration: 1 })
    // content11 -> content12
    .to('.content12', {opacity: 1, duration: 1})
    .to('.content12 .title', {opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content12 .bg1', {opacity: 1, duration: 1})
    .to('.content12 .sub_title1', {yPercent: 0, opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content12 .bg1', {scale: 1.2, opacity: 0, duration: 1})
    .to({}, { duration: 1 })
    .to('.content12 .bg2', {opacity: 1, duration: 1})
    .to({}, { duration: 1.5 })
    .to('.content12 .bg2', {scale: 1.2, opacity: 0, duration: 1})
    .to('.content12 .sub_title1', {yPercent: -100, opacity: 0, duration: 1},"<")
    .to({}, { duration: 1 })
    .to('.content12 .bg3', {opacity: 1, duration: 1})
    .to('.content12 .sub_title2', {yPercent: 0, opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content12 .bg4', {opacity: 1, duration: 1})
    .to('.content12 .sub_title2', {yPercent: -100, opacity: 0, duration: 1},"<")
    .to('.content12 .sub_title3', {yPercent: 0, opacity: 1, duration: 1},"<")
    .to({}, { duration: 1 })
    .to('.content12 .bg5', {opacity: 1, duration: 1})
    .to('.content12 .sub_title3', {yPercent: -100, opacity: 0, duration: 1},"<")
    .to('.content12 .sub_title4', {yPercent: 0, opacity: 1, duration: 1},"<")
    .to({}, { duration: 1 })
    .to('.content12', {opacity: 0, duration: 1})
    .to({}, { duration: 1 })
    // content12 -> content13
    .addLabel("scroll_valle")
    .to('.content13', {opacity: 1, duration: 1})
    .to('.content13 .title', {opacity: 1, y: 0, duration: 1})
    .addLabel("click_valle")
    .to({}, { duration: 1.5 })
    // .to('.content13 .bg', {scale: 1.2, opacity: 0, duration: 1})
    .to('.content13 .bg', {opacity: 0, duration: 2})
    .to('.content13 .bg', {yPercent: -100, duration: 2},"<+.2")
    .to('.content13', {opacity: 0, duration: 1}, "<+.5")
    .to({}, { duration: 1 })
    // content13 -> content14
    .to('.content14', {opacity: 1, duration: 1})
    .to('.content14 .title', {opacity: 1, duration: 1}, '<')
    .to({}, { 
      duration: 1,
      onStart: function () {
        const video = document.querySelector('.content14 video');
        if (video) {
          video.currentTime = 0; // 영상 초기화
          video.playbackRate = 1; // 재생속도 설정
          video.play(); // 영상 실행
        }
      }
    })
    .to('.content14 .bg1', {opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content14 .sub_title', {opacity: 1, duration: 1, yPercent: 0})
    .to({}, { duration: 1 })
    .to('.content14 .bg1', {opacity: 0, duration: 2, ease: "power2.out"})
    .to({}, { duration: 1 })
    .to('.content14 .bg_wrap2', {opacity: 1, duration: 2, ease: "power2.out"})
    .to({}, { duration: 1 })
    // if(windowW > 767) {
    //   mainTimeline
    //   .to('.content14 .bg_wrap2 img', {x:-100, duration: 1});
    // } else {
    //   mainTimeline
    //   .to('.content14 .bg_wrap2 img', {x:-20, duration: 1});
    // }
    // mainTimeline
    .to({}, { duration: 1 })
    .to('.content14 .bg_wrap2', {opacity: 0, duration: 2, ease: "power2.out"})
    .to('.content14 .sub_title', {opacity: 0, yPercent: -100, duration: 2, ease: "power2.out"}, "<")
    .to({}, { duration: 1 })
    .to('.content14 .bg3', {opacity: 1, yPercent:0, duration: 2})
    .to({}, { duration: 1 })
    .to('.content14', {opacity: 0, duration: 1})
    .to({}, { duration: .5 })
  }

  // 최초 1회 실행
  createMainTimeline();
  initSwiperIfNeeded();
  updateTotalDuration();
  initScrollTriggerForContent15();
  mobileToast();
  initPaginationTrigger();
  ScrollTrigger.refresh();

  // 페이지네이션 클릭 이동
  const paginationItems = document.querySelectorAll(".pagination li");
  paginationItems.forEach((ele, index) => {
      ele.addEventListener('click', function (e) {
          e.preventDefault();

          isUserNavigating = true;
          
          setPaginationOn(index);
            
          const label = clickLabelList[index];
          if (label === "click_product") {
              const st = ScrollTrigger.getById("product-trigger");
              
              if (!st) return;

              const y = st.start + (st.end - st.start) * 1;

              scrollWithFallback(y);
          } else {
            const labelTime = mainTimeline.labels[label];
  
            if (labelTime === undefined) return;
  
            const progress = labelTime / totalDuration;
            const scrollToY = headerH + scrollContainerHeight * progress;

            scrollWithFallback(scrollToY);
          }
      });
  });

  // 스크롤 위치에 따른 페이지네이션 
  function updatePaginationByLabel() {
    // console.log(isUserNavigating)
      if(isUserNavigating) return;
      const scrollY = window.scrollY || window.pageYOffset; // 현재 스크롤 위치 (픽셀)

      // 1. content15(product)의 ScrollTrigger 가져오기
      productTrigger = ScrollTrigger.getAll().find(trigger =>
          trigger.trigger?.classList?.contains('content15')
      );

      // 2. 현재 스크롤이 content15 영역에 있으면 pagination의 product 항목을 활성화
      if (productTrigger && scrollY >= productTrigger.start && scrollY < productTrigger.end) {
          setPaginationOn(scrollLabelList.indexOf('scroll_product')); // 'product'가 labelList의 몇 번째인지 찾아 활성화
          return; // product 처리 후 종료
      }

      // 3. 나머지 영역은 mainTimeline 기준으로 처리
      const scrollStart = mainTimeline.scrollTrigger.start; // timeline 시작 위치
      const scrollEnd = mainTimeline.scrollTrigger.end;     // timeline 끝 위치
      const totalScrollRange = scrollEnd - scrollStart;     // 전체 스크롤 거리

      const currentProgress = (scrollY - scrollStart) / totalScrollRange; // 현재 스크롤의 progress 비율 (0~1)

      // console.log('progress:', currentProgress);
      // progress가 timeline 범위를 벗어나면 처리하지 않음
      if (currentProgress < 0 || currentProgress > 1) return;

      const currentTime = currentProgress * mainTimeline.duration(); // progress를 기준으로 현재 timeline 시간 계산

      let activeIndex = 0; // 기본 활성 인덱스
      for (let i = 0; i < scrollLabelList.length; i++) {
          const currentLabelTime = mainTimeline.labels[scrollLabelList[i]];               // 현재 label의 시간
          const nextLabelTime = mainTimeline.labels[scrollLabelList[i + 1]] ?? Infinity;  // 다음 label의 시간 (없으면 무한대)

          // 현재 시간(currentTime)이 해당 label 구간 내에 있으면 해당 인덱스를 활성화
          if (currentTime >= currentLabelTime && currentTime < nextLabelTime) {
              activeIndex = i;
              break;
          }
      }

      // console.log(activeIndex)
      setPaginationOn(activeIndex); // 해당 인덱스의 pagination li에 .on 클래스 추가
  }

  // 전달받은 인덱스에 해당하는 pagination li에만 .on 클래스 추가
  function setPaginationOn(index) {
      paginationItems.forEach((el, i) => {
          el.classList.toggle('on', i === index);
          if(paginationSwiper) {
            paginationSwiper.slideTo(index);
          }
      });
  }

  // content15 서브카테고리 pc 탭
  const content15ContentBox = document.querySelectorAll('.content15 .content_box');
  content15ContentBox.forEach(ele => {
    const subCategory = ele.querySelectorAll('.sub_category a');

    subCategory.forEach((aEle, index) => {
      const categoryList = aEle.closest('.category_wrap').querySelectorAll('.category_list');
      aEle.addEventListener('click', function(e){
        e.preventDefault();
        categoryList.forEach(list => {
          list.classList.remove('show');
        })
        subCategory.forEach(aEle2 => {
          aEle2.closest('li').classList.remove('active');
        })
        categoryList[index].classList.add('show');
        aEle.closest('li').classList.add('active')
      })
    })
  })

  // content15 메인카테고리 모바일 탭 20250807
  const moMainCategory = document.querySelectorAll('.content15 .mo_main_category li');
  const moSubCategory = document.querySelector('.content15 .mo_sub_category');
  const moSubCategoryList = document.querySelectorAll('.content15 .mo_sub_category li');
  moMainCategory.forEach((li,index) => {
    li.addEventListener('click', function(){
      moMainCategory.forEach(li => li.classList.remove('on'));
      li.classList.add('on');

      const moSubCategoryUl = moSubCategory.querySelectorAll('ul');
      moSubCategoryUl.forEach(ul => ul.classList.remove('active'));
      moSubCategoryUl[index].classList.add('active')

      const contentBox = document.querySelectorAll('.content15 .content_box');
      contentBox.forEach(box => {
          box.classList.remove('active');
      })
      contentBox[index].classList.add('active');
      const activeTab = document.querySelector('.content15 .mo_main_category li.on');
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest'
        });
      }
    })
  })
  // content15 서브카테고리 모바일 탭 20250807
  moSubCategory.querySelectorAll('ul').forEach((ul,index) => {
    const subCategory = ul.querySelectorAll('li');
    subCategory.forEach((li,index2) => {
      li.addEventListener('click', function(){
        subCategory.forEach(li => li.classList.remove('on'));
        li.classList.add('on');
        content15ContentBox[index].querySelectorAll('.sub_category a')[index2].click();

        const activeTab = document.querySelector('.content15 .mo_sub_category li.on');
        if (activeTab) {
          activeTab.scrollIntoView({
            behavior: 'smooth', 
            inline: 'start',
            block: 'nearest'
          });
        }
      })
    })
  })

  // pc전용 페이지네이션 숨기기
  function initPaginationTrigger() {
    const pagination = document.querySelector('.container_black .pagination');
    const footer = document.querySelector('#footer');
    ScrollTrigger.getById('fixed-box-trigger')?.kill();
      
    if(!pagination) return;
        if (window.innerWidth < 768) {
      pagination.classList.remove('disabled');
      return;
        }
  
        if (!footer) return;
  
        ScrollTrigger.create({
            id: 'fixed-box-trigger',
            trigger: footer,
            start: 'top bottom',
            end: 'top center', 
            scrub: true,
            onUpdate: (self) => {
                if (self.progress > 0) {
                    pagination.classList.add('disabled');
                } else {
                    pagination.classList.remove('disabled');
                }
            }
        });
    }

  // 스크롤에 따른 프로그레스바 mo전용
  function updateScrollProgressBar() {
    const bar = document.querySelector('.pagination .progress .bar');
    if (!bar) return;
  
    const scrollStart = mainTimeline.scrollTrigger.start;
    const scrollEnd = mainTimeline.scrollTrigger.end;
    const totalScroll = scrollEnd - scrollStart;
    const scrollY = window.scrollY || window.pageYOffset;
  
    let percent = 0;
  
    if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        percent = ((scrollY - scrollStart) / totalScroll) * 100;
    } else if (scrollY > scrollEnd) {
        percent = 100;
    } else {
        percent = 0;
    }
  
    bar.style.width = `${percent}%`;
  }

  // 스크롤 도중 유저 개입 대비 (페이지네이션 클릭시 1초동안 updatePaginationByLabel의 기능을 막음)
  function scrollWithFallback(y, duration = 1) {
    isUserNavigating = true;

    // 기존 타이머 클리어
    clearTimeout(scrollCancelTimer);

    // fallback 타이머 설정 (스크롤 도중 강제 해제)
    scrollCancelTimer = setTimeout(() => {
        isUserNavigating = false;
        ScrollTrigger.update();
    }, (duration) * 1000); 

    lenis.scrollTo(y, {
        duration: duration,
        onComplete: () => {
            // 정상적으로 완료되면 타이머 클리어
            clearTimeout(scrollCancelTimer);
            isUserNavigating = false;
            ScrollTrigger.update();
        }
    });
  }


  
})

// 모바일 토스트
function mobileToast(){
  const windowW = window.innerWidth;

  if(windowW > 767) return;
  
  const toastEle = document.querySelector('.toast');

  // 이전 애니메이션 초기화
  gsap.killTweensOf(toastEle);

  // 상태 초기화
  gsap.set(toastEle, {xPercent: -50, y: 20, opacity: 0 })

  // 애니메이션
  gsap.fromTo(toastEle,{
    xPercent: -50, y: 20, opacity: 0
    }, {
      opacity: 1,
      y: 0,
      opacity: 1,
      duration: .5,
      ease: 'none',
      onComplete: () => {
        gsap.to(toastEle, {
          y: 5, 
          duration: .8,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })
      }
    })

  gsap.to(toastEle, {
    opacity: 0,
    delay: 2.5,
    duration: .5,
    onComplete: () => {
      gsap.killTweensOf(toastEle);
      gsap.set(toastEle, {y: 0});
    }
  })
}

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

