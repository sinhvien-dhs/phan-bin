/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — report.js
   Báo cáo tổng kết năng lực + xuất file
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  const $ = LL.$, esc = LL.esc;

  function pct(id) { return LL.skillPct(id); }
  function cls(p) { return p == null ? '' : (p >= 70 ? 'c-3' : p >= 42 ? 'c-2' : 'c-1'); }
  function barCls(p) { return p == null ? '' : (p >= 70 ? 'bg-3' : p >= 42 ? 'bg-2' : 'bg-1'); }

  /* ───────── RADAR ───────── */
  function radar(values) {
    const S = 170, cx = S, cy = S, R = 118;
    const n = LL.SKILLS.length;
    const pt = function (i, r) {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    };
    let rings = '';
    [0.25, 0.5, 0.75, 1].forEach(function (k) {
      const d = LL.SKILLS.map((s, i) => { const p = pt(i, R * k); return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
      rings += '<polygon class="radar-grid" points="' + d + '"/>';
    });
    let axes = '';
    for (let i = 0; i < n; i++) {
      const p = pt(i, R);
      axes += '<line class="radar-axis" x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
    }
    let shape = '', dots = '', labels = '';
    const poly = values.map(function (v, i) {
      const r = R * (v == null ? 0 : Math.max(0.06, v / 100));
      const p = pt(i, r);
      return p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }).join(' ');
    shape = '<polygon class="radar-shape" points="' + poly + '"/>';
    values.forEach(function (v, i) {
      const r = R * (v == null ? 0 : Math.max(0.06, v / 100));
      const p = pt(i, r);
      dots += '<circle class="radar-dot" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5"/>';
      const lp = pt(i, R + 26);
      const anchor = Math.abs(lp[0] - cx) < 6 ? 'middle' : (lp[0] > cx ? 'start' : 'end');
      labels += '<text class="radar-label" x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 3).toFixed(1) + '" text-anchor="' + anchor + '">' +
        esc(LL.SKILLS[i].short) + '</text>';
      if (v != null) {
        const vp = pt(i, R * v / 100 - 15);
        labels += '<text class="radar-value" x="' + vp[0].toFixed(1) + '" y="' + vp[1].toFixed(1) + '" text-anchor="middle">' + v + '</text>';
      }
    });
    return '<svg class="radar" viewBox="0 0 ' + S * 2 + ' ' + S * 2 + '">' + rings + axes + shape + dots + labels + '</svg>';
  }

  /* ───────── BÁO CÁO ───────── */
  LL.buildReport = function () {
    const st = LL.state;
    const box = $('#reportWrap');
    const ct = LL.ctScore();
    const rank = LL.rank(ct);
    const vals = LL.SKILLS.map(s => pct(s.id));

    // xếp hạng kỹ năng
    const ranked = LL.SKILLS.map(s => ({ s: s, p: pct(s.id) }))
      .filter(x => x.p != null)
      .sort((a, b) => b.p - a.p);
    const strong = ranked.slice(0, 2);
    const weak = ranked.slice(-2).reverse();

    // hậu quả cuối
    const endKey = st.ending || 'none';
    const ENDINGS = {
      honest: { t: 'Kết cục: Sự thật được trả lại', c: 'var(--good)' },
      partial: { t: 'Kết cục: Đúng một nửa', c: 'var(--amber)' },
      wrong: { t: 'Kết cục: Đồn đoại thắng', c: 'var(--coral)' },
      none: { t: 'Kết cục: Vụ án chưa khép lại', c: 'var(--txt-3)' }
    };
    const end = ENDINGS[endKey] || ENDINGS.none;

    let h = '';

    /* HERO */
    h += '<div class="rp-hero"><div class="rp-kicker">Hồ sơ #2041 · Học viện Minerva</div>' +
      '<h1>BÁO CÁO TƯ DUY PHẢN BIỆN</h1>' +
      '<p class="rp-for">Người lập hồ sơ: <b>' + esc(st.playerName || 'Điều tra viên ẩn danh') + '</b> · Ngày ' +
      new Date(st.finishedAt || Date.now()).toLocaleDateString('vi-VN') + '</p>' +
      '<div class="rp-rank"><small>Điểm Tư duy Phản biện</small><b>' + ct + '/100</b><span>' + esc(rank.sub) + '</span></div>' +
      '<div class="rp-rank" style="border-color:' + end.c + '"><small>Danh hiệu</small><b style="color:' + end.c + '">' +
      esc(rank.title) + '</b><span>' + esc(end.t) + '</span></div></div>';

    /* KẾT LUẬN */
    if (st.report) {
      h += '<div class="rp-card" style="margin-bottom:18px"><h3><i class="dotc"></i>Kết luận của bạn</h3>' +
        '<div class="rp-verdict"><p>' + esc(st.report) + '</p></div></div>';
    }

    /* RADAR + KỸ NĂNG */
    h += '<div class="rp-grid"><div class="rp-card" style="animation-delay:.05s"><h3><i class="dotc"></i>Bản đồ năng lực</h3>' +
      '<div class="radar-wrap">' + radar(vals) + '</div></div>' +
      '<div class="rp-card" style="animation-delay:.1s"><h3><i class="dotc"></i>Chi tiết từng kỹ năng</h3>' +
      LL.SKILLS.map(function (s) {
        const p = pct(s.id);
        return '<div class="skill-row"><div><div class="skill-name">' + s.icon + ' ' + esc(s.name) + '</div>' +
          '<div class="skill-bar"><span class="' + barCls(p) + '" data-w="' + (p || 0) + '"></span></div>' +
          '<div class="skill-tip">' + esc(s.tip) + '</div></div>' +
          '<div class="skill-val ' + cls(p) + '">' + (p == null ? '—' : p) + '</div></div>';
      }).join('') + '</div></div>';

    /* ĐIỂM MẠNH / CẢI THIỆN */
    h += '<div class="rp-grid"><div class="rp-card" style="animation-delay:.15s"><h3><i class="dotc" style="background:var(--good)"></i>Điểm mạnh</h3><div class="str-box">' +
      strong.map(x => '<div class="str-item"><b>' + x.s.icon + ' ' + esc(x.s.name) + ' — ' + x.p + '/100</b>' +
        '<span>' + esc(strengthNote(x.s.id, x.p)) + '</span></div>').join('') +
      '</div></div><div class="rp-card" style="animation-delay:.2s"><h3><i class="dotc" style="background:var(--coral)"></i>Điểm cần cải thiện</h3><div class="str-box">' +
      weak.map(x => '<div class="str-item str-item--weak"><b>' + x.s.icon + ' ' + esc(x.s.name) + ' — ' + x.p + '/100</b>' +
        '<span>' + esc(weakNote(x.s.id, x.p)) + '</span></div>').join('') +
      '</div></div></div>';

    /* BẪY NGỤY BIỆN */
    h += '<div class="rp-card" style="margin-bottom:18px;animation-delay:.25s"><h3><i class="dotc" style="background:var(--coral)"></i>' +
      'Bẫy ngụy biện đã mắc (' + st.traps.length + ') và đã tránh (' + st.dodged.length + ')</h3><div class="trap-list">' +
      (st.traps.length ? st.traps.map(t =>
        '<div class="trap-item"><span class="ico">🪤</span><div><b>' + esc(t.name) + ' — mắt ở màn ' + t.level + '</b><span>' + esc(t.desc) + '</span></div></div>').join('')
        : '<div class="trap-item avoided"><span class="ico">🛡️</span><div><b>Không mắc bẫy nào</b><span>Bạn đã kiểm tra kỹ trước khi đồng ý. Ốc… ý là cảnh báo chờ bạn ở những màn sau.</span></div></div>') +
      (st.dodged.length ? st.dodged.map(d =>
        '<div class="trap-item avoided"><span class="ico">🛡️</span><div><b>' + esc(d.name) + '</b><span>Bạn đã nhận ra và tránh được (màn ' + d.level + ').</span></div></div>').join('') : '') +
      '</div></div>';

    /* HÀNH TRÌNH */
    h += '<div class="rp-card" style="margin-bottom:18px;animation-delay:.3s"><h3><i class="dotc"></i>Hành trình điều tra</h3><div class="timeline">' +
      st.outcomes.map(o =>
        '<div class="tl-item ' + (o.pct != null ? 'is-done' : '') + '"><div class="tl-num">' + (o.pct == null ? '·' : o.pct) + '</div>' +
        '<div class="tl-body"><b>Màn ' + o.level + ' · ' + esc(o.title) + '</b><p>' + esc(o.skillName) + '</p></div></div>').join('') +
      '<div class="tl-item is-end"><div class="tl-num">★</div><div class="tl-body"><b>' + esc(end.t) + '</b><p>' +
      esc(endingText(endKey)) + '</p></div></div></div></div>';

    /* NHẬT KÝ */
    if (st.journal.length) {
      h += '<div class="rp-card" style="margin-bottom:18px;animation-delay:.35s"><h3><i class="dotc"></i>Nhật ký suy nghĩ của bạn (' + st.journal.length + ' mục)</h3>' +
        st.journal.slice(0, 12).map(j => '<div class="jr-item"><small>Màn ' + j.level + ' · ' + esc(j.time) + '</small>' + esc(j.text) + '</div>').join('') +
        (st.journal.length > 12 ? '<p class="muted">… và ' + (st.journal.length - 12) + ' mục nữa trong hồ sơ.</p>' : '') +
        '</div>';
    }

    /* BIÊN BẢN NHÓM */
    if (st.groupNotes.length) {
      h += '<div class="rp-card" style="margin-bottom:18px;animation-delay:.4s"><h3><i class="dotc" style="background:var(--violet)"></i>Biên bản thảo luận nhóm</h3>' +
        st.groupNotes.map(g => '<div class="jr-item" style="border-left-color:var(--violet)"><small>Màn ' + g.level + ' · ' + esc(g.time) + '</small>' + esc(g.text) + '</div>').join('') +
        '</div>';
    }

    /* BÀI TẬP VỀ NHÀ */
    h += '<div class="rp-card" style="animation-delay:.45s"><h3><i class="dotc"></i>Bài tập rèn luyện tiếp</h3><div class="str-box">' +
      homeDrills(weak.map(x => x.s.id), st.traps.length)
      .map(t => '<div class="str-item str-item--weak" style="border-left-color:var(--sky)"><b>' + esc(t.h) + '</b><span>' + esc(t.p) + '</span></div>').join('') +
      '</div></div>';

    /* HÀNH ĐỘNG */
    h += '<div class="rp-actions">' +
      '<button class="btn btn--primary" id="rpExport">💾 Tải báo cáo (.txt)</button>' +
      '<button class="btn" id="rpExportJson">🧩 Tải hồ sơ (.json)</button>' +
      '<button class="btn" onclick="window.print()">🖨 In / lưu PDF</button>' +
      '<button class="btn" id="rpRestart">↻ Điều tra lại từ đầu</button></div>' +
      '<p class="rp-note">Bản báo cáo này phản ánh <b>quy trình tư duy</b> của bạn trong phiên chơi, không phải một bài kiểm tra năng lực cố định. ' +
      'Điểm thấp ở một kỹ năng nghĩa là bạn chỉ mới chạm nó lần đầu — hãy chơi lại với những lựa chọn khác và so sánh.</p>';

    box.innerHTML = h;

    // hoạt ứng thanh tiến độ kỹ năng
    setTimeout(function () {
      LL.$$('.skill-bar span').forEach(function (s) { s.style.width = s.dataset.w + '%'; });
    }, 120);

    $('#rpExport').addEventListener('click', exportTxt);
    $('#rpExportJson').addEventListener('click', exportJson);
    $('#rpRestart').addEventListener('click', function () {
      if (confirm('Xóa hồ sơ hiện tại và bắt đầu điều tra mới?')) {
        LL.clearSave();
        location.reload();
      }
    });
  };

  /* ───────── GHI CHÚ THEO KỸ NĂNG ───────── */
  function strengthNote(id, p) {
    const m = {
      fact: 'Bạn tách được dữ kiện khỏi suy diễn — đây là nền móng, mọi thứ khác đều xây trên đó.',
      source: 'Bạn biết bằng chứng mạnh khác gì với lời đồn. Đây là kỹ năng quyền lực nhất.',
      fallacy: 'Bạn đọc được lập luận đối phương mà không bị cuốn theo — rất hiếm.',
      data: 'Bạn không nhảy từ tương quan sang nhân quả. Hầu hết người trưởng thành cũng không làm được.',
      assumption: 'Bạn biết lập luận nào đang đứng trên giả định nào — đây là mặt tối của tư duy.',
      argument: 'Bạn phản biện mà không tấn công con người. Giữ được sự công bằng khi tranh luận là hiếm.',
      perspective: 'Bạn kết luận có điều kiện, biết để ngỏ khả năng. Đây là dấu hiệu của người học được nhiều.'
    };
    return m[id] || 'Bạn thể hiện tốt ở kỹ năng này.';
  }
  function weakNote(id, p) {
    const m = {
      fact: 'Bạn còn dễ bị câu chữ dắt mắt. Thử hỏi: "Câu này có kiểm chứng được không, kiểm chứng bằng cách nào?"',
      source: 'Đừng vội tin nguồn có vẻ chuyên nghiệp. Kiểm tra ai đăng, đăng ở đâu, và vì lý do gì.',
      fallacy: 'Ngụy biện rất dễ đọc vì nó hay cất vào chỗ kín. Khi nghe lập luận nghe "rất phải", hãy tìm cái gì đang bị bỏ qua.',
      data: 'Trước khi nói "A gây ra B", hãy hỏi tần suất nền: bao nhiêu trường hợp có A mà không có B?',
      assumption: 'Khi nghe một kết luận, hãy hỏi: "Nếu giả định này sai thì sao?". Bạn sẽ thấy giả định ẩn rất nhanh.',
      argument: 'Khi phản biện, đừng nhắm vào người nói. Nhắm vào điều họ nói. Lập luận tốt không cần kẻ thắng.',
      perspective: 'Câu kết luận nên có dạng "…nếu không có bằng chứng mới, tôi nghiêng về phía…".'
    };
    return m[id] || 'Cần thêm luyện tập ở kỹ năng này.';
  }
  function endingText(k) {
    return {
      honest: 'Cô Lan được minh xác trước toàn trường; Hạnh không bị gạch điểm; đoạn clip bị truy ra là ghép từ ba đoạn nói khác thời điểm. Người ghép clip bị kỷ luật vì làm lộ hồ sơ kỷ luật cũ của chính mình — một cái giá lớn hơn nhiều so với mức đăng bài ban đầu.',
      partial: 'Cô Lan được minh xác nhưng vẫn mang tiếng. Hạnh học lại được một bài, không học được một cách. Bạn đã nói đúng sự thật — nhưng bằng giọng của một người chưa chắc.',
      wrong: 'Cô Lan bị đình chỉ giảng dạy một học kỳ để "làm rõ". Hạnh bị gạch khỏi bảng thành tích và phải nhận lại mọi khoản thưởng. Video cũ vẫn còn trên diễn đàn. Không ai biết mấy giây tùy tiện kia đã cắt từ ba đoạn khác nhau.',
      none: 'Vụ án đóng hồ sơ ở trạng thái "chưa đủ chứng cứ". Cô Lan bị để ở chỗ: không bị kỷ luật, cũng không được minh xác. Kẻ ghép clip biết rằng im lặng cũng là một phán quyết.'
    }[k] || 'Vụ án chưa khép lại.';
  }
  function homeDrills(weakIds, trapCount) {
    const list = [];
    weakIds.forEach(function (id) {
      const s = LL.SKILLS.filter(x => x.id === id)[0];
      if (!s) return;
      const drill = {
        fact: ['Bắt 5 câu trong bài đọc hôm nay, phân loại: sự thật / ý kiến / giả thuyết.', 'Tìm một câu khẳng định "luôn luôn" trên mạng và viết lại cho đúng.'],
        source: ['Mở 5 bài báo trong ngày, tìm tên tác giả thật của câu trích dẫn. Có bao nhiêu câu không tìm ra được?', 'So sánh nguồn tin đưa tin đầu tiên với nguồn tin đưa lại. Ai báo trước, ai có động cơ báo trước?'],
        fallacy: ['Cất hộp 10 mẫu câu ngụy biện từ bình luận dưới bài báo. Mỗi ngày lấy ra 2 câu.', 'Đọc một bài biên bình và tự chỉ ra 3 chỗ tác giả đã cắt bối cảnh.'],
        data: ['Tìm một biểu đồ trên mạng xuất hiện dạng "N chart". Hỏi: trục tung bắt đầu từ đâu?', 'Tự tính tần suất nền cho một tin: bao nhiêu vụ xảy ra mà không ai đăng?'],
        assumption: ['Viết lại 3 lập luận từ đồng nghiệp thành 3 câu có tiền đề + hậu đề. Tiền đề của bạn là gì?', 'Với mỗi ý kiến, hỏi "điều gì đúng 100% thì ý kiến này sai?"'],
        argument: ['Mỗi tuần một lần, viết lại lập luận mạnh nhất của phe bạn không đồng ý — bằng chính tiếng của họ.', 'Tập câu mở đầu phản biện: "Điều bạn nói có lý ở chỗ…, nhưng…".'],
        perspective: ['Với 1 tin khuấy động, viết 3 lập trường khác nhau mà không lên đường cho ai.', 'Tự đặt câu hỏi: "Thông tin nào có thể làm tôi đổi ý?" rồi đi tìm nó.']
      }[id];
      if (drill) list.push({ h: 'Rèn: ' + s.short, p: drill[0] + '  ·  ' + drill[1] });
    });
    if (trapCount >= 2) {
      list.push({
        h: 'Rèn: cảnh giác ngụy biện',
        p: 'Bạn đã mắc ' + trapCount + ' bẫy. Trước khi đồng ý với một lập luận, hãy hỏi: "Có gì ở đây không đúng với tôi?" Nếu câu trả lời là không — bạn đang bị dắt mũi.'
      });
    }
    if (!list.length) list.push({ h: 'Tiếp tục lặp lại', p: 'Bạn đạt điểm cao ở tất cả các kỹ năng. Hãy thử chơi lại với lựa chọn khác để xem báo cáo đổi thay đổi thế nào.' });
    return list;
  }

  /* ───────── XUẤT FILE ───────── */
  function dl(name, content, type) {
    const b = new Blob([content], { type: type || 'text/plain;charset=utf-8' });
    const u = URL.createObjectURL(b);
    const a = document.createElement('a');
    a.href = u; a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(u); a.remove(); }, 800);
  }
  LL.download = dl;

  function exportTxt() {
    const st = LL.state;
    const ct = LL.ctScore();
    const rank = LL.rank(ct);
    let t = '';
    t += '═══════════════════════════════════════════════\n';
    t += '  LỰC LƯỜNG — BÁO CÁO TƯ DUY PHẢN BIỆN\n';
    t += '  Hồ sơ #2041 · Vụ ghép âm thanh tại Học viện Minerva\n';
    t += '═══════════════════════════════════════════════\n\n';
    t += 'Người lập hồ sơ : ' + (st.playerName || 'Ẩn danh') + '\n';
    t += 'Ngày            : ' + new Date(st.finishedAt || Date.now()).toLocaleString('vi-VN') + '\n';
    t += 'Chế độ          : ' + (st.mode === 'group' ? 'Thảo luận nhóm' : 'Cá nhân') + '\n';
    t += 'Điểm Tư duy Phản biện: ' + ct + '/100\n';
    t += 'Danh hiệu       : ' + rank.title + '\n\n';

    t += '───────────────────────────────────────────────\n';
    t += 'I. ĐIỂM TỪNG KỸ NĂNG\n';
    t += '───────────────────────────────────────────────\n';
    LL.SKILLS.forEach(function (s) {
      const p = LL.skillPct(s.id);
      const bar = '█'.repeat(Math.round((p || 0) / 10)) + '░'.repeat(10 - Math.round((p || 0) / 10));
      t += (p == null ? '  —  ' : String(p).padStart(3) + '/100') + '  ' + bar + '  ' + s.name + '\n';
    });

    t += '\n───────────────────────────────────────────────\n';
    t += 'II. ĐIỂM MẠNH & ĐIỂM CẦN CẢI THIỆN\n';
    t += '───────────────────────────────────────────────\n';
    const ranked = LL.SKILLS.map(s => ({ s: s, p: LL.skillPct(s.id) })).filter(x => x.p != null).sort((a, b) => b.p - a.p);
    t += '  ĐIỂM MẠNH:\n';
    ranked.slice(0, 2).forEach(x => { t += '   ✔ ' + x.s.name + ' (' + x.p + '/100)\n     ' + strengthNote(x.s.id, x.p) + '\n'; });
    t += '  CẦN CẢI THIỆN:\n';
    ranked.slice(-2).reverse().forEach(x => { t += '   ▲ ' + x.s.name + ' (' + x.p + '/100)\n     ' + weakNote(x.s.id, x.p) + '\n'; });

    t += '\n───────────────────────────────────────────────\n';
    t += 'III. BẪY NGỤY BIỆN\n';
    t += '───────────────────────────────────────────────\n';
    if (st.traps.length) st.traps.forEach(x => { t += '  🪤 Màn ' + x.level + ': ' + x.name + '\n     ' + x.desc + '\n'; });
    else t += '  Không mắc bẫy nào. Tốt.\n';
    if (st.dodged.length) { t += '  Đã nhận ra & tránh được:\n'; st.dodged.forEach(x => { t += '   🛡️ Màn ' + x.level + ': ' + x.name + '\n'; }); }

    t += '\n───────────────────────────────────────────────\n';
    t += 'IV. HÀNH TRÌNH ĐIỀU TRA\n';
    t += '───────────────────────────────────────────────\n';
    st.outcomes.forEach(o => { t += '  Màn ' + o.level + ' · ' + o.title + ' → ' + o.skillName + ' (' + (o.pct == null ? '—' : o.pct) + ')\n'; });

    if (st.report) {
      t += '\n───────────────────────────────────────────────\n';
      t += 'V. KẾT LUẬN CỦA TÔI\n';
      t += '───────────────────────────────────────────────\n';
      t += st.report + '\n';
    }

    t += '\n───────────────────────────────────────────────\n';
    t += 'VI. NHẬT KÝ SUY NGHĨ\n';
    t += '───────────────────────────────────────────────\n';
    st.journal.slice().reverse().forEach(j => { t += '  [Màn ' + j.level + ' · ' + j.time + '] ' + j.text.replace(/\n/g, ' ') + '\n\n'; });

    if (st.groupNotes.length) {
      t += '───────────────────────────────────────────────\n';
      t += 'VII. BIÊN BẢN NHÓM\n';
      t += '───────────────────────────────────────────────\n';
      st.groupNotes.forEach(g => { t += '  [Màn ' + g.level + '] ' + g.text.replace(/\n/g, ' ') + '\n\n'; });
    }

    t += '\n───────────────────────────────────────────────\n';
    t += 'GỢI Ý RÈN LUYỆN\n';
    t += '───────────────────────────────────────────────\n';
    homeDrills(ranked.slice(-2).reverse().map(x => x.s.id), st.traps.length).forEach(x => { t += '  ► ' + x.h + '\n    ' + x.p + '\n'; });

    t += '\n───────────────────────────────────────────────\n';
    t += 'KẾT CỤC: ' + endingText(st.ending || 'none') + '\n';
    t += '═══════════════════════════════════════════════\n';

    dl('Bao-cao-Tu-duy-Phan-bien-' + (st.playerName || 'ban') + '.txt', t);
    LL.toast('💾 Đã tải báo cáo', 'good');
  }

  function exportJson() {
    dl('Ho-so-LucLuong-' + (LL.state.playerName || 'ban') + '.json', JSON.stringify(LL.state, null, 2), 'application/json');
    LL.toast('🧩 Đã tải hồ sơ', 'good');
  }
  LL.exportTxt = exportTxt;

})(window.LL);