// console.log('abc')
// // Matter.js 모듈 불러오기
// const { Engine, Render, Runner, Bodies, Composite, World } = Matter;

// // Matter.js 엔진과 렌더러 생성
// const engine = Engine.create();
// const world = engine.world;

// const render = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         width: window.innerWidth,
//         height: window.innerHeight,
//         background: "#f0f0f0",
//         wireframes: false
//     }
// });

// Render.run(render);
// Runner.run(Runner.create(), engine);

// // 바닥 추가 (화면 아래로 떨어지지 않게)
// const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 20, {
//     isStatic: true,
//     render: { fillStyle: "#888" }
// });
// World.add(world, ground);

// // 스티커(이미지) 추가하는 함수
// function addSticker(x, y) {
//     const sticker = Bodies.circle(x, y, 40, {
//         restitution: 0.8,  // 튕기는 정도
//         render: {
//             sprite: {
//                 texture: "./image/section2_asset1.png",  // 스티커 이미지 (변경 가능)
//                 xScale: 1,
//                 yScale: 1
//             }
//         }
//     });

//     World.add(world, sticker);
// }

// // 일정 시간마다 랜덤 위치에 스티커 추가
// setInterval(() => {
//     const x = Math.random() * window.innerWidth;
//     addSticker(x, 50);
// }, 1000);

// // 창 크기 변경 시 바닥 위치 조정
// window.addEventListener("resize", () => {
//     Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight });
//     Matter.Body.setVertices(ground, [
//         { x: 0, y: window.innerHeight },
//         { x: window.innerWidth, y: window.innerHeight },
//         { x: window.innerWidth, y: window.innerHeight + 20 },
//         { x: 0, y: window.innerHeight + 20 }
//     ]);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const { Engine, Render, World, Bodies, Runner } = Matter;

//   // Matter.js 엔진 및 렌더러 생성
//   const engine = Engine.create();
//   const world = engine.world;
//   const render = Render.create({
//     element: document.querySelector(".section02"),
//     engine: engine,
//     options: {
//       width: window.innerWidth,
//       height: window.innerHeight,
//       background: "transparent",
//       wireframes: false,
//     },
//   });

//   Render.run(render);
//   Runner.run(Runner.create(), engine);

//   // 바닥 충돌 영역 생성
//   const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 20, {
//     isStatic: true,
//     render: { fillStyle: "transparent" },
//   });
//   World.add(world, ground);

//   // 스티커 떨어뜨리기 함수
//   function dropStickers() {
//     const stickers = [];
//     for (let i = 0; i < 16; i++) {
//       const x = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
//       const sticker = Bodies.circle(x, -50, 40, {
//         restitution: 0.8,
//         render: {
//           sprite: {
//             texture: "./image/section2_asset1.png", // 스티커 이미지 경로
//             xScale: 0.5,
//             yScale: 0.5,
//           },
//         },
//       });
//       stickers.push(sticker);
//     }
//     World.add(world, stickers);
//   }

//   // 일정 시간 후 스티커 떨어뜨리기 (한 번만 실행)
//   setTimeout(dropStickers, 1000);
// });


document.addEventListener('DOMContentLoaded',function(){
  const { Engine, Render, World, Bodies, Runner } = Matter;

  const engine = Engine.create();
  const world = engine.world;

  const section2 = document.querySelector(".section02");
  const section2Rect = section2.getBoundingClientRect();

  // 🌟 캔버스를 미리 생성해서 section2에 추가
  const canvas = document.createElement("canvas");
  canvas.id = "stickerCanvas";
  section2.appendChild(canvas);

  const render = Render.create({
      canvas: canvas, // 🌟 기존 element: section2 대신 직접 캔버스 삽입
      engine: engine,
      options: {
          width: section2Rect.width,
          height: section2Rect.height,
          wireframes: false,
          background: "transparent"
      }
  });

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  const floor = Bodies.rectangle(
      section2Rect.width / 2,
      section2Rect.height - 20,
      section2Rect.width, 40,
      { isStatic: true, render: { fillStyle: "transparent" } }
  );

  World.add(world, floor);

  function createStickers() {
      for (let i = 0; i < 16; i++) {
          const x = Math.random() * section2Rect.width;
          const y = 0;
          const sticker = Bodies.circle(x, y, 40, {
              restitution: 0.5,
              friction: 0.3,
              density: 0.001,
              render: {
                  sprite: {
                      texture: "./image/section2_asset1.png"
                  }
              }
          });

          World.add(world, sticker);
      }
  }

  setTimeout(createStickers, 1000);
})