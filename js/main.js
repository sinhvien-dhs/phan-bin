/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — main.js
   Khởi động game, nối sự kiện, nội dung hướng dẫn
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  const $ = LL.$;

  /* ───────── NỘI DUNG HƯỚNG DẪN ───────── */
  const HOWTO = `
    <h3>🎮 Bạn đóng vai ai?</h3>
    <p>Bạn là điều tra viên của <b>Ban Điều tra Sự thật</b> (BĐT) — câu lạc bộ trinh thám học đường của Học viện Minerva.
    Một đoạn thu âm 47 giây đã đánh sập một giáo viên. Bạn có 48 giờ (thực tế: 7 màn) để tìm ra sự thật
    mà không để đồn đoại thắng.</p>

    <h3>🧠 Game này chấm gì?</h3>
    <p>Không có đáp án đúng/sai ở đây. Game chấm <b>quy trình tư duy</b> của bạn qua 7 kỹ năng:</p>
    <ul>
      ${LL.SKILLS.map(s => `<li><b>${s.icon} ${s.short}</b> — ${s.name}</li>`).join('')}
    </ul>

    <h3>🎯 Luật chơi cốt lõi</h3>
    <ol>
      <li><b>Không có bước nào chỉ có một đáp án "đúng".</b> Câu hỏi ở dạng quyết định (bạn làm gì tiếp theo?) và ở dạng tự bảo vệ lập luận.</li>
      <li><b>Chọn sai vẫn chơi tiếp.</b> Bạn không bao giờ bị kẹt — bạn chỉ phải sống với hậu quả của mình.</li>
      <li><b>Bẫy ngụy biện được cài sẵn.</b> Một số lựa chọn nghe rất thuyết phục vì nó sai. Chọn vào là mắt bẫy.</li>
      <li><b>Mọi lựa chọn đều được phản hồi chi tiết.</b> Kể cả lựa chọn đúng — bạn được biết vì sao mạnh và còn thiếu gì.</li>
    </ol>

    <h3>📊 Cách tính điểm</h3>
    <p>Mỗi câu trả lời cho <b>điểm thô</b> của đúng một kỹ năng. Cuối màn, tỷ lệ <code>điểm đạt / điểm tối đa</code>
    thành phần trăm của kỹ năng đó. <b>Điểm Tư duy Phản biện</b> là trung bình có trọng số của cả 7 kỹ năng.</p>
    <p>Vì thế một lần chơi hơi run vẫn cho ra bản đồ năng lực có thị lực — bạn sẽ thấy rõ mình mạnh ở đâu và yếu ở đâu.</p>

    <h3>✍️ Nhật ký suy nghĩ</h3>
    <p>Bấm <b>✍️ ở thanh trên cùng</b> bất cứ lúc nào. Ở đó không chấm điểm — nhưng cuối game bạn sẽ đọc lại chính nó
    và thấy mình đã đổi cách nghĩ như thế nào.</p>

    <h3>👥 Chế độ nhóm</h3>
    <p>Chọn chế độ <b>Thảo luận nhóm</b> khi bắt đầu: sau mỗi màn sẽ có thẻ thảo luận kèm đồng hồ đếm ngược để nhóm
    cùng quyết định, và một ô ghi biên bản. Báo cáo cuối sẽ gom cả những ghi chú đó.</p>

    <h3>💾 Lưu hồ sơ</h3>
    <p>Tiến trình được lưu tự động trên trình duyệt. Nếu tắt nhầm, bấm <b>↩ Tiếp tục hồ sơ đã lưu</b> ở màn hình chính.
    Xóa cache trình duyệt là mất hồ sơ — hãy tải bản <b>.txt</b> ở màn báo cáo để nộp bài.</p>
  `;

  /* ───────── GHI CHÚ NHÓM THEO MÀN ───────── */
  LL.GROUP_CARDS = {
    1: { q: 'Thảo luận: Sự thật, ý kiến hay giả thuyết?', p: 'Nhóm thống nhất: câu nào trong clip là gì?', seconds: 240 },
    7: { q: 'Thảo luận: Nhóm trình bày kết luận', p: 'Mỗi người 2 phút. Bắt buộc có: 1 bằng chứng + 1 điều chưa chắc + 1 điều kiện.', seconds: 420 }
  };

  /* ───────── KHỞI ĐỘNG ───────── */
  function boot() {
    // theme
    try {
      const t = localStorage.getItem('ll_theme');
      if (t) document.body.dataset.theme = t;
    } catch (e) {}

    $('#howtoBody').innerHTML = HOWTO;

    // chế độ
    LL.$$('.mode-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        LL.$$('.mode-btn').forEach(x => x.classList.remove('is-on'));
        b.classList.add('is-on');
        const m = b.dataset.mode;
        $('#modeHint').textContent = m === 'group'
          ? 'Sau mỗi màn sẽ có thẻ thảo luận kèm đồng hồ. Báo cáo cuối gom cả biên bản nhóm.'
          : 'Tự chơi, tự tốc độ. Có nhật ký suy nghĩ riêng.';
      });
    });

    // nút bắt đầu
    $('#btnStart').addEventListener('click', startGame);
    $('#playerName').addEventListener('keydown', e => { if (e.key === 'Enter') startGame(); });

    $('#btnContinue').addEventListener('click', function () {
      if (LL.load() && LL.state.playerName) {
        LL.startClock();
        LL.showScreen('play');
        LL.renderStep();
        LL.toast('↩ Đã tải hồ sơ của ' + LL.state.playerName, 'good');
      }
    });

    $('#btnResetSave').addEventListener('click', function () {
      if (confirm('Xóa toàn bộ hồ sơ đang lưu? Không thể hoàn tác.')) {
        LL.clearSave();
        LL.state = LL.defaultState();
        LL.refreshHUD();
        $('#btnContinue').hidden = true;
        LL.toast('🗑 Đã xóa hồ sơ', null);
      }
    });

    if (LL.hasSave()) {
      LL.load();
      $('#btnContinue').hidden = false;
      $('#playerName').value = LL.state.playerName || '';
    }

    // điều hướng trong game
    $('#btnNext').addEventListener('click', function () {
      const st = LL.state;
      const lv = window.LEVELS[st.levelIndex];
      if (st.stepIndex >= lv.steps.length - 1) {
        LL.nextLevel();
      } else {
        st.stepIndex++;
        LL.save();
        LL.renderStep();
      }
    });
    $('#btnBack').addEventListener('click', LL.goBack);

    $('#btnJournal').addEventListener('click', function () { LL.openJournal(); LL.renderJournalList(); });
    $('#btnDossier').addEventListener('click', function () { LL.renderDossier(); LL.openModal('modalDossier'); });
    $('#btnTrap').addEventListener('click', showTrapList);
    $('#btnMenu').addEventListener('click', function () { LL.openModal('modalMenu'); });

    $('#btnJournalSave').addEventListener('click', function () {
      const v = $('#journalInput').value.trim();
      if (!v) { LL.toast('Nhật ký còn trống.', 'bad'); return; }
      LL.saveJournal(v);
      $('#journalInput').value = '';
    });

    LL.$$('.qbtn').forEach(function (b) {
      b.addEventListener('click', function () {
        const ta = $('#journalInput');
        ta.value = (ta.value ? ta.value + ' ' : '') + b.dataset.fill;
        ta.focus();
      });
    });

    // modal
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) { LL.closeModal(); return; }
      if (e.target.classList.contains('modal')) { LL.closeModal(); }
      const op = e.target.closest('[data-open]');
      if (op) LL.openModal('modal' + op.dataset.open.charAt(0).toUpperCase() + op.dataset.open.slice(1));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') LL.closeTopModal();
      if (document.body.dataset.screen === 'play' && !e.target.matches('textarea,input')) {
        if (e.key === 'Enter' && !$('#btnNext').hidden) $('#btnNext').click();
      }
    });

    // menu
    $('#mJournal').addEventListener('click', function () { LL.closeModal(); LL.renderJournalList(); LL.openJournal(); });
    $('#mDossier').addEventListener('click', function () { LL.closeModal(); LL.renderDossier(); LL.openModal('modalDossier'); });
    $('#mGroup').addEventListener('click', function () { LL.closeModal(); LL.openGroupCard(LL.GROUP_CARDS[LL.state.levelIndex] || LL.GROUP_CARDS[1]); });
    $('#mSkip').addEventListener('click', function () { LL.closeModal(); LL.skipToEnd(); });
    $('#mExport').addEventListener('click', function () { LL.closeModal(); LL.exportTxt(); });
    $('#mQuit').addEventListener('click', function () {
      LL.closeModal();
      LL.save();
      LL.stopClock();
      LL.showScreen('title');
      LL.refreshHUD();
    });

    // phím tắt chủ đề
    LL.refreshHUD();
  }

  function startGame() {
    const name = ($('#playerName').value || '').trim();
    if (!name) {
      LL.toast('Điều tra viên cần một cái tên. 🙂', 'bad');
      $('#playerName').focus();
      return;
    }
    const mode = (LL.$('.mode-btn.is-on') || { dataset: { mode: 'solo' } }).dataset.mode;
    LL.state = LL.defaultState();
    LL.state.playerName = name;
    LL.state.mode = mode;
    LL.save();
    LL.showScreen('play');
    LL.startClock();

    const lv = window.LEVELS[0];
    LL.toast('🎬 ' + lv.title + ' · ' + lv.skillName, 'gold', 3600);
    LL.renderStep();
  }

  function showTrapList() {
    const st = LL.state;
    const body = document.getElementById('groupBody');
    if (!st.traps.length && !st.dodged.length) {
      body.innerHTML = '<div class="j-empty">Bạn chưa gặp bẫy ngụy biện nào. Nhớ: ngụy biện thường xuất hiện trong lời của người nghe tin, chứ không phải trong lời của người nói.</div>';
    } else {
      body.innerHTML = '<div class="legend"><span>Bạn đã mắc: <b style="color:var(--coral)">' + st.traps.length + '</b></span>' +
        '<span>Đã tránh: <b style="color:var(--good)">' + st.dodged.length + '</b></span></div>' +
        '<div class="trap-list">' +
        st.traps.map(t => '<div class="trap-item"><span class="ico">🪤</span><div><b>' + t.name + ' — mắt ở màn ' + t.level + '</b><span>' + (t.desc || '') + '</span></div></div>').join('') +
        st.dodged.map(t => '<div class="trap-item avoided"><span class="ico">🛡️</span><div><b>' + t.name + '</b><span>Đã nhận ra và tránh — màn ' + t.level + '</span></div></div>').join('') +
        '</div>';
    }
    LL.openModal('modalGroup');
  }
  LL.showTrapList = showTrapList;

  /* Gắn thẻ nhóm mặc định vào các màn có thiết lập */
  function attachGroupCards() {
    (window.LEVELS || []).forEach(function (lv, i) {
      if (LL.GROUP_CARDS[lv.id]) {
        lv.groupCard = Object.assign({
          tag: 'Thảo luận nhóm',
          cards: [{
            h: 'Đề bài',
            p: LL.GROUP_CARDS[lv.id].p,
            votes: [
              { l: 'Nhóm đồng ý', w: 0 },
              { l: 'Chưa chắc', w: 0 }
            ]
          }]
        }, LL.GROUP_CARDS[lv.id]);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    attachGroupCards();
    boot();
    // đăng ký service worker khi chạy qua http(s)
    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  });

})(window.LL);