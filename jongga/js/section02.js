document.addEventListener('DOMContentLoaded',function(){
  const { Engine, Render, World, Bodies, Runner } = Matter;

  const engine = Engine.create();
  const world = engine.world;

  const section2 = document.querySelector(".section02");
  const section2Rect = section2.getBoundingClientRect();

  // 캔버스를 미리 생성해서 section2에 추가
  const canvas = document.createElement("canvas");
  canvas.id = "stickerCanvas";
  section2.appendChild(canvas);

  const render = Render.create({
      canvas: canvas, // 캔버스 삽입
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

  const imgSrc = [
    './image/section02/img_1.png',
    './image/section02/img_2.png',
    './image/section02/img_3.png',
    './image/section02/img_4.png',
    './image/section02/img_5.png',
    './image/section02/img_6.png'
  ]

  function createStickers() { // 스티커 만들어주는 함수
      for (let i = 0; i < imgSrc.length * 2; i++) {
          const randomDelay = Math.random() * 1000;
        setTimeout(()=>{
            const x = Math.random() * section2Rect.width;
            const y = 0;
            const textureIndex = i % imgSrc.length;
            const sticker = Bodies.circle(x, y, 40, {
                restitution: 0.5,
                friction: 0.3,
                density: 0.001,
                render: {
                    sprite: {
                        texture: imgSrc[textureIndex]
                    }
                }
            });
  
            World.add(world, sticker);
        },randomDelay)
      }
  }

  function clearStickers() { // 스티커 지워주는 함수
    // Matter.js의 World에서 모든 객체 제거
    World.clear(world, true); 
    // 캔버스 내용 비우기
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  ScrollTrigger.create({
    trigger: section2,
    start: "top center",
    end: "bottom top",
    onEnter: () => {
        createStickers();
    },
    onLeaveBack: () => {
        clearStickers();
    }
    });
})