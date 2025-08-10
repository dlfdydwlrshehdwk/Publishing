gsap.registerPlugin(ScrollTrigger);

// --- Debounce Function ---
// 짧은 시간 내에 이벤트가 반복해서 발생하는 것을 방지
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// --- Animation Setup Function ---
// 모든 GSAP 애니메이션과 ScrollTrigger 설정을 포함하는 함수
function setupAnimations() {
    
    // 모든 애니메이션의 초기 상태 설정
    gsap.set([
        ".section2 .pc .left",
        ".section2 .pc .right > .flex",
        ".section2 .pc .right .text_set",
        '.section3 .top .logo',
        '.section3 .top .title',
        '.section3 .top .desc',
        '.section3 .swiper',
        '.section4 .pc .item',
        '.section4 .pc .item2',
        '.section4 .pc .item3',
        '.section4 .pc .item4',
        '.section4 .pc .right',
        '.section5 .text_set .title',
        '.section5 .text_set .desc',
        '.section5 .inner .right',
        '.section5 .top .bottom',
        '.section6 .text_set .title',
        '.section6 .text_set .desc',
        '.section6 .img_cont .img_set.side',
        '.section7 .pc .item1 img',
        '.section7 .pc .item2 img',
        '.section7 .pc .item3',
        '.section7 .pc .item4 img',
        '.section7 .pc .item5',
        '.section8 .img_wrap .img_set',
        '.section8 .text_set2 .title',
        '.section2 .mo .text_set',
        ".section2 .mo .item1",
        ".section2 .mo .item2",
        ".section2 .mo .item3",
        ".section4 .mo .cont_header",
        '.section8 .text_set1 .title',
    ], {
        opacity: 0,
        y: 50
    });

    // ScrollTrigger.matchMedia()를 사용하여 반응형 애니메이션 설정
    ScrollTrigger.matchMedia({
        
        // --- PC (가로 768px 이상) ---
        "(min-width: 768px)": function() {
            gsap.set([        
                '.section6 .img_cont',
            ],{
                opacity: 0,
                y: 50
            })
            gsap.set([
                ".section5 .card"
            ], {y: 0, yPercent: 0})
            // section2
            gsap.to(".section2 .pc .left", { scrollTrigger: { trigger: ".section2", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section2 .pc .right > .flex", { scrollTrigger: { trigger: ".section2", start: "top 50%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section2 .pc .right .text_set", { scrollTrigger: { trigger: ".section2", start: "top 3%" }, opacity: 1, y: 0, duration: 1 });

            // section3
            gsap.to(".section3 .top .logo", { scrollTrigger: { trigger: ".section3", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section3 .top .title", { scrollTrigger: { trigger: ".section3", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section3 .top .desc", { scrollTrigger: { trigger: ".section3", start: "top 50%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section3 .swiper", { 
                scrollTrigger: { 
                    trigger: ".section3", 
                    start: "top 30%",
                    onEnter: () => section03Swiper.autoplay.start(),
                }, 
                opacity: 1, 
                y: 0, 
                duration: 1 
            });

            // section4
            gsap.to(".section4 .pc .item1", { scrollTrigger: { trigger: ".section4", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section4 .pc .item2", { scrollTrigger: { trigger: ".section4", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section4 .pc .right", { scrollTrigger: { trigger: ".section4", start: "top 50%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section4 .pc .item3", { scrollTrigger: { trigger: ".section4", start: "top 30%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section4 .pc .item4", { scrollTrigger: { trigger: ".section4", start: "top 30%" }, opacity: 1, y: 0, duration: 1 });

            // section05
            const card = document.querySelector('.section5 .card');
            const cardH = card.clientHeight;
            const cardWrap2Mt = window.getComputedStyle(document.querySelector('.section5 .card_wrap2')).marginTop;
            const cardWrapGap = window.getComputedStyle(document.querySelector('.section5 .card_wrap2')).gap;
            const numCardWrap2Mt = Number(cardWrap2Mt.replace(/[^\d.]/g, ''));
            const numCardWrapGap = Number(cardWrapGap.replace(/[^\d.]/g, ''));
            gsap.to('.section5 .text_set .title', { scrollTrigger: { trigger: ".section5", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section5 .text_set .desc', { scrollTrigger: { trigger: ".section5", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section5  .right', { scrollTrigger: { trigger: ".section5", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section5 .bottom', { scrollTrigger: { trigger: ".section5", start: "top 30%" }, opacity: 1, y: 0, duration: 1 });

            const section05Tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section5 .cont_wrap .card_wrap2',
                    start: 'top 70%',
                    onEnter: () => section05Tl2.play(),
                    onLeaveBack: () => section05Tl2.reverse(),
                }
            });
            section05Tl2
                .to('.section5 .card.primary', { left: 0, x: 0,  duration: .5, ease: "power1.inOut" })
                .to('.section5 .card.sub', { left: 0, x: cardH + numCardWrapGap, xPercent: 0,  duration: .5, ease: "power1.inOut" }, '<')
                .to('.section5 .card.yellow', { left: 0, x: (cardH * 2) + (numCardWrapGap * 2), xPercent: 0,  duration: .5, ease: "power1.inOut" }, '<')
                .to('.section5 .card.light_gray', { left: 0, x: (cardH * 3) + (numCardWrapGap * 3), xPercent: 0,  duration: .5, ease: "power1.inOut" }, '<')
                .to('.section5 .card.black', { left: 0, x: (cardH * 4) + (numCardWrapGap * 4), xPercent: 0,  duration: .5, ease: "power1.inOut" }, '<');
            // section06
            gsap.to('.section6 .text_set .title', { scrollTrigger: { trigger: ".section6", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section6 .text_set .desc', { scrollTrigger: { trigger: ".section6", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section6 .img_cont', { scrollTrigger: { trigger: ".section6 .img_cont", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section6 .img_cont .img_set.side', { scrollTrigger: { trigger: ".section6 .img_cont .img_set.side", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });

            // section07
            gsap.to('.section7 .pc .item1 img', { scrollTrigger: { trigger: ".section7 .pc .item1", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item2 img', { scrollTrigger: { trigger: ".section7 .pc .item2", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item3', { scrollTrigger: { trigger: ".section7", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item4 img', { scrollTrigger: { trigger: ".section7 .pc .item4", start: "top 40%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item5', { scrollTrigger: { trigger: ".section7", start: "top top" }, opacity: 1, y: 0, duration: 1 });

            // section08
            gsap.to('.section8 .img_wrap1 .img_set', { scrollTrigger: { trigger: ".section8 .img_wrap1", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section8 .img_wrap2 .img_set', { scrollTrigger: { trigger: ".section8 .img_wrap2", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section8 .text_set2 .title', { scrollTrigger: { trigger: ".section8 .text_set2", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
        },

        // --- Mobile (가로 767px 이하) ---
        "(max-width: 767px)": function() {
            gsap.set([
                ".section5 .card"
            ],{x: 0, xPercent: 0})
            gsap.set([".section5 .card.sub"], {yPercent: -65})
            gsap.set([".section5 .card.yellow"], {yPercent: -130})
            gsap.set([".section5 .card.light_gray"], {yPercent: -195})
            gsap.set([".section5 .card.black"], {yPercent: -260})
            gsap.set([
                '.section5 .top .bottom',
                '.section5 .top .right'
            ],{y: 0, opacity: 1})
            gsap.set([
                '.section4 .item',
                '.section5 .top .img_set .mo',
                '.section5 .top .right img',
                '.section6 .img_cont.mo .img_set.main',
                '.section7 .inner.mo .item1 .title',
                '.section7 .inner.mo .item1 .desc',
                '.section7 .inner.mo .item2',
                '.section7 .inner.mo .item3',
                '.section7 .inner.mo .item4',
            ],{y: 50, opacity: 0})
            // section2
            gsap.to(".section2 .mo .text_set", { scrollTrigger: { trigger: ".section2 .mo .text_set", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section2 .mo .item1", { scrollTrigger: { trigger: ".section2 .mo .item1", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section2 .mo .item2", { scrollTrigger: { trigger: ".section2 .mo .item2", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section2 .mo .item3", { scrollTrigger: { trigger: ".section2 .mo .item3", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            // section3
            gsap.to(".section3 .top .logo", { scrollTrigger: { trigger: ".section3 .top .logo", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section3 .top .title.mo", { scrollTrigger: { trigger: ".section3 .top .logo", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section3 .top .desc", { scrollTrigger: { trigger: ".section3 .top .desc", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section3 .swiper", { scrollTrigger: { trigger: ".section3 .swiper", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            // section4
            gsap.to(".section4 .mo .cont_header", { scrollTrigger: { trigger: ".section4 .mo .cont_header", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            // scrub방식
            let section4Tl = gsap.timeline({
                scrollTrigger: { 
                    trigger: ".section4", 
                    start: "top top",  // 조금 더 일찍 시작
                    end: "+=2500",
                    pin: true,
                    scrub: 1,  // 부드러운 스크럽
                    anticipatePin: 1,  // 핀 예측으로 부드러운 전환
                    invalidateOnRefresh: true,
                }
            })
            section4Tl
            .to('.section4 .inner.mo .item1', {y: 0, opacity: 1})
            .to({},{duration:1})
            .to('.section4 .inner.mo .item2', {y: 0, opacity:1})
            .to('.section4 .inner.mo .item1', {scale: .9},"<")
            .to({},{duration:1})
            .to('.section4 .inner.mo .item3', {y: 0, opacity:1})
            .to('.section4 .inner.mo .item2', {scale: .9},"<")
            .to('.section4 .inner.mo .item1', {scale: .8},"<")
            .to({},{duration:1})
            
            // 한번에 동작 방식
            // let shown = [false,false,false,false];
            // gsap.to(".section4 .mo .cont_main", { 
            //     scrollTrigger: { 
            //         trigger: ".section4", 
            //         start: "top top",
            //         end: ()=>5000,
            //         pin: true,
            //         onUpdate: (self) =>{
            //             let progress = self.progress;
            //             console.log(self.progress)

            //         }
            //     }, opacity: 1, y: 0, duration: 1 
            // });
            // section5
            gsap.to(".section5 .top .text_set .title", { scrollTrigger: { trigger: ".section5 .top .text_set", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section5 .top .text_set .desc", { scrollTrigger: { trigger: ".section5 .top .text_set", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section5 .top .img_set1 .mo", { scrollTrigger: { trigger: ".section5 .top .img_set1", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section5 .top .img_set2 .mo", { scrollTrigger: { trigger: ".section5 .top .img_set2", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section5 .top .right img", { scrollTrigger: { trigger: ".section5 .top .right", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            
            const moSection05Tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section5 .cont_wrap .card_wrap1',
                    start: 'top 100%',
                    onEnter: () => moSection05Tl.play(),
                    onLeaveBack: () => moSection05Tl.reverse(),
                }
            });
            moSection05Tl
            .to('.section5 .card.black', { yPercent: 0, duration: 1, ease: "power2.inOut" })
            .to('.section5 .card.light_gray', { yPercent: 0, duration: 1, ease: "power2.inOut" },"<")
            .to('.section5 .card.yellow', { yPercent: 0, duration: 1, ease: "power2.inOut" },"<")
            .to('.section5 .card.sub', { yPercent: 0, duration: 1, ease: "power2.inOut" },"<")
            .to('.section5 .card.primary', { yPercent: 0, duration: 1, ease: "power2.inOut" });
            // section6
            gsap.to(".section6 .text_set .title", { scrollTrigger: { trigger: ".section6 .text_set", start: "top 100%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section6 .text_set .desc", { scrollTrigger: { trigger: ".section6 .text_set", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section6 .img_cont.mo .img_set.main", { scrollTrigger: { trigger: ".section6 .img_cont.mo .img_set.main", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section6 .img_cont.mo .img_set.side", { scrollTrigger: { trigger: ".section6 .img_cont.mo .img_set.side", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            // section7 
            gsap.to(".section7 .inner.mo .item1 .title", { scrollTrigger: { trigger: ".section7 .inner.mo .item1 .title", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section7 .inner.mo .item1 .desc", { scrollTrigger: { trigger: ".section7 .inner.mo .item1 .desc", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section7 .inner.mo .item2", { scrollTrigger: { trigger: ".section7 .inner.mo .item2", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section7 .inner.mo .item3", { scrollTrigger: { trigger: ".section7 .inner.mo .item3", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section7 .inner.mo .item4", { scrollTrigger: { trigger: ".section7 .inner.mo .item4", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            // section8
            gsap.to(".section8 .img_wrap1 .img_set", { scrollTrigger: { trigger: ".section8 .img_wrap1", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section8 .img_wrap2 .img_set", { scrollTrigger: { trigger: ".section8 .img_wrap2", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to(".section8 .text_set2 .title.mo", { scrollTrigger: { trigger: ".section8 .text_set2", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
        },

        // --- All Breakpoints ---
        "all": function() {
            // 모든 뷰포트 크기에서 공통으로 실행될 애니메이션
            // section8
            gsap.to(".section8 .text_set1 .title", { scrollTrigger: { trigger: ".section8 .text_set1 .title", start: "top 80%" }, opacity: 1, y: 0, duration: 1 });
        }
    });
}

// --- Swiper Initialization ---
const section03Swiper = new Swiper(".section3 .swiper", {
    slidesPerView: 'auto',
    spaceBetween: 11.5,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 7000,
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
    },
    on: {
        init: function () {
            this.autoplay.start();
        }
    }
});

// --- Main Logic ---
// 1. 초기 애니메이션 설정
setupAnimations();

// 2. 변수셋팅
let lastWidth = window.innerWidth; //마지막 창 너비를 저장할 변수

// 4. 디바운싱 처리된 리사이즈 핸들러 (PC 전용)
const debouncedResize = debounce(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth !== lastWidth) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        setupAnimations();
        ScrollTrigger.refresh();
        lastWidth = currentWidth;
    }
}, 300);

// 5. 리사이즈 이벤트에 핸들러를 연결합니다. (모바일에서는 제외)
if (!isMobileBrowser()) {
    window.addEventListener("resize", debouncedResize);
}

// 6. 모바일 브라우저 최적화
if (isMobileBrowser()) {
    // orientationchange 이벤트 처리 (화면 회전 시에만 리프레시)
    window.addEventListener("orientationchange", debounce(() => {
        setTimeout(() => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            setupAnimations();
            ScrollTrigger.refresh();
            lastWidth = window.innerWidth;
        }, 500); // 회전 완료 후 충분한 시간 대기
    }, 100));
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