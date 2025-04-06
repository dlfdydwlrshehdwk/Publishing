document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('section03_canvas');
  const c = canvas.getContext('2d');
  const videoWrap = document.querySelector('.section03 .video_wrap');

  // 캔버스를 .video_wrap 요소 크기에 맞게 조절
  function resizeCanvas() {
    const rect = videoWrap.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resizeCanvas(); // 페이지 로드 시 초기 크기 설정
  window.addEventListener('resize', resizeCanvas); // 브라우저 리사이즈 시 캔버스 크기 갱신

  // 마우스 초기 위치를 화면 밖으로 설정 (반응 없게 하기 위함)
  let mouseX = -1000, mouseY = -1000;

  // 마우스가 움직일 때 현재 캔버스 내 마우스 위치 저장
  window.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  // 원 클래스 정의
  function Circle(x, y, radius, image) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = image;
    this.xVelocity = (Math.random() - 0.5) * 3; // 초기 X축 속도: -1.5 ~ 1.5 사이 무작위
    this.yVelocity = (Math.random() - 0.5) * 3; // 초기 Y축 속도: -1.5 ~ 1.5 사이 무작위
    this.originalRadius = radius; // 나중에 크기 복원용
    const speedThreshold = 0.5; // 마찰 적용을 시작할 속도 기준

    this.angle = 0; // ← 회전 각도 누적용
    this.rotationSpeed = (Math.random() - 0.5) * 0.1; // ← 회전 속도

    this.update = function () {
      // 위치 업데이트
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      this.angle += this.rotationSpeed;

      // 화면 벽에 닿으면 방향 반전
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.xVelocity = -this.xVelocity;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.yVelocity = -this.yVelocity;
      }

      // 속도가 일정 이상이면 감속 (마찰)
      const speed = Math.sqrt(this.xVelocity ** 2 + this.yVelocity ** 2);
      if (speed > speedThreshold) {
        this.xVelocity *= 0.98; // 1%씩 감속
        this.yVelocity *= 0.98;
      }

      // 마우스에 가까울수록 반발력 발생
      let distanceX = this.x - mouseX;
      let distanceY = this.y - mouseY;
      let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      let minDistance = 300; // 마우스 반응 범위 (px)

      if (distance < minDistance) {
        // 거리의 제곱에 반비례한 힘 계산
        let force = (minDistance / (distance * distance)) * 1;
        this.xVelocity += force * (distanceX / distance); // X축으로 반발
        this.yVelocity += force * (distanceY / distance); // Y축으로 반발
      }

      this.draw(); // 그리기 호출
    };

    this.draw = function () {
      const size = this.radius * 2;
      const angle = Math.atan2(this.yVelocity, this.xVelocity); // ← 이동 방향의 각도

      c.save();
      c.translate(this.x, this.y);
      c.rotate(this.angle); // ← 누적된 회전 각도 사용
    
      c.beginPath();
      c.arc(0, 0, this.radius, 0, Math.PI * 2);
      c.closePath();
      c.clip();
    
      if (this.image.complete && this.image.naturalWidth !== 0) {
        c.drawImage(this.image, -this.radius, -this.radius, size, size);
      }

      c.restore(); // clip 영역 해제
    };
  }

  // 사용할 이미지 경로들
  const imgPaths = [
    { radius: 25, src: './image/shadow/section03_1.png' },
    { radius: 30, src: './image/shadow/section03_2.png' },
    { radius: 40, src: './image/shadow/section03_3.png' },
    { radius: 25, src: './image/shadow/section03_4.png' },
    { radius: 25, src: './image/shadow/section03_5.png' },
    { radius: 25, src: './image/shadow/section03_6.png' },
    { radius: 25, src: './image/shadow/section03_7.png' },
    { radius: 25, src: './image/shadow/section03_8.png' }
  ];

  // 이미지들을 비동기로 로드 후 모두 완료되면 시작
  const loadedImages = [];
  let loadedCount = 0;

  imgPaths.forEach(item => {
    const img = new Image();
    img.onload = () => {
      loadedImages.push({img: img, radius:item.radius}); // 로딩된 이미지 저장
      loadedCount++;
      if (loadedCount === imgPaths.length) {
        init(); // 모든 이미지 로드 완료되면 시작
      }
    };
    img.onerror = () => {
      console.error(`이미지 로드 실패: ${src}`);
      loadedCount++;
      if (loadedCount === imgPaths.length) {
        init(); // 실패해도 전체 카운트가 맞으면 시작
      }
    };
    img.src = item.src; // 이미지 로드 시작
  });

  let circles = [];

  // 원 생성 및 애니메이션 시작
  function init() {
    loadedImages.forEach(({img, radius}) => {
      circles.push(new Circle(
        Math.random() * canvas.width,              // X 위치: 캔버스 내 무작위
        Math.random() * canvas.height,             // Y 위치: 캔버스 내 무작위
        radius,                                    // 이미지 크기
        img                                        // 이미지 객체
      ));
    });

    animate(); // 루프 시작
  }

  // 애니메이션 루프
  function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화
    circles.forEach(circle => circle.update());     // 모든 원 업데이트
    requestAnimationFrame(animate);                 // 다음 프레임 예약
  }
});
