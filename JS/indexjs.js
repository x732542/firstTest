const defaultListItems = [
    { label: '範例項目 A', value: 1 },
    { label: '範例項目 B', value: 2 },
    { label: '範例項目 C', value: 3 }
];

const initialPreviewState = {
    text: 'Hello JS',
    subtext: '現在的預覽區正在等待你的 JavaScript 指令。',
    status: 'Ready',
    input: 'JavaScript',
    buttonText: '點擊執行',
    secondaryText: '次要按鈕',
    activeTab: 'Overview',
    progress: 35,
    toastText: '這是一則前端通知訊息。',
    toastVisible: false,
    dropdown: 'Design',
    modalTitle: '前端提示視窗',
    modalText: '這裡可以顯示短訊息、確認內容或操作摘要。',
    modalVisible: false
};

const jsLessons = {
    dom_edit: {
        title: 'DOM · 改寫內容與樣式',
        level: '初階',
        tags: ['DOM', 'style'],
        concept: '透過 querySelector 找到節點後，可以直接修改文字、class 或 style，立即改變畫面結果。',
        analogy: '像在攝影棚裡調度場景，JS 指向哪個元素，就能立刻幫它換字幕、燈光與狀態。',
        highlights: ['文字節點更新', '內聯樣式', '多元素同步調整'],
        steps: ['抓到要操作的元素', '寫入新的文字或樣式', '用 console 驗證程式有確實執行'],
        code: `const title = document.querySelector('#target-text');
const subtext = document.querySelector('#target-subtext');
const actionButton = document.querySelector('#target-btn');

title.innerText = 'DOM 已經更新完成';
title.style.color = '#dd7f0a';
title.style.letterSpacing = '0.08em';
subtext.innerText = '你可以直接改文字，也可以改樣式。';
actionButton.innerText = '更新完成';

helpers.setStatus('DOM Updated');
console.log('DOM 範例執行完成');`
    },
    event_basic: {
        title: 'Event · 點擊事件與狀態切換',
        level: '初階',
        tags: ['event', 'state'],
        concept: '事件監聽讓畫面可以回應使用者操作。這是互動式網頁最重要的基礎之一。',
        analogy: '像門口的感應器，只有在有人接近或按下按鈕時，系統才開始觸發動作。',
        highlights: ['事件監聽', '區域狀態計數', '畫面同步回饋'],
        steps: ['建立一個 state 變數', '對按鈕註冊 click 事件', '每次點擊時更新畫面'],
        code: `const button = document.querySelector('#target-btn');
const title = document.querySelector('#target-text');
let clickCount = 0;

helpers.setStatus('Waiting Click');
title.innerText = '按右邊黃色按鈕看看';

helpers.on(button, 'click', () => {
    clickCount += 1;
    title.innerText = '你已點擊 ' + clickCount + ' 次';
    helpers.setStatus('Clicks: ' + clickCount);
    console.log('clickCount =', clickCount);
});`
    },
    array_render: {
        title: 'Array · 陣列渲染清單',
        level: '中階',
        tags: ['array', 'map'],
        concept: '陣列搭配 map 與 join，可以很快把資料轉成畫面內容，是前端渲染資料的常見模式。',
        analogy: '像把倉庫清單逐項貼上標籤，再整齊排成貨架。',
        highlights: ['陣列方法', '資料轉畫面', '動態列表'],
        steps: ['準備資料陣列', '轉換為畫面格式', '渲染到清單容器'],
        code: `const keywords = ['closure', 'promise', 'event loop', 'localStorage'];

helpers.renderList(
    keywords.map((keyword, index) => ({
        label: keyword.toUpperCase(),
        value: index + 1
    }))
);

document.querySelector('#target-text').innerText = '陣列已轉成清單';
document.querySelector('#target-subtext').innerText = '試著修改 keywords，觀察列表怎麼變。';
helpers.setStatus('Array Rendered');
console.log('已渲染 ' + keywords.length + ' 筆資料');`
    },
    timer: {
        title: 'Async · 計時器與節奏控制',
        level: '中階',
        tags: ['async', 'timer'],
        concept: 'setTimeout 與 setInterval 讓程式不必同步完成全部流程，可以安排稍後再做的任務。',
        analogy: '像安排舞台 cue 點，燈光、字幕與音效會在指定時間依序出場。',
        highlights: ['延遲執行', '循序變化', '生命週期管理'],
        steps: ['先設定初始畫面', '建立計時器', '在適當時機更新狀態'],
        code: `const title = document.querySelector('#target-text');
const status = ['Booting', 'Loading Modules', 'Ready'];

title.innerText = '系統啟動中...';
helpers.setStatus(status[0]);

status.slice(1).forEach((label, index) => {
    helpers.delay(() => {
        helpers.setStatus(label);
        title.innerText = '階段：' + label;
        console.log('切換到', label);
    }, (index + 1) * 900);
});`
    },
    form_sync: {
        title: 'Form · 讀取輸入框資料',
        level: '初中階',
        tags: ['input', 'value'],
        concept: 'DOM 不只負責顯示，也能讀取使用者輸入，再把結果同步到其他區塊。',
        analogy: '像櫃台人員收到表單後，立刻把資訊更新到看板。',
        highlights: ['input value', '條件判斷', '畫面同步'],
        steps: ['抓取輸入框值', '檢查是否有內容', '回寫到標題與狀態'],
        code: `const input = document.querySelector('#target-input');
const title = document.querySelector('#target-text');
const subtext = document.querySelector('#target-subtext');
const name = input.value.trim();

if (!name) {
    helpers.setStatus('Empty Input');
    console.warn('請先輸入一些文字');
} else {
    title.innerText = 'Hello, ' + name + '!';
    subtext.innerText = '輸入框的內容已被讀取並同步到畫面。';
    helpers.setStatus('Synced: ' + name);
    console.log('輸入值為', name);
}`
    },
    condition_flow: {
        title: 'Condition · 條件判斷與分支',
        level: '初中階',
        tags: ['if', 'condition'],
        concept: '條件判斷可以讓程式依照不同輸入做出不同反應，是流程控制最常見的基本功。',
        analogy: '像櫃台分流機制，依照來客條件把人導向不同窗口。',
        highlights: ['if else', '字串判斷', '多結果分支'],
        steps: ['讀取輸入值', '設定判斷條件', '依條件更新畫面與狀態'],
        code: `const input = document.querySelector('#target-input').value.trim().toLowerCase();
const title = document.querySelector('#target-text');
const subtext = document.querySelector('#target-subtext');

if (input.includes('js')) {
    title.innerText = '你輸入了 JS 關鍵字';
    subtext.innerText = '條件成立，所以畫面切到第一個分支。';
    helpers.setStatus('Matched JS');
} else if (input.length >= 6) {
    title.innerText = '字數夠長，可以進第二分支';
    subtext.innerText = '這次不是關鍵字命中，而是長度條件成立。';
    helpers.setStatus('Length >= 6');
} else {
    title.innerText = '條件都沒命中';
    subtext.innerText = '試著輸入 javascript 或更長的文字。';
    helpers.setStatus('No Match');
}

console.log('input =', input || '(empty)');`
    },
    object_profile: {
        title: 'Object · 物件資料驅動畫面',
        level: '中階',
        tags: ['object', 'data'],
        concept: '物件可以把一組相關資料綁在一起，適合描述人物、商品、卡片或設定資料。',
        analogy: '像一張角色卡，上面集中記錄名稱、角色、等級與技能。',
        highlights: ['物件屬性', '資料結構', '單一來源更新畫面'],
        steps: ['建立物件', '取出屬性', '將資料同步到文字與列表'],
        code: `const profile = {
    name: 'JS Explorer',
    role: 'Frontend Learner',
    streak: 12,
    skills: ['DOM', 'Events', 'Async']
};

document.querySelector('#target-text').innerText = profile.name;
document.querySelector('#target-subtext').innerText = profile.role + '，已連續學習 ' + profile.streak + ' 天';

helpers.renderList(
    profile.skills.map((skill, index) => ({
        label: skill,
        value: 'Lv.' + (index + 1)
    }))
);

helpers.setStatus('Object Loaded');
console.log('目前角色資料', profile);`
    },
    destructuring: {
        title: 'Syntax · 解構賦值快速取值',
        level: '中階',
        tags: ['destructuring', 'syntax'],
        concept: '解構賦值可以讓你從物件或陣列快速取出需要的欄位，程式會更精簡。',
        analogy: '像從工具箱一次拿出最常用的幾個工具，不必整箱搬走。',
        highlights: ['物件解構', '陣列解構', '語法精簡'],
        steps: ['建立資料來源', '用解構取值', '將取出的值套進畫面'],
        code: `const lesson = {
    title: 'Modern JavaScript',
    category: 'Syntax',
    stats: [18, 5]
};

const { title, category } = lesson;
const [minutes, exercises] = lesson.stats;

document.querySelector('#target-text').innerText = title;
document.querySelector('#target-subtext').innerText = category + ' 類別，估計 ' + minutes + ' 分鐘，包含 ' + exercises + ' 個練習。';
helpers.setStatus('Destructured');
console.log('title =', title, 'minutes =', minutes);`
    },
    array_filter_reduce: {
        title: 'Array · filter 與 reduce 統計',
        level: '中高階',
        tags: ['filter', 'reduce'],
        concept: 'filter 負責挑資料，reduce 負責把資料累積成一個結果，常用於統計與摘要。',
        analogy: '像先篩出合格名單，再統計總分與平均。',
        highlights: ['資料篩選', '累積統計', '摘要輸出'],
        steps: ['準備數值陣列', '先 filter', '再用 reduce 算總和'],
        code: `const scores = [72, 88, 91, 64, 95, 83];
const passed = scores.filter(score => score >= 80);
const total = passed.reduce((sum, score) => sum + score, 0);
const average = Math.round(total / passed.length);

document.querySelector('#target-text').innerText = '通過人數：' + passed.length;
document.querySelector('#target-subtext').innerText = '通過者平均分數：' + average;

helpers.renderList(
    passed.map((score, index) => ({
        label: '學員 ' + (index + 1),
        value: score
    }))
);

helpers.setStatus('Stats Ready');
console.log('passed =', passed, 'total =', total);`
    },
    button_toggle: {
        title: 'UI · 按鈕切換與 class 狀態',
        level: '中階',
        tags: ['class', 'toggle'],
        concept: '透過 className 或 classList 切換樣式，是最常見的 UI 狀態控制方法之一。',
        analogy: '像控制舞台燈號，按一下切成警示，再按一下回到正常。',
        highlights: ['class 切換', '布林狀態', '雙按鈕互動'],
        steps: ['建立布林狀態', '點擊時翻轉狀態', '把結果同步到按鈕與文字'],
        code: `const primary = document.querySelector('#target-btn');
const secondary = document.querySelector('#secondary-btn');
const title = document.querySelector('#target-text');
let isAlertMode = false;

function renderMode() {
    primary.className = isAlertMode ? 'btn btn-danger' : 'btn btn-warning';
    secondary.className = isAlertMode ? 'btn btn-dark' : 'btn btn-outline-dark';
    title.innerText = isAlertMode ? '警示模式啟動' : '一般模式';
    helpers.setStatus(isAlertMode ? 'Alert Mode' : 'Normal Mode');
}

helpers.on(primary, 'click', () => {
    isAlertMode = !isAlertMode;
    renderMode();
});

helpers.on(secondary, 'click', () => {
    isAlertMode = false;
    renderMode();
    console.log('已重設為一般模式');
});

renderMode();`
    },
    promise_basic: {
        title: 'Promise · 非同步結果回傳',
        level: '進階',
        tags: ['promise', 'async'],
        concept: 'Promise 用來包裝未來才會完成的結果，讓非同步流程能更有結構地串接。',
        analogy: '像訂餐後拿到號碼牌，餐點還沒好，但你知道稍後會收到結果。',
        highlights: ['Promise 建立', 'then 串接', '非同步結果處理'],
        steps: ['建立 Promise', '模擬延遲回傳', '在 then 中更新畫面'],
        code: `const title = document.querySelector('#target-text');
title.innerText = '等待 Promise 完成...';
helpers.setStatus('Pending');

const fakeRequest = new Promise((resolve) => {
    helpers.delay(() => {
        resolve({ course: 'JavaScript', progress: '85%' });
    }, 1200);
});

fakeRequest.then((result) => {
    title.innerText = result.course + ' 學習進度';
    document.querySelector('#target-subtext').innerText = '目前完成度：' + result.progress;
    helpers.setStatus('Promise Resolved');
    console.log('非同步資料', result);
});`
    },
    local_storage: {
        title: 'Browser · localStorage 本機儲存',
        level: '中高階',
        tags: ['storage', 'browser'],
        concept: 'localStorage 可以把資料存在瀏覽器本機端，重新整理頁面後仍能保留，是典型的前端持久化工具。',
        analogy: '像桌上的便利貼，不用連到外部系統，也能先把重要資訊留下來。',
        highlights: ['瀏覽器儲存', '讀寫資料', '重新載入可保留'],
        steps: ['讀取輸入框文字', '寫入 localStorage', '立即回寫到畫面驗證'],
        code: `const storageKey = 'js-lab-note';
const input = document.querySelector('#target-input');
const title = document.querySelector('#target-text');
const value = input.value.trim() || '前端練習中';

localStorage.setItem(storageKey, value);
const saved = localStorage.getItem(storageKey);

title.innerText = '已儲存：' + saved;
document.querySelector('#target-subtext').innerText = '重新執行或重新整理後，資料仍會留在瀏覽器。';
helpers.setStatus('Stored Locally');
console.log('localStorage[' + storageKey + '] =', saved);`
    },
    dataset_control: {
        title: 'DOM · dataset 自訂資料屬性',
        level: '中階',
        tags: ['dataset', 'attribute'],
        concept: 'dataset 讓元素可以攜帶自訂資料，常用來做按鈕狀態、卡片類型與互動標記。',
        analogy: '像幫每個元件貼上內部標籤，畫面上看不到，但程式可以直接讀取。',
        highlights: ['data-* 屬性', '自訂狀態', 'DOM 資料讀寫'],
        steps: ['把資料寫進 dataset', '用按鈕切換狀態', '將狀態反映到畫面'],
        code: `const button = document.querySelector('#target-btn');
const title = document.querySelector('#target-text');

button.dataset.mode = 'preview';
button.innerText = '切換模式';

helpers.on(button, 'click', () => {
    button.dataset.mode = button.dataset.mode === 'preview' ? 'edit' : 'preview';
    title.innerText = '目前模式：' + button.dataset.mode;
    document.querySelector('#target-subtext').innerText = '這個狀態是存在 data-mode 屬性裡。';
    helpers.setStatus('Mode: ' + button.dataset.mode);
    console.log('dataset.mode =', button.dataset.mode);
});

title.innerText = '目前模式：' + button.dataset.mode;`
    },
    form_validation: {
        title: 'Form · 前端表單驗證',
        level: '中階',
        tags: ['form', 'validation'],
        concept: '前端驗證可以在送出前先檢查格式，立即給使用者回饋，減少無效操作。',
        analogy: '像門口先做初步檢查，條件不符就先提醒，不必等到後面流程才發現。',
        highlights: ['trim', '長度驗證', '錯誤提示'],
        steps: ['讀取欄位', '設定驗證規則', '依結果顯示成功或錯誤'],
        code: `const input = document.querySelector('#target-input');
const title = document.querySelector('#target-text');
const subtext = document.querySelector('#target-subtext');
const value = input.value.trim();

if (value.length < 4) {
    title.innerText = '驗證失敗';
    subtext.innerText = '至少輸入 4 個字元，才算通過。';
    input.style.borderColor = '#c24646';
    helpers.setStatus('Invalid');
    console.warn('輸入長度不足');
} else {
    title.innerText = '驗證成功';
    subtext.innerText = '目前輸入值：' + value;
    input.style.borderColor = '#188b5b';
    helpers.setStatus('Valid');
    console.log('驗證通過', value);
}`
    },
    keyboard_event: {
        title: 'Event · 鍵盤事件互動',
        level: '中階',
        tags: ['keyboard', 'event'],
        concept: 'keydown 事件可用來做快捷鍵、輸入回應或遊戲控制，是前端常見的操作方式。',
        analogy: '像即時控制台，按下不同按鍵就會觸發對應指令。',
        highlights: ['keydown', '快捷鍵', '即時回饋'],
        steps: ['監聽鍵盤事件', '讀取按下的 key', '把結果更新到畫面'],
        code: `const title = document.querySelector('#target-text');
const subtext = document.querySelector('#target-subtext');

title.innerText = '試著按鍵盤任一鍵';
subtext.innerText = '目前這個範例會監聽整個頁面的 keydown。';
helpers.setStatus('Listening Keys');

helpers.on(window, 'keydown', (event) => {
    title.innerText = '你按下：' + event.key;
    subtext.innerText = '鍵碼：' + event.code;
    helpers.setStatus('Key: ' + event.key);
    console.log('keydown', event.key, event.code);
});`
    },
    animation_pulse: {
        title: 'UI · 動畫節奏與過場效果',
        level: '中階',
        tags: ['animation', 'style'],
        concept: '前端常透過 transition 與 transform 製作過場效果，讓狀態變化更容易被感知。',
        analogy: '像舞台轉場，畫面不是瞬間切換，而是有節奏地過渡。',
        highlights: ['transition', 'transform', '視覺回饋'],
        steps: ['先設定 transition', '在事件中改變 transform', '延遲後再還原'],
        code: `const title = document.querySelector('#target-text');
const button = document.querySelector('#target-btn');

title.style.transition = 'transform 0.35s ease, color 0.35s ease';
title.innerText = '點按鈕觸發動畫';
helpers.setStatus('Animation Ready');

helpers.on(button, 'click', () => {
    title.style.transform = 'scale(1.12) translateY(-4px)';
    title.style.color = '#dd7f0a';
    document.querySelector('#target-subtext').innerText = '動畫啟動後，0.4 秒會自動回到原位。';
    helpers.setStatus('Animating');

    helpers.delay(() => {
        title.style.transform = 'scale(1) translateY(0)';
        title.style.color = '';
        helpers.setStatus('Animation Done');
    }, 400);
});`
    },
    tabs_switch: {
        title: 'UI · Tabs 分頁切換',
        level: '中階',
        tags: ['tabs', 'classList'],
        concept: 'Tabs 是常見的前端元件，核心在於切換 active 狀態並更新對應內容。',
        analogy: '像文件夾分頁，點到哪一格，畫面就切到哪一組內容。',
        highlights: ['active 樣式', '事件代理', '內容同步'],
        steps: ['抓出所有 tab', '點擊後移除舊 active', '替新 tab 加上 active 並更新標題'],
        code: `const tabs = helpers.qsa('#tab-row .tab-chip');
const title = document.querySelector('#target-text');
const caption = document.querySelector('#tab-caption');

tabs.forEach((tab) => {
    helpers.on(tab, 'click', () => {
        tabs.forEach((item) => item.classList.remove('active'));
        tab.classList.add('active');
        const current = tab.dataset.tab;
        title.innerText = '你切到了 ' + current;
        caption.innerText = '目前分頁：' + current;
        helpers.setStatus('Tab: ' + current);
        console.log('active tab =', current);
    });
});`
    },
    progress_bar: {
        title: 'UI · 進度條控制',
        level: '中階',
        tags: ['progress', 'style'],
        concept: '進度條是最直觀的狀態回饋元件之一，通常透過寬度或 transform 來更新。',
        analogy: '像任務看板上的完成度，越往右代表越接近完成。',
        highlights: ['style.width', '狀態遞增', '視覺回饋'],
        steps: ['抓到進度元素', '定義目前百分比', '按鈕點擊時更新寬度與文字'],
        code: `const fill = document.querySelector('#progress-fill');
const label = document.querySelector('#progress-label');
const button = document.querySelector('#target-btn');
let progress = 35;

function renderProgress() {
    fill.style.width = progress + '%';
    label.innerText = progress + '%';
    document.querySelector('#target-text').innerText = '目前進度 ' + progress + '%';
    helpers.setStatus('Progress ' + progress + '%');
}

helpers.on(button, 'click', () => {
    progress = progress >= 100 ? 0 : progress + 20;
    renderProgress();
});

renderProgress();`
    },
    toast_notice: {
        title: 'UI · Toast 通知提示',
        level: '中階',
        tags: ['toast', 'feedback'],
        concept: 'Toast 適合做短暫提示，讓使用者知道操作成功或狀態已更新。',
        analogy: '像手機上方瞬間滑出的通知條，不打斷流程但會留下回饋。',
        highlights: ['顯示/隱藏', '延遲關閉', '狀態提示'],
        steps: ['準備通知節點', '按下按鈕顯示', '延遲後自動隱藏'],
        code: `const toast = document.querySelector('#toast-box');
const toastState = document.querySelector('#toast-state');
const button = document.querySelector('#target-btn');

helpers.on(button, 'click', () => {
    toast.classList.remove('is-hidden');
    toast.innerText = '已儲存目前前端設定';
    toastState.innerText = 'toast 顯示中';
    helpers.setStatus('Toast Visible');

    helpers.delay(() => {
        toast.classList.add('is-hidden');
        toastState.innerText = 'toast 隱藏中';
        helpers.setStatus('Toast Hidden');
    }, 1400);
});

document.querySelector('#target-text').innerText = '按按鈕顯示通知';`
    },
    accordion_toggle: {
        title: 'UI · Accordion 摺疊面板',
        level: '中高階',
        tags: ['accordion', 'toggle'],
        concept: 'Accordion 的本質是顯示一段、收起另一段，常見於 FAQ、設定區與教學步驟。',
        analogy: '像折頁資料夾，一次展開一格，避免資訊全部攤開太亂。',
        highlights: ['區塊顯示切換', '事件監聽', '單開邏輯'],
        steps: ['抓取每個章節', '點擊時先收合全部', '只展開目前選到的章節'],
        code: `const items = helpers.qsa('#accordion-box .accordion-item-lite');

items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const body = item.querySelector('.accordion-body-lite');

    helpers.on(trigger, 'click', () => {
        items.forEach((other) => {
            other.querySelector('.accordion-body-lite').classList.add('is-hidden');
        });
        body.classList.remove('is-hidden');
        document.querySelector('#target-text').innerText = trigger.innerText;
        helpers.setStatus('Accordion Open');
        console.log('opened =', trigger.innerText);
    });
});`
    },
    dropdown_select: {
        title: 'UI · Dropdown 選單切換',
        level: '中階',
        tags: ['dropdown', 'menu'],
        concept: 'Dropdown 的核心是切換目前選取值，並把狀態反映到按鈕、清單與內容區。',
        analogy: '像控制台上的模式切換器，選哪個模式就套用哪組設定。',
        highlights: ['資料屬性', 'active 狀態', '選單同步'],
        steps: ['抓取所有 option', '點擊時更新 active', '同步更新標題和說明'],
        code: `const options = helpers.qsa('#dropdown-menu .dropdown-option');
const toggle = document.querySelector('#dropdown-toggle');
const caption = document.querySelector('#dropdown-caption');

options.forEach((option) => {
    helpers.on(option, 'click', () => {
        options.forEach((item) => item.classList.remove('active'));
        option.classList.add('active');
        const value = option.dataset.option;
        toggle.innerText = value;
        caption.innerText = '目前選項：' + value;
        document.querySelector('#target-text').innerText = '你選了 ' + value;
        helpers.setStatus('Dropdown: ' + value);
        console.log('selected option =', value);
    });
});`
    },
    modal_dialog: {
        title: 'UI · Modal 對話視窗',
        level: '中階',
        tags: ['modal', 'dialog'],
        concept: 'Modal 常用於確認操作、提示重點或顯示補充內容，重點在顯示與關閉控制。',
        analogy: '像工作流程中的暫停提示卡，先把注意力集中到一件事上。',
        highlights: ['顯示/隱藏', '內容注入', '按鈕互動'],
        steps: ['抓出 modal 節點', '按按鈕顯示內容', '用另一顆按鈕關閉或改寫狀態'],
        code: `const modal = document.querySelector('#modal-lite');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');
const openButton = document.querySelector('#target-btn');
const closeButton = document.querySelector('#secondary-btn');

openButton.innerText = '打開 Modal';
closeButton.innerText = '關閉 Modal';

helpers.on(openButton, 'click', () => {
    modal.classList.remove('is-hidden');
    modalTitle.innerText = '確認目前設定';
    modalText.innerText = '這是一個純前端 modal 範例，沒有串接任何後端。';
    helpers.setStatus('Modal Open');
});

helpers.on(closeButton, 'click', () => {
    modal.classList.add('is-hidden');
    helpers.setStatus('Modal Closed');
});`
    },
    search_filter: {
        title: 'Data · 搜尋過濾清單',
        level: '中階',
        tags: ['search', 'filter'],
        concept: '前端搜尋通常是把輸入值轉成關鍵字，再對既有資料做 filter，最後重新渲染畫面。',
        analogy: '像在書架上用條件快速篩出要找的書，而不是整排從頭翻到尾。',
        highlights: ['filter', '即時查找', '資料重繪'],
        steps: ['準備原始陣列', '依輸入值篩選', '把結果重新 render'],
        code: `const source = ['accordion', 'animation', 'dataset', 'dropdown', 'localStorage', 'modal', 'toast'];
const keyword = document.querySelector('#target-input').value.trim().toLowerCase();
const filtered = source.filter((item) => item.toLowerCase().includes(keyword));

helpers.renderList(
    filtered.map((item, index) => ({
        label: item,
        value: index + 1
    }))
);

document.querySelector('#target-text').innerText = '找到 ' + filtered.length + ' 筆資料';
document.querySelector('#target-subtext').innerText = keyword ? '關鍵字：' + keyword : '目前沒有輸入關鍵字';
helpers.setStatus('Filtered');
console.log('filtered =', filtered);`
    },
    todo_mini: {
        title: 'Project · Todo Mini 清單互動',
        level: '中高階',
        tags: ['todo', 'list'],
        concept: 'Todo 清單是非常典型的前端小作品，包含新增、切換完成狀態與重新渲染。',
        analogy: '像把工作貼在看板上，完成後就劃掉並更新整體進度。',
        highlights: ['資料陣列', '動態渲染', '事件綁定'],
        steps: ['先準備任務資料', '渲染成列表', '透過點擊切換完成狀態'],
        code: `const tasks = [
    { text: '建立元件結構', done: false },
    { text: '補上事件監聽', done: true },
    { text: '整理使用者回饋', done: false }
];

function renderTasks() {
    const list = document.querySelector('#todo-mini-list');
    const caption = document.querySelector('#todo-caption');
    list.innerHTML = tasks.map((task, index) => 
        '<li class="' + (task.done ? 'done' : '') + '" data-index="' + index + '">' +
            '<span>' + task.text + '</span>' +
            '<strong>' + (task.done ? '完成' : '待辦') + '</strong>' +
        '</li>'
    ).join('');
    caption.innerText = tasks.length + ' 個任務';

    list.querySelectorAll('li').forEach((item) => {
        helpers.on(item, 'click', () => {
            const index = Number(item.dataset.index);
            tasks[index].done = !tasks[index].done;
            renderTasks();
            helpers.setStatus('Todo Updated');
        });
    });
}

renderTasks();
document.querySelector('#target-text').innerText = '點 Todo 項目切換狀態';`
    },
    state_machine: {
        title: 'State · 多步驟狀態切換',
        level: '進階',
        tags: ['state', 'workflow'],
        concept: '把介面當作一台有限狀態機來設計，可以讓互動流程更清楚，也更容易維護。',
        analogy: '像遊戲關卡切換，每個階段都有自己的名稱、描述與按鈕文案。',
        highlights: ['狀態陣列', '流程遞進', '資料驅動畫面'],
        steps: ['先定義狀態資料', '監聽按鈕推進索引', '依照索引更新畫面'],
        code: `const stages = [
    { title: '需求整理', note: '先釐清要解什麼問題' },
    { title: '實作中', note: '開始把想法寫成程式' },
    { title: '驗證完成', note: '確認功能與互動都正確' }
];

const title = document.querySelector('#target-text');
const subtext = document.querySelector('#target-subtext');
const button = document.querySelector('#target-btn');
let index = 0;

function renderStage() {
    const stage = stages[index];
    title.innerText = stage.title;
    subtext.innerText = stage.note;
    button.innerText = index === stages.length - 1 ? '重新開始' : '下一步';
    helpers.setStatus('Stage ' + (index + 1));
}

helpers.on(button, 'click', () => {
    index = (index + 1) % stages.length;
    renderStage();
});

renderStage();
console.log('狀態機已初始化');`
    }
};

