// Generate star field background
const starsDiv = document.querySelector('.stars');
function createStars(num) {
  let html = '';
  for (let i = 0; i < num; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const s = Math.random() * 2 + 1;
    html += `<div style="
      position:absolute;
      left:${x}px;top:${y}px;
      width:${s}px;height:${s}px;
      background:#fff;
      border-radius:50%;
      opacity:${Math.random()*0.7+0.3};
      box-shadow: 0 0 ${s*6}px #00d4ff;
      "></div>`;
  }
  starsDiv.innerHTML = html;
}
createStars(180);

// Futuristic spaceship animation (demo)
const spaceship = document.createElement('div');
spaceship.className = 'spaceship';
document.body.appendChild(spaceship);
