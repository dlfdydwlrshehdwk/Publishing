// 스티커 기능을 관리하는 팩토리 함수 (여러 영역에 독립적으로 적용 가능)
export function createStickerManager(area) {
  let resetFunction;
  let cleanup;
  let resizeTimeout;
  let preventNextClick = false; // 드래그 후 클릭 이벤트 방지 플래그

  const MAX_STICKERS = 16; // 화면에 최대 표시할 수 있는 스티커 수
  const activeStickers = []; // 현재 표시 중인 스티커들을 저장하는 배열
  const lastFourTypes = []; // 직전 4개 스티커 타입을 저장 (중복 방지 목적)
  let stickerSizeFactor = calculateSizeFactor(); // 초기 스티커 크기 비율 계산

  // 스티커 세트 정의: 이미지 경로와 원본 크기
  const stickerSets = {
    a: { front: './image/sticker/1.png', back: './image/sticker/back1.png', width: 80, height: 80 },
    b: { front: './image/sticker/2.png', back: './image/sticker/back2.png', width: 120, height: 120 },
    c: { front: './image/sticker/3.png', back: './image/sticker/back3.png', width: 122, height: 96 },
    d: { front: './image/sticker/4.png', back: './image/sticker/back4.png', width: 120, height: 120 },
    e: { front: './image/sticker/5.png', back: './image/sticker/back5.png', width: 186.5, height: 186.5 },
    f: { front: './image/sticker/6.png', back: './image/sticker/back6.png', width: 80, height: 80 }
  };

  const stickerArea = document.querySelector(area); // 스티커가 생성될 영역
  if (!stickerArea) return;

  // 화면 크기에 따라 스티커 비율 조정
  function calculateSizeFactor() {
    const viewportWidth = window.innerWidth;
    return viewportWidth < 576 ? 0.6 :
           viewportWidth < 768 ? 0.75 :
           viewportWidth < 992 ? 0.85 :
           viewportWidth < 1200 ? 0.9 : 1;
  }

  // 최소~최대 사이 랜덤 숫자 반환
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // 최근 사용한 타입 4개를 제외한 랜덤 스티커 선택
  function getRandomStickerSet() {
    const allTypes = Object.keys(stickerSets);
    const availableTypes = allTypes.filter(type => !lastFourTypes.includes(type));
    const randomSet = availableTypes.length ?
      availableTypes[Math.floor(Math.random() * availableTypes.length)] :
      allTypes[Math.floor(Math.random() * allTypes.length)];

    lastFourTypes.push(randomSet);
    if (lastFourTypes.length > 4) lastFourTypes.shift();

    return { ...stickerSets[randomSet], type: randomSet };
  }

  // (x, y) 위치에 스티커 생성
  function createSticker(x, y) {
    const stickerSet = getRandomStickerSet();
    const randomRotation = getRandomNumber(-60, 60); // -60도 ~ 60도 회전
    const randomScale = getRandomNumber(1, 1.2) * stickerSizeFactor; // 스티커 스케일 (1~1.2 배율)
    const adjustedWidth = stickerSet.width * randomScale;
    const adjustedHeight = stickerSet.height * randomScale;

    const fragment = document.createDocumentFragment();
    const stickerBox = document.createElement('div');
    stickerBox.className = 'sticker-box';
    stickerBox.style.position = 'absolute';
    stickerBox.style.left = `${x - (adjustedWidth / 2)}px`;
    stickerBox.style.top = `${y - adjustedHeight}px`;

    const stickerAnim = document.createElement('div');
    stickerAnim.className = 'sticker-anim';
    stickerAnim.style.cssText = `
      width: ${adjustedWidth}px;
      height: ${adjustedHeight * 2}px;
      transform: rotate(${randomRotation}deg) scale(0); /* 생성 시 작게 */
      opacity: 0;
    `;

    // 앞/뒤면 템플릿 구성
    const template = `
      <div class="sticker sticker-back">
        <img src="${stickerSet.back}" alt="Sticker Back" loading="lazy">
      </div>
      <div class="sticker sticker-front">
        <img src="${stickerSet.front}" alt="Sticker Front" loading="lazy">
      </div>
    `;
    stickerAnim.innerHTML = template;
    stickerBox.appendChild(stickerAnim);

    const stickers = stickerAnim.querySelectorAll('.sticker');
    stickers.forEach(sticker => {
      sticker.style.width = `${adjustedWidth}px`;
      sticker.style.height = `${adjustedHeight}px`;
    });

    fragment.appendChild(stickerBox);
    stickerArea.appendChild(fragment);
    activeStickers.push(stickerBox);

    // 등장 애니메이션 적용
    requestAnimationFrame(() => {
      stickerAnim.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      stickerAnim.style.transform = `rotate(${randomRotation}deg) scale(1)`; // 정사이즈 + 회전
      stickerAnim.style.opacity = '1';
      requestAnimationFrame(() => {
        setTimeout(() => stickerBox.classList.add('active'), 300);
      });
    });

    // 드래그 기능은 필요시 makeDraggable(front, stickerBox) 호출
    const front = stickerAnim.querySelector('.sticker-front');
    // if (front) makeDraggable(front, stickerBox);
  }

  // 드래그 가능하도록 만드는 함수
  function makeDraggable(handleEl, moveTarget) {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let dragMoved = false;

    handleEl.addEventListener('mousedown', e => {
      e.preventDefault();
      isDragging = true;
      dragMoved = false;
      const rect = moveTarget.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      moveTarget.style.zIndex = '1000'; // 위로 올리기
    });

    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      dragMoved = true;
      const parentRect = moveTarget.parentElement.getBoundingClientRect();
      const x = e.clientX - parentRect.left - offsetX;
      const y = e.clientY - parentRect.top - offsetY;
      moveTarget.style.left = `${x}px`;
      moveTarget.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
      if (isDragging && dragMoved) {
        preventNextClick = true; // 드래그 직후 클릭 막기
      }
      isDragging = false;
      moveTarget.style.zIndex = '';
    });
  }

  // 클릭 이벤트: 클릭한 위치에 스티커 생성
  function handleClick(e) {
    if (preventNextClick) {
      preventNextClick = false;
      return;
    }

    const isRefreshBtn = e.target.closest('.btn_refresh');
    const isThumbnail = e.target.closest('.thumbnail');
    if (isRefreshBtn || isThumbnail) return;

    const targetArea = e.target.closest(area);
    if (!targetArea) return;

    const rect = targetArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const adjustedMax = window.innerWidth < 768 ? Math.floor(MAX_STICKERS * 0.75) : MAX_STICKERS;
    if (activeStickers.length >= adjustedMax) removeOldestSticker();

    createSticker(x, y);
  }

  // 창 크기 변경 시 위치 재계산
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      stickerSizeFactor = calculateSizeFactor();
      if (!stickerArea) return;

      const rect = stickerArea.getBoundingClientRect();
      activeStickers.forEach(sticker => {
        const width = parseFloat(sticker.style.width);
        const height = parseFloat(sticker.style.height) / 2;
        const x = getRandomNumber(width / 2, rect.width - width / 2);
        const y = getRandomNumber(height, rect.height - height);
        sticker.style.left = `${x - (width / 2)}px`;
        sticker.style.top = `${y - height}px`;
      });
    }, 200);
  }

  // 가장 오래된 스티커 제거
  function removeOldestSticker() {
    if (activeStickers.length > 0) {
      const oldestSticker = activeStickers.shift();
      oldestSticker.classList.add('remove');
      setTimeout(() => oldestSticker.remove(), 300);
    }
  }

  // 랜덤 위치에 스티커 여러 개 배치
  function placeRandomStickers() {
    const rect = stickerArea.getBoundingClientRect();
    const usedTypes = new Set();

    activeStickers.forEach(s => s.classList.add('remove'));
    setTimeout(() => {
      activeStickers.forEach(s => s.remove());
      activeStickers.length = 0;
      lastFourTypes.length = 0;

      const num = window.innerWidth < 768 ? 3 : 5;
      const allTypes = Object.keys(stickerSets);

      for (let i = 0; i < num; i++) {
        const available = allTypes.filter(t => !usedTypes.has(t));
        if (!available.length) break;

        const randomType = available[Math.floor(Math.random() * available.length)];
        usedTypes.add(randomType);

        const set = stickerSets[randomType];
        const scaledW = set.width * stickerSizeFactor;
        const scaledH = set.height * stickerSizeFactor;
        const margin = Math.max(scaledW, scaledH);

        const x = getRandomNumber(margin, rect.width - margin);
        const y = getRandomNumber(margin, rect.height - margin);
        createSticker(x, y);
      }
    }, 300);
  }

  // 모든 이벤트 제거 및 스티커 정리
  function cleanupAll() {
    document.removeEventListener('click', handleClick);
    window.removeEventListener('resize', handleResize);
    activeStickers.forEach(s => s.classList.add('remove'));
    setTimeout(() => {
      activeStickers.forEach(s => s.remove());
      activeStickers.length = 0;
      lastFourTypes.length = 0;
    }, 300);
  }

  // 리셋 함수 (스티커 제거 + 랜덤 생성 여부 선택)
  function reset(shouldRecreate = true) {
    activeStickers.forEach(s => s.classList.add('remove'));
    setTimeout(() => {
      activeStickers.forEach(s => s.remove());
      activeStickers.length = 0;
      lastFourTypes.length = 0;
      stickerSizeFactor = calculateSizeFactor();
      if (shouldRecreate) placeRandomStickers();
    }, 300);
  }

  // 이벤트 바인딩
  document.addEventListener('click', handleClick);
  window.addEventListener('resize', handleResize, { passive: true });

  // 외부에 제공할 인터페이스
  cleanup = cleanupAll;
  resetFunction = reset;

  return {
    reset: resetFunction,
    clear: () => resetFunction(false),
    createRandom: placeRandomStickers,
    cleanup
  };
}