const elements = {
    tagList: document.getElementById('tag-list'),
    detailArea: document.getElementById('detail-area'),
    lessonSearch: document.getElementById('lesson-search'),
    lessonCounter: document.getElementById('lesson-counter'),
    activeTopic: document.getElementById('active-topic'),
    codeEditor: document.getElementById('code-editor'),
    consoleOutput: document.getElementById('console-output'),
    runButton: document.getElementById('run-button'),
    resetButton: document.getElementById('reset-button'),
    loadTemplateButton: document.getElementById('load-template-button'),
    editorLessonName: document.getElementById('editor-lesson-name'),
    editorLineCount: document.getElementById('editor-line-count'),
    lastRunAt: document.getElementById('last-run-at'),
    runSummary: document.getElementById('run-summary'),
    previewControls: document.getElementById('preview-controls'),
    targetText: document.getElementById('target-text'),
    targetSubtext: document.getElementById('target-subtext'),
    targetStatus: document.getElementById('target-status'),
    targetInput: document.getElementById('target-input'),
    targetButton: document.getElementById('target-btn'),
    secondaryButton: document.getElementById('secondary-btn'),
    targetList: document.getElementById('target-list'),
    tabCaption: document.getElementById('tab-caption'),
    tabRow: document.getElementById('tab-row'),
    progressFill: document.getElementById('progress-fill'),
    progressLabel: document.getElementById('progress-label'),
    toastBox: document.getElementById('toast-box'),
    toastState: document.getElementById('toast-state'),
    accordionBox: document.getElementById('accordion-box'),
    dropdownCaption: document.getElementById('dropdown-caption'),
    dropdownToggle: document.getElementById('dropdown-toggle'),
    dropdownMenu: document.getElementById('dropdown-menu'),
    modalLite: document.getElementById('modal-lite'),
    modalTitle: document.getElementById('modal-title'),
    modalText: document.getElementById('modal-text'),
    todoCaption: document.getElementById('todo-caption'),
    todoMiniList: document.getElementById('todo-mini-list'),
    widgetTabs: document.getElementById('widget-tabs'),
    widgetProgress: document.getElementById('widget-progress'),
    widgetFeedback: document.getElementById('widget-feedback'),
    widgetDropdownModal: document.getElementById('widget-dropdown-modal'),
    widgetTodo: document.getElementById('widget-todo')
};

