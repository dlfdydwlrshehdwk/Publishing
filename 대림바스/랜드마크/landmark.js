gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
    // --- PC (가로 768px 이상) ---
    "(min-width: 768px)": function() {
        gsap.to(".scroll_text", {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".section2",
                start: "top 60%",
                end: "bottom 40%",
                scrub: true,
                marker: true,
            },
        });
    },
    // --- Mobile (가로 767px 이하) ---
    "(max-width: 767px)": function() {
    },
    // --- All Breakpoints ---
    "all": function() {
    }
});