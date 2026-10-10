/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — core.js
   Dữ liệu nền: kỹ năng, trạng thái game, lưu/đọc hồ sơ
   ═══════════════════════════════════════════════════════════ */

window.LL = window.LL || {};

(function (LL) {
  'use strict';

  /* ───────────── 7 KỸ NĂNG TƯ DUY PHẢN BIỆN ───────────── */
  LL.SKILLS = [
    {
      id: 'fact', short: 'Nhận diện', icon: '🔎',
      name: 'Phân biệt sự thật – ý kiến – giả thuyết',
      tip: 'Đọc mọi câu và hỏi: "Cái này có thể kiểm chứng không? Ai kiểm chứng? Có phải tôi tự nghĩ ra không?"'
    },
    {
      id: 'source', short: 'Bằng chứng', icon: '🔗',
      name: 'Đánh giá bằng chứng & độ tin cậy của nguồn',
      tip: 'Một bằng chứng mạnh không chỉ nói "có", mà nói ai lưu giữ, lúc nào, theo cách nào, và ai có thể kiểm chứng lại.'
    },
    {
      id: 'fallacy', short: 'Ngụy biện', icon: '🕸️',
      name: 'Nhận diện ngụy biện trong lập luận',
      tip: 'Ngụy biện hay cất vào chỗ kín: nó luôn cảm thấy rất thuyết phục. Hãy tìm cái gì đang bị bỏ qua.'
    },
    {
      id: 'data', short: 'Dữ liệu', icon: '📊',
      name: 'Phân tích dữ liệu, tương quan và nhân quả',
      tip: '"Đi chung A và B" không có nghĩa "A gây ra B". Trước khi nói nhân quả, hãy hỏi tần suất nền là bao nhiêu.'
    },
    {
      id: 'assumption', short: 'Giả định', icon: '🧩',
      name: 'Bóc giả định ẩn trong lập luận',
      tip: 'Mỗi lập luận đều đứng trên một mảng giả định. Hãy hỏi: "Nếu điều này sai, cả lập luận có sập không?"'
    },
    {
      id: 'argument', short: 'Phản biện', icon: '⚖️',
      name: 'Bảo vệ lập luận & phản biện có phong cách',
      tip: 'Phản biện tốt không cần thắng, cần làm lập luận của bên kia mạnh hơn trước khi phản công.'
    },
    {
      id: 'perspective', short: 'Đa chiều', icon: '🧭',
      name: 'Kết luận có điều kiện & xem xét đa chiều',
      tip: 'Kết luận hay luôn có điều kiện kèm theo và để ngỏ một cánh cửa cho thông tin mới.'
    }
  ];

  /* Trọng số tính Điểm Tư duy Phản biện tổng */
  LL.SKILL_WEIGHT = {
    fact: 14, source: 16, fallacy: 16, data: 13,
    assumption: 14, argument: 15, perspective: 12
  };

  LL.SAVE_KEY = 'lucluong_save_v1';

  /* ───────────── TRẠNG THÁI MẶC ĐỊNH ───────────── */
  LL.defaultState = function () {
    const scores = {}, max = {};
    LL.SKILLS.forEach(s => { scores[s.id] = 0; max[s.id] = 0; });
    return {
      version: 1,
      playerName: '',
      mode: 'solo',
      levelIndex: 0,
      stepIndex: 0,
      scores: scores,
      max: max,
      evidence: [],
      journal: [],
      traps: [],          // ngụy biện đã mắc bẫy
      dodged: [],         // ngụy biện đã nhận ra và tránh
      outcomes: [],       // kết quả từng màn
      seenEv: [],
      answered: {},       // stepId đã trả lời (để quay lại không tính lại điểm)
      groupNotes: [],
      report: '',
      startedAt: Date.now(),
      finishedAt: 0,
      ending: null
    };
  };

  LL.state = LL.defaultState();

  /* ───────────── LƯU / ĐỌC ───────────── */
  LL.save = function () {
    try {
      localStorage.setItem(LL.SAVE_KEY, JSON.stringify(LL.state));
    } catch (e) { /* bỏ qua */ }
  };

  LL.load = function () {
    try {
      const raw = localStorage.getItem(LL.SAVE_KEY);
      if (!raw) return false;
      const d = JSON.parse(raw);
      const base = LL.defaultState();
      // gộp để chịu được thay đổi cấu trúc giữa các phiên bản
      LL.state = Object.assign(base, d);
      LL.state.scores = Object.assign(base.scores, d.scores || {});
      LL.state.max = Object.assign(base.max, d.max || {});
      return true;
    } catch (e) { return false; }
  };

  LL.hasSave = function () {
    try {
      const raw = localStorage.getItem(LL.SAVE_KEY);
      if (!raw) return false;
      const d = JSON.parse(raw);
      return !!(d && d.playerName);
    } catch (e) { return false; }
  };

  LL.clearSave = function () {
    try { localStorage.removeItem(LL.SAVE_KEY); } catch (e) {}
  };

  /* ───────────── TÍNH ĐIỂM ───────────── */
  /* Ghi điểm cho 1 kỹ năng. max mặc định = earned nếu bỏ trống. */
  LL.award = function (skill, earned, maxPts, meta) {
    const st = LL.state;
    if (!skill) return;
    const e = Math.round(earned || 0);
    const m = maxPts == null ? (e > 0 ? e : 1) : maxPts;
    if (st.answered[meta && meta.stepId]) return; // đã chấm rồi
    if (meta && meta.stepId) st.answered[meta.stepId] = true;

    st.scores[skill] = (st.scores[skill] || 0) + e;
    if (st.max[skill] != null) st.max[skill] += m;
    LL.save();
  };

  /* Phần trăm từng kỹ năng */
  LL.skillPct = function (id) {
    const st = LL.state;
    const m = st.max[id] || 0;
    if (!m) return null;
    const r = (st.scores[id] || 0) / m;
    return Math.max(0, Math.min(100, Math.round(r * 100)));
  };

  /* Điểm Tư duy Phản biện tổng 0–100 (trọng số, chỉ tính kỹ năng đã chơi) */
  LL.ctScore = function () {
    const st = LL.state;
    let num = 0, den = 0;
    LL.SKILLS.forEach(s => {
      const p = LL.skillPct(s.id);
      if (p == null) return;
      const w = LL.SKILL_WEIGHT[s.id] || 1;
      num += p * w;
      den += w;
    });
    return den ? Math.round(num / den) : 0;
  };

  /* Xếp hạng điều tra viên */
  LL.rank = function (pct) {
    if (pct >= 90) return { title: 'CHƯƠNG TRÌNH TRUYỀN HÌNH', sub: 'Bạn không tìm ra sự thật. Bạn khiến người khác tự tìm ra.' };
    if (pct >= 78) return { title: 'ĐIỀU TRA VIÊN TRƯỞNG', sub: 'Lập luận chặt, bằng chứng đầy. Rất ít ai trốn được bạn.' };
    if (pct >= 63) return { title: 'ĐIỀU TRA VIÊN', sub: 'Bạn đi đúng hướng và biết dừng lại hỏi khi chưa đủ dữ kiện.' };
    if (pct >= 45) return { title: 'CỘNG TÁC VIÊN', sub: 'Bạn đủ cẩn thận, nhưng đôi khi để cảm xúc dẫn đường trước bằng chứng.' };
    if (pct >= 25) return { title: 'TÂN BINH CÓ TIỀM NĂNG', sub: 'Bạn mắc nhiều bẫy, nhưng đã học được cách nhìn lại. Đó là phần khó nhất.' };
    return { title: 'NỘI DUNG TIN GIẢ', sub: 'Bạn đã đăng kết luận không có bằng chứng. Yên tâm, phần lớn người cũng vậy. Học lại từ đầu nhé.' };
  };

  /* ───────────── TIỆN ÍCH ───────────── */
  LL.$ = function (sel, root) { return (root || document).querySelector(sel); };
  LL.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  LL.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  LL.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  LL.pad2 = function (n) { return (n < 10 ? '0' : '') + n; };

  /* Đếm chữ tiếng Việt (bỏ dấu, gộp khoảng trắng) */
  LL.words = function (s) {
    const t = String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .trim();
    return t ? t.split(/\s+/).length : 0;
  };

  /* Bỏ dấu + viết thường — dùng để so khớp từ khóa tiếng Việt */
  LL.deaccent = function (s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd');
  };

  /* Tìm từ khóa trong chuỗi (cả hai vế đều bỏ dấu) */
  LL.hasAny = function (text, keys) {
    const t = LL.deaccent(text);
    return keys.some(k => t.indexOf(LL.deaccent(k)) >= 0);
  };

  LL.now = function () {
    const d = new Date();
    return LL.pad2(d.getHours()) + ':' + LL.pad2(d.getMinutes());
  };

})(window.LL);