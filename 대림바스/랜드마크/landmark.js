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

// 1. Lenis 인스턴스 생성
const lenis = new Lenis({
    smooth: !isMobileBrowser(),
    smoothTouch: !isMobileBrowser(),     // 모바일도 적용여부
    lerp: isMobileBrowser() ? 0.05 : 0.1,             // 부드러움 정도 (0.0 ~ 1.0)
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

const headerH = document.querySelector('#header').clientHeight;
const contentH = window.innerHeight - headerH;
const vw = window.innerWidth;
const windowH = window.innerHeight;
const section4ListlWidth = document.querySelector('.section4 .logo_list_1').clientWidth;
const section6ListHeight = document.querySelector('.section6 .logo_list_1').clientHeight;
console.log('section4ListlWidth',section4ListlWidth)
document.addEventListener('DOMContentLoaded', function(){
    console.log('section4ListlWidth',section4ListlWidth)
    ScrollTrigger.matchMedia({
        // --- PC (가로 768px 이상) ---
        "(min-width: 768px)": function() {
    
            gsap.set([
                '.section3 .text_set h4',
                '.section3 .text_set p',
                '.section4 .intro p',
                '.section4 .intro h4',
                '.section5 .intro p',
                '.section5 .intro h4',
                '.section6 .intro h4',
                '.section6 .intro p',
            ], {
                opacity: 0,
                y:20,
            })
            gsap.set('.section4 .logo_list_1',{x: -section4ListlWidth})
            gsap.set('.section4 .logo_list_2',{x: vw})
            gsap.set('.section4 .logo_list_1, .section4 .logo_list_2', {willChange: 'transform'});
            gsap.set('.lankmark_container .section6 .logo_list_wrap ul.logo_list_1', {
                willChange: 'transform', 
                ease: 'none', 
                force3D: true,
            })
    
    
            // section2 스크롤 텍스트
            gsap.to(".scroll_text", {
                backgroundSize: "100% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".section2",
                    start: "top 10%",
                    end: "bottom 90%",
                    scrub: true,
                    // markers: true,
                },
            });
    
            const section3Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section3 .text_scroll_zone",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 4 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform'
                }
            })
            section3Timeline
            .to('.lankmark_container .section3 .text_wrap h4', {opacity: 1, y: 0})
            .to('.lankmark_container .section3 .text_wrap p', {opacity: 1, y: 0})
            .to('.lankmark_container .section3 .bg', {scale: 1})
            .to('.lankmark_container .section3 .bg img', {filter: "brightness(0.35)"} ,"<")
            .to('.lankmark_container .section3 .text_wrap p', {opacity: 0})
            .to('.lankmark_container .section3 .text_wrap h4', {
                fontSize: '40px',
                color: 'rgba(255,255,255,1)',
                y: getSectionTextCenterY(3)
            })
            .to('.lankmark_container .section3 .text_wrap', {xPercent: -75})
            .to({},{})
    
            // section3 로고 리스트 등장
            gsap.to('.logo_list_wrap', {
                opacity: 1,
                duration: .2,
                scrollTrigger: {
                    trigger: '.logo_list_wrap',
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });
    
            // section3 로고 가운데 위치체크
            ScrollTrigger.create({
                trigger: ".lankmark_container .section3 .logo_list_wrap",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: self => {
                    const center = window.innerHeight / 2;
                    const listItems = gsap.utils.toArray('.lankmark_container .section3 .logo_list li');
    
                    listItems.forEach(li => {
                        const rect = li.getBoundingClientRect();
                        const liCenter = rect.top + rect.height / 2;
                        const inCenter = Math.abs(liCenter - center) < rect.height / 2;
                        li.classList.toggle('active', inCenter);
                    });
                }
            });
    
            // section4 
            const section4Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section4",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 8 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform'
                }
            })
            section4Timeline
            .to('.section4 .intro h4', {opacity: 1, y: 0})
            .to('.section4 .intro p', {opacity: 1, y: 0})
            .to({},{})
            .to('.section4 .bg', {opacity: 1})
            .to('.section4 .intro h4',{color: 'rgba(255, 255, 255, 0.6'}, "<")
            .to('.section4 .intro p',{color: '#fff'}, "<")
            .to({},{})
            .to('.section4 .intro p',{opacity: 0})
            .to('.section4 .intro h4', {
                fontSize: '40px',
                color: 'rgba(255,255,255,1)',
                y: getSectionTextCenterY(4)
            })
            .to('.section4 .bg_filter', {backdropFilter: "brightness(0.45) blur(5px)"})
            .to('.section4 .intro h4', {y: -200})
            .to('.section4 .cont', {opacity: 1})
            .to('.section4 .logo_list_1', {x: Math.round(vw), duration: 3, force3D: true, ease: 'none'})
            .to('.section4 .logo_list_2', {x: Math.round(-section4ListlWidth), duration: 3, force3D: true, ease: 'none'}, "<")
    
            // section5
            const cont2List = gsap.utils.shuffle(
                gsap.utils.toArray('.section5 .cont2 li')
            )
            const section5Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section5",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 8 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform'
                }
            })
            section5Timeline
            .to('.section5 .intro h4', {opacity: 1, y: 0})
            .to('.section5 .intro p', {opacity: 1, y: 0})
            .to('.section5 .dim1', {opacity: 0})
            .to('.section5 .dim2', {opacity: 0})
            .to('.section5 .dim3', {opacity: 0})
            .to('.section5 .divide', {width: 0})
            .to('.section5 .intro p', {opacity: 0})
            .to('.section5 .intro h4', {
                fontSize: '40px',
                color: 'rgba(0,0,0,1)',
                y: getSectionTextCenterY(4)
            })
            .to({},{})
            .to('.section5 .intro h4', {color: '#fff'})
            .to('.section5 .cont1', {opacity: 0}, "<")
            .to('.section5 .bg', {opacity: 1},"<")
            .to({},{})
            .to('.section5 .bg', {filter: 'brightness(0.3)'})
            .to('.section5 .intro h4', {opacity: 0.1},"<")
            .to({},{})
            .to({},{});
            cont2List.forEach((li, i) => {
                section5Timeline.to(li, {
                    opacity: 1,
                    duration: 0.2
                }, "<+" + (i * 0.05));
            });
    
            
            console.log(section6ListHeight)
            const section6Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6 .text_scroll_zone",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 4 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform',
                }
            })
            section6Timeline
            .to('.section6 .intro h4', {opacity: 1, y: 0})
            .to('.section6 .intro p', {opacity: 1, y: 0})   
            .to('.section6 .bg img', {opacity: 1})
            .to('.section6 .intro p', {opacity: 0})
            .to('.section6 .intro h4', {
                fontSize: '40px',
                color: 'rgba(0,0,0,1)',
                y: getSectionTextCenterY(4)
            })
            .to('.section6 .intro h4', {color: '#fff'})
            .to('.section6 .bg img', {filter: 'brightness(0.5'})
            .to('.section6 .intro', {xPercent: -75})
    
            const section6Timeline2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6 .logo_list_wrap",
                    start: 'top top',
                    end: 'bottom bottom',
                    pinSpacing: false,
                    scrub: true,
                    // markers:true,
                    onEnter: () => gsap.to(['.section6 .logo_list_1', '.section6 .logo_list_2'], {opacity: 1, duration: 0}),
                    onLeaveBack: () => gsap.to(['.section6 .logo_list_1', '.section6 .logo_list_2'], {opacity: 0, duration: 0}),
                }
            })
            section6Timeline2
            .to('.section6 .logo_list_1', 
                { y:section6ListHeight + windowH,  ease: "none", force3D: true, willChange: 'transform'}
            )
        },
        // --- Mobile (가로 767px 이하) ---
        "(max-width: 767px)": function() {
        },
        // --- All Breakpoints ---
        "all": function() {
        }
    });
})

function getSectionTextCenterY(sectionNumber) {
    const section = document.querySelector('.lankmark_container .section' + sectionNumber);
    const parent = section.querySelector('.text_set');
    const h4 = parent.querySelector('h4');
    const p = parent.querySelector('p');

    const parentH = parent.clientHeight;
    const h4H = h4.clientHeight;
    const pH = p.clientHeight;
    const pMarginTop = parseFloat(getComputedStyle(p).marginTop);

    const totalH = h4H + pMarginTop + pH;

    // 부모 기준 중앙 계산 공식
    return (parentH - totalH) / 2 + (totalH / 2 - h4H / 2);
}



document.addEventListener('DOMContentLoaded', function(){
    const section1 = document.querySelector('.section1');
    section1.classList.add('active');
})