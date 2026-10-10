/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 3: BÀI NÓI RẺ NHẤT
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Nhận diện ngụy biện trong lập luận
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 3,
  title: 'BÀI NÓI RẺ NHẤT',
  skill: 'fallacy',
  skillName: 'Nhận diện ngụy biện trong lập luận',
  skillIcon: '🕸️',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Hành lang tầng 3, 12:15', text:
`Camera tầng 3 đang hỏng, nên hành lang tầng 3 là nơi duy nhất không ai nhìn thấy.

Kiên đang đứng đó.

Kiên là đồng đội BĐT của bạn, lâu nhất, và là người duy nhất trong lớp 11A1 nói công khai rằng Hải phải bị kỷ luật.

Nhưng lúc này cậu ta đang cầm điện thoại, mắt dán vào màn hình, và tay run.

"Này," Kiên nói, không ngẩng đầu. "Tao vừa tìm ra thứ này."

Trên màn hình là một bài đăng — 6.400 lượt thích — trong đó mở đầu bằng ba dòng:

   "Hải không học gì cả hai năm nay."
   "Cứ tin AI đi, cả thế giới cũng tin AI."
   "Có thầy giáo nào dạy vật lý bằng công cụ AI đó, thì thầy tao xứng đáng bị kỷ luật."

Kiên ngẩng lên. Mặt cậu ta không giận.

"Tao thấy câu này, tao tưởng là nói về tao."

Cậu ta đưa điện thoại cho bạn. Bạn nhìn xuống. Tên người đăng: <em>Phụ trách CLB Vật lý</em>. Học sinh lớp 11A3.

Người đó không phải Hải. Nhưng câu đó, nếu đúng, ăn vào Hải và ăn vào thầy Vũ cùng lúc.` },

    { type: 'interrogate', tag: 'Phỏng vấn', skill: 'fallacy',
      q: 'Phỏng vấn Kiên',
      sub: 'Kiên không giấu gì cả — thành thật đến mức đáng lo. Vấn đề là cậu ta không biết mình đang lập luận sai.',
      npc: { name: 'Kiên Trần', role: 'Thành viên BĐT · lớp 11A1 · đang muốn "công bằng cho AI"', avatar: '🧢' },
      questions: [
        {
          q: 'Cậu tin AI viết bài Hải. Cụ thể dựa vào điều gì?',
          tag: 't-echo', tagName: 'Lý do',
          a: '"Vì AI viết bài hay hơn con người. Đấy là chuẩn chung rồi. Em nghĩ ngược lại — cứ đợi mấy năm nữa, thầy mà chấm tay không giỏi hơn máy thì học gì.\n\nHải là đối tượng đầu tiên của tôi ở trường này. Lý thuyết phải được thử ở đâu đó chứ."',
          score: 1
        },
        {
          q: '"AI viết hay hơn người" — cậu định nghĩa "hay" là gì? Chấm điểm hay giải thích?',
          tag: 't-ev', tagName: 'Truy nguồn',
          a: 'Kiên chớp mắt. "...Chứ không phải là... AI làm đề thi ra hay hơn tôi soạn. AI giải nhanh hơn. AI không cần ngủ.\n\nMà... đúng rồi, AI không biết trả lời khi không hiểu. Tao trả lời được dù không hiểu cũng nói. Nên nhiều khi... có khi nó không phải lúc nào cũng hơn đâu."\n\nCậu ta dừng lại. "...Tao vừa tự bác bỏ mình à?"',
          score: 3
        },
        {
          q: 'Nếu mai có bằng chứng đích danh rằng bài Hải do Hải tự làm, cậu có đăng lại bài tối nay không?',
          tag: 't-risk', tagName: 'Phản biện',
          a: 'Kiên nhìn xuống điện thoại. Im lặng khá lâu.\n\n"...Cậu hỏi vậy chứ tao đăng bằng tài khoản của em. Tao đăng thì em mất tài khoản chứ không phải mất mình."\n\nRồi cậu ta nói nhỏ hơn: "Giá mà có bằng chứng thật thì tao xoá. Nhưng mà có thật không, anh? Nếu có, sao lúc đó tao vẫn đăng?"',
          score: 4
        },
        {
          q: 'Câu "có thầy giáo nào dạy vật lý bằng công cụ AI đó, thì thầy tao xứng đáng bị kỷ luật" — cậu viết hay đọc?',
          tag: 't-ev', tagName: 'Dấu vết',
          a: '"Đọc. Người ta viết.\n\nMà cậu biết gì không, tao cũng không thấy thầy Vũ dạy bằng AI. Tao thấy thầy dùng AI soạn câu hỏi ôn, xong thầy tự kiểm lại. Cái đó gọi là gì tao không biết, nhưng nó khác với dạy bài."\n\n"Nên tao đăng bài đó, nhưng mà... tao đăng vì nó dễ đọc. Nó dễ đọc thì nó lan. Tao nghĩ đến chuyện đó rồi mà."',
          score: 3
        }
      ]
    },

    { type: 'narr', tag: 'Bài 1', text:
`Bạn về lại phòng thí nghiệm, đặt tờ giấy trước mặt, và viết lên đầu:

   <strong>NGỤY BIỆN LÀ GÌ?</strong>

Câu trả lời ngắn nhất bạn tìm được — và cũng là câu bạn sẽ dùng suốt phần đời còn lại:

<em>Ngụy biện là lập luận có vẻ hợp lý nhưng kết luận không chịu được, vì nó đã giấu một tiền đề sai — hoặc đã làm biến dạng điều đang tranh luận.</em>

Điều quan trọng nhất: ngụy biện <strong>không phải là lời nói dối</strong>. Người nói dối thì biết mình sai. Người dùng ngụy biện thường thật lòng tin mình — và đó mới là lý do nó lan nhanh trong một cuộc tranh luận về AI.

Vì vậy, bạn lấy những câu đang bay khắp nhóm lớp và diễn đàn, dán lên tường, và gạch chân.` },

    { type: 'classify', tag: 'Bài 1 · Bảng đính tường (1/2)', number: true,
      q: 'Mỗi câu dưới đây đang cất vào một loại bẫy nào?',
      sub: 'Đọc từng câu và chọn tên loại ngụy biện. Không có câu nào "gần đúng" — mỗi câu chỉ có một cấu trúc.',
      options: ['Tấn công con người', 'Kêu gọi uy tín', 'Rút gốc', 'Bẻ lá cảm xúc', 'Đặt hai lựa chọn giả'],
      items: [
        '"Hải không học gì cả hai năm nay. Ai bảo bài Hải là do Hải viết thì bảo người đó cũng đáng ngờ."',
        '"Thầy Bùi Tuấn — người phụ trách phòng máy 18 năm — đã nói dấu g = 9,81 là dấu hiệu AI. Thế là rõ rồi, đừng bàn nữa."',
        '"Cả trường này giáo viên nào chẳng dùng AI soạn đề. Chuyện học sinh dùng AI ở đâu chả có. Mọi người đừng làm quá."',
        '"Hải khóc ở ban giám hiệu. Nhìn thế thương ghê. Mà thương thì chắc không sai đâu."',
        '"Chỉ có hai lựa chọn thôi: hoặc cấm AI triệt để, hoặc chấp nhận Hải là bình thường và nói chung sự phân biệt là không tồn tại."'
      ],
      answer: [0, 1, 2, 3, 4],
      explain: [
        'Công kích vào đời sống cá nhân thay vì vào bài làm — "người nói vậy chắc bạn cũng vậy". Còn gọi là tấn công thân phận, hay phá huỷ uy tín trước khi kiểm chứng.',
        'Uỷ quyền cho chức vụ. Ở đây người nói còn tự thêm ý "đừng bàn nữa" — cấu trúc "chuyên gia nói vậy nên đừng bàn nữa".',
        'Đây là cuộc tranh luận của tôi, của tôi thì khác. Làm cho mình thành ngoại lệ.',
        'Cảm xúc được dùng thay cho bằng chứng: thương nên đáng tin. Không ai kiểm chứng được nước mắt.',
        'Bỏ hẳn vùng giữa. Thực tế còn ít nhất một lựa chọn thứ ba: xác minh bằng dấu vết kỹ thuật rồi kết luận, tức là có quy trình dù AI có thật sự cho tới mức nào. Khi người ta dựng hàng chục lựa chọn khả dĩ thành đúng hai, họ đang chuẩn bị ép bạn chọn một trong hai.'
      ],
      teach: 'Mẹo nhận nhanh: <b>ngụy biện thường xuất hiện ở dạng câu ngắn, đầy cảm xúc, và do người nói tin hoặc bị tổn thương nói ra</b> — chứ hiếm khi nằm trong văn bản chính thức. Khi thấy một câu ngắn bùng nổ trong khung bình luận, hãy bật chế độ phân tích trước khi thả tim.',
      skill: 'fallacy' },

    { type: 'classify', tag: 'Bài 1 · Bảng đính tường (2/2)', number: true,
      q: 'Mấy câu này tinh vi hơn. Cùng làm.',
      sub: 'Những câu này nghe có vẻ lý trí vì đều có chữ "chắc chắn", "chỉ có" và số liệu.',
      options: ['Nhầm tương quan – nhân quả', 'Tổng quát hóa vội', 'Đi ngược cản ngại', 'Kêu gọi số đông'],
      items: [
        '"Trong các đề kiểm tra Vật lý trước đây, bài dùng g = 9,81 xuất hiện nhiều hơn ở những lớp học sinh giỏi. Hải là học sinh giỏi và bài cậu ta dùng 9,81. Vậy Hải giỏi nên bài cậu ta đúng là do AI viết."',
        '"Trong ba vụ học sinh bị phát hiện dùng công cụ học tập học kỳ trước, cả ba đều dùng App tư vấn tích hợp. Hải cũng cài app đó. Vậy chắc chắn là do app."',
        '"Nếu hôm nay các em tha cho Hải, thì mọi đứa sẽ tự dùng AI và cả khối sẽ không học được gì nữa. Nên phải kỷ luật."',
        '"Cả 213 lượt thích, 87 bình luận, nhóm học 11A1 đã bàn về chuyện này suốt ba ngày. Một lớp hơn 30 người mà không ai bảo sai thì chắc chắn vấn đề có thật."'
      ],
      answer: [0, 1, 2, 3],
      explain: [
        'Hai điều cùng xuyên ra không phải một điều gây ra điều kia. Ở đây "điểm giỏi" còn có thể do luyện tập, do nền tảng, do may mắn gặp đề — và bước cuối cùng ("bài dùng 9,81" ⇒ "do AI viết") không dựa trên chuyên môn vật lý mà dựa trên một mối liên hệ không liên quan gì.',
        'Suy ra quy luật từ mẫu cực nhỏ — ba trường hợp. Ba trường hợp không tạo ra quy tắc, chỉ tạo ra ấn tượng. Đây là hình dạng đẹp nhất và nguy hiểm nhất của ngụy biện: nghe rất khoa học.',
        'Chuỗi hậu quả không có cơ sở, và mỗi bước lại thêm một chút quá mức. Muốn phản biện chuỗi này, đừng cãi từng bước — hãy chỉ vào bước đầu tiên đã không có bằng chứng.',
        'Số người đồng ý không phải bằng chứng. Hãy nhớ thí nghiệm Asch: đa số sai khi thuộc nhóm, ngay cả khi câu trả lời đúng nhìn thấy ngay trước mắt. Chọn theo đám đông là cách nhanh nhất để không bao giờ sai, và cũng là cách nhanh nhất để không bao giờ đúng.'
      ],
      teach: 'Ba câu này đều có chữ "chắc chắn" và đều dùng sự chắc chắn như bằng chứng. <b>Độ chắc chắn của người nói không phải là độ chắc chắn của sự việc.</b> Đó là hai thứ hoàn toàn khác nhau, và chúng ta hay nhầm vì chúng đi cùng nhau.',
      skill: 'fallacy' },

    { type: 'spot', tag: 'Bài 2 · Bắt chữ', skill: 'fallacy',
      q: 'Sáng hôm sau, một giáo viên khối khác — thầy Đức, dạy Vật lý từ năm 2008 — gửi thông điệp cho toàn bộ giáo viên khối. Bấm vào câu bạn cho là chỗ lập luận bị bẻ.',
      sub: 'Thông điệp này đọc rất ăn ý. Đó chính là vấn đề.',
      parts: [
        { t: 'Trong bài của Hải, lực ma sát được viết là đẩy vật lên trên mặt phẳng, tức là ngược chiều chuyển động.', ok: false },
        { t: 'Đó là một câu sai. Nhưng chính thầy phải nói rõ: đây là đề do thầy soạn, và thầy đã dùng công cụ AI để soạn phần lý thuyết nhúng trong đề.', ok: false },
        { t: 'Nếu công cụ AI sinh ra một đề bài mà chính công cụ đó giải sai, thì điểm số của cả lớp đó là gì.', ok: true },
        { t: 'Tôi không nói Hải cố ý.', ok: false },
        { t: 'Tôi chỉ nói bài do máy tạo thì kết quả do máy tạo, và kết quả đó không đáng tin.', ok: false }
      ],
      fallacy: 'Đặt hai lựa chọn giả',
      fallacyDesc: 'Thầy Đức đặt sẵn: "hoặc AI không tạo lỗi, hoặc toàn bộ điểm số vô giá trị". Ông bỏ qua lựa chọn thứ ba, ở giữa — và đó mới đúng là lựa chọn duy nhất được bảo vệ bằng bằng chứng: có thể dựng lại đề từ đầu bằng tay có đối chiếu, có thể chấm lại có giám sát, có thể giữ nguyên đề và dùng chính các câu hỏi đó làm bài tập về sai sót của AI.',
      fb: 'Đây là chỗ bẻ. Cả thông điệp được viết để dẫn tới đây: hai câu đầu lập tiền đề, "tôi không nói Hải cố ý" là lá chắn đạn, và câu bạn vừa bấm là bản lề.',
      teach: 'Dấu hiệu nhận ra bản lề của một lập luận: <b>câu hỏi "hoặc… hoặc…" mà đáp án nào cũng dẫn tới kết luận mong muốn.</b> Trước khi trả lời, hãy hỏi: "Có phương án thứ ba không?" — với người nói câu đó, câu trả lời luôn là không.',
      skill: 'fallacy' },

    { type: 'pick', tag: 'Khúc gặp trên diễn đàn', skill: 'fallacy',
      q: '23:20. Bình luận được ghim đầu trang hiện tại:',
      sub: '@tieuthieu_banthan · 3.214 lượt thích\n"Học sinh lớp 12 năm ngoái dùng AI viết sử là ra đề thi HSG, đoạt giải quốc gia. Ai bảo giờ cấm AI là kẻ phá tương lai. Giáo viên mà chê AI thì bản thân giáo viên cũng đã dùng AI soạn đề rồi. Cứ nhận hết đi cho rồi, đừng có làm mình."\n\nBạn trả lời thế nào?',
      correct: 1,
      options: [
        { t: '"Đây là cơ hội để AI được dùng trong kỳ thi HSG. Từ giờ ai cũng được phép."',
          score: 0, trap: 'Chấp nhận tiền đề sai của đối phương',
          trapDesc: 'Bạn vừa đồng ý với điều không có bằng chứng nào, và vừa gọi nó là chuẩn. Người đọc sẽ hiểu BĐT xác nhận đó là thực tế.',
          verdict: 'bad',
          fb: 'Bạn đi thẳng vào chiến tranh với những gì bạn không biết là đúng hay không. Trong lập luận, thế yếu nhất là <b>thừa nhận tiền đề của đối phương</b> trước khi kiểm tra nó.\n\n"Có ví dụ vậy" và "đó là chuẩn chung" là hai câu nói nhiều nhất trên đời, và cả hai đều không kèm theo dữ kiện nào.',
          teach: 'Trước khi cãi về kết luận của một lập luận, hãy kiểm tra tiền đề của nó. Nếu tiền đề sai mà bạn vẫn cãi ở kết luận, bạn đang giúp tiền đề đó sống dai.' },
        { t: '"Câu này có ba chỗ cần tách ra. Một: ví dụ một học sinh dùng AI được giải, không cho biết dùng AI để học hay để nộp bài thay. Hai: đề do AI soạn chưa ai kiểm tra lỗi, nên so sánh chưa đối xứng. Ba: anh gộp "giáo viên soạn đề" với "giáo viên chấm điểm sai" là một."',
          d: 'Tách từng tiền đề, gắn nhãn, đưa số liệu về chỗ của nó.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời đúng cách: không tranh cãi với <em>cảm xúc</em> của người đọc, mà tách lập luận ra thành từng tiền đề rồi kiểm tra từng cái. Người đọc không cần đồng ý với bạn — họ chỉ cần thấy bạn không làm ngỏ lời họ.\n\nVà bạn vừa làm một việc cực mạnh: bạn chỉ ra rằng "nhiều người thích" đã được dùng như bằng chứng.',
          teach: 'Nguyên tắc phản biện thân thiện: <b>công khai điều kiện mà người ta cần đúng</b>, thay vì công khai điều người ta sai. Ở đây: "nếu thông tin bạn cần là học sinh đó đã dùng AI để nộp bài thay thì cho mình xin người đó — vì hiện chưa ai nói đến". Người đọc tự kiểm tra, và bạn không cần thắng ai.' },
        { t: '"Bạn làm ơn đừng nói như vậy, giáo viên là người rất tử tế, tội nghiệp các em quá…"',
          score: 0, trap: 'Bẻ lá cảm xúc',
          trapDesc: 'Bạn dùng cảm xúc để đáp lại cảm xúc. Người đọc không ai đổi ý vì thương; họ chỉ thấy hai bên đang tranh nhau bằng nước mắt.',
          verdict: 'bad',
          fb: 'Câu này em đẹp, nhưng nó làm đúng việc mà người bình luận kia đang làm — cùng một cấu trúc, chỉ khác dấu. 3.214 lượt thích đó không đổi vì bạn van. Nó đổi khi người đọc thấy bạn đưa ra thứ họ chưa từng được đưa ra.',
          teach: 'Khi đối thủ bẻ lá cảm xúc, đừng trả lời bằng cảm xúc đẹp hơn. Hãy trả lời bằng <b>thứ họ thiếu</b>. Tranh luận bằng cảm xúc chỉ thắng được người đang ủng hộ bạn từ đầu.' },
        { t: 'Không trả lời. Like một bình luận trung tính và khoá bình luận.',
          score: 1, verdict: 'mid',
          fb: 'Bình luận trung tính không có sẵn. Cách duy nhất để "không trả lời" mà vẫn nói được điều cần nói là đăng một bảng tin riêng — có tiêu đề bằng chứng, có mốc thời gian, có nguồn. Im lặng trong lúc cả nước nói chỉ đẩy tin sai đi xa hơn.',
          teach: 'Chiến lược "không tranh luận" chỉ thắng khi bạn đã có kênh sự thật riêng để đưa tin vào. Chưa có kênh thì im lặng không phải là chiến lược, nó chỉ là mất mặt.' }
      ],
      maxPts: 4
    },

    { type: 'narr', tag: 'Kết màn 3', text:
`Bạn tắt điện thoại lúc 23:58.

Cái mẹo Kiên dạy bạn — và cậu ta không biết mình đã dạy — là chính những ngụy biện mà cậu ta tin. Bạn không thể nói với cậu ta "cậu sai" một cách dễ chịu, vì cậu ta không sai về điều gì cả. Cậu ta đang bị chức vụ, bị thói quen, bằng chứng, bị lòng tốt và bị tiếng nói của đám đông cùng lôi đi.

Nếu bạn không tìm được cách nói với một người đang tin, bạn sẽ không tìm được cách nói với 1.200 người đang tin.

Sáng hôm sau, khi bạn kể lại chuyện này cho cô Hồng, cô gật đầu rồi nói một câu làm bạn nhớ cả mùa hè:

"Người ta không bao giờ đổi ý vì bạn thắng. Họ đổi ý vì <em>tự thấy</em> mình sai. Việc của mình là chỉ cho họ tự thấy."

Rồi cô đẩy giấy về phía bạn:

"Màn bốn. Toán. Bạn sẽ thấy một cái bảng rất thú vị — và một câu hỏi rất xấu.

Câu hỏi xấu đó là: <em>từ bao nhiêu phần trăm, thì 'bài sai cùng một lỗi' trở thành bằng chứng nghi ngờ?</em>"` }
  ]

});