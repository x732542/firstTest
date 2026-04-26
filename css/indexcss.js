const cssData = {
    'box-model': {
        title: "Box Model · 盒子模型",
        badge: "CSS 核心基礎",
        concept: "在 CSS 中，每個元素都是一個盒子。理解 Padding (內距)、Border (邊框) 與 Margin (外距) 的關係，才能精準控制排版。",
        analogy: "想像它是一個包裹：內容物是產品，Padding 是防撞泡棉，Border 是紙箱，Margin 是包裹間的距離。",
        anatomy: [
            { prop: "Padding", desc: "文字與邊框的距離，會讓內部空間變大。" },
            { prop: "Border", desc: "紙箱本體，可控制粗細、顏色與樣式。" },
            { prop: "Margin", desc: "盒子外面的留白，用來推開其他鄰居。" },
            { prop: "box-sizing", desc: "決定寬高是否把 padding 與 border 算進去，實務上常用 border-box。" }
        ],
        caution: "⚠️ 警告：增加 Padding 會撐大盒子！建議加入 <code>box-sizing: border-box;</code> 鎖定寬度。",
        why: "幾乎所有卡片、按鈕、輸入框與區塊式排版，底層都離不開盒子模型。",
        defaultCode: "width: 220px;\npadding: 32px;\nborder: 8px solid #0d6efd;\nmargin: 20px;\nbox-sizing: border-box;\nbackground-color: #e7f0ff;\ncolor: #0d6efd;"
    },
    'flexbox': {
        title: "Flexbox · 彈性佈局",
        badge: "排版救星",
        concept: "最強大的置中與排列工具。讓容器內的元素可以像橡皮筋一樣伸縮，輕鬆解決垂直水平置中的噩夢。",
        analogy: "你就像是電影院的排位人員：可以讓客人全部靠左、置中、或是均勻散開坐。",
        anatomy: [
            { prop: "display: flex", desc: "啟動魔法。寫在父容器上，控制裡面的小孩。" },
            { prop: "justify-content", desc: "控制水平排列（center, space-between 等）。" },
            { prop: "align-items", desc: "控制垂直排列（center, flex-end 等）。" },
            { prop: "flex-direction", desc: "決定主軸方向，橫排 row 或直排 column。" },
            { prop: "gap", desc: "直接控制子元素之間的間距，不必再靠 margin 微調。" }
        ],
        why: "製作導覽列、置中圖示、響應式列表的唯一選擇。",
        caution: "💡 秘訣：設定 <code>gap: 20px;</code> 可以讓裡面的小孩自動保持間距，不用慢慢算 Margin。",
        defaultCode: "display: flex;\njustify-content: center;\nalign-items: center;\nheight: 120px;\nwidth: 300px;\ngap: 20px;\nbackground-color: #20c997;\ncolor: white;\nborder-radius: 15px;"
    },
    'glassmorphism': {
        title: "Glass · 玻璃擬態",
        badge: "現代美學",
        concept: "讓 UI 看起來像一塊半透明的磨砂玻璃。核心是利用透明背景加上背景模糊濾鏡。",
        analogy: "想像在你的 App 上疊了一塊起霧的玻璃，這能大幅提升介面的高級質感。",
        anatomy: [
            { prop: "background: rgba", desc: "必須使用半透明顏色 (Alpha < 1)。" },
            { prop: "backdrop-filter", desc: "這是靈魂！負責產生模糊效果。" },
            { prop: "box-shadow", desc: "微弱的投影能增加立體浮空感。" },
            { prop: "border", desc: "用低透明白邊框營造玻璃邊緣反光。" }
        ],
        why: "適用於彈出視窗、側邊選單、或是高質感的卡片設計。",
        caution: "⚠️ 提醒：背景一定要有顏色或圖片，磨砂玻璃的效果才看得出來喔！",
        defaultCode: "background: rgba(255, 255, 255, 0.25);\nbackdrop-filter: blur(10px);\nborder: 1px solid rgba(255,255,255,0.3);\npadding: 40px;\nborder-radius: 20px;\nbox-shadow: 0 8px 32px rgba(0,0,0,0.1);\ncolor: #333;"
    },
    'shadows': {
        title: "Shadows · 光影空間",
        badge: "立體層次",
        concept: "陰影能模擬光線，讓平面網頁產生高度。陰影越大、越模糊，物體看起來就浮得越高。",
        analogy: "陰影代表了物體與地面的『高度』。好的陰影會讓 UI 顯得輕盈，壞的陰影則顯得髒亂。",
        anatomy: [
            { prop: "Blur (模糊)", desc: "數值越大影越柔和。新手建議設 10px 以上。" },
            { prop: "Spread (擴散)", desc: "可讓陰影範圍再外擴，做出柔和包覆感。" },
            { prop: "Color (RGBA)", desc: "請使用帶有透明度的黑色，避免用純黑色。" }
        ],
        why: "卡片、浮動按鈕、彈窗、導覽列和圖片縮圖都很常靠陰影建立層次。",
        caution: "❌ 忌諱：不要把陰影設得太黑太硬。使用 <code>rgba(0,0,0,0.1)</code> 是最專業的作法。",
        relatedProps: ["inset", "box-shadow 多層疊加", "filter: drop-shadow()", "opacity"],
        defaultCode: "background-color: white;\npadding: 40px;\nborder-radius: 25px;\ncolor: #333;\nbox-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);\n/* 嘗試修改最後的 0.15 看看陰影深淺 */"
    },
    'typography': {
        title: "Typography · 文字排版",
        badge: "閱讀體驗",
        concept: "字體不只是選好看而已，字重、字距、行高、大小都直接決定閱讀節奏與品牌語氣。",
        analogy: "同一句話用不同口氣講，感受完全不同。CSS 的文字屬性，就是在調整這種口氣。",
        anatomy: [
            { prop: "font-size", desc: "控制字體大小，是閱讀層級最直接的訊號。" },
            { prop: "font-weight", desc: "控制粗細，可用來做標題與重點。" },
            { prop: "line-height", desc: "決定上下行的呼吸感，太小會擠，太大會散。" },
            { prop: "letter-spacing", desc: "微調字母或文字間距，常用於標題與按鈕。" },
            { prop: "text-transform", desc: "可快速統一大寫、小寫或首字母樣式。" }
        ],
        why: "適合標題、按鈕、Hero 區塊與任何需要建立品牌感的地方。",
        caution: "💡 建議：不要同時把字重、字距、陰影都拉太滿，會讓文字難讀。",
        relatedProps: ["text-align", "font-style", "text-decoration", "word-spacing", "text-shadow"],
        defaultCode: "font-size: 2rem;\nfont-weight: 800;\nline-height: 1.2;\nletter-spacing: 0.08em;\ntext-transform: uppercase;\ncolor: #0f172a;\nbackground: transparent;"
    },
    'backgrounds': {
        title: "Background · 背景設計",
        badge: "視覺氛圍",
        concept: "背景是 UI 的空氣。單色、漸層、位置與尺寸設定，會直接影響整體質感。",
        analogy: "就像攝影棚的背景布，主角不變，但背景一換，情緒就完全不同。",
        anatomy: [
            { prop: "background", desc: "可同時設定顏色、圖片、漸層，是最常用的簡寫。" },
            { prop: "background-image", desc: "放圖片或漸層，建立視覺主題。" },
            { prop: "background-size", desc: "控制背景鋪滿方式，例如 cover、contain。" },
            { prop: "background-position", desc: "調整背景焦點位置，避免重點被切掉。" },
            { prop: "background-repeat", desc: "決定背景是否重複鋪排。" }
        ],
        why: "很適合做按鈕、卡片封面、Banner 與主視覺區塊。",
        caution: "⚠️ 提醒：背景太複雜時，前景文字一定要補對比，不然可讀性會掉。",
        relatedProps: ["background-attachment", "background-origin", "background-clip", "radial-gradient()"],
        defaultCode: "width: 260px;\npadding: 32px;\ncolor: white;\nborder-radius: 24px;\nbackground: linear-gradient(135deg, #0d6efd 0%, #20c997 100%);\nbox-shadow: 0 16px 35px rgba(13, 110, 253, 0.22);"
    },
    'borders': {
        title: "Border Radius · 邊框與圓角",
        badge: "輪廓塑形",
        concept: "邊框和圓角會直接改變元件性格。硬邊偏理性，圓角偏親和，膠囊狀則更像操作按鈕。",
        analogy: "像是在雕塑同一塊肥皂，切角多一點或磨圓一點，手感和印象都會變。",
        anatomy: [
            { prop: "border", desc: "一次設定粗細、樣式與顏色，建立元素輪廓。" },
            { prop: "border-radius", desc: "控制四角圓弧，是改變風格最快的方式之一。" },
            { prop: "outline", desc: "常用於 focus 狀態，與 border 不同，不會影響盒模型尺寸。" },
            { prop: "overflow", desc: "搭配圓角時常設 hidden，讓內部內容不會超出外框。" }
        ],
        why: "按鈕、圖片卡片、輸入框與標籤元件都非常常用。",
        caution: "💡 圓角不是越大越好，元件越小，圓角越應該克制。",
        relatedProps: ["border-top-left-radius", "border-style", "border-width", "outline-offset"],
        defaultCode: "padding: 28px 38px;\nborder: 3px solid #0d6efd;\nborder-radius: 999px;\noutline: 4px solid rgba(13, 110, 253, 0.14);\noutline-offset: 4px;\nbackground: white;\ncolor: #0d6efd;"
    },
    'transform': {
        title: "Transform · 變形效果",
        badge: "動態張力",
        concept: "Transform 可以在不重新排版的前提下，對元素做旋轉、縮放、位移與傾斜，非常適合互動效果。",
        analogy: "像拿著一張貼紙去轉、拉、推，不會改變桌面布局，但視覺上會立刻有動作。",
        anatomy: [
            { prop: "translate", desc: "控制位移，可做 hover 浮起或進場偏移。" },
            { prop: "scale", desc: "控制縮放，常用在卡片放大與按鈕回饋。" },
            { prop: "rotate", desc: "旋轉元素，適合強調方向感或活潑感。" },
            { prop: "transform-origin", desc: "指定變形的中心點，影響旋轉與縮放手感。" }
        ],
        why: "適合卡片 hover、Logo 動態、按鈕互動與視覺焦點強化。",
        caution: "⚠️ 如果 scale 太大，容易讓版面看起來躁動；通常 1.03 到 1.08 就夠。",
        relatedProps: ["skew()", "translateX()", "translateY()", "perspective"],
        defaultCode: "padding: 30px 42px;\nbackground: #111827;\ncolor: white;\nborder-radius: 20px;\ntransform: translateY(-8px) rotate(-2deg) scale(1.05);\nbox-shadow: 0 20px 45px rgba(17, 24, 39, 0.28);"
    },
    'filters': {
        title: "Filter · 濾鏡處理",
        badge: "影像語氣",
        concept: "Filter 能像修圖工具一樣快速調整亮度、對比、模糊和飽和度，適合做狀態變化與實驗性視覺。",
        analogy: "像替元素套上一層 Instagram 濾鏡，整體情緒會瞬間改變。",
        anatomy: [
            { prop: "blur()", desc: "模糊內容，常用在背景層或失焦效果。" },
            { prop: "brightness()", desc: "調整明亮程度，可做 hover 提亮。" },
            { prop: "contrast()", desc: "增加明暗對比，讓元素更有力。" },
            { prop: "saturate()", desc: "提升色彩濃度，讓顏色更飽滿。" },
            { prop: "drop-shadow()", desc: "對透明邊緣也有效的陰影版本。" }
        ],
        why: "適合圖片、圖示、玻璃感元件與互動狀態的氣氛調整。",
        caution: "❌ 濾鏡疊太多容易讓畫面髒掉，通常 1 到 2 個主效果就夠。",
        relatedProps: ["grayscale()", "sepia()", "hue-rotate()", "invert()"],
        defaultCode: "padding: 30px 42px;\nborder-radius: 22px;\nbackground: linear-gradient(135deg, #f97316 0%, #fb7185 100%);\ncolor: white;\nfilter: saturate(1.2) contrast(1.08) drop-shadow(0 18px 30px rgba(249, 115, 22, 0.28));"
    },
    'position': {
        title: "Position · 定位系統",
        badge: "版面控制",
        concept: "定位屬性讓元素跳脫一般文流，能精準地貼齊某個角落、疊在其他元素上方，或固定在視窗某處。",
        analogy: "像在白板上貼便利貼，normal flow 是照順序貼，position 則是你直接指定貼在哪個角。",
        anatomy: [
            { prop: "position", desc: "決定定位模式，常見有 relative、absolute、fixed、sticky。" },
            { prop: "top / right / bottom / left", desc: "搭配定位模式微調元素實際位置。" },
            { prop: "z-index", desc: "控制堆疊順序，數值越高越容易蓋在上面。" },
            { prop: "inset", desc: "top/right/bottom/left 的簡寫，設定更俐落。" },
            { prop: "sticky", desc: "捲動到指定位置時黏住，非常適合側欄與工具列。" }
        ],
        why: "角標、浮動按鈕、通知徽章、固定工具列和浮層都會用到。",
        caution: "⚠️ absolute 會找最近的已定位祖先元素當參考點，忘了設 relative 常常會飛走。",
        relatedProps: ["relative", "absolute", "fixed", "sticky", "z-index"],
        defaultCode: "position: relative;\ntop: -14px;\nleft: 18px;\nz-index: 2;\npadding: 24px 34px;\nbackground: #0d6efd;\ncolor: white;\nborder-radius: 18px;"
    },
    'grid': {
        title: "Grid · 網格佈局",
        badge: "二維排版",
        concept: "Grid 擅長同時控制列與欄，是做版型、儀表板與卡片牆時最穩定的二維排版工具。",
        analogy: "像在報紙版面先畫好格線，再把內容放進指定區塊。",
        anatomy: [
            { prop: "display: grid", desc: "啟用 Grid 容器，開始用列與欄思考版面。" },
            { prop: "grid-template-columns", desc: "定義每一欄寬度，可用 fr、px、minmax()。" },
            { prop: "grid-template-rows", desc: "定義每一列高度。" },
            { prop: "place-items", desc: "同時控制子元素的水平與垂直對齊。" },
            { prop: "gap", desc: "設定格子之間的間距，是 Grid 常用核心屬性。" }
        ],
        why: "儀表板、作品集、商品列表與後台管理頁非常常用。",
        caution: "💡 Grid 比較適合管整體版面；單一軸排列通常還是 Flexbox 更直覺。",
        relatedProps: ["grid-column", "grid-row", "repeat()", "minmax()", "place-content"],
        defaultCode: "display: grid;\nplace-items: center;\nwidth: 280px;\nheight: 140px;\npadding: 24px;\ngap: 12px;\nbackground: linear-gradient(135deg, #0f172a 0%, #334155 100%);\ncolor: white;\nborder-radius: 20px;"
    },
    'transition': {
        title: "Transition · 狀態過渡",
        badge: "互動細節",
        concept: "Transition 讓屬性改變時不是瞬間切換，而是有時間、有節奏地滑過去，使用者會覺得介面更精緻。",
        analogy: "像開關燈時加了漸亮效果，整個空間會顯得比較高級，不那麼生硬。",
        anatomy: [
            { prop: "transition-property", desc: "指定哪些屬性要有過渡效果。" },
            { prop: "transition-duration", desc: "控制過渡時間長度。" },
            { prop: "transition-timing-function", desc: "決定速度曲線，例如 ease、linear、cubic-bezier。" },
            { prop: "transition-delay", desc: "可延後啟動，常用於階段性動畫。" },
            { prop: "transition", desc: "最常用簡寫，一次寫完整組設定。" }
        ],
        why: "按鈕 hover、卡片聚焦、表單狀態切換和抽屜式選單都會用。",
        caution: "❌ 不要對 all 無限制套太多過渡，會讓效能和可控性都變差。",
        relatedProps: ["ease-in-out", "cubic-bezier()", "hover", "focus-visible"],
        defaultCode: "padding: 28px 40px;\nbackground: #111827;\ncolor: white;\nborder-radius: 18px;\nbox-shadow: 0 16px 30px rgba(17, 24, 39, 0.2);\ntransition: transform 260ms ease, box-shadow 260ms ease, background-color 260ms ease;\ntransform: translateY(-4px);"
    },
    'animation': {
        title: "Animation · 關鍵影格動畫",
        badge: "節奏設計",
        concept: "Animation 適合需要持續播放或多階段變化的效果，能讓元素自動依照關鍵影格運動。",
        analogy: "Transition 比較像推門，Animation 比較像跳舞編排，會照節拍自己走完整套動作。",
        anatomy: [
            { prop: "@keyframes", desc: "定義動畫過程中的關鍵狀態。" },
            { prop: "animation-name", desc: "指定要套用哪一組關鍵影格。" },
            { prop: "animation-duration", desc: "每次播放要多久。" },
            { prop: "animation-iteration-count", desc: "控制播放次數，可設 infinite。" },
            { prop: "animation-direction", desc: "控制正播、反播或來回播放。" }
        ],
        why: "載入指示、漂浮卡片、提示圖示和進場特效都很適合。",
        caution: "⚠️ 動畫太長或不停晃動會干擾閱讀，重點是節奏和克制。",
        relatedProps: ["animation-fill-mode", "animation-delay", "animation-play-state", "ease-in-out"],
        defaultCode: "padding: 30px 40px;\nbackground: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);\ncolor: white;\nborder-radius: 24px;\nanimation: floatPulse 2.4s ease-in-out infinite;\nbox-shadow: 0 18px 38px rgba(37, 99, 235, 0.25);"
    },
    'sizing': {
        title: "Sizing · 尺寸系統",
        badge: "空間節奏",
        concept: "尺寸屬性不只是設定寬高，還包含最大值、最小值與比例控制，能讓元件在不同螢幕下維持穩定。",
        analogy: "像替家具設定可伸縮範圍，不是只說它有多大，而是規定它最小和最大能到哪裡。",
        anatomy: [
            { prop: "width / height", desc: "最基本的寬高設定。" },
            { prop: "min-width / min-height", desc: "限制元素不要縮到太小。" },
            { prop: "max-width / max-height", desc: "限制元素不要被撐得過大。" },
            { prop: "aspect-ratio", desc: "讓元素自動維持固定比例。" },
            { prop: "clamp()", desc: "在最小值、理想值、最大值之間做彈性尺寸控制。" }
        ],
        why: "RWD 卡片、圖片容器、按鈕尺寸和模組化元件都很重要。",
        caution: "💡 固定 width 太多會讓 RWD 很痛苦，能用 max-width 或 clamp() 就更穩。",
        relatedProps: ["min()", "max()", "vw", "rem", "aspect-ratio"],
        defaultCode: "width: clamp(180px, 38vw, 320px);\nmin-height: 100px;\naspect-ratio: 3 / 2;\npadding: 24px;\nbackground: #e0f2fe;\ncolor: #0f172a;\nborder-radius: 22px;"
    },
    'overflow': {
        title: "Overflow · 溢出控制",
        badge: "內容裁切",
        concept: "當內容超出容器尺寸時，overflow 決定是要顯示、隱藏、捲動，還是只在必要時出現捲軸。",
        analogy: "像整理抽屜，東西太多時你可以硬塞、蓋起來、或加抽屜軌道讓它能滑動。",
        anatomy: [
            { prop: "overflow", desc: "同時控制水平與垂直溢出。" },
            { prop: "overflow-x", desc: "只控制水平方向溢出。" },
            { prop: "overflow-y", desc: "只控制垂直方向溢出。" },
            { prop: "text-overflow", desc: "文字過長時可用 ellipsis 顯示省略號。" },
            { prop: "white-space", desc: "與文字換行邏輯密切相關，常和 text-overflow 搭配。" }
        ],
        why: "標題截斷、卡片內容裁切、程式碼區塊與橫向表格都很常用。",
        caution: "⚠️ 只寫 text-overflow: ellipsis 不夠，通常還要配 white-space 與 overflow。",
        relatedProps: ["hidden", "auto", "scroll", "ellipsis", "word-break"],
        defaultCode: "width: 180px;\nheight: 88px;\npadding: 16px;\noverflow: auto;\nwhite-space: nowrap;\ntext-overflow: ellipsis;\nbackground: #111827;\ncolor: white;\nborder-radius: 16px;"
    },
    'opacity': {
        title: "Opacity · 透明度與混合",
        badge: "層次透明",
        concept: "透明度能快速建立輕重關係，搭配混合模式時還能做出海報感與層疊視覺效果。",
        analogy: "像在玻璃板上疊多層顏料，透明度越高，底下的顏色就越容易透出來。",
        anatomy: [
            { prop: "opacity", desc: "直接控制元素整體透明程度。" },
            { prop: "rgba / hsla", desc: "只讓背景或顏色透明，不影響子內容。" },
            { prop: "mix-blend-mode", desc: "讓元素與背景顏色互相混色。" },
            { prop: "isolation", desc: "建立新的混合上下文，避免影響外層。" },
            { prop: "visibility", desc: "控制可見性，但和 opacity 在行為上不同。" }
        ],
        why: "標籤淡化、遮罩、玻璃卡片和海報感視覺很常使用。",
        caution: "❌ 對整個容器設 opacity 會連文字一起變淡，想保留文字清晰就改用 rgba 背景。",
        relatedProps: ["background: rgba()", "blend mode", "visibility", "pointer-events"],
        defaultCode: "padding: 30px 42px;\nbackground: rgba(13, 110, 253, 0.55);\ncolor: white;\nborder: 1px solid rgba(255,255,255,0.35);\nborder-radius: 20px;\nbackdrop-filter: blur(8px);\nbox-shadow: 0 16px 32px rgba(13, 110, 253, 0.18);"
    }
};

