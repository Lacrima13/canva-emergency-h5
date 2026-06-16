const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* 🌌 宇宙状态系统 */
const universe = {
  calm: {
    color: "0,220,255",
    name: "流体平静宇宙",
    law: "时间缓慢扩散，空间保持低频震荡"
  },
  anxiety: {
    color: "255,80,160",
    name: "信息噪声宇宙",
    law: "信息高速传播，认知发生轻微过载"
  },
  tired: {
    color: "160,160,160",
    name: "质量坍缩宇宙",
    law: "重力增强，时间流速下降"
  },
  chaos: {
    color: "255,0,200",
    name: "熵增崩坏宇宙",
    law: "结构持续瓦解并随机重组"
  }
};

let mood = "calm";

/* 🧠 情绪切换 */
function setMood(m) {
  mood = m;
}

/* 🌌 封神生成器 */
function generateWorld() {

  const energy = document.getElementById("energy").value;
  const u = universe[mood];

  const text =
`【宇宙生成完成】

宇宙类型：${u.name}

运行法则：
${u.law}

当前情绪能量：${energy}

系统解析：
观测者情绪正在直接影响现实结构参数，
该宇宙处于动态生成态，而非稳定态。`;

  typeWriter(text);
}

/* ✨ 打字机（高级稳定版） */
function typeWriter(text) {
  const el = document.getElementById("output");
  el.innerHTML = "";

  let i = 0;
  function run() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(run, 12);
    }
  }
  run();
}

/* 🌌 超流体粒子系统（封神重点） */
let particles = [];

for (let i = 0; i < 260; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 1.2,
    vy: (Math.random() - 0.5) * 1.2
  });
}

function animate() {

  const u = universe[mood];

  /* 🌫️ 宇宙残影（关键质感） */
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `rgba(${u.color},0.75)`;

  particles.forEach(p => {

    /* 🌊 情绪扰动场（核心封神点） */
    const force = (Math.random() - 0.5) * 0.04;

    p.vx += force;
    p.vy += force;

    p.x += p.vx;
    p.y += p.vy;

    /* 🔁 宇宙循环结构 */
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    /* ✨ 粒子渲染 */
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
