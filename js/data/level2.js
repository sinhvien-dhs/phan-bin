/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 2: DẤU VẾT
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Đánh giá bằng chứng & độ tin cậy của nguồn
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 2,
  title: 'DẤU VẾT',
  skill: 'source',
  skillName: 'Đánh giá bằng chứng & độ tin cạy của nguồn',
  skillIcon: '🔗',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Phòng máy, 07:50 sáng', text:
`Phòng máy tầng 2 có 30 chiếc bàn ghế và 30 màn hình tắt ngúm.

Thầy Tuấn đứng ở cửa, tay cầm một tờ giấy in đen trắng.

"Đây là log truy cập của toàn khối Vật lý trong ba tháng," thầy nói. "Ai vào trình duyệt nào, lúc mấy giờ, mở bao lâu rồi đóng. Có lưu hết, không xoá được — máy cài chế độ cho giáo viên chủ nhiệm xem."

"Bao nhiêu máy đã vào công cụ AI trong đêm Chủ nhật?"

"Chín." Thầy nhấp một ngụm. "Cả lớp 11A1 có ba mươi người."

"Chín máy hay chín đứa?"

"Chín máy." Thầy nói chậm. "Và tao không biết chín máy đó thuộc về chín đứa hay một đứa."

Rồi thầy đặt tờ giấy xuống bàn:

"Nhưng trước khi các em đi săn con số này, tao dặn một câu: <em>một cái dấu trong log không phải là bằng chứng. Nó là một nghi ngờ có ngày tháng.</em> Cái các em phải tìm là xem chúng có <b>giống nhau</b> không."` },

    { type: 'narr', tag: 'Bài 1', text:
`Thầy Tuấn bật phần mềm Sóng Phân tích. Trên màn hình, chín dòng dữ liệu hiện lên — mỗi dòng là một phiên truy cập công cụ AI đêm Chủ nhật.

"Nhìn vào cột <b>thời lượng</b> và cột <b>khoảng trống gõ</b>," thầy nói. "Con người gõ chậm và nghỉ. Máy không — nhưng <em>người</em> sao chép thì cũng không, vì họ chỉ bấm dán.\n\nCòn một cột nữa: <b>dấu vết lỗi định dạng</b>. Khi sao chép từ AI sang bài thi, chữ hay bị nhảy, và Word lưu lại những lần thay thế đó. Mỗi lần thay thế là một dấu.\n\nTìm ra chỗ nào giống nhau đi. Bấm vào dòng để đánh dấu. Có ba chỗ, và một chỗ gần như không thấy."` },

    { type: 'wave', tag: 'Bài 1 · Đánh dấu dấu vết', skill: 'source', duration: 47,
      q: 'Bấm vào những điểm mà dữ liệu cho thấy cùng một dấu hiệu.',
      sub: 'Bạn được bắt 3 điểm. Bấm xong bấm "Phân tích xong". Sai cũng được — sai thì biết để tìm lại.',
      cuts: [11.6, 25.4, 37.9], tol: 1.8,
      fb: 'Ba điểm đó là [11.6s], [25.4s] và [37.9s]. Ở mỗi điểm, khoảng thời gian gõ bị giật cụt bất thường và <b>dấu vết thay thế ký tự</b> tăng vọt lên đúng một nhịp — cùng một nhịp ở cả ba chỗ.',
      teach: 'Nguyên tắc kỹ thuật: <b>ba thứ giống nhau đã là một mẫu, hai thứ giống nhau mới là một sự trùng hợp.</b> Điều tra về AI không khác gì điều tra về trộm cắp: bạn không tìm "thằng nào ăn vụng", bạn tìm "dấu vết nào lặp lại quá nhiều lần so với bình thường".',
      fbMid: 'Gần đúng, nhưng một điểm nằm rất sát điểm bạn vừa chọn. Chỗ dễ nhận là chỗ có nhịp rõ, còn chỗ khó là chỗ phản ứng rất nhẹ — và đó mới là chỗ đáng ngờ nhất, vì chỗ không có gì bất thường là chỗ người ta đã cẩn thọ hơn.',
      fbBad: 'Chưa ra. Đừng đọc bằng mắt toàn bộ — hãy nhìn cột thứ ba. Một cái dấu không có nghĩa; mẫu lặp mới có nghĩa.' },

    { type: 'evidence', tag: 'Bằng chứng mới', prompt:
`Thầy Tuấn in ra bảng so sánh.

"Nhìn cột cuối," thầy nói. "Chín máy, chín mẫu lỗi. Bảy trong số chín có cùng một lỗi: <b>dùng g = 9,81</b> — trong khi đề yêu cầu làm tròn g = 9,8.\n\nĐề của thầy nằm ngay trên bảng. Các em nhìn thấy chứ?"

Bạn nhìn thấy. Đề thi viết rõ: *"Cho g = 9,8 m/s²".*

Và trong chín bài bị nghi, bảy bài dùng g = 9,81.

Không một ai trong số đó biết rằng máy của họ đang cho ra con số mà đề thi đã loại trừ.`,

      ev: {
        id: 'E-04',
        title: 'Mẫu lỗi đặc trưng: 7/9 bài dùng g = 9,81 dù đề yêu cầu g = 9,8',
        source: 'Log truy cập phòng máy khối Vật lý · 30 máy · giữ 3 tháng · đối chiếu đề thi giữa kỳ',
        strength: 3,
        text:
`Đề thi giữa kỳ Vật lý 11 ghi rõ: "Cho g = 9,8 m/s²".

Trong 9 máy có truy cập công cụ AI đêm Chủ nhật, bài được tạo ra từ công cụ này có dấu vết "dùng g = 9,81". Đây là giá trị mặc định phổ biến nhất trong kho dữ liệu vật lý, được huấn luyện vào mô hình.

Số bài có dấu vết này trong toàn khối, ở ba tháng trước: 4%. Số bài có dấu vết này trong đêm Chủ nhật: 7/9.`,

        note: 'Đây là bằng chứng <b>trực tiếp</b> — ai cũng tự kiểm chứng lại được trên log và trên đề. Nhớ điều này: bằng chứng mà đối lập cũng chạy lại được thì sẽ khó bị bác bỏ nhất.<br><br>Và lưu ý vế thứ hai: <b>con số 4% là tần suất nền</b>. Không có nó, câu chuyện "bài nào cũng bị dính" sẽ nghe rất thuyết phục. Có nó, câu chuyện trở nên khó bác bỏ.'
      }
    },

    { type: 'interrogate', tag: 'Phỏng vấn', skill: 'source',
      q: 'Phỏng vấn thầy Tuấn',
      sub: 'Thầy là người có log. Nhưng thầy cũng là người vừa ngồi ký kết luận điểm Hải.',
      npc: { name: 'Thầy Bùi Tuấn', role: 'Giáo viên Vật lý 11 · phụ trách phòng máy', avatar: '🧑‍🏫' },
      questions: [
        {
          q: 'Log này ghi ai vào, ghi từ khi nào, ai được xem?',
          tag: 't-ev', tagName: 'Nguồn gốc',
          a: 'Ghi từ tháng 9, mỗi máy một tài khoản riêng do em vay đăng nhập. Tôi và một giáo viên CNTT là người duy nhất xem được toàn bảng. Học sinh xem được lịch sử của chính mình, không xem của nhau.\n\nVà tôi nói thẳng: tôi không xem log này thường xuyên. Tôi mở nó vì hôm nay có nghi vụ.',
          ev: {
            id: 'E-05', title: 'Log truy cập phòng máy — nguồn gốc và phạm vi truy xuất',
            source: 'Cam kết quản trị phòng máy · ký 08:10 · giữ 3 tháng',
            strength: 3,
            text: 'Log ghi nhận truy cập theo tài khoản cá nhân từ tháng 9. Chỉ giáo viên chủ nhiệm và một giáo viên CNTT có quyền xem toàn bộ. Học sinh chỉ xem được lịch sử của chính mình.',
            note: 'Điểm cần ghi vào hồ sơ: <b>giáo viên chủ nhiệm có quyền xem log nhưng chưa từng xem trong quý bình thường</b>. Nếu thầy nói "tôi biết ngay là AI", thì ai cũng phải hỏi: biết bằng cách nào?'
          },
          score: 4
        },
        {
          q: 'Số 9,81 mà thầy nói "là dấu hiệu" — thầy biết từ đâu mà biết con số đó là đặc trưng của AI chứ không phải của học sinh?',
          tag: 't-risk', tagName: 'Cơ sở',
          a: 'Thầy dừng lại. "...Nói thật thì tôi tự nghĩ ra trong lúc chấp nhận bài. Tôi thấy 9,81 loạt một lên rồi hỏi. Tôi không có nguồn nào cả.\n\nNhưng xem — bảng bạn in ra có cột thống kê học kỳ 1. Học kỳ 1 chưa ai dùng AI, không có một bài nào ra 9,81. Nên nó không phải thói quen viết của lớp.',
          ev: {
            id: 'E-06', title: 'Lỗi 9,81 xuất hiện lần đầu đúng đêm Chủ nhật, không có trong dữ liệu học kỳ 1',
            source: 'So sánh bảng điểm Vật lý khối 11 · học kỳ 1 (trước khi lớp dùng công cụ AI)',
            strength: 3,
            text: 'Trong toàn bộ bài kiểm tra Vật lý khối 11 của học kỳ 1 (trước thời điểm công cụ AI được đưa vào sử dụng), không có một bài nào sử dụng g = 9,81. Toàn bộ dùng 9,8 theo đúng đề.',
            note: 'Thầy Tuấn thừa nhận ông tự rút ra kết luận từ trí nhớ chứ không có nguồn. Đây chính là mẫu hành vi phổ biến nhất của giáo viên: <b>kết luận đúng nhưng lý do sai</b>. Một bài có thể kết luận đúng bằng một lý do bậy — và bài đó vẫn cần được sửa.'
          },
          score: 4
        },
        {
          q: 'Có máy nào trong 9 máy đó thuộc về người ngoài lớp 11A1 không?',
          tag: 't-ev', tagName: 'Phạm vi',
          a: '"Có ba. 11A2 có hai, 11A3 có một. Họ làm bài khác nhưng đêm đó cũng vào.\n\nNghĩa là nếu các em chỉ đi tìm trong lớp Hải thì các em sẽ tìm ra một nửa. Nửa kia đang ở lớp bên cạnh, yên lặng hơn nhiều, vì không ai đăng bài của họ lên đâu cả."',
          score: 4
        },
        {
          q: 'Bài của Hải — có máy nào trong log khớp với tài khoản của Hải không?',
          tag: 't-ev', tagName: 'Tập thể bằng chứng',
          a: '"Không. Tôi tra rồi, thẳng, hai lần. Tài khoản của Hải không có lần truy cập nào trong bốn tuần qua — kể cả những lúc cậu ta ở phòng máy.\n\nNói thật thì tôi cũng không thích kết luận này, vì nó cứu một đứa tôi không ưa. Nhưng tôi thấy rồi thì phải nói."',
          ev: {
            id: 'E-07', title: 'Không có lần truy cập công cụ AI nào khớp tài khoản phòng máy của Hải trong 4 tuần',
            source: 'Log phòng máy · đối chiếu tài khoản cá nhân · 08:44',
            strength: 3,
            text: 'Tài khoản phòng máy mang tên Hải không ghi nhận lần truy cập công cụ AI nào trong 4 tuần gần nhất, dù học sinh này là thành viên phòng máy và có lịch sử sử dụng bình thường.',
            note: 'Giới hạn cần nói thẳng: <b>học sinh có thể dùng điện thoại, không dùng phòng máy.</b> Vậy nên bằng chứng này không "loại trừ" Hải — nó chỉ làm yếu đi giả thuyết "Hải sao chép từ công cụ AI trong phòng máy", và để ngỏ mọi khả năng khác. Viết câu này vào báo cáo là chính xác; bỏ mất nó thì báo cáo của bạn sẽ bị bác.'
          },
          score: 3
        }
      ]
    },

    { type: 'chart', tag: 'Bài 2 · Đọc số liệu', skill: 'source',
      q: 'Cô Hồng đưa bạn bảng cô Hồng tự dựng tối qua. Biểu đồ dưới đây xếp hạng 5 nguồn chứng cứ.',
      sub: 'Chọn nhận xét đúng nhất về cách bảng này được dựng.',
      chart: {
        kind: 'bar', title: 'Xếp hạng độ tin cậy ban đầu (thang 1–3)',
        sub: 'Thang: 3 = mạnh, 2 = khá, 1 = yếu. Đánh giá tạm, dựa trên cảm tính ban đầu của BĐT.',
        unit: '',
        data: [
          { label: 'Bài thi bị đăng', value: 2 },
          { label: 'Lời khai của Hải', value: 2 },
          { label: 'Bài có dùng g = 9,81', value: 3, ok: false },
          { label: 'Lưu lượng bình luận', value: 1 },
          { label: 'Log phòng máy', value: 3 }
        ],
        foot: '▲ = đang tô đậm'
      },
      options: [
        { t: 'Bảng đang xếp theo "dễ kiểm chứng", nên dấu vết g = 9,81 bị chấm 3 dù nó chỉ nói về 7 bài khác, không nói về bài của Hải.',
          score: 3, verdict: 'good',
          fb: 'Đúng. Một bằng chứng có 2 phần: <b>độ kiểm chứng được</b> và <b>mức độ liên quan</b> đến điều đang cần chứng minh. Dấu vết 9,81 kiểm chứng được dễ dàng — nhưng nó trả lời câu hỏi "cả khối có dùng AI không", chứ không trả lời "Hải có dùng không".\n\nNếu tách hai trục, bằng chứng mạnh nhất là giao điểm <b>"kiểm chứng được" ∩ "liên quan"</b>. Bằng chứng chỉ mạnh một chiều thì phải dùng cẩn thận.',
          teach: 'Rất dễ nhầm lẫn: bằng chứng rất mạnh về một câu hỏi này lại <em>không liên quan gì</em> tới câu hỏi đang đặt ra. Đừng để bằng chứng tốt kéo bạn sang kết luận không liên quan.' },
        { t: 'Bảng xếp sai hoàn toàn, phải bỏ hết đi làm lại từ đầu.',
          score: 0, verdict: 'bad',
          fb: 'Bỏ hết là phản ứng của người bực, không phải của người phân tích. Bảng chỉ sai ở một chỗ; các ô còn lại vẫn dùng được. Xếp hạng tệ còn hữu ích hơn không xếp hạng gì — nó buộc cả nhóm nói ra lý do, mà lý do mới là thứ tao được bảo vệ.',
          teach: 'Nguyên tắc: <b>sửa từng ô, đừng xoá cả bảng.</b> Khi bạn đổi toàn bộ, bạn mất luôn dấu vết của việc mình đã nghĩ gì.' },
        { t: 'Bảng này ổn vì đã có con số từ 1 đến 3 rõ ràng.',
          score: 0, verdict: 'bad',
          fb: 'Có số thứ không có nghĩa là có cơ sở. Ở đây bạn đã xếp mà không nói vì sao — và chính cái việc xếp "bài có dùng g = 9,81" lên điểm 3 là bằng chứng cho việc con số 3 có thể đặt nhầm chỗ. Nếu không giải thích tiêu chí, bảng chỉ là một danh sách xếp hạng bịa.',
          teach: 'Luôn đặt câu hỏi: <b>"con số này dùng tiêu chí nào để mà ra?"</b> Không trả lời được thì đó không phải dữ liệu, đó là cảm xúc có số trên.' },
        { t: 'Nên bỏ luôn các nguồn đến từ người quen Hải vì BĐT không khách quan.',
          score: 1, verdict: 'mid',
          fb: 'Ý tưởng "phải khách quan" đúng, nhưng cách làm thì sai: bỏ nguồn là <b>loại thông tin</b>, không phải loại thiên lệch. Lời khai của Hải vẫn phải vào hồ sơ — chính vì nó chứa cả thông tin bất lợi cho Hải (anh ấy tra cả Google). Cách đúng là ghi rõ ai đã khai, và đánh giá nó cùng tiêu chí với mọi thứ khác.',
          teach: 'Khi loại một nguồn, luôn hỏi: <b>mình đang loại thông tin hay đang loại nhận thức của mình?</b> Trong điều tra, gần như luôn là cái thứ hai.' }
      ],
      correct: 0,
      teach: 'Đây là lỗi phổ biến nhất của người mới làm điều tra: <b>độ mạnh của bằng chứng không phải một con số, mà là một cặp.</b> Kiểm chứng được bao nhiêu, và liên quan bao nhiêu.' },

    { type: 'rank', tag: 'Bài 3 · Xếp hạng chứng cứ', skill: 'source',
      q: 'Xếp hạng độ tin cậy của bốn chứng cứ sau.',
      sub: '1 = đáng tin nhất · 4 = gần như vô giá trị.',
      items: [
        { t: 'Log phòng máy — dữ liệu hệ thống tạo ra, có chữ ký số, mở ra kiểm chứng lại được', d: 'Không do ai kể lại.' },
        { t: 'Ảnh chụp bài làm do chính Hải đăng lên nhóm lớp', d: 'Có thể chỉnh sửa trước khi đăng.' },
        { t: 'Lời khai của Hải tại phòng giáo viên', d: 'Có ghi âm, nhưng Hải là người có lợi ích trực tiếp.' },
        { t: 'Video 40 giây do một học sinh lớp khác quay, đăng kèm bình luận', d: 'Không rõ quay lúc nào, ở đâu, bằng máy gì.' }
      ],
      order: [1, 2, 3, 4],
      why: [
        'Do hệ thống tạo ra, không qua tay ai, và giáo viên CNTT kiểm tra lại bất kỳ lúc nào. Hạng 1.',
        'Có thể bị chỉnh sửa trước khi đăng — nhưng nội dung của nó khớp với bài gốc nộp giáo viên, nên vẫn là chứng cứ. Hạng 2.',
        'Lời khai có giá trị thật, và đặc biệt là phần Hải tự thừa nhận mình đã mở Google — người có lợi ích che giấu thì hiếm khi tự lộ. Nhưng vẫn là lời người, nên cần kiểm chứng chéo. Hạng 3.',
        'Không có mốc thời gian, không xác thực, lại do người không liên quan đăng để thu hút. Chỉ nên dùng để "dẫn đường tìm bằng chứng khác". Hạng 4.'
      ],
      teach: 'Thứ tự này không phải luật thiên định, mà là hệ quả của một câu hỏi: <b>"nguồn này sai ở đâu, và ai có lợi ích khi tôi tin sai?"</b> Áp dụng được vào bất kỳ tin tức nào bạn đọc ngày mai.' },

    { type: 'pick', tag: 'Cú điện thoại', skill: 'source',
      q: '17:40. Điện thoại reo. Chủ nhiệm khối Vật lý gọi từ tầng dưới. Bạn nói gì?',
      sub: 'Ông ta không hỏi tin tốt. Ông ta hỏi để biết bạn đã có gì.',
      correct: 1,
      options: [
        { t: '"Dạ, em đang chờ thầy Tuấn chuyển bản log mới ạ." (không nói gì thêm)',
          score: 2, verdict: 'mid',
          fb: 'An toàn — nhưng tốn một lượt mà không đổi lấy gì. Câu trả lời mơ hồ khiến ông ta phải đoán, và kẻ đang cố biết của bạn luôn hành động khi bị bỏ mặc.',
          teach: 'Chiến thuật tốt: <b>cho đủ để ông ta không thấy mình đang giấu, nhưng không đủ để ông ta biết mình đang biết.</b> "Em đang chờ bản ghi" là câu đúng — nhưng bạn cho ra miễn phí rồi.' },
        { t: '"Cháu nghĩ vụ này nên xử lý theo quy trình của hội đồng chuyên môn, thầy là người trực tiếp chấm bài ạ. Và cháu nghĩ lần đầu nên ghi lại chính xác quy chế lớp cho phép dùng công cụ gì — vì hiện tại ai cũng đang nói theo cảm tính."',
          d: 'Chuyển sang đúng kênh và đúng người, đồng thời đặt lại gốc vụ án.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời ở đẳng cấp cao: nó không phản bác, không đe dọa, nhưng chuyển việc sang đúng kênh — và làm nổi bật một điều mà chưa ai trong hội đồng nói ra: <b>quy chế chưa rõ</b>.\n\nCâu đó làm ông ta phải đi tìm chỗ xóa dấu, hoặc đi tìm bạn. Và nó đặt sẵn khung để cả vụ án xoay quanh việc thiết kế quy chế thay vì xoay quanh một học sinh.',
          teach: 'Đây gọi là điều hướng bằng <b>tiền đề quyền lực</b>. Bạn không cãi — bạn đưa ra quy trình mà trong quy trình đó, bạn không cần thắng.' },
        { t: '"Cháu không nói. Thầu tự xem log đi."',
          score: 0, verdict: 'bad',
          fb: 'Thách thức trực tiếp một người có quyền ký kỷ luật. Ông ta không cần trả lời — chỉ cần ghi vào biên bản "BĐT không hợp tác, giữ thái độ thách thức".',
          teach: 'Tranh luận trong điều tra, <b>thái độ là một loại bằng chứng</b>. Người ta đánh giá không chỉ lập luận mà cả cách bạn đối xử với họ.' },
        { t: '"Cháu có log của chín máy và bảy bài cùng dùng g = 9,81. Thầu muốn nghe máy nào trước ạ?"',
          score: 0, trap: 'Tự tạo thêm bằng chứng cho đối phương',
          trapDesc: 'Bạn vừa xác nhận có bằng chứng đáng kể và vừa cho biết bạn đã tiến được bao xa. Người có quyền lực mà cần giấu bằng chứng sẽ rất vui khi biết chỗ cần dọn là ở đâu.',
          verdict: 'bad',
          fb: 'Bạn vừa cho ông ta biết bạn đang có gì, vừa cho biết bạn đã tiến được bao xa. Người lớn có quyền lực mà cần giấu bằng chứng sẽ rất vui khi biết chỗ cần dọn là ở đâu.\n\nVà mệt một lần nữa: chín máy là của khối, không phải của Hải. Bạn vừa trao cho đối thủ một bằng chứng đáng kể chỉ để đổi lấy một câu trả lời mà hắn cũng không biết.',
          teach: 'Nguyên tắc: <b>tiết lộ tiến độ chỉ khi nó giúp bạn.</b> Hỏi trước, hiển thị sau. Trong điều tra, "anh biết nhiều quá" là lỗi chuyên nghiệp nặng nhất.' }
      ],
      maxPts: 4 },

    { type: 'narr', tag: '20:05 · Lời cảnh báo', text:
`Bạn vừa tắt điện thoại thì máy nhắn tin của cô Hồng sáng lên:

   "Nghe đây. Tối nay khối Vật lý họp bất thường.
    Có người đề nghị đình chỉ Hải và cho 0 điểm để 'tạo tiền lệ'.
    Họp kết thúc lúc 19:50.

    213 lượt thích đó em, nhưng nó không phải 213 lượt thích.
    Nó là 213 người đã kết luận trước khi có ai kiểm tra gì.

    Làm sao để khi bối cảnh đổi — và nó chắc chắn sẽ đổi — thì lập luận của các em vẫn đứng vững.
    Một mình tối nay. Đừng chờ mình."

Bạn nhìn bảng so sánh. Bảy bài có dấu vết 9,81. Chín máy truy cập. Một đứa không có dấu vết nào.

Và bạn tự nhận ra điều khó chịu nhất:

<strong>Những gì bạn vừa tìm ra, không hề nói gì đến Hải. Nó nói về cả khối Vật lý — và về chính quy chế mà thầy Tuấn chưa từng ban hành.</strong>` },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'source',
      q: 'Nhật ký: bằng chứng nào trong hồ sơ hiện tại đáng tin nhất?',
      sub: 'Và bạn còn thiếu gì để kết luận về Hải?',
      prompt: 'Liệt kê 3 bằng chứng bạn đang có. Với mỗi cái, ghi: ai tạo ra / ai có lợi ích / kiểm chứng lại bằng cách nào. Sau đó kết luận: còn thiếu gì?',
      hint: 'Gợi ý: bằng chứng mạnh nhất của bạn lúc này không phải bằng chứng về Hải. Nó là bằng chứng về <b>cách trường này đang dùng AI mà không có quy chế</b>. Nhận ra điều đó là bước đột phá của cả vụ án.' }
  ]

});