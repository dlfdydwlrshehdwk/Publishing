document.addEventListener('DOMContentLoaded', function(){
    const section1Swiper = new Swiper(".section1_swiper", {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4000
        },
        speed: 500,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
        on: {
            init: function () {
                const slide = this.slides[this.activeIndex];
                const assets = slide.querySelectorAll('.asset');
                const model = slide.querySelector('.asset_model');
    
                // asset만 초기화
                assets.forEach(el => {
                    el.style.transition = 'none';
                    el.style.opacity = 0;
                });
                if(model){
                    model.style.transition = 'none';
                    model.style.opacity = 0;
                }
    
                // asset 순차 등장 (0.7s 간격)
                assets.forEach((el, i) => {
                    setTimeout(() => {
                        el.style.transition = 'opacity .5s';
                        el.style.opacity = 1;
                    }, i * 500);
                });
    
                // 모델은 1초 뒤 등장
                setTimeout(() => {
                    if (model) {
                        model.style.transition = 'opacity .5s';
                        model.style.opacity = 1;
                    }
                }, 1000);
            },
            slideChangeTransitionStart: function () {
                const slide = this.slides[this.activeIndex];
                const assets = slide.querySelectorAll('.asset');
                const model = slide.querySelector('.asset_model');
    
                // asset만 초기화 (.bg 건들지 않음)
                assets.forEach(el => {
                    el.style.transition = 'none';
                    el.style.opacity = 0;
                });
                if(model){
                    model.style.transition = 'none';
                    model.style.opacity = 0;
                }
            },
    
            slideChangeTransitionEnd: function () {
                const slide = this.slides[this.activeIndex];
                const assets = slide.querySelectorAll('.asset');
                const model = slide.querySelector('.asset_model');
    
                // asset 순차 등장 (0.7s 간격)
                assets.forEach((el, i) => {
                    setTimeout(() => {
                        el.style.transition = 'opacity .5s';
                        el.style.opacity = 1;
                    }, i * 500);
                });
    
                // 모델은 1초 뒤 등장
                setTimeout(() => {
                    if (model) {
                        model.style.transition = 'opacity .5s';
                        model.style.opacity = 1;
                    }
                }, 1000);
            }
        }
    });

    const section2Swiper = new Swiper(".section2_swiper", {
        loop: true,
        slidesPerView: 1.8,
        centeredSlides: true,
        spaceBetween: 30,
        loopAdditionalSlides: 6,
        autoplay: {
            delay: 4000
        },
        speed: 500,
        // allowTouchMove: false,
    });

    const section5Swiper = new Swiper(".section5_swiper", {
        // loop: true,
        slidesPerView: 1.15,
        centeredSlides: true,
        spaceBetween: 10,
    });

    // section3 로고 가운데 위치체크
    ScrollTrigger.create({
        trigger: ".section3 .scroll_zone",
        start: "top bottom",
        end: 'bottom bottom',
        scrub: true,
        onUpdate: self => {
            // const center = window.innerHeight / 2;
            const center = (window.innerHeight / 2);
            const listItems = gsap.utils.toArray('.scroll_zone ul li');
            const lastIndex = listItems.length - 1;
            const bgItems = gsap.utils.toArray('.section3 .bg');

            let activeFound = false;
    
            // 모든 active 초기화 함수
            const resetAll = () => {
                listItems.forEach(li => li.classList.remove('active'));
                bgItems.forEach(bg => bg.classList.remove('active'));
            };

            // 1) center 판정 (중간 스크롤 구간)
            listItems.forEach((li, index) => {
                const rect = li.getBoundingClientRect();
                const liCenter = rect.top + rect.height / 2;
                const inCenter = Math.abs(liCenter - center) < rect.height / 2;

                if (inCenter) {
                    activeFound = true;

                    resetAll();
                    li.classList.add('active');
                    bgItems[index + 1].classList.add('active');   // bg1~bg5
                }
            });

            // 2) center에 걸린 li가 없을 경우
            if (!activeFound) {

                const lastRect = listItems[lastIndex].getBoundingClientRect();
                const lastPassed = (lastRect.top + lastRect.height / 2) < center;

                resetAll();

                if (lastPassed) {
                    // 2-1) 마지막 li 지나간 상태 → bg5 유지
                    listItems[lastIndex].classList.add('active');
                    bgItems[lastIndex + 1].classList.add('active'); // bg5
                } else {
                    // 2-2) 진입 전 → bg_main 유지
                    listItems[0].classList.add('active');
                    bgItems[0].classList.add('active'); // bg_main
                }
            }
            
        }
    });

    // 탭 스크롤위치에 맞게 활성화
    // ScrollTrigger.create({
    //     trigger: 'body',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     onUpdate: (self) => {
    //         const sections = ['#section2', '#section3', '#section4', '#section5'];
    //         const tabs = document.querySelectorAll('.tabs .tab');
    //         const center = window.innerHeight / 2;
    
    //         let activeIndex = -1;
    
    //         sections.forEach((id, i) => {
    //             const sec = document.querySelector(id);
    //             if (!sec) return;
    
    //             const rect = sec.getBoundingClientRect();
    
    //             // 화면 중앙이 섹션 안에 있을 경우
    //             if (rect.top <= center && rect.bottom >= center) {
    //                 activeIndex = i;
    //             }
    //         });
    
    //         // 모든 active 제거
    //         tabs.forEach(t => t.classList.remove('active'));
    
    //         // 해당 섹션이 있으면 active
    //         if (activeIndex !== -1) {
    //             tabs[activeIndex].classList.add('active');
    //         }
    //     }
    // }); 

    // section2 등장 애니메이션
    const section2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: 'top center',
        }
    }) 
    section2Timeline
    .to('.section2 .bg2', {opacity: 1})
    .to('.section2 .bg3', {opacity: 1})
    .to('.section2 .bg4', {opacity: 1})

    // section4 등장 애니메이션
    const section4Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4",
            start: 'top center',
        }
    }) 
    section4Timeline
    .to('.section4 .bg2', {opacity: 1})
    .to('.section4 .bg3', {opacity: 1})

    // section5 등장 애니메이션
    const section5Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".section5",
            start: 'top center',
        }
    }) 
    section5Timeline
    .to('.section5 .bg2', {opacity: 1})
    .to('.section5 .bg3', {opacity: 1})

})

// section4 pointer클릭
const pointer = document.querySelector('.section4 .part3 .pointer');
const popupProductDetail = document.querySelector('.section4 .popup_product_detail');
pointer.addEventListener('click', function(){
    pointer.classList.toggle('active');
})

// 영상 재생/정지
const videoWrap = document.querySelector('.video_wrap');
const video = videoWrap.querySelector('video');
const toggleBtn = videoWrap.querySelector('.img_video_toggle');

videoWrap.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggleBtn.classList.remove('video_play');
        toggleBtn.classList.add('video_pause');
    } else {
        video.pause();
        toggleBtn.classList.remove('video_pause');
        toggleBtn.classList.add('video_play');
    }
});

// 탭클릭
const tabs = document.querySelector('.scroll_container .tabs');
const tab = tabs.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab_contents');
tab.forEach((t, index) => {

    
    t.addEventListener('click', function(){
        tab.forEach(t2 => {
            t2.classList.remove('active');
        })
        t.classList.add('active');
        
        tabContents.forEach((c, i) => {
            c.style.display = (i === index) ? 'block' : 'none';
        });
    })
})