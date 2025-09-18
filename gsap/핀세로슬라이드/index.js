document.addEventListener('DOMContentLoaded', function(){
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    ScrollTrigger.config({
      ignoreMobileResize: true
    });
    
    // 모든 GSAP 애니메이션과 ScrollTrigger 설정을 포함하는 함수
    function setupAnimations() {
        const isVerticalSlide = document.querySelector('.vertical_slide_container');
        const slideH = isVerticalSlide.querySelector('.slide_item').getBoundingClientRect().height;
        const slides = isVerticalSlide.querySelectorAll('.slide_item');
        const windowH = window.innerHeight;
        const gap = (windowH - slideH) / 2;
        const pagination = isVerticalSlide.querySelector('.slide_pagination');
        const paginationItems = pagination.querySelectorAll('.pagination');
        let  timeline = null;
        // 모든 애니메이션의 초기 상태 설정
        // gsap.set()
        ScrollTrigger.matchMedia({
            
            // --- PC (가로 768px 이상) ---
            "(min-width: 768px)": function() {
                
            },
    
            // --- Mobile (가로 767px 이하) ---
            "(max-width: 767px)": function() {
                
            },
            // 모든 뷰포트 크기에서 공통으로 실행될 애니메이션
            "all": function() {
                gsap.set([
                  slides[1],slides[2]
                ],{
                  yPercent: 20,
                  opacity: 0,
                })
                const trigger = isVerticalSlide
                timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: 'top ' + gap,
                    end: '+=' + windowH * slides.length,
                    pin: true,
                    scrub: true,
                    pinType: 'fixed',
                    markers: true,
                    id: 'verticalPin',
                    onEnter: () => {
                        showPagination();
                    },
                    onEnterBack: () => {
                        showPagination();
                    },
                    onLeave: () => {
                        hidePagination();
                    },
                    onLeaveBack: () => {
                        hidePagination();
                    },
                }
                });
                timeline.to({},{
                  duration: 0.6,
                    onUpdate: function(){
                      const progress = this.progress();
                      paginationItems[0].querySelector('.bar').style.width = progress * 100 + '%'
                      paginationItems[0].classList.toggle('active', progress > 0 && progress < 1)
                    },
                })
                timeline.addLabel('slide1',">-.00001");
                slides.forEach((slide, i) => {
                  const nextSlide = slides[i + 1];

                  if (!nextSlide) return;

                  timeline.to(slide, {
                    scale: 0.9,
                    filter: "blur(10px)",
                    opacity: 0,
                    yPercent: -20,
                    duration: 0.5,
                    onUpdate: () => {
                      
                    }
                  });

                  timeline.to(nextSlide, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.6,
                    onUpdate: function(){
                      const progress = this.progress();
                      paginationItems[i + 1].querySelector('.bar').style.width = this.progress() * 100 + '%'
                      paginationItems[0].classList.remove('acitve')
                      if(i + 1 == slides.length - 1) {
                        paginationItems[i + 1].classList.toggle('active', progress > 0)
                      } else {
                        paginationItems[i + 1].classList.toggle('active', progress > 0 && progress < 1)
                      }
                    }
                  }, "<0.2");

                  timeline.addLabel(`slide${i + 2}`);
                });
                timeline.to({},{duration:0.1})
            }
        });
        function showPagination(){
            const pagination = isVerticalSlide.querySelector('.slide_pagination')
            pagination.classList.add('active')
        }
        function hidePagination(){
            const pagination = isVerticalSlide.querySelector('.slide_pagination')
            pagination.classList.remove('active')
        }
        
        const st = ScrollTrigger.getById('verticalPin');
        paginationItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                const progress = timeline.labels[`slide${i+1}`] / timeline.duration();
                const scrollY = st.start + (st.end - st.start) * progress;

                gsap.to(window, {
                  duration: 1,
                  // scrollTo: scrollY,
                  scrollTo: i == 0 ? scrollY - 1 : scrollY,
                  ease: "power2.inOut",
                });
            })
        })
        
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
  
  