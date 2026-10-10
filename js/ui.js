/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — ui.js
   Toast, modal, đồng hồ, HUD, thanh tiến độ, nhật ký, hồ sơ
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  const $ = LL.$, esc = LL.esc;

  /* ───────────── TOAST ───────────── */
  LL.toast = function (msg, kind, ms) {
    const wrap = $('#toastWrap');
    if (!wrap) return;
    const t = document.createElement('div');
    t.className = 'toast' + (kind ? ' toast--' + kind : '');
    t.innerHTML = msg;
    wrap.appendChild(t);
    setTimeout(() => {
      t.classList.add('is-out');
      setTimeout(() => t.remove(), 260);
    }, ms || 2600);
  };

  /* ───────────── MODAL ───────────── */
  let openStack = [];
  LL.openModal = function (id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.hidden = false;
    openStack.push(id);
  };
  LL.closeModal = function (id) {
    if (id) {
      const m = document.getElementById(id);
      if (m) m.hidden = true;
      openStack = openStack.filter(x => x !== id);
      return;
    }
    openStack.forEach(x => { const m = document.getElementById(x); if (m) m.hidden = true; });
    openStack = [];
  };
  LL.closeTopModal = function () {
    if (openStack.length) LL.closeModal(openStack[openStack.length - 1]);
    else return false;
    return true;
  };

  /* ───────────── ĐỒNG HỒ HỒ SƠ ───────────── */
  let timerIv = null;
  LL.startClock = function () {
    LL.stopClock();
    const el = $('#hudTimer');
    if (!el) return;
    const endAt = Date.now() + 48 * 3600 * 1000;
    const tick = function () {
      let left = endAt - Date.now();
      if (left < 0) left = 0;
      const h = Math.floor(left / 3600000);
      const m = Math.floor(left % 3600000 / 60000);
      const s = Math.floor(left % 60000 / 1000);
      el.textContent = LL.pad2(h) + ':' + LL.pad2(m) + ':' + LL.pad2(s);
      el.classList.toggle('is-low', left < 4 * 3600000);
    };
    tick();
    timerIv = setInterval(tick, 1000);
  };
  LL.stopClock = function () { if (timerIv) { clearInterval(timerIv); timerIv = null; } };

  /* ───────────── HUD ───────────── */
  LL.refreshHUD = function () {
    const st = LL.state;
    const lv = (window.LEVELS || [])[st.levelIndex];
    if (lv) {
      $('#hudLevel').textContent = 'MÀN ' + (st.levelIndex + 1) + ' · ' + lv.title;
      $('#hudSkill').textContent = lv.skillName;
    }
    const ct = LL.ctScore();
    $('#ctValue').textContent = ct;
    const dial = $('#dialFg');
    if (dial) {
      const C = 2 * Math.PI * 18;
      dial.style.strokeDasharray = C;
      dial.style.strokeDashoffset = C - (C * ct / 100);
      dial.style.stroke = ct >= 75 ? 'var(--good)' : ct >= 45 ? 'var(--amber)' : 'var(--coral)';
    }
    $('#evCount').textContent = st.evidence.length;
    $('#jCount').textContent = st.journal.length;
    $('#trapCount').textContent = st.traps.length;
    const tb = $('#btnTrap');
    if (tb) tb.style.display = st.traps.length ? '' : 'none';
  };

  /* ───────────── THANH TIẾN ĐỘ ───────────── */
  LL.renderRail = function () {
    const st = LL.state;
    const rail = $('#progressRail');
    const lv = (window.LEVELS || [])[st.levelIndex];
    if (!rail || !lv) return;
    const total = lv.steps.length;
    const done = st.stepIndex;
    let html = '';
    for (let i = 0; i < total; i++) {
      const c = i < done ? 'is-done' : (i === done ? 'is-now' : '');
      html += '<span class="rail-seg ' + c + '"></span>';
    }
    // các màn đã hoàn thành
    for (let l = 0; l < st.levelIndex; l++) {
      const n = (window.LEVELS[l] || { steps: [] }).steps.length;
      html += '<span class="rail-seg is-done" title="Màn ' + (l + 1) + ' — đã xong"></span>';
    }
    rail.innerHTML = html;
    rail.scrollLeft = 0;
  };

  /* ───────────── FOOT TIP ───────────── */
  LL.setTip = function (txt) {
    const el = $('#footTip');
    if (el) el.innerHTML = txt || '';
  };

  /* ───────────── NHẬT KÝ ───────────── */
  LL.openJournal = function (prompt) {
    const ta = $('#journalInput');
    const modal = $('#modalJournal');
    // Gợi ý theo bối cảnh
    const note = document.getElementById('journalPromptNote');
    if (note) note.remove();
    if (prompt) {
      const n = document.createElement('div');
      n.id = 'journalPromptNote';
      n.className = 'fb';
      n.style.marginBottom = '14px';
      n.innerHTML = '<div class="fb-head">📝 Viết nhật ký cho tình huống này</div>' +
        '<div class="fb-body">' + esc(prompt) + '</div>';
      $('.modal-body', modal).insertBefore(n, ta);
    }
    ta.value = '';
    LL.openModal('modalJournal');
    setTimeout(() => ta.focus(), 60);
  };

  LL.saveJournal = function (text) {
    const st = LL.state;
    const lv = (window.LEVELS || [])[st.levelIndex];
    st.journal.unshift({
      level: st.levelIndex + 1,
      levelTitle: lv ? lv.title : '',
      text: text,
      time: LL.now()
    });
    LL.save();
    LL.refreshHUD();
    LL.renderJournalList();
    LL.toast('✍️ Đã lưu vào nhật ký', 'good');
  };

  LL.renderJournalList = function () {
    const box = $('#journalList');
    if (!box) return;
    const j = LL.state.journal;
    if (!j.length) {
      box.innerHTML = '<div class="j-empty">Nhật ký còn trống. Ghi vài dòng suy nghĩ của bạn đi — không ai chấm điểm ở đây cả.</div>';
      return;
    }
    box.innerHTML = j.map(e =>
      '<div class="j-entry"><div class="j-entry-head"><b>Màn ' + e.level + (e.levelTitle ? ' · ' + esc(e.levelTitle) : '') +
      '</b><span>' + esc(e.time) + '</span></div><div class="j-entry-body">' + esc(e.text) + '</div></div>'
    ).join('');
  };

  /* ───────────── HỒ SƠ BẰNG CHỨNG ───────────── */
  LL.evCardHTML = function (ev, isNew) {
    const s = ev.strength || 2;
    const word = s >= 3 ? 'MẠNH' : (s === 2 ? 'KHÁ' : 'YẾU');
    let pips = '';
    for (let i = 1; i <= 3; i++) {
      pips += '<span class="pip' + (i <= s ? ' on-s' + s : '') + '"></span>';
    }
    return '<article class="ev-card' + (isNew ? ' is-new' : '') + '">' +
      '<div class="ev-top"><span class="ev-id">' + esc(ev.id) + '</span>' +
      '<span class="ev-title">' + esc(ev.title) + '</span>' +
      (isNew ? '<span class="ev-new">MỚI</span>' : '') + '</div>' +
      '<div class="ev-src">📡 Nguồn: ' + esc(ev.source) + '</div>' +
      '<div class="ev-text">' + esc(ev.text) + '</div>' +
      (ev.note ? '<div class="ev-note">🧠 <b>Ghi chú điều tra:</b> ' + esc(ev.note) + '</div>' : '') +
      '<div class="strength"><span class="strength-label">Sức mạnh</span>' +
      '<span class="pips">' + pips + '</span>' +
      '<span class="strength-word c-' + s + '">' + word + '</span></div>' +
      '</article>';
  };

  LL.addEvidence = function (ev) {
    const st = LL.state;
    if (!ev) return false;
    if (st.evidence.some(e => e.id === ev.id)) return false;
    st.evidence.push(ev);
    LL.save();
    LL.refreshHUD();
    LL.renderDossier();
    return true;
  };

  LL.renderDossier = function () {
    const box = $('#dossierList');
    if (!box) return;
    const ev = LL.state.evidence;
    if (!ev.length) {
      box.innerHTML = '<div class="j-empty">Hồ sơ còn trống. Hãy thu thập bằng chứng.</div>';
      return;
    }
    box.innerHTML = ev.map(e => LL.evCardHTML(e, false)).join('');
  };

  /* ───────────── GHI NHẬN BẪY ───────────── */
  LL.recordTrap = function (name, desc) {
    const st = LL.state;
    if (st.traps.some(t => t.name === name)) return;
    st.traps.push({ name: name, desc: desc, level: st.levelIndex + 1 });
    LL.save();
    LL.refreshHUD();
  };
  LL.recordDodge = function (name) {
    const st = LL.state;
    if (st.dodged.some(t => t.name === name)) return;
    st.dodged.push({ name: name, level: st.levelIndex + 1 });
    LL.save();
  };

})(window.LL);