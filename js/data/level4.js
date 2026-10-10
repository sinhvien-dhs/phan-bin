/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 4: TẦN SUẤT NỀN
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Phân tích dữ liệu, tương quan và nhân quả
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 4,
  title: 'TẦN SUẤT NỀN',
  skill: 'data',
  skillName: 'Phân tích dữ liệu, tương quan và nhân quả',
  skillIcon: '📊',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Kho đề thi, 08:10', text:
`Kho lưu đề thi nằm ở tầng bậc. Mùi giấy cũ, mùi bụi, và một cái kẹp sắt đã gỉ.

Bạn lấy đề giữa kỳ Vật lý 11, và phát hiện điều này:

<strong>Có ba câu hỏi, và cả ba đều yêu cầu kết quả ghi kèm đơn vị.</strong>

Không phải vì thầy thích. Vì học kỳ trước có hơn 40 bài trả lời "a = 3,21" không kèm đơn vị, và thầy phải chấm lại từng bài.

Giờ bạn làm phép tính mà cả trường đang quên làm:

Nếu bài Hải thiếu đơn vị ở kết quả cuối — <em>thì bao nhiêu bài khác cũng thiếu?</em>` },

    { type: 'estimate', tag: 'Bài 1 · Tần suất nền', skill: 'data',
      q: 'Ước lượng: trong 100 bài Vật lý giữa kỳ của khối 11, có bao nhiêu bài thiếu đơn vị ở ít nhất một kết quả?',
      unit: 'bài / 100 bài',
      max: 100, answer: 34, tol: 9,
      sub: 'Đừng đoán bằng cảm giác. Bạn có dữ kiện để ước lượng. Tần suất nền — tức "chuyện này bình thường xảy ra bao nhiêu lần" — là con số bạn cần trước khi hỏi "chuyện này có bất thường không".',
      hint: 'Khối 11 có 4 lớp, mỗi lớp 32 học sinh, tổng 128 bài. Bài thi giữa kỳ có 12 câu tự luận, mỗi câu một kết quả chính. Trong dữ liệu mẫu của kho: trung bình 3,4 câu trên mỗi bài không ghi đơn vị ở kết quả cuối. Hãy dùng ba phép tính.',
      fb: 'Con số hợp lý nằm quanh 34 bài — và đây là con số BĐT đo lại trên 340 bài thật của khối Vật lý 11 trong ba năm: trung bình 33 bài trên 100 bài thiếu đơn vị ở ít nhất một câu.\n\nNghĩa là: nếu bạn lấy ngẫu nhiên 100 bài, khoảng 33 bài sẽ có hiện tượng "thiếu đơn vị ở kết quả cuối". <b>Đó là chuyện bình thường.</b> Không phải bằng chứng của gì cả.',
      teach: 'Tần suất nền (base rate) là kỹ năng bị bỏ quên nhiều nhất của người lớn. Ta luôn chú ý đến ca lạ — và quên rằng phần lớn thời gian, phần lớn người đều ở mức trung bình. Hỏi "cái này hiếm bao nhiêu?" trước khi hỏi "cái này có hiếm không?" là một câu hỏi rẻ mà hiệu quả.' },

    { type: 'evidence', tag: 'Bằng chứng mới', skill: 'data',
      prompt:
`Bạn dán kết quả vào hồ sơ và thêm một dòng ghi chú. Đó là dòng duy nhất trong cả hồ sơ có số liệu từ tập dữ liệu thật của trường.

Bây giờ, trước khi bạn dùng được con số 34 này, bạn phải biết nó được lấy từ đâu. Và điều đó dẫn tới một chiếc bảng khác.`,

      ev: {
        id: 'E-08',
        title: 'Tần suất nền: 33 bài trên 100 bài Vật lý 11 thiếu đơn vị ở kết quả cuối',
        source: 'Khảo sát 340 bài giữa kỳ khối Vật lý 11 · ba năm học 2023–2026 · BĐT tự thống kê',
        strength: 3,
        text:
`Trong 340 bài kiểm tra giữa kỳ khối Vật lý 11:
- Trung bình 33 bài trên 100 bài thiếu đơn vị ở ít nhất một kết quả.
- Trung bình 21 bài trên 100 bài dùng g = 9,81 dù đề yêu cầu làm tròn g = 9,8.
- Trung bình 17 bài trên 100 bài viết sai chiều lực ma sát.
- Trung bình 2 bài trên 100 bài có cả ba lỗi cùng lúc.`,

        note: 'Bằng chứng này <b>loại bỏ</b> một cách buộc tội chứ không <b>chứng minh</b> một cách vô tội. Tư duy phản biện tốt chấp nhận làm việc loại bỏ — loại bỏ là một tiến bộ thật, và thường là tiến bộ lớn nhất.'
      } },

    { type: 'chart', tag: 'Bài 2 · Đọc biểu đồ', skill: 'data',
      q: 'Cô Hồng đưa bạn bảng thống kê ba năm của trường. Cái nhìn đầu tiên của bạn là gì?',
      sub: 'Chọn kết luận mà biểu đồ thực sự cho phép.',
      chart: {
        kind: 'bar', title: 'Các lỗi vật lý hay gặp nhất ở học sinh khối 11 (số lượt chấm sai)',
        sub: 'Đếm trên 4.000 bài của ba năm học. Mỗi bài có thể có nhiều lỗi.',
        unit: ' lượt',
        data: [
          { label: 'Thiếu đơn vị kết quả', value: 1120, ok: true },
          { label: 'Sai dấu khi thay hằng số', value: 860 },
          { label: 'Dùng g = 9,81', value: 705, hl: true },
          { label: 'Sai chiều lực', value: 680 },
          { label: 'Bỏ qua hiệu suất', value: 540 }
        ],
        foot: '▲ = đang tô đậm'
      },
      options: [
        { t: 'Không cho phép kết luận gì cả lúc này — biểu đồ đếm lỗi phổ biến, không đếm lỗi do AI gây ra, và nếu lỗi "dùng g = 9,81" phổ biến thế này thì nó gần như vô giá trị để kết án ai.',
          score: 3, verdict: 'good',
          fb: 'Đúng, và đây là phát hiện làm đảo ngược cả vụ án. "Dùng g = 9,81" đứng hạng ba trong toàn bộ lỗi vật lý của khối — nghĩa là nó là một lỗi phổ biến, không phải một dấu vết đặc trưng.\n\nChỉ khi đặt nó cạnh <b>tiêu chí đề</b> (9,8) và <b>thời điểm</b> (không có nó ở học kỳ 1) thì nó mới trở thành dấu vết. Bối cảnh làm một dữ kiện trở thành bằng chứng, hoặc biến nó thành vô nghĩa.',
          teach: 'Ba câu hỏi bắt buộc trước mọi biểu đồ: <b>Mẫu số là bao nhiêu? Đo bằng gì? Ai thu thập?</b> Ngoài ra: <b>dữ kiện này được lấy từ bao lâu?</b> 705 lượt trong ba năm — bạn không biết trong bao nhiêu lượt cuối cùng.' },
        { t: 'Dùng g = 9,81 đứng thứ ba, vậy bài Hải có 705 khả năng đếm được.',
          score: 0, trap: 'Nhầm tần suất nền với lý do',
          trapDesc: 'Bạn đã biết tần suất nền là 33 bài trên 100. Giờ bạn dùng nó như thể nó là xác suất có tội. Hai thứ này khác nhau đúng bằng khoảng cách giữa "hay gặp" và "có bằng chứng".',
          verdict: 'bad',
          fb: 'Bạn vừa lặp lại đúng cái mà bài học bên trên muốn dạy: <b>nhầm "phổ biến" với "gây ra"</b>. 705 lượt trong ba năm không nói lên vụ án của Hải. Nó chỉ nói lỗi đó hay xảy ra.\n\nVà bạn đã đi thẳng từ biểu đồ cột sang một kết luận về một người mà biểu đồ không nhắc đến.',
          teach: 'Chuỗi lập luận hợp lý-nhưng-sai thường không nằm ở chỗ nào có vẻ ngớ ngẩn, mà nằm ở chỗ <b>chuyển đổi âm thầm</b> — từ "con số" sang "nguyên nhân", từ "tương quan" sang "gây ra". Cả hai đều trông rất giống nhau lúc nói.' },
        { t: 'Biểu đồ này tách theo năm nên chắc chắn học sinh ngày càng ít cẩn thận.',
          score: 0, verdict: 'bad',
          fb: 'Biểu đồ này <b>không tách theo năm</b> — nó gộp cả ba năm vào một con số. Bạn vừa đọc ra một xu hướng thời gian trên một biểu đồ không có trục thời gian. Không phải bạn sai về Vật lý. Bạn sai về đọc biểu đồ, và đó là một kỹ năng riêng cần luyện.',
          teach: 'Trước khi nói "tăng" hay "giảm", luôn chỉ vào trục ngang và hỏi: <b>"cái gì đang chạy trên trục này?"</b> Trục ngang không có năm thì không có xu hướng thời gian.' },
        { t: 'Phải lấy số lỗi do AI gây ra mới kết luận được. Còn không thì không kết luận gì.',
          score: 2, verdict: 'mid',
          fb: 'Cẩn thận và đúng hướng, nhưng bạn không thể lấy dữ liệu đó — vì người ta không ghi "lỗi này do AI". Bạn sẽ chờ mãi.\n\nThay vào đó, bạn đi theo hướng khả thi: dùng <b>dấu vết quy trình</b> (thời điểm, đơn vị, ký tự thay thế) và đo tần suất nền. Đó chính là cách bạn đã làm ở hai màn trước.',
          teach: 'Khi thiếu dữ liệu, cứ nói "chưa đủ để kết luận" — nhưng kèm theo câu bạn <b>có thể</b> kết luận được. Kết luận không phải là phải ra số mới; kết luận có điều kiện vẫn là kết luận.' }
      ],
      correct: 0,
      teach: 'Đây là lỗi phổ biến nhất của người làm điều tra: <b>độ mạnh của bằng chứng không phải một con số, mà là một cặp.</b> Kiểm chứng được bao nhiêu, và liên quan bao nhiêu.' },

    { type: 'chart', tag: 'Bài 3 · Đường đi lên', skill: 'data',
      q: 'Bảng thứ hai: số phiên truy cập công cụ AI ở phòng máy khối Vật lý, theo tuần trong một năm học.',
      sub: 'Một điểm nhảy rất nổi. Bạn nghĩ nó nghĩa là gì?',
      chart: {
        kind: 'line', title: 'Số phiên truy cập công cụ học tập tích hợp, theo tuần',
        sub: 'Mỗi điểm là tổng số phiên trong tuần, toàn khối 11.',
        data: [
          { label: 'T9.1', value: 2 }, { label: 'T9.3', value: 3 }, { label: 'T9.5', value: 2 },
          { label: 'T10.1', value: 4 }, { label: 'T10.3', value: 5 }, { label: 'T10.5', value: 4 },
          { label: 'T11.1', value: 6 }, { label: 'T11.3', value: 41 }, { label: 'T11.5', value: 22 },
          { label: 'T12.1', value: 19 }, { label: 'T12.3', value: 34 }
        ]
      },
      options: [
        { t: 'Điểm nhảy xuất hiện đúng tuần giáo viên được cấp tài khoản công cụ AI, và tuần sau đó giảm vì giáo viên dùng công cụ này để soạn đề chứ không phải học sinh dùng để học bài.',
          score: 3, verdict: 'good',
          fb: 'Đúng — và đây là kỹ năng đọc biểu đồ đáng giá nhất trong toàn bộ vụ án: <b>hỏi cái gì đã thay đổi vào đúng thời điểm đó.</b>\n\nNhìn toàn bộ đường thì bạn thấy một hình thù khác: đây không phải học sinh tự dần tìm đến công cụ, mà là một sự kiện xảy ra đúng một ngày. Người học sinh không tự bùng lên từ 6 lên 41 phiên trong một tuần.',
          teach: 'Luôn hỏi: <b>"nếu đây không phải do X, biểu đồ có trông khác đi không?"</b> Nếu câu trả lời là "không", bạn đã chỉ ra được một cách giải thích khác mà không cần thêm dữ liệu nào.' },
        { t: 'Học sinh lớp 11 phát hiện AI và bắt đầu dùng ồ ạt, chứng tỏ AI quá hấp dẫn.',
          score: 0, trap: 'Câu chuyện hợp lý về một đời sống bình thường',
          trapDesc: 'Cách kể này nghe rất đúng đời thường — và không giải thích được vì sao số phiên nhảy từ 6 lên 41 chỉ trong một tuần rồi lại giảm. Nó gán ý định cho dữ liệu mà dữ liệu không có.',
          verdict: 'bad',
          fb: 'Bạn đã sinh ra một câu chuyện rất hợp lý và hợp lý <em>không đủ</em>. Hợp lý cũng cần bằng chứng — và ở đây có dữ liệu chống lại bạn: đường này <b>không hợp với câu chuyện lan toả dần</b>, nó hợp với một sự kiện xảy ra đúng một ngày.\n\nCâu chuyện luôn có sẵn để ta kể. Hình dạng đường thì không.',
          teach: 'Trong điều tra về công nghệ, nguyên tắc số một là: <b>hỏi khi nào con số thay đổi, trước khi hỏi tại sao.</b> "Tại sao" mà không có "khi nào" thì chỉ là trò bịa.' },
        { t: 'Tháng 11 là lúc giáo viên được cấp tài khoản, nhưng chưa biết lớp phản ứng thế nào nên chưa thể kết luận về mức độ ảnh hưởng.',
          score: 2, verdict: 'mid',
          fb: 'Cẩn thận và đúng phần thứ nhất. Nhưng bạn bỏ rơi dữ liệu đang nằm ngay trên biểu đồ: <b>số phiên đã giảm ở tuần sau, từ 41 xuống 22, rồi lại lên 34</b>. Đó là dữ liệu về mức độ ảnh hưởng — nó chỉ chưa được giải thích thôi.\n\nCẩn thận một cách hợp lý khác với cẩn thận bằng cách không nhìn.',
          teach: 'Khi thiếu một mắt xích, hãy nói rõ mắt xích đó là gì. Đừng dựng tường giữa hai bên dữ liệu — hãy khoanh vùng chỗ chưa hiểu.' },
        { t: 'Phải lấy dữ liệu riêng theo từng lớp mới kết luận được.',
          score: 1, verdict: 'mid',
          fb: 'Cần — nhưng dữ liệu đó đã có, và bạn đã tra rồi ở Màn 2: 9 máy, trong đó 6 máy ở 11A1. Bạn đang hỏi lại một câu đã có đáp án.',
          teach: 'Trước khi yêu cầu dữ liệu mới, hãy hỏi: "dữ liệu mình đã có, câu hỏi này có trả lời được không?" Câu hỏi hay nhất trong điều tra thường là câu đã có sẵn câu trả lời trong hồ sơ cũ.' }
      ],
      correct: 0
    },

    { type: 'pick', tag: 'Bài 4 · Cú bẫy con số', skill: 'data',
      q: 'Trên diễn đàn học sinh có một bài đăng đang được chia rất nhiều. Bạn đọc lần thứ ba thì thấy đoạn này:',
      sub: '"Bài của Hải dùng g = 9,81 trong khi đề yêu cầu 9,8. Đây là dấu hiệu chắc chắn của AI, vì tôi tra Google thấy 9,81 là con số mặc định trong mọi công thức vật lý. Bài nào cũng có dấu này thì chắc chắn do máy sinh ra."\n\nPhần bạn vừa đọc là bằng chứng, hay là lập luận?',
      correct: 0,
      options: [
        { t: 'Lập luận. Nó đi từ "con số này là mặc định phổ biến" sang "bài này do AI viết" mà không có bước nào ở giữa — và chính biểu đồ ở Màn 4 đã bác bỏ tiền đề của nó.',
          score: 4, verdict: 'good',
          fb: 'Chính xác. Hãy dựng lại chuỗi của họ: <em>lỗi này hay xảy ra → bài Hải có lỗi này → bài Hải do AI viết.</em> Bước thứ hai đến bước thứ ba là nhảy cóc: <b>một lỗi thường gặp không hàm ý được là do máy</b> — và bạn đã có con số 33 bài trên 100 chứng minh điều đó.\n\nĐiều làm lập luận này nguy hiểm là nó <em>có một sự thật thật</em> bên trong (9,81 đúng là giá trị mặc định phổ biến). Người nói sai một chi tiết nhỏ thành người nói đáng tin hoàn toàn — và bao nhiêu người sẽ kiểm tra cái mười phần trăm đó?',
          teach: 'Tên kỹ thuật: <b>đảo ngược hệ quả</b> — nếu thì A thì B; ta có B; vậy A. Chỉ cần tìm được một trường hợp có B mà không phải A là hết. Ví dụ: rất nhiều bài do người viết tay cũng dùng 9,81 — vì máy tính điện thoại mặc định là 9,8 nhưng nhiều phần mềm tính toán hiển thị 9,81.' },
        { t: 'Bằng chứng. Trong đó có dữ kiện cụ thể: đề yêu cầu 9,8, bài dùng 9,81.',
          score: 0, verdict: 'bad',
          fb: 'Bạn vừa thực hiện đúng cái bài học bên trên: <b>nhầm có số liệu với có bằng chứng.</b> "Đề yêu cầu 9,8" là một dữ kiện đúng. Nhưng dữ kiện đúng nằm giữa một lập luận sai không biến lập luận đó thành bằng chứng. Trong vụ án, đây là cách bằng chứng giả hay mọc lên cây nhất: chỉ cần một con số thật.\n\nĐối thủ của bạn sẽ rất vui nếu bạn gọi đây là bằng chứng — vì khi đó cuộc tranh luận chỉ còn nói về mức độ tin cậy của bạn, thay vì nói về độ chắc chắn của họ.',
          teach: 'Nguyên tắc: <b>dữ kiện nằm trong lập luận không biến lập luận thành dữ kiện.</b> Muốn bằng chứng, bạn phải tự tay đi tìm và phải tìm được ở cả hai phía.' },
        { t: 'Bằng chứng giả. Người viết cố tình bịa số liệu để câu like.',
          score: 0, verdict: 'bad',
          fb: 'Không cần. 9,81 <em>là</em> giá trị mặc định phổ biến — người viết không bịa gì cả.\n\nBạn đang gán ý đồ xấu cho một người chỉ vì lập luận của họ sai. Lập luận sai và nói dối là hai chuyện khác nhau, và quy đổi hai chuyện đó là một dạng ngụy biện bạn vừa học xong.',
          teach: 'Tách <b>lập luận sai</b> và <b>người nói dối</b>. Ghép chúng lại sẽ làm mất đi khả năng đánh giá lập luận một cách công bằng — và đó cũng là cách một phe nào đó biến mình thành phe của bạn rồi đánh nhau với phe kia vô ích.' },
        { t: 'Chưa biết. Cần xem đề thi và xem đề nào lấy từ đâu mới kết luận được.',
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
        { t: 'Đối chiếu đề giữa kỳ năm nay với các phiên bản AI đã sinh ra cùng câu hỏi.' },
        { t: 'Chấm thử 30 bài ngẫu nhiên của khối 11 trên cùng đề, đếm tỉ lệ lỗi "thiếu đơn vị" và "dùng 9,81".' },
        { t: 'Xin danh sách học sinh đã từng bị ghi nhận vi phạm quy định học tập trong hai học kỳ qua.' },
        { t: 'Kiểm tra lịch sử truy cập công cụ AI của phòng máy trong 4 tuần gần nhất, theo tài khoản cá nhân.' },
        { t: 'So sánh bài của Hải với bài của ba đứa đứng đầu khối.' },
        { t: 'Hỏi cả lớp ai có dùng công cụ AI khi làm bài không.' }
      ],
      answer: [0, 1, 2, 3],
      fb: 'Bốn bước đầu cùng nhau tạo nên một phương án kiểm chứng có nhóm đối chứng. Đó là xương sống của việc nghiên cứu bất kỳ thứ gì: <b>đừng chỉ nhìn một trường hợp, hãy đặt nó vào giữa những trường hợp tương tự.</b>',
      teach: 'Hai bước bị loại cùng có một điểm chung. Bước 5 lấy mẫu cực nhỏ và có chọn lọc — ba đứa đứng đầu chắc chắn không đại diện cho phần lớn. Bước 6 dựa vào <b>tự báo cáo</b>: ai không muốn dính vào sẽ không nói, nên kết quả thu được luôn nghiêng về một phía.\n\nNguyên tắc chung: càng thu thập thông tin từ những người liên quan, dữ liệu càng dễ bị méo — và luôn méo về một hướng: hướng có lợi cho người đang nói.',
      fbMid: 'Gần đúng. Bạn đã có nhóm đối chứng, nhưng còn một mắt xích lẫn lộn trong đó. Nhớ hỏi: "nếu kết quả ra khác, bước này có cho tôi biết không?" — nếu không, bước đó không phải kiểm chứng, nó chỉ là thu thập tin.' },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'data',
      q: 'Nhật ký: con số nào trong vụ án này làm bạn bất ngờ nhất?',
      sub: 'Và nó thay đổi gì trong cách bạn nhìn vụ án?',
      prompt: 'Viết: (1) Trước khi biết con số 33, bạn nghĩ gì về bài Hải? (2) Sau khi biết, điều gì trong lập luận buộc tội bị sụp? (3) Còn câu nào trong lập luận đó mà con số này KHÔNG giải thích được?',
      hint: 'Điểm 3 là câu quan trọng nhất. Một con số có thể loại bỏ một cách buộc tội, nhưng nó không tự động làm ai đó trở nên hoàn hảo. Điều tra tử tế là nhớ cả hai việc.' },

    { type: 'narr', tag: 'Kết màn 4', text:
`17:20. Bạn đóng cuốn sổ điểm.

Hôm nay bạn không tìm được ai làm gì sai. Bạn chỉ tìm được một câu hỏi đã bị diệt:

<em>"Có chứng minh nào rằng Hải đã sao chép từ AI trong lúc làm bài, không?"</em>

Đó là câu hỏi của cả lớp. Và câu đó, bạn biết rồi, là một câu hỏi tệ — vì <strong>"không có bằng chứng" không bao giờ đồng nghĩa với "vô tội", và "vô tội" cũng chưa chắc là "trong sạch".</strong>

Còn một người nữa chưa từng lên tiếng trong bốn ngày qua: chính Hải.

Cô Hồng nhìn bạn: "Muốn biết mình đã lập luận đúng chưa à, thì đừng chỉ hỏi kẻ buộc tội. <em>Hỏi người bị buộc tội.</em> Rồi tự phản biện lại lập luận của chính mình."` }
  ]

});