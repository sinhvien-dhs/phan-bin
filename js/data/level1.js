/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 1: BÀI CỦA HẢI
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Phân biệt sự thật – ý kiến – giả thuyết
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 1,
  title: 'BÀI CỦA HẢI',
  skill: 'fact',
  skillName: 'Phân biệt sự thật – ý kiến – giả thuyết',
  skillIcon: '🔎',

  steps: [

    { type: 'narr', tag: 'Mở đầu · 07:41 sáng thứ Hai', text:
`Cuối tuần rồi, kết quả bài kiểm tra giữa kỳ môn <em>Vật lý 11</em> được đăng lên nhóm lớp 11A1.

Không phải bảng điểm. Mà là <strong>một bài làm</strong>.

Tân học sinh <em>Đặng Quốc Hải</em> — lớp bạn — đăng ảnh bài làm của mình, kèm dòng hỏi: *"Mọi người nghĩ bài này thế nào?"*

Chính dòng hỏi đó đã biến thành vụ án.

Bình luận nhiều nhất, ghim đầu trang, có <em>213 lượt thích</em> trong một đêm:

   "Bài này chắc chắn AI viết. AI viết văn phong nó thế đấy."

Sáng nay, thầy Tuấn — giáo viên Vật lý, người chấm bài — gọi bạn vào phòng. Sau lưng thầy là Ban Điều tra Sự thật (BĐT), câu lạc bộ trinh thám học đường, và cô Hồng — đội phó — đang khoanh tay trước bàn.

"Hồ sơ 2041," thầy Tuấn nói. "Bài kiểm tra đầu kỳ có bảo vệ, tôi báo trước ban chủ nhiệm. Họp khảo ngày thứ Tư. Có 48 giờ."

"Có bằng chứng nào cho thấy Hải dùng AI không?" bạn hỏi.

"Không," thầy nói thẳng. "Tôi chỉ có cảm giác. Mà cảm giác thì không kỷ luật được ai."

Cô Hồng nhìn bạn:

"Hãy coi như bài Vật lý cuối cùng. Ai cũng biết dùng công cụ gì cũng được. Cái cần biết là: <em>bằng chứng nào chứng minh được, và bằng chứng nào chỉ là cảm giác?</em>"` },

    { type: 'brief', tag: 'Tình huống mở', text:
`Thầy Tuấn mở file bài làm của Hải. Dưới đây là nguyên văn phần trích — không gọt bớt một dòng, kể cả chỗ sai:`,

      task: 'Đọc kỹ. Bài này có những chi tiết rất đáng chú ý — nhưng đáng chú ý KHÔNG đồng nghĩa với bằng chứng.' },

    { type: 'evidence', tag: 'Bằng chứng đầu tiên', prompt:
`Sao lưu vào hồ sơ.

Nhìn nó như một người thẩm phán nhìn tờ giấy: đừng quyết. Hãy <em>liệt kê</em> trước.

Điều gì trong bài khiến bạn nghi? Điều gì trong bài khiến bạn không tin lời đồn? Bạn sẽ ghi lại cả hai.`,

      ev: {
        id: 'E-01',
        title: 'Bài kiểm tra giữa kỳ Vật lý 11 — bài của Hải (nguyên văn)',
        source: 'Ảnh chụp do chính Hải đăng lên nhóm lớp 11A1 lúc 22:15 chủ nhật · 213 lượt thích · 87 bình luận',
        strength: 2,
        text:
`Câu 3. Một vật khối lượng m = 2 kg trượt trên mặt phẳng nghiêng góc nghiêng α = 30°, hệ số ma sát μ = 0,2. Biết g = 9,8 m/s².

Lời giải:

"Lực ma sát đẩy vật lên trên mặt phẳng.
F_ma sát = μ·N = 0,2 × 2 × 9,8 = 3,92 N

Lực hướng tâm theo phương nghiêng:
F_n = m·g·cos α = 2 × 9,8 × cos30° = 16,97 N

Gia tốc theo phương dọc theo mặt phẳng:
a = g(sinα − μcosα) = 9,8(0,5 − 0,2 × 0,866) = 3,21 m/s²

Kết quả: a = 3,21 m/s²

Nhận xét: đây là kết quả chuẩn, hầu như không có lỗi, khác với các bài khác trong lớp."`,

        note: 'Ba điểm đáng chú ý nếu bạn đọc cẩn thận: (1) câu "Lực ma sát <b>đẩy</b> vật <b>lên</b>" — ma sát luôn <b>đối</b> với chuyển động, không đẩy lên bao giờ; (2) dòng cuối tự <b>khẳng định</b> bài của mình "hầu như không có lỗi" — rất lạ; (3) cả lớp 11A1 đều làm bài này, nên câu hỏi là: <b>cả lớp có sai như Hải không?</b>'
      }
    },

    { type: 'interrogate', tag: 'Phỏng vấn', q: 'Phỏng vấn Hải',
      sub: 'Bạn được 4 câu hỏi. Chọn bất cứ câu nào, theo bất kỳ thứ tự nào — nhưng chọn câu bạn thật sự cần.',
      npc: { name: 'Đặng Quốc Hải', role: 'Lớp 11A1 · bị nghi dùng AI làm bài', avatar: '🧑‍🎓' },
      questions: [
        {
          q: 'Bài này làm trong bao lâu? Ở nhà hay ở lớp?',
          tag: 't-echo', tagName: 'Thông tin',
          a: '"Ở nhà. Khoảng bốn mươi phút, tối Chủ nhật. Tại lớp làm ba mươi phút cũng ra, chỉ là không cần.\n\nMà em đăng lên vì em hỏi thật, không phải để khoe. Em bị chê là làm bài khó kiểu không biết xài cái gì.',
          score: 2
        },
        {
          q: 'Trong lúc làm bài này, mở trình duyệt hay điện thoại chưa?',
          tag: 't-ev', tagName: 'Dấu vết thật',
          a: '"Có. Em tra Google để kiểm tra công thức lực ma sát, lúc đầu tiên em nhớ nhầm là F = μ·mg thay vì F = μ·N. Tìm mất bốn phút.\n\nNgoài trình duyệt đó em không mở gì hết. Em nói dối thì tệ lắm, chứ nói dối chuyện này thì em nói được.',
          ev: {
            id: 'E-02', title: 'Lời khai của Hải về nguồn cảm hứng khi làm bài',
            source: 'Phỏng vấn trực tiếp tại phòng giáo viên · BĐT ghi âm · 08:24',
            strength: 2,
            text: 'Hải khai chỉ tra công thức lực ma sát trên Google để sửa nhầm lẫn, mất khoảng 4 phút; không dùng công cụ AI. Thời gian làm bài khoảng 40 phút tại nhà tối Chủ nhật.',
            note: 'Lời khai của người có lợi ích liên quan. Tự thân nó chưa đủ để kết luận — nhưng có một điểm đáng chú ý: Hải không phủ nhận việc mình <i>lợi</i> cho mình khi thú nhận, và người tình cờ sẽ không làm thế. BĐT ghi lại cả hai vì sau này ai cũng cần đọc lại.'
          },
          score: 3
        },
        {
          q: 'Câu "Lực ma sát đẩy vật lên" — bạn viết câu đó là tin AI hay là tin nhầm lẫn?',
          tag: 't-ev', tagName: 'Chuyên môn',
          a: 'Hải nhăn mặt, cầm bài lên đọc lại. "...Em viết vội. Em học năm lớp tám, thầy Đức có dạy ma sát luôn giảm. Nhưng khi làm bài em lại đảo.\n\nEm nghĩ trong đầu là cái gì có ma sát thì giữ lại, không cho trượt xuống. Hóa ra là đẩy. Em tự viết chứ không phải máy. Nếu máy viết thì máy không sai kiểu này — máy sai kiểu sai chứ không sai kiểu lệch tưởng.',
          ev: {
            id: 'E-03', title: 'Lỗi trong bài Hải mang tính "nhầm lẫn của con người", không mang tính "lỗi hệ thống của AI"',
            source: 'Phỏng vấn chuyên môn · đối chiếu bài làm · BĐT',
            strength: 3,
            text:
`Bài của Hải sai ở câu "lực ma sát đẩy vật lên trên mặt phẳng" — một lỗi quên hướng.

Đối chiếu mẫu bài mà trợ lý AI sinh ra cho cùng câu hỏi (lấy 3 bài mẫu đã được lớp lưu lại): cả 3 bản đều viết đúng chiều lực ma sát, nhưng cả 3 bản đều dùng g = 9,81 m/s² — trong khi giáo viên yêu cầu làm tròn g = 9,8.

Nói cách khác: lỗi của Hải ngược hướng với lỗi đặc trưng của AI.`,
            note: 'Đây là phát hiện đầu tiên làm lệch hướng cả vụ án. Nhưng nó chỉ có giá trị nếu bạn nói được: "lỗi đặc trưng của AI là gì?" — nếu không, nó chỉ là một cảm giác. Sẽ phải chứng minh ở Màn 4.'
          },
          score: 4
        },
        {
          q: 'Cả lớp có ai khác bị nói là dùng AI không?',
          tag: 't-risk', tagName: 'Phạm vi',
          a: '"Có. Nhưng không ai nói thẳng. Trong group có mấy đứa hỏi chung: "anh bài này có dùng tool không", mà ai cũng trả lời kiểu lướt qua.\n\nEm không biết ai làm. Em chỉ biết em làm bằng đầu, và em sẵn sàng mở giáo án vỡ ra cho thầy xem — nếu thầy muốn kiểm tra thì kiểm tra, chứ đừng chỉ nghe lời đồn.',
          score: 3
        }
      ]
    },

    { type: 'narr', tag: 'Bài 1', text:
`Bạn ngồi nhìn lại bài làm lần thứ ba. Thầy Tuấn đi vào, đặt cốc trà lên bàn, rồi nói một câu khiến bạn dừng lại:

"Cậu để ý không? Bài này <em>không có lỗi AI nào cả</em>. Nó chỉ có một lỗi của người."

"Thì biết rồi."

"Biết thì nói tôi nghe: một câu năng lực của AI mà chúng ta đang dùng để kết án, <em>chính nó lại không có trong bài này</em>. Cậu nghĩ điều đó nghĩa là gì?"

Cô Hồng không nhắc gì thêm. Cô chỉ đợi.

Đây là bài tập đầu tiên của bạn trong BĐT — và cũng là bài toán mà cả trường đang quên làm mỗi ngày:
<strong>phân loại thứ mình đang đọc.</strong>` },

    { type: 'classify', tag: 'Bài tập phân loại', number: true,
      q: 'Sắp xếp: đâu là SỰ THẬT, đâu là Ý KIẾN, đâu là GIẢ THUYẾT?',
      sub: 'Quy tắc: Sự thật = có thể kiểm chứng bằng quan sát hoặc hồ sơ. Ý kiến = là quan điểm, làm đúng-sai khó gọi tên, chỉ hợp lý hay không hợp lý. Giả thuyết = một cách giải thích tạm thời, chờ bằng chứng sẽ giữ hoặc bác bỏ.',
      options: ['Sự thật', 'Ý kiến', 'Giả thuyết'],
      items: [
        'Bài của Hải có câu ghi sai chiều lực ma sát, và câu đó là do Hải tự viết.',
        'AI viết văn phong "đẹp" và có cấu trúc hoàn chỉnh hơn người, vì vậy bài đẹp là bài của AI.',
        'Có lẽ Hải chỉ dùng AI để giải thích bài khó, chứ không dùng để làm bài.',
        'Bài kiểm tra giữa kỳ có điểm đúng yêu cầu là làm tròn g = 9,8 m/s².',
        'Nếu không có bằng chứng gì trước thứ Tư, Hải sẽ bị ghi điểm 0 bài này.'
      ],
      answer: [0, 1, 2, 0, 2],
      explain: [
        'Có thể kiểm chứng: đọc bài thấy ngay, và hỏi Hải để xác nhận. Đây là loại rõ ràng nhất.',
        'Đây là niềm tin phổ biến nhất về AI — và nó sai về mặt cơ chế. AI thường sinh lỗi hệ thống và ổn định (sai theo một kiểu), còn người thì quên, đảo, hiểu lệch. Chỉ 47 giây nghe đủ để đoán, nhưng không đủ để khẳng định.',
        'Một cách giải thích khả dĩ — chưa có bằng chứng, nhưng hoàn toàn có thể đi kiểm chứng. Nếu giáo án có vết nháp, câu hỏi sẽ được trả lời.',
        'Có trong đề thi và trong phần dữ kiện cho học sinh. Kiểm chứng được → sự thật. Việc Hải dùng g = 9,8 (đúng yêu cầu) trong khi bài mẫu AI dùng 9,81 chính là dấu vết đáng giá nhất trong cả bài.',
        'Dự báo về tương lai, có thể bị bác bỏ bằng một quyết định của hội đồng. Tạm thời xếp vào giả thuyết.'
      ],
      teach: 'Câu hỏi vàng: <b>"Câu này, ai kiểm chứng? Kiểm chứng bằng cách nào?"</b> Trả lời được → sự thật. Không trả lời được mà vẫn khẳng định → bạn đang gặp ý kiến đeo mặt nạ sự thật. Và "tôi nghĩ là…" không bao giờ xấu — xấu là biến nó thành "rõ ràng là".',
      skill: 'fact' },

    { type: 'pick', tag: 'Phân tích bài làm', skill: 'fact',
      q: 'Trong bài của Hải, chi tiết nào đáng nghi nhất — theo tiêu chí kỹ thuật, không theo cảm giác?',
      sub: 'Chọn một đoạn, rồi giải thích bằng lý do của bạn.',
      correct: 2,
      options: [
        { t: '"Nhận xét: đây là kết quả chuẩn, hầu như không có lỗi, khác với các bài khác trong lớp."',
          d: 'Dòng cuối bài — câu tự nhận xét.',
          score: 1, verdict: 'mid',
          fb: 'Câu này <b>rất đáng chú ý</b> về mặt văn phong — một người làm bài thi hiếm khi tự khen mình và so sánh với cả lớp. Nhưng nó cũng rất dễ có ở học sinh tự tin. Nó là manh mối, không phải bằng chứng.',
          teach: 'Văn phong là thứ <b>dễ bị bắt và khó kết luận nhất</b>. Nó khiến mọi người tin ngay, nhưng người khác thì cũng tự tin không kém.' },
        { t: 'Dùng g = 9,8 m/s² — dùng hằng số "tròn".',
          d: 'Hằng số vật lý chọn trong lời giải.',
          score: 1, verdict: 'mid',
          fb: 'Ngược lại — đây là điểm <b>có lợi</b> cho Hải. Đề yêu cầu làm tròn g = 9,8, Hải làm đúng. Bài mẫu do AI sinh ra thường mặc định dùng 9,81 vì đó là giá trị mặc định trong kho dữ liệu.\n\nNhưng khoan — bạn mới hỏi "chi tiết đáng nghi". Câu này lại là chi tiết <b>đáng ngờ</b>. Đó chính là bài học: một số chi tiết dẫn tới giả thuyết, một số chi tiết phá nó.',
          teach: 'Điều tra là đi cả hai chiều. Chi tiết nào <b>ủng hộ</b> giả thuyết cũng phải ghi lại, kẻo lúc viết báo cáo bạn mất đối xứng và không ai tin nổi.' },
        { t: '"Lực ma sát đẩy vật lên trên mặt phẳng."',
          d: 'Mô tả lực ma sát ở đầu lời giải.',
          score: 3, verdict: 'good',
          fb: 'Đây là chi tiết đáng nghi nhất, vì nó lệch với mọi thứ mà chúng ta biết về cách AI "sai".\n\nMa sát luôn <b>đối</b> với chuyển động — đây là định luật, ai học cũng biết. Trợ lý AI sinh lời giải sẽ có thể sai số, sai đơn vị, sai quy ước làm tròn, nhưng rất khó sẽ <b>đảo ngược chiều của một lực cơ bản</b> — vì đó là loại lỗi phải hiểu ngữ cảnh mới sinh ra.\n\nLỗi này là lỗi của một đầu óc đang làm nhanh: em Hải tự nói "em nghĩ trong đầu là cái gì có ma sát thì giữ lại". Đó là logic của <em>người</em>, không phải của máy.',
          teach: 'Nguyên tắc: <b>đừng tìm bằng chứng của cái bạn đang ngờ — hãy tìm dấu vết của cái nó KHÔNG phải.</b> Trong điều tra về AI, sự vắng mặt của một lỗi đặc trưng thường nói nhiều hơn sự hiện diện của nó.' },
        { t: 'Câu 3 là bài tính toán thuần, 4 phút làm được.',
          d: 'Độ khó của câu hỏi.',
          score: 0, verdict: 'bad',
          fb: 'Bạn đang đánh giá độ khó của bài toán — một việc hoàn toàn không liên quan đến việc ai đã viết. Bài dễ hay khó không nói gì về tác giả.\n\nHơn nữa: đây là loại suy luận từ cảm giác ("bài này quá dễ với cấp ba nên chắc chắn AI làm hộ") — chính xác là loại lập luận mà game này dạy bạn nhận ra.',
          teach: 'Câu hỏi đáng hỏi không phải "bài này dễ hay khó", mà là "đặc điểm nào trong bài chỉ có một nguồn gốc mới tạo ra?"' }
      ] },

    { type: 'pick', tag: 'Phát biểu công khai đầu tiên', skill: 'fact',
      q: 'BĐT cần đăng bài đầu tiên lên nhóm lớp trong tối nay. Bạn chọn gì?',
      sub: 'Bạn chưa có kết luận. Bạn có 213 lượt thích đang đợi bạn.',
      correct: 0,
      options: [
        { t: '"Chúng tôi chưa có kết luận. Hiện chúng tôi đang kiểm 3 thứ: lỗi trong bài, lịch sử sử dụng công cụ của bạn Hải, và việc giáo viên đã cho phép dùng gì. Chúng tôi sẽ công bố bằng chứng, không công bố phán đoán."',
          d: 'Công khai ranh giới của điều mình chưa biết.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu mà ít người dám viết. Nó không khoe gì, nhưng nó nói thẳng: BĐT chưa biết gì, và BĐT sẽ nói khi biết.\n\nĐiều quan trọng nhất nó còn làm: nó thừa nhận một khả năng mà không ai trong lớp đang nói tới — <b>giáo viên đã cho phép dùng gì hay không</b>. Đó chính là gốc rễ của vụ án.',
          teach: 'Nghiên cứu về tư duy phản biện gọi đây là <b>thiên lệch đồng cảm</b> (belief bias): người ta phản ứng mạnh với lập luận trái với điều họ tin, độc lập với chất lượng lập luận. Giữ tiêu chuẩn như nhau cho mọi phía — kể cả phía bạn thích — là cách chống lại nó.' },
        { t: '"AI viết bài này. Nhìn văn phong là biết."',
          d: 'Kết luận theo cảm giác, giống bình luận nhiều nhất.',
          score: 0, trap: 'Kết luận từ cảm giác (appeal to vibe)',
          trapDesc: 'Bạn lặp lại đúng lập luận mà bạn vừa được dạy cách kiểm chứng. Và người đọc sẽ tin bạn — rồi sẽ nhớ đó là lời của BĐT, không phải lời của họ.',
          verdict: 'bad',
          fb: 'Bạn chưa kiểm chứng điều gì mà đã đưa ra kết luận. Tệ hơn: 213 lượt thích đã gần như chốt ý kiến trong đầu lớp rồi — bạn chỉ đang cung cấp cho nó một nhãn dán chính thức.\n\nVà bạn vừa dùng đúng cái mà Màn 3 sẽ gọi tên: **kêu gọi cảm giác**.',
          teach: 'Nguyên tắc: <b>đừng đi theo đám đông, kể cả khi đám đông đang đúng.</b> Giá trị của một kết luận không nằm ở việc nó được nhiều người đồng ý, mà ở việc ai cũng kiểm chứng lại được.' },
        { t: '"Hải chắc chắn dùng AI. Bài của cậu ta có cả lỗi lẫn dấu kết như vậy."',
          d: 'Nói thẳng điều mình nghi, kèm lý do.',
          score: 1, verdict: 'mid',
          fb: 'Bạn nói thẳng và có nêu lý do — tốt hơn nhiều so với "văn phong". Nhưng lý do đưa ra <em>không đúng</em>: "cả lỗi lẫn dấu kết như vậy" thực ra là dấu hiệu của bài làm tự tin, không phải của AI.\n\nNói thẳng thì tốt, nói thẳng sai thì tệ hơn im lặng — vì lần sau người ta sẽ không đọc lời bạn nữa.',
          teach: 'Có hai kiểu thành thật: <b>thành thật về điều mình biết</b> và <b>thành thật về điều mình không biết</b>. Chỉ kiểu thứ nhất là thành thật; kiểu thứ hai là nói liễu.' },
        { t: '"Chúng tôi xin mọi người không chia sẻ bài của nhau nữa."',
          d: 'Giảm thiểu lan truyền, không nói gì về nội dung.',
          score: 1, verdict: 'mid',
          fb: 'Không sai, nhưng vô hiệu. Giấu bài không làm sự thật hiện ra; nó chỉ làm sự thật khó kiểm chứng hơn. Bạn cũng đã tự nhận mình không có lập luận để đưa ra.\n\nĐây là một câu trả lời rất phổ biến khi người ta không biết phải nói gì — và người đọc luôn hiểu nó là dấu hiệu của sự im lặng.',
          teach: 'Khi còn chưa biết, cách tốt nhất là nói rõ <b>bạn chưa biết</b> và nói đang làm gì. Im lặng lúc này bị đọc thành đồng lòng với một trong hai phe.' }
      ] },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'fact',
      q: 'Ghi lại bài học đầu tiên của bạn trong BĐT',
      sub: 'Không chấm điểm. Nhưng cuối game bạn sẽ đọc lại chính dòng này.',
      prompt: 'Viết 3 dòng: (1) Trong những gì bạn vừa đọc, cái nào tôi chắc chắn và vì sao? (2) Cái nào tôi chỉ đang đoán? (3) Điều gì tôi cần kiểm chứng trước khi nói bất kỳ ai điều gì?',
      hint: 'Mẹo: dùng ba nhãn <b>Sự thật / Ý kiến / Giả thuyết</b> và gắn từng câu vào một nhãn. Không cần dài — cần thật.' },

    { type: 'narr', tag: 'Kết màn 1', text:
`22:40. Bạn đóng laptop.

Trên nhóm lớp, bài đăng của BĐT có 46 lượt thích — ít hơn hẳn so với bài đăng bắt tội Hải.

Nhưng câu hỏi thật của bạn đêm qua không phải là *"Hải có dùng AI không"*.

Câu hỏi thật là: <strong>AI làm bài vật lý thì sai theo kiểu nào — và bài của Hải sai theo kiểu nào?</strong>

Cô Hồng nhắn cho bạn một tin lúc 23:12:

   "Màn hai. Phòng thí nghiệm máy tính của thầy Tuấn.
    Ở đó có 30 máy, 30 trình duyệt, và dữ liệu truy cập của cả khối Vật lý
    trong ba tháng. Mang tai nghe vào — mà kệ, tai nghe không cần.

    Đi tìm xem: trong lớp có bao nhiêu đứa thực sự mở công cụ AI,
    và chúng nó có giống nhau không."

Bạn nhìn lại bài làm của Hải, và nhận ra một điều:

<strong>Cả lớp 11A1 đều làm bài này. Nhưng chỉ một bài được đăng lên.</strong>` }
  ]

});