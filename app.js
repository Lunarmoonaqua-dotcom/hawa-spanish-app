import { TEACHER_SVG, HAWA_CURRICULUM, HAWA_CHARTS, HAWA_VERB_LIBRARY, CONJUGATION_GAME_BANK } from './spanish-data.js';

const HAWA_STORAGE_KEY = "HAWA_V1_STATE";

let hawaState = {
  currentTrack: "easy",
  view: "chapters",
  xp: 0,
  streak: 1,
  lastActive: new Date().toDateString(),
  completedChapters: [],
  notebook: [],
  filterCategory: "all",
  searchQuery: "",
  activeChapter: null,
  activeMode: "overview",
  quizState: { index: 0, score: 0, selected: null, answersSummary: [] },
  conjGame: { index: 0, score: 0, selected: null, active: false, filteredList: [] },
  audioEnabled: true
};

function initHawa() {
  const saved = localStorage.getItem(HAWA_STORAGE_KEY);
  if (saved) {
    try { hawaState = { ...hawaState, ...JSON.parse(saved) }; } catch (e) {}
  }
  
  document.getElementById("header-avatar-slot").innerHTML = TEACHER_SVG;
  document.getElementById("mascot-toast-avatar").innerHTML = TEACHER_SVG;

  setupListeners();
  updateHawaStats();
  renderHawaView();
  showMascot("¡Bienvenido! Select a chapter to begin your Spanish journey!");
}

function setupListeners() {
  document.getElementById("tab-chapters").addEventListener("click", () => setHawaView("chapters"));
  document.getElementById("tab-charts").addEventListener("click", () => setHawaView("charts"));
  document.getElementById("tab-library").addEventListener("click", () => setHawaView("library"));
  document.getElementById("tab-notebook").addEventListener("click", () => setHawaView("notebook"));
  document.getElementById("tab-diagnostic").addEventListener("click", () => setHawaView("diagnostic"));
  
  document.getElementById("btn-close-modal").addEventListener("click", closeHawaModal);
  document.getElementById("btn-close-conj-modal").addEventListener("click", closeConjGameModal);

  document.getElementById("btn-mode-overview").addEventListener("click", () => switchChapterMode("overview"));
  document.getElementById("btn-mode-practice").addEventListener("click", () => switchChapterMode("practice"));
  document.getElementById("btn-mode-game").addEventListener("click", () => switchChapterMode("game"));
  document.getElementById("btn-mode-exam").addEventListener("click", () => switchChapterMode("exam"));
  
  document.getElementById("btn-audio-toggle").addEventListener("click", toggleAudio);
  document.getElementById("btn-sync-open").addEventListener("click", openSyncModal);
  document.getElementById("btn-close-sync-modal").addEventListener("click", closeSyncModal);
  document.getElementById("btn-copy-sync").addEventListener("click", copySyncCode);
  document.getElementById("btn-apply-sync").addEventListener("click", applySyncCode);

  document.getElementById("btn-help").addEventListener("click", showHawaHelp);
  document.getElementById("btn-reset").addEventListener("click", resetHawaData);
}

window.switchTrack = function(track) {
  hawaState.currentTrack = track;
  document.getElementById("track-easy").classList.toggle("active", track === "easy");
  document.getElementById("track-advanced").classList.toggle("active", track === "advanced");
  renderHawaView();
  showMascot(`Switched to ${track === 'easy' ? 'Easy Spanish' : 'Advanced Spanish'} Step-by-Step!`);
};

