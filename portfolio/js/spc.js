gsap.registerPlugin(ScrollTrigger);

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
        1024: {},
    },
    on: {
        init: function () {
            this.autoplay.start(); // 여기서 안전하게 실행됨
        }
    }
});

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

    // PC (가로 768px 이상)
    "(min-width: 768px)": function() {
        // 이 함수는 뷰포트가 769px 이상일 때 실행됩니다.
        // 리사이즈 시 자동으로 이전 ScrollTrigger는 kill되고 다시 생성됩니다.

        // section2
        gsap.to(".section2 .pc .left", {
            scrollTrigger: {
                trigger: ".section2",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section2 .pc .right > .flex", {
            scrollTrigger: {
                trigger: ".section2",
                start: "top 50%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section2 .pc .right .text_set", {
            scrollTrigger: {
                trigger: ".section2",
                start: "top 3%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

        // section3
        gsap.to(".section3 .top .logo", {
            scrollTrigger: {
                trigger: ".section3",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section3 .top .title", {
            scrollTrigger: {
                trigger: ".section3",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section3 .top .desc", {
            scrollTrigger: {
                trigger: ".section3",
                start: "top 50%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section3 .swiper", {
            scrollTrigger: {
                trigger: ".section3",
                start: "top 30%",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            onComplete: () => {
                section03Swiper.autoplay.start();
            }
        });

        // section4
        gsap.to(".section4 .pc .item1", {
            scrollTrigger: {
                trigger: ".section4",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section4 .pc .item2", {
            scrollTrigger: {
                trigger: ".section4",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section4 .pc .right", {
            scrollTrigger: {
                trigger: ".section4",
                start: "top 50%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section4 .pc .item3", {
            scrollTrigger: {
                trigger: ".section4",
                start: "top 30%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to(".section4 .pc .item4", {
            scrollTrigger: {
                trigger: ".section4",
                start: "top 10%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

        // section05
        const card = document.querySelector('.section5 .card');
        const cardH = card.clientHeight;
        const cardWrap2Mt = window.getComputedStyle(document.querySelector('.section5 .card_wrap2')).marginTop;
        const cardWrapGap = window.getComputedStyle(document.querySelector('.section5 .card_wrap2')).gap
        const numCardWrap2Mt = Number(cardWrap2Mt.replace(/[^\d]/g, ''));
        const numCardWrapGap = Number(cardWrapGap.replace(/[^\d]/g, ''));

        gsap.to('.section5 .text_set .title', {
            scrollTrigger: {
                trigger: ".section5",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section5 .text_set .desc', {
            scrollTrigger: {
                trigger: ".section5",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section5  .right', {
            scrollTrigger: {
                trigger: ".section5",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section5 .bottom', {
            scrollTrigger: {
                trigger: ".section5",
                start: "top 30%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

        // section05Tl2
        const section05Tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section5 .cont_wrap .card_wrap2',
                start: 'top 70%',
                // end: 'bottom 0%',
                // scrub: true,
                onEnter: () => section05Tl2.play(),
                onLeaveBack: () => section05Tl2.reverse(),
            }
        })
        section05Tl2
            .to('.section5 .card.primary', {
                left: 0,
                x: 0,
                top: cardH * 2 + numCardWrap2Mt,
                duration: 1,
                ease: "power1.inOut"
            })
            .to('.section5 .card.sub', {
                left: 0,
                x: cardH + numCardWrapGap,
                xPercent: 0,
                top: cardH * 2 + numCardWrap2Mt,
                duration: 1,
                ease: "power1.inOut"
            },'<+.3')
            .to('.section5 .card.yellow', {
                left: 0,
                x: (cardH * 2) + (numCardWrapGap * 2),
                xPercent: 0,
                top: cardH * 2 + numCardWrap2Mt,
                duration: 1,
                ease: "power1.inOut"
            },'<+.3')
            .to('.section5 .card.light_gray', {
                left: 0,
                x: (cardH * 3) + (numCardWrapGap * 3),
                xPercent: 0,
                top: cardH * 2 + numCardWrap2Mt,
                duration: 1,
                ease: "power1.inOut"
            },'<+.3')
            .to('.section5 .card.black', {
                left: 0,
                x: (cardH * 4) + (numCardWrapGap * 4),
                xPercent: 0,
                top: cardH * 2 + numCardWrap2Mt,
                duration: 1,
                ease: "power1.inOut"
            },'<+.3');


        // section06
        gsap.to('.section6 .text_set .title', {
            scrollTrigger: {
                trigger: ".section6",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section6 .text_set .desc', {
            scrollTrigger: {
                trigger: ".section6",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section6 .img_cont', {
            scrollTrigger: {
                trigger: ".section6 .img_cont",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section6 .img_cont .img_set.side', {
            scrollTrigger: {
                trigger: ".section6 .img_cont .img_set.side",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

        // section07
        gsap.to('.section7 .pc .item1', {
            scrollTrigger: {
                trigger: ".section7",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section7 .pc .item2', {
            scrollTrigger: {
                trigger: ".section7",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section7 .pc .item3', {
            scrollTrigger: {
                trigger: ".section7",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section7 .pc .item4', {
            scrollTrigger: {
                trigger: ".section7",
                start: "top center",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section7 .pc .item5', {
            scrollTrigger: {
                trigger: ".section7",
                start: "top top",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

        // section08
        gsap.to('.section8 .img_wrap1 .img_set', {
            scrollTrigger: {
                trigger: ".section8 .img_wrap1",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section8 .img_wrap2 .img_set', {
            scrollTrigger: {
                trigger: ".section8 .img_wrap2",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
        gsap.to('.section8 .text_set2 .title', {
            scrollTrigger: {
                trigger: ".section8 .text_set2",
                start: "top 70%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

    },

    // Mobile (가로 767px 이하)
    "(max-width: 767px)": function() {
        // 이 함수는 뷰포트가 768px 이하일 때 실행됩니다.
        // 여기에 모바일 전용 애니메이션 코드를 추가하세요.
        // 예: gsap.to(...)
    },

    // 모든 조건에 공통으로 적용 (선택 사항)
    "all": function() {
        // 이 함수는 모든 조건에서 실행됩니다.
        // 뷰포트가 변경될 때마다 실행되어야 하는 공통 로직이 있다면 여기에 추가하세요.
    }

});