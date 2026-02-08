window.onload = function () {
    initSwiper();
    buttonHover();
    buttonClick();
    initFloating();
};

function initSwiper() {
    const swiperHeaderBanner = new Swiper('header .banner_top .swiper', {
        centeredSlides: true,
        slidesPerView: "1",
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: "header .banner_top .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: 'header .banner_top .swiper-button-next',
            prevEl: 'header .banner_top .swiper-button-prev',
        },
    });

    const swiper = new Swiper('.swiper.type01', {
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".type01 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper02 = new Swiper('.sec03 .swiper.type02', {
        slidesPerView: 5,
        spaceBetween: 14,
        loop: true,
        pagination: {
            el: '.sec03 .type02 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper03 = new Swiper('.sec04 .swiper.type02', {
        slidesPerView: 5,
        spaceBetween: 14,
        loop: true,
        pagination: {
            el: '.sec04 .type02 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.sec04 .swiper-button-next',
            prevEl: '.sec04 .swiper-button-prev',
        },
    });

    const swiper04 = new Swiper('.sec06 .swiper.type02', {
        slidesPerView: 5,
        spaceBetween: 14,
        loop: true,
        pagination: {
            el: '.sec06 .type02 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.sec06 .swiper-button-next',
            prevEl: '.sec06 .swiper-button-prev',
        },
    });

    const swiper07 = new Swiper('.swiper.type03', {
        slidesPerView: 4,
        spaceBetween: 13,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.sec05 .swiper-button-next',
            prevEl: '.sec05 .swiper-button-prev',
        },
    });
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

    document.querySelectorAll("footer .selectd_txt").forEach(el => {
        el.addEventListener("click", () => {
            const selectBox = el.closest(".select_box");
            if (selectBox.classList.contains("on")) {
                selectBox.classList.remove("on");
            } else {
                selectBox.classList.add("on");
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".select_box")) {
            document.querySelectorAll(".select_box").forEach(box => box.classList.remove("on"));
        }
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