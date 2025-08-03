gsap.registerPlugin(ScrollTrigger);

const section03Swiper = new Swiper(".section3 .swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000, 
    768: {
    },
    1024: {
    },
})
section03Swiper.autoplay.start();

gsap.set([
    ".section2 .left",
    ".section2 .right > .flex",
    ".section2 .right .text_set",
    '.section3 .logo',
    '.section3 .title',
    '.section3 .desc',
    '.section4 .item',
    '.section4 .item2',
    '.section4 .right', 
    '.section4 .item3', 
    '.section4 .item4',
    '.section5 .text_set .title',
    '.section5 .text_set .desc',
    '.section5 .inner > .right',
    '.section5 .top > .bottom',
    '.section6 .text_set .title',
    '.section6 .text_set .desc',
    '.section6 .img_cont',
    '.section6 .img_cont .img_set.side',
    '.section7 .item1',
    '.section7 .item2',
    '.section7 .item3',
    '.section7 .item4',
    '.section7 .item5',
    '.section8 .img_wrap',
    '.section8 .text_set2'
], {opacity: 0, y: 50})
gsap.to(".section2 .left", {
    scrollTrigger: {
        trigger: ".section2",   // 기준 요소
        start: "top center",   // 애니메이션 시작 위치
        end: "bottom center",     // 애니메이션 끝 위치
        pin: false,            // 고정할지 여부 (true면 고정)
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section2 .right > .flex", {
    scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section2 .right .text_set", {
    scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});

gsap.to(".section3 .logo", {
    scrollTrigger: {
        trigger: ".section3",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section3 .title", {
    scrollTrigger: {
        trigger: ".section3",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section3 .desc", {
    scrollTrigger: {
        trigger: ".section3",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});

gsap.to(".section4 .item", {
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section4 .item2", {
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section4 .right", {
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section4 .item3", {
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to(".section4 .item4", {
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
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
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section5 .text_set .desc', {
    scrollTrigger: {
        trigger: ".section5",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section5 .inner > .right', {
    scrollTrigger: {
        trigger: ".section5",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section5 .top > .bottom', {
    scrollTrigger: {
        trigger: ".section5",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});

// section05Tl2
const section05Tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section5 .card_wrap2',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    }
})
section05Tl2 
.to('.section5 .card.primary', {
    left: 0,
    x: 0,
    top: cardH * 2 + numCardWrap2Mt,
    duration: 1
})
.to('.section5 .card.sub', {
    left: 0,
    x: cardH + numCardWrapGap,
    xPercent: 0,
    top: cardH * 2 + numCardWrap2Mt,
    duration: 1
})
.to('.section5 .card.yellow', {
    left: 0,
    x: (cardH * 2) + (numCardWrapGap * 2),
    xPercent: 0,
    top: cardH * 2 + numCardWrap2Mt,
    duration: 1
})
.to('.section5 .card.light_gray', {
    left: 0,
    x: (cardH * 3) + (numCardWrapGap * 3),
    xPercent: 0,
    top: cardH * 2 + numCardWrap2Mt,
    duration: 1
})
.to('.section5 .card.black', {
    left: 0,
    x: (cardH * 4) + (numCardWrapGap * 4),
    xPercent: 0,
    top: cardH * 2 + numCardWrap2Mt,
    duration: 1
})

// section06
gsap.to('.section6 .text_set .title', {
    scrollTrigger: {
        trigger: ".section6",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section6 .text_set .desc', {
    scrollTrigger: {
        trigger: ".section6",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section6 .img_cont', {
    scrollTrigger: {
        trigger: ".section6",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section6 .img_cont .img_set.side', {
    scrollTrigger: {
        trigger: ".section6",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});

// section07
gsap.to('.section7 .item1', {
    scrollTrigger: {
        trigger: ".section7",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section7 .item2', {
    scrollTrigger: {
        trigger: ".section7",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section7 .item3', {
    scrollTrigger: {
        trigger: ".section7",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section7 .item4', {
    scrollTrigger: {
        trigger: ".section7",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section7 .item5', {
    scrollTrigger: {
        trigger: ".section7",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});


// section08
gsap.to('.section8 .img_wrap1', {
    scrollTrigger: {
        trigger: ".section8",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section8 .img_wrap2', {
    scrollTrigger: {
        trigger: ".section8",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});
gsap.to('.section8 .text_set2', {
    scrollTrigger: {
        trigger: ".section8",
        start: "top center",
        end: "bottom center",
        pin: false,
    },
    opacity: 1,
    y:0,
    duration: 1
});