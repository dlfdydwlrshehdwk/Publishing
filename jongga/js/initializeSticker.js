export function createStickerManager(area) {
  
    let resetFunction;
    let cleanup;
    let resizeTimeout;
    let preventNextClick = false;
    const customCursor = document.querySelector(area).closest('.section').querySelector('.custom_cursor');

    const MAX_STICKERS = 16;
    const activeStickers = [];
    const lastFourTypes = [];
    let stickerSizeFactor = calculateSizeFactor();
  
    const stickerSets = {
      a: { front: './image/sticker/1.png', back: './image/sticker/back1.png', width: 80, height: 80 },
      b: { front: './image/sticker/2.png', back: './image/sticker/back2.png', width: 120, height: 120 },
      c: { front: './image/sticker/3.png', back: './image/sticker/back3.png', width: 122, height: 96 },
      d: { front: './image/sticker/4.png', back: './image/sticker/back4.png', width: 120, height: 120 },
      e: { front: './image/sticker/5.png', back: './image/sticker/back5.png', width: 186.5, height: 186.5 },
      f: { front: './image/sticker/6.png', back: './image/sticker/back6.png', width: 80, height: 80 }
    };
  
    const stickerArea = document.querySelector(area);
    if (!stickerArea) return;
  
    function calculateSizeFactor() {
      const viewportWidth = window.innerWidth;
      return viewportWidth < 576 ? 0.6 :
             viewportWidth < 768 ? 0.75 :
             viewportWidth < 992 ? 0.85 :
             viewportWidth < 1200 ? 0.9 : 1;
    }
  
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  
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
  
    function createSticker(x, y) {
      const stickerSet = getRandomStickerSet();
      const randomRotation = getRandomNumber(-60, 60);
      const randomScale = getRandomNumber(1, 1.2) * stickerSizeFactor;
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
        transform: rotate(${randomRotation}deg) scale(0);
        opacity: 0;
      `;
  
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
  
      requestAnimationFrame(() => {
        stickerAnim.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        stickerAnim.style.transform = `rotate(${randomRotation}deg) scale(1)`;
        stickerAnim.style.opacity = '1';
        requestAnimationFrame(() => {
          setTimeout(() => stickerBox.classList.add('active'), 300);
        });
      });
  
      const front = stickerAnim.querySelector('.sticker-front');
      if (front) makeDraggable(front, stickerBox);
    }
  
    function makeDraggable(handleEl, moveTarget) {
      let offsetX = 0;
      let offsetY = 0;
      let isDragging = false;
      let dragMoved = false;
      let mouse = { x: 0, y: 0 };
      let pos = { x: 0, y: 0 };
      let speed = 0.1;
      let isInside = false;
  
      handleEl.addEventListener('mousedown', e => {
        e.preventDefault();
        isDragging = true;
        dragMoved = false;
        const rect = moveTarget.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        moveTarget.style.zIndex = '1000';
        customCursor.style.opacity = 1;
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
          preventNextClick = true;
        }
        isDragging = false;
        moveTarget.style.zIndex = '';

        if (isDragging) {
          setTimeout(() => {
            isDragging = false;
            customCursor.style.opacity = 0;
          }, 100); // 약간의 딜레이를 주면 부드럽게 느껴짐
        }
      });
      function animateCursor() {
        if (isInside || isDragging) {
          pos.x += (mouse.x - pos.x) * speed;
          pos.y += (mouse.y - pos.y) * speed;
          customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
        requestAnimationFrame(animateCursor);
      }
      animateCursor(); // 최초 실행 (단 한 번만 실행되도록 조절할 것!)
      
      handleEl.addEventListener('mouseenter', (e) => {
        customCursor.style.opacity = 1;
        isInside = true;
        mouse.x = e.clientX;
        mouse.y = e.clientY + window.scrollY;
        pos.x = mouse.x;
        pos.y = mouse.y;
        customCursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });
      
      handleEl.addEventListener('mouseleave', () => {
        if (!isDragging) {
          customCursor.style.opacity = 0;
          isInside = false;
        }
      });
      
      handleEl.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY + window.scrollY;
      });
    }
  
    function handleClick(e) {
      if (preventNextClick) {
        window.preventNextClick = false;
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
  
    function removeOldestSticker() {
      if (activeStickers.length > 0) {
        const oldestSticker = activeStickers.shift();
        oldestSticker.classList.add('remove');
        setTimeout(() => oldestSticker.remove(), 300);
      }
    }
  
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
  
    document.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize, { passive: true });
  
    cleanup = cleanupAll;
    resetFunction = reset;
  
    return {
      reset: resetFunction,
      clear: () => resetFunction(false),
      createRandom: placeRandomStickers,
      cleanup
    };
  }
  