/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — render.js
   Dựng giao diện cho từng loại thẻ tương tác
   Mỗi builder trả về { html, init(root) }
   ═══════════════════════════════════════════════════════════ */

(function (LL) {
  'use strict';

  const esc = LL.esc;
  const $ = LL.$;
  const R = {};

  /* ───────────── khối dựng chung ───────────── */

  R.card = function (cls, inner) {
    return '<div class="card ' + (cls || '') + '">' + inner + '</div>';
  };

  R.bubble = function (text, who, role, avatar) {
    return R.card('', '<div class="speaker">' +
      '<div class="avatar">' + (avatar || '💬') + '</div>' +
      '<div><div class="speaker-name">' + esc(who) + '</div>' +
      '<div class="speaker-role">' + esc(role || '') + '</div></div></div>' +
      '<div class="bubble">' + text + '</div>');
  };

  const VLABEL = { good: 'Chính xác', mid: 'Chưa đầy đủ', bad: 'Chưa đúng' };

  R.fb = function (verdict, points, body, teach, teachTitle) {
    const kind = verdict === 'good' ? 'good' : (verdict === 'mid' ? 'mid' : 'bad');
    const ico = kind === 'good' ? '✅' : (kind === 'mid' ? '⚠️' : '❌');
    const pTxt = points == null ? ''
      : (points > 0 ? '+' + points : String(points)) + ' điểm';
    return '<div class="fb is-' + kind + '">' +
      '<div class="fb-head">' + ico + ' ' + (VLABEL[kind] || kind) +
      (points != null ? '<span class="fb-points">' + pTxt + '</span>' : '') +
      '</div>' +
      '<div class="fb-body">' + body + '</div>' +
      (teach ? '<div class="fb-teach"><b>' + esc(teachTitle || 'Bài học') + '</b>' + teach + '</div>' : '') +
      '</div>';
  };

  /* ═════════════ 1. NARR / BRIEF ═════════════ */
  R.narr = function (step) {
    return {
      html: R.card('card--narr', '<div class="eyebrow">' + esc(step.tag || 'Diễn biến') + '</div>' +
        '<div class="narr-text">' + step.text + '</div>'),
      init: function () {}
    };
  };

  R.brief = function (step) {
    return {
      html: R.card('card--brief', '<h2>' + esc(step.tag || 'Tình huống mở') + '</h2>' +
        '<div class="narr-text">' + step.text + '</div>' +
        (step.task ? '<div class="fb-teach" style="margin-top:18px"><b>Nhiệm vụ của bạn</b>' + step.task + '</div>' : '')),
      init: function () {}
    };
  };

  R.say = function (step) {
    return {
      html: R.bubble(step.text, step.who, step.role, step.avatar),
      init: function () {}
    };
  };

  /* ═════════════ 2. EVIDENCE ═════════════ */
  R.evidence = function (step) {
    const ev = step.ev;
    return {
      html: '<div id="evSlot">' + LL.evCardHTML(ev, true) + '</div>' +
        R.card('', '<div class="eyebrow">Đánh giá nhanh</div>' +
          '<div class="narr-text">' + esc(step.prompt || 'Bạn ghi nhận bằng chứng này vào hồ sơ. Nhớ đọc kỹ nguồn gốc.') + '</div>'),
      init: function (root) {
        LL.addEvidence(ev);
        LL.toast('🗂 +1 bằng chứng: ' + ev.id, 'gold');
      }
    };
  };

  /* ═════════════ 3. PICK — chọn 1 trong n ═════════════ */
  R.pick = function (step) {
    const opts = step.options.map((o, i) =>
      '<button class="opt" data-i="' + i + '">' +
      '<span class="opt-key">' + 'ABCD'[i] + '</span>' +
      '<span class="opt-body"><span class="opt-label">' + esc(o.t) + '</span>' +
      (o.d ? '<span class="opt-desc">' + esc(o.d) + '</span>' : '') +
      '</span></button>').join('');

    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Quyết định') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      '<div class="opts">' + opts + '</div>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        LL.$$('.opt', root).forEach(function (btn) {
          btn.addEventListener('click', function () {
            const i = +btn.dataset.i;
            const o = step.options[i];
            LL.$$('.opt', root).forEach(function (b, k) {
              b.disabled = true;
              if (step.correct === i && k === i) b.classList.add('is-correct');
              else if (step.correct === i) b.classList.add('dim');
            });
            if (step.correct != null && step.correct !== i) btn.classList.add('is-wrong');
            else if (o.trap) btn.classList.add('is-trap');

            const pts = o.score != null ? o.score : 0;
            LL.award(step.skill, pts, step.maxPts || 3, { stepId: step.id });

            if (o.trap) {
              LL.recordTrap(o.trap, o.trapDesc || '');
              $('#fbSlot', root).innerHTML =
                '<div class="trap-alert"><h4>🚨 Bạn đã mắc bẫy ngụy biện</h4>' +
                '<p><b>' + esc(o.trap) + '</b> — ' + esc(o.trapDesc || '') + '</p></div>' +
                R.fb(o.verdict || 'bad', pts, o.fb || '', o.teach, o.teachTitle);
            } else {
              $('#fbSlot', root).innerHTML = R.fb(o.verdict || 'good', pts, o.fb || '', o.teach, o.teachTitle);
            }
            LL.onStepGraded(step);
          });
        });
      }
    };
  };

  /* ═════════════ 4. CLASSIFY — gán nhãn cho nhiều mục ═════════════ */
  R.classify = function (step) {
    let html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Phân loại') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      step.items.map(function (it, i) {
        return '<div class="cls-item" data-i="' + i + '">' +
          '<div class="cls-text">' + (step.number ? '<b class="mono">' + (i + 1) + '.</b> ' : '') + esc(it) + '</div>' +
          '<div class="cls-opts">' + step.options.map(function (op, k) {
            return '<button class="cls-btn" data-k="' + k + '">' + esc(op) + '</button>';
          }).join('') + '</div>' +
          '<div class="cls-mark"></div>' +
          '</div>';
      }).join('') +
      '<button class="btn btn--primary btn--wide" id="btnCheck" style="margin-top:8px">Kiểm tra đáp án</button>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        const picks = new Array(step.items.length).fill(-1);
        LL.$$('.cls-item', root).forEach(function (el, i) {
          LL.$$('.cls-btn', el).forEach(function (b, k) {
            b.addEventListener('click', function () {
              if (el.dataset.locked) return;
              picks[i] = k;
              LL.$$('.cls-btn', el).forEach(x => x.classList.remove('is-picked'));
              b.classList.add('is-picked');
            });
          });
        });
        $('#btnCheck', root).addEventListener('click', function () {
          let right = 0;
          LL.$$('.cls-item', root).forEach(function (el, i) {
            el.dataset.locked = '1';
            const ok = picks[i] === step.answer[i];
            if (ok) right++;
            LL.$$('.cls-btn', el).forEach(function (b, k) {
              b.disabled = true;
              if (k === step.answer[i]) b.classList.add('is-correct');
              else if (k === picks[i]) b.classList.add('is-wrong');
            });
            const mark = $('.cls-mark', el);
            const exp = (step.explain && step.explain[i]) || '';
            mark.className = 'cls-mark ' + (ok ? 'ok' : 'no');
            mark.innerHTML = (ok ? '✔ Đúng. ' : '✘ Chưa đúng. ') + esc(exp);
          });
          const pct = Math.round(right / step.items.length * 100);
          const pts = Math.round(pct / 25);
          const v = right === step.items.length ? 'good' : (right >= step.items.length / 2 ? 'mid' : 'bad');
          LL.award(step.skill, pts, 4, { stepId: step.id });
          $('#fbSlot', root).innerHTML = R.fb(
            v, pts,
            'Bạn phân loại đúng <b>' + right + '/' + step.items.length + '</b> mục.',
            (step.teach || ''), 'Nguyên tắc');
          LL.onStepGraded(step);
          $('#btnCheck', root).disabled = true;
        });
      }
    };
  };

  /* ═════════════ 5. MULTI — chọn nhiều ═════════════ */
  R.multi = function (step) {
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Chọn nhiều') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      '<div id="multiList">' + step.items.map((it, i) =>
        '<button class="multi-item" data-i="' + i + '">' +
        '<span class="box">✔</span><span>' + esc(it.t) + '</span></button>').join('') + '</div>' +
      '<button class="btn btn--primary btn--wide" id="btnCheck" style="margin-top:10px">Chốt lại</button>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        const picked = [];
        LL.$$('.multi-item', root).forEach(function (b) {
          b.addEventListener('click', function () {
            if (b.dataset.locked) return;
            const i = +b.dataset.i;
            const at = picked.indexOf(i);
            if (at >= 0) { picked.splice(at, 1); b.classList.remove('is-picked'); }
            else { picked.push(i); b.classList.add('is-picked'); }
          });
        });
        $('#btnCheck', root).addEventListener('click', function () {
          let right = 0;
          LL.$$('.multi-item', root).forEach(function (b, i) {
            b.dataset.locked = '1'; b.disabled = true;
            const should = step.answer.indexOf(i) >= 0;
            const did = picked.indexOf(i) >= 0;
            if (should === did && should) right++;
            if (should) b.classList.add('is-correct');
            else if (did) b.classList.add('is-wrong');
          });
          const miss = step.answer.filter(i => picked.indexOf(i) < 0).length;
          const over = picked.filter(i => step.answer.indexOf(i) < 0).length;
          const pts = Math.max(0, step.answer.length - miss - over);
          const v = (miss === 0 && over === 0) ? 'good' : (miss + over <= 1 ? 'mid' : 'bad');
          LL.award(step.skill, pts, step.answer.length, { stepId: step.id });
          $('#fbSlot', root).innerHTML = R.fb(v, pts,
            (step.fb || '') +
            (miss ? '\n\nBạn bỏ sót ' + miss + ' mục cần có. ' : '') +
            (over ? 'Bạn chọn thừa ' + over + ' mục không cần thiết. ' : ''),
            (step.teach || ''), 'Gợi ý');
          LL.onStepGraded(step);
          $('#btnCheck', root).disabled = true;
        });
      }
    };
  };

  /* ═════════════ 6. RANK — xếp hạng độ tin cậy ═════════════ */
  R.rank = function (step) {
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Xếp hạng') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      '<div class="q-sub">' + (step.sub || 'Số 1 = đáng tin nhất. Số 4 = đáng nghi nhất.') + '</div>' +
      step.items.map(function (it, i) {
        return '<div class="rank-row"><div class="rank-item"><b>' + esc(it.t) + '</b><small>' + esc(it.d || '') + '</small></div>' +
          '<select data-i="' + i + '"><option value="">—</option>' +
          '<option value="1">1 · Đáng tin</option><option value="2">2 · Cần kiểm chứng</option>' +
          '<option value="3">3 · Đáng nghi</option><option value="4">4 · Vô giá trị</option></select></div>';
      }).join('') +
      '<button class="btn btn--primary btn--wide" id="btnCheck" style="margin-top:10px">Nộp thứ hạng</button>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        $('#btnCheck', root).addEventListener('click', function () {
          let right = 0;
          LL.$$('.rank-row', root).forEach(function (row, i) {
            const sel = $('select', row);
            const v = sel.value === '' ? 0 : +sel.value;
            const ok = v === step.order[i];
            if (ok) right++;
            sel.disabled = true;
            sel.style.borderColor = ok ? 'var(--good)' : 'var(--bad)';
            const hint = document.createElement('div');
            hint.className = 'cls-mark ' + (ok ? 'ok' : 'no');
            const why = (step.why && step.why[i]) || ('Đúng là hạng ' + step.order[i] + '.');
            hint.innerHTML = (ok ? '✔ ' : '✘ ') + why;
            row.appendChild(hint);
          });
          const pts = right;
          const v = right === step.order.length ? 'good' : (right >= step.order.length / 2 ? 'mid' : 'bad');
          LL.award(step.skill, pts, step.order.length, { stepId: step.id });
          $('#fbSlot', root).innerHTML = R.fb(v, pts,
            'Bạn xếp đúng <b>' + right + '/' + step.order.length + '</b> nguồn tin.',
            (step.teach || ''), 'Nguyên tắc xếp nguồn');
          LL.onStepGraded(step);
          $('#btnCheck', root).disabled = true;
        });
      }
    };
  };

  /* ═════════════ 7. INTERROGATE — phỏng vấn NPC ═════════════ */
  R.interrogate = function (step) {
    const n = step.npc;
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Phỏng vấn') + '</div>' +
      '<div class="q-title">' + esc(step.q || 'Phỏng vấn ' + n.name) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      '<div class="npc-intro"><div class="avatar">' + (n.avatar || '🧑') + '</div>' +
      '<div><div class="npc-name">' + esc(n.name) + '</div>' +
      '<div class="npc-role">' + esc(n.role || '') + '</div></div></div>' +
      '<div class="qlog" id="qlog"></div>' +
      '<div class="eyebrow">Câu hỏi có thể hỏi — bấm để đặt câu hỏi</div>' +
      '<div class="ask-list">' + step.questions.map((qq, i) =>
        '<button class="ask-btn" data-i="' + i + '">' +
        '<span class="ask-tag ' + (qq.tag || 't-echo') + '">' + esc(qq.tagName || 'Thông tin') + '</span>' +
        '<span style="flex:1">' + esc(qq.q) + '</span></button>').join('') + '</div>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        const log = $('#qlog', root);
        let asked = 0;
        const totalMax = step.questions.reduce((s, x) => s + (x.score != null ? x.score : 1), 0);
        LL.$$('.ask-btn', root).forEach(function (b) {
          b.addEventListener('click', function () {
            const i = +b.dataset.i;
            const qq = step.questions[i];
            b.disabled = true;
            const first = asked === 0;
            asked++;
            let h = '<div class="qlog-item"><div class="qlog-q">' + esc(qq.q) + '</div>' +
              '<div class="qlog-a">' + esc(qq.a) + '</div>';
            if (qq.ev) h += '<div class="qlog-ev">🗂 Thu thập được: ' + esc(qq.ev.id) + '</div>';
            h += '</div>';
            log.insertAdjacentHTML('afterbegin', h);
            if (qq.ev) {
              const added = LL.addEvidence(qq.ev);
              LL.toast(added ? '🗂 +1 bằng chứng: ' + qq.ev.id : 'Bằng chứng đã có trong hồ sơ', added ? 'gold' : null);
            }
            if (qq.trap) { LL.recordDodge(qq.trap); }
            LL.award(step.skill, qq.score != null ? qq.score : 1,
              first ? totalMax : 0, { stepId: step.id });
            if (asked >= step.questions.length) LL.onStepGraded(step);
            else LL.setTip('Còn ' + (step.questions.length - asked) + ' câu hỏi. Câu nào quan trọng nhất với vụ án?');
          });
        });
        if (step.questions.length) $('#fbSlot', root);
      }
    };
  };

  /* ═════════════ 8. WAVE — bắt điểm ghép âm thanh ═════════════ */
  R.wave = function (step) {
    const dur = step.duration || 47;
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Phân tích âm thanh') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      '<div class="wave-box"><div class="wave" id="wave">' +
      '<canvas id="waveCv" width="900" height="150"></canvas></div>' +
      '<div class="wave-axis"><span>0s</span><span>' + (dur * 0.25) + 's</span><span>' + (dur * 0.5) + 's</span><span>' + (dur * 0.75) + 's</span><span>' + dur + 's</span></div>' +
      '<div class="wave-hits" id="waveHits"></div></div>' +
      '<button class="btn btn--primary btn--wide" id="btnWaveCheck">Phân tích xong</button>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        const cv = $('#waveCv', root);
        const ctx = cv.getContext('2d');
        // vẽ sóng nhiễu giả
        let seed = 7;
        const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
        ctx.clearRect(0, 0, cv.width, cv.height);
        const mid = cv.height / 2;
        ctx.beginPath();
        for (let x = 0; x < cv.width; x += 2) {
          const t = x / cv.width;
          let amp = 22 + rnd() * 26;
          // đánh dấu "cắt" bằng nhiễu nhỏ hơn ở gần điểm ghép
          let quiet = 1;
          (step.cuts || []).forEach(c => { const d = Math.abs(t * dur - c); if (d < 1.1) quiet = 0.18; });
          amp *= quiet;
          const y = mid + Math.sin(t * 46) * amp * 0.4 + (rnd() - 0.5) * amp;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#4d9dff'; ctx.lineWidth = 1.6; ctx.stroke();

        let hits = [];
        const wave = $('#wave', root), hitsBox = $('#waveHits', root);

        const paint = function () {
          wave.querySelectorAll('.wave-mark').forEach(m => m.remove());
          hits.forEach(function (h) {
            const el = document.createElement('span');
            el.style.left = (h.t / dur * 100) + '%';
            el.className = 'wave-mark' + (h.res != null ? (h.res ? ' ok' : '') : '');
            el.dataset.t = h.t.toFixed(1) + 's';
            wave.appendChild(el);
          });
          hitsBox.innerHTML = hits.map((h, i) =>
            '<span class="wave-hit">' + (i + 1) + '. ' + h.t.toFixed(1) + 's' +
            (h.res != null ? (h.res ? ' <b style="color:var(--good)">✔</b>' : ' <b style="color:var(--coral)">✘</b>') : '') +
            ' <button data-x="' + i + '" style="color:var(--coral);font-weight:800">✕</button></span>').join('');
          hitsBox.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', function () {
            if (b.dataset.locked) return;
            hits.splice(+b.dataset.x, 1); paint();
          }));
        };

        wave.addEventListener('click', function (e) {
          const r = wave.getBoundingClientRect();
          const t = (e.clientX - r.left) / r.width * dur;
          if (hits.some(h => Math.abs(h.t - t) < 0.8)) return;
          if (hits.length >= (step.cuts || []).length) return;
          hits.push({ t: t, res: null }); paint();
        });

        $('#btnWaveCheck', root).addEventListener('click', function () {
          const cuts = step.cuts || [];
          let right = 0;
          hits.forEach(function (h) {
            h.res = cuts.some(c => Math.abs(c - h.t) <= (step.tol || 1.5));
            if (h.res) right++;
          });
          const miss = cuts.length - right;
          const pts = Math.max(0, right - Math.max(0, hits.length - right));
          $('#btnWaveCheck', root).disabled = true;
          paint();
          const v = (miss === 0 && hits.length === cuts.length) ? 'good' : (right >= Math.ceil(cuts.length / 2) ? 'mid' : 'bad');
          LL.award(step.skill, pts, cuts.length, { stepId: step.id });
          $('#fbSlot', root).innerHTML = R.fb(v, pts,
            (step.fb || '') + (miss ? '\n\nBạn đã bỏ sót ' + miss + ' điểm ghép âm thanh.' : '\n\nBạn đã đánh dấu đủ các điểm ghép.'),
            (step.teach || ''), 'Kỹ thuật');
          LL.onStepGraded(step);
        });
      }
    };
  };

  /* ═════════════ 9. CHART — đọc biểu đồ ═════════════ */
  R.chart = function (step) {
    const c = step.chart;
    let body = '';
    if (c.kind === 'bar') {
      const max = Math.max.apply(null, c.data.map(d => d.value)) || 1;
      body = '<div class="bars">' + c.data.map(function (d, i) {
        const h = Math.max(4, d.value / max * 100);
        const cls = d.hl ? ' hl' : (d.ok ? ' ok' : '');
        return '<div class="bar-col"><div class="bar' + cls + '" style="height:' + h + '%">' +
          '<span class="bar-val">' + d.value + (c.unit || '') + '</span></div>' +
          '<span class="bar-label">' + esc(d.label) + '</span></div>';
      }).join('') + '</div>';
    } else {
      const w = 600, h = 170, pad = 8;
      const max = Math.max.apply(null, c.data.map(d => d.value)) || 1;
      const min = Math.min.apply(null, c.data.map(d => d.value)) || 0;
      const rng = (max - min) || 1;
      const pts = c.data.map(function (d, i) {
        const x = pad + i * (w - pad * 2) / (c.data.length - 1 || 1);
        const y = h - pad - (d.value - min) / rng * (h - pad * 2);
        return { x: x, y: y, d: d };
      });
      const line = pts.map((p, i) => (i ? 'L' : 'M') + p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join(' ');
      const area = line + ' L' + pts[pts.length - 1].x.toFixed(1) + ' ' + (h - pad) + ' L' + pts[0].x.toFixed(1) + ' ' + (h - pad) + ' Z';
      body = '<div class="lines"><svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' +
        '<defs><linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="var(--sky)" stop-opacity=".45"/><stop offset="100%" stop-color="var(--sky)" stop-opacity="0"/></linearGradient></defs>' +
        '<path d="' + area + '" fill="url(#lg1)"/>' +
        '<path d="' + line + '" fill="none" stroke="var(--sky)" stroke-width="2.5" stroke-linejoin="round"/>' +
        pts.map(p => '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="4" fill="var(--amber)"><title>' +
          esc(p.d.label + ': ' + p.d.value) + '</title></circle>').join('') +
        '</svg></div><div class="lines-x">' +
        c.data.map(d => '<span>' + esc(d.label) + '</span>').join('') + '</div>';
    }

    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Phân tích dữ liệu') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      '<div class="chart-box"><div class="chart-title">' + esc(c.title) + '</div>' +
      '<div class="chart-sub">' + esc(c.sub || '') + '</div>' + body +
      (c.foot ? '<div class="readout"><span>' + esc(c.foot) + '</span></div>' : '') + '</div>' +
      '<div class="opts">' + step.options.map((o, i) =>
        '<button class="opt" data-i="' + i + '"><span class="opt-key">' + 'ABCD'[i] + '</span>' +
        '<span class="opt-body"><span class="opt-label">' + esc(o.t) + '</span>' +
        (o.d ? '<span class="opt-desc">' + esc(o.d) + '</span>' : '') + '</span></button>').join('') + '</div>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        LL.$$('.opt', root).forEach(function (btn) {
          btn.addEventListener('click', function () {
            const i = +btn.dataset.i, o = step.options[i];
            LL.$$('.opt', root).forEach(function (b, k) {
              b.disabled = true;
              if (step.correct === k) b.classList.add('is-correct');
              else if (k === i) b.classList.add('is-wrong');
              else b.classList.add('dim');
            });
            const pts = o.score != null ? o.score : 0;
            LL.award(step.skill, pts, 3, { stepId: step.id });
            if (o.trap) LL.recordTrap(o.trap, o.trapDesc || '');
            let pre = '';
            if (o.trap) {
              LL.recordTrap(o.trap, o.trapDesc);
              pre = '<div class="trap-alert"><h4>🚨 Cảnh báo: kết luận vượt quá dữ liệu</h4><p><b>' +
                esc(o.trap) + '</b> — ' + esc(o.trapDesc || '') + '</p></div>';
            }
            $('#fbSlot', root).innerHTML = pre + R.fb(o.verdict || 'good', pts, o.fb || '', o.teach, o.teachTitle);
            LL.onStepGraded(step);
          });
        });
      }
    };
  };

  /* ═════════════ 10. ESTIMATE — ước lượng tần suất nền ═════════════ */
  R.estimate = function (step) {
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Ước lượng') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      '<div class="q-sub">' + (step.sub || '') + '</div>' +
      '<div class="est-box"><div class="est-num" id="estNum">50</div>' +
      '<div class="est-unit">' + esc(step.unit || '') + '</div>' +
      '<input type="range" id="estRange" min="0" max="' + (step.max || 100) + '" value="50"></div>' +
      (step.hint ? '<div class="fb-teach" style="margin-bottom:16px"><b>Dữ kiện bạn có</b>' + esc(step.hint) + '</div>' : '') +
      '<button class="btn btn--primary btn--wide" id="btnEst">Chốt ước lượng</button>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        const r = $('#estRange', root), n = $('#estNum', root);
        r.addEventListener('input', () => { n.textContent = r.value; });
        $('#btnEst', root).addEventListener('click', function () {
          const v = +r.value, tol = step.tol || 5;
          const d = Math.abs(v - step.answer);
          const ok = d <= tol;
          const pts = ok ? 3 : (d <= tol * 2 ? 1 : 0);
          r.disabled = true;
          n.textContent = v + ' ✅' ;
          $('#btnEst', root).disabled = true;
          LL.award(step.skill, pts, 3, { stepId: step.id });
          $('#fbSlot', root).innerHTML = R.fb(ok ? 'good' : (pts ? 'mid' : 'bad'), pts,
            (step.fb || '') + '\n\nCon số đúng ở đây là <b>' + step.answer + '</b>. Bạn lệch ' + d + '.',
            (step.teach || ''), 'Về tần suất nền');
          LL.onStepGraded(step);
        });
      }
    };
  };

  /* ═════════════ 11. SPOT — chỉ vào câu có ngụy biện ═════════════ */
  R.spot = function (step) {
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Bắt ngụy biện') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      '<div class="q-sub">' + (step.sub || 'Bấm vào một câu bạn cho là lỗi lập luận.') + '</div>' +
      '<div class="spot-text" id="spotText">' +
      step.parts.map((p, i) =>
        '<span class="spot-seg' + (p.sep ? ' spot-sep' : '') + '" data-i="' + i + '">' + esc(p.t) + '</span>'
      ).join(' ') + '</div>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        let done = false;
        LL.$$('.spot-seg', root).forEach(function (el) {
          el.addEventListener('click', function () {
            if (done) return;
            done = true;
            const i = +el.dataset.i;
            const ok = !!step.parts[i].ok;
            LL.$$('.spot-seg', root).forEach(function (x, k) {
              if (step.parts[k].ok) x.classList.add('correct');
              else if (k === i) x.classList.add('wrong');
              else x.classList.add('dim');
            });
            const pts = ok ? 3 : 0;
            LL.award(step.skill, pts, 3, { stepId: step.id });
            if (ok) LL.recordDodge(step.fallacy);
            else LL.recordTrap(step.fallacy, step.fallacyDesc || '');
            $('#fbSlot', root).innerHTML = R.fb(ok ? 'good' : 'bad', pts,
              (ok ? 'Chính xác. ' : 'Chưa đúng điểm cần chỉ. ') + (step.fb || ''),
              (step.teach || ''), 'Ngụy biện này tên gì');
            LL.onStepGraded(step);
          });
        });
      }
    };
  };

  /* ═════════════ 12. ARGUE — chọn hoặc viết lập luận ═════════════ */
  R.argue = function (step) {
    const html = R.card('',
      '<div class="eyebrow">' + esc(step.tag || 'Lập luận') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      (step.context ? '<div class="fb-teach" style="margin-bottom:16px"><b>Bối cảnh</b>' + esc(step.context) + '</div>' : '') +
      (step.presets ? '<div class="eyebrow">Chọn một lập luận có sẵn</div>' +
        '<div class="argue-presets">' + step.presets.map((p, i) =>
          '<button class="argue-preset" data-i="' + i + '">' + esc(p.t) + '</button>').join('') + '</div>' +
        '<div style="display:flex;align-items:center;gap:12px;margin:16px 0"><div style="flex:1;height:1px;background:var(--line)"></div>' +
        '<span class="muted">HOẶC TỰ VIẾT</span><div style="flex:1;height:1px;background:var(--line)"></div></div>' : '') +
      '<div class="argue-box"><div class="wordcount" id="wc">0 từ · mục tiêu tối thiểu ' + (step.minWords || 40) + ' từ</div>' +
      '<textarea id="argTa" rows="5" placeholder="' + esc(step.ph || 'Viết lập luận của bạn ở đây…') + '"></textarea></div>' +
      '<button class="btn btn--primary btn--wide" id="btnArg">Trình bày lập luận</button>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        const ta = $('#argTa', root), wc = $('#wc', root);
        const min = step.minWords || 40;
        let chosen = -1;

        ta.addEventListener('input', function () {
          const w = LL.words(ta.value);
          wc.textContent = w + ' từ · mục tiêu tối thiểu ' + min + ' từ';
          wc.classList.toggle('ok', w >= min);
        });

        if (step.presets) {
          LL.$$('.argue-preset', root).forEach(function (b) {
            b.addEventListener('click', function () {
              if (b.dataset.locked) return;
              chosen = +b.dataset.i;
              LL.$$('.argue-preset', root).forEach(x => x.classList.remove('is-picked'));
              b.classList.add('is-picked');
              ta.value = step.presets[chosen].t;
              ta.dispatchEvent(new Event('input'));
            });
          });
        }

        $('#btnArg', root).addEventListener('click', function () {
          const text = (ta.value || '').trim();
          const w = LL.words(text);
          if (w < 12) {
            LL.toast('Lập luận quá ngắn. Ít nhất 12 từ nhé.', 'bad');
            return;
          }
          $('#btnArg', root).disabled = true;
          ta.disabled = true;

          let pts = 0, checks = [];
          if (step.presets && chosen >= 0) {
            const p = step.presets[chosen];
            pts = p.score || 0;
            if (step.correct != null && chosen === step.correct) {
              LL.$$('.argue-preset', root).forEach(function (x, k) {
                x.disabled = true;
                x.classList.add(k === chosen ? 'is-correct' : 'is-wrong');
              });
            }
            checks = (step.rubricCheck && step.rubricCheck(p.t)) || null;
          } else {
            checks = (step.rubricCheck && step.rubricCheck(text)) || [];
            pts = checks.reduce((s, c) => s + (c.hit ? 1 : 0), 0);
          }

          const maxPts = step.presets ? (step.max || 3) : (step.rubric || []).length;
          LL.award(step.skill, pts, maxPts, { stepId: step.id });

          if (chosen >= 0 && step.presets[chosen].trap) {
            LL.recordTrap(step.presets[chosen].trap, step.presets[chosen].trapDesc || '');
            $('#fbSlot', root).insertAdjacentHTML('afterbegin',
              '<div class="trap-alert"><h4>🚨 Bạn đã mắc bẫy</h4><p><b>' +
              esc(step.presets[chosen].trap) + '</b> — ' + esc(step.presets[chosen].trapDesc || '') + '</p></div>');
          } else {
            LL.recordDodge(step.dodge || 'Phản biện có phong cách');
          }

          let h = '';
          if (checks && checks.length) {
            h += '<div class="rubric">' + checks.map(c =>
              '<div class="rubric-item ' + (c.hit ? 'hit' : 'miss') + '"><span class="ico">' +
              (c.hit ? '✅' : '⬜') + '</span><span><b>' + esc(c.label) + '</b><br>' + esc(c.note) + '</span></div>'
            ).join('') + '</div>';
          }
          const v = pts >= maxPts ? 'good' : (pts >= maxPts / 2 ? 'mid' : 'bad');
          const fb = (chosen >= 0 && step.presets[chosen].fb) ? step.presets[chosen].fb : (step.fb || '');
          $('#fbSlot', root).insertAdjacentHTML('beforeend',
            R.fb(v, pts, fb, (step.teach || ''), 'Chấm lập luận') + h);

          // lưu vào nhật ký
          LL.state.journal.unshift({
            level: LL.state.levelIndex + 1,
            levelTitle: (window.LEVELS[LL.state.levelIndex] || {}).title || '',
            text: text, time: LL.now()
          });
          LL.save(); LL.refreshHUD();

          LL.onStepGraded(step);
        });
      }
    };
  };

  /* ═════════════ 13. JOURNAL ═════════════ */
  R.journal = function (step) {
    return {
      html: R.card('',
        '<div class="eyebrow">' + esc(step.tag || 'Nhật ký suy nghĩ') + '</div>' +
        '<div class="q-title">' + esc(step.q) + '</div>' +
        (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
        '<button class="btn btn--primary btn--wide" id="btnOpenJ">✍️ Mở nhật ký suy nghĩ</button>' +
        (step.hint ? '<div class="fb-teach" style="margin-top:16px"><b>Gợi ý</b>' + esc(step.hint) + '</div>' : '')),
      init: function (root) {
        $('#btnOpenJ', root).addEventListener('click', function () {
          LL.openJournal(step.prompt || step.q);
          LL.onStepGraded(step);
        });
      }
    };
  };

  /* ═════════════ 14. FINAL — quyết định cuối, có hậu quả ═════════════ */
  R.final = function (step) {
    const html = R.card('',
      '<div class="eyebrow" style="color:var(--coral)">' + esc(step.tag || 'Quyết định') + '</div>' +
      '<div class="q-title">' + esc(step.q) + '</div>' +
      (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
      '<div class="opts">' + step.options.map((o, i) =>
        '<button class="opt" data-i="' + i + '"><span class="opt-key">' + 'ABC'[i] + '</span>' +
        '<span class="opt-body"><span class="opt-label">' + esc(o.t) + '</span>' +
        (o.d ? '<span class="opt-desc">' + esc(o.d) + '</span>' : '') + '</span></button>').join('') + '</div>' +
      '<div id="fbSlot"></div>');

    return {
      html: html,
      init: function (root) {
        LL.$$('.opt', root).forEach(function (btn) {
          btn.addEventListener('click', function () {
            const i = +btn.dataset.i, o = step.options[i];
            LL.$$('.opt', root).forEach(function (b, k) {
              b.disabled = true;
              if (step.correct === k) b.classList.add('is-correct');
              else if (k === i) b.classList.add('is-wrong');
              else b.classList.add('dim');
            });
            const pts = o.score != null ? o.score : 0;
            LL.award(step.skill, pts, step.maxPts || 3, { stepId: step.id });
            if (o.trap) LL.recordTrap(o.trap, o.trapDesc || '');
            else LL.recordDodge(step.dodge || 'Kết luận có điều kiện');

            let h = R.fb(o.verdict || 'good', pts, o.fb || '', o.teach, o.teachTitle);
            if (o.epilogue) {
              h += '<div class="epilogue"><h3>Hậu quả</h3>' +
                o.epilogue.split('\n\n').map(p => '<p>' + esc(p) + '</p>').join('') + '</div>';
            }
            $('#fbSlot', root).innerHTML = h;
            if (o.ending) LL.state.ending = o.ending;
            LL.onStepGraded(step);
          });
        });
      }
    };
  };

  /* ═════════════ 15. GROUP — thẻ thảo luận nhóm ═════════════ */
  R.group = function (step) {
    return {
      html: R.card('',
        '<div class="eyebrow" style="color:var(--violet)">' + esc(step.tag || 'Thảo luận nhóm') + '</div>' +
        '<div class="q-title">' + esc(step.q) + '</div>' +
        (step.sub ? '<div class="q-sub">' + (step.sub) + '</div>' : '') +
        '<div class="g-timer">⏱️ <span id="gTimer">05:00</span></div>' +
        step.cards.map(c => '<div class="gcard"><h4>' + esc(c.h) + '</h4><p>' + esc(c.p) + '</p>' +
          (c.votes ? '<div class="g-votes">' + c.votes.map(v =>
            '<div class="g-vote"><span style="min-width:88px">' + esc(v.l) + '</span>' +
            '<span class="g-vote-bar"><span style="width:' + v.w + '%"></span></span>' +
            '<span class="mono" style="min-width:30px;text-align:right">' + v.w + '%</span></div>').join('') +
            '</div>' : '') + '</div>').join('') +
        '<textarea id="gNote" rows="3" placeholder="Ghi lại kết luận chung của nhóm sau khi thảo luận…"></textarea>' +
        '<button class="btn btn--primary btn--wide" id="btnGNote" style="margin-top:10px">💾 Lưu biên bản nhóm</button>'),
      init: function (root) {
        let left = (step.seconds || 300);
        const el = $('#gTimer', root);
        const iv = setInterval(function () {
          left--;
          el.textContent = LL.pad2(Math.floor(left / 60)) + ':' + LL.pad2(left % 60);
          if (left <= 0) { clearInterval(iv); el.textContent = '00:00'; LL.toast('⏱ Hết thời gian thảo luận', 'gold'); }
        }, 1000);
        $('#btnGNote', root).addEventListener('click', function () {
          const v = $('#gNote', root).value.trim();
          if (v) {
            LL.state.groupNotes.push({ level: LL.state.levelIndex + 1, text: v, time: LL.now() });
            LL.save();
            LL.toast('👥 Đã lưu biên bản nhóm', 'good');
          }
          LL.onStepGraded(step);
        });
      }
    };
  };

  LL.Render = R;

})(window.LL);