const tagList = document.getElementById('tag-list');
const detailArea = document.getElementById('detail-area');
const editor = document.getElementById('code-editor');
const target = document.getElementById('target-element');

function initMenu() {
    tagList.innerHTML = '';
    Object.keys(cssData).forEach(key => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'tag-item';
        button.setAttribute('data-css-key', key);
        button.innerHTML = `
            <div>
                <div class="badge-category">${cssData[key].badge}</div>
                <div class="fw-bold">${cssData[key].title.split(' · ')[1]}</div>
            </div>
            <i class="bi bi-chevron-right opacity-50"></i>
        `;
        button.addEventListener('click', () => loadCSS(key, button));
        tagList.appendChild(button);
    });

    const firstButton = tagList.querySelector('[data-css-key]');
    if (firstButton) {
        loadCSS(firstButton.dataset.cssKey, firstButton);
    }
}

function loadCSS(key, element) {
    const data = cssData[key];

    document.querySelectorAll('.tag-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    detailArea.innerHTML = `
        <div class="animate__animated animate__fadeIn">
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle mb-2">${data.badge}</span>
            <h2 class="fw-bold text-dark mb-4">${data.title}</h2>

            <h6 class="fw-bold"><i class="bi bi-journal-text text-primary"></i> 屬性核心概念</h6>
            <p class="text-secondary small mb-4" style="line-height: 1.8;">${data.concept}</p>

            ${data.why ? `
            <div class="p-3 rounded-4 mb-4" style="background: rgba(13, 110, 253, 0.08); border: 1px solid rgba(13, 110, 253, 0.12);">
                <h6 class="fw-bold text-primary small mb-1"><i class="bi bi-lightbulb-fill"></i> 實戰適用場景</h6>
                <p class="small mb-0 text-dark">${data.why}</p>
            </div>` : ''}

            <div class="p-3 bg-primary-subtle border-start border-4 border-primary rounded-end mb-4">
                <h6 class="fw-bold text-primary small"><i class="bi bi-chat-quote-fill"></i> 老師的生活化譬喻</h6>
                <p class="small mb-0 text-dark italic">${data.analogy}</p>
            </div>

            <div class="d-flex align-items-center justify-content-between mb-2 gap-2 flex-wrap">
                <h6 class="fw-bold mb-0">🛠 關鍵屬性拆解</h6>
                <span class="badge rounded-pill bg-light text-dark border">${data.anatomy.length} 個核心屬性</span>
            </div>
            <div class="table-responsive mb-4">
                <table class="table table-sm table-hover border">
                    <thead class="table-light"><tr><th class="small">屬性</th><th class="small">作用</th></tr></thead>
                    <tbody>
                        ${data.anatomy.map(a => `<tr><td class="font-monospace small fw-bold">${a.prop}</td><td class="small">${a.desc}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>

            ${data.relatedProps ? `
            <div class="mb-4">
                <h6 class="fw-bold mb-2"><i class="bi bi-diagram-3-fill text-primary"></i> 延伸屬性速覽</h6>
                <div class="d-flex flex-wrap gap-2">
                    ${data.relatedProps.map(prop => `<span class="badge rounded-pill bg-white text-dark border">${prop}</span>`).join('')}
                </div>
            </div>` : ''}

            <div class="p-3 bg-danger-subtle rounded border border-danger-subtle">
                <h6 class="fw-bold text-danger mb-1 small"><i class="bi bi-exclamation-octagon-fill"></i> 避坑指南</h6>
                <p class="small mb-0 text-danger-emphasis">${data.caution}</p>
            </div>
        </div>
    `;

    editor.value = data.defaultCode;
    applyPreviewStyles(data.defaultCode);
}

function applyPreviewStyles(cssText) {
    target.style.cssText = cssText;
}

editor.addEventListener('input', function () {
    applyPreviewStyles(this.value);
});

initMenu();