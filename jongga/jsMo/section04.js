document.addEventListener('DOMContentLoaded',function(){

  let swiper = new Swiper(".section04 .swiper", {
    slidesPerView: 1.45,
    spaceBetween: 25,
    pagination: {
      el: ".section04 .swiper-pagination",
      type: "progressbar",
    },
  });


  // 랜덤위치 동그라미 생성
  function event1(){
    const thumbnailEls = document.querySelectorAll('.thumbnail');
    
    thumbnailEls.forEach(thumbnail => {
      thumbnail.addEventListener('mouseenter', () => {
        const container = thumbnail;
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
    
        // 기존 동그라미 제거
        container.querySelectorAll('.circle').forEach(c => c.remove());
    
        const circles = [];
        const allCircles = [];
    
        // 큰 원 3개 (최소 100px, 최대 400px)
        for (let i = 0; i < 3; i++) {
          allCircles.push({
            size: 100 + Math.random() * 300, // 300px ~ 400px
            isBig: true
          });
        }
    
        // 작은 원 3개 (최소 50px, 최대 100px)
        for (let i = 0; i < 3; i++) {
          allCircles.push({
            size: 50 + Math.random() * 50, // 50px ~ 100px
            isBig: false
          });
        }
    
        // 랜덤 순서로 섞기
        allCircles.sort(() => Math.random() - 0.5);
    
        allCircles.forEach(info => {
          const radius = info.size / 2;
          let x, y, attempts = 0;
          let overlaps;
    
          // 겹칠 수 있도록 조건을 완화하고, 최대 50번 시도 후 생성
          do {
            // 원 위치 랜덤
            x = Math.random() * (containerWidth - info.size);
            y = Math.random() * (containerHeight - info.size);
    
            // 겹침 확인 (최소 간격을 두고 겹침 방지)
            overlaps = circles.some(c => {
              const dx = x - c.x;
              const dy = y - c.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
    
              const isBothBig = info.isBig && c.isBig;
              const isCurrentSmall = !info.isBig;
              const isTargetBig = c.isBig;
    
              let minDistance;
    
              // 큰 원끼리 조금 더 여유 있게
              if (isBothBig) {
                minDistance = radius + c.radius + 100;
              }
              // 작은 원이 큰 원 안에 들어가지 않도록
              else if (isCurrentSmall && isTargetBig) {
                minDistance = Math.abs(radius - c.radius) + 30; 
              }
              // 나머지는 느슨하게
              else {
                minDistance = radius + c.radius - 10; 
              }
    
              return distance < minDistance;
            });
    
            attempts++;
          } while (overlaps && attempts < 50); // 겹치는 조건을 조금 완화하여 원이 다 생성되게
    
          // 50번 이하로 시도했을 때, 원을 추가
          if (attempts < 50) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            if (info.isBig) {
              circle.classList.add('big');
            } else {
              circle.classList.add('small');
            }
    
            circle.style.width = `${info.size}px`;
            circle.style.height = `${info.size}px`;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
    
            container.appendChild(circle);
    
            // 원 보이기 위한 애니메이션 트리거
            requestAnimationFrame(() => {
              circle.classList.add('show');
            });
    
            circles.push({ x, y, radius });
          } else {
            // 만약 원을 배치할 수 없으면 강제로 그리도록 처리
            const circle = document.createElement('div');
            circle.classList.add('circle');
            if (info.isBig) {
              circle.classList.add('big');
            } else {
              circle.classList.add('small');
            }
    
            const forcedX = Math.random() * (containerWidth - info.size);
            const forcedY = Math.random() * (containerHeight - info.size);
    
            circle.style.width = `${info.size}px`;
            circle.style.height = `${info.size}px`;
            circle.style.left = `${forcedX}px`;
            circle.style.top = `${forcedY}px`;
    
            container.appendChild(circle);
            requestAnimationFrame(() => {
              circle.classList.add('show');
            });
          }
        });
      });
    
      // mouseleave 시 동그라미 제거
      thumbnail.addEventListener('mouseleave', () => {
        thumbnail.querySelectorAll('.circle').forEach(c => c.remove());
      });
    });
  } 

  // 고정위치 동그라미 생성
  function event2(){
    const thumbnailEls = document.querySelectorAll('.thumbnail');

    thumbnailEls.forEach(thumbnail => {
      let timeoutIds = []; // setTimeout ID들을 저장해두고 취소하기 위함

      thumbnail.addEventListener('mouseenter', () => {
        const circles = [...thumbnail.querySelectorAll('.circle')];

        // 원들을 랜덤 순서로 섞기
        circles.sort(() => Math.random() - 0.5);

        // 이전에 설정된 setTimeout을 모두 취소 (애니메이션이 중복 실행되지 않도록)
        timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        timeoutIds = [];

        // 원을 순차적으로 커지도록 애니메이션을 딜레이를 주어서 실행
        circles.forEach((circle, index) => {
          const randomDelay = 50 + Math.random() * 50; // 50ms ~ 100ms

          // 딜레이로 순서대로 커지기
          const timeoutId = setTimeout(() => {
            circle.classList.add('show');
          // }, index * 100); // 각 원에 딜레이를 주어 순차적으로 애니메이션 시작
          }, index * randomDelay); // 각 원에 랜덤딜레이를 주어 순차적으로 애니메이션 시작

          timeoutIds.push(timeoutId); // setTimeout ID 저장
        });
      });
    
      thumbnail.addEventListener('mouseleave', () => {
        timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        timeoutIds = [];

        // 한번에 사라지기
        const circles = [...thumbnail.querySelectorAll('.circle')];
        circles.forEach(c => {
          c.classList.remove('show');
        });

        // // 하나씩 사라지기
        // const circles = [...thumbnail.querySelectorAll('.circle')];
        // circles.forEach((circle, index) => {
        //   // 50ms에서 100ms 사이의 랜덤 딜레이
        //   const randomDelay = 50 + Math.random() * 50; // 50ms ~ 100ms
        //   const timeoutId = setTimeout(() => {
        //     circle.classList.remove('show');
        //   // }, 100 * index); // 각 원에 딜레이를 주어 순차적으로 애니메이션 종료
        //   }, randomDelay * index); // 각 원에 랜덤딜레이를 주어 순차적으로 애니메이션 종료
        //   timeoutIds.push(timeoutId); // setTimeout ID 저장
        // });
      });
    });
    
  }

  // event1();
  // event2();

  const cursorBox = document.querySelector('.section04 .custom_cursor');
  const cursorZone = document.querySelector('.section04 .tit');

  // 커서 이벤트
  // 마우스 좌표와 현재 커서 위치 저장
  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };
  let isInside = false;

  // 따라가는 속도 (0.05 ~ 0.2 정도가 자연스럽고 부드러움)
  const speed = 0.1;

  // 마우스가 cursorZone에 들어오면 커서 박스를 보이게 함
  cursorZone.addEventListener('mouseenter', (e) => {
    cursorBox.style.opacity = 1;
    isInside = true;

    // 커서 박스의 초기 위치를 마우스 위치로 설정
    mouse.x = e.clientX;
    mouse.y = e.clientY + window.scrollY;
    pos.x = mouse.x;
    pos.y = mouse.y;
    cursorBox.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  });

  // 마우스가 cursorZone을 벗어나면 커서 박스를 숨김
  cursorZone.addEventListener('mouseleave', () => {
    cursorBox.style.opacity = 0;
    isInside = false;
  });

  // 마우스가 움직일 때 좌표 저장
  cursorZone.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY + window.scrollY;
  });

  // 다음 프레임 요청
  // 애니메이션 루프: 매 프레임마다 커서 박스를 부드럽게 이동
  function animateCursor() {
    if (isInside) {
      // 현재 위치에서 마우스 위치로 부드럽게 이동 (lerp 방식)
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      // 커서 박스 위치 갱신
      cursorBox.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
})

