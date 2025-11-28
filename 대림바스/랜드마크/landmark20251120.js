gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function setRealVH_Normal() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// requestAnimationFrame용 변수
let rafId = null;
let refreshTimer = null;

function setRealVH_Kakao() {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
        const h = window.visualViewport?.height || window.innerHeight;
        const vh = h * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // ScrollTrigger refresh는 디바운싱 (너무 자주 호출 방지)
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        rafId = null;
    });
}

// 1. 타이밍 문제 해결: 페이지 로드 전에 즉시 실행
setRealVH_Normal();

// 2. 카카오톡이면 즉시 업데이트
if (isMobileBrowser() && isKakaoInApp()) {
    setRealVH_Kakao();
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

function isSafari() {
    let ua = navigator.userAgent.toLowerCase();

    let isSafari = ua.indexOf('safari') > -1;
    let isChrome = ua.indexOf('chrome') > -1 || ua.indexOf('crios') > -1;
    let isAndroid = ua.indexOf('android') > -1;

    // Safari 는 safari 포함 && chrome/crios 포함 X && android X
    return isSafari && !isChrome && !isAndroid;
}

function isKakaoInApp() {
    return navigator.userAgent.toLowerCase().includes('kakaotalk');
}

window.addEventListener('load', () => {

    if (isMobileBrowser() && isKakaoInApp()) {
        
        ScrollTrigger.config({
            ignoreMobileResize: true, // 카카오톡 인앱브라우저 화면 점프 방지
            syncInterval: 0.02,
        });

        setRealVH_Kakao();

        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", setRealVH_Kakao);
            // window.visualViewport.addEventListener("scroll", setRealVH_Kakao);
        }
        ScrollTrigger.refresh();

    } else {
        // 일반 모바일/PC
        ScrollTrigger.refresh();
    }
});



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

