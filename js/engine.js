/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — engine.js
   Điều phối màn chơi: dựng bước, ghi điểm, chuyển màn
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  const $ = LL.$;
  const esc = LL.esc;

  LL.graded = false;      // bước hiện tại đã được chấm chưa

  /* Các bước không chấm điểm — hiện nút Tiếp tục ngay từ đầu */
  const AUTO_TYPES = ['narr', 'brief', 'say', 'evidence'];

  /* Cập nhật nút Tiếp tục cho đúng nhãn */
  /* Bảng chỉ dẫn "phải làm gì" — hiện ở đầu mọi thẻ tương tác */
  const HINT = {
    narr: '📖 <b>Đọc đoạn này</b> rồi bấm nút <b>Tiếp tục</b> ở góc phải bên dưới (hoặc nhấn Enter).',
    brief: '📖 <b>Đọc tình huống</b> rồi bấm <b>Tiếp tục</b> để bắt đầu.',
    say: '💬 <b>Nghe lời nhân vật</b>, rồi bấm <b>Tiếp tục</b>.',
    evidence: '🗂 <b>Đọc bằng chứng vừa thu được</b> — nó đã tự lưu vào hồ sơ. Bấm <b>Tiếp tục</b> để đi tiếp.',
    pick: '👆 <b>Bấm vào 1 câu trả lời</b> bạn nghĩ nên làm — <b>không có đáp án đúng/sai</b>, hãy chọn điều hợp lý nhất với mình.',
    final: '👆 <b>Chọn kết luận của bạn.</b> Lựa chọn này quyết định vụ án kết thúc thế nào.',
    classify: '👆 <b>Mỗi mục: bấm 1 nút.</b> Xong hết thì bấm nút xanh bên dưới. <span data-count></span>',
    multi: '👆 <b>Bấm chọn tất cả mục bạn thấy đúng</b>, rồi bấm nút xanh bên dưới. <span data-count></span>',
    rank: '👆 <b>Chọn số thứ hạng cho từng dòng</b> (1 = đáng tin nhất), rồi bấm nút xanh. <span data-count></span>',
    interrogate: '👆 <b>Bấm vào bất kỳ câu hỏi nào</b> bạn muốn hỏi. Hỏi càng nhiều câu càng nhiều điểm — nhưng muốn thì cứ bấm <b>Tiếp tục</b> để đi. <span data-count></span>',
    wave: '👆 <b>Bấm thẳng lên sóng âm thanh</b> ở những chỗ bị cắt ghép. Cần bắt đủ các điểm, rồi bấm nút xanh.',
    chart: '👆 <b>Đọc biểu đồ</b>, rồi bấm chọn câu trả lời bạn cho là đúng nhất.',
    estimate: '👆 <b>Kéo thanh trượt</b> để ước lượng con số, rồi bấm nút xanh.',
    spot: '👆 <b>Bấm vào đúng MỘT câu</b> bạn cho là chỗ lập luận bị bẻ.',
    argue: '👆 <b>Cách 1:</b> bấm 1 lập luận có sẵn. <b>Cách 2:</b> tự viết trong ô trắng. <span data-count></span>',
    journal: '✍️ <b>Bấm nút mở nhật ký</b> và viết vài dòng suy nghĩ của bạn — <b>không chấm điểm</b>, nhưng cuối game bạn sẽ đọc lại.',
    group: '👥 <b>Thảo luận xong thì ghi biên bản</b> vào ô dưới rồi bấm nút xanh.'
  };

  LL.hintBar = function (step) {
    const t = HINT[step.type];
    if (!t) return '';
    return '<div class="hint-bar"><span class="hint-ico">👉</span><span>' + t + '</span></div>';
  };

  /* Cập nhật phần đếm trong bảng chỉ dẫn */
  LL.setCount = function (root, txt) {
    const el = root.querySelector('[data-count]');
    if (el) el.textContent = txt;
  };

  LL.refreshNextBtn = function () {
    const st = LL.state;
    const lv = (window.LEVELS || [])[st.levelIndex];
    const btn = $('#btnNext');
    if (!btn || !lv) return;
    const last = st.stepIndex >= lv.steps.length - 1;
    btn.textContent = last ? 'Hoàn thành màn ▸' : 'Tiếp tục ▸';
  };

  LL.showNext = function () {
    $('#btnNext').hidden = false;
    LL.refreshNextBtn();
  };

  /* ───────────── Dựng bước hiện tại ───────────── */
  LL.renderStep = function () {
    const st = LL.state;
    const lv = (window.LEVELS || [])[st.levelIndex];
    const stage = $('#stage');

    if (!lv) { LL.showReport(); return; }

    const step = lv.steps[st.stepIndex];
    if (!step) { LL.nextLevel(); return; }
    if (!step.skill) step.skill = lv.skill;   // mặc định kỹ năng của màn

    LL.graded = false;
    LL.transitioning = false;
    const builder = LL.Render[step.type];
    if (!builder) { console.warn('Thiếu renderer:', step.type); LL.nextLevel(); return; }

    const built = builder(step);
    stage.innerHTML = '<div class="stage-inner">' + built.html + '</div>';
    let root = $('.stage-inner', stage);

    LL.renderRail();
    LL.refreshHUD();
    $('#btnBack').disabled = st.stepIndex === 0 && st.levelIndex === 0;

    // Luôn hiện nút Tiếp tục — không ai bị kẹt ở bất kỳ bước nào
    LL.showNext();

    // Banner đầu màn: số màn + kỹ năng đang rèn
    if (st.stepIndex === 0) {
      const sk = LL.SKILLS.filter(x => x.id === lv.skill)[0];
      root.insertAdjacentHTML('afterbegin',
        '<div class="level-banner">' +
        '<span class="lb-num">MÀN ' + (st.levelIndex + 1) + '/7</span>' +
        '<span class="lb-title">' + esc(lv.title) + '</span>' +
        (sk ? '<span class="lb-skill">' + sk.icon + ' Rèn: <b>' + esc(sk.name) + '</b></span>' : '') +
        '</div>');
    }

    // Dán bảng chỉ dẫn vào đầu thẻ
    const hb = LL.hintBar(step);
    if (hb) {
      const card = root.querySelector('.card');
      if (card) card.insertAdjacentHTML('afterbegin', hb);
    }

    if (typeof built.init === 'function') built.init(root);
    LL.Render.wireFold(root);

    if (AUTO_TYPES.indexOf(step.type) >= 0) {
      LL.setTip('Đọc xong thì bấm <b>Tiếp tục</b> — hoặc nhấn phím <b>Enter</b>.');
    } else {
      LL.setTip('Không biết làm gì? Xem ô màu vàng ở đầu thẻ.');
    }

    stage.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  /* Gọi sau khi một bước bị chấm: cho phép đi tiếp, tự lưu */
  LL.onStepGraded = function (step) {
    if (LL.graded) return;
    LL.graded = true;
    LL.save();
    LL.refreshHUD();
    const btn = $('#btnNext');
    btn.hidden = false;
    LL.refreshNextBtn();
    // tự cuộn xuống phản hồi
    setTimeout(function () {
      const slot = document.getElementById('fbSlot');
      if (slot) slot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
    // gợi ý chân trang theo kỹ năng
    const sk = LL.SKILLS.filter(s => s.id === (step.skill || lv0().skill))[0];
    if (sk) LL.setTip('💡 <b>' + sk.short + '</b>: ' + sk.name);
  };

  function lv0() {
    return (window.LEVELS || [])[LL.state.levelIndex] || { skill: 'fact' };
  }

  /* ───────────── Điều hướng ───────────── */
  LL.nextLevel = function () {
    if (LL.transitioning) return;
    LL.transitioning = true;
    const st = LL.state;
    const lv = (window.LEVELS || [])[st.levelIndex];

    // ghi nhận kết quả màn
    st.outcomes.push({
      level: st.levelIndex + 1,
      title: lv.title,
      skill: lv.skill,
      skillName: lv.skillName,
      pct: LL.skillPct(lv.skill)
    });

    const next = st.levelIndex + 1;
    if (next >= (window.LEVELS || []).length) {
      st.finishedAt = Date.now();
      LL.save();
      LL.sfx('level');
      LL.confetti(70);
      setTimeout(() => LL.showReport(), 700);
      return;
    }

    // Ăn mừng khi kết thúc một màn
    LL.sfx('level');
    LL.confetti(46);
    const justDone = lv.title;
    LL.streak = 0;

    st.levelIndex = next;
    st.stepIndex = 0;

    LL.toast('🎬 Màn ' + (next + 1) + ' · ' + (window.LEVELS[next].title), 'gold', 3400);
    LL.toast('✅ Đã hoàn thành: ' + justDone, 'good', 4200);

    // thẻ nhóm nếu đang ở chế độ nhóm
    if (st.mode === 'group' && window.LEVELS[next].groupCard) {
      LL.openGroupCard(window.LEVELS[next].groupCard);
    }
    LL.save();
    LL.renderStep();
  };

  LL.goBack = function () {
    if (LL.transitioning) return;
    const st = LL.state;
    if (st.stepIndex > 0) {
      st.stepIndex--;
      LL.save();
      LL.renderStep();
    } else if (st.levelIndex > 0) {
      st.levelIndex--;
      st.stepIndex = (window.LEVELS[st.levelIndex].steps.length - 1);
      LL.save();
      LL.renderStep();
    }
  };

  LL.skipToEnd = function () {
    const st = LL.state;
    st.stepIndex = (window.LEVELS[st.levelIndex].steps.length - 1);
    LL.save();
    LL.renderStep();
    LL.toast('⏭ Đã nhảy tới bước cuối màn. Bước này không tính điểm.', null, 3200);
  };

  /* ───────────── THẺ NHÓM ───────────── */
  LL.openGroupCard = function (g) {
    if (!g) g = { q: 'Thảo luận nhóm', p: 'Chưa có đề bài cho màn này.' };
    if (!g.cards) g.cards = [{ h: 'Đề bài', p: g.p || '' }];
    if (!g.seconds) g.seconds = 300;
    if (!g.tag) g.tag = 'Thảo luận nhóm';
    const built = LL.Render.group(g);
    const body = $('#groupBody');
    body.innerHTML = '<div class="stage-inner">' + built.html + '</div>';
    built.init($('.stage-inner', body));
    LL.openModal('modalGroup');
  };

  /* ───────────── KẾT THÚC ───────────── */
  LL.showReport = function () {
    LL.stopClock();
    document.body.dataset.screen = 'report';
    $$all('.screen').forEach(s => s.classList.remove('is-active'));
    $('#screen-report').classList.add('is-active');
    LL.buildReport();
  };

  function $$all(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }

  LL.showScreen = function (name) {
    document.body.dataset.screen = name;
    $$all('.screen').forEach(s => s.classList.remove('is-active'));
    $('#screen-' + name).classList.add('is-active');
  };

})(window.LL);