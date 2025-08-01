$(document).ready(function(){
  $('select').niceSelect();
})
document.addEventListener('DOMContentLoaded', function(){

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  let productTrigger;
  let mainTimeline;
  let swiperInstances = [];
  let paginationSwiper = null;
  let headerH = 0;
  let windowH = 0;
  const labelList = ["black", "tech", "thor", "column", "lusso", "valle", "product"];
  let timelineLength = 50
  let totalDuration = 0;
  let scrollContainerHeight = 0;

  function updateTotalDuration() {
      totalDuration = mainTimeline?.duration?.() || 0;
  }
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

      // 다시 생성
      productTrigger = ScrollTrigger.create({
          id: "product-trigger",
          trigger: ".content15",
          start: `top ${headerH}`,
          end: `+=100%`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          animation: gsap.timeline()
              .to(".content15", { opacity: 1, duration: 0.5 })
              .addLabel("product")
      });
  }

  // swiper 초기화
  function initSwiperIfNeeded() {
      // 768px 이상일 때만 swiper 작동
      const shouldEnable = window.innerWidth >= 768;
  
      // 이미 만들어진 swiper 모두 제거
      swiperInstances.forEach(swiper => swiper.destroy(true, true));
      swiperInstances = [];
  
      if (shouldEnable) {
          const swiperEle = document.querySelectorAll('.content15 .category_list');
          swiperEle.forEach(ele => {
              const swiper = new Swiper(ele, {
                  slidesPerView: 3,
                  spaceBetween: 40,
              });
              swiperInstances.push(swiper);
          });
      }
  }
  

  
  // resize 시 throttle 적용
  window.addEventListener('resize', _.throttle(() => {
    recalcLayoutValues();
    createMainTimeline();
    initSwiperIfNeeded();
    initPaginationSwiper();
    initScrollTriggerForContent15();
    updateTotalDuration(); // duration 값 갱신
    ScrollTrigger.refresh();
  },200));
  

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
  function createMainTimeline() {
    const section3TitleSet = document.querySelectorAll('.content3 .title_set');

    recalcLayoutValues();

    if(mainTimeline) {
      mainTimeline.scrollTrigger?.kill();
      mainTimeline.kill();
    }
    // 초기화
    gsap.set('.content1', {opacity:1});
    gsap.set('.content5', {yPercent: 5})
    gsap.set(['.content5 .item1 .main_image','.content5 .item2 .main_image', '.content5 .itme3 .main_image', '.content5 .item .line', '.content5 .item2 .line', '.content5 .item3 .line'], {y:10});
    gsap.set(['.content7 .title', '.content9 .title', '.content10 .sub_title1', '.content10 .sub_title2', '.content11 .title', '.content13 .title'],{y: 20})
    gsap.set(['.content8 .sub_title', '.content10 .bg3','.content12 .sub_title1','.content12 .sub_title2','.content12 .sub_title3','.content12 .sub_title4', '.content14 .sub_title', '.content14 .bg_wrap2'],{yPercent: 100})
    gsap.set('.content14 .bg_wrap .bg img', {yPercent: -50})
    mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll_container",
        start: `top ${headerH}`,
        end: () => calcWindowH(timelineLength),
        scrub: .7,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      }
    });
    mainTimeline
    .addLabel("black")
    .to({}, { duration: 0.3 })
    // content1 → content2
    .to('.content1', { opacity: 0, duration: 1 })
    .to('.content2', { opacity: 1, duration: 1 })
    .to({}, { duration: 0.5 })
    // content2 → content3
    .to('.content2', { opacity: 0, duration: 1 })
    .to({}, { duration: 0.5 })
    .to('.content3', {opacity: 1, duration: 1})
    .addLabel('tech')
    .to({}, { duration: 0.3 })
    .to('.content3', {
      duration: 3,
      onUpdate: function () {
        const progress = this.progress();
        const activeIndex = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;
        section3TitleSet.forEach((el, i) => {
          el.classList.toggle('on', i === activeIndex);
        });
        // yPercent 애니메이션
        const maxY = -10;
        const yValue = progress * maxY;
        gsap.set('.content3 .bg img', { yPercent: yValue });
      }
    })
    .to({}, { duration: 0.3 })
    // content3 → content4
    .to('.content3', { opacity: 0, duration: 1 })
    .to('.content4', { opacity: 1, duration: 1 })
    .to({}, { duration: 0.5 }) 
    // content4 -> content5
    .to('.content4', {opacity: 0, duration: 1})
    .to('.content5', {opacity:1, yPercent: 0, duration:1},'<')
    .to('.content5 .item1 .main_image', {opacity:1, y:0, duration:.7})
    .to('.content5 .item1 .line', {opacity:1, y:0, duration:.7})
    .to('.content5 .item2 .main_image', {opacity:1, y:0, duration:.7})
    .to('.content5 .item2 .line', {opacity:1, y:0, duration:.7})
    .to('.content5 .item3 .main_image', {opacity:1, y:0, duration:.7})
    .to('.content5 .item3 .line', {opacity:1, y:0, duration:.7})
    .to({}, { duration: 1.5 })
    // content5 -> content6
    .to('.content5', {opacity: 0, duration: 1})
    .to({}, { duration: 1 })
    .to('.content6', {opacity: 1, duration: 1})
    .to({}, { duration: 1 })
    .to('.content6', {opacity: 0, duration: 1})
    .to({}, { duration: 0.5 })
    // content6 -> content7
    .to('.content7', {opacity: 1, duration: 1})
    .to('.content7 .title', {opacity: 1, y:0, duration: 1})
    .addLabel("thor")
    .to({}, { duration: 0.5 })
    .to('.content7', {opacity: 0, duration: 1,})
    .to('.content7 .bg', {scale: 1.2, duration: 1},"<")
    // content7 -> content8
    .to('.content8', {opacity: 1, duration: 1})
    .to('.content8 .title', {opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content8 .bg_wrap', {opacity: 1, duration: 1})
    .to('.content8 .sub_title1', {opacity: 1, yPercent:0, duration: 1})
    .to({}, { duration: 1 })
    .to('.content8 .bg_wrap', {xPercent: -50, duration: 2})
    .to('.content8 .sub_title1', {opacity:0, yPercent: -100, duration: 1},"<+.5")
    .to('.content8 .bg1', {opacity: 0, duration: 1}, "<+.5")
    .to({}, { duration: .5 })
    .to('.content8 .bg2', {opacity:1, duration: 2})
    .to('.content8 .sub_title2', {opacity:1, yPercent:0, duration:1})
    .to({}, { duration: .5 })
    .to('.content8 .bg_wrap2', {xPercent: -100, duration: 7, ease: "power1.out"})
    .to('.content8 .fake_dim', {opacity: 1, duration: 1}, "<")
    .to('.content8 .sub_title2', {opacity: 0, yPercent: -100, duration: 1},'<+.5')
    .to({}, { duration: 1 },"<+1")
    .to('.content8', {opacity: 0, duration: 1},"<+2")
    // .to('.content8 .bg_wrap2', {xPercent: -100, duration: 2},"<")
    .to({}, { duration: 1 })
    // content8 -> content9
    .to('.content9', {opacity: 1, duration: 1})
    .to('.content9 .title', {opacity: 1, y: 0, duration: 1})
    .addLabel("column")
    .to({}, { duration: .5 })
    .to('.content9 .bg', {scale: 1.2, duration: 1})
    .to(".content9", {opacity: 0, duration: 1}, "<")
    .to('.content10', {opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content10 .bg1', {opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content10 .bg2', {opacity: 1, duration: 0})
    .to({}, { duration: 2 })
    .to('.content10 .bg1', {opacity: 0, yPercent: -100, duration: 1})
    .to('.content10 .bg2', {opacity: 0, yPercent: -100, duration: 1},"<")
    .to({}, {duration: 1})
    .to('.content10  .item_wrap', {opacity: 1, duration: 1})
    .to('.content10 .sub_title1', {opacity: 1, y: 0, duration: .5})
    .to({}, { duration: .5 })
    .to('.content10  .item1', {
      left: `${17.291 + (14 - 17.291)}%`,
      top: `${-6.526 + (0 - -6.526)}%`,
      duration: 1
    })
    .to('.content10  .item2', {
      right: `${11.875 - 5}%`,
      bottom: `${-30.273 + 5}%`,
      duration: 1
    }, "<")
    .to('.content10 .item_wrap', {opacity: 0, duration: 1.3}, "<+.7")
    .to('.content10 .sub_title1', {y: -20, opacity: 0, duration: .5},"<")
    .to({}, { duration: .5 })
    .to('.content10 .bg3', {yPercent: 0,  duration: 1})
    .to('.content10 .bg3', {opacity: 1,  duration: 1},"<+.3")
    .to('.content10 .sub_title2', {y: 0, opacity: 1, duration: .5})
    .to({}, { duration: .5 })
    .to('.content10 .bg3 img', {y: -50, duration: .5})
    .to('.content10', {opacity: 0, duration: 1}, "<+.2")
    // content10 -> content11
    .to({}, { 
      duration: 1,
      onStart: function () {
        const video = document.querySelector('.content11 video');
        if (video) {
          video.currentTime = 0; // 영상 초기화
          video.playbackRate = 0.5; // 재생속도 설정
          video.play(); // 영상 실행
        }
      }
    })
    .to('.content11', {opacity: 1, duration: 1})
    .to('.content11 .title', {opacity: 1, y: 0, duration: 1})
    .addLabel("lusso")
    .to({}, { duration: 1 })
    .to('.content11 .bg', {scale: 1.2, opacity: 1, duration: 1})
    .to('.content11', {opacity: 0, duration: 1}, "<")
    .to({}, { duration: 1 })
    // content11 -> content12
    .to('.content12', {opacity: 1, duration: 1})
    .to('.content12 .title', {opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content12 .bg1', {opacity: 1, duration: 1})
    .to('.content12 .sub_title1', {yPercent: 0, opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content12 .bg1', {scale: 1.2, opacity: 0, duration: 1})
    .to({}, { duration: .5 })
    .to('.content12 .bg2', {opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content12 .bg2', {scale: 1.2, opacity: 0, duration: 1})
    .to('.content12 .sub_title1', {yPercent: -100, opacity: 0, duration: 1},"<")
    .to({}, { duration: .5 })
    .to('.content12 .bg3', {opacity: 1, duration: 1})
    .to('.content12 .sub_title2', {yPercent: 0, opacity: 1, duration: 1})
    .to({}, { duration: .5 })
    .to('.content12 .bg4', {opacity: 1, duration: 1})
    .to('.content12 .sub_title2', {yPercent: -100, opacity: 0, duration: 1},"<")
    .to('.content12 .sub_title3', {yPercent: 0, opacity: 1, duration: 1},"<")
    .to({}, { duration: .5 })
    .to('.content12 .bg5', {opacity: 1, duration: 1})
    .to('.content12 .sub_title3', {yPercent: -100, opacity: 0, duration: 1},"<")
    .to('.content12 .sub_title4', {yPercent: 0, opacity: 1, duration: 1},"<")
    .to({}, { duration: .5 })
    .to('.content12', {opacity: 0, duration: 1})
    .to({}, { duration: 1 })
    // content12 -> content13
    .to('.content13', {opacity: 1, duration: 1})
    .to('.content13 .title', {opacity: 1, y: 0, duration: 1})
    .addLabel("valle")
    .to({}, { duration: .5 })
    .to('.content13 .bg', {scale: 1.2, opacity: 0, duration: 1})
    .to('.content13', {opacity: 0, duration: 1}, "<")
    // content13 -> content14
    .to('.content14', {opacity: 1, duration: 1})
    .to('.content14 .title', {opacity: 1, duration: 1}, '<')
    .to({}, { 
      duration: .5,
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
    .to({}, { duration: .5 })
    .to('.content14 .sub_title', {opacity: 1, duration: 1, y: 0})
    .to({}, { duration: .5 })
    .to('.content14 .bg1', {opacity: 0, yPercent: -100, duration: 1})
    .to({}, { duration: 1 })
    .to('.content14 .bg_wrap2', {opacity: 1, yPercent: 0, duration: 1})
    .to({}, { duration: 1 })
    .to('.content14 .bg_wrap2 img', {x:-100, duration: 1})
    .to({}, { duration: .5 })
    .to('.content14 .bg_wrap2', {opacity: 0, yPercent: -100, duration: 1})
    .to('.content14 .sub_title', {opacity: 0, yPercent: -100, duration: 1})
    .to({}, { duration: .5 })
    .to('.content14 .bg3', {opacity: 1, yPercent:0, duration: 1})
    .to({}, { duration: 1 })
    .to('.content14', {opacity: 0, duration: 1})
    .to({}, { duration: .5 })

  }

  // 최초 1회 실행
  createMainTimeline();
  initSwiperIfNeeded();
  updateTotalDuration();
  initScrollTriggerForContent15();
  ScrollTrigger.refresh();

  const paginationItems = document.querySelectorAll(".pagination li");

  paginationItems.forEach((ele, index) => {
      ele.addEventListener('click', function (e) {
          e.preventDefault();
          const label = labelList[index];
          if (label === "product") {
              const st = ScrollTrigger.getById("product-trigger");
              
              if (!st) return;

              const y = st.start + (st.end - st.start) * 1;

              lenis.scrollTo(y, {
                  duration: 1,
                  onComplete: () => ScrollTrigger.update()
              });
              return;
          }
          const labelTime = mainTimeline.labels[label];

          // console.log('label',label)
          // console.log('labelTime',labelTime)
          if (labelTime === undefined) return;

          const progress = labelTime / totalDuration;
          const scrollToY = headerH + scrollContainerHeight * progress;


          lenis.scrollTo(scrollToY, {
              duration: 1,
              onComplete: () => ScrollTrigger.update()
          });
      });
  });



function updatePaginationByLabel() {
    const scrollY = window.scrollY || window.pageYOffset; // 현재 스크롤 위치 (픽셀)

    // 1. content15(product)의 ScrollTrigger 가져오기
    productTrigger = ScrollTrigger.getAll().find(trigger =>
        trigger.trigger?.classList?.contains('content15')
    );

    // 2. 현재 스크롤이 content15 영역에 있으면 pagination의 product 항목을 활성화
    if (productTrigger && scrollY >= productTrigger.start && scrollY < productTrigger.end) {
        setPaginationOn(labelList.indexOf('product')); // 'product'가 labelList의 몇 번째인지 찾아 활성화
        return; // product 처리 후 종료
    }

    // 3. 나머지 영역은 mainTimeline 기준으로 처리
    const scrollStart = mainTimeline.scrollTrigger.start; // timeline 시작 위치
    const scrollEnd = mainTimeline.scrollTrigger.end;     // timeline 끝 위치
    const totalScrollRange = scrollEnd - scrollStart;     // 전체 스크롤 거리

    const currentProgress = (scrollY - scrollStart) / totalScrollRange; // 현재 스크롤의 progress 비율 (0~1)

    // progress가 timeline 범위를 벗어나면 처리하지 않음
    if (currentProgress < 0 || currentProgress > 1) return;

    const currentTime = currentProgress * mainTimeline.duration(); // progress를 기준으로 현재 timeline 시간 계산

    let activeIndex = 0; // 기본 활성 인덱스
    for (let i = 0; i < labelList.length; i++) {
        const currentLabelTime = mainTimeline.labels[labelList[i]];               // 현재 label의 시간
        const nextLabelTime = mainTimeline.labels[labelList[i + 1]] ?? Infinity;  // 다음 label의 시간 (없으면 무한대)

        // 현재 시간(currentTime)이 해당 label 구간 내에 있으면 해당 인덱스를 활성화
        if (currentTime >= currentLabelTime && currentTime < nextLabelTime) {
            activeIndex = i;
            break;
        }
    }

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

// Lenis 스크롤이 일어날 때마다 pagination 업데이트 실행
lenis.on('scroll', updatePaginationByLabel);

})

function mobileToast(){
  const windowW = window.innerWidth;

  if(windowW > 767) return;

  const toastEle = document.querySelector('.toast');

  // 이전 애니메이션 초기화
  gsap.killTweensOf(toastEle);

  // 상태 초기화
  gsap.set(toastEle, {
    opacity: 0,
    y: 0
  })

  // 애니메이션
  gsap.to(toastEle, {
    opacity: 1,
    duration: 0.5,
    onComplete: () => {
      gsap.to(toastEle, {
        y: 10, 
        duration: .8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })
    }
  })

  gsap.to(toastEle, {
    opacity: 0,
    delay: 3,
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