document.addEventListener('DOMContentLoaded', function(){

    let landmarkPaginationBound = false; // pagination 클릭 바인딩 여부 플래그

    const sec3Swiper = new Swiper('#apartment .swiper', {
        slidesPerView: 3,
        spaceBetween: 100, 
        loop: true,
        slidesPerGroup: 1,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 32
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1024: {
                spaceBetween: 40
            },
            1280: {
                spaceBetween: 60
            },
            1366: {
                spaceBetween: 80
            },
            1440: {
                spaceBetween: 90
            },
            1640: {
                spaceBetween: 100
            }
        }
    })

    ScrollTrigger.matchMedia({
        // --- PC (가로 768px 이상) ---
        "(min-width: 768px)": function() {

            let pcScrollTriggers = [];

            function addPCScrollTriggerFromAnimation(animation) {
                if (animation && animation.scrollTrigger) {
                    pcScrollTriggers.push(animation.scrollTrigger);
                }
            }

            function addPCScrollTrigger(st) {
                if (st) pcScrollTriggers.push(st);
            }

            // ---------- PC용 세팅 + 타임라인 생성 ----------
            function setupPC() {
                const headerH = document.querySelector('#header .gnb').clientHeight;
                const contentH = window.innerHeight - headerH;
                const vw = window.innerWidth;
                const section3ListWrapHeight = document.querySelector('.section3 .logo_list_wrap').clientHeight;
                const section3ListHeight = document.querySelector('.section3 .logo_list').clientHeight;
                const section4ListlWidth = document.querySelector('.section4 .logo_list_1').clientWidth;
                const section6ListHeight = document.querySelector('.section6 .logo_list_1').clientHeight;
                const section6ListWrapHeight = document.querySelector('.section6 .logo_list_wrap').clientHeight;

                // 공통 텍스트 초기값
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
                    y: 20
                });

                // section3
                // gsap.set('.section3 .logo_list', { y: section3ListWrapHeight });
                // gsap.set('.section3 .overflow_none', { clearProps: 'transform' });

                // section4
                gsap.set('.section4 .logo_list_1', { x: -section4ListlWidth });
                gsap.set('.section4 .logo_list_2', { x: vw });
                gsap.set('.section4 .logo_list_1, .section4 .logo_list_2', { willChange: 'transform' });
                gsap.set('.lankmark_container .section6 .logo_list_wrap ul.logo_list_1', {
                    willChange: 'transform',
                    ease: 'none',
                    force3D: true
                });

                // section5
                gsap.set('.lankmark_container .section5 .cont1 li.divide', {
                    width: 'clamp(9px, 0.9375vw, 18px)',
                    height: '100%'
                });

                // section6
                gsap.set('.section6 .logo_list_1', { y: -section6ListHeight });
                gsap.set('.section6 .logo_list_2', { y: section3ListWrapHeight });
                gsap.set('.section6 .overflow_none', { clearProps: 'transform' });
                gsap.set('.lankmark_container .section6 .logo_list_wrap', {left: 'auto', clearProps: 'transform', right: 0});

                // section2 스크롤 텍스트
                const scrollTextTween = gsap.to(".scroll_text", {
                    backgroundSize: "100% 100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".section2",
                        start: "top 10%",
                        end: "bottom 90%",
                        scrub: true
                    }
                });
                addPCScrollTriggerFromAnimation(scrollTextTween);

                // section3 텍스트
                const section3Timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section3 .text_scroll_zone",
                        start: 'top ' + headerH + 'px',
                        end: contentH * 4.5 + 'px',
                        scrub: true,
                        pin: true,
                        pinType: isMobileBrowser() ? 'fixed' : 'transform',
                        onUpdate: (self) => {
                            if(self.progress > 0.3) {
                                document.querySelector('.landmark_pagination').classList.add('show');
                            } else {
                                document.querySelector('.landmark_pagination').classList.remove('show');
                            }
                        }
                    }
                });

                section3Timeline
                    .to('.lankmark_container .section3 .text_wrap h4', { opacity: 1, y: 0 })
                    .to('.lankmark_container .section3 .text_wrap p', { opacity: 1, y: 0 })
                    .to('.lankmark_container .section3 .bg', { scale: 1 })
                    // 여기!!!
                    .to('.lankmark_container .section3 .bg > img', { filter: "brightness(0.35)" }, "<")
                    .to('.lankmark_container .section3 .text_wrap p', { opacity: 0 })
                    .to('.lankmark_container .section3 .text_wrap h4', {
                        fontSize: 'clamp(44px, 4.583vw, 88px)',
                        color: 'rgba(255,255,255,1)',
                        y: getSectionTextCenterY(3)
                    })
                    .addLabel('apartment')
                    .to('.lankmark_container .section3 .text_wrap', { xPercent: -70 })
                    .to('.lankmark_container .section3 .text_wrap h4', {
                        fontSize: 'clamp(32px, 3.333vw, 64px)',
                    }, '<')
                    .fromTo('.lankmark_container .section3 .logo_list_wrap', {y: 20},{y: 0, opacity: 1})
                    .to({}, {})
                    .to({}, {});

                addPCScrollTriggerFromAnimation(section3Timeline);

                // section3 로고 리스트 등장
                // const section3Timeline2 = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: '.section3 .logo_list_wrap',
                //         end: '+=' + (section3ListHeight + section3ListHeight) + 'px',
                //         start: 'top ' + headerH + 'px',
                //         pin: true,
                //         scrub: true,
                //         onEnter: () => {
                //             gsap.to('.section3 .logo_list_wrap', { opacity: 1, duration: 0.2 });
                //         },
                //         onEnterBack: () => {
                //             gsap.to('.section3 .logo_list_wrap', { opacity: 1, duration: 0.2 });
                //         },
                //         onLeave: () => {
                //             gsap.to('.section3 .logo_list_wrap', { opacity: 1, duration: 0.2 });
                //         },
                //         onLeaveBack: () => {
                //             gsap.to('.section3 .logo_list_wrap', { opacity: 1, duration: 0.2 });
                //         }
                //     }
                // });

                // section3Timeline2.to('.section3 .logo_list', {
                //     y: -section3ListHeight,
                //     ease: 'none'
                // });

                // addPCScrollTriggerFromAnimation(section3Timeline2);

                // section3 로고 가운데 위치체크
                // const section3CenterST = ScrollTrigger.create({
                //     trigger: ".lankmark_container .section3 .logo_list_wrap",
                //     start: "top bottom",
                //     end: '+=' + (section3ListHeight + section3ListHeight) + 'px',
                //     scrub: true,
                //     onUpdate: self => {
                //         const center = window.innerHeight / 2;
                //         const listItems = gsap.utils.toArray('.lankmark_container .section3 .logo_list li');

                //         listItems.forEach(li => {
                //             const rect = li.getBoundingClientRect();
                //             const liCenter = rect.top + rect.height / 2;
                //             const inCenter = Math.abs(liCenter - center) < rect.height / 2;
                //             li.classList.toggle('active', inCenter);
                //         });
                //     }
                // });
                // addPCScrollTrigger(section3CenterST);

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
                });

                section4Timeline
                    .to('.section4 .intro h4', { opacity: 1, y: 0 })
                    .to('.section4 .intro p', { opacity: 1, y: 0 })
                    .to({}, {})
                    .to('.section4 .bg', { opacity: 1 })
                    .to('.section4 .intro h4', { color: 'rgba(255, 255, 255, 0.6' }, "<")
                    .to('.section4 .intro p', { color: '#fff' }, "<")
                    .to({}, {})
                    .to('.section4 .intro p', { opacity: 0 })
                    .to('.section4 .intro h4', {
                        fontSize: 'clamp(44px, 4.583vw, 88px)',
                        color: 'rgba(255,255,255,1)',
                        y: getSectionTextCenterY(4),
                    })
                    .addLabel('hotel')
                    .to('.section4 .bg_filter', { backdropFilter: "brightness(0.45) blur(5px)" })
                    // .to('.section4 .intro h4', { y: -200 })
                    // .to('.section4 .intro.text_set', { top: '27.79%'})
                    .to('.section4 .intro.text_set', { top: '37%'})
                    .to('.section4 .intro h4', { y: 0 }, '<')
                    .to('.section4 .cont', { opacity: 1 })
                    .to('.section4 .logo_list_1', {
                        x: Math.round(vw),
                        duration: 3,
                        force3D: true,
                        ease: 'none'
                    })
                    .to('.section4 .logo_list_2', {
                        x: Math.round(-section4ListlWidth),
                        duration: 3,
                        force3D: true,
                        ease: 'none'
                    }, "<")
                    .to('.section4 .intro h4', { y: getSectionTextCenterY(4)}, "<75%")
                    .to('.section4 .intro.text_set', { top: '50%'},'<')
                    .to('.section4 .intro.text_set', { }, "<")
                    .to({},{duration: 0.5})

                addPCScrollTriggerFromAnimation(section4Timeline);

                // section5
                const cont2List = gsap.utils.shuffle(
                    gsap.utils.toArray('.section5 .cont2 li')
                );

                const section5Timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section5",
                        start: 'top ' + headerH + 'px',
                        end: contentH * 8 + 'px',
                        scrub: true,
                        pin: true,
                        pinType: isMobileBrowser() ? 'fixed' : 'transform'
                    }
                });

                section5Timeline
                    .to('.section5 .intro h4', { opacity: 1, y: 0 })
                    .to('.section5 .intro p', { opacity: 1, y: 0 })
                    .to('.section5 .dim1', { opacity: 0 })
                    .to('.section5 .dim2', { opacity: 0 })
                    .to('.section5 .dim3', { opacity: 0 })
                    .to('.section5 .divide', { width: 0 })
                    .to('.section5 .intro p', { opacity: 0 })
                    .to('.section5 .intro h4', {
                        fontSize: 'clamp(44px, 4.583vw, 88px)',
                        color: 'rgba(0,0,0,1)',
                        y: getSectionTextCenterY(4)
                    })
                    .addLabel('resort')
                    .to({}, {})
                    .to('.section5 .intro h4', { color: '#fff' })
                    .to('.section5 .cont1', { opacity: 0 }, "<")
                    .to('.section5 .bg', { opacity: 1 }, "<")
                    .to({}, {})
                    .to('.section5 .bg', { filter: 'brightness(0.3)' })
                    .to('.section5 .intro h4', { opacity: 0 }, "<")
                    .to({}, {})
                    .to({}, {});

                cont2List.forEach((li, i) => {
                    section5Timeline.to(li, {
                        opacity: 1,
                        duration: 0.2
                    }, "<+" + (i * 0.05));
                });

                addPCScrollTriggerFromAnimation(section5Timeline);

                // section6
                const section6Timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section6 .text_scroll_zone",
                        start: 'top ' + headerH + 'px',
                        end: contentH * 4 + 'px',
                        scrub: true,
                        pin: true,
                        pinType: isMobileBrowser() ? 'fixed' : 'transform'
                    }
                });

                section6Timeline
                    .to('.section6 .intro h4', { opacity: 1, y: 0 })
                    .to('.section6 .intro p', { opacity: 1, y: 0 })
                    .to('.section6 .bg img', { opacity: 1 })
                    .to('.section6 .intro h4', { color: '#fff' }, '<')
                    .to('.section6 .intro p', { color: '#fff' }, '<')
                    .to('.section6 .intro p', { opacity: 0 })
                    .to('.section6 .intro h4', {
                        fontSize: 'clamp(44px, 4.583vw, 88px)',
                        y: getSectionTextCenterY(4)
                    })
                    
                    .addLabel('golfclub')
                    .to('.section6 .bg img', { filter: 'brightness(0.5)' })
                    .to('.section6 .intro', { xPercent: -65 })
                    .to('.section6 .intro h4', {
                        fontSize: 'clamp(32px, 3.333vw, 64px)',
                        y: getSectionTextCenterY(4)
                    },"<");

                addPCScrollTriggerFromAnimation(section6Timeline);

                const section6Timeline2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section6 .logo_list_wrap",
                        start: 'top ' + headerH + 'px',
                        end: '+=' + section6ListHeight * 2 + 'px',
                        scrub: true,
                        pin: true
                    }
                });

                section6Timeline2
                    .to('.section6 .logo_list_1', {
                        y: section6ListWrapHeight,
                        ease: 'none'
                    })
                    .to('.section6 .logo_list_2', {
                        y: -section6ListHeight,
                        ease: 'none'
                    }, "<");

                addPCScrollTriggerFromAnimation(section6Timeline2);

                // pagination용 timeline map
                window.landmarkTimelineMap = {
                    apartment: section3Timeline,
                    hotel: section4Timeline,
                    resort: section5Timeline,
                    golfclub: section6Timeline
                };

                // PC에서만 pagination 활성화/비활성 ScrollTrigger
                const paginationSections = ['apartment', 'hotel', 'resort', 'golfclub'];
                const paginationST = ScrollTrigger.create({
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    onUpdate: (self) => {
                        const sections = ['#apartment', '#hotel', '#resort', '#golfclub'];
                        let foundActive = false;

                        sections.forEach(id => {
                            const section = document.querySelector(id);
                            if (!section) return;
                            const rect = section.getBoundingClientRect();
                            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                                foundActive = true;
                                document.querySelectorAll('.landmark_pagination li').forEach(li => li.classList.remove('active'));
                                const activeLi = document.querySelector('.landmark_pagination li[data-link="' + id.slice(1) + '"]');
                                if (activeLi) activeLi.classList.add('active');
                            }
                        });

                        // const pagination = document.querySelector('.landmark_pagination');
                        // if (pagination) {
                        //     pagination.style.opacity = foundActive ? '1' : '0';
                        // }
                    }
                });
                addPCScrollTrigger(paginationST);

                // pagination 클릭 이벤트는 한 번만 바인딩
                if (!landmarkPaginationBound) {
                    landmarkPaginationBound = true;
                    const paginationLinks = document.querySelectorAll('.landmark_pagination a');
                    paginationLinks.forEach(ele => {
                        ele.addEventListener('click', function(e){
                            e.preventDefault();

                            const label = this.getAttribute('href').replace('#', '');
                            const tl = window.landmarkTimelineMap && window.landmarkTimelineMap[label];
                            if (!tl) return;

                            const st = tl.scrollTrigger;
                            const progress = tl.labels[label] / tl.duration();
                            const targetY = st.start + (st.end - st.start) * progress;

                            gsap.to(window, {
                                scrollTo: targetY,
                                duration: 0
                            });

                            paginationLinks.forEach((x) => {
                                x.closest('li').classList.remove('active');
                            })
                            ele.closest('li').classList.add('active');
                        });
                    });
                }
            }

            function killPC() {
                pcScrollTriggers.forEach(st => st.kill());
                pcScrollTriggers = [];
            }

            function onResizePC() {
                killPC();
                setupPC();
                ScrollTrigger.refresh();
            }

            // 최초 1회 실행
            setupPC();
            window.addEventListener('resize', onResizePC);

            // matchMedia cleanup (브레이크포인트 벗어날 때 실행)
            return function() {
                window.removeEventListener('resize', onResizePC);
                killPC();
            };
        },

        // --- Mobile (가로 767px 이하) ---
        "(max-width: 767px)": function() {
            const headerH = document.querySelector('#header .gnb').clientHeight;
            const contentH = window.innerHeight - headerH;
            const vw = window.innerWidth;
            const section3ListWrapHeight = document.querySelector('.section3 .logo_list_wrap').clientHeight;
            const section3ListHeight = document.querySelector('.section3 .logo_list').clientHeight;
            const section4ListlWidth = document.querySelector('.section4 .logo_list_1').clientWidth;
            const section6ListHeight = document.querySelector('.section6 .logo_list_1').clientHeight;
            const section6ListWrapHeight = document.querySelector('.section6 .logo_list_wrap').clientHeight;

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
            });
            
            gsap.set('.lankmark_container .section3 .logo_list_wrap', { y: 20, opacity: 0 })
            gsap.set('.section4 .logo_list_1', {x: -section4ListlWidth});
            gsap.set('.section4 .logo_list_2',{x: vw});
            gsap.set('.section4 .logo_list_1, .section4 .logo_list_2', {willChange: 'transform'});

            gsap.set('.lankmark_container .section6 .logo_list_wrap ul.logo_list_1', {
                willChange: 'transform',
                ease: 'none',
                force3D: true,
            });
            gsap.set('.lankmark_container .section6 .logo_list_wrap', {left: '50%',xPercent: -50, right:'auto'});

            // section5
            gsap.set('.lankmark_container .section5 .cont1 li.divide', {width: '100%',height: '6px'});
            // section6
            gsap.set('.section6 .logo_list_1', {y: -section6ListHeight});
            gsap.set('.section6 .logo_list_2', {y: section3ListWrapHeight});

            const section3Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section3 .text_scroll_zone",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 4 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform'
                }
            });
            section3Timeline
                .to('.lankmark_container .section3 .text_wrap h4', {opacity: 1, y: 0})
                .to('.lankmark_container .section3 .text_wrap p', {opacity: 1, y: 0})
                .to('.lankmark_container .section3 .bg', {scale: 1})
                .to('.lankmark_container .section3 .bg > img', {filter: "brightness(0.35)"} ,"<")
                .to('.lankmark_container .section3 .text_wrap p', {opacity: 0})
                .to('.lankmark_container .section3 .text_wrap h4', {
                    fontSize: '40px',
                    color: 'rgba(255,255,255,1)',
                    y: getSectionTextCenterY(3)
                })
                .to('.lankmark_container .section3 .text_wrap', {top: '20%'})
                .to({},{duration: 0.2})
                .to('.lankmark_container .section3 .logo_list_wrap', {y: 0, opacity: 1})
                .to({},{});

            // section4 
            const section4Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section4",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 8 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform',
                }
            });
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
                .addLabel('hotel')
                .to('.section4 .bg_filter', {backdropFilter: "brightness(0.45) blur(5px)"})
                .to('.section4 .intro h4', {y: getSectionTextCenterY(4) - 120})
                // .to('.section4 .intro ', {top: '25%'},"<")
                .to('.section4 .cont', {
                    opacity: 1,
                })
                .to('.section4 .logo_list_1', {x: Math.round(vw), duration: 3, force3D: true, ease: 'none'})
                .to('.section4 .logo_list_2', {
                    x: Math.round(-section4ListlWidth),
                    duration: 3,
                    force3D: true,
                    ease: 'none',
                }, "<")
                .to('.section4 .intro h4', {y: getSectionTextCenterY(4)}, "<90%")
                .to({},{})

            // section5
            const cont2List = gsap.utils.shuffle(
                gsap.utils.toArray('.section5 .cont2 li')
            );
            const section5Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section5",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 8 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform'
                }
            });
            section5Timeline
                .to('.section5 .intro h4', {opacity: 1, y: 0})
                .to('.section5 .intro p', {opacity: 1, y: 0})
                .to('.section5 .dim1', {opacity: 0})
                .to('.section5 .dim2', {opacity: 0})
                .to('.section5 .dim3', {opacity: 0})
                .to('.section5 .divide', {height: 0})
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
                .to('.section5 .intro h4', {opacity: 0.0},"<")
                .to({},{})
                .to({},{}); 
            cont2List.forEach((li, i) => {
                section5Timeline.to(li, {
                    opacity: 1,
                    duration: 0.2
                }, "<+" + (i * 0.05));
            });

            const section6Timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6 .text_scroll_zone",
                    start: 'top ' + headerH + 'px',
                    end: contentH * 4 + 'px',
                    scrub: true,
                    pin: true,
                    pinType: isMobileBrowser() ? 'fixed' : 'transform'
                }
            });
            section6Timeline
                .to('.section6 .intro h4', {opacity: 1, y: 0})
                .to('.section6 .intro p', {opacity: 1, y: 0})
                .to('.section6 .bg img', {opacity: 1})
                .to('.section6 .intro h4', {color: '#fff'},'<')
                .to('.section6 .intro p', {color: '#fff'},"<")
                .to('.section6 .intro p', {opacity: 0})
                .to('.section6 .intro h4', {
                    fontSize: '40px',
                    y: getSectionTextCenterY(4)
                })
                // .to('.section6 .intro h4', {color: '#fff'})
                .to('.section6 .bg img', {filter: 'brightness(0.5'})
                .to('.section6 .intro', {top: '20%'});

            const section6Timeline2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6 .overflow_none",
                    start: 'top ' + headerH + 'px',
                    end: '+=' + section6ListHeight * 2 + 'px',
                    scrub: true,
                    pin: true
                }
            });
            section6Timeline2
                .to('.section6 .logo_list_1', { y:section6ListWrapHeight, ease: 'none' })
                .to('.section6 .logo_list_2', { y: -section6ListHeight, ease: 'none' },"<");
        },

        // --- All Breakpoints ---
        "all": function() {
            const section1 = document.querySelector('.section1');
            if (section1) {
                section1.classList.add('active');
            }
        }
    });

});


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


