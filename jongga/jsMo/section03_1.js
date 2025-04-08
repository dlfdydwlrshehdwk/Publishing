document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('section03_canvas');
  const c = canvas.getContext('2d');
  const videoWrap = document.querySelector('.section03 .video_wrap');
  const cursorBox = document.querySelector('.section03 .custom_cursor');
  const videoElement = document.querySelector('.section03 video');

  // 커서 이벤트
  // 마우스 좌표와 현재 커서 위치 저장
  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };
  let isInside = false;

  // 따라가는 속도 (0.05 ~ 0.2 정도가 자연스럽고 부드러움)
  const speed = 0.1;

  // 마우스가 videoWrap에 들어오면 커서 박스를 보이게 함
  videoWrap.addEventListener('mouseenter', (e) => {
    cursorBox.style.opacity = 1;
    isInside = true;

    // 커서 박스의 초기 위치를 마우스 위치로 설정
    mouse.x = e.clientX;
    mouse.y = e.clientY + window.scrollY;
    pos.x = mouse.x;
    pos.y = mouse.y;
    cursorBox.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  });

  // 마우스가 videoWrap을 벗어나면 커서 박스를 숨김
  videoWrap.addEventListener('mouseleave', () => {
    cursorBox.style.opacity = 0;
    isInside = false;
  });

  // 마우스가 움직일 때 좌표 저장
  videoWrap.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY + window.scrollY;
  });

  // 애니메이션 루프: 매 프레임마다 커서 박스를 부드럽게 이동
  function animateCursor() {
    if (isInside) {
      // 현재 위치에서 마우스 위치로 부드럽게 이동 (lerp 방식)
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      // 커서 박스 위치 갱신
      cursorBox.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }
    // 다음 프레임 요청
    requestAnimationFrame(animateCursor);
  }

  // 애니메이션 시작
  animateCursor();

  // 캔버스 인터랙션
  // canvas 크기를 videoWrap 요소에 맞춤
  function resizeCanvas() {
    const rect = videoWrap.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 마우스 좌표 저장 (초기값은 캔버스 밖)
  let mouseX = -1000, mouseY = -1000;
  window.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  // 원(이미지) 객체 생성자
  function Circle(x, y, radius, image) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = image;
    this.xVelocity = (Math.random() - 0.5) * 3; // 초기 속도 (x축)
    this.yVelocity = (Math.random() - 0.5) * 3; // 초기 속도 (y축)
    this.rotation = 0; // 회전값 (radian 단위)

    this.update = function () {
      // 위치 갱신
      this.x += this.xVelocity;
      this.y += this.yVelocity;

      // 벽에 부딪히면 튕김 (반대 방향으로)
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.xVelocity = -this.xVelocity;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.yVelocity = -this.yVelocity;
      }

      // 마우스와의 거리 계산
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = 300; // 마우스 반응 범위

      // 마우스에 가까우면 튕겨나가는 힘을 가함
      if (distance < minDistance) {
        const force = (minDistance / (distance * distance)) * 1;
        this.xVelocity += force * (dx / distance);
        this.yVelocity += force * (dy / distance);
      }

      // 마찰력 적용: 시간이 지나면 점점 느려짐
      this.xVelocity *= 0.995;
      this.yVelocity *= 0.995;

      // 이동 속도에 따라 회전값 갱신
      this.rotation += (this.xVelocity + this.yVelocity) * 0.01;

      this.draw(); // 그리기 호출
    };

    this.draw = function () {
      const size = this.radius * 2;

      c.save(); // 캔버스 상태 저장
      c.translate(this.x, this.y); // 중심으로 이동
      c.rotate(this.rotation); // 회전 적용

      // 원 모양 클리핑
      c.beginPath();
      c.arc(0, 0, this.radius, 0, Math.PI * 2);
      c.closePath();
      c.clip();

      // 이미지가 로드된 경우에만 그리기
      if (this.image.complete && this.image.naturalWidth !== 0) {
        c.drawImage(this.image, -this.radius, -this.radius, size, size);
      }

      c.restore(); // 캔버스 상태 복원
    };
  }

  // 이미지 경로 목록
  const imgPaths = [
    './image/shadow/section03_1.png',
    './image/shadow/section03_2.png',
    './image/shadow/section03_3.png',
    './image/shadow/section03_4.png',
    './image/shadow/section03_5.png',
    './image/shadow/section03_6.png',
    './image/shadow/section03_7.png',
    './image/shadow/section03_8.png'
  ];

  // 이미지별 반지름 설정 (index 맞춰서)
  const imageSizeList = [15, 20, 25, 17, 23, 25, 15, 20];

  const loadedImages = [];
  let loadedCount = 0;



  let circles = [];

  // 원형 객체들 초기 생성
  function init() {
    loadedImages.forEach(({ img, radius }) => {
      circles.push(new Circle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        radius,
        img
      ));
    });

    animate();
  }

  // 매 프레임마다 실행되는 애니메이션 루프
  function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => circle.update());
    requestAnimationFrame(animate);
  }


  // 이미지 롤링
  function section03Marquee() {
    const marqueeWrap = document.querySelector('.section03 .marquee_wrap');
    const original = marqueeWrap.querySelector('.marquee');
  
    // clone이 이미 되어있다면 중복 방지
    if (marqueeWrap.querySelectorAll('.marquee').length > 1) return;
  
    const clone = original.cloneNode(true);
    marqueeWrap.appendChild(clone);
  
    let pos = 0;
    const speed = 1;
  
    // 요소 너비 계산 (리사이즈에도 대응하려면 함수로 따로 뺄 수 있음)
    const updateWidth = () => original.offsetWidth;
    let width = updateWidth();
  
    function animate() {
      pos -= speed;
  
      if (Math.abs(pos) >= width) {
        pos = 0;
      }
  
      original.style.transform = `translate3d(${pos}px, 0, 0)`;
      clone.style.transform = `translate3d(${pos}px, 0, 0)`;
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }


  ScrollTrigger.create({
    trigger: '.section03',
    start: 'top bottom',    // 시작 지점 section03 맨 밑바닥
    once: true,             // 한 번만 실행
    onEnter: () => {
      if (videoElement) {
        videoElement.play(); // 영상 시작
      }

      // 이미지 롤릴 실행
      section03Marquee();

      // 이미지 미리 로드
      imgPaths.forEach((src, index) => {
        const img = new Image();
        img.onload = () => {
          loadedImages.push({ img, radius: imageSizeList[index]});
          loadedCount++;
          if (loadedCount === imgPaths.length) {
            init(); // 모든 이미지 로딩 완료 시 초기화
          }
        };
        img.onerror = () => {
          console.error(`이미지 로드 실패: ${src}`);
          loadedCount++;
          if (loadedCount === imgPaths.length) {
            init(); // 실패하더라도 전체 완료 시 초기화
          }
        };
        img.src = src;
      });
    }
  });
});
