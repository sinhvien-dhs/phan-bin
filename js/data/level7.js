/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 7: KẾT LUẬN
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

    { type: 'narr', tag: 'Mở đầu · Phòng thí nghiệm âm thanh, 08:00', text:
`Bạn không ngủ. Bạn làm ba việc.

Một: lấy nhật ký tạo file trên máy tính phòng giáo viên.

Hai: lấy đoạn video camera tầng 2 — camera duy nhất còn hoạt động — trong khoảng 20:50 đến 21:20.

Ba: đi tìm câu nói mà cô Hồng nói hôm qua. "Một câu nói đúng mà chưa ai được nghe."

Câu đó, hóa ra, là của chính bạn — từ buổi sáng hôm qua, khi bạn hỏi Hạnh chuyện điểm trừ. Bạn đã tự lỡ lời và không nhận ra.

Nhưng camera thì không lỡ lời.` },

    { type: 'evidence', tag: 'Bằng chứng mới — 1', skill: 'perspective',
      prompt:
`Bạn dừng video ở khung hình 21:07 và bấm chụp màn hình. Rồi bạn nhìn lại tờ giấy thi mà Hạnh nói về nếp gấp — và bạn hiểu ngay lý do nó vô dụng.

Hạnh dùng tờ giấy thi làm dấu trang sách để đánh dấu câu bị cô Lan trừ hai điểm. Nếp gấp có sẵn trong túi. Tờ nào có nếp gấp giống vậy là tờ bất kỳ trong cả túi bài.

Đó là bằng chứng do <em>một lý do rất thuyết phục</em> tạo ra: ai cũng muốn tin Hạnh, và Hạnh muốn tin tờ giấy của mình.

Ghi lại điều này. Nó sẽ có ích.`,

      ev: {
        id: 'E-08', title: 'Nếp gấp "bằng chứng" của Hạnh — không có giá trị chứng cứ',
        source: 'Giải trình của Hạnh · 15:40 · BĐT ghi nhận',
        strength: 1,
        text: 'Hạnh cho biết tờ giấy thi của mình có nếp gấp khác các tờ khác, và cho rằng đó là dấu hiệu bài bị hoán đổi. Giải trình cho thấy nếp gấp là dấu trang đánh dấu câu làm sai, tồn tại ở mọi tờ trong túi bài được gấp theo thói quen.',
        note: 'Đây là loại bằng chứng nguy hiểm nhất không phải vì sai, mà vì <b>có vẻ hợp lý và được ai đó rất đáng tin nói ra</b>. Đứng trước một cách bẻ đẹp, bạn phải kiểm tra xem nó có giải thích được những mặt khác không. Ở đây, nó không giải thích vì sao "lỗi khác" chỉ xuất hiện trong hai bài nói trên diễn đàn chứ không xuất hiện trong clip gốc.'
      } },

    { type: 'evidence', tag: 'Bằng chứng mới — 2', skill: 'perspective',
      prompt:
`Bạn ghi lại ba bằng chứng cuối cùng.

Đọc chúng theo thứ tự, rồi hỏi một câu duy nhất: <strong>những bằng chứng này đủ để nói "Quách Đức Trí ghép clip" chưa?</strong>

Phần lớn người sẽ viết tên ông ta trong báo cáo trước khi nghĩ đến câu hỏi đó. Bạn thì không.`,

      ev: {
        id: 'E-09', title: 'Nhật ký tạo file trên máy tính phòng giáo viên — 21:07',
        source: 'Máy tính phòng học giáo viên · hệ điều hành Windows · bản ghi đã sao lưu kèm báo cáo',
        strength: 3,
        text: 'Lúc 21:07:44, trên máy tính phòng học giáo viên, một tệp mới được tạo bằng phần mềm cắt ghép âm thanh có sẵn trên máy, tên "sk2041.wav", thời lượng 00:47. Tài khoản đang đăng nhập lúc đó: giáo viên chủ nhiệm QDT. Tệp được lưu vào thư mục chia sẻ rồi tải lên diễn đàn lúc 21:09.',
        note: 'Cái này gần như là bằng chứng gốc của cả vụ án: hệ thống ghi lại hành động tự động, không do ai kể lại, và người bị cáo buộc cũng mở máy được để xác minh.'
      } },

    { type: 'evidence', tag: 'Bằng chứng mới — 3', skill: 'perspective',
      prompt: `Bạn cắt khung hình 21:12 và lưu lại.

Giờ hãy đọc ba bằng chứng cùng lúc, và trả lời bằng chính tay bạn — không có đáp án đúng sẵn, không có điểm để giành:

<strong>Ai đã tạo ra đoạn clip?</strong>`,

      ev: {
        id: 'E-10', title: 'Camera tầng 2 — 20:58 đến 21:14',
        source: 'Hệ thống camera của trường · khung hình được đối chiếu với lịch hành chính của trường',
        strength: 2,
        text: '20:58 — thầy Quách Đức Trí vào phòng học giáo viên tầng 3. 21:05 — thầy ra khỏi phòng, cầm một bìa hồ sơ màu xanh. 21:12 — thầy quay vào, ở lại khoảng một phút, ra tay với bàn máy tính. 21:14 — thầy đi lên cầu thang về phía ban giám hiệu, tay cầm điện thoại.',
        note: 'Bằng chứng này là <b>gián tiếp</b>: nó cho thấy sự hiện diện và thời điểm, chưa cho thấy hành động. Nó không đứng một mình — nhưng đứng cùng E-06 và E-09 thì nó không còn cần đứng một mình.'
      } },

    { type: 'narr', tag: 'Trước khi kết luận', text:
`Bàn giữa sân trường, 17:40, Hạnh hỏi bạn một câu.

"Cậu nghĩ ai đã làm à?"

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
        { t: '"Với mức độ chắc chắn cao: đoạn clip đã được ghép từ ba phiên ghi khác nhau. Với mức độ chắc chắn trung bình: thầy Quách là người tạo ra tệp và đăng tải. Chúng tôi chưa đủ căn cứ để kết luận bất cứ ai gian lận. Đồng thời, chúng tôi ghi nhận cô Lan đã xem bài của một học sinh có quan hệ họ hàng trước khi chấm — việc này vi phạm quy trình và cần xử lý riêng, không được gộp vào vụ clip. Chúng tôi công khai toàn bộ hồ sơ và mời Hạnh đọc trước khi đăng."',
          d: 'Kết luận có điều kiện, tách bạch từng mức độ, và không giấu điều bất lợi cho phe mình.',
          score: 4, verdict: 'good', ending: 'honest', dodge: 'Kết luận có điều kiện',
          fb: 'Đây là kết luận mà một người tử tế sẽ viết, và nó có ba đặc điểm mà hầu hết các báo cáo đều thiếu: <b>ghi rõ mức độ chắc chắn cho từng phát hiện</b>, <b>tách vụ án clip khỏi vụ xung đột lợi ích</b>, và <b>trao quyền đọc cho người bị nêu tên</b>.\n\nChữ "chưa đủ căn cứ để kết luận bất cứ ai gian lận" là chữ đáng giá nhất trong toàn bộ sự nghiệp tranh luận của bạn — vì nó là chữ duy nhất giữ cho báo cáo này còn đúng được sau mười năm.',
          teach: 'Công bằng không phải là chia đều phần thắng cho hai phe. Công bằng là <b>đặt cùng một tiêu chuẩn lên tất cả mọi người</b> — kể cả người bạn đã thương góc, và kể cả chính mình. Chú ý rằng kết luận này làm cô Lan mất điểm. Đó là cách bạn biết nó không phải là kết luận được bùa.',
          epilogue:
`Hai tuần sau, tờ báo trường dành trang nhất cho hồ sơ 2041 — toàn bộ 300 trang, không tóm tắt, không tô hồng.

Quách Đức Trí bị đình chỉ công tác một học kỳ và khiển trách nhiệm kỷ luật. Trước đó, ông từng bị cô Lan ghi vào báo cáo về một sai sót chấm điểm của chính mình — một việc sau đó được xác minh là có thật, và là nguyên nhân không hẳn gì ngoài lý do ông tạo ra clip này.

Cô Lan bị nhắc nhở về quy trình, không bị kỷ luật. Còn Hạnh thì nhận được một thứ cô ấy không đợi: <b>cả trường biết tên cô ấy mà không có một lần nào gắn nó với gian lận.</b>

Kiên gửi bạn một tin nhắn vào đêm đó: "tao tưởng mình phản biện giỏi lắm. hóa ra tao chỉ giỏi nổ."

Bạn trả lời: "Giỏi phản biện là thấy lỗi của người khác. Thấy lỗi của mình mới là kỹ năng."

Và bạn mở nhật ký — đọc lại dòng bạn đã viết ở Màn 1, rồi dòng bạn đã viết ở Màn 5. Sự khác nhau giữa hai dòng đó chính là thứ mà bạn đã học được trong bảy ngày.` },

        { t: '"Đoạn clip là giả, được ghép từ ba đoạn khác nhau. Cô Lan vô tội. Xin nhà trường công khai bản thu âm gốc để mọi người tự kiểm chứng."',
          d: 'Đúng phần cốt lõi — nhưng dừng lại quá sớm.',
          score: 2, verdict: 'mid', ending: 'partial', dodge: 'Kết luận một chiều',
          fb: 'Bạn đã đúng, và đây là lựa chọn mà nhiều người sẽ chọn vì nó nghe công bằng và dễ chịu.\n\nNhưng bạn đã bỏ qua hai việc. Một: vụ xung đột lợi ích của cô Lan vẫn nằm đó, và nếu bạn không nhắc, người khác sẽ nhắc — và khi đó báo cáo của bạn sẽ bị coi là bảo vệ có trả đũa. Hai: bạn chưa nói gì về người đã ghép.\n\nMột kết luận đúng một nửa vẫn là một kết luận dễ bị lật trong năm ngày.',
          teach: 'Kết luận dễ chịu thường thiếu mục đích. Khi bạn không dám nói điều bất lợi cho phe mình, người đọc sẽ tự điền vào chỗ trống — và họ điền bằng những gì tệ nhất mà họ tin.',
          epilogue:
`Báo cáo của bạn được đăng, và phần lớn trường đọc nó thật tâm.

Nhưng tuần sau, một phóng viên hỏi cô Lan một câu duy nhất: "Vậy việc cô xem bài của em họ trước khi chấm thì sao?" — và cô Lan trả lời câu đó mười lăm giây lâu hơn bình thường.

Không ai công kích cô ấy nữa. Nhưng có những điều sau này bạn không nói ra thì không bao giờ biến mất. Chúng chỉ chờ đợi.

Còn về phía Quách: hội đồng không đủ căn cứ kỷ luật vì bạn đã dừng lại. Ông giữ chức vụ, giữ tiếng nói trong hội đồng chuyên môn. Và ba năm sau, khi có một vụ khác ở khối khác — cùng kiểu ghép, cùng kiểu đăng — người ta gọi ông ta trước.

Bạn đã làm đúng. Bạn chỉ làm đúng đến mức cần thiết.` },

        { t: '"Trong khi chưa có kết luận cuối, chúng tôi đề nghị tạm đình chỉ thao tác chấm của cô Lan và mở rộng điều tra với các học sinh có điểm cao bất thường ở lớp 10A1."',
          d: 'An toàn cho mình. Nguy hiểm cho người khác.',
          score: -3, ending: 'wrong', trap: 'Cực đoan hoá khi thiếu bằng chứng',
          trapDesc: 'Bạn biết clip là ghép. Bạn đã biết từ Màn 2. Việc này không phải cẩn trọng — đây là việc bạn dùng cơ chế kỷ luật để làm việc mà bằng chứng chưa cho phép.',
          verdict: 'bad',
          fb: 'Bạn vừa dùng một cái cớ dễ nghe — "chưa có kết luận" — để làm việc mà mình biết là không có căn cứ. Đây là lỗi mà hầu hết mọi người mắc phải: <b>cực đoan hoá khi thiếu dữ kiện</b>, thường được mặc áo thành phòng thủ.\n\nVà bạn đang lặp lại chính xác cấu trúc bạn đã chê người khác suốt bảy màn: đừng có bằng chứng, phải xử lý dứt điểm. Người chưa tìm ra bằng chứng nên tìm thêm; không phải tìm thêm bằng cách làm đau ai đó.',
          teach: 'Nhớ câu cô Hồng nói: <b>"Đây là thế chỗ nào mà bạn sẵn sàng đặt tên mình vào."</b> Câu hỏi đó đáng chạy mỗi khi bạn cảm thấy muốn "xử cho dứt".',
          epilogue:
`Ngày hôm sau, Hạnh và bốn đứa bạn khác ở lớp 10A1 bị mời lên gặp hội đồng kỷ luật.

Không có bằng chứng nào tìm ra được — vì theo chính phân tích của bạn, không có bằng chứng nào tồn tại. Việc điều tra bốn em ấy chỉ tạo ra điều duy nhất mà nó có thể tạo ra: <b>một hồ sơ</b>.

Bảng thành tích học kỳ của Hạnh bị gỡ xuống khỏi bảng thành tích khối. "Trong thời gian chờ xác minh" là cụm từ chính thức.

Đoạn clip 47 giây vẫn nằm trên diễn đàn. Nó vẫn được chia sẻ. Bây giờ nó còn được chia sẻ kèm dòng chữ: "xem nhé, chính BĐT đã phải mở rộng điều tra".

Bạn viết được một kết luận khiến cô ấy bị đình chỉ — dù bạn biết, sâu trong lòng, rằng không có lý do.

Đó không phải là sự phòng vệ. Đó là việc đẩy một sự thật đi khỏi tầm tay, và gọi thắng là nhận ra.

Sau đó một tháng, có một học sinh khác ở trường khác gặp đúng chuyện này. Clip của em ấy bị ghép từ hai đoạn. Không ai kiểm tra, vì lúc đó mọi người đã quen với việc "chưa có kết luận thì phải xử trước".

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
          { label: 'Nêu phát hiện cụ thể, đủ để người khác kiểm chứng lại', hit: LL.hasAny(t, ['ghép', '12.4', '24.9', '38.3', 'clip', 'bản ghi', '21:07', '21:09', 'camera', 'máy tính', 'quách', 'hồ sơ', '47']),
            note: 'Kết luận không có chi tiết kiểm chứng được là một tuyên bố cảm xúc được ghi ra giấy.' },
          { label: 'Gắn mức độ chắc chắn cho từng phát hiện', hit: LL.hasAny(t, ['chắc chắn', 'chắc', 'khả năng cao', 'nhiều khả năng', 'chưa chắc', 'tạm', 'có vẻ', 'nghi ngờ', 'chưa đủ', 'tôi cho là']),
            note: 'Một câu kết luận không phân mức độ chắc chắn buộc người đọc tự chọn mức — và họ sẽ chọn cao nhất.' },
          { label: 'Nêu điều kiện để đổi ý', hit: LL.hasAny(t, ['nếu', 'điều kiện', 'sẽ đổi', 'tôi sẽ', 'chỉ cần', 'miễn là', 'trừ khi', 'thẩm xét', 'kiểm chứng thêm']),
            note: 'Đây là câu làm kết luận của bạn vẫn còn giá trị sau sáu tháng.' },
          { label: 'Công bằng với cả những người bạn không thích', hit: LL.hasAny(t, ['lan', 'quách', 'hạnh', 'công khai', 'mời', 'trao', 'quyền', 'xem lại', 'người bị', 'kể cả', 'dù']),
            note: 'Công bằng không có nghĩa là dễ chịu. Báo cáo mà không có ai đau là báo cáo chưa làm công việc của mình.' }
        ];
      },
      fb: 'Lời kết luận được chấm theo 4 tiêu chí. Thiếu một tiêu chí là chưa đủ — nhưng đủ bốn tiêu chí này thì báo cáo của bạn sẽ vẫn đúng sau một năm.',
      teach: 'Bốn tiêu chí này là một quy trình, không phải bốn mẹo. Áp dụng vào bất kỳ vụ việc nào bạn đang tranh luận: <b>nói cụ thể → nói mức độ chắc chắn → nói điều kiện → nói ai còn bị thiệt và làm gì với điều đó</b>. Bốn câu, khoảng một trang, dùng được cho mọi việc.' },

    { type: 'multi', tag: 'Khép vụ án', skill: 'perspective',
      q: 'Vụ án đóng. Bạn còn bốn việc để làm. Bốn việc nào thực sự thuộc về bạn?',
      sub: 'Chọn những việc mà BĐT có thể và nên làm — kể cả khi không ai nhờ.',
      items: [
        { t: 'Gửi bản tóm tắt hồ sơ cho Hạnh trước khi công khai, và hỏi cô ấy muốn ẩn phần nào.' },
        { t: 'Ghi lại trong hồ sơ cả những điều chưa biết, thay vì chỉ ghi những điều đã chứng minh.' },
        { t: 'Đề nghị nhà trường thông báo công khai tiêu chuẩn kiểm tra bài thi của khối, để lần sau ít người phải đoán.' },
        { t: 'Tìm người đã tạo ra bình luận đầu tiên trên diễn đàn để hỏi ông/ bà ấy biết gì từ đầu.' },
        { t: 'Đăng một bài tổng kết chỉ trích bằng bằng chứng của chính BĐT, để đồng đội tự kiểm.' },
        { t: 'Gửi lời cảm ơn công khai tới Chủ nhiệm Quách vì đã tạo cơ hội học được nhiều.' }
      ],
      answer: [0, 1, 2, 4],
      fb: 'Bốn việc đầu là những việc làm kết luận của bạn trở nên đáng tin: trao quyền đọc cho người bị nêu tên, ghi cả điều chưa biết, sửa điều kiện đã gây ra vụ án, và để chính mình chịu kiểm.\n\nBỏ sót một điều quan trọng ở đây: cả nguyên nhân của vụ án không nằm ở một người ác ý. Nó nằm ở việc <b>không có quy trình nào để báo cáo một nghi ngờ</b> mà không bị thiệt. Một quy trình tốt là thứ khiến lần sau không cần một BĐT cảnh giác để ngăn thảm họa.',
      teach: 'Việc thứ năm trong danh sách loại là câu hỏi khó nhất: <b>bạn có dám tự đưa mình vào phạm vi kiểm chứng không?</b> Người chỉ biết chỉ trích người khác sẽ không bao giờ tin rằng lập luận của mình tốt; bởi vì họ không bao giờ biết nó tốt đến mức nào khi đứng một mình.',
      fbMid: 'Bạn chọn được phần lớn nhưng để sót một việc — thường là việc mà người ta ngại nhất. Chính cái ngại đó là thứ báo cáo của bạn còn thiếu.' },

    { type: 'journal', tag: 'Nhật ký cuối', skill: 'perspective',
      q: 'Đọc lại nhật ký từ Màn 1.',
      sub: 'Bạn đã đi bảy màn. Viết một câu cho người đang đọc tờ giấy thi giữa kỳ năm nay.',
      prompt: 'Viết một câu — chỉ một câu — mà bạn muốn gửi tới một người đang 12–18 tuổi và đang đọc 300 bình luận dưới một bài đăng.',
      hint: 'Đừng viết về ngụy biện. Viết về thứ mà bạn đã qua bảy ngày mà mười tuổi trước đó không có. Nếu câu đó chỉ đúng với vụ án này thì nó chưa đủ tốt.' },

    { type: 'narr', tag: 'Hết hồ sơ', text:
`21:00. Bạn đóng laptop lần thứ sáu.

Bàn giữa sân trường vắng. Hạnh đi rồi. Cô Hồng đi rồi. Kiên đi rồi, mang theo một tờ giấy phết ghi đầy bút bi xanh, và câu "tao đã hiểu rồi" gõ vào tin nhắn.

Trước mặt bạn là hồ sơ 2041. Bốn trăm hai mươi trang. Bảy màn. Bốn tám giờ — mà thật ra chỉ mới bốn tiếng.

Và câu hỏi duy nhất còn lại, câu mà cô Hồng đã hỏi bạn ngay từ đầu mà bạn mất bảy màn mới hiểu:

<strong>Điều gì trong vụ án này thật sự là mới?</strong>

Không phải vì bạn nhanh hay chậm. Mà vì <em>bạn đã làm nó một trăm lần trong đầu</em> — mỗi lần đọc một bài trên mạng, mỗi lần thấy một bình luận dưới một bài báo, mỗi lần nghe một người lớn khẳng định những điều họ không có gì để biết.

Chỉ có một khác biệt. Lần này bạn được đi tìm.

Và đó mới là thứ duy nhất từ cả vụ án này xứng đáng được ghi vào nhật ký.` }
  ]

});