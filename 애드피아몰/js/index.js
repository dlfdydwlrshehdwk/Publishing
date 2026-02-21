document.addEventListener('DOMContentLoaded', function(){
    initSwiper();
    initFamilySite();
    initServiceSwitch();
    initHamburgerMenu();
    initGnbMenu();
})

function initFamilySite() {
    const familySite = document.querySelector('.family_site');
    if (!familySite) return;

    const familyBtn = familySite.querySelector('.family_btn');

    familyBtn.addEventListener('click', function () {
        familySite.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.family_site')) {
            familySite.classList.remove('open');
        }
    });
}

function initHamburgerMenu() {
    const ham = document.querySelector('.ham');
    const nowCate = document.querySelector('#now_cate');
    const gnbLinks = document.querySelectorAll('.gnb_list a[data-id]');
    const categories = document.querySelectorAll('.menu_wrap .category');
    if (!ham) return;

    ham.addEventListener('click', function() {
        this.classList.toggle('on');

        // 현재 카테고리 확인 디폴트값 -> 사이니지
        const currentCate = nowCate?.value ?? 'signage';

        // ham이 닫힐 때 (on 제거될 때) 모든 메뉴 닫기
        if (!this.classList.contains('on')) {
            gnbLinks.forEach(l => l.classList.remove('on'));
            categories.forEach(cat => cat.classList.remove('on'));

            // 카테고리별 All 메뉴도 닫기
            if (currentCate === 'signage') {
                const signageAll = document.querySelector('#signageAll');
                if (signageAll) {
                    signageAll.classList.remove('on');
                }
            } else if (currentCate === 'gift') {
                // 기프트 처리 (추후 구현)
            } else if (currentCate === 'utong') {
                // 유통 처리 (추후 구현)
            }
        } else {
            // ham이 열릴 때만 All 메뉴 열기
            if (currentCate === 'signage') {
                const signageAll = document.querySelector('#signageAll');
                if (signageAll) {
                    signageAll.classList.add('on');
                }
            } else if (currentCate === 'gift') {
                // 기프트 처리 (추후 구현)
            } else if (currentCate === 'utong') {
                // 유통 처리 (추후 구현)
            }
        }
    });
}

function initGnbMenu() {
    const gnbLinks = document.querySelectorAll('.gnb_list a[data-id]');
    const categories = document.querySelectorAll('.menu_wrap .category');
    const ham = document.querySelector('.ham');
    const nowCate = document.querySelector('#now_cate');
    if (!gnbLinks.length) return;

    gnbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const isAlreadyOn = this.classList.contains('on');
            const targetId = this.dataset.id;
            const currentCate = nowCate?.value ?? 'signage';

            // 이미 on인 링크를 다시 클릭한 경우 토글 닫기
            if (isAlreadyOn) {
                this.classList.remove('on');
                const targetCategory = document.querySelector(`#${targetId}`);
                if (targetCategory) {
                    targetCategory.classList.remove('on');
                }

                // ham도 닫기
                if (ham) {
                    ham.classList.remove('on');
                }

                // 카테고리별 All 메뉴도 닫기
                if (currentCate === 'signage') {
                    const signageAll = document.querySelector('#signageAll');
                    if (signageAll) {
                        signageAll.classList.remove('on');
                    }
                }

                return;
            }

            // 모든 gnb 링크에서 on 클래스 제거
            gnbLinks.forEach(l => l.classList.remove('on'));

            // 클릭한 요소에만 on 클래스 추가
            this.classList.add('on');

            // ham도 on 상태로 만들기
            if (ham && !ham.classList.contains('on')) {
                ham.classList.add('on');
            }

            // 현재 카테고리별 All 메뉴도 on 상태로
            if (currentCate === 'signage') {
                const signageAll = document.querySelector('#signageAll');
                if (signageAll && !signageAll.classList.contains('on')) {
                    signageAll.classList.add('on');
                }
            }

            // 모든 category에서 on 클래스 제거
            categories.forEach(cat => cat.classList.remove('on'));

            // 해당 data-id와 일치하는 category에만 on 클래스 추가
            const targetCategory = document.querySelector(`#${targetId}`);
            if (targetCategory) {
                targetCategory.classList.add('on');

                // 클릭한 링크의 가로 위치 계산 (.left_cont 기준)
                const linkRect = this.getBoundingClientRect();
                const leftCont = this.closest('.left_cont');
                const leftContRect = leftCont ? leftCont.getBoundingClientRect() : this.closest('.gnb_inner').getBoundingClientRect();
                let leftOffset = linkRect.left - leftContRect.left;

                // category 내부의 .items에 margin-left 적용
                const items = targetCategory.querySelector('.items');
                if (items) {
                    // .item의 padding-left 값 측정
                    const item = items.querySelector('.item');
                    if (item) {
                        const itemStyles = getComputedStyle(item);
                        const paddingLeft = parseFloat(itemStyles.paddingLeft) || 0;
                        leftOffset -= paddingLeft;
                    }

                    items.style.marginLeft = `${leftOffset}px`;
                }
            }
        });
    });
}

