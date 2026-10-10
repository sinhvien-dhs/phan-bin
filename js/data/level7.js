/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 7: KẾT LUẬN
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Kết luận có điều kiện & xem xét đa chiều
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 7,
  title: 'KẾT LUẬN',
  skill: 'perspective',
  skillName: 'Kết luận có điều kiện & xem xét đa chiều',
  skillIcon: '🧭',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Phòng thí nghiệm, 08:00', text:
`Bạn không ngủ. Bạn làm ba việc.

Một: lấy lại toàn bộ log phòng máy và đối chiếu với danh sách tài khoản.

Hai: mở đề thi giữa kỳ và so từng câu với các bản mà trợ lý AI sinh ra cho cùng bộ câu hỏi đó.

Ba: đi tìm câu nói mà cô Hồng nói hôm qua. "Một câu nói đúng mà chưa ai được nghe."

Câu đó, hóa ra, là của chính Đức — cậu sinh viên lớp 11A2 đã tự thú trước khi bạn kịp hỏi. Bạn đã có nó từ tối qua, và bạn đã không nhận ra mình có nó.` },

    { type: 'evidence', tag: 'Bằng chứng mới — 1', skill: 'perspective',
      prompt:
`Bạn dừng lại ở dòng cuối của bảng so sánh, và bạn hiểu ngay vì sao nó quan trọng hơn mọi thứ bạn đã tìm được.

Đề thi giữa kỳ do thầy Tuấn và cộng sự soạn, trong đó **phần lý thuyết nhúng vào câu 5 và câu 7 được thầy nhờ công cụ AI soạn thảo**. Bạn đã biết điều này từ tối qua — nhưng bạn chưa bao giờ mở nó ra và đọc kỹ.

Giờ bạn đọc.

Và bạn tìm thấy ở phần tham khảo gợi ý của câu 5 một lỗi vật lý không lớn, nhưng không thể bỏ qua:

<strong>Nó đảo chiều định luật Newton thứ ba.</strong>`,

      ev: {
        id: 'E-09', title: 'Đề thi do công cụ AI soạn thảo chứa một lỗi vật lý ở phần tham khảo gợi ý câu 5',
        source: 'Đề thi giữa kỳ khối Vật lý 11 · phần tham khảo gợi ý · so sánh với 5 bản AI sinh cùng chủ đề',
        strength: 3,
        text:
`Câu 5 (bài toàn vật: hệ vật rời hai vật, hỏi gia tốc và lực tương tác).

Phần "gợi ý trả lời" trong đề ghi: "Theo định luật III, lực mà vật 1 tác lên vật 2 có độ lớn bằng và cùng chiều với lực mà vật 2 tác lên vật 1."

Từ "cùng chiều" là sai. Định luật Newton thứ ba nói hai lực đó <b>luôn ngược chiều</b>. Sai lệch này được lặp lại y nguyên trong 5 bản AI sinh ra cho cùng chủ đề mà BĐT lấy từ kho học liệu.

Phần tham khảo gợi ý này không phải đề thi học sinh nộp bài. Nó là phần dành cho giáo viên chấm. Nhưng nó đã được in kèm vào đề.`,
        note: 'Cái bạn vừa tìm ra không làm Hải dính vào gì. Nó làm <b>bạn</b> dính vào: BĐT đã dùng dữ liệu này để bác bỏ lời buộc tội mà không đọc kỹ chính mình.\n\nNhớ: một lập luận trông vững như thế nào thì vẫn có thể sai, nếu người lập luận không đọc kỹ dữ liệu của chính mình.'
      } },

    { type: 'evidence', tag: 'Bằng chứng mới — 2', skill: 'perspective',
      prompt:
`Bạn lấy thêm một bảng từ log phòng máy — bảng này bạn chưa từng mở vì đến giờ bạn cứ nghĩ vụ án là về Hải.

Giờ bạn mở, và phải ngồi yên một lúc.

Trong 14 ngày qua, <strong>có 34 tài khoản</strong> khác — không phải 9 — đã mở công cụ AI trong phòng máy. Chỉ riêng lớp 11A1 có 11 tài khoản.

Và bạn nhận ra: trong nhóm 11 người đó, có một người dùng công cụ <em>hơn một nghìn lần</em> bất kỳ ai khác. Và những người còn lại thì dùng mỗi ngày một lần.

Bạn ghi lại điều này. Nó đáng chú ý vì lý do khác hẳn bạn nghĩ.`,

      ev: {
        id: 'E-10', title: '34 tài khoản đã mở công cụ AI trong 14 ngày — không phải 9',
        source: 'Log phòng máy khối Vật lý · tổng hợp 14 ngày · 06:12',
        strength: 3,
        text:
`Trong 14 ngày qua, 34 tài khoản phòng máy đã truy cập công cụ học tập tích hợp, trong đó 11 tài khoản thuộc lớp 11A1.

Phân bố:
- 27 tài khoản: 1–3 lần mỗi ngày, mỗi lần dưới 4 phút.
- 6 tài khoản: dưới 10 lần trong 14 ngày, không theo nhịp nào.
- 1 tài khoản: 1.200 lần trong 14 ngày, mỗi lần 10–20 phút, chủ yếu ngoài giờ thi.

Con số 9 mà BĐT nói với nhà trường ở Màn 2 chỉ là con số của <b>một đêm duy nhất</b>.`,
        note: 'Đây là bằng chứng mà bạn phải nói thẳng là làm yếu chính báo cáo của mình hôm qua. Nếu bạn giấu nó, và ai đó tìm ra sau, toàn bộ hồ sơ 2041 mất độ tin cậy.\n\nVà cái đáng chú ý nhất nằm ở phân bố: 27 tài khoản dùng hàng ngày vài phút — đó không phải hình thức gian lận. Đó là hình thức <b>hỏi một câu và đi làm tiếp</b>. Quy chế cấm hoặc cho toàn quyền đều không giải quyết đúng cái đang xảy ra.'
      } },

    { type: 'evidence', tag: 'Bằng chứng mới — 3', skill: 'perspective',
      prompt: `Bạn cắt khung hình và lưu lại.

Giờ hãy đọc cả ba bằng chứng cùng lúc, và trả lời bằng chính tay bạn — không có đáp án đúng sẵn, không có điểm để giành:

<strong>Vấn đề này có bao nhiêu người trong câu chuyện?</strong>`,

      ev: {
        id: 'E-11', title: 'Camera phòng máy — 21:40 tối thứ Sáu',
        source: 'Hệ thống camera của trường · khung hình đối chiếu với lịch phòng máy',
        strength: 2,
        text: 'Camera phòng máy tầng 2 quay được 21:40 tối thứ Sáu — tối BĐT họp kết thúc. Trong khung hình: Hải ngồi tại máy số 14, một mình, mở cửa sổ trình duyệt. Không có hình ảnh nào ghi được màn hình. Không có dữ liệu nào cho biết cậu ta gõ gì.',
        note: 'Bằng chứng này là <b>gián tiếp</b>: nó cho thấy sự hiện diện và thời điểm, chưa cho thấy hành động. Nó không đứng một mình — nhưng đứng cùng E-10 thì nó không còn cần đứng một mình.'
      } },

    { type: 'narr', tag: 'Trước khi kết luận', text:
`Bàn giữa sân trường, 17:40, Hải hỏi bạn một câu.

"Cậu nghĩ ai làm à?"

Và bạn hiểu đây chính là màn chơi thật sự.

Vì cho đến giờ, mọi thứ bạn làm đều là để tìm ra một câu trả lời. Còn câu hỏi "nên viết gì" mới là câu hỏi thật — và nó không có chữ "đúng". Nó có chữ <em>"đáng để đứng dưới tên mình"</em>.

Cô Hồng ngồi xuống, đặt tay lên bàn.

"Mình nói thật nha," cô nói. "Ba khả năng ở đây đều dẫn tới một kết luận nào đó. Cả ba đều viết được. Nhưng chúng sẽ để lại trên tên mình ba người khác nhau, ở ba vị trí khác nhau.

Chọn đi. Và đừng chọn cái nào nghe công bằng nhất — <em>công bằng không phải là loại hậu quả nào dễ chịu nhất.</em> Chọn cái nào đúng nhất với cái mình biết."` },

    { type: 'final', tag: 'QUYẾT ĐỊNH', skill: 'perspective',
      q: 'Bạn viết kết luận. Bạn viết thế nào?',
      sub: 'Ba lựa chọn. Mỗi lựa chọn có thật và đều là một con người khác ở cuối ngày hôm đó.',
      correct: 0,
      options: [
        { t: '"Với mức độ chắc chắn cao: dấu vết g = 9,81 không chứng minh gì về Hải, vì nó xuất hiện ở 33% bài trước khi lớp dùng công cụ. Với mức độ chắc chắn trung bình: bài của Hải mang dấu vết của người, không mang dấu vết đặc trưng của AI. Chúng tôi chưa đủ căn cứ để kết luận Hải đã hoặc chưa dùng công cụ — và điện thoại chưa được kiểm tra. Đồng thời, chúng tôi ghi nhận hai việc: thầy Tuấn đã dùng công cụ AI soạn thảo đề và đề có một lỗi ở phần tham khảo; và trong 14 ngày, 34 học sinh đã dùng công cụ — trong đó phần lớn dùng để hỏi, không phải để nộp bài. Chúng tôi đề nghị: mở rộng điều tra, công khai toàn bộ hồ sơ, trao quyền đọc cho Hải và Đức, và tạm dừng kỷ luật cho đến khi quy chế sử dụng công cụ được ban hành."',
          d: 'Kết luận có điều kiện, tách bạch từng mức độ, và không giấu điều bất lợi cho phe mình.',
          score: 4, verdict: 'good', ending: 'honest', dodge: 'Kết luận có điều kiện',
          fb: 'Đây là kết luận mà một người tử tế sẽ viết, và nó có ba đặc điểm mà hầu hết các báo cáo đều thiếu: <b>ghi rõ mức độ chắc chắn cho từng phát hiện</b>, <b>tách vụ án cá nhân khỏi vụ quy chế</b>, và <b>trao quyền đọc cho người bị nêu tên</b>.\n\nVà nó làm điều khó nhất: nó tự ghi vào báo cáo lỗi của chính đề thi mà thầy Tuấn đã dùng để điều tra. Chú ý rằng kết luận này làm Hải không được "vô tội" — cậu ấy vẫn chưa được chứng minh là không dùng. Nó chỉ đưa cậu ấy ra khỏi án kết án trước.\n\nChữ "chưa đủ căn cứ để kết luận ai đã làm gì" là chữ đáng giá nhất trong toàn bộ sự nghiệp tranh luận của bạn — vì nó là chữ duy nhất giữ cho báo cáo này còn đúng được sau mười năm.',
          teach: 'Công bằng không phải là chia đều phần thắng cho hai phe. Công bằng là <b>đặt cùng một tiêu chuẩn lên tất cả mọi người</b> — kể cả người bạn đã thương góc, và kể cả chính mình. Chú ý rằng kết luận này làm thầy Tuấn mất mặt trước hội đồng. Đó là cách bạn biết nó không phải là kết luận được bùa.',
          epilogue:
`Ba tuần sau, bảng tin của trường dành hai số cho hồ sơ 2041 — toàn bộ 300 trang, không tóm tắt, không tô hồng.

Hải không bị kỷ luật. Cậu ấy cũng không được tuyên bố là vô tội — và Đức cũng vậy. Thay vào đó, hội đồng ban hành quy chể sử dụng công cụ AI trong khối 11 với ba tầng: <b>được dùng</b> (tra cứu, hỏi đáp), <b>được dùng có khai báo</b> (tóm tắt, gợi ý), và <b>không dùng</b> (phần thi, không có ngoại lệ). Tiêu chí đánh giá là <b>độ nguyên văn của lời giải và lý do của lỗi sai</b> — bởi vì đó là thứ duy nhất đo được.

Thầy Tuấn bị nhắc nhở bằng văn bản về lỗi trong phần tham khảo của đề thi. Ông không bị kỷ luật — nhưng ôi, ông là người đọc hồ sơ chậm nhất trong hội đồng, và cả khối biết.

Kiên xoá bài đăng hôm đó. Trong tin nhắn kèm theo, cậu ta viết một dòng: "Tao đăng bằng tài khoản của em. Tao đăng vì nó dễ đọc. Nó dễ đọc thì nó lan."

Rồi cậu ta gửi thêm một tin nữa: "Hóa ra điều dễ nhất để sai là im lặng."

Bạn mở nhật ký — đọc lại dòng bạn đã viết ở Màn 1, rồi dòng bạn đã viết ở Màn 5. Sự khác nhau giữa hai dòng đó chính là thứ mà bạn đã học được trong bảy ngày.` },

        { t: '"Đúng như BĐT đã kết luận: dấu vết g = 9,81 không đủ kết tội Hải. Băng thông sự việc."',
          d: 'Đúng phần cốt lõi — nhưng dừng lại quá sớm.',
          score: 2, verdict: 'mid', ending: 'partial', dodge: 'Kết luận một chiều',
          fb: 'Bạn đã đúng, và đây là lựa chọn mà nhiều người sẽ chọn vì nó nghe công bằng và dễ chịu.\n\nNhưng bạn đã bỏ qua ba việc. Một: vụ Đức thú nhận — bạn biết một học sinh đã dùng công cụ khi thi và đã xoá lịch sử, và bạn im lặng. Hai: lỗi trong đề thi do công cụ soạn. Ba: 34 học sinh, không phải 1. Băng thông một người trong khi ba mươi bốn người đang ở tình huống y hệt là một kết luận dễ bị lật trong năm ngày.',
          teach: 'Kết luận dễ chịu thường thiếu mục đích. Khi bạn không dám nói điều bất lợi cho phe mình, người đọc sẽ tự điền vào chỗ trống — và họ sẽ điền bằng những gì tệ nhất mà họ tin.',
          epilogue:
`Báo cáo của bạn được đăng, và phần lớn trường đọc nó thật tâm.

Nhưng tuần sau, Đức gặp bạn ở cầu thang. Cậu ta hỏi một câu duy nhất: "Vậy lúc đó tôi có bị gọi lên hội đồng không?"

Bạn không trả lời được, vì câu trả lời là không.

Không ai công kích Hải nữa. Nhưng Đức đã xoá lịch sử trình duyệt, đã không nói với ai, và đã mang một thứ gì đó suốt từ hôm đó — không phải là sợ bị kỷ luật, mà là sợ mình sẽ bị bỏ lại một mình nếu nói ra.

Còn về phía đề thi: lỗi trong phần tham khảo vẫn nằm đó, và kỳ thi sau vẫn dùng lại phần tham khảo đó. Không ai sai vì nó. Nhưng nó ở đó.

Bạn đã làm đúng. Bạn chỉ làm đúng đến mức cần thiết.` },

        { t: '"Trong khi chưa có quy chế ban hành, mọi học sinh dùng công cụ đều bị trừ 50% điểm bài đó. Tạm thời trước khi có quy định chính thức."',
          d: 'An toàn cho mình. Nguy hiểm cho người khác.',
          score: -3, ending: 'wrong', trap: 'Cực đoan hoá khi thiếu quy chức cứ',
          trapDesc: 'Bạn biết dấu vết g = 9,81 không đủ để kết tội. Bạn biết 33 bài trên 100 cũng dính. Việc này không phải cẩn trọng — đây là việc bạn dùng cơ chế kỷ luật để làm việc mà bằng chứng chưa cho phép, và dưới một cái tên mà nghe rất hợp lý.',
          verdict: 'bad',
          fb: 'Bạn đang dùng chính cái cớ mà cả trường đang dùng: "chưa có quy chế" để làm việc mà mình biết là không có căn cứ. Đây là lỗi mà hầu hết mọi người mắc phải: <b>cực đoan hoá khi thiếu dữ kiện</b>, thường được mặc áo thành phòng thủ.\n\nVà bạn vừa tự tạo ra cái mà không ai muốn: một quy tắc tạm có hiệu lực thật, do học sinh nghĩ ra, áp lên toàn khối, trong khi chính đề thi — thứ mà các thầy tin hơn bất cứ thứ gì — còn đang có lỗi.',
          teach: 'Nhớ câu cô Hồng nói: <b>"Đây là thế chỗ nào mà bạn sẵn sàng đặt tên mình vào."</b> Câu hỏi đó đáng chạy mỗi khi bạn cảm thấy muốn "xử cho dứt".',
          epilogue:
`Hôm sau, mười một học sinh 11A1 bị trừ điểm. Trong đó có sáu em trước đó không dùng công cụ lần nào.

Một em viết thư kêu dài hai trang để nói rằng em chỉ tra công thức. Em không viết ra bằng chứng nào, vì em không có — và em nói đúng: em không làm gì sai.

Nhưng cả lớp đã bị hạ một nửa điểm trong một đêm. Và sau đó, không ai trong lớp dám nói với thầy rằng mình cần hỏi gì đó nữa — vì lần sau có thể mất nửa điểm.

Đề thi kỳ sau vẫn dùng lại phần tham khảo có lỗi. Không ai sai vì nó.

Bạn viết được một kết luận khiến mười một đứa bị trừ điểm — dù bạn biết, sâu trong lòng, rằng không có lý do.

Đó không phải là sự phòng vệ. Đó là việc đẩy một sự thật đi khỏi tầm tay, và gọi thắng là nhận ra.

Sau đó một tháng, có một học sinh khác ở trường khác gặp đúng chuyện này. Cậu ta hỏi AI một câu, rồi xoá lịch sử, rồi không nói với ai. Vì lớp cậu ta cũng vừa học được rằng nói ra là mất điểm.

Có một thứ được gọi là thói quen. Và nó không cần ai đồng ý với mình.` }
      ] },

    { type: 'argue', tag: 'LỜI KẾT LUẬN CỦA BẠN', skill: 'perspective', max: 4,
      q: 'Viết lời kết luận của bạn — bằng lời của bạn.',
      sub: 'Đây là thứ giáo viên chủ nhiệm sẽ đọc. Bốn tiêu chí, không có đáp án mẫu duy nhất.',
      context: 'Gợi ý khung: điều tôi biết chắc / điều tôi giả định / điều tôi chưa biết / điều gì sẽ làm tôi đổi ý.',
      minWords: 25,
      ph: 'Lời kết luận của bạn:',
      rubric: [
        { label: 'Nêu phát hiện cụ thể, đủ để người khác kiểm chứng lại' },
        { label: 'Gắn mức độ chắc chắn cho từng phát hiện' },
        { label: 'Nêu điều kiện để đổi ý' },
        { label: 'Công bằng với cả những người bạn không thích' }
      ],
      rubricCheck: function (t) {
        return [
          { label: 'Nêu phát hiện cụ thể, đủ để người khác kiểm chứng lại', hit: LL.hasAny(t, ['9,81', '9.81', 'ma sat', 'log', 'phong may', 'may', '33', '34', 'de thi', 'camera', 'ho so', 'tep', 'bai', 'cau 5', 'dien thoai']),
            note: 'Kết luận không có chi tiết kiểm chứng được là một tuyên bố cảm xúc được ghi ra giấy.' },
          { label: 'Gắn mức độ chắc chắn cho từng phát hiện', hit: LL.hasAny(t, ['chắc chắn', 'chắc', 'khả năng cao', 'nhiều khả năng', 'chưa chắc', 'có vẻ', 'nghi ngờ', 'chưa đủ', 'tôi cho là', 'chưa xác minh', 'chưa kiểm tra']),
            note: 'Một câu kết luận không phân mức độ chắc chắn buộc người đọc tự chọn mức — và họ sẽ chọn cao nhất.' },
          { label: 'Nêu điều kiện để đổi ý', hit: LL.hasAny(t, ['nếu', 'điều kiện', 'sẽ đổi', 'tôi sẽ', 'chỉ cần', 'miễn là', 'trừ khi', 'thẩm xét', 'kiểm chứng thêm', 'thấm xét']),
            note: 'Đây là câu làm kết luận của bạn vẫn còn giá trị sau sáu tháng.' },
          { label: 'Công bằng với cả những người bạn không thích', hit: LL.hasAny(t, ['hải', 'hai', 'đức', 'duc', 'tuấn', 'tuan', 'giáo viên', 'thầy', 'công khai', 'mời', 'trao', 'quyền', 'xem lại', 'người bị', 'kể cả', 'dù']),
            note: 'Công bằng không có nghĩa là dễ chịu. Báo cáo mà không có ai đau là báo cáo chưa làm công việc của mình.' }
        ];
      },
      fb: 'Lời kết luận được chấm theo 4 tiêu chí. Thiếu một tiêu chí là chưa đủ — nhưng đủ bốn tiêu chí này thì báo cáo của bạn sẽ vẫn đúng sau một năm.',
      teach: 'Bốn tiêu chí này là một quy trình, không phải bốn mẹo. Áp dụng vào bất kỳ vụ việc nào bạn đang tranh luận: <b>nói cụ thể → nói mức độ chắc chắn → nói điều kiện → nói ai còn bị thiệt và làm gì với điều đó</b>. Bốn câu, khoảng một trang, dùng được cho mọi việc.' },

    { type: 'multi', tag: 'Khép vụ án', skill: 'perspective',
      q: 'Vụ án đóng. Bạn còn bốn việc để làm. Bốn việc nào thực sự thuộc về bạn?',
      sub: 'Chọn những việc mà BĐT có thể và nên làm — kể cả khi không ai nhờ.',
      items: [
        { t: 'Gửi bản tóm tắt hồ sơ cho Hải và Đức trước khi công khai, và hỏi họ muốn ẩn phần nào.' },
        { t: 'Ghi vào hồ sơ cả những điều chưa biết, và cả điều làm yếu hồ sơ của BĐT (lỗi trong đề thi).' },
        { t: 'Đề nghị nhà trường công khai tiêu chí đánh giá khi bài làm có công cụ hỗ trợ, để lần sau ít người phải đoán.' },
        { t: 'Tìm người đã đăng bài đầu tiên lên diễn đàn để hỏi họ biết gì từ đầu.' },
        { t: 'Đăng một bài tổng kết chỉ trích bằng bằng chứng của chính BĐT, để đồng đội tự kiểm.' },
        { t: 'Gửi lời cảm ơn công khai tới Chủ nhiệm khối vì đã tạo cơ hội học được nhiều.' }
      ],
      answer: [0, 1, 2, 4],
      fb: 'Bốn việc đầu là những việc làm kết luận của bạn trở nên đáng tin: trao quyền đọc cho người bị nêu tên, ghi cả điều chưa biết và cả điều làm yếu chính mình, sửa điều kiện đã gây ra vụ án, và để chính mình chịu kiểm.\n\nBỏ sót một điều quan trọng ở đây: cả nguyên nhân của vụ án không nằm ở một học sinh hay một công cụ. Nó nằm ở việc <b>không có quy trình nào để hỏi một câu hỏi mà không bị phạt</b>. Một quy trình tốt là thứ khiến lần sau không cần một BĐT cảnh giác để ngăn thảm họa.',
      teach: 'Việc thứ năm trong danh sách loại là câu hỏi khó nhất: <b>bạn có dám tự đưa mình vào phạm vi kiểm chứng không?</b> Người chỉ biết chỉ trích người khác sẽ không bao giờ tin rằng lập luận của mình tốt; bởi vì họ không bao giờ biết nó tốt đến mức nào khi đứng một mình.',
      fbMid: 'Bạn chọn được phần lớn nhưng để sót một việc — thường là việc mà người ta ngại nhất. Chính cái ngại đó là thứ báo cáo của bạn còn thiếu.' },

    { type: 'journal', tag: 'Nhật ký cuối', skill: 'perspective',
      q: 'Đọc lại nhật ký từ Màn 1.',
      sub: 'Bạn đã đi bảy màn. Viết một câu cho người đang đọc nhận xét bài kiểm tra Vật lý năm nay.',
      prompt: 'Viết một câu — chỉ một câu — mà bạn muốn gửi tới một người đang 12–18 tuổi và đang đăng bình luận "AI viết cái này" dưới một bài phân tích kết quả thi.',
      hint: 'Đừng viết về ngụy biện. Viết về thứ mà bạn đã qua bảy ngày mà mười tuổi trước đó không có. Nếu câu đó chỉ đúng với vụ án này thì nó chưa đủ tốt.' },

    { type: 'narr', tag: 'Hết hồ sơ', text:
`21:00. Bạn đóng laptop lần thứ sáu.

Bàn giữa sân trường vắng. Hải đi rồi. Đức đi rồi. Kiên đi rồi, mang theo một tờ giấy phết đầy bút bi xanh, và câu "tao hiểu rồi" gõ vào tin nhắn.

Trước mặt bạn là hồ sơ 2041. Bốn trăm hai mươi trang. Bảy màn. Bốn mươi tám giờ — mà thật ra chỉ mới bốn tiếng.

Và câu hỏi duy nhất còn lại, câu mà cô Hồng đã hỏi bạn ngay từ đầu mà bạn mất bảy màn mới hiểu:

<strong>Điều gì trong vụ án này thật sự là mới?</strong>

Không phải vì bạn nhanh hay chậm. Mà vì <em>bạn đã làm nó một trăm lần trong đầu</em> — mỗi lần đọc một bình luận dưới một bài đăng khoe điểm, mỗi lần thấy một đứa bị gán mác dùng AI vì cái viết "quá đẹp", mỗi lần nghe một giáo viên nói "AI thì làm gì bằng người".

Chỉ có một khác biệt. Lần này bạn được đi tìm.

Và đó mới là thứ duy nhất từ cả vụ án này xứng đáng được ghi vào nhật ký.` }
  ]

});