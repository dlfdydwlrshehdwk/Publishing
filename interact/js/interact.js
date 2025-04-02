

const container = document.getElementById('container');
const box = document.getElementById('box');
let velocity = { x: 0, y: 0 };
let isDragging = false;
let lastPos = { x: 0, y: 0 };
const friction = 0.8; // 감속 효과

interact(box).draggable({
  inertia: false,
  modifiers: [
    interact.modifiers.restrictRect({ restriction: container })
  ],
  onstart(event) {
    isDragging = true;
    velocity = { x: 0, y: 0 };
  },
  onmove(event) {
    const x = (parseFloat(box.dataset.x) || 0) + event.dx;
    const y = (parseFloat(box.dataset.y) || 0) + event.dy;
    box.style.transform = `translate(${x}px, ${y}px)`;
    box.dataset.x = x;
    box.dataset.y = y;
    velocity.x = event.dx;
    velocity.y = event.dy;
  },
  onend() {
    isDragging = false;
    requestAnimationFrame(applyInertia);
  }
});

function applyInertia() {
  if (isDragging) return;

  let x = parseFloat(box.dataset.x) || 0;
  let y = parseFloat(box.dataset.y) || 0;

  x += velocity.x;
  y += velocity.y;
  velocity.x *= friction;
  velocity.y *= friction;

  checkBounds();

  box.style.transform = `translate(${x}px, ${y}px)`;
  box.dataset.x = x;
  box.dataset.y = y;

  if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
    requestAnimationFrame(applyInertia);
  }
}

function checkBounds() {
  const rect = box.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  
  if (rect.right >= containerRect.right || rect.left <= containerRect.left) {
    velocity.x *= -1;
  }
  if (rect.bottom >= containerRect.bottom || rect.top <= containerRect.top) {
    velocity.y *= -1;
  }
}
