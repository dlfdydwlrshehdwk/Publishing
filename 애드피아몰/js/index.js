document.addEventListener('DOMContentLoaded', function(){
    initSwiper();
    initFamilySite();
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
    });

    document.querySelectorAll('.product_cont').forEach(cont => {
        const isInNewProduct = cont.closest('.new_product_cont') !== null;
        new Swiper(cont.querySelector('.product_list.swiper'), {
            slidesPerView: isInNewProduct ? 3 : 5,
            spaceBetween: 15,
            // loop: true,
            navigation: {
                nextEl: cont.querySelector('.swiper-button-next'),
                prevEl: cont.querySelector('.swiper-button-prev'),
            },
        });
    });



    // const swiper = new Swiper('.swiper.type01', {
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     spaceBetween: 30,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     loop: true,
    //     pagination: {
    //         el: ".type01 .swiper-pagination",
    //         type: "fraction",
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });

    // const swiper02 = new Swiper('.sec03 .swiper.type02', {
    //     slidesPerView: 5,
    //     spaceBetween: 14,
    //     loop: true,
    //     pagination: {
    //         el: '.sec03 .type02 .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });

    // const swiper03 = new Swiper('.sec04 .swiper.type02', {
    //     slidesPerView: 5,
    //     spaceBetween: 14,
    //     loop: true,
    //     pagination: {
    //         el: '.sec04 .type02 .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.sec04 .swiper-button-next',
    //         prevEl: '.sec04 .swiper-button-prev',
    //     },
    // });

    // const swiper04 = new Swiper('.sec06 .swiper.type02', {
    //     slidesPerView: 5,
    //     spaceBetween: 14,
    //     loop: true,
    //     pagination: {
    //         el: '.sec06 .type02 .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.sec06 .swiper-button-next',
    //         prevEl: '.sec06 .swiper-button-prev',
    //     },
    // });

    // const swiper07 = new Swiper('.swiper.type03', {
    //     slidesPerView: 4,
    //     spaceBetween: 13,
    //     loop: true,
    //     autoplay: {
    //         delay: 3000,
    //     },
    //     navigation: {
    //         nextEl: '.sec05 .swiper-button-next',
    //         prevEl: '.sec05 .swiper-button-prev',
    //     },
    // });
}

function buttonHover() {
    const hoverElements = document.querySelectorAll(".discover_more_btn, .swiper_buttons");
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            el.classList.add("-hover");
        });
        el.addEventListener("mouseleave", () => {
            setTimeout(() => {
                el.classList.remove("-hover");
            }, 200);
        });
    });
}

function buttonClick() {
    document.querySelectorAll(".menu_wrab").forEach(el => {
        el.addEventListener("click", () => {
            if (el.classList.contains("on")) {
                el.classList.remove("on");
                document.querySelector(".menu_box").classList.remove("on");
                return;
            }
            cateFunc(el);
            el.classList.add("on");
        });
    });

    document.querySelectorAll(".category_btn").forEach(el => {
        el.addEventListener("click", () => {
            const id = el.dataset.id;
            const target = document.getElementById(id);
            if (target.classList.contains("on")) {
                el.classList.remove("on");
                target.classList.remove("on");
                document.querySelector(".menu_box").classList.remove("on");
                document.querySelector(".menu_wrab").classList.remove("on");
                return;
            }
            cateFunc(el);
        });
    });

    document.querySelectorAll(".top").forEach(el => {
        el.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    document.querySelectorAll(".how_use_btn").forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("on");
        });
    });
}

function cateFunc(element) {
    const id = element.dataset.id;
    document.querySelectorAll(".category").forEach(el => el.classList.remove("on"));
    document.querySelectorAll(".inner_box").forEach(el => el.className = "inner_box");
    document.querySelector(".menu_box").classList.add("on");
    document.querySelector(".menu_wrab").classList.add("on");
    document.querySelector(".inner_box").classList.add(id);
    document.getElementById(id).classList.add("on");
}

function initFloating(){
    if(document.querySelector('body').classList.contains('main')){
        return ;
    }
    const footerTop = document.querySelector("footer").offsetTop;
    const header = document.querySelector("header").offsetHeight;
    const abs = document.querySelector(".abs");
    abs.style.top = header + "px";
    abs.style.height = footerTop - header +"px";
}