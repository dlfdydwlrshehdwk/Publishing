gsap.registerPlugin(ScrollTrigger);

// 1. 고정 레이어 내부 애니메이션 타임라인
const tl = gsap.timeline({ paused: true });

// 예시 애니메이션 (필요에 따라 자유롭게 변경 가능)
tl.to(".fixed-inner .box", { x: 200 })
  .to(".fixed-inner .box", { rotation: 180 })
  .to(".fixed-inner .box", { scale: 1.4 });

// 2. 스크롤 구간과 고정 레이어 연결
ScrollTrigger.create({
    trigger: ".anim-section",
    start: "top top",      // anim-section top == viewport top
    end: "bottom top",     // anim-section bottom == viewport top (500vh 끝)
    scrub: true,

    // 이 구간에 들어왔을 때만 고정 레이어를 보이게 함
    onEnter: function () {
        gsap.to(".fixed-layer", { autoAlpha: 1, duration: 0.2 });
    },

    // 스크롤 진행 비율(0~1)을 타임라인에 그대로 매핑
    onUpdate: function (self) {
        tl.progress(self.progress);
    },

    // 500vh 구간을 벗어나 아래로 내려간 순간 → 완전히 숨김
    onLeave: function () {
        gsap.to(".fixed-layer", { autoAlpha: 0, duration: 0.2 });
    },

    // 아래에서 다시 위로 올라와서 anim-section 재진입 시 → 다시 보이게
    onEnterBack: function () {
        gsap.to(".fixed-layer", { autoAlpha: 1, duration: 0.2 });
    },

    // anim-section 위로 완전히 벗어났을 때 (intro 쪽으로 올라갔을 때) → 숨김
    onLeaveBack: function () {
        gsap.to(".fixed-layer", { autoAlpha: 0, duration: 0.2 });
    }
});