// 메뉴 초기화 함수
function resetAllMenus() {
    const gnbLinks = document.querySelectorAll('.gnb_list a[data-id]');
    const ham = document.querySelector('.ham');
    const categories = document.querySelectorAll('.menu_wrap .category');
    const nowCate = document.querySelector('#now_cate');
    const currentCate = nowCate?.value ?? 'signage';

    // 모든 gnb 링크의 on 제거
    gnbLinks.forEach(l => l.classList.remove('on'));

    // ham의 on 제거
    if (ham) {
        ham.classList.remove('on');
    }

    // 모든 category의 on 제거
    categories.forEach(cat => cat.classList.remove('on'));

    // 카테고리별 All 메뉴도 닫기
    if (currentCate === 'signage') {
        const signageAll = document.querySelector('#signageAll');
        if (signageAll) {
            signageAll.classList.remove('on');
        }
    } else if (currentCate === 'gift') {
        // 기프트 처리 (추후 구현)
    } else if (currentCate === 'utong') {
        // 유통 처리 (추후 구현)
    }
}

function initServiceSwitch() {
    const buttons = document.querySelectorAll('.service_switch button');
    const nowCate = document.querySelector('#now_cate');
    const header = document.querySelector('#header');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const color = this.dataset.color;
            const cate = this.dataset.cate;
            const currentCate = nowCate?.value ?? 'signage';

            // 기존과 다른 카테고리로 변경하는 경우만 초기화
            if (currentCate !== cate) {
                resetAllMenus();
            }

            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            document.documentElement.style.setProperty('--primary', color);

            if (nowCate) {
                nowCate.value = cate;
            }

            if (header) {
                header.classList.remove('signage', 'gift', 'utong');
                header.classList.add(cate);
            }
        });
    });
}

function initSwiper() {
    const mainBannerSwiper = new Swiper('.main_banner .swiper', {
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".main_banner .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.main_banner .swiper-button-next',
            prevEl: '.main_banner .swiper-button-prev',
        },
        breakpoints: {
            0: {

            },
            768: {

            }
        }
    })

    const topBannerSwiper = new Swiper('.top_banner .swiper', {
        slidesPerView: 1,
        // autoplay: {
            // delay: 5000,
        // },
        loop: true,

        pagination: {
            el: ".top_banner .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.top_banner .swiper-button-next',
            prevEl: '.top_banner .swiper-button-prev',
        },
        breakpoints: {
            0: {

            },
            768: {

            }
        }
    });

    document.querySelectorAll('.product_cont').forEach(cont => {
        const isInNewProduct = cont.closest('.new_product_cont') !== null;
        const isInMoWideProduct = cont.closest('.mo_wide_product_cont') !== null;
        new Swiper(cont.querySelector('.product_list.swiper'), {
            slidesPerView: isInNewProduct ? 3 : 5,
            spaceBetween: 15,
            // loop: true,
            navigation: {
                nextEl: cont.querySelector('.swiper-button-next'),
                prevEl: cont.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                0: {
                    slidesPerView: isInNewProduct ? 2.3 : (isInMoWideProduct ? 1.4 : 2.3),
                    spaceBetween: 8,
                    slidesOffsetBefore: 16,
                    slidesOffsetAfter: 16,
                },
                768: {
                    slidesPerView: isInNewProduct ? 3 : 5,
                    spaceBetween: 15,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                }
            }
        });
    });
}


