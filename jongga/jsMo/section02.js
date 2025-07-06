// document.addEventListener('DOMContentLoaded',function(){

//     let swiper = new Swiper(".section02 .swiper", {
//         slidesPerView: 1.001,
//         spaceBetween: 20,
//       });

//   const { Engine, Render, World, Bodies, Runner } = Matter;

//   const engine = Engine.create();
//   const world = engine.world;

//   const section2 = document.querySelector(".section02");
//   const section2Rect = section2.getBoundingClientRect();

//   // 캔버스를 미리 생성해서 section2에 추가
//   const canvas = document.createElement("canvas");
//   canvas.id = "stickerCanvas";
//   section2.appendChild(canvas);

//   const render = Render.create({
//       canvas: canvas, // 캔버스 삽입
//       engine: engine,
//       options: {
//           width: section2Rect.width,
//           height: section2Rect.height,
//           wireframes: false,
//           background: "transparent"
//       }
//   });

//   Render.run(render);
//   const runner = Runner.create();
//   Runner.run(runner, engine);

//   const floor = Bodies.rectangle(
//       section2Rect.width / 2,
//       section2Rect.height - 20,
//       section2Rect.width, 40,
//       { isStatic: true, render: { fillStyle: "transparent" } }
//   );

//   World.add(world, floor);

//   const imgSrc = [
//     './image/section02/img_1.png',
//     './image/section02/img_2.png',
//     './image/section02/img_3.png',
//     './image/section02/img_4.png',
//     './image/section02/img_5.png',
//     './image/section02/img_6.png'
//   ]

//   function createStickers() { // 스티커 만들어주는 함수
//       for (let i = 0; i < imgSrc.length * 2; i++) {
//           const randomDelay = Math.random() * 1000;
//         setTimeout(()=>{
//             const x = Math.random() * section2Rect.width;
//             const y = 0;
//             const textureIndex = i % imgSrc.length;
//             const sticker = Bodies.circle(x, y, 25, {
//                 restitution: 0.5,
//                 friction: 0.3,
//                 density: 0.001,
//                 render: {
//                     sprite: {
//                         texture: imgSrc[textureIndex],
//                         xScale: .6,
//                         yScale: .6,
//                     }
//                 }
//             });
  
//             World.add(world, sticker);
//         },randomDelay)
//       }
//   }

//   function clearStickers() { // 스티커 지워주는 함수
//     // Matter.js의 World에서 모든 객체 제거
//     World.clear(world, true); 
//     // 캔버스 내용 비우기
//     const context = canvas.getContext("2d");
//     context.clearRect(0, 0, canvas.width, canvas.height);
//   }

//   ScrollTrigger.create({
//     trigger: section2,
//     start: "top center",
//     end: "bottom top",
//     markers: true,
//     onEnter: () => {
//         createStickers();
//     },
//     onLeaveBack: () => {
//         clearStickers();
//     }
//     });
// })


// document.addEventListener('DOMContentLoaded', function() {
//     const { Engine, Render, World, Bodies, Runner } = Matter;
  
//     const section2 = document.querySelector(".section02");

    
//     let swiper = new Swiper(".section02 .swiper", {
//     slidesPerView: 1.1,
//     spaceBetween: 20,
//     });
  
//     // 캔버스를 section2 안에 생성
//     const canvas = document.createElement("canvas");
//     canvas.id = "stickerCanvas";
//     section2.appendChild(canvas);
  
//     const section2Rect = section2.getBoundingClientRect();
//     canvas.width = section2Rect.width;
//     canvas.height = section2Rect.height;
  
//     const engine = Engine.create();
//     const world = engine.world;
  
//     const render = Render.create({
//       canvas: canvas,
//       engine: engine,
//       options: {
//         width: section2Rect.width,
//         height: section2Rect.height,
//         wireframes: false,
//         background: "transparent"
//       }
//     });
  
//     Render.run(render);
//     const runner = Runner.create();
//     Runner.run(runner, engine);
  
//     const floor = Bodies.rectangle(
//       section2Rect.width / 2,
//       section2Rect.height - 20,
//       section2Rect.width,
//       40,
//       { isStatic: true, render: { fillStyle: "transparent" } }
//     );
//     World.add(world, floor);
  
//     const imgSrc = [
//       './image/section02/img_1.png',
//       './image/section02/img_2.png',
//       './image/section02/img_3.png',
//       './image/section02/img_4.png',
//       './image/section02/img_5.png',
//       './image/section02/img_6.png'
//     ];
  
