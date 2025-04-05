export default function initializeSticker() {
  let resetFunction;
  let cleanup;
  let resizeTimeout;

  function initialize() {
      const MAX_STICKERS = 16;
      const activeStickers = [];
      const lastFourTypes = [];
      let stickerSizeFactor = calculateSizeFactor();

      // 스티커 세트에는 최적화된 구조의 단일 객체를 사용하세요.
      const stickerSets = {
          'a': { front: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2024/12/sticker_a.webp', back: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/02/sticker_a_200_back.webp', width: 160, height: 160 },
          'b': { front: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/01/sticker-f-v2.webp', back: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/01/sticker-f-v2-2.webp', width: 180, height: 168 },
          'c': { front: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/01/sticker-c.webp', back: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/01/sticker-c-2.webp', width: 80, height: 60 },
          'd': { front: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/02/sticker_d_240.webp', back: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/02/sticker_d_240_2.webp', width: 140, height: 128 },
          'e': { front: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/02/sticker_e_450.webp', back: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2025/02/sticker_e_450_2.webp', width: 240, height: 58 },
          'f': { front: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2024/12/sticker-b_v2.webp', back: 'https://vegan.ning-h.com/wp-content/uploads/sites/2/2024/12/sticker-b-2_v2.webp', width: 160, height: 100 }
      };

      // DOM 참조를 캐싱하세요.
      const stickerArea = document.querySelector('[data-area="sticker"]');
      if (!stickerArea) return null;
      
      // 뷰포트 너비를 기준으로 크기 계수를 계산합니다.
      function calculateSizeFactor() {
          const viewportWidth = window.innerWidth;
          return viewportWidth < 576 ? 0.6 : 
                 viewportWidth < 768 ? 0.75 : 
                 viewportWidth < 992 ? 0.85 : 
                 viewportWidth < 1200 ? 0.9 : 1;
      }

      // 무작위 숫자 생성을 최적화합니다.
      function getRandomNumber(min, max) {
          return Math.random() * (max - min) + min;
      }

      // 향상된 추적 기능을 사용하여 무작위 스티커 유형을 가져옵니다.
      function getRandomStickerSet() {
          const allTypes = Object.keys(stickerSets);
          const availableTypes = allTypes.filter(type => !lastFourTypes.includes(type));
          
          // 모든 유형이 최근에 사용된 경우, 무작위로 하나를 선택합니다.
          const randomSet = availableTypes.length ? 
              availableTypes[Math.floor(Math.random() * availableTypes.length)] : 
              allTypes[Math.floor(Math.random() * allTypes.length)];

          // 추적 배열을 업데이트합니다.
          lastFourTypes.push(randomSet);
          if (lastFourTypes.length > 4) lastFourTypes.shift();

          return { ...stickerSets[randomSet], type: randomSet };
      }

      // 더 나은 성능을 위해 DOM 프래그먼트를 사용하여 스티커를 생성합니다.
      function createSticker(x, y, parentElement) {
          const stickerSet = getRandomStickerSet();
          const randomRotation = getRandomNumber(-60, 60);
          const randomScale = getRandomNumber(1, 1.2) * stickerSizeFactor;
          const adjustedWidth = stickerSet.width * randomScale;
          const adjustedHeight = stickerSet.height * randomScale;

          // 더 나은 성능을 위해 DocumentFragment를 사용합니다.
          const fragment = document.createDocumentFragment();
          const stickerBox = document.createElement('div');
          stickerBox.className = 'sticker-box';
          
          // 템플릿을 사용하여 앞면과 뒷면을 생성합니다.
          const template = `
              <div class="sticker sticker-back">
                  <img src="${stickerSet.back}" alt="Sticker Back" loading="lazy">
              </div>
              <div class="sticker sticker-front">
                  <img src="${stickerSet.front}" alt="Sticker Front" loading="lazy">
              </div>
          `;
          stickerBox.innerHTML = template;

          // css 설정
          stickerBox.style.cssText = `
              width: ${adjustedWidth}px;
              height: ${adjustedHeight * 2}px;
              left: ${x - (adjustedWidth / 2)}px;
              top: ${y - adjustedHeight}px;
              transform: rotate(${randomRotation}deg) scale(0);
              opacity: 0;
          `;

          // 스티커에 크기를 적용합니다.
          const stickers = stickerBox.querySelectorAll('.sticker');
          stickers.forEach(sticker => {
              sticker.style.width = `${adjustedWidth}px`;
              sticker.style.height = `${adjustedHeight}px`;
          });

          fragment.appendChild(stickerBox);
          parentElement.appendChild(fragment);
          activeStickers.push(stickerBox);

          // 더 부드러운 애니메이션을 위해 requestAnimationFrame을 사용합니다.
          requestAnimationFrame(() => {
              stickerBox.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
              stickerBox.style.transform = `rotate(${randomRotation}deg) scale(1)`;
              stickerBox.style.opacity = '1';

              // requestAnimationFrame을 사용하여 active 클래스를 추가합니다.
              requestAnimationFrame(() => {
                  setTimeout(() => {
                      stickerBox.classList.add('active');
                  }, 300);
              });
          });
      }

      // 효율성이 향상된 무작위 스티커 배치
      function placeRandomStickers() {
          if (!stickerArea) return;

          const rect = stickerArea.getBoundingClientRect();
          const usedTypes = new Set();

          // 배치 작업으로 기존 스티커 제거
          const stickersToRemove = [...activeStickers];
          activeStickers.length = 0;
          lastFourTypes.length = 0;
          
          stickersToRemove.forEach(sticker => {
              sticker.classList.add('remove');
              setTimeout(() => sticker.remove(), 300);
          });

          // 지연 후 새 스티커 부착
          setTimeout(() => {
              const numStickers = window.innerWidth < 768 ? 3 : 5;
              const allTypes = Object.keys(stickerSets);
              
              // 스티커 만들기
              for (let i = 0; i < numStickers; i++) {
                  // 가능하면 고유한 스티커 유형 받기
                  const availableTypes = allTypes.filter(type => !usedTypes.has(type));
                  if (availableTypes.length === 0) break;
                  
                  const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
                  usedTypes.add(randomType);

                  const stickerSet = stickerSets[randomType];
                  const scaledWidth = stickerSet.width * stickerSizeFactor;
                  const scaledHeight = stickerSet.height * stickerSizeFactor;
                  const margin = Math.max(scaledWidth, scaledHeight);
                  
                  // 스티커가 보이는 영역 내에 있는지 확인하세요
                  const x = getRandomNumber(margin, rect.width - margin);
                  const y = getRandomNumber(margin, rect.height - margin);

                  createSticker(x, y, stickerArea);
              }
          }, 300);
      }

      // 애니메이션 핸들링이 개선된 가장 오래된 스티커 제거
      function removeOldestSticker() {
          if (activeStickers.length > 0) {
              const oldestSticker = activeStickers.shift();
              oldestSticker.classList.add('remove');
              setTimeout(() => oldestSticker.remove(), 300);
          }
      }

      // 최적화된 클릭 핸들러
      function handleClick(e) {
          const clickStickerArea = e.target.closest('[data-area="sticker"]');
          if (!clickStickerArea) return;

          const rect = clickStickerArea.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // 화면 너비에 따라 최대 스티커 조정
          const adjustedMaxStickers = window.innerWidth < 768 ? 
              Math.floor(MAX_STICKERS * 0.75) : MAX_STICKERS;

          if (activeStickers.length >= adjustedMaxStickers) {
              removeOldestSticker();
          }

          createSticker(x, y, clickStickerArea);
      }

      // 최적화된 터치 핸들러 - 스크롤이 가능하도록 고정됨
      function handleTouch(e) {
          // 스티커 영역에서 터치할 때만 기본 동작을 방지합니다
          const touchStickerArea = e.target.closest('[data-area="sticker"]');
          if (!touchStickerArea) return;
          
          // 스티커 영역에서만 기본 동작을 차단합니다. 그래야 다른 곳에서도 스크롤할 수 있습니다.
          e.preventDefault();
          
          const touch = e.touches[0];
          const rect = touchStickerArea.getBoundingClientRect();
          const x = touch.clientX - rect.left;
          const y = touch.clientY - rect.top;

          const adjustedMaxStickers = window.innerWidth < 768 ? 
              Math.floor(MAX_STICKERS * 0.75) : MAX_STICKERS;

          if (activeStickers.length >= adjustedMaxStickers) {
              removeOldestSticker();
          }

          createSticker(x, y, touchStickerArea);
      }

      // 디바운싱으로 크기 조정 핸들러 개선
      function handleResize() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
              stickerSizeFactor = calculateSizeFactor();
              
              if (!stickerArea) return;
              const rect = stickerArea.getBoundingClientRect();
              
              // 배치 DOM 작업
              activeStickers.forEach(sticker => {
                  const width = parseFloat(sticker.style.width);
                  const height = parseFloat(sticker.style.height) / 2;
                  
                  const x = getRandomNumber(width/2, rect.width - width/2);
                  const y = getRandomNumber(height, rect.height - height);
                  
                  // 직접 위치 설정
                  sticker.style.left = `${x - (width / 2)}px`;
                  sticker.style.top = `${y - height}px`;
              });
          }, 200);
      }

      // 이전 이벤트 청취자 정리하기
      if (typeof cleanup === 'function') {
          cleanup();
      }

      // 이벤트 청취자에게 더 나은 성능을 위한 옵션 추가
      document.addEventListener('click', handleClick);
      
      // 전체 문서가 아닌 스티커 영역에 터치 이벤트 청취자만 추가하기
      if (stickerArea) {
          stickerArea.addEventListener('touchstart', handleTouch, { passive: false });
      }
      
      window.addEventListener('resize', handleResize, { passive: true });

      // 향상된 청소 기능
      cleanup = () => {
          document.removeEventListener('click', handleClick);
          
          // 이벤트 청취자 스티커 영역 제거
          if (stickerArea) {
              stickerArea.removeEventListener('touchstart', handleTouch);
          }
          
          window.removeEventListener('resize', handleResize);
          
          // 배치 제거 스티커
          activeStickers.forEach(sticker => {
              sticker.classList.add('remove');
          });
          
          // 단일 타임아웃을 사용하여 배열 지우기
          setTimeout(() => {
              activeStickers.forEach(sticker => sticker.remove());
              activeStickers.length = 0;
              lastFourTypes.length = 0;
          }, 300);
      };

      // 외부 사용을 위한 리셋 기능
      resetFunction = () => {
          // 배치 클리어 스티커
          activeStickers.forEach(sticker => {
              sticker.classList.add('remove');
          });
          
          setTimeout(() => {
              activeStickers.forEach(sticker => sticker.remove());
              activeStickers.length = 0;
              lastFourTypes.length = 0;
              
              stickerSizeFactor = calculateSizeFactor();
              placeRandomStickers();
          }, 300);
      };

      return cleanup;
  }

  // 창에 재설정 기능 노출
  window.resetStickers = () => {
      if (typeof resetFunction === 'function') {
          resetFunction();
      }
  };

  // 초기화 및 반환 정리 기능
  return initialize();
}
