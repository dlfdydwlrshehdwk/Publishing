document.addEventListener('DOMContentLoaded',function(){
  const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Mouse,
    MouseConstraint
  } = Matter;

  const engine = Engine.create();
  const world = engine.world;

  // 중력 제거 (y 방향 중력 0으로 설정 → 공이 아래로 떨어지지 않게)
  engine.world.gravity.y = 0;

  const canvas = document.getElementById('section03_canvas');
  const container = document.querySelector('.section03 .video_wrap');
  const dpr = window.devicePixelRatio || 1;
  const width = container.clientWidth;
  const height = container.clientHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  
  const circlesInfo = [
    // 각 공의 위치(x, y), 반지름(radius), 이미지 경로 또는 색상
    { x: 100, y: 100, radius: 25, image: './image/shadow/section03_1.png' },
    { x: 200, y: 150, radius: 30, image: './image/shadow/section03_2.png' },
    { x: 300, y: 200, radius: 40, image: './image/shadow/section03_3.png' },
    { x: 400, y: 250, radius: 25, image: './image/shadow/section03_4.png' },
    { x: 500, y: 100, radius: 25, image: './image/shadow/section03_5.png' },
    { x: 600, y: 180, radius: 25, image: './image/shadow/section03_6.png' },
    { x: 700, y: 230, radius: 25, image: './image/shadow/section03_7.png' },
    { x: 800, y: 150, radius: 25, image: './image/shadow/section03_8.png' }
  ];

  const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width, // 렌더 캔버스 너비
      height, // 렌더 캔버스 높이
      wireframes: false, // true이면 도형 테두리만 보임 (디버그용)
      background: 'transparent' // 배경 투명
    }
  });
  render.options.wireframes = false;
  render.options.showAngleIndicator = false;
  render.options.showCollisions = false;
  render.options.showVelocity = false;
  Render.run(render);

  const runner = Runner.create(); // Matter.js 내부 애니메이션 루프
  Runner.run(runner, engine);

  const circles = [];

  circlesInfo.forEach(info => {
    const {x, y, radius, image, color} = info;

    const imageScale = 100; // 이 수치를 바꾸면 이미지 스케일 기준이 달라짐 (이미지 크기가 기준임)
    
    const renderOptions = image
      ? {
          sprite: {
            texture: image, // 이미지 경로
            xScale: (radius * 2) / imageScale, // 이미지 너비 비율
            yScale: (radius * 2) / imageScale  // 이미지 높이 비율
          },
          lineWidth: 0, // ⬅️ 선 굵기 제거
          strokeStyle: 'transparent' // ⬅️ 테두리 색상 제거
        }
      : {
          fillStyle: color || '#ccc', // 이미지 없을 때 색상 설정
          lineWidth: 0, // ⬅️ 선 굵기 제거
          strokeStyle: 'transparent' // ⬅️ 테두리 색상 제거
        };

    const startY = height + 100; // 시작 위치 (아래에서 튀어오르듯 등장하도록 화면 바깥 아래로)
    
    const circle = Bodies.circle(
      x,             // x 위치
      startY,        // y 위치 (등장 전 위치)
      radius,        // 공의 반지름
      {
        restitution: 0.9,      // 튕김 정도 (0 ~ 1, 1이면 완전 탄성)
        frictionAir: 0.012,     // 공기 저항 (0 ~ 1 값이 클수록 빨리 멈춤)
        mass: 2.5, // 무게감으로 관성 표현
        isSensor: true,        // 초기에는 충돌 비활성화 (도달할 때까지 다른 공과 충돌 안함)
        render: renderOptions  // 렌더링 설정 (이미지 또는 색상)
      }
    );
    circle.render.strokeStyle = 'transparent';
  circle.render.lineWidth = 0;

    circles.push(circle);
    World.add(world, circle);

    // 등장 애니메이션: 아래에서 y 위치로 부드럽게 이동
    gsap.to(circle.position, {
      y: y,                 // 도착 y 위치
      duration: 1,          // 애니메이션 시간 (초)
      ease: 'elastic.out(0.5, 0.3)', // 튕기는 느낌의 ease
      onComplete: () => {
        // 도착 후 충돌 활성화
        circle.isSensor = false;
      }
    });
  });

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    // 마우스로 드래그 가능하게
    const mouse = Mouse.create(render.canvas);
    // 기존 마우스휠 이벤트 제거
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    // passive: true 옵션으로 다시 등록 (preventDefault 못 하게)
    mouse.element.addEventListener('mousewheel', mouse.mousewheel, { passive: false });
    mouse.element.addEventListener('DOMMouseScroll', mouse.mousewheel, { passive: false });

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,         // 마우스 드래그 감도 (0~1)
        render: { visible: false } // 연결선 숨김
      }
    });
    World.add(world, mouseConstraint);
    render.mouse = mouse;
  }

  // 경계 설정: 상, 하, 좌, 우 (공 튕겨 나가지 않게)
  const boundaries = [
    Bodies.rectangle(width / 2, 0, width, 20, { 
      isStatic: true,
      render: { fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0 } 
    }),    
    Bodies.rectangle(width / 2, height, width, 20, { 
      isStatic: true,
      render: { fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0 } 
    }), 
    Bodies.rectangle(0, height / 2, 20, height, { 
      isStatic: true,
      render: { fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0 } 
    }),   
    Bodies.rectangle(width, height / 2, 20, height, { 
      isStatic: true,
      render: { fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0 } 
    }) 
  ];
    
  World.add(world, boundaries);
});