let selectedLessonKey = '';
let runCount = 0;
let runtimeCleanups = [];
let activeTimeouts = [];
let activeIntervals = [];

function codeUsesAny(code, patterns) {
    return patterns.some(pattern => code.includes(pattern));
}

function setElementVisible(element, visible) {
    element.classList.toggle('is-hidden', !visible);
}

function updateInteractiveVisibility(code) {
    const normalizedCode = code || '';
    const showInput = codeUsesAny(normalizedCode, ['#target-input']);
    const showPrimaryButton = codeUsesAny(normalizedCode, ['#target-btn']);
    const showSecondaryButton = codeUsesAny(normalizedCode, ['#secondary-btn']);
    const showList = codeUsesAny(normalizedCode, ['#target-list', 'helpers.renderList(']);
    const showTabs = codeUsesAny(normalizedCode, ['#tab-row', 'helpers.setActiveTab(']);
    const showProgress = codeUsesAny(normalizedCode, ['#progress-fill', 'helpers.setProgress(']);
    const showFeedback = codeUsesAny(normalizedCode, ['#toast-box', '#toast-state', '#accordion-box', 'helpers.setToast(']);
    const showDropdownModal = codeUsesAny(normalizedCode, ['#dropdown-menu', '#dropdown-toggle', '#dropdown-caption', '#modal-lite', 'helpers.setDropdown(', 'helpers.setModal(']);
    const showTodo = codeUsesAny(normalizedCode, ['#todo-mini-list', 'helpers.renderTodoMini(']);

    setElementVisible(elements.targetInput, showInput);
    setElementVisible(elements.targetButton, showPrimaryButton);
    setElementVisible(elements.secondaryButton, showSecondaryButton);
    setElementVisible(elements.previewControls, showInput || showPrimaryButton || showSecondaryButton);
    setElementVisible(elements.targetList, showList);
    setElementVisible(elements.widgetTabs, showTabs);
    setElementVisible(elements.widgetProgress, showProgress);
    setElementVisible(elements.widgetFeedback, showFeedback);
    setElementVisible(elements.widgetDropdownModal, showDropdownModal);
    setElementVisible(elements.widgetTodo, showTodo);
}

