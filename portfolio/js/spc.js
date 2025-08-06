gsap.registerPlugin(ScrollTrigger);

// --- vh 단위 보정 함수 ---
// Safari에서 주소창 유무에 따라 vh값이 바뀌는 현상을 막고, 실제 뷰포트 높이를 기반으로 CSS 변수를 설정합니다.
function setVh() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

// --- Debounce Function ---
// 짧은 시간 내에 이벤트가 반복해서 발생하는 것을 방지하여 성능을 최적화합니다.
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// --- Animation Setup Function ---
// 모든 GSAP 애니메이션과 ScrollTrigger 설정을 포함하는 함수입니다.
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
        '.section5 .bottom',
        '.section6 .text_set .title',
        '.section6 .text_set .desc',
        '.section6 .img_cont',
        '.section6 .img_cont .img_set.side',
        '.section7 .pc .item1',
        '.section7 .pc .item2',
        '.section7 .pc .item3',
        '.section7 .pc .item4',
        '.section7 .pc .item5',
        '.section8 .img_wrap .img_set',
        '.section8 .text_set2 .title'
    ], {
        opacity: 0,
        y: 50
    });

    // ScrollTrigger.matchMedia()를 사용하여 반응형 애니메이션 설정
    ScrollTrigger.matchMedia({

        // --- PC (가로 768px 이상) ---
        "(min-width: 768px)": function() {
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
            gsap.to(".section4 .pc .item4", { scrollTrigger: { trigger: ".section4", start: "top 10%" }, opacity: 1, y: 0, duration: 1 });

            // section05
            const card = document.querySelector('.section5 .card');
            const cardH = card.clientHeight;
            const cardWrap2Mt = window.getComputedStyle(document.querySelector('.section5 .card_wrap2')).marginTop;
            const cardWrapGap = window.getComputedStyle(document.querySelector('.section5 .card_wrap2')).gap;
            const numCardWrap2Mt = Number(cardWrap2Mt.replace(/[^\d]/g, ''));
            const numCardWrapGap = Number(cardWrapGap.replace(/[^\d]/g, ''));

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
                .to('.section5 .card.primary', { left: 0, x: 0, top: cardH * 2 + numCardWrap2Mt, duration: 1, ease: "power1.inOut" })
                .to('.section5 .card.sub', { left: 0, x: cardH + numCardWrapGap, xPercent: 0, top: cardH * 2 + numCardWrap2Mt, duration: 1, ease: "power1.inOut" }, '<+.3')
                .to('.section5 .card.yellow', { left: 0, x: (cardH * 2) + (numCardWrapGap * 2), xPercent: 0, top: cardH * 2 + numCardWrap2Mt, duration: 1, ease: "power1.inOut" }, '<+.3')
                .to('.section5 .card.light_gray', { left: 0, x: (cardH * 3) + (numCardWrapGap * 3), xPercent: 0, top: cardH * 2 + numCardWrap2Mt, duration: 1, ease: "power1.inOut" }, '<+.3')
                .to('.section5 .card.black', { left: 0, x: (cardH * 4) + (numCardWrapGap * 4), xPercent: 0, top: cardH * 2 + numCardWrap2Mt, duration: 1, ease: "power1.inOut" }, '<+.3');

            // section06
            gsap.to('.section6 .text_set .title', { scrollTrigger: { trigger: ".section6", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section6 .text_set .desc', { scrollTrigger: { trigger: ".section6", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section6 .img_cont', { scrollTrigger: { trigger: ".section6 .img_cont", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section6 .img_cont .img_set.side', { scrollTrigger: { trigger: ".section6 .img_cont .img_set.side", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });

            // section07
            gsap.to('.section7 .pc .item1', { scrollTrigger: { trigger: ".section7", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item2', { scrollTrigger: { trigger: ".section7", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item3', { scrollTrigger: { trigger: ".section7", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item4', { scrollTrigger: { trigger: ".section7", start: "top center" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section7 .pc .item5', { scrollTrigger: { trigger: ".section7", start: "top top" }, opacity: 1, y: 0, duration: 1 });

            // section08
            gsap.to('.section8 .img_wrap1 .img_set', { scrollTrigger: { trigger: ".section8 .img_wrap1", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section8 .img_wrap2 .img_set', { scrollTrigger: { trigger: ".section8 .img_wrap2", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
            gsap.to('.section8 .text_set2 .title', { scrollTrigger: { trigger: ".section8 .text_set2", start: "top 70%" }, opacity: 1, y: 0, duration: 1 });
        },

        // --- Mobile (가로 767px 이하) ---
        "(max-width: 767px)": function() {
            // 여기에 모바일 전용 애니메이션 코드를 추가하세요.
        },

        // --- All Breakpoints ---
        "all": function() {
            // 모든 뷰포트 크기에서 공통으로 실행될 로직
        }
    });
}

// --- Swiper Initialization ---
const section03Swiper = new Swiper(".section3 .swiper", {
    slidesPerView: 'auto',
    spaceBetween: 11.5,
    loop: true,
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
// 1. vh 단위 설정 함수를 즉시 실행합니다.
setVh();

// 2. 초기 애니메이션 설정
setupAnimations();

// 3. 마지막 창 너비를 저장할 변수
let lastWidth = window.innerWidth;

// 4. 디바운싱 처리된 리사이즈 핸들러
const debouncedResize = debounce(() => {
    // vh 단위 재설정
    setVh(); 
    
    const currentWidth = window.innerWidth;
    if (currentWidth !== lastWidth) {
        // 너비가 변경되면 모든 ScrollTrigger 인스턴스를 죽여서 충돌을 방지합니다.
        ScrollTrigger.getAll().forEach(t => t.kill());
        // 애니메이션을 다시 설정합니다.
        setupAnimations();
        // ScrollTrigger가 새로운 DOM 상태를 기반으로 위치를 재계산하도록 합니다.
        ScrollTrigger.refresh();
    }
    // 마지막 너비를 현재 너비로 업데이트합니다.
    lastWidth = currentWidth;
}, 200); // 200ms의 지연시간을 줍니다.

// 5. 리사이즈 이벤트에 핸들러를 연결합니다.
window.addEventListener("resize", debouncedResize);