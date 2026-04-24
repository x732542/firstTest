/**
 * 前端導覽手冊 - 核心邏輯 (流星方向修正版)
 */

const body = document.body;
const textC = document.getElementById("textC");

// 1. 各語言內容與 Hover 資料配置
const info = {
  html: {
    target: document.getElementById("container-html"),
    text: "HTML (HyperText Markup Language)：這不是程式語言，是「標記語言」。它用標籤包裹內容，告訴瀏覽器這是一段文字、一張圖，還是一個按鈕。",
    color: "#E34C26",
    bgClass: "bg-html-theme",
  },
  css: {
    target: document.getElementById("container-css"),
    text: "CSS：網頁的「外衣」，如同七彩光譜定義美感與佈局。",
    color: "#0056b3",
    bgClass: "bg-css-theme",
    spectrum: "bg-css-spectrum",
  },
  js: {
    target: document.getElementById("container-js"),
    text: "JavaScript：這是網頁的「大腦」。它不只定義靜態，更處理『如果點擊按鈕，就執行某個動作』的邏輯判斷與資料運算。",
    color: "#D4AC0D",
    bgClass: "bg-js-theme",
  },
};

// 2. JS 圖片點擊旋轉特效邏輯
const jsImg = document.getElementById("JSimg");
if (jsImg) {
  jsImg.addEventListener("click", () => {
    jsImg.style.transition =
      "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    jsImg.style.transform = "rotate(360deg) scale(1.2)";
    const originalText = textC.innerText;
    textC.innerText = "正在執行邏輯運算函式... Done!";
    setTimeout(() => {
      jsImg.style.transform = "";
      textC.innerText = originalText;
    }, 1000);
  });
}

// 3. 初始化 Hover 監聽函式
function initHover() {
  Object.keys(info).forEach((lang) => {
    const item = info[lang];
    if (item.target) {
      item.target.addEventListener("mouseenter", () => {
        body.classList.add(item.bgClass);
        if (item.spectrum) body.classList.add(item.spectrum);
        textC.innerText = item.text;
        textC.style.color = item.color;
        textC.classList.add("text-active");
      });
      item.target.addEventListener("mouseleave", () => {
        body.classList.remove(item.bgClass);
        if (item.spectrum) body.classList.remove(item.spectrum);
        textC.innerText = "請將滑鼠移至圖片上開始學習";
        textC.style.color = "black";
        textC.classList.remove("text-active");
      });
    }
  });
}

// 4. 流星畫布閒置邏輯
const canvas = document.getElementById("starfieldCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let idleTimer;
let isIdle = false;
let stars = [];
let canvasOpacity = 0;

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

    if (this.direction === 0) {
      this.x = Math.random() * (canvas.width + 200);
      this.y = Math.random() * -100;
    } else {
      this.x = Math.random() * (canvas.width - 200) - 200;
      this.y = Math.random() * -100;
    }

    // 彗星屬性：比流星更大、稍慢、拖尾更長
    this.length = this.isComet
      ? Math.random() * 300 + 200
      : Math.random() * 150 + 100;
    this.speed = this.isComet ? Math.random() * 3 + 2 : Math.random() * 10 + 6;
    this.size = this.isComet ? Math.random() * 6 + 4 : Math.random() * 4 + 2;
    // 彗星顏色偏藍白色調，區分流星的橘黃色
    this.color = this.isComet
      ? `rgba(200, 230, 255, ${Math.random() * 0.5 + 0.5})`
      : `rgba(255, 165, 0, ${Math.random() * 0.5 + 0.5})`;
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    ctx.globalAlpha = canvasOpacity;

    const tailX =
      this.direction === 0 ? this.x + this.length : this.x - this.length;
    const tailY = this.y - this.length;

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

    // 彗星額外效果：發光的頭部
    if (this.isComet) {
      ctx.shadowBlur = 15;
      ctx.shadowColor = this.color;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2 + 1, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  update() {
    if (this.direction === 0) {
      this.x -= this.speed * (this.isComet ? 1 : 1.2);
    } else {
      this.x += this.speed * (this.isComet ? 1 : 1.2);
    }
    this.y += this.speed;

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
  if (!isIdle && canvasOpacity <= 0) {
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }
  if (isIdle) {
    canvasOpacity = Math.min(canvasOpacity + 0.02, 1);
  } else {
    canvasOpacity = Math.max(canvasOpacity - 0.02, 0);
  }
  ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * canvasOpacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}

function resetIdle() {
  isIdle = false;
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    isIdle = true;
    if (stars.length === 0)
      stars = Array.from({ length: 15 }, () => new ShootingStar());
    animate();
  }, 5000);
}

// 5. 事件監聽與載入啟動
window.addEventListener("mousemove", resetIdle);
window.addEventListener("mousedown", resetIdle);

window.onload = () => {
  initHover();
  resetIdle();
};
