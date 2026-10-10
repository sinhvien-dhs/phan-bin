/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 1: 47 GIÂY
   Kỹ năng: Phân biệt sự thật – ý kiến – giả thuyết
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 1,
  title: '47 GIÂY',
  skill: 'fact',
  skillName: 'Phân biệt sự thật – ý kiến – giả thuyết',
  skillIcon: '🔎',

  steps: [

    { type: 'narr', tag: 'Mở đầu · 21:14 đêm qua', text:
`Đêm qua lúc 21:14, một tệp âm thanh dài 47 giây xuất hiện trên diễn đàn "Sóng Trường".

Tệp do tài khoản ẩn danh <em>minh_chung_that</em> đăng. Sau 12 tiếng: <em>4.213 lượt thích</em>.

Bình luận nhiều nhất, ghim đầu trang, chỉ trong 3 giờ:

   "Gian lận là mất dạng. Kỷ luật thẳng."

Sáng nay, trước giờ học, thầy Bùi Tuấn — thủ phòng IT — gọi bạn vào phòng kỹ thuật. Sau lưng thầy là Ban Điều tra Sự thật (BĐT), câu lạc bộ trinh thám học đường, và cô Hồng — đội phó — đang khoanh tay trước bàn.

"Hồ sơ 2041," cô Hồng nói. "Bảng tin thứ Hai. Có 48 giờ. Chứng minh cô Lan vô tội — hoặc không."

"Chứng minh bằng cách nào thì chính bạn phải nghĩ ra," thầy Tuấn thêm. "Có mấy thứ trong phòng này không đúng như nó trông đấy."` },

    { type: 'brief', tag: 'Tình huống mở', text:
`Bạn đeo tai nghe, bấm nút phát.

Đây là toàn bộ 47 giây, nguyên văn, không lấy bớt một chữ:`,

      task: 'Nghe và đọc kỹ. Bạn sẽ cần phân biệt được chỗ nào là dữ kiện, chỗ nào là ai đó đang suy diễn.' },

    { type: 'evidence', tag: 'Tệp bằng chứng đầu tiên', prompt:
`Sao chép tệp vào hồ sơ. Ghi nhớ: bất kỳ ai buộc tội ai đó từ đây cũng phải bắt đầu bằng 47 giây này.

Nếu đây không phải sự thật thì mọi thứ xây trên nó cũng đổ.`,

      ev: {
        id: 'E-01',
        title: 'Âm thanh "Sự kiện 2041" — 47 giây',
        source: 'Diễn đàn Sóng Trường · tài khoản @minh_chung_that · đăng 21:14 · 4.213 lượt thích',
        strength: 2,
        text:
`[0:00] "... buổi họp hôm nay ai cũng biết rồi, tôi không nói nhiều."
[0:06] [tiếng thở]
[0:08] "... nói thật, cổ vẫn nghi ngờ từ hồi giữa kỳ. Có ai đó nên hỏi lại đi."
[0:17] [tiếng ghế kéo]
[0:19] "... ai hỏi tôi xem bài của ai? Ừ, thì tôi đã xem bài của Hạnh. Tôi xem để biết mà còn đối chiếu với đáp án."
[0:29] [tiếng ghế, tiếng cửa đóng]
[0:31] "... thôi, tôi nói nhiều rồi. Các anh chị tự quyết định."
[0:38] "... nhưng tôi khẳng định một điều: kỳ này điểm số này, tôi không để ai được chạy."
[0:47] — hết —`,
        note: 'Ba chỗ có tiếng động lạ: 0:06 (thở), 0:17 và 0:29 (ghế kéo, cửa đóng). Tiếng ghế ở hai thời điểm khác nhau giống nhau đến mức gần giống như được cắt từ cùng một nguồn.'
      }
    },

    { type: 'interrogate', tag: 'Phỏng vấn', q: 'Phỏng vấn cô Lan',
      sub: 'Bạn được 4 câu hỏi. Chọn bất cứ câu nào, theo bất kỳ thứ tự nào — nhưng chọn câu bạn thật sự cần.',
      npc: { name: 'Cô Lan Nguyễn', role: 'Giáo viên Toán 10 · 17 năm trường', avatar: '👩‍🏫' },
      questions: [
        {
          q: 'Buổi họp đó diễn ra lúc mấy giờ, ai có mặt?',
          tag: 't-ev', tagName: 'Sự kiện',
          a: 'Hai mươi giờ bốn mươi phút, tối thứ Tư. Hội nghị đầu học kỳ, phòng học giáo viên. Có mình, cô Hồng, thầy Tuấn và thầy Quách. Bốn người, không hơn.',
          score: 2
        },
        {
          q: 'Câu "cổ vẫn nghi ngờ từ hồi giữa kỳ" — "cổ" là ai, nghi ngờ chuyện gì?',
          tag: 't-ev', tagName: 'Bằng chứng',
          a: 'Họ trong trường gọi tôi là "cổ" cả mấy năm nay rồi. Nhưng ý ở đoạn đó… không phải Hạnh. Nó là vụ tháng Năm ngoái, lớp 10A3. Cái đó đã xử xong từ lâu, có biên bản, có kết luận đầy đủ.\n\nTôi nói thật, tôi cũng ngạc nhiên khi nghe đoạn đó. Tôi không biết mình đã nói câu đó ở đâu.',
          ev: {
            id: 'E-02', title: 'Lời khai của cô Lan về câu "cổ vẫn nghi ngờ"',
            source: 'Phỏng vấn trực tiếp · BĐT ghi âm · 09:12',
            strength: 2,
            text: 'Cô Lan khẳng định "cổ vẫn nghi ngờ từ hồi giữa kỳ" nói về vụ 10A3 tháng Năm ngoái, đã xử xong có biên bản — không phải vụ của Hạnh. Cô Lan cho biết bản thân cũng không biết mình đã nói câu đó.',
            note: 'Đây là lời khai của người có lợi ích liên quan. Tự thân nó chưa đủ để kết luận — cần đối chiếu với biên bản tháng Năm và lịch sử họp.'
          },
          score: 3
        },
        {
          q: 'Vì sao cô xem bài của Hạnh? Người khác sẽ hỏi điều này, nên tôi hỏi trước.',
          tag: 't-risk', tagName: 'Xung đột lợi ích',
          a: 'Hạnh là em họ của cháu tôi. Cháu tôi thấy bài làm được trừ hai điểm ở câu bốn, thắc mắc nên gọi hỏi. Tôi xem để giải thích vì sao trừ, không phải để biết trước đáp án — cháu tôi làm bài từ 21 giờ, xem trước là vô nghĩa.\n\nTôi biết câu này nghe không đẹp. Nhưng nếu tôi giấu đi thì lúc nào người ta cũng tìm ra, và lúc đó tôi mới thật sự hỏng.',
          ev: {
            id: 'E-03', title: 'Xung đột lợi ích: cô Lan và Hạnh có quan hệ họ hàng',
            source: 'Phỏng vấn trực tiếp · BĐT ghi âm · 09:18',
            strength: 3,
            text: 'Cô Lan thừa nhận Hạnh là em họ. Cô xem bài trước để giải thích lý do trừ điểm cho cháu trai, không phải để nắm trước đáp án.',
            note: 'Mình nói thật vậy, mình nói cho nghe thôi — nhưng BĐT ghi lại. Ghi lại đúng những gì người ta khai, kể cả khi nó bất lợi cho chính người khai. Đây là mấu chốt để sau này ai cũng tin được hồ sơ của bạn.'
          },
          score: 4
        },
        {
          q: 'Có ai ghi âm buổi họp đó không?',
          tag: 't-echo', tagName: 'Thông tin',
          a: 'Không. Tôi còn nhớ, hôm đó thầy Tuấn đặt máy ghi âm trên bàn rồi lấy đi — nói là pin. Máy đó vẫn ở phòng kỹ thuật, các em cứ hỏi thầy ấy.',
          score: 2
        }
      ]
    },

    { type: 'narr', tag: 'Sự im lặng sau phòng kỹ thuật', text:
`Bạn ngồi nhìn lại 47 giây lần thứ ba. Thầy Tuấn đi vào, đặt cốc trà lên bàn, rồi nói một câu khiến bạn phải dừng lại:

"Cậu có chú ý không? Câu nào trong clip đó giống một lời trả lời mà không có câu hỏi nào đứng trước?"

Cô Hồng nhìn bạn. Cô không nhắc gì thêm. Cô chỉ đợi.

Đây là bài tập đầu tiên của bạn trong BĐT — và cũng là bài toán mà cả trường đang quên làm mỗi ngày:
<strong>phân loại thứ mình đang đọc.</strong>` },

    { type: 'classify', tag: 'Bài tập phân loại', number: true,
      q: 'Sắp xếp: đâu là SỰ THẬT, đâu là Ý KIẾN, đâu là GIẢ THUYẾT?',
      sub: 'Quy tắc: Sự thật = có thể kiểm chứng bằng quan sát hoặc hồ sơ. Ý kiến = là quan điểm, làm đúng-sai khó gọi tên, chỉ hợp lý hay không hợp lý. Giả thuyết = một cách giải thích tạm thời, chờ bằng chứng sẽ giữ hoặc bác bỏ.',
      options: ['Sự thật', 'Ý kiến', 'Giả thuyết'],
      items: [
        'Tệp "sự kiện 2041.wav" dài đúng 47 giây và được đăng lúc 21:14.',
        'Cô Lan là người đáng ngờ nhất trong vụ này.',
        'Có ai đó đã ghép đoạn này từ hai hoặc nhiều cuộc họp khác nhau.',
        'Cô Lan có quan hệ họ hàng với Hạnh.',
        'Nếu không tìm được bằng chứng nào khác trước Chủ nhật, Hạnh sẽ bị gạch khỏi bảng thành tích.'
      ],
      answer: [0, 1, 2, 0, 2],
      explain: [
        'Kiểm chứng được ngay bằng tệp và giờ đăng. Đây là loại rõ ràng nhất.',
        'Là quan điểm của người nói, dựa trên 47 giây nghe được. Không thể kiểm chứng, chỉ có thể bàn về sức nặng của nó.',
        'Một cách giải thích khả dĩ — chưa có bằng chứng, nhưng có thể đi kiểm chứng. Nếu tìm ra tiếng ghế giống hệt nhau ở hai chỗ thì nó thành sự thật.',
        'Quan hệ họ hàng có trong hồ sơ nhân sự và trong lời khai. Kiểm chứng được → sự thật. Nó không đáng mừng, nhưng nó là thật.',
        'Dự báo về tương lai, có thể bị bác bỏ bằng một quyết định của nhà trường. Tạm thời xếp vào giả thuyết.'
      ],
      teach: 'Câu hỏi vàng: <b>"Câu này, ai kiểm chứng? Kiểm chứng bằng cách nào?"</b> Trả lời được → sự thật. Không trả lời được mà vẫn khẳng định → bạn đang gặp ý kiến đeo mặt nạ sự thật. Và "tôi nghĩ là…" không bao giờ xấu — xấu là biến nó thành "rõ ràng là".',
      skill: 'fact' },

    { type: 'pick', tag: 'Phân tích clip', skill: 'fact',
      q: 'Trong 47 giây, đoạn nào dễ bị hiểu sai nhất?',
      sub: 'Chọn một đoạn, rồi giải thích bằng lý do của bạn.',
      correct: 0,
      options: [
        { t: '"... ai hỏi tôi xem bài của ai? Ừ, thì tôi đã xem bài của Hạnh."',
          d: 'Đoạn 0:19 — có cả câu hỏi lẫn câu trả lời trong nó.',
          score: 3, verdict: 'good',
          fb: 'Chính xác. Đây là một CÂU HỎI và một CÂU TRẢ LỜI nằm cạnh nhau. Khi khớp vào, người nghe chỉ nghe thấy phần trả lời — và một câu trả lời trung thực bỗng biến thành lời tự thú. Không có ai thay đổi lời nào, chỉ có ai đó bỏ đi nửa câu.',
          teach: 'Nguyên tắc: <b>ngữ cảnh là một phần của bằng chứng.</b> Một câu trích dẫn thiếu câu hỏi đứng trước, hoặc thiếu câu hỏi đứng sau, không còn là câu trích dẫn — nó là một lập luận bịa ra.' },
        { t: '"... nhưng tôi khẳng định một điều: tôi không để ai được chạy."',
          d: 'Đoạn 0:38 — nghe rất giống lời xác nhận có gian lận.',
          score: 1, verdict: 'mid',
          fb: 'Câu này nghe đáng nghi thật. Nhưng nó là <b>thông báo chính sách</b> ("không ai được chạy"), chứ không phải thông báo kết quả ("ai đã chạy"). Chính câu này lại là câu bảo vệ cô ấy — và cũng là câu khiến cô bị nghi ngờ.',
          teach: 'Một thông báo trung thực đôi khi nghe như lời buộc tội. Đừng dừng lại ở cảm giác — hỏi: <b>câu này trả lời câu hỏi nào?</b>' },
        { t: '"... thôi, tôi nói nhiều rồi. Các anh chị tự quyết định."',
          d: 'Đoạn 0:31 — nghe như giấu chuyện.',
          score: 1, verdict: 'mid',
          fb: 'Rất dễ hiểu nhầm thành "tôi không dám nói". Nhưng trong đội học sinh, "các anh chị tự quyết định" là câu kết của người đang nhường quyền quyết định cho người lớn — đúng vai đội phó trưởng khoa.',
          teach: 'Ngôn ngữ nghề nghiệp và ngôn ngữ gia đình dùng chung nhiều nghĩa. Đọc một câu mà không biết ai đang nói và đang nói với ai, thì đọc sai là mặc định.' },
        { t: '"... buổi họp hôm nay ai cũng biết rồi."',
          d: 'Đoạn 0:00 — nghe như giấu một bí mật lớn.',
          score: 0, verdict: 'bad',
          fb: 'Câu mở đầu này không đáng ngờ bằng hai câu kia. Nó chỉ là câu chuyện về bối cảnh họp, và "buổi họp hôm nay" chính là manh mối bạn cần — nhưng không phải vì nó đáng ngờ, mà vì nó chỉ ra <b>thời điểm</b> để đối chiếu với lịch.',
          teach: 'Đừng dồn cảm giác nghi ngờ vào câu đầu tiên nghe thấy. Câu đầu tiên thường là câu dẫn nhập, ít giá trị phát hiện nhất.' }
      ] },

    { type: 'pick', tag: 'Phát biểu công khai đầu tiên', skill: 'fact', maxPts: 4,
      q: 'BĐT cần đăng bài đầu tiên lên Sóng Trường trong tối nay. Bạn chọn gì?',
      sub: 'Bạn chưa có kết luận. Bạn có 4.213 lượt thích đang đợi bạn.',
      correct: 0,
      options: [
        { t: '"Chúng tôi chưa có kết luận. Hiện chúng tôi đang kiểm ba điểm trong clip. Chúng tôi sẽ công bố bằng chứng, không công bố phán đoán."',
          d: 'Công khai ranh giới của điều mình chưa biết.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu mà ít người dám viết. Nó không khoe gì, nhưng nó lấy lại quyền kể chuyện từ diễn đàn — và quan trọng hơn, nó <b>bảo vệ chính cô Lan khỏi mặc định mà đôi khi còn tệ hơn cáo buộc</b>: mặc định là "giáo viên thì không sai bao giờ".',
          teach: 'Nghiên cứu về tư duy phản biện gọi đây là <b>thiên lệch đồng cảm</b> (belief bias): người ta phản ứng mạnh với lập luận trái với điều họ tin, độc lập với chất lượng lập luận. Giữ tiêu chuẩn như nhau cho mọi phía — kể cả phía bạn thích — là cách chống lại nó.' },
        { t: '"Cô Lan là giáo viên 17 năm. Chắc không gian lận bài thi đâu."',
          d: 'Dựa vào uy tín và kinh nghiệm.',
          score: 1, verdict: 'mid',
          fb: 'Đây là <b>kêu gọi uy tín</b> (appeal to authority) — và nó không sai về mặt sự thật, chỉ sai về mặt luận lý. Chủ nhiệm Quách cũng 15 năm, cũng không ai bảo ông không làm gì sai.\n\nBạn vừa lập luận "người giỏi thì không sai" trong đúng vụ việc người đó bị nghi. Nghịch lý là bạn đang bảo vệ cô ấy bằng đúng lập luận mà dân mạng đang dùng để công kích cô ấy.',
          teach: 'Thay bằng gì? "Cô Lan có 17 năm kinh nghiệm và trong học kỳ này chưa có khiếu nại chính thức nào về điểm số của cô." — kiểm chứng được, và không cần đoán ý ai.' },
        { t: '"Clip cho thấy cô Lan đang cố tình bịa đặt để vuốt nhẹ cho em gái họ xa."',
          d: 'Đánh mạnh, dễ viral.',
          score: -2, trap: 'Phá huỷ giả thuyết trước khi kiểm chứng (poisoning the well)',
          trapDesc: 'Bạn chưa kiểm chứng điều gì cả mà đã kết luận có dự định. Người đọc sẽ tin điều đó và mọi bằng chứng sau này của bạn đều bị coi là cố nói ngược.',
          verdict: 'bad',
          fb: 'Câu này có ba lỗi xếp chồng nhau. <b>Một:</b> bạn gán ý định cho cô ấy trước khi có bằng chứng nào về ý định. <b>Hai:</b> "vuốt nhẹ cho em gái" là câu chuyện bạn tự dựng. <b>Ba:</b> đây chính là lập luận của đám đông, chỉ được viết lại hay hơn — nên nó không thuyết phục ai ngoài nhóm đã đồng ý.',
          teach: 'Nguyên tắc: <b>đừng bắt đầu bằng việc chỉ tội.</b> Hãy bắt đầu bằng việc tìm cái gì đang sai trong bằng chứng. Tội phạm chưa ai chứng minh được mà bạn đã kết án — đó không phải phản biện, đó là đồn đoại có áo khoác học thuật.' },
        { t: '"Chúng tôi xin mọi người không chia sẻ thêm clip nữa."',
          d: 'Giảm thiểu lan truyền, không nói gì về nội dung.',
          score: 1, verdict: 'mid',
          fb: 'Không sai, nhưng vô hiệu. Xóa clip không làm sự thật hiện ra; nó chỉ làm sự thật khó kiểm chứng hơn. Bạn cũng đã tự nhận mình không có lập luận để đưa ra.',
          teach: 'Khi còn chưa biết, cách tốt nhất là nói rõ <b>bạn chưa biết</b> và nói đang làm gì. Im lặng lúc này bị đọc thành đồng lòng với một trong hai phe.' }
      ] },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'fact',
      q: 'Ghi lại bài học đầu tiên của bạn trong BĐT',
      sub: 'Không chấm điểm. Nhưng cuối game bạn sẽ đọc lại chính dòng này.',
      prompt: 'Viết 3 dòng: (1) Trong 5 câu thông tin bạn vừa đọc, câu nào tôi chắc chắn và vì sao? (2) Câu nào tôi chỉ đang đoán? (3) Điều gì tôi cần kiểm chứng trước khi nói bất kỳ ai điều gì?',
      hint: 'Mẹo: dùng ba nhãn <b>Sự thật / Ý kiến / Giả thuyết</b> và gắn từng câu vào một nhãn. Không cần dài — cần thật.' },

    { type: 'narr', tag: 'Kết màn 1', text:
`11 giờ đêm. Bạn đóng laptop.

Trên diễn đàn, bài đăng của BĐT có 460 lượt thích và 89 bình luận — nhiều trong số đó vẫn nghĩ bạn đang bảo vệ cô giáo.

Nhưng câu hỏi thật của bạn đêm qua không phải là "cô Lan có vô tội không".

Câu hỏi thật là: <strong>cái gì đã được lỡ cắt khỏi 47 giây đó?</strong>

Cô Hồng nhắn cho bạn một tin lúc 23:41:

   "Màn hai. Sóng Phân tích — phòng thí nghiệm âm thanh của thầy Tuấn.
    Mang tai nghe tốt vào. Tao đã xin phòng cho tối mai."

Bạn nhìn tin nhắn, nhìn lại tệp âm thanh, và nhận ra mình đã nghe nó bảy lần.

Bảy lần mà vẫn chưa nhận ra một điều:

<strong>Có ba chỗ trong đoạn này có tiếng ghế kéo. Nhưng bạn ngồi trong một cuộc họp duy nhất.</strong>` }
  ]

});