function renderLessonList(filter = '') {
    const keyword = filter.trim().toLowerCase();
    const entries = Object.entries(jsLessons).filter(([, lesson]) => {
        const haystack = [lesson.title, lesson.level, lesson.concept, ...lesson.tags].join(' ').toLowerCase();
        return haystack.includes(keyword);
    });

    elements.tagList.innerHTML = '';
    elements.lessonCounter.innerText = `${entries.length} 個主題`;

    if (!entries.length) {
        elements.tagList.innerHTML = '<div class="text-muted small">找不到符合條件的主題。</div>';
        return;
    }

    entries.forEach(([key, lesson]) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = `tag-item w-100 text-start ${selectedLessonKey === key ? 'active' : ''}`;
        item.innerHTML = `
            <div class="tag-title-row">
                <span class="tag-title">${lesson.title}</span>
                <span class="tag-level">${lesson.level}</span>
            </div>
            <div class="tag-summary">${lesson.concept}</div>
            <div class="tag-meta">
                ${lesson.tags.map(tag => `<span class="mini-badge">#${tag}</span>`).join('')}
            </div>
        `;
        item.addEventListener('click', () => loadLesson(key));
        elements.tagList.appendChild(item);
    });
}

function renderDetail(lesson) {
    elements.detailArea.innerHTML = `
        <div class="detail-hero">
            <div class="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                <div>
                    <h3 class="fw-bold text-warning mb-2">${lesson.title}</h3>
                    <p class="mb-0">${lesson.concept}</p>
                </div>
                <span class="status-chip">${lesson.level}</span>
            </div>
            <div class="tag-meta mt-3">
                ${lesson.tags.map(tag => `<span class="mini-badge">#${tag}</span>`).join('')}
            </div>
        </div>
        <div class="detail-grid">
            <div class="detail-card">
                <h6><i class="bi bi-chat-square-quote"></i> 老師比喻</h6>
                <p class="small mb-0">${lesson.analogy}</p>
            </div>
            <div class="detail-card">
                <h6><i class="bi bi-stars"></i> 重點能力</h6>
                <ul>${lesson.highlights.map(item => `<li class="small mb-1">${item}</li>`).join('')}</ul>
            </div>
        </div>
        <div class="detail-section">
            <h6><i class="bi bi-signpost-split"></i> 學習步驟</h6>
            <ul>${lesson.steps.map(step => `<li class="small mb-2">${step}</li>`).join('')}</ul>
        </div>
        <div class="detail-section">
            <h6><i class="bi bi-terminal"></i> 建議操作</h6>
            <p class="small mb-0">先直接執行範例，再改其中一個字串、陣列或延遲時間，觀察右側預覽和 console 如何變化。</p>
        </div>
    `;
}

function loadLesson(key) {
    const lesson = jsLessons[key];
    if (!lesson) {
        return;
    }

    selectedLessonKey = key;
    renderLessonList(elements.lessonSearch.value);
    renderDetail(lesson);
    elements.activeTopic.innerText = lesson.title;
    elements.editorLessonName.innerText = `目前主題：${lesson.title}`;
    elements.codeEditor.value = lesson.code;
    updateLineCount();
    resetEnv({ preserveConsole: false });
    updateInteractiveVisibility(lesson.code);
}

function renderList(items) {
    const normalized = items.length
        ? items
        : defaultListItems;

    elements.targetList.innerHTML = normalized.map(item => `
        <li>
            <span>${item.label}</span>
            <strong>${item.value ?? ''}</strong>
        </li>
    `).join('');
}

function setStatus(message, icon = 'bi-lightning-charge') {
    elements.targetStatus.innerHTML = `<i class="bi ${icon}"></i> ${message}`;
}

function setActiveTab(tabName) {
    elements.tabCaption.innerText = `目前分頁：${tabName}`;
    elements.tabRow.querySelectorAll('.tab-chip').forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
}

function setProgress(value) {
    const normalized = Math.max(0, Math.min(100, value));
    elements.progressFill.style.width = `${normalized}%`;
    elements.progressLabel.innerText = `${normalized}%`;
}

function setToast(message, visible = true) {
    elements.toastBox.innerText = message;
    elements.toastBox.classList.toggle('is-hidden', !visible);
    elements.toastState.innerText = visible ? 'toast 顯示中' : 'toast 隱藏中';
}

function setDropdown(value) {
    elements.dropdownToggle.innerText = value;
    elements.dropdownCaption.innerText = `目前選項：${value}`;
    elements.dropdownMenu.querySelectorAll('.dropdown-option').forEach((option) => {
        option.classList.toggle('active', option.dataset.option === value);
    });
}

function setModal(title, text, visible = true) {
    elements.modalTitle.innerText = title;
    elements.modalText.innerText = text;
    elements.modalLite.classList.toggle('is-hidden', !visible);
}

function renderTodoMini(items) {
    elements.todoMiniList.innerHTML = items.map((item) => `
        <li class="${item.done ? 'done' : ''}">
            <span>${item.text}</span>
            <strong>${item.done ? '完成' : '待辦'}</strong>
        </li>
    `).join('');
    elements.todoCaption.innerText = `${items.length} 個任務`;
}

function clearRuntime() {
    runtimeCleanups.forEach(cleanup => cleanup());
    runtimeCleanups = [];

    activeTimeouts.forEach(timerId => window.clearTimeout(timerId));
    activeTimeouts = [];

    activeIntervals.forEach(intervalId => window.clearInterval(intervalId));
    activeIntervals = [];
}

function resetEnv(options = {}) {
    clearRuntime();

    elements.targetText.innerText = initialPreviewState.text;
    elements.targetText.style.cssText = '';
    elements.targetSubtext.innerText = initialPreviewState.subtext;
    elements.targetSubtext.style.cssText = '';
    elements.targetInput.value = initialPreviewState.input;
    elements.targetButton.innerText = initialPreviewState.buttonText;
    elements.secondaryButton.innerText = initialPreviewState.secondaryText;
    elements.targetButton.className = 'btn btn-warning';
    elements.secondaryButton.className = 'btn btn-outline-dark';
    setStatus(initialPreviewState.status);
    renderList(defaultListItems);
    setActiveTab(initialPreviewState.activeTab);
    setProgress(initialPreviewState.progress);
    setToast(initialPreviewState.toastText, initialPreviewState.toastVisible);
    setDropdown(initialPreviewState.dropdown);
    setModal(initialPreviewState.modalTitle, initialPreviewState.modalText, initialPreviewState.modalVisible);
    renderTodoMini([
        { text: '整理 DOM 節點', done: false },
        { text: '寫好事件監聽', done: true },
        { text: '驗證互動流程', done: false }
    ]);
    elements.accordionBox.querySelectorAll('.accordion-body-lite').forEach((body, index) => {
        body.classList.toggle('is-hidden', index !== 0);
    });
    elements.runSummary.innerText = '預覽區已重置';

    if (!options.preserveConsole) {
        elements.consoleOutput.innerHTML = '';
    }
}

function appendConsole(type, parts) {
    const line = document.createElement('div');
    line.className = `console-line console-${type}`;
    line.textContent = parts.map(part => {
        if (typeof part === 'object') {
            try {
                return JSON.stringify(part);
            } catch (error) {
                return '[object]';
            }
        }
        return String(part);
    }).join(' ');
    elements.consoleOutput.appendChild(line);
    elements.consoleOutput.scrollTop = elements.consoleOutput.scrollHeight;
}

function createHelpers() {
    return {
        qs(selector) {
            return document.querySelector(selector);
        },
        qsa(selector) {
            return Array.from(document.querySelectorAll(selector));
        },
        on(target, eventName, handler, options) {
            target.addEventListener(eventName, handler, options);
            runtimeCleanups.push(() => target.removeEventListener(eventName, handler, options));
        },
        delay(callback, ms) {
            const timerId = window.setTimeout(callback, ms);
            activeTimeouts.push(timerId);
            return timerId;
        },
        interval(callback, ms) {
            const intervalId = window.setInterval(callback, ms);
            activeIntervals.push(intervalId);
            return intervalId;
        },
        renderList,
        setStatus,
        setActiveTab,
        setProgress,
        setToast,
        setDropdown,
        setModal,
        renderTodoMini,
        resetPreview() {
            resetEnv({ preserveConsole: true });
        }
    };
}

function runJS() {
    const code = elements.codeEditor.value;
    resetEnv({ preserveConsole: true });
    elements.consoleOutput.innerHTML = '';
    elements.runSummary.innerText = '程式執行中...';

    const sandboxConsole = {
        log: (...parts) => appendConsole('log', parts),
        warn: (...parts) => appendConsole('warn', parts),
        error: (...parts) => appendConsole('error', parts)
    };

    try {
        const execute = new Function('console', 'helpers', code);
        execute(sandboxConsole, createHelpers());
        runCount += 1;
        const timestamp = new Date().toLocaleTimeString('zh-TW', { hour12: false });
        elements.lastRunAt.innerText = `最後執行：${timestamp}`;
        elements.runSummary.innerText = `已執行 ${runCount} 次`;
        appendConsole('log', ['執行成功']);
    } catch (error) {
        appendConsole('error', [`${error.name}: ${error.message}`]);
        elements.runSummary.innerText = '執行失敗，請查看 console';
    }
}

function updateLineCount() {
    const lines = elements.codeEditor.value.split('\n').length;
    elements.editorLineCount.innerText = `${lines} 行程式`;
}

function bindEvents() {
    elements.lessonSearch.addEventListener('input', (event) => {
        renderLessonList(event.target.value);
    });

    elements.runButton.addEventListener('click', runJS);
    elements.resetButton.addEventListener('click', () => resetEnv({ preserveConsole: false }));
    elements.loadTemplateButton.addEventListener('click', () => {
        if (selectedLessonKey) {
            elements.codeEditor.value = jsLessons[selectedLessonKey].code;
                updateInteractiveVisibility(elements.codeEditor.value);
            updateLineCount();
            resetEnv({ preserveConsole: false });
            appendConsole('log', ['已重新載入範例程式']);
        }
    });

        elements.codeEditor.addEventListener('input', () => {
            updateInteractiveVisibility(elements.codeEditor.value);
            updateLineCount();
        });
    elements.codeEditor.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            runJS();
        }
    });
}

function init() {
    bindEvents();
    resetEnv({ preserveConsole: false });
    renderLessonList();
    loadLesson('dom_edit');
}

init();
