// 원운동, 진동, 원하는 각도로 이동

// cos @ x좌표
// sin @ y좌표

function toRadian(degree) {
  return degree * (Math.PI / 180);
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

const circle = document.querySelector('.circle');

let degree = 45;

function animate() {
  ++degree;

  const x = Math.cos(toRadian(degree)) * 100;
  const y = Math.sin(toRadian(degree)) * 100;

  circle.style.transform = `translate(${x}px,${-y}px)`;
}

setInterval(animate, 10);
