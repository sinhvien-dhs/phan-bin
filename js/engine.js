/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — engine.js
   Điều phối màn chơi: dựng bước, ghi điểm, chuyển màn
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  const $ = LL.$;

  LL.graded = false;      // bước hiện tại đã được chấm chưa

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
    const builder = LL.Render[step.type];
    if (!builder) { console.warn('Thiếu renderer:', step.type); LL.nextLevel(); return; }

    const built = builder(step);
    stage.innerHTML = '<div class="stage-inner">' + built.html + '</div>';
    const root = $('.stage-inner', stage);

    LL.renderRail();
    LL.refreshHUD();
    $('#btnNext').hidden = true;
    $('#btnBack').disabled = st.stepIndex === 0 && st.levelIndex === 0;

    if (typeof built.init === 'function') built.init(root);

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
    btn.textContent = (LL.state.stepIndex >= (window.LEVELS[LL.state.levelIndex].steps.length - 1))
      ? 'Hoàn thành màn ▸' : 'Tiếp tục ▸';
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
      LL.showReport();
      return;
    }

    st.levelIndex = next;
    st.stepIndex = 0;

    LL.toast('🎬 Màn ' + (next + 1) + ' · ' + (window.LEVELS[next].title), 'gold', 3400);

    // thẻ nhóm nếu đang ở chế độ nhóm
    if (st.mode === 'group' && window.LEVELS[next].groupCard) {
      LL.openGroupCard(window.LEVELS[next].groupCard);
    }
    LL.save();
    LL.renderStep();
  };

  LL.goBack = function () {
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