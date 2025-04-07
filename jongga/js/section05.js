// import {createStickerManager} from './initializeSticker.js';

// const section05Sticker = createStickerManager('.section05 .sticker_wrap');
// // GSAP 플러그인 등록 (Draggable, InertiaPlugin 사용을 위해)
// gsap.registerPlugin(Draggable, InertiaPlugin);

// document.addEventListener('DOMContentLoaded', () => {
//   // 알파벳 래퍼의 초기 클론 생성 (리셋 시 사용)
//   const jonggaClone = document.querySelector('.section05 .alphabet_wrap .wrap').cloneNode(true);

//   // 드래그 가능한 영역 설정
//   const bounds = document.querySelector(".section05");

//   // 커서 요소 및 위치 관련 변수 정의
//   const customCursor = document.querySelector('.section05 .custom_cursor');
//   let mouse = { x: 0, y: 0 }; // 실제 마우스 위치
//   let pos = { x: 0, y: 0 };   // 커서가 따라가는 위치
//   let isInside = false;       // 마우스가 대상 영역 안에 있는지 여부
//   let isDragging = false;     // 드래그 중인지 여부
//   let speed = 0.1;            // 커서 따라가는 속도
//   let thumbnailIndex = 0;     // 선택된 썸네일 인덱스

//   // 커서 움직임을 부드럽게 애니메이션하는 함수 (무한 반복)
//   function animateCursor() {
//     if (isInside) {
//       pos.x += (mouse.x - pos.x) * speed;
//       pos.y += (mouse.y - pos.y) * speed;
//       customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//     }
//     requestAnimationFrame(animateCursor);
//   }
//   animateCursor(); // 커서 애니메이션 최초 실행

//   // 각 알파벳 요소에 대해 Draggable 기능 적용
//   function initDraggables() {
//     document.querySelectorAll(".draggable1").forEach((el) => {
//       let lastX = 0; // 이전 X 좌표
//       let lastTime = Date.now(); // 이전 프레임 시간
//       let currentTilt = 0; // 현재 회전 값

//       Draggable.create(el, {
//         type: "x,y",        // X, Y 방향 드래그 허용
//         bounds: bounds,     // 드래그 가능한 영역 제한
//         inertia: true,      // 관성 효과 사용

//         // 드래그 시작 시 호출
//         onDragStart: function () {
//           isDragging = true; // 드래그 중 플래그 설정
//         },

//         // 드래그 중 호출
//         onDrag: function () {
//           // 커서 위치를 드래그 포인터 위치로 업데이트
//           mouse.x = this.pointerX;
//           mouse.y = this.pointerY;

//           // 드래그 속도를 계산하여 회전 효과 적용
//           const now = Date.now();
//           const deltaTime = (now - lastTime) / 1000;
//           const velocityX = (this.x - lastX) / deltaTime;
//           const targetTilt = gsap.utils.clamp(-5, 5, velocityX * -0.01);
//           currentTilt = gsap.utils.interpolate(currentTilt, targetTilt, 0.1);

//           // 회전 애니메이션 적용
//           gsap.to(this.target, {
//             rotation: currentTilt,
//             duration: 0.1,
//             ease: "power1.out"
//           });

//           // 현재 좌표 및 시간 저장
//           lastX = this.x;
//           lastTime = now;
//         },

//         // 드래그 종료 시 호출
//         onDragEnd: function () {
//           isDragging = false; // 드래그 중 플래그 해제
//         }
//       });
//     });
//   }

//   // 커서 대상 영역 설정 및 마우스 이벤트 처리
//   function setupCustomCursorZones() {
//     const cursorZones = document.querySelectorAll('.section05 .alphabet');

//     cursorZones.forEach(zone => {
//       // 마우스가 영역에 진입할 때
//       zone.addEventListener('mouseenter', (e) => {
//         customCursor.style.opacity = 1;
//         isInside = true;
//         mouse.x = e.clientX;
//         mouse.y = e.clientY + window.scrollY;
//         pos.x = mouse.x;
//         pos.y = mouse.y;
//         customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//       });

//       // 마우스가 영역을 벗어날 때
//       zone.addEventListener('mouseleave', () => {
//         customCursor.style.opacity = 0;
//         isInside = false;
//       });

//       // 마우스가 영역 안에서 움직일 때
//       zone.addEventListener('mousemove', (e) => {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY + window.scrollY;
//       });
//     });
//   }

//   // 새로고침 버튼 클릭 시 리셋
//   const section05BtnRefresh = document.querySelector('.section05 .btn_refresh');
//   section05BtnRefresh.addEventListener('click', () => {
//     section05Reset();
//     section05Sticker.reset(true);
//   });

