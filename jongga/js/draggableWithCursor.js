export function setupDraggableWithCursor(handleEl, moveTarget, customCursor) {
  let isDragging = false;  // 드래그 상태를 나타내는 변수 (드래그 중인지 확인)
  let dragMoved = false;   // 드래그가 실제로 움직였는지 확인하는 변수
  let startX = 0;          // 드래그 시작 지점의 X 좌표 (마우스 클릭 위치)
  let startY = 0;          // 드래그 시작 지점의 Y 좌표
  let currentX = 0;        // 현재 드래그 위치의 X 좌표
  let currentY = 0;        // 현재 드래그 위치의 Y 좌표
  let mouse = window._stickerState?.mouse || { x: 0, y: 0 };  // 마우스 위치 추적
  let pos = { x: 0, y: 0 };  // 커서 애니메이션 위치
  const speed = 0.1;  // 커서 애니메이션 속도 (마우스 움직임에 대한 반응 속도)

  // moveTarget을 드래그하면서 이동하는 변환을 적용하는 함수
  function updateTransform() {
    moveTarget.style.transform = `translate(${currentX}px, ${currentY}px)`;  // 드래그하는 요소의 위치 업데이트
  }

  // 커서 애니메이션을 설정하는 부분 (마우스 위치에 따라 커서가 부드럽게 이동)
  if (!window._stickerState.cursorAnimating) {
    window._stickerState.cursorAnimating = true;
    function animateCursor() {
      pos.x += (mouse.x - pos.x) * speed;  // 현재 마우스 위치와 커서 위치 차이를 기반으로 커서 이동
      pos.y += (mouse.y - pos.y) * speed;
      customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;  // 커서의 변환 위치 설정
      requestAnimationFrame(animateCursor);  // 애니메이션 반복 실행
    }
    animateCursor();  // 최초 커서 애니메이션 시작
  }

  // 마우스 버튼을 눌렀을 때 (드래그 시작)
  handleEl.addEventListener('mousedown', (e) => {
    e.preventDefault();  // 기본 동작 방지 (예: 텍스트 선택)
    isDragging = true;    // 드래그 시작
    dragMoved = false;    // 드래그가 움직이지 않았다면 false
    startX = e.clientX - currentX;  // 드래그 시작 위치에서 현재 위치를 빼서 상대적인 시작 위치 계산
    startY = e.clientY - currentY;  // 마찬가지로 Y 좌표 계산
    moveTarget.style.zIndex = '1000';  // 드래그 중인 요소를 위로 올려서 다른 요소들보다 위에 표시
    customCursor.style.opacity = 1;  // 커서를 보이게 설정 (드래그 시작 시)
  });

  // 마우스가 움직일 때 (드래그 중에 요소를 따라다니게 함)
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;  // 드래그 중이 아니면 무시
    dragMoved = true;  // 드래그가 움직였음을 표시
    currentX = e.clientX - startX;  // 현재 마우스 위치에서 시작 위치를 빼서 상대적인 이동 값 계산
    currentY = e.clientY - startY;
    updateTransform();  // 이동 값으로 요소의 위치 업데이트
    mouse.x = e.clientX;  // 마우스 X 좌표 갱신
    mouse.y = e.clientY + window.scrollY;  // 마우스 Y 좌표 갱신 (스크롤 포함)
  });

  // 마우스를 떼었을 때 (드래그 종료)
  document.addEventListener('mouseup', () => {
    if (isDragging && dragMoved) {
      setTimeout(() => {
        window._stickerState.preventNextClick = true;  // 드래그 후 클릭 방지
      }, 0);
    }
    isDragging = false;  // 드래그 종료
    moveTarget.style.zIndex = '';  // z-index 초기화
    customCursor.style.opacity = 0;  // 커서 숨김 (드래그 종료 후)
  });

  // 마우스가 드래그 가능한 요소에 들어갔을 때 (커서 보이게)
  handleEl.addEventListener('mouseenter', (e) => {
    customCursor.style.opacity = 1;  // 커서 보이기
    mouse.x = e.clientX;  // 마우스 위치 갱신
    mouse.y = e.clientY + window.scrollY;  // 마우스 Y 좌표 갱신 (스크롤 포함)
    pos.x = mouse.x;  // 커서 위치 초기화
    pos.y = mouse.y;
    customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;  // 커서 위치를 마우스 위치로 맞추기
  });

  // 마우스가 드래그 가능한 요소를 벗어났을 때 (커서 숨기기)
  handleEl.addEventListener('mouseleave', () => {
    if (!isDragging) {
      customCursor.style.opacity = 0;  // 드래그 중이 아니면 커서 숨기기
    }
  });

  // 드래그 가능한 요소 위에서 마우스 이동 시, 커서 위치 갱신
  handleEl.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;  // 마우스 X 좌표 갱신
    mouse.y = e.clientY + window.scrollY;  // 마우스 Y 좌표 갱신
  });
}
