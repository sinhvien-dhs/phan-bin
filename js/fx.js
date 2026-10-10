/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — fx.js
   Âm thanh (WebAudio), hiệu ứng ăn mừng, rung màn hình, chuỗi combo
   Không cần file âm thanh, không cần thư viện ngoài
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  /* ═══════════ ÂM THANH ═══════════ */
  const AC = window.AudioContext || window.webkitAudioContext;
  let ctx = null;

  function ac() {
    if (!AC) return null;
    if (!ctx) { try { ctx = new AC(); } catch (e) { return null; } }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /* phát một nốt đơn */
  function note(freq, dur, type, vol, delay) {
    const c = ac();
    if (!c) return;
    const t0 = c.currentTime + (delay || 0);
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol == null ? 0.18 : vol, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }

  function noise(dur, vol) {
    const c = ac();
    if (!c) return;
    const n = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, n, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = c.createBufferSource();
    const g = c.createGain();
    const f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 1400;
    g.gain.value = vol == null ? 0.12 : vol;
    src.buffer = buf; src.connect(f); f.connect(g); g.connect(c.destination);
    src.start();
  }

  const SFX = {
    click:   function () { note(660, 0.07, 'triangle', 0.09); },
    ok:      function () { note(784, 0.12, 'sine', 0.16); note(1047, 0.18, 'sine', 0.14, 0.08); },
    great:   function () { [523, 659, 784, 1047].forEach((f, i) => note(f, 0.22, 'triangle', 0.14, i * 0.07)); },
    bad:     function () { note(196, 0.18, 'square', 0.10); note(147, 0.24, 'square', 0.09, 0.10); },
    trap:    function () { note(160, 0.14, 'sawtooth', 0.12); note(120, 0.20, 'sawtooth', 0.11, 0.10); noise(0.22, 0.08); },
    evidence:function () { note(523, 0.08, 'sine', 0.13); note(880, 0.14, 'sine', 0.11, 0.06); },
    level:   function () { [523, 659, 784, 1047, 1319].forEach((f, i) => note(f, 0.35, 'triangle', 0.13, i * 0.10)); },
    combo:   function () { [880, 1109, 1319].forEach((f, i) => note(f, 0.16, 'sine', 0.14, i * 0.05)); },
    page:    function () { note(440, 0.05, 'sine', 0.06); }
  };

  LL.sfxEnabled = true;

  LL.sfx = function (name) {
    if (!LL.sfxEnabled) return;
    try { if (SFX[name]) SFX[name](); } catch (e) {}
  };

  LL.toggleSfx = function () {
    LL.sfxEnabled = !LL.sfxEnabled;
    try { localStorage.setItem('ll_sfx', LL.sfxEnabled ? '1' : '0'); } catch (e) {}
    LL.toast(LL.sfxEnabled ? '🔊 Đã bật âm thanh' : '🔇 Đã tắt âm thanh', null, 1600);
    return LL.sfxEnabled;
  };

  /* ═══════════ PHÁO HOA ═══════════ */
  LL.confetti = function (count) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const n = count || 26;
    const box = document.createElement('div');
    box.className = 'confetti';
    const colors = ['#f5a524', '#ff5d5d', '#35d0a5', '#4d9dff', '#a37bff', '#a8e05f'];
    let html = '';
    for (let i = 0; i < n; i++) {
      const c = colors[i % colors.length];
      const x = Math.random() * 100;
      const dur = 1 + Math.random() * 0.9;
      const del = Math.random() * 0.28;
      const rot = Math.random() * 1080 - 360;
      const w = 6 + Math.random() * 7;
      html += '<i style="left:' + x.toFixed(1) + '%;background:' + c +
        ';width:' + w.toFixed(0) + 'px;height:' + (w * 0.55).toFixed(0) + 'px;' +
        'animation-duration:' + dur.toFixed(2) + 's;animation-delay:' + del.toFixed(2) + 's;' +
        'transform:rotate(' + rot + 'deg)"></i>';
    }
    box.innerHTML = html;
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 2600);
  };

  /* ═══════════ RUNG MÀN HÌNH ═══════════ */
  LL.shake = function (kind) {
    const el = document.querySelector('.stage-inner');
    if (!el) return;
    el.classList.remove('shake-bad', 'shake-trap');
    void el.offsetWidth;
    el.classList.add(kind === 'trap' ? 'shake-trap' : 'shake-bad');
    setTimeout(() => el.classList.remove('shake-bad', 'shake-trap'), 600);
  };

  /* ═══════════ CHUỖI COMBO ═══════════ */
  LL.streak = 0;
  LL.bestStreak = 0;

  LL.hit = function (good, isTrap) {
    if (isTrap) { LL.streak = 0; LL.save(); return 0; }
    if (good) { LL.streak++; if (LL.streak > LL.bestStreak) LL.bestStreak = LL.streak; }
    else LL.streak = 0;
    LL.save();
    return LL.streak;
  };

  /* Hiện badge chuỗi */
  LL.showStreak = function () {
    const old = document.getElementById('streakBadge');
    if (old) old.remove();
    if (LL.streak < 2) return;
    const b = document.createElement('div');
    b.id = 'streakBadge';
    b.className = 'streak-badge';
    const txt = LL.streak >= 4 ? '🔥🔥 CHÁY LỮA ×' + LL.streak
      : LL.streak === 3 ? '🔥 NÓNG ×3'
      : '✨ CHUỖI ×' + LL.streak;
    b.innerHTML = txt + (LL.streak >= 3 ? ' <i>+' + (LL.streak - 2) + ' điểm ý tưởng</i>' : '');
    document.body.appendChild(b);
    setTimeout(() => { b.classList.add('out'); }, 1600);
    setTimeout(() => b.remove(), 2100);
  };

  /* ═══════════ GỢI Ý (dùng 1 lần mỗi màn) ═══════════ */
  LL.hintLeft = 99;

  /* ═══════════ TĂNG ĐIỂM SÁNG ═══════════ */
  LL.initTheme = function () {
    try {
      const t = localStorage.getItem('ll_theme');
      if (t) document.body.dataset.theme = t;
      const s = localStorage.getItem('ll_sfx');
      if (s != null) LL.sfxEnabled = s === '1';
    } catch (e) {}
  };

  LL.toggleTheme = function () {
    const cur = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = cur;
    try { localStorage.setItem('ll_theme', cur); } catch (e) {}
    LL.sfx('click');
    return cur;
  };

})(window.LL);