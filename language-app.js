(() => {
  "use strict";

  const koreanData = window.KOREAN_COURSE;
  const languageGate = document.querySelector("#languageGate");
  const languageApps = {
    zh: document.querySelector("#chineseApp"),
    ko: document.querySelector("#koreanApp"),
    en: document.querySelector("#englishApp"),
  };
  const koreanApp = languageApps.ko;
  const titleMap = {
    zh: "Sổ ôn tiếng Trung",
    ko: "Sổ học tiếng Hàn · Hangeul",
    en: "Sổ học tiếng Anh",
  };

  const koreanMarkup = `
    <header class="app-header course-header">
      <div class="brand">
        <span class="course-logo" aria-hidden="true">한</span>
        <div>
          <h1>Sổ học tiếng Hàn</h1>
          <p>Bài 1 · 한글 Hangeul · bảng chữ cái</p>
        </div>
      </div>
      <button class="language-switch" type="button" data-switch-language>
        <i data-lucide="languages"></i><span>Đổi ngôn ngữ</span>
      </button>
      <div class="header-stats korean-stats" aria-label="Tiến độ tiếng Hàn">
        <div><strong>1</strong><span>bài</span></div>
        <div><strong>40</strong><span>chữ cái</span></div>
        <div><strong>46</strong><span>từ luyện đọc</span></div>
        <div><strong id="koStatCompleted">0/4</strong><span>đã học</span></div>
      </div>
    </header>

    <main class="app-shell course-shell">
      <nav class="course-tabbar" aria-label="Khu vực học tiếng Hàn">
        <button class="course-tab active" type="button" data-korean-tab="ko-overview">
          <i data-lucide="layout-dashboard"></i><span>Tổng quan</span>
        </button>
        <button class="course-tab" type="button" data-korean-tab="ko-alphabet">
          <i data-lucide="notebook-tabs"></i><span>Bảng chữ cái</span>
        </button>
        <button class="course-tab" type="button" data-korean-tab="ko-compose">
          <i data-lucide="blocks"></i><span>Ghép chữ</span>
        </button>
        <button class="course-tab" type="button" data-korean-tab="ko-batchim">
          <i data-lucide="align-end-horizontal"></i><span>Phụ âm cuối</span>
        </button>
        <button class="course-tab" type="button" data-korean-tab="ko-practice">
          <i data-lucide="circle-help"></i><span>Luyện tập</span>
        </button>
      </nav>

      <section class="course-view active" id="ko-overview">
        <div class="dashboard-band korean-hero">
          <div>
            <p class="eyebrow">Bài 1 · 제 0과</p>
            <h2>Làm quen với 한글 — bảng chữ cái tiếng Hàn</h2>
            <p class="band-copy">Học 40 chữ cái, cách ghép khối, phụ âm cuối và 42 từ luyện đọc có chú thích huyền–ngang.</p>
            <div class="hero-actions">
              <button class="primary-button" type="button" data-open-korean-tab="ko-alphabet">
                <i data-lucide="play"></i><span>Bắt đầu bài học</span>
              </button>
              <button class="secondary-button" type="button" data-speak-ko="안녕">
                <i data-lucide="volume-2"></i><span>Nghe “안녕”</span>
              </button>
            </div>
          </div>
          <div class="hangul-hero-art" aria-label="Ví dụ chữ Hangeul">
            <span>안</span><span>녕</span>
            <small>annyeong · xin chào</small>
          </div>
        </div>

        <div class="korean-module-grid" id="koModuleCards"></div>

        <section class="source-note">
          <i data-lucide="presentation"></i>
          <div>
            <strong>Nội dung bài học</strong>
            <p>Được biên soạn từ 22 slide “Bảng chữ cái.pptx” và bảng 42 từ luyện đọc có ngữ điệu.</p>
          </div>
        </section>
      </section>

      <section class="course-view" id="ko-alphabet">
        <div class="section-head">
          <div><p class="eyebrow">Phần 1</p><h2>Nguyên âm và phụ âm</h2></div>
          <button class="secondary-button module-complete" type="button" data-complete-module="alphabet">
            <i data-lucide="circle-check"></i><span>Đánh dấu đã học</span>
          </button>
        </div>

        <section class="korean-panel">
          <div class="korean-panel-head">
            <div><span class="section-number">01</span><h3>10 nguyên âm đơn</h3></div>
            <p>Chạm vào một chữ để nghe cách đọc.</p>
          </div>
          <div class="hangul-grid vowel-grid" id="koSimpleVowels"></div>
        </section>

        <section class="korean-panel">
          <div class="korean-panel-head">
            <div><span class="section-number">02</span><h3>11 nguyên âm đôi</h3></div>
            <p>Hai nguyên âm đơn kết hợp thành một âm mới.</p>
          </div>
          <div class="hangul-grid compound-grid" id="koCompoundVowels"></div>
        </section>

        <section class="korean-panel">
          <div class="korean-panel-head">
            <div><span class="section-number">03</span><h3>19 phụ âm</h3></div>
            <p>Gồm phụ âm thường, bật hơi và căng.</p>
          </div>
          <div class="consonant-groups" id="koConsonantGroups"></div>
        </section>
      </section>

      <section class="course-view" id="ko-compose">
        <div class="section-head">
          <div><p class="eyebrow">Phần 2</p><h2>Ghép chữ thành khối âm tiết</h2></div>
          <button class="secondary-button module-complete" type="button" data-complete-module="compose">
            <i data-lucide="circle-check"></i><span>Đánh dấu đã học</span>
          </button>
        </div>

        <div class="compose-layout">
          <section class="korean-panel compose-lab">
            <p class="eyebrow">Phòng ghép chữ</p>
            <h3>Tự tạo một âm tiết Hangeul</h3>
            <div class="compose-controls">
              <label class="field"><span>Phụ âm đầu</span><select id="koComposeInitial"></select></label>
              <span class="compose-plus" aria-hidden="true">+</span>
              <label class="field"><span>Nguyên âm</span><select id="koComposeVowel"></select></label>
              <span class="compose-plus" aria-hidden="true">+</span>
              <label class="field"><span>Phụ âm cuối</span><select id="koComposeFinal"></select></label>
            </div>
            <div class="compose-result">
              <div class="syllable-block" id="koComposeResult">한</div>
              <div>
                <strong id="koComposeFormula">ㅎ + ㅏ + ㄴ</strong>
                <p id="koComposeHint">Nguyên âm dọc: phụ âm đứng bên trái.</p>
                <button class="icon-button text-button" type="button" id="koSpeakCompose">
                  <i data-lucide="volume-2"></i><span>Nghe</span>
                </button>
              </div>
            </div>
          </section>

          <aside class="korean-panel block-guide">
            <p class="eyebrow">Quy tắc bố cục</p>
            <h3>Chữ Hàn được xếp thành khối vuông</h3>
            <div class="block-rule">
              <span class="mini-block horizontal"><b>ㅁ</b><b>ㅗ</b></span>
              <p><strong>Nguyên âm ngang</strong><br />Phụ âm ở trên, nguyên âm ở dưới: 모, 루, 흐, 요.</p>
            </div>
            <div class="block-rule">
              <span class="mini-block vertical"><b>ㅎ</b><b>ㅏ</b></span>
              <p><strong>Nguyên âm dọc</strong><br />Phụ âm bên trái, nguyên âm bên phải: 하, 여, 서.</p>
            </div>
            <div class="block-rule">
              <span class="mini-block final"><b>ㅎ</b><b>ㅏ</b><b>ㄴ</b></span>
              <p><strong>Có phụ âm cuối</strong><br />Phụ âm cuối nằm dưới khối: 한.</p>
            </div>
          </aside>
        </div>

        <section class="korean-panel example-panel">
          <div class="korean-panel-head">
            <div><span class="section-number">04</span><h3>Mẫu ghép trong tài liệu</h3></div>
            <p>Đọc từ trái sang phải, nhưng viết thành từng khối.</p>
          </div>
          <div class="syllable-examples" id="koSyllableExamples"></div>
        </section>
      </section>

      <section class="course-view" id="ko-batchim">
        <div class="section-head">
          <div><p class="eyebrow">Phần 3</p><h2>Phụ âm cuối · 받침</h2></div>
          <button class="secondary-button module-complete" type="button" data-complete-module="batchim">
            <i data-lucide="circle-check"></i><span>Đánh dấu đã học</span>
          </button>
        </div>

        <section class="korean-panel">
          <div class="korean-panel-head">
            <div><span class="section-number">05</span><h3>7 âm đọc phụ âm cuối cơ bản</h3></div>
            <p>Nhiều chữ viết khác nhau được quy về cùng một âm cuối.</p>
          </div>
          <div class="batchim-table-wrap">
            <table class="batchim-table">
              <thead><tr><th>Phụ âm cuối</th><th>Đọc theo</th><th>Ví dụ</th></tr></thead>
              <tbody id="koBatchimRows"></tbody>
            </table>
          </div>
        </section>

        <section class="korean-panel">
          <div class="korean-panel-head">
            <div><span class="section-number">06</span><h3>Phụ âm cuối kép</h3></div>
            <p>Quy tắc tóm tắt theo bài học nhập môn.</p>
          </div>
          <div class="double-batchim-grid" id="koDoubleBatchim"></div>
        </section>

        <section class="korean-tip">
          <strong>Lưu ý với ㅢ</strong>
          <ul>
            <li>Đầu từ như <b>의자</b>, <b>의사</b>: thường đọc gần /ưi/.</li>
            <li>Khi <b>의</b> mang nghĩa “của”: thường đọc gần /ê/.</li>
            <li>Ở một số vị trí khác: cách đọc có thể gần /i/.</li>
          </ul>
        </section>
      </section>

      <section class="course-view" id="ko-practice">
        <div class="section-head">
          <div><p class="eyebrow">Phần 4</p><h2>Luyện đọc và tự kiểm tra</h2></div>
          <button class="secondary-button module-complete" type="button" data-complete-module="practice">
            <i data-lucide="circle-check"></i><span>Đánh dấu đã học</span>
          </button>
        </div>

        <section class="korean-panel pitch-guide">
          <div class="korean-panel-head">
            <div><span class="section-number">07</span><h3 id="koPitchTitle"></h3></div>
            <p>Ghi chú cao độ dành cho người Việt.</p>
          </div>
          <p class="pitch-intro" id="koPitchIntro"></p>
          <div class="pitch-mark-grid" id="koPitchMarks"></div>
          <div class="pitch-rule-grid" id="koPitchGroups"></div>
          <div class="pitch-caution" id="koPitchCaution"></div>
        </section>

        <div class="practice-layout extended-practice-layout">
          <section class="korean-panel reading-practice">
            <div class="korean-panel-head">
              <div><span class="section-number">08</span><h3>42 từ mới · 4 từ khởi động</h3></div>
              <p>Nhấn một hàng để nghe phát âm tiếng Hàn.</p>
            </div>
            <div class="pronunciation-sections" id="koReadingWords"></div>
          </section>

          <section class="quiz-panel korean-quiz">
            <div class="quiz-score" id="koQuizScore">0 đúng · 0 câu</div>
            <div class="quiz-question" id="koQuizQuestion"></div>
            <div class="quiz-options" id="koQuizOptions"></div>
            <div class="quiz-feedback" id="koQuizFeedback" aria-live="polite"></div>
            <button class="primary-button" type="button" id="koNextQuestion">
              <i data-lucide="arrow-right"></i><span>Câu tiếp</span>
            </button>
          </section>
        </div>
      </section>
    </main>
  `;

  if (koreanApp && koreanData) {
    koreanApp.innerHTML = koreanMarkup;
  }

  const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    })[character]);

  function refreshCourseIcons() {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  }

  function showLanguageGate() {
    Object.values(languageApps).forEach((app) => {
      if (app) app.hidden = true;
    });
    languageGate.hidden = false;
    document.body.removeAttribute("data-current-language");
    document.title = "Sổ học ngoại ngữ";
    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshCourseIcons();
  }

  function enterLanguage(language) {
    const target = languageApps[language];
    if (!target) return;
    languageGate.hidden = true;
    Object.entries(languageApps).forEach(([code, app]) => {
      if (app) app.hidden = code !== language;
    });
    document.body.dataset.currentLanguage = language;
    document.title = titleMap[language];
    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshCourseIcons();
  }

  function activateKoreanTab(tabId) {
    if (!koreanApp?.querySelector(`#${tabId}`)) return;
    koreanApp.querySelectorAll(".course-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.koreanTab === tabId);
    });
    koreanApp.querySelectorAll(".course-view").forEach((view) => {
      view.classList.toggle("active", view.id === tabId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function speakKorean(text) {
    if (!("speechSynthesis" in window) || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  function renderModules() {
    const container = koreanApp.querySelector("#koModuleCards");
    container.innerHTML = koreanData.modules.map((module) => `
      <article class="korean-module-card" data-module-card="${escapeHtml(module.id)}">
        <button class="module-open" type="button" data-open-korean-tab="${escapeHtml(module.tab)}">
          <span class="module-icon"><i data-lucide="${escapeHtml(module.icon)}"></i></span>
          <span class="module-number">${escapeHtml(module.number)}</span>
          <strong>${escapeHtml(module.title)}</strong>
          <small>${escapeHtml(module.summary)}</small>
        </button>
        <button class="module-status" type="button" data-complete-module="${escapeHtml(module.id)}">
          <i data-lucide="circle"></i><span>Chưa học</span>
        </button>
      </article>
    `).join("");
  }

  function hangulButton(item, extraClass = "") {
    return `
      <button class="hangul-card ${extraClass}" type="button" data-speak-ko="${escapeHtml(item.symbol)}">
        <strong>${escapeHtml(item.symbol)}</strong>
        <span>${escapeHtml(item.romanization)}</span>
        ${item.formula ? `<small>${escapeHtml(item.formula)}</small>` : `<small>gần âm “${escapeHtml(item.hint)}”</small>`}
        <i data-lucide="volume-2"></i>
      </button>
    `;
  }

  function renderAlphabet() {
    koreanApp.querySelector("#koSimpleVowels").innerHTML = koreanData.simpleVowels
      .map((item) => hangulButton(item))
      .join("");
    koreanApp.querySelector("#koCompoundVowels").innerHTML = koreanData.compoundVowels
      .map((item) => hangulButton(item, "compound"))
      .join("");
    koreanApp.querySelector("#koConsonantGroups").innerHTML = koreanData.consonantGroups.map((group) => `
      <section class="consonant-group ${escapeHtml(group.id)}">
        <h4>${escapeHtml(group.title)}</h4>
        <div class="consonant-grid">
          ${group.items.map(([symbol, sound]) => `
            <button type="button" data-speak-ko="${escapeHtml(symbol)}">
              <strong>${escapeHtml(symbol)}</strong><span>${escapeHtml(sound)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    `).join("");
  }

  function fillComposer() {
    const initial = koreanApp.querySelector("#koComposeInitial");
    const vowel = koreanApp.querySelector("#koComposeVowel");
    const final = koreanApp.querySelector("#koComposeFinal");
    initial.innerHTML = koreanData.initials.map((item) => `<option value="${item}">${item}</option>`).join("");
    vowel.innerHTML = koreanData.vowels.map((item) => `<option value="${item}">${item}</option>`).join("");
    final.innerHTML = koreanData.finals.map((item) => `<option value="${item}">${item || "Không có"}</option>`).join("");
    initial.value = "ㅎ";
    vowel.value = "ㅏ";
    final.value = "ㄴ";
    updateComposer();
  }

  function composeHangul(initial, vowel, final) {
    const initialIndex = koreanData.initials.indexOf(initial);
    const vowelIndex = koreanData.vowels.indexOf(vowel);
    const finalIndex = koreanData.finals.indexOf(final);
    if (initialIndex < 0 || vowelIndex < 0 || finalIndex < 0) return "";
    return String.fromCharCode(0xac00 + ((initialIndex * 21) + vowelIndex) * 28 + finalIndex);
  }

  function updateComposer() {
    const initial = koreanApp.querySelector("#koComposeInitial").value;
    const vowel = koreanApp.querySelector("#koComposeVowel").value;
    const final = koreanApp.querySelector("#koComposeFinal").value;
    const result = composeHangul(initial, vowel, final);
    koreanApp.querySelector("#koComposeResult").textContent = result;
    koreanApp.querySelector("#koComposeFormula").textContent = [initial, vowel, final].filter(Boolean).join(" + ");
    const horizontal = new Set(["ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ"]);
    const compound = new Set(koreanData.compoundVowels.map((item) => item.symbol));
    let hint = horizontal.has(vowel)
      ? "Nguyên âm ngang: phụ âm ở trên, nguyên âm ở dưới."
      : "Nguyên âm dọc: phụ âm bên trái, nguyên âm bên phải.";
    if (compound.has(vowel)) hint = "Nguyên âm ghép kết hợp phần bên dưới và/hoặc bên phải của khối.";
    if (final) hint += " Phụ âm cuối nằm ở đáy.";
    koreanApp.querySelector("#koComposeHint").textContent = hint;
  }

  function renderComposeExamples() {
    koreanApp.querySelector("#koSyllableExamples").innerHTML = koreanData.examples.map((group) => `
      <article>
        <small>${escapeHtml(group.group)}</small>
        <div>${group.items.map((item) => `<button type="button" data-speak-ko="${item}">${item}</button>`).join("")}</div>
      </article>
    `).join("");
  }

  function renderBatchim() {
    koreanApp.querySelector("#koBatchimRows").innerHTML = koreanData.batchim.map((row) => `
      <tr>
        <td><strong>${escapeHtml(row.written)}</strong></td>
        <td><span class="batchim-sound">${escapeHtml(row.sound)}</span></td>
        <td>${escapeHtml(row.examples)}</td>
      </tr>
    `).join("");
    koreanApp.querySelector("#koDoubleBatchim").innerHTML = koreanData.doubleBatchim.map((item, index) => `
      <article>
        <span class="section-number">0${index + 1}</span>
        <strong>${escapeHtml(item.letters)}</strong>
        <p>${escapeHtml(item.rule)}</p>
        <small>${escapeHtml(item.examples)}</small>
      </article>
    `).join("");
  }

  function renderPitchRules() {
    const rules = koreanData.pitchRules;
    koreanApp.querySelector("#koPitchTitle").textContent = rules.title;
    koreanApp.querySelector("#koPitchIntro").textContent = rules.intro;
    koreanApp.querySelector("#koPitchMarks").innerHTML = rules.marks.map((item) => `
      <article><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(item.text)}</p></article>
    `).join("");
    koreanApp.querySelector("#koPitchGroups").innerHTML = [rules.lowStart, rules.highStart].map((group) => `
      <article>
        <h4>${escapeHtml(group.label)}</h4>
        ${group.groups.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
        <strong>${escapeHtml(group.rhythm)}</strong>
      </article>
    `).join("");
    koreanApp.querySelector("#koPitchCaution").innerHTML = `<i data-lucide="info"></i><p>${escapeHtml(rules.caution)}</p>`;
  }

  function getKoreanWordPool() {
    return [...koreanData.starterWords, ...koreanData.pronunciationSections.flatMap((section) => section.words)];
  }

  function renderReadingWords() {
    koreanApp.querySelector("#koReadingWords").innerHTML = [{ id: "warmup", title: "Từ khởi động trong slide", words: koreanData.starterWords }, ...koreanData.pronunciationSections].map((section) => `
      <section class="pronunciation-group">
        <h4>${escapeHtml(section.title)}</h4>
        <div class="pronunciation-table-wrap">
          <table class="pronunciation-table">
            <thead><tr><th>Tiếng Hàn</th><th>Phiên âm đọc</th><th>Có ngữ điệu</th><th>Nghĩa</th><th><span class="sr-only">Nghe</span></th></tr></thead>
            <tbody>
              ${section.words.map((word) => `
                <tr data-speak-ko="${escapeHtml(word.speakText || word.text)}" tabindex="0" role="button">
                  <td><strong>${escapeHtml(word.text)}</strong></td>
                  <td>${escapeHtml(word.romanization)}</td>
                  <td><span class="pitch-reading">${escapeHtml(word.pitch || "—")}</span></td>
                  <td>${escapeHtml(word.meaning)}</td>
                  <td><i data-lucide="volume-2"></i></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `).join("");
  }

  const quizState = { correct: 0, total: 0, current: null, answered: false };

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const other = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[other]] = [copy[other], copy[index]];
    }
    return copy;
  }

  function nextKoreanQuestion() {
    const pool = getKoreanWordPool();
    let next = pool[Math.floor(Math.random() * pool.length)];
    if (quizState.current && pool.length > 1) {
      while (next.text === quizState.current.text) next = pool[Math.floor(Math.random() * pool.length)];
    }
    quizState.current = next;
    quizState.answered = false;
    const distractors = shuffle(pool.filter((item) => item.text !== next.text)).slice(0, 3);
    const options = shuffle([next, ...distractors]);
    koreanApp.querySelector("#koQuizQuestion").innerHTML = `
      <span class="prompt">Từ này có nghĩa là gì?</span>
      <strong class="main">${escapeHtml(next.text)}</strong>
      <small>${escapeHtml(next.romanization)}${next.pitch ? ` · ${escapeHtml(next.pitch)}` : ""}</small>
    `;
    koreanApp.querySelector("#koQuizOptions").innerHTML = options.map((item) => `
      <button class="quiz-option" type="button" data-ko-answer="${escapeHtml(item.text)}">${escapeHtml(item.meaning)}</button>
    `).join("");
    koreanApp.querySelector("#koQuizFeedback").textContent = "";
  }

  function chooseKoreanAnswer(answer) {
    if (quizState.answered || !quizState.current) return;
    quizState.answered = true;
    quizState.total += 1;
    const isCorrect = answer === quizState.current.text;
    if (isCorrect) quizState.correct += 1;
    koreanApp.querySelectorAll("[data-ko-answer]").forEach((button) => {
      if (button.dataset.koAnswer === quizState.current.text) button.classList.add("correct");
      else if (button.dataset.koAnswer === answer) button.classList.add("wrong");
      button.disabled = true;
    });
    koreanApp.querySelector("#koQuizFeedback").textContent = isCorrect
      ? "Đúng rồi! 잘했어요!"
      : `Đáp án: ${quizState.current.meaning}`;
    koreanApp.querySelector("#koQuizScore").textContent = `${quizState.correct} đúng · ${quizState.total} câu`;
  }

  function loadCompletedModules() {
    try {
      const saved = JSON.parse(localStorage.getItem("hanReview.korean.completed") || "[]");
      return new Set(Array.isArray(saved) ? saved : []);
    } catch {
      return new Set();
    }
  }

  let completedModules = loadCompletedModules();

  function updateCompletedUI() {
    const validIds = new Set(koreanData.modules.map((module) => module.id));
    completedModules = new Set([...completedModules].filter((id) => validIds.has(id)));
    koreanApp.querySelectorAll("[data-complete-module]").forEach((button) => {
      const done = completedModules.has(button.dataset.completeModule);
      button.classList.toggle("completed", done);
      const label = button.querySelector("span");
      if (label) label.textContent = button.classList.contains("module-status")
        ? (done ? "Đã học" : "Chưa học")
        : (done ? "Đã học" : "Đánh dấu đã học");
      const icon = button.querySelector("i, svg");
      if (icon) icon.setAttribute("data-lucide", done ? "circle-check-big" : "circle");
    });
    koreanApp.querySelectorAll("[data-module-card]").forEach((card) => {
      card.classList.toggle("completed", completedModules.has(card.dataset.moduleCard));
    });
    koreanApp.querySelector("#koStatCompleted").textContent = `${completedModules.size}/4`;
    try {
      localStorage.setItem("hanReview.korean.completed", JSON.stringify([...completedModules]));
    } catch {
      // Chế độ riêng tư có thể chặn localStorage; bài học vẫn hoạt động trong phiên hiện tại.
    }
    refreshCourseIcons();
  }

  function toggleCompleted(moduleId) {
    if (completedModules.has(moduleId)) completedModules.delete(moduleId);
    else completedModules.add(moduleId);
    updateCompletedUI();
  }

  function bindLanguageEvents() {
    document.querySelectorAll("[data-enter-language]").forEach((button) => {
      button.addEventListener("click", () => enterLanguage(button.dataset.enterLanguage));
    });
    document.querySelectorAll("[data-switch-language]").forEach((button) => {
      button.addEventListener("click", showLanguageGate);
    });
  }

  function bindKoreanEvents() {
    koreanApp.querySelectorAll("[data-korean-tab]").forEach((button) => {
      button.addEventListener("click", () => activateKoreanTab(button.dataset.koreanTab));
    });
    ["#koComposeInitial", "#koComposeVowel", "#koComposeFinal"].forEach((selector) => {
      koreanApp.querySelector(selector).addEventListener("change", updateComposer);
    });
    koreanApp.querySelector("#koSpeakCompose").addEventListener("click", () => {
      speakKorean(koreanApp.querySelector("#koComposeResult").textContent);
    });
    koreanApp.querySelector("#koNextQuestion").addEventListener("click", nextKoreanQuestion);
    koreanApp.addEventListener("click", (event) => {
      const openButton = event.target.closest("[data-open-korean-tab]");
      if (openButton) activateKoreanTab(openButton.dataset.openKoreanTab);
      const speakButton = event.target.closest("[data-speak-ko]");
      if (speakButton) speakKorean(speakButton.dataset.speakKo);
      const completeButton = event.target.closest("[data-complete-module]");
      if (completeButton) toggleCompleted(completeButton.dataset.completeModule);
      const answerButton = event.target.closest("[data-ko-answer]");
      if (answerButton) chooseKoreanAnswer(answerButton.dataset.koAnswer);
    });
    koreanApp.addEventListener("keydown", (event) => {
      const speakRow = event.target.closest('tr[data-speak-ko][role="button"]');
      if (!speakRow || !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      speakKorean(speakRow.dataset.speakKo);
    });
  }

  function initialize() {
    if (!languageGate || !koreanApp || !koreanData) return;
    renderModules();
    renderAlphabet();
    fillComposer();
    renderComposeExamples();
    renderBatchim();
    renderPitchRules();
    renderReadingWords();
    nextKoreanQuestion();
    updateCompletedUI();
    bindLanguageEvents();
    bindKoreanEvents();
    showLanguageGate();
    refreshCourseIcons();
  }

  initialize();
})();