//     function createStickers() {
//       for (let i = 0; i < imgSrc.length * 2; i++) {
//         const randomDelay = Math.random() * 1000;
//         setTimeout(() => {
//           const x = Math.random() * section2Rect.width;
//           const y = 0;
//           const textureIndex = i % imgSrc.length;
//           const sticker = Bodies.circle(x, y, 25, {
//             restitution: 0.5,
//             friction: 0.3,
//             density: 0.001,
//             render: {
//               sprite: {
//                 texture: imgSrc[textureIndex],
//                 xScale: 0.6,
//                 yScale: 0.6
//               }
//             }
//           });
  
//           World.add(world, sticker);
//         }, randomDelay);
//       }
//     }
  
//     function clearStickers() {
//       World.clear(world, true);
//       const context = canvas.getContext("2d");
//       context.clearRect(0, 0, canvas.width, canvas.height);
//     }
  
//     window.addEventListener("load", function () {
//         const updatedRect = section2.getBoundingClientRect();
//         canvas.width = updatedRect.width;
//         canvas.height = updatedRect.height;
//         render.options.width = updatedRect.width;
//         render.options.height = updatedRect.height;
    
//         ScrollTrigger.create({
//             trigger: section2,
//             start: "top center",
//             end: "bottom top",
//             scrub: true,
//             onEnter: () => {
//             createStickers();
//             },
//             onLeaveBack: () => {
//             clearStickers();
//             }
//         });
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function () {
  const { Engine, Render, World, Bodies, Runner } = Matter;

  const section2 = document.querySelector(".section02");

  let swiper = new Swiper(".section02 .swiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
  });

  // 캔버스 생성 및 추가
  const canvas = document.createElement("canvas");
  canvas.id = "stickerCanvas";
  section2.appendChild(canvas);

  // Matter.js 엔진, 렌더러 설정
  const engine = Engine.create();
  const world = engine.world;

  const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      wireframes: false,
      background: "transparent",
    }
  });

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  const imgSrc = [
    './image/section02/img_1.png',
    './image/section02/img_2.png',
    './image/section02/img_3.png',
    './image/section02/img_4.png',
    './image/section02/img_5.png',
    './image/section02/img_6.png'
  ];

  function createStickers(section2Rect) {
    for (let i = 0; i < imgSrc.length * 2; i++) {
      const randomDelay = Math.random() * 1000;
      setTimeout(() => {
        const x = Math.random() * section2Rect.width;
        const y = 0;
        const textureIndex = i % imgSrc.length;
        const sticker = Bodies.circle(x, y, 25, {
          restitution: 0.5,
          friction: 0.3,
          density: 0.001,
          render: {
            sprite: {
              texture: imgSrc[textureIndex],
              xScale: 0.6,
              yScale: 0.6
            }
          }
        });

        World.add(world, sticker);
      }, randomDelay);
    }
  }

  function clearStickers() {
    World.clear(world, true);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 이미지 & 비디오 로딩 대기
  function waitForMediaLoad(container, callback) {
    const images = container.querySelectorAll("img");
    const videos = container.querySelectorAll("video");

    let total = images.length + videos.length;
    let loaded = 0;

    if (total === 0) {
      callback();
      return;
    }

    function checkDone() {
      loaded++;
      if (loaded === total) callback();
    }

    images.forEach(img => {
      if (img.complete) {
        checkDone();
      } else {
        img.addEventListener("load", checkDone);
        img.addEventListener("error", checkDone);
      }
    });

    videos.forEach(video => {
      if (video.readyState >= 2) {
        checkDone();
      } else {
        video.addEventListener("loadeddata", checkDone);
        video.addEventListener("error", checkDone);
      }
    });
  }

  // 메인 로직 실행
  window.addEventListener("load", function () {
    const isMobile = window.innerWidth <= 768;

    waitForMediaLoad(section2, () => {
      const section2Rect = section2.getBoundingClientRect();
      canvas.width = section2Rect.width;
      canvas.height = section2Rect.height;
      render.options.width = section2Rect.width;
      render.options.height = section2Rect.height;

      const floor = Bodies.rectangle(
        section2Rect.width / 2,
        section2Rect.height - 20,
        section2Rect.width,
        40,
        { isStatic: true, render: { fillStyle: "transparent" } }
      );
      World.add(world, floor);

      setTimeout(() => {
        ScrollTrigger.create({
          trigger: section2,
          start: "top center",
          end: "bottom top",
          scrub: true,
          onEnter: () => createStickers(section2Rect),
          onLeaveBack: () => clearStickers()
        });

        ScrollTrigger.refresh();
      }, isMobile ? 800 : 0); // 모바일은 살짝 딜레이
    });
  });
});