//   // 썸네일 클릭 이벤트 설정
//   const section05Thumbnails = document.querySelectorAll('.section05 .thumbnail_list > li');
//   section05Thumbnails.forEach((list, index) => {
//     // 초기 선택 상태 저장
//     if (list.classList.contains('active')) {
//       thumbnailIndex = index;
//     }

//     list.addEventListener('click', () => {
//       // 선택된 썸네일의 인덱스를 저장하고 배경 이미지 변경
//       document.querySelectorAll('.section05 .sticker-box').forEach(ele=>{
//         ele.remove();
//       })
//       thumbnailIndex = index;
//       section05Sticker.reset(true);
//       document.querySelector('.section05 .bg img').src = `./image/section5_bg_${thumbnailIndex + 1}.png`;
//       section05Reset(); // 리셋 실행
//     });
//   });

//   // section05를 리셋하고 커서/드래그를 재설정하는 함수
//   function section05Reset() {
//     const wrap = document.querySelector('.section05 .alphabet_wrap');
//     wrap.innerHTML = ''; // 기존 내용 제거
//     const newClone = jonggaClone.cloneNode(true); // 초기 복사본 복원
//     wrap.appendChild(newClone);
//     initDraggables(); // 드래그 기능 재설정
//     setupCustomCursorZones(); // 커서 영역 재설정
//   }

//   // 초기 실행
//   initDraggables();
//   setupCustomCursorZones();

//   ScrollTrigger.create({
//     trigger: '.section05',
//     start: 'top center',    // 시작 지점 section03 맨 밑바닥
//     once: true,             // 한 번만 실행
//     onEnter: () => {
//       section05Sticker.createRandom();
//     }
//   });
// });

// section05.js - 안정적인 custom_cursor 애니메이션 구조로 리팩토링
import { createStickerManager } from './initializeSticker.js';
import { setupDraggableWithCursor } from './draggableWithCursor.js';

gsap.registerPlugin(Draggable, InertiaPlugin);

const section05Sticker = createStickerManager('.section05 .sticker_wrap');

document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.querySelector('.custom_cursor_sticker');
  const bounds = document.querySelector('.section05');
  const jonggaClone = document.querySelector('.section05 .alphabet_wrap .wrap').cloneNode(true);

  let thumbnailIndex = 0;

  // ✅ 마우스 위치 및 커서 위치 추적 객체
  const mouse = { x: 0, y: 0 };
  const pos = { x: 0, y: 0 };
  const speed = 0.1;

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animateCursor(cursorEl, speed = 0.1) {
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
  
    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  
    function loop() {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      cursorEl.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      requestAnimationFrame(loop);
    }
  
    loop();
  }
  
  animateCursor(document.querySelector('.custom_cursor_sticker'));

  // Draggable + 커서 기능 통합 적용
  function initDraggables() {
    document.querySelectorAll('.section05 .draggable1').forEach((el) => {
      setupDraggableWithCursor(el, el, customCursor);
    });
  }

  // 커서 영역 반응 설정 (opacity 조절만)
  function setupCustomCursorZones() {
    document.querySelectorAll('.section05 .alphabet').forEach(zone => {
      zone.addEventListener('mouseenter', () => {
        customCursor.style.opacity = 1;
      });
      zone.addEventListener('mouseleave', () => {
        customCursor.style.opacity = 0;
      });
    });
  }

  // 섹션 리셋 함수 (알파벳, 드래그, 커서)
  function section05Reset() {
    const wrap = document.querySelector('.section05 .alphabet_wrap');
    wrap.innerHTML = '';
    const newClone = jonggaClone.cloneNode(true);
    wrap.appendChild(newClone);
    initDraggables();
    setupCustomCursorZones();
  }

  // 리프레시 버튼
  const section05BtnRefresh = document.querySelector('.section05 .btn_refresh');
  if (section05BtnRefresh) {
    section05BtnRefresh.addEventListener('click', () => {
      section05Reset();
      section05Sticker.reset(true);
    });
  }

  // 썸네일 클릭
  document.querySelectorAll('.section05 .thumbnail_list > li').forEach((list, index) => {
    if (list.classList.contains('active')) thumbnailIndex = index;

    list.addEventListener('click', () => {
      document.querySelectorAll('.section05 .sticker-box').forEach(ele => ele.remove());
      thumbnailIndex = index;
      section05Sticker.reset(true);
      document.querySelector('.section05 .bg img').src = `./image/section5_bg_${thumbnailIndex + 1}.png`;
      section05Reset();
    });
  });

  // 초기 실행
  section05Reset();

  ScrollTrigger.create({
    trigger: '.section05',
    start: 'top center',
    once: true,
    onEnter: () => section05Sticker.createRandom()
  });
});

