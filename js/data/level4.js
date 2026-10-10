/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 4: BẢNG SỐ
   Kỹ năng: Phân tích dữ liệu, tương quan và nhân quả
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 4,
  title: 'BẢNG SỐ',
  skill: 'data',
  skillName: 'Phân tích dữ liệu, tương quan và nhân quả',
  skillIcon: '📊',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Tủ số kho Toán, 08:10', text:
`Kho lưu đề thi của trường nằm ở tầng bậc. Mùi giấy cũ, mùi bụi, và một cái kẹp sắt đã gỉ.

Bạn lấy đề giữa kỳ Toán 10, và phát hiện điều này:

<strong>Câu 4 của đề này có đúng một lời giải.</strong>

Không phải lựa chọn A/B/C/D. Không phải số nào cũng dùng được. Câu đó yêu cầu chứng minh một tính chất, và lời giải đúng đòi hỏi một kỹ thuật xác định — gọi tên nó là HĐT1 rồi dùng HĐT2.

Nói cách khác: gần như học sinh nào làm đúng câu 4 cũng có một trong ba lời giải giống nhau.

Còn bài của Hạnh — câu bị nghi là "trùng ý 80%" — là câu đó.` },

    { type: 'estimate', tag: 'Bài 1 · Tần suất nền', skill: 'data',
      q: 'Ước lượng: trong 100 bài Toán giữa kỳ của lớp 10A1, có bao nhiêu bài có ít nhất hai ý giống hệt nhau ở câu 4?',
      unit: 'bài / 100 bài',
      max: 100, answer: 38, tol: 9,
      sub: 'Đừng đoán bằng cảm giác. Bạn có dữ kiện để ước lượng. Tần suất nền — tức "chuyện này bình thường xảy ra bao nhiêu lần" — là con số bạn cần trước khi hỏi "chuyện này có bất thường không".',
      hint: 'Đề thi chung cho cả khối 4 lớp. Gần 80 học sinh làm đúng câu 4. Trong đó có hai mẫu lời giải phổ biến nhất, mỗi mẫu chiếm khoảng một phần tư số bài đúng. Hãy dùng ba phép tính.',
      fb: 'Con số hợp lý nằm quanh 38 bài — và đây là con số BĐT đo lại trên 300 bài thật của khối Toán 10 trong ba năm: trung bình 36 bài trên 100 bài có ít nhất hai ý giống nhau ở các câu "chứng minh".\n\nNghĩa là: nếu bạn chấm ngẫu nhiên 100 bài, khoảng 36 bài sẽ có hiện tượng "hai ý giống nhau ở câu 4". Đó là chuyện bình thường. Không phải bằng chứng của gì cả.',
      teach: 'Tần suất nền (base rate) là kỹ năng bị bỏ quên nhiều nhất của người lớn. Ta luôn chú ý đến ca lạ — và quên rằng phần lớn thời gian, phần lớn người đều ở mức trung bình. Hỏi "cái này hiếm bao nhiêu?" trước khi hỏi "cái này có hiếm không?" là một câu hỏi rẻ mà hiệu quả.' },

    { type: 'evidence', tag: 'Bằng chứng mới', skill: 'data',
      prompt:
`Bạn dán kết quả vào hồ sơ và thêm một dòng ghi chú. Đó là dòng duy nhất trong cả hồ sơ có số liệu từ tập dữ liệu thật của trường.

Bây giờ, trước khi bạn dùng được con số 38 này, bạn phải biết nó được lấy từ đâu. Và điều đó dẫn tới một chiếc bảng khác.`,

      ev: {
        id: 'E-07',
        title: 'Tần suất nền: 36 bài trên 100 bài có hai ý giống nhau ở câu chứng minh',
        source: 'Khảo sát 300 bài giữa kỳ khối Toán 10 · ba năm học 2023–2026 · BĐT tự thống kê',
        strength: 3,
        text:
`Trong 300 bài giữa kỳ khối Toán 10 (kỳ 1 và kỳ 2, ba năm học):
- Trung bình 8 bài trên 100 bài có hơn hai ý giống hệt nhau ở câu chứng minh.
- Trung bình 28 bài trên 100 bài có đúng hai ý giống nhau.
- Trung bình 8 bài trên 100 bài có một ý giống.

Câu 4 của đề giữa kỳ năm nay là câu chứng minh, buộc dùng HĐT1–HĐT2, lời giải gần như không có biến thể.`,
        note: 'Bằng chứng này <b>loại bỏ</b> một cách buộc tội chứ không <b>chứng minh</b> một cách vô tội. Tư duy phản biện tốt chấp nhận làm việc loại bỏ — loại bỏ là một tiến bộ thật, và thường là tiến bộ lớn nhất. Và lưu ý: đây vẫn không nói lên điều gì về ý đồ của cô Lan. Nó chỉ nói: hiện tượng này không đáng ngờ bằng thứ mà ai cũng nghĩ.'
      } },

    { type: 'chart', tag: 'Bài 2 · Đọc biểu đồ', skill: 'data',
      q: 'Cô Hồng đưa bạn bảng thống kê ba năm của trường. Cái nhìn đầu tiên của bạn là gì?',
      sub: 'Chọn kết luận mà biểu đồ thực sự cho phép.',
      chart: {
        kind: 'bar', title: 'Số vụ phát hiện bài trùng ý tưởng, 3 năm học',
        sub: 'Tất cả khối, tất cả môn. Báo cáo của hội đồng chuyên môn.',
        unit: ' vụ',
        data: [
          { label: 'Toán', value: 41, hl: true },
          { label: 'Văn', value: 12 },
          { label: 'Lý', value: 23 },
          { label: 'Hoá', value: 8 },
          { label: 'Anh', value: 17 }
        ],
        foot: 'Khối Toán năm nay có 4 lớp, Văn có 3 lớp. Lý và Hoá dùng đề thi năm, Toán và Anh dùng đề thi riêng.'
      },
      options: [
        { t: 'Không cho phép kết luận gì cả lúc này — vì số vụ tăng không đồng nghĩa tỉ lệ tăng, và tôi chưa biết quy mô hay độ nghiêm khác nhau của mỗi môn.',
          score: 3, verdict: 'good',
          fb: 'Đúng, và đây là ý mà người làm thống kê chuyên nghiệp nói ngay trong 10 giây: <b>số tuyệt đối chỉ có nghĩa khi biết mẫu số</b>. Toán có nhiều lớp hơn, đề thi nhiều "ý" hơn vì câu chứng minh chỉ có một lời giải, và hội đồng chuyên môn Toán quen ngồi họp nên báo cáo nhiều hơn. Ba yếu tố này không liên quan gì đến mức độ gian lận.',
          teach: 'Ba câu hỏi bắt buộc trước mọi biểu đồ: <b>Mẫu số là bao nhiêu? Đo bằng gì? Ai thu thập?</b> Nếu trả lời được ba câu đó, bạn mới có quyền nói "nhiều" hay "ít".' },
        { t: 'Toán bị nghi nhiều nhất, nên chắc chắn khối Toán đang có vấn đề chấm điểm.',
          score: 0, trap: 'So sánh số tuyệt đối không có mẫu số',
          trapDesc: 'Toán có 4 lớp và đề thi riêng; Văn có 3 lớp và đề thi chung. 41 và 12 chưa bao giờ đứng cạnh nhau để so sánh. Bạn đang kết luận về độ nghiêm khắc bằng hai con số không cùng đơn vị.',
          verdict: 'bad',
          fb: 'Bạn vừa lặp lại đúng cái mà bài học này muốn dạy. Và có một cái mỉa tinh vi hơn: <b>đây chính là cách diễn đàn đang nghĩ về vụ án hiện tại</b> — "điểm Toán bất thường" ⇒ "gian lận". Hai bước, mỗi bước nghe đều hợp lý, và không bước nào được kiểm chứng.',
          teach: 'Chuỗi lập luận hợp lý-nhưng-sai thường không nằm ở chỗ nào có vẻ ngớ ngẩn, mà nằm ở chỗ <b>chuyển đổi âm thầm</b> — từ "con số" sang "nguyên nhân", từ "tương quan" sang "gây ra". Cả hai đều trông rất giống nhau lúc nói.' },
        { t: 'Số vụ tăng dần qua các năm, nghĩa là học sinh ngày càng ít liêm chính.',
          score: 0, verdict: 'bad',
          fb: 'Biểu đồ này <b>không tách theo năm</b> — nó gộp cả ba năm vào một con số. Bạn vừa đọc ra một xu hướng thời gian trên một biểu đồ không có trục thời gian. Không phải bạn sai về Toán. Bạn sai về đọc biểu đồ, và đó là một kỹ năng riêng cần luyện.',
          teach: 'Trước khi nói "tăng" hay "giảm", luôn chỉ vào trục ngang và hỏi: <b>"cái gì đang chạy trên trục này?"</b> Trục ngang không có năm thì không có xu hướng thời gian.' },
        { t: '41 vụ Toán trên 3 năm không phải con số lớn. Không đáng để điều tra.',
          score: 1, verdict: 'mid',
          fb: 'Đúng về cảm giác, nhưng bạn đang lập luận ngược lại — và lập luận ngược lại cũng là một dạng thiên lệch. Số vụ có thể nhỏ mà <b>hậu quả lớn</b>, và quan trọng hơn: vụ án đang mở không phải về "Toán có bao nhiêu vụ trùng ý" mà về "một đoạn âm thanh ghép".',
          teach: 'Khi bạn "chống lại" một lập luận, hãy cẩn thận đừng lặp lại cùng một cấu trúc với dấu âm. So sánh với một chuẩn (tần suất nền), đừng so sánh với cảm xúc.' }
      ],
      correct: 0
    },

    { type: 'chart', tag: 'Bài 3 · Đường đi lên', skill: 'data',
      q: 'Bảng thứ hai: số vụ bị nghi ngờ điểm, theo tháng trong một năm học.',
      sub: 'Một điểm nhảy rất nổi. Bạn nghĩ nó nghĩa là gì?',
      chart: {
        kind: 'line', title: 'Số vụ khiếu nại điểm phát sinh trong năm học',
        sub: 'Mỗi điểm là số vụ được ghi nhận. Không phải số vụ đã xác nhận là có thật.',
        data: [
          { label: 'T9', value: 4 }, { label: 'T10', value: 3 }, { label: 'T11', value: 5 },
          { label: 'T12', value: 7 }, { label: 'T1', value: 6 }, { label: 'T2', value: 4 },
          { label: 'T3', value: 9 }, { label: 'T4', value: 34 }, { label: 'T5', value: 41 },
          { label: 'T6', value: 12 }
        ]
      },
      options: [
        { t: 'Tháng 4 và tháng 5 là lúc bắt đầu kỳ thi. Học sinh và phụ huynh nhạy cảm với điểm hơn, nên khiếu nại nhiều hơn — không phải gian lận xuất hiện nhiều hơn.',
          score: 3, verdict: 'good',
          fb: 'Chính xác. Điều được đo là <b>số lần người ta phản ứng</b>, không phải <b>số lần có vi phạm</b>. Càng gần kỳ thi, giá trị của một điểm tăng lên trong đầu mọi người, nên cùng một hành vi nhỏ sẽ bị báo nhiều hơn.\n\nNếu đây là gian lận thật, nó không tự sinh ra vào tháng 5 rồi biến mất vào tháng 6.',
          teach: 'Đây là bài học lớn nhất về dữ liệu xã hội: <b>những gì được đo, thường phản ánh hành vi của người đo chứ không phải hiện tượng đang đo.</b> Số ca báo cáo tăng khi có chương trình đào tạo về báo cáo. Số khiếu nại tăng khi có kênh khiếu nại. Người bị hại lặng lẽ thì không có ghi chép nào.' },
        { t: 'Gian lận tăng mạnh vào cuối học kỳ. Cần siết chấm điểm ngay.',
          score: 0, trap: 'Tương quan – nhân quả và dữ liệu bị chọn lọc',
          trapDesc: 'Biểu đồ không tách "bị nghi" khỏi "được xác nhận", cũng không tách "cảm thấy công bằng" khỏi "thật sự sai". Kết luận của bạn dựa trên một cột số đang đo sự nhạy cảm.',
          verdict: 'bad',
          fb: 'Bạn đã nhảy từ "số khiếu nại tăng" sang "gian lận tăng" mà không có bước trung gian nào. Hai thứ này khác nhau đúng bằng khoảng cách giữa "kêu" và "đúng".\n\nVà hãy để ý: biểu đồ này có <b>tháng 10 là 3 vụ</b> — cũng là tháng có clip. Nếu bạn chỉ nhìn đoạn cuối, bạn sẽ khẳng định điều bằng dữ liệu. Nhìn toàn bộ đường thì bạn thấy một hình thù khác: mọi người chỉ báo cáo khi việc đó còn nóng.',
          teach: 'Bài học kỹ thuật: <b>luôn hỏi "nếu đây không phải do X, biểu đồ có trông khác đi không?"</b> Nếu câu trả lời là "không", thì bạn đã chỉ ra được một cách giải thích khác mà không cần thêm dữ liệu nào.' },
        { t: 'Tháng 4–5 là tháng đánh giá giữa kỳ 2, số vụ tăng vì bộ phận kỹ thuật mới bắt đầu ghi nhận hồ sơ.',
          score: 1, verdict: 'mid',
          fb: 'Đây là một giải thích <em>hợp lý</em> — và đó chính là vấn đề. Một giải thích hợp lý cũng cần bằng chứng. Bạn không có dữ liệu nào cho biết bộ phận kỹ thuật có thay đổi quy trình vào tháng 4. Bạn vừa sinh ra một giải thích rồi tự cho nó là sự thật.',
          teach: 'Một giải thích tốt phải trả lời được hai câu hỏi: <b>"Tại sao bạn nghĩ vậy?"</b> và <b>"Điều gì nếu không phải vậy?"</b> Câu hai mới là câu phân biệt một giải thích với một câu chuyện.' },
        { t: 'Phải lấy số vụ đã xác nhận mới kết luận được. Còn không thì không kết luận gì.',
          score: 2, verdict: 'mid',
          fb: 'Cẩn thận và đúng hướng, nhưng hơi nặng tay: nếu bộ phận kỹ thuật chỉ xác nhận 4 trong 41 vụ, bạn sẽ kết luận "không có vấn đề" — và lại rơi vào lỗi ngược lại. Thiếu dữ liệu không có nghĩa là sạch.',
          teach: 'Khi thiếu dữ liệu, cứ nói "chưa đủ để kết luận" — nhưng kèm theo câu bạn <b>có thể</b> kết luận được: "Trong 41 vụ, có 9 vụ được xác nhận có dấu hiệu; 32 vụ còn đang chờ." Kết luận không phải là phải ra số mới; kết luận có điều kiện vẫn là kết luận.' }
      ],
      correct: 0
    },

    { type: 'pick', tag: 'Bài 4 · Cú bẫy con số', skill: 'data',
      q: 'Trên diễn đàn có một bài đăng đang được chia rất nhiều. Bạn đọc lần thứ ba thì thấy đoạn này:',
      sub: '"Hạnh nằm trong nhóm 5% điểm Toán cao nhất khối. Cô Lan chấm 19 điểm cho một học sinh, tức là gần như không bao giờ trừ điểm — ai lại trừ điểm một đứa giỏi? Giáo viên đưa 19/20 cho bạn cũng là có thiên vị. Vậy điểm của Hạnh gần như chắc chắn là do bài của Hạnh bị nhân bản."\n\nPhần bạn vừa đọc là bằng chứng, hay là lập luận?',
      correct: 0,
      options: [
        { t: 'Lập luận. Nó đi từ "giáo viên thường đưa điểm cao" sang "bài của Hạnh bị nhăn bản" mà không có bước nào ở giữa.',
          score: 4, verdict: 'good',
          fb: 'Chính xác. Hãy thử dựng lại chuỗi nhân quả của họ: <em>cô Lan có thói quen cho điểm cao → Hạnh được điểm cao → vậy bài Hạnh sai → vậy bài bị nhân bản.</em> Bước thứ hai đến bước thứ ba là nhảy cóc: <b>giáo viên có thói quen cho điểm cao không hàm ý được là học sinh sai</b> — nó còn phải qua một bước nữa mới tới ý bảo sao chép. Và bước đó chính là lý do học sinh giỏi phải thi.\n\nĐây là mẫu lập luận cực kỳ phổ biến: dùng một quy luật đúng để kết luận một điều sai.',
          teach: 'Tên kỹ thuật là <b>đảo ngược hệ quả</b>: nếu thì A thì B; ta có B; vậy A. Chỉ cần tìm được một trường hợp có B mà không phải A là hết. Ví dụ: rất nhiều học sinh đạt 19/20 mà bài vẫn có lỗi thật — vì câu cuối là câu chứng minh, chỉ có một lời giải đúng, và ai giỏi cũng có thể trượt một ý.' },
        { t: 'Bằng chứng. Trong đó có số liệu cụ thể: 5%, 19/20.',
          score: 0, verdict: 'bad',
          fb: 'Bạn vừa thực hiện đúng cái bài học bên trên: <b>nhầm có số liệu với có bằng chứng.</b> "19/20" là một dữ kiệu đúng. Nhưng dữ kiệu đúng nằm giữa một lập luận sai không biến lập luận đó thành bằng chứng. Trong vụ án, đây là cách bằng chứng giả hay mọc lên cây nhất: chỉ cần một con số thật.\n\nĐối thủ của bạn sẽ vui mừng nếu bạn gọi đây là bằng chứng — vì khi đó cuộc tranh luận chỉ còn nói về mức độ tin cậy của bạn, thay vì nói về độ chắc chắn của họ.',
          teach: 'Nguyên tắc: <b>dữ kiệu nằm trong lập luận không biến lập luận thành dữ kiện.</b> Muốn bằng chứng, bạn phải tự tay đi tìm và phải tìm được ở cả hai phía. Đối thủ của bạn không tự tay đi tìm gì cả.' },
        { t: 'Bằng chứng giả. Người viết cố tình bịa số liệu để câu like.',
          score: 0, verdict: 'bad',
          fb: 'Không cần. Số 19/20 có thật — Hạnh là một trong hai học sinh đạt điểm cao nhất. Người viết không bịa gì cả.\n\nBạn đang gán ý đồ xấu cho một người chỉ vì lập luận của họ sai. Lập luận sai và nói dối là hai chuyện khác nhau, và quy đổi hai chuyện đó là một dạng ngụy biện bạn vừa học xong.',
          teach: 'Tách <b>lập luận sai</b> và <b>người nói dối</b>. Ghép chúng lại sẽ làm mất đi khả năng đánh giá lập luận một cách công bằng — và đó cũng là cách một phe nào đó biến mình thành phe của bạn rồi đánh nhau với phe kia vô ích.' },
        { t: 'Chưa biết. Cần xem cách cô Lan đưa điểm môn khác mới kết luận được.',
          score: 2, verdict: 'mid',
          fb: 'Đây là một bước đi đúng và tốt. Nhưng nó chưa phải câu trả lời cho câu hỏi đang đặt ra, và nếu bạn dừng ở đây bạn sẽ không bao giờ phải nói ra điều quan trọng nhất: <b>đoạn lập luận này không có đường nối từ số liệu đến kết luận, dù thêm bao nhiêu dữ liệu nữa.</b>\n\nChờ thêm dữ liệu không phải là lập luận. Đó là trì hoãn.',
          teach: 'Phân biệt "tôi cần thêm thông tin" với "tôi sẽ không bao giờ đủ thông tin". Câu thứ hai cần được nói thẳng ra, vì nó tiết kiệm rất nhiều công sức cho tất cả mọi người.' }
      ],
      maxPts: 4
    },

    { type: 'multi', tag: 'Bài 5 · Thiết kế điều tra', skill: 'data',
      q: 'Sáng mai bạn được 25 phút họp với giáo viên chủ nhiệm khối để trình bày phương án kiểm chứng. Bạn chọn những bước nào đưa vào?',
      sub: 'Bấm nhiều mục. Bốn mục đúng, hai mục không — và lý do của mỗi mục bị loại cũng là một bài học.',
      items: [
        { t: 'Lấy đề giữa kỳ năm nay, đối chiếu với đề dùng cho 4 lớp còn lại trong khối.' },
        { t: 'Chấm thử 20 bài ngẫu nhiên của lớp khác trên cùng đề, xem tỉ lệ bài trùng ý ở câu 4.' },
        { t: 'Xin danh sách những học sinh đã từng bị khiếu nại về điểm Toán trong hai năm qua.' },
        { t: 'Hỏi cô Lan: trong cùng kỳ này, điểm của các học sinh khác có được phân bố đều không.' },
        { t: 'So sánh bài của Hạnh với bài của ba đứa đứng đầu lớp.' },
        { t: 'Hỏi cả lớp xem có ai có bài giống bài của Hạnh không.' }
      ],
      answer: [0, 1, 2, 3],
      fb: 'Bốn bước đầu cùng nhau tạo nên một phương án kiểm chứng có nhóm đối chứng. Đó là xương sống của việc nghiên cứu bất kỳ thứ gì: <b>đừng chỉ nhìn một trường hợp, hãy đặt nó vào giữa những trường hợp tương tự.</b>',
      teach: 'Hai bước bị loại cùng có một điểm chung, và điểm đó là điều người mới hay làm nhất. Bước 5 lấy mẫu cực nhỏ và có chọn lọc — ba đứa đứng đầu lớp chắc chắn không đại diện cho phần lớn. Bước 6 dựa vào <b>tự báo cáo</b>: ai không muốn dính vào sẽ không nói, nên kết quả thu được luôn nghiêng về một phía.\n\nNguyên tắc chung: càng thu thập thông tin từ những người liên quan, dữ liệu càng dễ bị méo — và luôn méo về một hướng: hướng có lợi cho người đang nói.',
      fbMid: 'Gần đúng. Bạn đã có nhóm đối chứng, nhưng còn một mắt xích lẫn lộn trong đó. Nhớ hỏi: "nếu kết quả ra khác, bước này có cho tôi biết không?" — nếu không, bước đó không phải kiểm chứng, nó chỉ là thu thập tin.' },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'data',
      q: 'Nhật ký: con số nào trong vụ án này làm bạn bất ngờ nhất?',
      sub: 'Và nó thay đổi gì trong cách bạn nhìn vụ án?',
      prompt: 'Viết: (1) Trước khi biết con số 38, bạn nghĩ gì về bài Hạnh? (2) Sau khi biết, điều gì trong lập luận buộc tội bị sụp? (3) Còn câu nào trong clip mà con số này KHÔNG giải thích được?',
      hint: 'Điểm 3 là câu quan trọng nhất. Một con số có thể loại bỏ một cách buộc tội, nhưng nó không tự động làm cô Lan trở nên hoàn hảo. Điều tra tử tế là nhớ cả hai việc.' },

    { type: 'narr', tag: 'Kết màn 4', text:
`17:20. Bạn đóng cuốn sổ điểm.

Hôm nay bạn không tìm được ai làm gì sai. Bạn chỉ tìm được một câu hỏi đã bị diệt:

<em>"Có chứng minh nào rằng ai đó ăn cắp, không?"</em>

Đó là câu hỏi của cô ấy. "Nếu không có bằng chứng thì cứ để yên cho cô ấy." Và câu đó, bạn biết rồi, là một câu hỏi tệ — vì <strong>"không có bằng chứng" không bao giờ đồng nghĩa với "vô tội", và "vô tội" cũng chưa chắc là "trong sạch".</strong>

Còn một người nữa chưa từng lên tiếng trong bốn ngày qua: Hạnh.

Cô Hồng nhìn bạn: "Muốn biết mình đã lập luận đúng chưa à, thì đừng chỉ hỏi kẻ buộc tội. <em>Hỏi người bị buộc tội.</em> Rồi tự phản biện lại lập luận của chính mình."` }
  ]

});