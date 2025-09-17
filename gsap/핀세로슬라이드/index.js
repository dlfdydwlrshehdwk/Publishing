document.addEventListener('DOMContentLoaded', function(){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true
  });
  
  // 모든 GSAP 애니메이션과 ScrollTrigger 설정을 포함하는 함수
  function setupAnimations() {
    const slideH = document.querySelector('.slide').getBoundingClientRect().height;
    const windowH = window.innerHeight;
    const gap = (windowH - slideH) / 2

    // 모든 애니메이션의 초기 상태 설정
    // gsap.set()

    // ScrollTrigger.matchMedia()를 사용하여 반응형 애니메이션 설정
    ScrollTrigger.matchMedia({
        
        // --- PC (가로 768px 이상) ---
        "(min-width: 768px)": function() {
          
        },

        // --- Mobile (가로 767px 이하) ---
        "(max-width: 767px)": function() {
          
         },

        // 모든 뷰포트 크기에서 공통으로 실행될 애니메이션
        "all": function() {
          console.log('abc')
          const trigger = document.querySelector('.sec02 .slide_wrapper')
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: 'top ' + gap,
              pin: true,
              scrub: true,
              pinType: 'fixed',
              markers: true
            }
          });
          // timeline
          // .to('', {})
        }
    });
}
setupAnimations();















  let lastWidth = window.innerWidth; //마지막 창 너비를 저장할 변수
  // 짧은 시간 내에 이벤트가 반복해서 발생하는 것을 방지
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  // 디바운싱 처리된 리사이즈 핸들러 (PC 전용)
  const debouncedResize = debounce(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth !== lastWidth) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        setupAnimations();
        ScrollTrigger.refresh();
        lastWidth = currentWidth;
    }
  }, 300);
  window.addEventListener("resize", debouncedResize);
})

