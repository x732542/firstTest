/**
 * 前端導覽手冊 - 核心邏輯 (最終整合修正版)
 */

const body = document.body;
const textC = document.getElementById("textC");

// 1. 各語言內容配置
const info = {
  html: {
    target: document.getElementById("container-html"),
    url: "https://mozilla.org",
    color: "#E34C26",
    bgClass: "bg-html-theme",
    text: `
      <div class="tech-card text-start">
        <h3 style="color: #E34C26; border-bottom: 2px solid #E34C26; padding-bottom: 10px;">
          <i class="bi bi-code-slash"></i> HyperText Markup Language
        </h3>
        <p class="mt-3" style="font-size: 1.1rem; line-height: 1.8;">
          <strong>HTML</strong> 是網頁的基礎結構。它並非程式語言，而是一種<strong>「標記語言」</strong>。<br>
          它利用標籤 (Tags) 來定義內容的結構，確保瀏覽器能正確理解標題、段落與圖像。
        </p>
      </div>
    `
  },
  css: {
    target: document.getElementById("container-css"),
    url: "https://mozilla.org",
    color: "#0056b3",
    bgClass: "bg-css-theme",
    spectrum: "bg-css-spectrum",
    text: `
      <div class="tech-card text-start">
        <h3 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">
          <i class="bi bi-palette"></i> Cascading Style Sheets
        </h3>
        <p class="mt-3" style="font-size: 1.1rem; line-height: 1.8;">
          <strong>CSS</strong> 負責網頁的樣式與美學。它如同<strong>「樣式表」</strong>。<br>
          透過控制佈局、顏色、字體與動畫，它將枯燥的結構轉化為極具視覺吸引力的使用者介面。
        </p>
      </div>
    `
  },
  js: {
    target: document.getElementById("container-js"),
    url: "https://mozilla.org",
    color: "#D4AC0D",
    bgClass: "bg-js-theme",
    text: `
      <div class="tech-card text-start">
        <h3 style="color: #D4AC0D; border-bottom: 2px solid #D4AC0D; padding-bottom: 10px;">
          <i class="bi bi-cpu"></i> JavaScript (ECMAScript)
        </h3>
        <p class="mt-3" style="font-size: 1.1rem; line-height: 1.8;">
          <strong>JavaScript</strong> 是網頁的行動語言。它是強大的<strong>「大腦邏輯」</strong>。<br>
          負責處理互動行為、資料計算與 API 請求，賦予網頁真正的生命力與反應能力。
        </p>
      </div>
    `
  }
};

// 2. JS 圖片點擊旋轉特效 (加入 e.stopPropagation 解決跳轉衝突)
const jsImg = document.getElementById("JSimg");
if (jsImg) {
  jsImg.addEventListener("click", (e) => {
    // 阻止事件往上傳遞到 container-js
    e.stopPropagation(); 
    
    jsImg.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    jsImg.style.transform = "rotate(360deg) scale(1.2)";
    
    const originalHTML = textC.innerHTML;
    textC.innerHTML = "<div class='text-center w-100'><h3><i class='bi bi-gear-fill'></i> 正在執行邏輯運算函式... Done!</h3></div>";

    setTimeout(() => {
      jsImg.style.transform = "";
      textC.innerHTML = originalHTML;
    }, 1200);
  });
}

// 3. 初始化互動監聽
function initHover() {
  Object.keys(info).forEach((lang) => {
    const item = info[lang];
    if (item.target) {
      // 滑鼠移入
      item.target.addEventListener("mouseenter", () => {
        body.classList.add(item.bgClass);
        if (item.spectrum) body.classList.add(item.spectrum);
        textC.innerHTML = item.text;
        textC.style.color = item.color;
        textC.classList.add("text-active");
      });

      // 滑鼠移出
      item.target.addEventListener("mouseleave", () => {
        body.classList.remove(item.bgClass);
        if (item.spectrum) body.classList.remove(item.spectrum);
        textC.innerHTML = "<div class='text-center w-100'>請將滑鼠移至圖片上開始學習</div>";
        textC.style.color = "black";
        textC.classList.remove("text-active");
      });

      // 點擊容器跳轉
      item.target.addEventListener("click", () => {
        window.open(item.url, "_blank");
      });
    }
  });
}

// 4. 流星與彗星邏輯
const canvas = document.getElementById("starfieldCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let idleTimer, isIdle = false, stars = [], canvasOpacity = 0;

function resize() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}
window.addEventListener("resize", resize);
resize();

class ShootingStar {
  constructor() { this.reset(); }
  reset() {
    this.direction = Math.floor(Math.random() * 2);
    this.isComet = Math.random() < 0.2;
    this.x = (this.direction === 0) ? Math.random() * (canvas.width + 200) : Math.random() * (canvas.width - 200) - 200;
    this.y = Math.random() * -100;
    this.length = this.isComet ? Math.random() * 300 + 200 : Math.random() * 150 + 100;
    this.speed = this.isComet ? Math.random() * 3 + 2 : Math.random() * 10 + 6;
    this.size = this.isComet ? Math.random() * 6 + 4 : Math.random() * 4 + 2;
    this.color = this.isComet ? `rgba(200, 230, 255, ${Math.random() * 0.5 + 0.5})` : `rgba(255, 165, 0, ${Math.random() * 0.5 + 0.5})`;
  }
  draw() {
    if (!ctx) return;
    ctx.save();
    ctx.globalAlpha = canvasOpacity;
    const tailX = (this.direction === 0) ? this.x + this.length : this.x - this.length;
    const tailY = this.y - this.length;
    const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(tailX, tailY); ctx.stroke();
    if (this.isComet) {
      ctx.shadowBlur = 15; ctx.shadowColor = this.color; ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size / 2 + 1, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }
  update() {
    this.x += (this.direction === 0 ? -this.speed : this.speed) * (this.isComet ? 1 : 1.2);
    this.y += this.speed;
    if (this.y > canvas.height || this.x < -400 || this.x > canvas.width + 400) this.reset();
  }
}

function animate() {
  if (!isIdle && canvasOpacity <= 0) {
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }
  isIdle ? canvasOpacity = Math.min(canvasOpacity + 0.02, 1) : canvasOpacity = Math.max(canvasOpacity - 0.02, 0);
  ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * canvasOpacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => { star.update(); star.draw(); });
  requestAnimationFrame(animate);
}

function resetIdle() {
  isIdle = false;
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    isIdle = true;
    if (stars.length === 0) stars = Array.from({ length: 15 }, () => new ShootingStar());
    animate();
  }, 5000);
}

window.addEventListener("mousemove", resetIdle);
window.addEventListener("mousedown", resetIdle);
window.onload = () => { initHover(); resetIdle(); };
