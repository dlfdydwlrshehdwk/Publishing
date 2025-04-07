export function setupDraggableWithCursor(handleEl, moveTarget, customCursor) {
    let isDragging = false;
    let dragMoved = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };
    let speed = 0.1;
    let isInside = false;
  
    // transform 기반 이동
    function updateTransform() {
      moveTarget.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
  
    if (!window._cursorAnimationStarted) {
      window._cursorAnimationStarted = true;
      function animateCursor() {
        pos.x += (mouse.x - pos.x) * speed;
        pos.y += (mouse.y - pos.y) * speed;
        customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        requestAnimationFrame(animateCursor);
      }
      animateCursor();
    }
  
    handleEl.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
      dragMoved = false;
  
      // 마우스 위치 기준 시작 좌표 계산
      startX = e.clientX - currentX;
      startY = e.clientY - currentY;
  
      moveTarget.style.zIndex = '1000';
      customCursor.style.opacity = 1;
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      dragMoved = true;
  
      currentX = e.clientX - startX;
      currentY = e.clientY - startY;
      updateTransform();
  
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  
    document.addEventListener('mouseup', () => {
      if (isDragging && dragMoved) {
        window.preventNextClick = true;
      }
      isDragging = false;
      moveTarget.style.zIndex = '';
      customCursor.style.opacity = 0;
    });
  
    handleEl.addEventListener('mouseenter', (e) => {
      isInside = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      pos.x = mouse.x;
      pos.y = mouse.y;
      customCursor.style.opacity = 1;
    });
  
    handleEl.addEventListener('mouseleave', () => {
      if (!isDragging) {
        isInside = false;
        customCursor.style.opacity = 0;
      }
    });
  
    handleEl.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  }
  