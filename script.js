/**
 * 前端導覽手冊 - 核心邏輯 (穩定流星版)
 */

const body = document.body;
const textC = document.getElementById("textC");

// 1. 各語言內容配置 (保持全名與排版)
const info = {
  html: {
    target: document.getElementById("container-html"),
    url: "https://mozilla.org",
    color: "#E34C26",
    bgClass: "bg-html-theme",
    text: `<div class="tech-card text-start">
        <h3 style="color: #E34C26; border-bottom: 2px solid #E34C26; padding-bottom: 10px;"><i class="bi bi-code-slash"></i> HyperText Markup Language</h3>
        <p class="mt-3" style="font-size: 1.1rem; line-height: 1.8;"><strong>HTML</strong> 是網頁的基礎結構。它利用標籤 (Tags) 定義內容，確保瀏覽器正確渲染。</p>
      </div>`,
  },
  css: {
    target: document.getElementById("container-css"),
    url: "https://mozilla.org",
    color: "#0056b3",
    bgClass: "bg-css-theme",
    spectrum: "bg-css-spectrum",
    text: `<div class="tech-card text-start">
        <h3 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px;"><i class="bi bi-palette"></i> Cascading Style Sheets</h3>
        <p class="mt-3" style="font-size: 1.1rem; line-height: 1.8;"><strong>CSS</strong> 負責網頁的美學。透過控制佈局、顏色與動畫，打造吸引人的介面。</p>
      </div>`,
  },
  js: {
    target: document.getElementById("container-js"),
    url: "https://mozilla.org",
    color: "#D4AC0D",
    bgClass: "bg-js-theme",
    text: `<div class="tech-card text-start">
        <h3 style="color: #D4AC0D; border-bottom: 2px solid #D4AC0D; padding-bottom: 10px;"><i class="bi bi-cpu"></i> JavaScript (ECMAScript)</h3>
        <p class="mt-3" style="font-size: 1.1rem; line-height: 1.8;"><strong>JavaScript</strong> 是網頁的大腦邏輯。負責處理互動、計算，賦予網頁生命力。</p>
      </div>`,
  },
};

// 2. 初始化互動監聽
function initHover() {
  Object.keys(info).forEach((lang) => {
    const item = info[lang];
    if (!item.target) return;

    // mouseenter / mouseleave 不冒泡，移動到子元素不會誤觸，直接掛容器即可
    item.target.addEventListener("mouseenter", () => {
      body.classList.add(item.bgClass);
      if (item.spectrum) body.classList.add(item.spectrum);
      textC.innerHTML = item.text;
      textC.style.color = item.color;
      textC.classList.add("text-active");
      if (lang === "js") textC.classList.add("text-js-active");
    });

    item.target.addEventListener("mouseleave", () => {
      body.classList.remove(item.bgClass);
      if (item.spectrum) body.classList.remove(item.spectrum);
      textC.innerHTML =
        "<div class='text-center w-100'>請將滑鼠移至圖片上開始學習</div>";
      textC.style.color = "black";
      textC.classList.remove("text-active", "text-js-active");
    });

    item.target.addEventListener("click", (e) => {
      createRipple(e, item.color);
      window.open(item.url, "_blank");
    });
  });
}

// 漣漪點擊效果
function createRipple(event, color) {
  const container = event.currentTarget;
  const rect = container.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: ${color};
    border-radius: 50%;
    transform: scale(0);
    opacity: 0.4;
    animation: ripple-expand 0.6s ease-out forwards;
    pointer-events: none;
    z-index: 10;
  `;

  container.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

// 3. 流星畫布邏輯 (簡化版：載入後直接執行)
const canvas = document.getElementById("starfieldCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let stars = [];

function resize() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}
window.addEventListener("resize", resize);
resize();

class ShootingStar {
  constructor() {
    this.reset();
  }

  reset() {
    // 隨機決定方向：0 往左下，1 往右下
    this.direction = Math.floor(Math.random() * 2);
    // 隨機決定是否為彗星 (約 20% 機率)
    this.isComet = Math.random() < 0.2;

    // 根據方向與畫布寬度設定出生點
    this.x =
      this.direction === 0
        ? Math.random() * (canvas.width + 200)
        : Math.random() * (canvas.width - 200) - 200;
    this.y = Math.random() * -200;

    // 彗星與流星的差異化參數
    this.length = this.isComet ? 300 : 150;
    this.speed = this.isComet ? 3 : 8;
    this.size = this.isComet ? 5 : 2.5;

    // 淡化色彩：降低透明度讓視覺更高級
    this.color = this.isComet
      ? "rgba(200, 230, 255, 0.3)" // 彗星：淡藍
      : "rgba(255, 165, 0, 0.2)"; // 流星：淡橘
  }

  draw() {
    if (!ctx) return;
    const tailX =
      this.direction === 0 ? this.x + this.length : this.x - this.length;
    const tailY = this.y - this.length;

    // 建立拖尾漸層
    const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();

    // 如果是彗星，加一個極微弱的核心發光
    if (this.isComet) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  update() {
    // 根據方向更新座標
    this.x += this.direction === 0 ? -this.speed : this.speed;
    this.y += this.speed;

    // 超出邊界重置
    if (
      this.y > canvas.height ||
      this.x < -400 ||
      this.x > canvas.width + 400
    ) {
      this.reset();
    }
  }
}

function animate() {
  // 輕微塗抹背景產生拖尾
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}

// 4. 啟動流程：載入 1 秒後顯示流星
window.onload = () => {
  initHover();
  setTimeout(() => {
    stars = Array.from({ length: 15 }, () => new ShootingStar());
    animate();
  }, 1000);
};
