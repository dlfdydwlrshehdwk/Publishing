gsap.registerPlugin(Draggable, InertiaPlugin);


document.addEventListener('DOMContentLoaded',()=>{
  const jonggaClone = document.querySelector('.section05 .alphabet_wrap .wrap').cloneNode(true);
  const bounds = document.querySelector(".section05"); // 드래그가 가능한 영역
  let thunmbnailIndex = 0;

  function draggable1(){
    document.querySelectorAll(".draggable1").forEach((el) => {
      let lastX = 0; // 이전 X 좌표를 저장
      let lastTime = Date.now(); // 이전 프레임의 시간 저장
      let currentTilt = 0; // 현재 기울기 (회전) 값
    
      Draggable.create(el, {
        type: "x,y", // X, Y 방향으로 드래그 가능
        bounds: bounds, // 드래그 가능한 범위를 .section05 내부로 제한
        inertia: true, // 관성을 적용하여 자연스럽게 던져지는 효과 추가
    
        onDrag: function () {
          if (!this.target) return; // 안전 체크
    
          let now = Date.now(); // 현재 시간
          let deltaTime = (now - lastTime) / 1000; // 이전 프레임과의 시간 차이 (초 단위)
          let velocityX = (this.x - lastX) / deltaTime; // X 이동 속도 계산 (px/s)
    
          // 🎯 새로운 기울기 값 계산 (속도에 따라 반대 방향으로 회전)
          let targetTilt = gsap.utils.clamp(-5, 5, velocityX * -0.01); 
          // - velocityX가 클수록 더 많이 기울어짐
          // - -0.01 값을 **늘리면** 기울기가 더 커짐, **줄이면** 더 작아짐
          // - clamp(-5, 5, …) → 최대 -5도 ~ 5도까지만 기울어지도록 제한
    
          currentTilt = gsap.utils.interpolate(currentTilt, targetTilt, 0.1); 
          // - 기존 기울기와 새로운 기울기를 **부드럽게 보간 (interpolate)**
          // - 마지막 값이 0.1 → **이 값을 늘리면 빠르게 따라가고, 줄이면 더 부드럽게 전환됨**
          
          gsap.to(this.target, {
            rotation: currentTilt, // 적용된 기울기 값
            duration: 0.1, // 빠르게 반응하도록 duration 조절
            ease: "power1.out" // 부드러운 움직임
          });
    
          lastX = this.x; // 현재 X 좌표 저장 (다음 프레임에서 비교할 기준)
          lastTime = now; // 현재 시간 저장 (속도 계산에 사용)
        },
    
        onDragEnd: function () {
          if (!this.target) return;
          gsap.to(this.target, {
            rotation: 0, // 드래그 끝나면 원래대로 복귀
            duration: 0.3, // 자연스럽게 돌아가도록 0.3초 설정
            ease: "power2.out"
          });
        }
      });
    });
  } draggable1();

  const section05BtnRefresh = document.querySelector('.section05 .btn_refresh');
  section05BtnRefresh.addEventListener('click',function(){
    console.log('refresh');
    section05Reset();
  })

  const section05Thumbnails = document.querySelectorAll('.section05 .thumbnail_list > li')
  section05Thumbnails.forEach((list,index) => {
    // thunmbnailIndex 기본값
    if(list.classList.contains('active')) {
      thunmbnailIndex = index;
    }
    list.addEventListener('click',()=>{
      // thunmbnailIndex값 변경
      thunmbnailIndex = index;

      // 배경변경
      document.querySelector('.section05 .bg img').src = `./image/section5_bg_${thunmbnailIndex + 1}.png`

      // 새로고침
      section05Reset();
    })
  })


  function section05Reset(){
    const section05AlphabetWrap = document.querySelector('.section05 .alphabet_wrap');
    console.log('Reset Start!');
    // 내용비우기
    section05AlphabetWrap.innerHTML = '';
    // 복사본으로 채우기
    const newClone = jonggaClone.cloneNode(true);
    section05AlphabetWrap.appendChild(newClone);
    // 드래그 실행
    draggable1();
  }
})