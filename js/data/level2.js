/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 2: NGUỒN GỐC
   Kỹ năng: Đánh giá bằng chứng & độ tin cậy của nguồn
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 2,
  title: 'NGUỒN GỐC',
  skill: 'source',
  skillName: 'Đánh giá bằng chứng & độ tin cậy của nguồn',
  skillIcon: '🔗',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Phòng thí nghiệm âm thanh, 07:50 sáng', text:
`Phòng thí nghiệm âm thanh của thầy Tuấn nằm ở tầng hầm, cửa cách âm, đèn vàng.

Trên bàn là một chiếc laptop, một loa cỡ nhỏ và một màn hình hiện sóng âm.

"Đây là clip của các em," thầy nói, xoay ghế lại. "47 giây. Nhưng thầy nói thật với các em: đây không phải bản gốc."

"Có gì khác?" bạn hỏi.

"Nghe kỹ chỗ ghép." Thầy đưa tay. "Và đừng tin bản thấy trên diễn đàn là bản gốc. Thầnhh đó là bản thứ ba."` },

    { type: 'narr', tag: 'Bài 1', text:
`Thầy Tuấn bật phần mềm Sóng Phân tích. Trên màn hình, đường sóng 47 giây hiện lên.

"Có ba chỗ trong đoạn này mà một đoạn người nói liên tục không có," thầy nói. "Ở đó, có tiếng ghế kéo. Ghế bị kéo ra rồi đẩy vào — và tiếng đó lặp lại ở nhiều chỗ khác nhau. Một cuộc họp không ai đứng dậy rồi ngồi xuống ba lần rồi đóng cửa."

"Mà một buổi hội nghị đầu học kỳ — nghe chừng mười phút — cũng không có ai mở cửa ra ngoài rồi quay vào."

Bạn nhìn đường sóng. Nếu đây là một cuộc họp, tại sao có tiếng cửa đóng giữa chừng?

Thầy Tuấn đẩy ghế về phía bạn:

"Tìm ra mấy chỗ đó đi. Bấm vào sóng. Có một chỗ rất dễ nhận, và có một chỗ gần như không nhận ra."` },

    { type: 'wave', tag: 'Bài 1 · Bắt điểm ghép', skill: 'source', duration: 47,
      q: 'Bấm lên những điểm mà bạn nghĩ âm thanh bị cắt ghép.',
      sub: 'Bạn được bắt 3 điểm. Bấm xong bấm "Phân tích xong". Sai cũng được — sai thì biết để tìm lại.',
      cuts: [12.4, 24.9, 38.3], tol: 1.6,
      fb: 'Ba điểm đó là [12.4s], [24.9s] và [38.3s]. Ngay sau mỗi điểm, tần số nền của tiếng nền đổi đột ngột — đó là dấu hiệu chuyển sang một bản ghi khác, không phải một người bị ngang pha.',
      teach: 'Nguyên tắc kỹ thuật: <b>mọi dấu vết ghép lọt ra qua tiếng nền.</b> Cùng một căn phòng, cùng một chiếc quạt, cùng một chiếc đồng hồ treo tường — chúng có "chữ ký âm thanh". Ghép hai nguồn là chữ ký đó bị đứt. Không cần công cụ đắt tiền để thấy, chỉ cần tai nghe tốt và kiên nhẫn.',
      fbMid: 'Gần đúng rồi, nhưng một điểm ghép nằm rất sát điểm bạn vừa chọn. Nhớ: chỗ dễ nhận là chỗ có nhịp ghế, còn chỗ khó là chỗ không có tiếng gì bất thường — đó mới là chỗ đáng ngờ nhất, vì nơi không có tiếng gì bất thường là nơi người ta đã cắt sạch.',
      fbBad: 'Chưa ra. Đừng nghe bằng tai — hãy nghe bằng mắt: nhìn xem tần số nền có bị nhảy vọt lên ở đâu. Chỗ nhảy vọt là chỗ ghép.' },

    { type: 'evidence', tag: 'Bằng chứng mới', prompt:
`Thầy Tuấn lưu kết quả vào hồ sơ.

"Ba điểm," thầy nói. "Ba đoạn. Khả năng cao nhất: ai đó lấy âm thanh từ ba cuộc họp khác nhau, rồi lắp lại theo đúng thứ tự bạn nghe được. Nghe lại từ đầu — nó có nghe như một câu chuyện mạch lạc không?"

Bạn nghe lại. Và hiểu ra:

Nó nghe mạch lạc vì nó được cắt để mạch lạc.`,

      ev: {
        id: 'E-04',
        title: 'Phân tích điểm ghép âm thanh — 3 điểm cắt tại 12.4s / 24.9s / 38.3s',
        source: 'Phòng thí nghiệm âm thanh · máy đo tần số của trường · thầy Bùi Tuấn thao tác',
        strength: 3,
        text:
`Phân tích đường sóng cho thấy ba điểm chuyển tiếp tần số nền đột ngột tại các mốc 12.4s, 24.9s, 38.3s.

Ba mảng ghép có tiếng nền khác nhau: mảnh 1 (0–12.4s) và mảnh 3 (24.9–38.3s) cùng một nền tiếng máy lạnh chạy đều; mảnh 2 (12.4–24.9s) có nền tiếng xe chạy ngoài cửa sổ.`,
        note: 'Đây là bằng chứng <b>trực tiếp</b> — ai cũng tự kiểm chứng lại được trên đúng tệp đó. Nhớ điều này: bằng chứng mà người đối lập cũng chạy lại được thì sẽ khó bị bác bỏ nhất.'
      }
    },

    { type: 'interrogate', tag: 'Phỏng vấn', skill: 'source',
      q: 'Phỏng vấn thầy Bùi Tuấn',
      sub: 'Thầy là người có tệp gốc. Nhưng thầy cũng là người nói rất tự tin.',
      npc: { name: 'Thầy Bùi Tuấn', role: 'Thủ phòng Công nghệ · phụ trách âm thanh, camera', avatar: '🧑‍💻' },
      questions: [
        {
          q: 'Máy ghi âm trong phòng học giáo viên có lưu file không? Lưu ở đâu, bao lâu?',
          tag: 't-ev', tagName: 'Bằng chứng',
          a: 'Có. Mỗi buổi họp mở máy là máy tự ghi, đóng máy là tự cắt thành file theo ngày, lưu 30 ngày. Hồ sơ 2041 liên quan buổi hội nghị đầu học kỳ tối thứ Tư. Nếu tệp còn, các em nghe thấy bản gốc ngay.',
          ev: {
            id: 'E-05', title: 'Nhật ký máy ghi âm phòng học giáo viên — 30 ngày gần nhất',
            source: 'Hệ thống lưu trữ phòng CNTT · truy cập bằng thẻ cán bộ · giữ 30 ngày',
            strength: 3,
            text: 'Máy ghi âm phòng học giáo viên tự cắt file theo từng phiên họp và lưu 30 ngày. Phiên ngày thứ Tư có tồn tại. Bản ghi hội nghị đầu học kỳ kéo dài 11 phút 12 giây.',
            note: 'Đây là nguồn gốc tốt nhất trong toàn bộ vụ án: do thiết bị tạo ra, không do con người kể lại, và ai cũng mở được để kiểm chứng.'
          },
          score: 4
        },
        {
          q: 'Tệp trên diễn đàn được tải lên lúc mấy giờ, từ thiết bị nào?',
          tag: 't-ev', tagName: 'Dấu vết số',
          a: 'Thầy đã tra log. Tệp được tải lên lúc 21:09, năm phút trước lúc đăng. Thiết bị truy cập: một máy tính trong phòng giáo viên, qua mạng nội bộ. Không phải điện thoại, không phải nhà.',
          ev: {
            id: 'E-06', title: 'Log mạng — tệp clip được tải lên từ phòng giáo viên lúc 21:09',
            source: 'Máy chủ proxy của trường · giữ 60 ngày · bản ghi đã sao lưu',
            strength: 3,
            text: 'Tệp "sự kiện 2041.wav" tải lên lúc 21:09 từ một máy tính trong phòng học giáo viên, qua mạng nội bộ. Thiết bị không đăng nhập hội thư. Bài đăng lúc 21:14, tài khoản @minh_chung_that.',
            note: 'Chú ý độ trễ 5 phút giữa tải lên và đăng. Người tải lên đã kiểm tra file trước khi đăng. Hành vi này cố ý, không phải bấm nhầm.'
          },
          score: 4
        },
        {
          q: 'Camera hành lang lúc đó có ghi gì không?',
          tag: 't-echo', tagName: 'Nguồn phụ',
          a: 'Có, nhưng hành lang tầng 3 camera đang hỏng từ tháng trước, thầy báo rồi, chưa sửa được vì hết tiền. Camera tầng 2 thì hoạt động bình thường. Tầng 3 — xin lỗi, không có gì.',
          score: 2
        },
        {
          q: 'Thầy nói “camera ghi hết, tin tuyệt đối” — thầ nói vậy trước đây có lần nào sai không?',
          tag: 't-risk', tagName: 'Câu chuyện có thật',
          a: 'Thầy nhún vai. "Thầy nói cho các em dễ yên tâm thôi. Có một lần tháng năm thầy nói camera thấy hết rồi hóa ra góc kia có tấm rèm. Từ đó thầy thêm một câu vào nội quy nhà trường: camera là một phần, không phải tất cả."\n\n"Các em cứ thích gọi đó là bằng chứng tuyệt đối. Thầy không cãi. Nhưng thầy cũng không đồng ý."',
          score: 3
        }
      ]
    },

    { type: 'chart', tag: 'Bài 2 · Đọc số liệu', skill: 'source',
      q: 'Cô Hồng gửi bạn bảng chấm điểm mà BĐT tự dựng tối qua. Biểu đồ dưới đây xếp hạng 5 nguồn tin của vụ án.',
      sub: 'Chọn nhận xét đúng nhất về cách bảng này được dựng.',
      chart: {
        kind: 'bar', title: 'Xếp hạng độ tin cậy ban đầu (thang 1–3)',
        sub: 'Thang: 3 = mạnh, 2 = khá, 1 = yếu. Đánh giá tạm, dựa trên cảm tính ban đầu của BĐT.',
        unit: '',
        data: [
          { label: 'Clip trên diễn đàn', value: 2 },
          { label: 'Lời khai cô Lan', value: 2 },
          { label: 'Quan hệ họ hàng', value: 3, ok: false },
          { label: 'Bình luận @minh_chung', value: 1 },
          { label: 'Bản ghi phòng GV', value: 3 }
        ],
        foot: '▲ = đang tô đậm'
      },
      options: [
        { t: 'Bảng đang xếp theo "dễ kiểm chứng", nên quan hệ họ hàng bị chấm 3 nhưng thực ra nó không liên quan gì đến hành vi bị cáo buộc.',
          score: 3, verdict: 'good',
          fb: 'Đúng. Một bằng chứng có 2 phần: <b>độ kiểm chứng được</b> và <b>mức độ liên quan</b> đến điều đang cần chứng minh. Quan hệ họ hàng kiểm chứng được dễ dàng — nhưng nó trả lời câu hỏi "cô ấy có xung đột lợi ích", không trả lời "cô ấy có gian lận hay không". Đặt nó ở hạng 3 là xếp sai chỗ.',
          teach: 'Nếu tách hai trục, bằng chứng mạnh nhất là giao điểm <b>"kiểm chứng được" ∩ "liên quan"</b>. Bằng chứng chỉ mạnh một chiều thì cần dùng cẩn thận.' },
        { t: 'Bảng xếp sai hoàn toàn, phải bỏ hết đi làm lại từ đầu.',
          score: 0, verdict: 'bad',
          fb: 'Bỏ hết là phản ứng của người bực, không phải của người phân tích. Bảng chỉ sai ở một chỗ; các ô còn lại vẫn dùng được. Xếp hạng tệ còn hữu ích hơn không xếp hạng gì — nó buộc cả nhóm nói ra lý do, mà lý do mới là thứ tao được bảo vệ.',
          teach: 'Nguyên tắc: <b>sửa từng ô, đừng xoá cả bảng.</b> Khi bạn đổi toàn bộ, bạn mất luôn dấu vết của việc mình đã nghĩ gì.' },
        { t: 'Bảng này ổn vì đã có con số từ 1 đến 3 rõ ràng.',
          score: 0, verdict: 'bad',
          fb: 'Có số thứ không có nghĩa là có cơ sở. Ở đây bạn đã xếp mà không nói vì sao — và "quan hệ họ hàng = 3" là bằng chứng cho việc nó cho thấy con số 3 có thể đặt nhầm chỗ. Nếu không giải thích tiêu chí, bảng chỉ là một danh sách xếp hạng bịa.',
          teach: 'Luôn đặt câu hỏi: <b>"con số này dùng tiêu chí nào để mà ra?"</b> Không trả lời được thì đó không phải dữ liệu, đó là cảm xúc có số trên.' },
        { t: 'Nên bỏ luôn các nguồn đến từ người quen cô Lan vì BĐT không khách quan.',
          score: 1, verdict: 'mid',
          fb: 'Ý tưởng "phải khách quan" đúng, nhưng cách làm thì sai: bỏ nguồn là <b>loại thông tin</b>, không phải loại thiên lệch. Lời khai của cô Lan vẫn phải vào hồ sơ — chính vì nó là nơi cô Lan tự nói ra điều bất lợi cho mình. Cách đúng là ghi rõ ai đã khai, và đánh giá nó cùng tiêu chí với mọi thứ khác.',
          teach: 'Khi loại một nguồn, luôn hỏi: <b>mình đang loại thông tin hay đang loại nhận thức của mình?</b> Trong điều tra, gần như luôn là cái thứ hai.' }
      ],
      correct: 0,
      teach: 'Đây là lỗi phổ biến nhất của người mới làm điều tra: <b>độ mạnh của bằng chứng không phải một con số, mà là một cặp.</b> Kiểm chứng được bao nhiêu, và liên quan bao nhiêu.' },

    { type: 'rank', tag: 'Bài 3 · Xếp hạng nguồn', skill: 'source',
      q: 'Xếp hạng độ tin cậy của bốn nguồn sau.',
      sub: '1 = đáng tin nhất · 4 = gần như vô giá trị. Có thể trùng hạng nếu bạn biết lý do.',
      items: [
        { t: 'Bản ghi âm gốc trên máy phòng học giáo viên', d: 'Tạo bởi thiết bị, không qua tay ai, ai cũng mở được.' },
        { t: 'Kết quả đối chiếu chữ ký giọng nói với giọng cô Lan', d: 'Phần mềm so khớp mẫu giọng từ các bài giảng đã công bố.' },
        { t: 'Lời khai của cô Lan tại phòng kỹ thuật', d: 'Cô Lan tự kể, có ghi âm, cô ấy có lợi ích liên quan.' },
        { t: 'Video 30 giây do một học sinh ở khác quay, đăng kèm bình luận', d: 'Không rõ quay lúc nào, ở đâu, bằng máy gì.' }
      ],
      order: [1, 2, 3, 4],
      why: [
        'Đây là bằng chứng gốc: do máy tạo ra, không ai kể lại, và đối phương cũng mở được. Hạng 1.',
        'Là bằng chứng suy luận kỹ thuật nhưng dựa trên dữ liệu có thật, kiểm chứng lại được. Hạng 2 — nhưng cần nhớ phần mềm nhận dạng giọng có tỉ lệ nhầm, nên nó là chứng cứ <i>hỗ trợ</i>, không phải chứng cứ <i>quyết định</i>.',
        'Lời khai có giá trị thật, và đặc biệt là phần cô ấy tự thừa nhận quan hệ họ hàng — vì người có lợi ích che giấu thì hiếm khi tự lộ. Nhưng vẫn là lời người, nên cần kiểm chứng chéo. Hạng 3.',
        'Không có mốc thời gian, không có xác thực, lại do người không liên quan đăng để thu hút. Chỉ nên dùng để "dẫn đường tìm bằng chứng khác", không dùng để kết luận. Hạng 4.'
      ],
      teach: 'Thứ tự này không phải luật thiên định, mà là hệ quả của một câu hỏi: <b>"nguồn này sai ở đâu, và ai có lợi ích khi tôi tin sai?"</b> Áp dụng được vào bất kỳ tin tức nào bạn đọc ngày mai.' },

    { type: 'pick', tag: 'Cú điện thoại', skill: 'source', maxPts: 4,
      q: '17:40. Điện thoại reo. Chủ nhiệm Quách gọi từ tầng dưới. Bạn nói gì?',
      sub: 'Ông ta không hỏi tin tốt. Ông ta hỏi để biết bạn đã có gì.',
      correct: 1,
      options: [
        { t: '"Dạ, em đang chờ thầy Tuấn chuyển bản gốc ạ." (không nói gì thêm)',
          score: 2, verdict: 'mid',
          fb: 'An toàn — nhưng tốn một lượt mà không đổi lấy gì. Câu trả lời mơ hồ khiến ông ta phải đoán, và kẻ đang cố biết của bạn luôn hành động khi bị bỏ mặc.',
          teach: 'Chiến thuật tốt: <b>cho đủ để ông ta không thấy mình đang giấu, nhưng không đủ để ông ta biết mình đang biết.</b> "Em đang chờ bản ghi" là câu đúng — nhưng bạn cho ra miễn phí rồi.' },
        { t: '"Cháu nghĩ thầy Tuấn đã có máy chủ lưu toàn bộ phiên họp của phòng giáo viên. Cháu nghĩ vụ này nên xử lý theo quy trình kỷ luật của hội đồng chuyên môn, thầy là người trực tiếp chịu trách nhiệm môn ạ."',
          d: 'Dùng lại chính logic và quyền lực của ông ta.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời ở đẳng cấp cao: nó không phản bác, không đe dọa, nhưng chuyển việc sang đúng kênh và đúng người — và làm nổi bật rằng dữ liệu kỹ thuật tồn tại, đủ để <b>làm ông ta sợ mà không cần nói thẳng</b>. Ông ta sẽ phải đi tìm chỗ xóa dấu, hoặc đi tìm bạn.',
          teach: 'Đây gọi là điều hướng bằng <b>tiền đề quyền lực</b>. Bạn không cãi — bạn đưa ra quy trình mà trong quy trình đó, bạn không cần thắng.' },
        { t: '"Cháu không nói. Thầy tự nghe đi."',
          score: 0, verdict: 'bad',
          fb: 'Thách thức trực tiếp một người có quyền ký kỷ luật. Ông ta không cần trả lời — chỉ cần ghi vào biên bản "BĐT không hợp tác, giữ thái độ thách thức".',
          teach: 'Tranh luận trong điều tra, <b>thái độ là một loại bằng chứng</b>. Người ta đánh giá không chỉ lập luận mà cả cách bạn đối xử với họ. Tranh cãi với người có quyền là tự giao điểm cho họ.' },
        { t: '"Cháu có 47 giây và ba điểm ghép. Thầu muốn nghe chỗ nào trước ạ?"',
          score: 0, trap: 'Tự tạo thêm bằng chứng cho đối phương',
          trapDesc: 'Bạn vừa xác nhận có bằng chứng đáng kể và vừa chỉ ra số lượng. Người đang đi tìm chỗ để phủ nhận sẽ dùng chính thông tin này để biết cần xóa bao nhiêu file.',
          verdict: 'bad',
          fb: 'Bạn vừa cho ông ta biết bạn đang có gì, vừa cho biết bạn đã tiến được bao xa. Người lớn có quyền lực mà cần giấu bằng chứng sẽ rất vui khi biết chỗ cần dọn là ở đâu.',
          teach: 'Nguyên tắc: <b>tiết lộ tiến độ chỉ khi nó giúp bạn</b>. Hỏi trước, hiển thị sau. Trong điều tra, "anh biết nhiều quá" là lỗi chuyên nghiệp nặng nhất.' }
      ] },

    { type: 'narr', tag: '20:05 · Lời cảnh báo', text:
`Bạn vừa tắt điện thoại thì máy nhắn tin của cô Hồng sáng lên:

   "Nghe đây. Thầy Quách vừa họp hội đồng chuyên môn bất thường.
    Có người đề nghị lập hồ sơ kỷ luật cô Lan để 'làm rõ'.
    Họp kết thúc lúc 19:50.

    Bạn có 40 tiếng nữa là mấy lượt thích kia biến thành 100 nghìn.
    Và chỉ một trong hai bên sẽ được nghe.

    Làm sao để cả hai bên đều nghe được — đó là câu hỏi của tối nay.
    Một mình tối nay. Đừng chờ mình."

Bạn nhìn tệp âm thanh. Ba đoạn. Ba câu nói không ai trong đoạn nào hỏi đầy đủ.

Chủ nhiệm Quách nói đúng một điều, nói trong clip mà bạn đã nghe bảy lần:

"tôi không để ai được chạy."

Ông ta không nói dối. Ông ta chỉ nói <em>đúng một nửa</em>.

Và nửa đúng ấy, đủ để làm một người mất tất cả.` },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'source',
      q: 'Nhật ký: bằng chứng nào trong hồ sơ hiện tại đáng tin nhất?',
      sub: 'Và bạn còn thiếu gì để kết luận?',
      prompt: 'Liệt kê 3 bằng chứng bạn đang có. Với mỗi cái, ghi: ai tạo ra / ai có lợi ích / kiểm chứng lại bằng cách nào. Sau đó kết luận: còn thiếu gì?',
      hint: 'Gợi ý: bằng chứng mạnh nhất của bạn lúc này chưa phải bằng chứng về cô Lan. Nó là bằng chứng về <b>cách clip được tạo ra</b>. Nhận ra điều đó là bước đột phá của cả vụ án.' }
  ]

});