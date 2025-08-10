document.addEventListener('DOMContentLoaded', () => {

  // ========= 캐러셀 기능 =========
  function setupCarousel() {
    const slides = document.querySelectorAll('.stage .slide');
    if (!slides.length) return;

    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const desiredGap = 20; // px
    const angle = 360 / slideCount;
    const radius = ((slideWidth + desiredGap) / 2) / Math.tan(Math.PI / slideCount);

    slides.forEach((slide, i) => {
      const slideAngle = i * angle;
      slide.style.transform = `rotateY(${slideAngle + 180}deg) translateZ(${-radius}px)`;
    });
  }

  let resizeTimer; 
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupCarousel, 100);
  });

  setupCarousel();

  // ========= 텍스트 광원 효과 기능 =========
  const textWrap = document.querySelector('.text_gradient_wrap');
  // const container = document.getElementById('container')
  if (textWrap) {
    // 마우스 위치를 추적하고 그라데이션 가시성을 제어합니다.
    document.body.addEventListener('mousemove', (e) => {
      const rect = textWrap.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // 요소의 중심 좌표
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // 마우스와 요소 중심 간의 거리
      const distanceX = mouseX - centerX;
      const distanceY = mouseY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // 요소 내부에서의 마우스 상대 좌표 (그라데이션 위치용)
      const x = mouseX - rect.left;
      const y = mouseY - rect.top;

      // 거리에 따른 그라데이션 가시성 (0에서 1 사이)
      // 이 값은 조절이 필요할 수 있습니다. (예: 200px 거리에서 0, 0px 거리에서 1)
      const maxDistance = 300; // 그라데이션이 완전히 사라지는 최대 거리 (px)
      const minDistance = 0; // 그라데이션이 완전히 보이는 최소 거리 (px)
      let visibilityAlpha = 1 - (distance - minDistance) / (maxDistance - minDistance);
      visibilityAlpha = Math.max(0, Math.min(1, visibilityAlpha)); // 0과 1 사이로 클램프

      // CSS 변수 업데이트
      textWrap.style.setProperty('--mouse-x', `${x}px`);
      textWrap.style.setProperty('--mouse-y', `${y}px`);
      textWrap.style.setProperty('--gradient-visibility-alpha', visibilityAlpha);
    });

    // 마우스가 요소를 벗어났을 때, 광원을 화면 밖으로 치워 보이지 않게 합니다.
    // 이제 document.body에 mousemove 리스너가 있으므로,
    // mouseleave는 그라데이션 가시성을 0으로 설정하는 역할만 합니다.
    textWrap.addEventListener('mouseleave', () => {
      // 마우스가 요소 밖으로 나갔을 때, 그라데이션 가시성을 0으로 설정하여 숨깁니다.
      textWrap.style.setProperty('--gradient-visibility-alpha', '0');
      // 마우스 위치는 여전히 화면 밖으로 설정하여 혹시 모를 잔상을 방지합니다.
      textWrap.style.setProperty('--mouse-x', '-9999px');
      textWrap.style.setProperty('--mouse-y', '-9999px');
    });

    // 초기 상태 설정: 페이지 로드 시 그라데이션 숨기기
    textWrap.style.setProperty('--gradient-visibility-alpha', '0');
    textWrap.style.setProperty('--mouse-x', '-9999px');
    textWrap.style.setProperty('--mouse-y', '-9999px');
  }

});