function toggleAudio() {
  hawaState.audioEnabled = !hawaState.audioEnabled;
  const btn = document.getElementById("btn-audio-toggle");
  const txt = document.getElementById("audio-status-text");
  if (hawaState.audioEnabled) {
    btn.classList.remove("muted");
    btn.classList.add("active");
    txt.innerText = "Voice ON";
    speakText("Audio activado");
  } else {
    btn.classList.add("muted");
    btn.classList.remove("active");
    txt.innerText = "Voice OFF";
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}

function speakText(text, lang = 'es-ES') {
  if (!hawaState.audioEnabled || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function saveHawa() {
  localStorage.setItem(HAWA_STORAGE_KEY, JSON.stringify(hawaState));
  updateHawaStats();
}

function updateHawaStats() {
  document.getElementById("hawa-streak").innerText = hawaState.streak;
  document.getElementById("hawa-xp").innerText = hawaState.xp;
  document.getElementById("hawa-lvl").innerText = Math.floor(hawaState.xp / 200) + 1;
  document.getElementById("hawa-mistake-count").innerText = hawaState.notebook.length;
}

function addHawaXP(pts, reason) {
  hawaState.xp += pts;
  saveHawa();
  showMascot(`+${pts} XP! ${reason}`);
}

let mascotTimer = null;
function showMascot(msg) {
  const toast = document.getElementById("hawa-mascot");
  document.getElementById("hawa-mascot-msg").innerText = msg;
  toast.classList.remove("hidden");
  if (mascotTimer) clearTimeout(mascotTimer);
  mascotTimer = setTimeout(() => toast.classList.add("hidden"), 4000);
}

function setHawaView(view) {
  hawaState.view = view;
  const tabIds = ["tab-chapters", "tab-charts", "tab-library", "tab-notebook", "tab-diagnostic"];
  const views = ["chapters", "charts", "library", "notebook", "diagnostic"];
  tabIds.forEach((id, i) => {
    document.getElementById(id).classList.toggle("active", views[i] === view);
  });
  renderHawaView();
}

function renderHawaView() {
  const main = document.getElementById("hawa-main-view");
  const curriculum = HAWA_CURRICULUM[hawaState.currentTrack];

  if (hawaState.view === "chapters") {
    main.innerHTML = `
      <div class="controls-bar">
        <input type="text" id="hawa-search" class="search-input" placeholder="🔍 Search chapter or grammar topic..." value="${hawaState.searchQuery}">
        <select id="hawa-filter" class="filter-select">
          <option value="all" ${hawaState.filterCategory === 'all' ? 'selected' : ''}>All Categories</option>
          <option value="foundations" ${hawaState.filterCategory === 'foundations' ? 'selected' : ''}>Foundations</option>
          <option value="nouns_adjectives" ${hawaState.filterCategory === 'nouns_adjectives' ? 'selected' : ''}>Nouns & Adjectives</option>
          <option value="present_verbs" ${hawaState.filterCategory === 'present_verbs' ? 'selected' : ''}>Present Tense</option>
          <option value="past_verbs" ${hawaState.filterCategory === 'past_verbs' ? 'selected' : ''}>Past Tenses</option>
          <option value="subjunctive" ${hawaState.filterCategory === 'subjunctive' ? 'selected' : ''}>Subjunctive</option>
        </select>
      </div>
      <div class="chapters-grid" id="chapters-container">
        ${renderChapterCards(curriculum)}
      </div>
    `;

    document.getElementById("hawa-search").addEventListener("input", (e) => {
      hawaState.searchQuery = e.target.value;
      document.getElementById("chapters-container").innerHTML = renderChapterCards(curriculum);
      attachChapterCardListeners();
    });

    document.getElementById("hawa-filter").addEventListener("change", (e) => {
      hawaState.filterCategory = e.target.value;
      document.getElementById("chapters-container").innerHTML = renderChapterCards(curriculum);
      attachChapterCardListeners();
    });

    attachChapterCardListeners();

  } else if (hawaState.view === "charts") {
    main.innerHTML = `
      <div style="background:var(--bg-card); border:2px solid var(--border-color); border-radius:var(--radius-lg); padding:28px; display:flex; flex-direction:column; gap:26px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <div>
            <h2 style="font-size:1.6rem; font-weight:900; margin-bottom:6px;">📊 Conjugation Charts Hub</h2>
            <p style="color:var(--text-muted); font-size:0.95rem;">Review high-frequency Spanish verb patterns or test your reflexes.</p>
          </div>
          <button class="btn-submit" id="btn-open-conj-game" style="width:auto; padding:12px 24px; background:var(--palette-rose);">
            🎮 Play Conjugation Game ➔
          </button>
        </div>

        <div>
          <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
            1. Present Indicative (-AR, -ER, -IR)
            <button class="footer-link btn-speak-text" data-text="Presente de indicativo" style="font-size:1.1rem;">🔊</button>
          </h3>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Pronoun</th><th>-AR (Hablar)</th><th>-ER (Comer)</th><th>-IR (Vivir)</th></tr></thead>
              <tbody>
                ${HAWA_CHARTS.present.map(r => `<tr><td style="font-weight:700;">${r.pronoun}</td><td style="color:var(--primary-dark); font-family:var(--font-mono); font-weight:700;">${r.ar}</td><td style="color:#2C555C; font-family:var(--font-mono); font-weight:700;">${r.er}</td><td style="color:#7D5D00; font-family:var(--font-mono); font-weight:700;">${r.ir}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
            2. Pretérito Indefinido (Completed Past)
            <button class="footer-link btn-speak-text" data-text="Pretérito indefinido" style="font-size:1.1rem;">🔊</button>
          </h3>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Pronoun</th><th>-AR (Hablar)</th><th>-ER / -IR (Comer/Vivir)</th></tr></thead>
              <tbody>
                ${HAWA_CHARTS.preterite.map(r => `<tr><td style="font-weight:700;">${r.pronoun}</td><td style="color:var(--primary-dark); font-family:var(--font-mono); font-weight:700;">${r.ar}</td><td style="color:#2C555C; font-family:var(--font-mono); font-weight:700;">${r.er_ir}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
            3. Pretérito Imperfecto (Continuous Past)
            <button class="footer-link btn-speak-text" data-text="Pretérito imperfecto" style="font-size:1.1rem;">🔊</button>
          </h3>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Pronoun</th><th>-AR (Hablar)</th><th>-ER / -IR (Comer/Vivir)</th></tr></thead>
              <tbody>
                ${HAWA_CHARTS.imperfect.map(r => `<tr><td style="font-weight:700;">${r.pronoun}</td><td style="color:var(--primary-dark); font-family:var(--font-mono); font-weight:700;">${r.ar}</td><td style="color:#2C555C; font-family:var(--font-mono); font-weight:700;">${r.er_ir}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
            4. Presente de Subjuntivo
            <button class="footer-link btn-speak-text" data-text="Presente de subjuntivo" style="font-size:1.1rem;">🔊</button>
          </h3>
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr><th>Pronoun</th><th>-AR Verbs</th><th>-ER / -IR Verbs</th></tr></thead>
              <tbody>
                ${HAWA_CHARTS.subjunctive.map(r => `<tr><td style="font-weight:700;">${r.pronoun}</td><td style="color:var(--primary-dark); font-family:var(--font-mono); font-weight:700;">${r.ar}</td><td style="color:#2C555C; font-family:var(--font-mono); font-weight:700;">${r.er_ir}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-open-conj-game").addEventListener("click", openConjGameSetup);
    document.querySelectorAll(".btn-speak-text").forEach(btn => {
      btn.addEventListener("click", () => speakText(btn.dataset.text));
    });

  } else if (hawaState.view === "library") {
    main.innerHTML = `
      <div class="chapters-grid">
        ${HAWA_VERB_LIBRARY.map(v => `
          <div class="chapter-card">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-size:1.35rem; color:var(--primary-dark); font-weight:800;">${v.infinitive}</h3>
                <button class="footer-link btn-speak-text" data-text="${v.infinitive}" style="font-size:1.2rem;">🔊</button>
              </div>
              <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:12px;">${v.translation} • <span style="color:#7D5D00; font-weight:700;">${v.type}</span></p>
              <div style="font-size:0.8rem; font-family:var(--font-mono); background:var(--bg-card-alt); padding:8px 12px; border-radius:8px; margin-bottom:6px;">
                <strong>Pres:</strong> ${v.pres}
              </div>
              <div style="font-size:0.8rem; font-family:var(--font-mono); background:var(--bg-card-alt); padding:8px 12px; border-radius:8px; margin-bottom:6px;">
                <strong>Pret:</strong> ${v.pret}
              </div>
              <div style="font-size:0.8rem; font-family:var(--font-mono); background:var(--bg-card-alt); padding:8px 12px; border-radius:8px;">
                <strong>Imp:</strong> ${v.imp}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.querySelectorAll(".btn-speak-text").forEach(btn => {
      btn.addEventListener("click", () => speakText(btn.dataset.text));
    });

  } else if (hawaState.view === "notebook") {
    main.innerHTML = `
      <div style="background:var(--bg-card); border:2px solid var(--border-color); border-radius:var(--radius-lg); padding:28px;">
        <h2 style="margin-bottom:18px; font-size:1.4rem; font-weight:800;">📓 Mistake Notebook</h2>
        ${hawaState.notebook.length === 0 ? `
          <p style="color:var(--text-muted); text-align:center; padding:36px 0;">🎉 Clean notebook! No mistakes saved yet.</p>
        ` : `
          <div style="display:flex; flex-direction:column; gap:14px;">
            ${hawaState.notebook.map((item) => `
              <div style="background:var(--bg-card-alt); border-left:4px solid var(--palette-rose); padding:16px; border-radius:10px;">
                <div style="font-weight:800; margin-bottom:6px; font-size:1rem;">${item.prompt}</div>
                <div style="font-size:0.88rem; color:var(--text-muted); line-height:1.4;">${item.explanation}</div>
              </div>
            `).join('')}
          </div>
          <button class="btn-submit" id="btn-clear-notebook" style="margin-top:24px; background:var(--error); box-shadow:0 4px 0 #A8243C;">Clear Notebook</button>
        `}
      </div>
    `;

    const clearBtn = document.getElementById("btn-clear-notebook");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        hawaState.notebook = [];
        saveHawa();
        renderHawaView();
      });
    }

  } else if (hawaState.view === "diagnostic") {
    main.innerHTML = `
      <div style="background:var(--bg-card); border:2px solid var(--border-color); border-radius:var(--radius-lg); padding:36px; text-align:center;">
        <h2 style="font-size:1.8rem; font-weight:900; margin-bottom:14px;">Placement Diagnostic</h2>
        <p style="color:var(--text-muted); font-size:0.95rem; max-width:520px; margin:0 auto 28px; line-height:1.6;">
          Test your baseline skills to determine whether to start in Easy Spanish or Advanced Spanish.
        </p>
        <button class="btn-submit" id="btn-start-diag" style="max-width:300px;">Begin Evaluation ➔</button>
      </div>
    `;

    document.getElementById("btn-start-diag").addEventListener("click", () => openChapterModal("ez1"));
  }
}

function renderChapterCards(curriculum) {
  const q = hawaState.searchQuery.toLowerCase();
  const filtered = curriculum.filter(ch => {
    const matchesCat = hawaState.filterCategory === "all" || ch.category === hawaState.filterCategory;
    const matchesSearch = ch.title.toLowerCase().includes(q) || ch.desc.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return filtered.map(ch => {
    const isCompleted = hawaState.completedChapters.includes(ch.id);
    return `
      <div class="chapter-card" data-id="${ch.id}">
        <div>
          <span class="unit-tag">${isCompleted ? '✅ Mastered' : 'Chapter ' + ch.num}</span>
          <h3 class="chapter-title">${ch.title}</h3>
          <p class="chapter-desc">${ch.desc}</p>
        </div>
        <div class="chapter-footer">
          <span>⏱️ ${ch.estTime}</span>
          <span style="color:var(--primary-dark); font-weight:800;">${isCompleted ? '100%' : 'Explore ➔'}</span>
        </div>
      </div>
    `;
  }).join('');
}

function attachChapterCardListeners() {
  document.querySelectorAll(".chapter-card").forEach(card => {
    card.addEventListener("click", () => openChapterModal(card.dataset.id));
  });
}

function openChapterModal(chapterId) {
  const curriculum = HAWA_CURRICULUM[hawaState.currentTrack];
  const ch = curriculum.find(c => c.id === chapterId);
  if (!ch) return;
  hawaState.activeChapter = ch;
  hawaState.activeMode = "overview";
  hawaState.quizState = { index: 0, score: 0, selected: null, answersSummary: [] };

  document.getElementById("modal-chapter-tag").innerText = `Chapter ${ch.num} • ${ch.estTime}`;
  document.getElementById("modal-chapter-title").innerText = ch.title;
  document.getElementById("hawa-modal").classList.remove("hidden");
  switchChapterMode("overview");
}

function closeHawaModal() {
  document.getElementById("hawa-modal").classList.add("hidden");
  renderHawaView();
}

function switchChapterMode(mode) {
  hawaState.activeMode = mode;
  hawaState.quizState.index = 0;
  hawaState.quizState.score = 0;
  hawaState.quizState.selected = null;
  hawaState.quizState.answersSummary = [];

  document.getElementById("btn-mode-overview").classList.toggle("active", mode === "overview");
  document.getElementById("btn-mode-practice").classList.toggle("active", mode === "practice");
  document.getElementById("btn-mode-game").classList.toggle("active", mode === "game");
  document.getElementById("btn-mode-exam").classList.toggle("active", mode === "exam");
  renderChapterModalContent();
}

function renderChapterModalContent() {
  const ch = hawaState.activeChapter;
  const body = document.getElementById("modal-content-area");
  const footer = document.getElementById("modal-footer-area");

  if (hawaState.activeMode === "overview") {
    body.innerHTML = `
      <div style="line-height:1.6; font-size:0.92rem;">
        <p style="margin-bottom:16px; font-weight:700; color:var(--text-main); display:flex; justify-content:space-between; align-items:center;">
          <span>${ch.overview.concept}</span>
          <button class="footer-link btn-speak-text" data-text="${ch.overview.concept}" style="font-size:1.2rem;">🔊</button>
        </p>
        <h4 style="color:var(--primary-dark); font-weight:800; margin-bottom:8px;">Key Rules:</h4>
        <ul style="padding-left:22px; color:var(--text-muted); margin-bottom:18px;">
          ${ch.overview.rules.map(r => `<li style="margin-bottom:6px;">${r}</li>`).join('')}
        </ul>
        <h4 style="color:#7D5D00; font-weight:800; margin-bottom:8px;">Examples:</h4>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px;">
          ${ch.overview.examples.map(ex => `
            <div style="background:var(--bg-card-alt); padding:12px 16px; border-radius:10px; border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
              <div><strong style="color:var(--text-main);">${ex.es}</strong><div style="color:var(--text-dim); font-size:0.85rem; margin-top:2px;">${ex.en}</div></div>
              <button class="footer-link btn-speak-text" data-text="${ex.es}" style="font-size:1.2rem;">🔊</button>
            </div>
          `).join('')}
        </div>
        <div style="background:var(--error-bg); border-left:4px solid var(--error); padding:12px 16px; border-radius:8px; font-size:0.88rem; margin-bottom:14px; color:#781024;">
          <strong>⚠️ Watch Out:</strong> ${ch.overview.watchOut}
        </div>
        <div style="background:var(--success-bg); border-left:4px solid var(--success); padding:12px 16px; border-radius:8px; font-size:0.88rem; color:#2B4E12;">
          <strong>🧑🏾‍🏫 Teacher Tip:</strong> ${ch.overview.mascotTip}
        </div>
      </div>
    `;
    footer.innerHTML = `<button class="btn-submit" id="btn-start-practice">Start Learn & Practice ➔</button>`;
    
    document.querySelectorAll(".btn-speak-text").forEach(btn => {
      btn.addEventListener("click", () => speakText(btn.dataset.text));
    });
    document.getElementById("btn-start-practice").addEventListener("click", () => switchChapterMode("practice"));

  } else if (hawaState.activeMode === "practice") {
    const q = ch.practice[hawaState.quizState.index];
    if (!q) {
      body.innerHTML = `
        <div style="text-align:center; padding:32px 0;">
          <h3 style="color:var(--primary-dark); font-size:1.6rem; font-weight:900;">Practice Set Complete!</h3>
          <p style="color:var(--text-muted); margin-top:8px;">Ready to test everything in the Chapter Review Game?</p>
        </div>
      `;
      footer.innerHTML = `<button class="btn-submit" id="btn-goto-game">Play Chapter Review Game ➔</button>`;
      document.getElementById("btn-goto-game").addEventListener("click", () => switchChapterMode("game"));
      return;
    }

    renderInteractiveQuestion(body, footer, q, ch.practice.length, "Practice");

  } else if (hawaState.activeMode === "game") {
    const q = ch.game[hawaState.quizState.index];
    if (!q) {
      renderGameResults(body, footer, ch);
      return;
    }

    renderInteractiveQuestion(body, footer, q, ch.game.length, "Chapter Review Game");

  } else if (hawaState.activeMode === "exam") {
    const q = ch.exam[hawaState.quizState.index];
    if (!q) {
      renderExamResults(body, footer, ch);
      return;
    }

    renderInteractiveQuestion(body, footer, q, ch.exam.length, "Mastery Exam");
  }
}

function renderInteractiveQuestion(body, footer, q, totalCount, label) {
  let contentHtml = `
    <div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="unit-tag">${label} • Item ${hawaState.quizState.index + 1} of ${totalCount}</span>
        <button class="footer-link btn-speak-text" data-text="${q.prompt}" style="font-size:1.2rem;">🔊</button>
      </div>
      <h3 class="question-prompt">${q.prompt}</h3>
  `;

  if (q.type === "fill") {
    contentHtml += `
      <input type="text" id="fill-input" class="text-input-field" placeholder="Type answer..." autocomplete="off">
    `;
  } else {
    contentHtml += `
      <div class="options-stack">
        ${q.options.map((opt, i) => `
          <button class="choice-btn btn-opt" data-idx="${i}">${opt}</button>
        `).join('')}
      </div>
    `;
  }

  contentHtml += `<div id="question-feedback"></div></div>`;
  body.innerHTML = contentHtml;
  footer.innerHTML = `<button class="btn-submit" id="btn-check-q">Check Answer</button>`;

  speakText(q.prompt, 'es-ES');

  document.querySelectorAll(".btn-speak-text").forEach(btn => {
    btn.addEventListener("click", () => speakText(btn.dataset.text));
  });

  document.querySelectorAll(".btn-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      hawaState.quizState.selected = parseInt(btn.dataset.idx);
      document.querySelectorAll(".btn-opt").forEach((b, i) => b.classList.toggle("selected", i === hawaState.quizState.selected));
    });
  });

  document.getElementById("btn-check-q").addEventListener("click", () => handleQuestionSubmit(q));
}

function handleQuestionSubmit(q) {
  let isCorrect = false;
  let userAns = "";

  if (q.type === "fill") {
    const input = document.getElementById("fill-input");
    if (!input || !input.value.trim()) return;
    userAns = input.value.trim();
    isCorrect = userAns.toLowerCase() === q.correct.toLowerCase();
  } else {
    if (hawaState.quizState.selected === null) return;
    userAns = q.options[hawaState.quizState.selected];
    isCorrect = hawaState.quizState.selected === q.correct;
  }

  const fb = document.getElementById("question-feedback");
  hawaState.quizState.answersSummary.push({
    prompt: q.prompt,
    userAns,
    correctAns: q.type === "fill" ? q.correct : q.options[q.correct],
    isCorrect,
    explanation: q.explanation
  });

  if (isCorrect) {
    hawaState.quizState.score++;
    addHawaXP(15, "Correct!");
    fb.innerHTML = `<div class="feedback-card correct"><strong>🎯 Correct!</strong> ${q.explanation}</div>`;
    speakText("¡Excelente! Correcto.");
  } else {
    hawaState.notebook.push({ prompt: q.prompt, explanation: q.explanation });
    saveHawa();
    fb.innerHTML = `<div class="feedback-card incorrect"><strong>💡 Explanation:</strong> ${q.explanation}</div>`;
    speakText(q.explanation, 'en-US');
  }

  const footer = document.getElementById("modal-footer-area");
  footer.innerHTML = `<button class="btn-submit" id="btn-next-q">Continue ➔</button>`;
  document.getElementById("btn-next-q").addEventListener("click", () => {
    hawaState.quizState.index++;
    hawaState.quizState.selected = null;
    renderChapterModalContent();
  });
}

function renderGameResults(body, footer, ch) {
  const total = ch.game.length;
  const score = hawaState.quizState.score;
  const pct = Math.round((score / total) * 100);

  if (pct >= 70 && !hawaState.completedChapters.includes(ch.id)) {
    hawaState.completedChapters.push(ch.id);
    addHawaXP(50, "Chapter Review Game Mastered!");
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 } });
    speakText("¡Felicidades! Has completado el juego de repaso.");
  }

  body.innerHTML = `
    <div style="padding:10px 0;">
      <div style="text-align:center; margin-bottom:20px;">
        <span class="unit-tag tag-game">Game Results</span>
        <h2 style="font-size:1.8rem; font-weight:900; margin:8px 0;">${pct >= 70 ? '🎉 Review Passed!' : '💪 Keep Practicing!'}</h2>
        <p style="font-size:1.1rem; font-weight:800; color:var(--primary-dark);">Score: ${score} / ${total} (${pct}%)</p>
      </div>

      <h4 style="font-size:0.95rem; font-weight:800; margin-bottom:10px;">Question Breakdown:</h4>
      <div style="display:flex; flex-direction:column; gap:10px; max-height:240px; overflow-y:auto; padding-right:4px;">
        ${hawaState.quizState.answersSummary.map(item => `
          <div style="background:${item.isCorrect ? 'var(--success-bg)' : 'var(--error-bg)'}; border:1px solid ${item.isCorrect ? 'var(--success)' : 'var(--error)'}; padding:10px 14px; border-radius:8px; font-size:0.85rem;">
            <div style="font-weight:700; color:var(--text-main);">${item.prompt}</div>
            <div style="margin-top:2px;">Your answer: <strong>${item.userAns}</strong> ${item.isCorrect ? '✅' : '❌ (Correct: ' + item.correctAns + ')'}</div>
            ${!item.isCorrect ? `<div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">${item.explanation}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  footer.innerHTML = `
    <div style="display:flex; gap:10px; width:100%;">
      <button class="btn-secondary" id="btn-retry-game" style="flex:1;">Retry Game</button>
      <button class="btn-submit" id="btn-finish-game" style="flex:1;">Take Exam ➔</button>
    </div>
  `;

  document.getElementById("btn-retry-game").addEventListener("click", () => switchChapterMode("game"));
  document.getElementById("btn-finish-game").addEventListener("click", () => switchChapterMode("exam"));
}

function renderExamResults(body, footer, ch) {
  const total = ch.exam.length;
  const score = hawaState.quizState.score;
  const pct = Math.round((score / total) * 100);

  if (pct >= 80) {
    confetti({ particleCount: 120, spread: 75, origin: { y: 0.6 } });
    addHawaXP(100, "Exam Cleared!");
  }

  body.innerHTML = `
    <div style="text-align:center; padding:20px 0;">
      <h2 style="font-size:1.8rem; font-weight:900; margin-bottom:8px;">${pct >= 80 ? '🏆 Exam Passed with Honors!' : '📚 Exam Retake Recommended'}</h2>
      <p style="font-size:1.2rem; font-weight:800; color:var(--primary-dark); margin-bottom:16px;">Accuracy: ${score} / ${total} (${pct}%)</p>
      <p style="color:var(--text-muted); font-size:0.9rem;">Review Mistake Notebook for targeted retries.</p>
    </div>
  `;

  footer.innerHTML = `<button class="btn-submit" onclick="closeHawaModal()">Complete Chapter ➔</button>`;
}

/* Dedicated Conjugation Game Modal */
function openConjGameSetup() {
  const modal = document.getElementById("conj-game-modal");
  const body = document.getElementById("conj-modal-content");
  const footer = document.getElementById("conj-modal-footer");

  body.innerHTML = `
    <div style="padding:10px 0;">
      <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:18px;">Active conjugation practice across all primary tenses, pronouns, and verb classes.</p>
      
      <div style="margin-bottom:16px;">
        <label style="font-size:0.85rem; font-weight:800; display:block; margin-bottom:6px;">Select Tense Filter:</label>
        <select id="conj-tense-filter" class="filter-select" style="width:100%;">
          <option value="all">All Tenses (Comprehensive Mixed Drill)</option>
          <option value="Presente">Presente Indicativo</option>
          <option value="Pretérito">Pretérito Indefinido</option>
          <option value="Imperfecto">Pretérito Imperfecto</option>
          <option value="Subjuntivo">Presente de Subjuntivo</option>
          <option value="Futuro">Futuro Simple</option>
          <option value="Condicional">Condicional Simple</option>
        </select>
      </div>
    </div>
  `;

  footer.innerHTML = `<button class="btn-submit" id="btn-start-conj-drill">Start Conjugation Challenge ➔</button>`;
  modal.classList.remove("hidden");

  document.getElementById("btn-start-conj-drill").addEventListener("click", () => {
    const filter = document.getElementById("conj-tense-filter").value;
    startConjugationGame(filter);
  });
}

function closeConjGameModal() {
  document.getElementById("conj-game-modal").classList.add("hidden");
}

function startConjugationGame(filter) {
  let list = CONJUGATION_GAME_BANK;
  if (filter !== "all") {
    list = CONJUGATION_GAME_BANK.filter(item => item.tense === filter);
  }
  if (list.length === 0) list = CONJUGATION_GAME_BANK;

  hawaState.conjGame = {
    index: 0,
    score: 0,
    selected: null,
    active: true,
    filteredList: list
  };

  renderConjGameQuestion();
}

function renderConjGameQuestion() {
  const cg = hawaState.conjGame;
  const q = cg.filteredList[cg.index];
  const body = document.getElementById("conj-modal-content");
  const footer = document.getElementById("conj-modal-footer");

  if (!q) {
    renderConjGameSummary(body, footer);
    return;
  }

  body.innerHTML = `
    <div>
      <span class="unit-tag tag-game">Drill ${cg.index + 1} of ${cg.filteredList.length}</span>
      <div style="background:var(--bg-card-alt); border:2px solid var(--border-color); padding:16px; border-radius:var(--radius-md); margin:12px 0 16px; text-align:center;">
        <span style="font-size:0.8rem; font-weight:800; color:var(--primary-dark); text-transform:uppercase;">${q.tense}</span>
        <h2 style="font-size:1.6rem; font-weight:900; margin:4px 0;">${q.verb}</h2>
        <p style="font-weight:700; color:var(--text-muted);">Subject: <strong style="color:var(--text-main); font-size:1.1rem;">${q.pronoun}</strong></p>
      </div>

      <div class="options-stack">
        ${q.options.map((opt, i) => `
          <button class="choice-btn btn-conj-opt" data-idx="${i}" style="font-family:var(--font-mono); font-size:1.05rem;">${opt}</button>
        `).join('')}
      </div>
      <div id="conj-feedback"></div>
    </div>
  `;

  speakText(`${q.verb}, ${q.pronoun}`);

  footer.innerHTML = `<button class="btn-submit" id="btn-submit-conj">Submit Conjugation</button>`;

  document.querySelectorAll(".btn-conj-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      cg.selected = parseInt(btn.dataset.idx);
      document.querySelectorAll(".btn-conj-opt").forEach((b, i) => b.classList.toggle("selected", i === cg.selected));
    });
  });

  document.getElementById("btn-submit-conj").addEventListener("click", submitConjAnswer);
}

function submitConjAnswer() {
  const cg = hawaState.conjGame;
  if (cg.selected === null) return;
  const q = cg.filteredList[cg.index];
  const isCorrect = cg.selected === q.correct;
  const fb = document.getElementById("conj-feedback");

  if (isCorrect) {
    cg.score++;
    addHawaXP(10, "Conjugation match!");
    fb.innerHTML = `<div class="feedback-card correct"><strong>🎯 ¡Exacto!</strong> '${q.options[q.correct]}' matches ${q.pronoun} in ${q.tense}.</div>`;
    speakText(q.options[q.correct]);
  } else {
    fb.innerHTML = `<div class="feedback-card incorrect"><strong>💡 Tip:</strong> Correct form is '<strong>${q.options[q.correct]}</strong>'.</div>`;
    speakText(`La forma correcta es ${q.options[q.correct]}`);
  }

  const footer = document.getElementById("conj-modal-footer");
  footer.innerHTML = `<button class="btn-submit" id="btn-next-conj">Next Verb ➔</button>`;
  document.getElementById("btn-next-conj").addEventListener("click", () => {
    cg.index++;
    cg.selected = null;
    renderConjGameQuestion();
  });
}

function renderConjGameSummary(body, footer) {
  const cg = hawaState.conjGame;
  const total = cg.filteredList.length;
  const pct = Math.round((cg.score / total) * 100);

  body.innerHTML = `
    <div style="text-align:center; padding:24px 0;">
      <span class="unit-tag tag-game">Game Complete</span>
      <h2 style="font-size:1.8rem; font-weight:900; margin:12px 0 6px;">Conjugation Summary</h2>
      <p style="font-size:1.1rem; font-weight:800; color:var(--primary-dark); margin-bottom:12px;">Accuracy: ${cg.score} / ${total} (${pct}%)</p>
      <p style="color:var(--text-muted); font-size:0.9rem;">Review the Conjugation Charts tab for verb families you missed.</p>
    </div>
  `;

  footer.innerHTML = `<button class="btn-submit" onclick="closeConjGameModal()">Finish Activity 🏆</button>`;
}

/* Device Sync & Backup Modal */
function openSyncModal() {
  document.getElementById("sync-export-code").value = btoa(JSON.stringify(hawaState));
  document.getElementById("sync-modal").classList.remove("hidden");
}
function closeSyncModal() {
  document.getElementById("sync-modal").classList.add("hidden");
}
function copySyncCode() {
  const copyText = document.getElementById("sync-export-code");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  showMascot("Export code copied to clipboard!");
}
function applySyncCode() {
  const code = document.getElementById("sync-import-code").value.trim();
  if (!code) return;
  try {
    const imported = JSON.parse(atob(code));
    hawaState = { ...hawaState, ...imported };
    saveHawa();
    closeSyncModal();
    renderHawaView();
    showMascot("Progress successfully imported to this device!");
  } catch (err) {
    alert("Invalid progress code. Please ensure you copied the entire string.");
  }
}

function resetHawaData() {
  if (confirm("Reset Spanish progress, XP, and streak on this device?")) {
    localStorage.removeItem(HAWA_STORAGE_KEY);
    location.reload();
  }
}

function showHawaHelp() {
  alert("HAWA Quick Guide:\n• Dual Tracks: Toggle between Easy and Advanced courses.\n• Learn & Practice: Concept lessons with active speech audio.\n• Review Game & Exams: Chapter-specific quizzes and mastery checks.\n• Sync: Export progress to load it on phones and other devices.");
}

window.addEventListener("DOMContentLoaded", initHawa);