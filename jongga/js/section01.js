gsap.registerPlugin(Draggable, InertiaPlugin);

const bounds = document.querySelector(".section01");

document.querySelectorAll(".draggable").forEach((el) => {
  let shakeTween;

  Draggable.create(el, {
    type: "x,y",
    bounds: bounds,
    inertia: true,

    onDragStart: function () {
      // 드래그 시작 시 흔들기 효과 시작
      shakeTween = gsap.to(this.target, {
        rotation: () => gsap.utils.random(-5, 5),
        xPercent: () => gsap.utils.random(-1, 1),
        yPercent: () => gsap.utils.random(-1, 1),
        duration: 0.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    },

    onDragEnd: function () {
      // 흔들기 멈추고 위치 정리
      shakeTween.kill();
      gsap.to(this.target, {
        rotation: 0,
        xPercent: 0,
        yPercent: 0,
        duration: 0.2,
        ease: "power2.out"
      });
    },

    onRelease: function () {
      // 이건 inertia 덕분에 자연스럽게 던져지는 효과가 남아있음
      // bounds 옵션 덕분에 .section01 밖으로 나가지 않음
    }
  });
});
