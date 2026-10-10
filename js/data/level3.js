/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 3: NGỤY BIỆN GIA
   Kỹ năng: Nhận diện ngụy biện trong lập luận
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 3,
  title: 'NGỤY BIỆN GIA',
  skill: 'fallacy',
  skillName: 'Nhận diện ngụy biện trong lập luận',
  skillIcon: '🕸️',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Hành lang tầng 3, 12:15', text:
`Chiếc máy ghi âm trong phòng học giáo viên vẫn nằm trên bàn thầy Tuấn.

Bạn đã nghe bản gốc của phiên hội nghị: 11 phút 12 giây. Trong đó, clip 47 giây nằm ở giữa — và nó nói một câu khác hẳn:

"Câu hỏi thứ ba là về bài kiểm tra giữa kỳ. Tôi đã xem bài của Hạnh, em ấy là em họ của tôi, tôi xem để biết mình có chấm công bằng không. Tôi đề nghị hội đồng để tôi chấm lại toàn bộ, có giám sát."

Đúng. Bản ghi có đầy đủ câu hỏi, đầy đủ câu trả lời, và đầy đủ lời thú nhận quan hệ họ hàng.

Cái bị cắt đi, không phải cô Lan.

Bạn tắt máy ghi, đi ra hành lang, và thấy Kiên đang đứng dựa tường ở tầng 3 — chỗ camera bị hỏng — chờ bạn.

Kiên đồng đội của bạn. Thành viên BĐT lâu nhất. Cậu ta cầm điện thoại, màn hình đang lăn bình luận nhanh như nước.

"Tao nói rồi," Kiên nói. "Ta xin lỗi cô ấy trước đã. Tao không làm được."` },

    { type: 'interrogate', tag: 'Phỏng vấn', skill: 'fallacy',
      q: 'Phỏng vấn Kiên',
      sub: 'Kiên không giấu gì cả — thành thật đến mức đáng lo. Vấn đề là cậu ta không biết mình đang lập luận sai.',
      npc: { name: 'Kiên Trần', role: 'Thành viên BĐT · lớp 10A2', avatar: '🧢' },
      questions: [
        {
          q: 'Tại sao tin cô Lan? Nói cụ thể đi.',
          tag: 't-echo', tagName: 'Lý do',
          a: '"Vì ai cũng nói là 17 năm không lấy đồ. Giáo viên 17 năm mà đi ăn cắp thì tệ hơn nhiều. Với cả nếu cô ấy xấu, cả trường sẽ xỉa. Mà ai xỉa giáo viên lại là chuẩn rồi, đúng không?"',
          score: 1
        },
        {
          q: '"Ai cũng nói là 17 năm" — cụ thể "ai cũng" là những ai?',
          tag: 't-ev', tagName: 'Truy nguồn',
          a: 'Kiên nhìn điện thoại, ngập ngừng rồi đếm. "... Bốn. Bốn người trong nhóm. Còn cả giáo viên chủ nhiệm. Sáu."\n\nRồi cậu ta ngẩng lên, ngơ ngác: "Nhưng sáu người cũng nhiều mà."',
          score: 3
        },
        {
          q: 'Nếu ba người trong sáu người đó cũng từng khen một giáo viên khác đã bị kỷ luật về đạo đức, bạn có đổi cách nghĩ không?',
          tag: 't-risk', tagName: 'Phản biện',
          a: 'Kiên chớp mắt. "... Ờ. Thì chắc không nhiều. Nhưng mà... ai mà biết được chứ, không có bằng chứng gì cả."\n\n"Cậu vừa nói "ai cũng nói" là bằng chứng. Tao vừa nói không có bằng chứng. Hai cái đó không chạy cùng nhau được đâu, anh."',
          score: 3
        },
        {
          q: 'Cậu đã đăng bình luận gì tối qua? Đọc tao nghe.',
          tag: 't-ev', tagName: 'Dấu vết',
          a: '"Đăng ba bình luận. Một là "cô Lan đừng có buồn". Hai là "các bạn đừng đăng nữa". Ba là... ừ ba là tao viết lúc hai giờ sáng, không nhớ nội dung, tao xoá rồi."\n\nCậu ta nhăn mặt: "Nhưng tao chỉ đăng ở group lớp thôi mà, có 30 người."',
          score: 2
        }
      ]
    },

    { type: 'narr', tag: 'Bài 1', text:
`Bạn về lại phòng thí nghiệm, đặt tờ giấy trước mặt, và viết lên đầu:

   <strong>NGỤY BIỆN LÀ GÌ?</strong>

Câu trả lời ngắn nhất bạn tìm được — và cũng là câu bạn sẽ dùng suốt phần đời còn lại:

<em>Ngụy biện là lập luận có vẻ hợp lý nhưng kết luận không chịu được, vì nó đã giấu một tiền đề sai — hoặc đã làm biến dạng điều đang tranh luận.</em>

Điều quan trọng nhất: ngụy biện <strong>không phải là lời nói dối</strong>. Người nói dối thì biết mình sai. Người dùng ngụy biện thường thật lòng tin mình — và đó mới là lý do nó lan nhanh.

Giờ bạn lấy những câu đang bay khắp Sóng Trường, dán lên tường, và gạch chân.` },

    { type: 'classify', tag: 'Bài 1 · Bảng đính tường (1/2)', number: true,
      q: 'Mỗi câu dưới đây đang cất vào một loại bẫy nào?',
      sub: 'Đọc từng câu và chọn tên loại ngụy biện. Không có câu nào "gần đúng" — mỗi câu chỉ có một cấu trúc.',
      options: ['Tấn công con người', 'Kêu gọi uy tín', 'Rút gốc', 'Bẻ lá cảm xúc', 'Đặt hai lựa chọn giả'],
      items: [
        '"Cô Lan nói dối nhiều hơn ai hết ở trường này. Ai bảo cô ấy vô tội thì bảo người đó cũng đáng ngờ."',
        '"Thầy Tuấn — người phụ trách CNTT 20 năm — đã nói camera ghi hết. Thế là vụ này rồi, thôi cãi nhau đi."',
        '"Đây là chuyện của chúng tôi, chứ đâu phải trường nào chuyện học sinh đồn đoại giáo viên cũng vậy. Mọi người đừng làm quá."',
        '"Cô Lan khóc trước ban giám hiệu. Nhìn thế thương ghê. Mà thương thì chắc không sai đâu."',
        '"Chỉ có hai lựa chọn thôi: hoặc kỷ luật cô Lan, hoặc cả hội đồng chuyên môn đồng lòa với gian lận."'
      ],
      answer: [0, 1, 2, 3, 4],
      explain: [
        'Công kích vào đời sống cá nhân thay vì vào lập luận — "là người nói vậy thì chắc bạn cũng vậy". Còn gọi là tấn công thân phận/phá huỷ uy tín.',
        'Uỷ quyền cho chức vụ. Ở đây người nói còn tự thêm ý "thôi cãi nhau đi" — cấu trúc "chuyên gia nói vậy nên đừng bàn nữa".',
        'Đây là vụ án của tôi, của tôi thì khác. Làm cho mình thành ngoại lệ. Còn gọi là "ai cũng làm vậy".',
        'Cảm xúc được dùng thay cho bằng chứng: thương nên đáng tin. Không ai kiểm chứng được nước mắt.',
        'Bỏ hẳn vùng giữa. Thực tế còn ít nhất một lựa chọn thứ ba: xác minh khách quan rồi kết luận. Khi người ta dựng hàng chục lựa chọn khả dĩ thành đúng hai, họ đang chuẩn bị ép bạn chọn một trong hai.'
      ],
      teach: 'Mẹo nhận nhanh: <b>ngụy biện thường xuất hiện ở dạng câu ngắn, đầy cảm xúc, và do người nói tin hoặc bị tổn thương nói ra</b> — chứ hiếm khi nằm trong tài liệu chính thức. Khi thấy một câu ngắn bùng nổ trong khung bình luận, hãy bật chế độ phân tích trước khi thả tim.',
      skill: 'fallacy' },

    { type: 'classify', tag: 'Bài 1 · Bảng đính tường (2/2)', number: true,
      q: 'Mấy câu này tinh vi hơn. Cùng làm.',
      sub: 'Những câu này nghe có vẻ lý trí vì đều có chữ "chắc chắn", "chỉ có" và số liệu.',
      options: ['Nhầm tương quan – nhân quả', 'Tổng quát hóa vội', 'Đi ngược cản ngại', 'Kêu gọi số đông'],
      items: [
        '"Nghiên cứu cho thấy học sinh học giỏi có điểm Toán cao hơn trung bình. Hạnh điểm Toán rất cao. Vậy Hạnh giỏi Toán từ nhỏ."',
        '"Trong ba vụ gian lận học kỳ trước, thủ phạm đều là người ngồi gần cửa sổ. Hạnh cũng ngồi gần cửa sổ. Vậy chắc chắn là do ngồi đó."',
        '"Nếu hôm nay các em tha cho cô Lan, thì tháng sau sẽ không ai dám báo cáo bất cứ điều gì nữa đâu. Cả trường sẽ im."',
        '"Cả 1.200 học sinh trong trường đang bàn về vụ này. Một trường 1.200 người mà không phải không có lý thì chắc vấn đề có thật."'
      ],
      answer: [0, 1, 2, 3],
      explain: [
        'Hai điều cùng xảy ra không phải một điều gây ra điều kia. Ở đây "điểm Toán cao" còn có thể do học kỹ, do may mắn đề bài trùng, do chấm thiên lệch — và "học giỏi từ nhỏ" chỉ là một trong nhiều cách giải thích.',
        'Suy ra quy luật từ mẫu cực nhỏ — ba trường hợp. Ba trường hợp không tạo ra quy tắc, chỉ tạo ra ấn tượng. Đây là hình dạng đẹp nhất và nguy hiểm nhất của ngụy biện: nghe rất khoa học.',
        'Chuỗi hậu quả không có cơ sở, và mỗi bước lại thêm một chút quá mức. Muốn phản biện chuỗi này, đừng cãi từng bước — hãy chỉ vào bước đầu tiên đã không có bằng chứng.',
        'Số người đồng ý không phải bằng chứng. Hãy nhớ thí nghiệm Asch: đa số sai khi thuộc nhóm, ngay cả khi câu trả lời đúng nhìn thấy ngay trước mắt. Chọn theo đám đông là cách nhanh nhất để không bao giờ sai, và cũng là cách nhanh nhất để không bao giờ đúng.'
      ],
      teach: 'Ba câu này đều có chữ "chắc chắn" và đều dùng sự chắc chắn như bằng chứng. <b>Độ chắc chắn của người nói không phải là độ chắc chắn của sự việc.</b> Đó là hai thứ hoàn toàn khác nhau, và chúng ta hay nhầm vì chúng đi cùng nhau.',
      skill: 'fallacy' },

    { type: 'spot', tag: 'Bài 2 · Bắt chữ', skill: 'fallacy',
      q: 'Tối qua, Chủ nhiệm Quách gửi thông điệp cho toàn bộ giáo viên khối 10. Bấm vào câu bạn cho là chỗ lập luận bị bẻ.',
      sub: 'Thông điệp này đọc rất ăn ý. Đó chính là vấn đề.',
      parts: [
        { t: 'Trong clip, cô Lan nói cô ấy đã xem bài của Hạnh và đã đối chiếu với đáp án.', ok: false },
        { t: 'Câu đó được tách khỏi câu hỏi đứng trước nó.', ok: false },
        { t: 'Nhưng nếu một người chấm bài đã xem trước bài của một học sinh rồi vẫn đánh trừ, thì điểm số đó có ý nghĩa với ai.', ok: true },
        { t: 'Tôi không nói cô ấy thiên vị.', ok: false },
        { t: 'Tôi chỉ nói điểm đó không đáng tin.', ok: false }
      ],
      fallacy: 'Đặt hai lựa chọn giả',
      fallacyDesc: 'Chủ nhiệm Quách đặt sẵn ra: "hoặc việc xem bài trước hoàn toàn không ảnh hưởng gì, hoặc điểm đó vô giá trị". Ông bỏ qua lựa chọn thứ ba, ở giữa — mà đó mới đúng là lựa chọn duy nhất được bảo vệ bằng bằng chứng. Có cách đo mức độ thiên lệch, có thể chấm lại có giám sát, có thể đổi người chấm — mà không cần bác bỏ cả điểm số.',
      fb: 'Đây là chỗ bẻ. Cả thông điệp được viết để dẫn tới đây: hai câu đầu lập tiền đề, "tôi không nói cô ấy thiên vị" là lá chắn đạn, và câu bạn vừa bấm là bản lề.',
      teach: 'Dấu hiệu nhận ra bản lề của một lập luận: <b>câu hỏi "hoặc… hoặc…" mà đáp án nào cũng dẫn tới kết luận mong muốn.</b> Trước khi trả lời, hãy hỏi: "Có phương án thứ ba không?" — với người nói câu đó, câu trả lời luôn là không.',
      skill: 'fallacy' },

    { type: 'pick', tag: 'Khúc gặp trên diễn đàn', skill: 'fallacy',
      q: '23:20. Bình luận được ghim đầu trang hiện tại:',
      sub: '@tieuthieu_banthan · 8.402 lượt thích\n"Giáo viên xem trước bài thi là gian lận, ai cũng biết. Mà nhảy vào bảo vệ thì xứng gì. Cứ quyên góp tiền tui mua hộ mấy em tài liệu thi đàng hoàng còn hơn, đừng mong gì cô Lan."\n\nBạn trả lời thế nào?',
      correct: 1,
      options: [
        { t: '"Đây là cơ hội để giáo viên xem bài thi trước khi thi đấu. Trường nào cũng thế thôi."',
          score: 0, trap: 'Chấp nhận tiền đề sai của đối phương',
          trapDesc: 'Bạn vừa đồng ý với điều không có bằng chứng nào, và vừa gọi nó là chuyện bình thường. Người đọc sẽ hiểu BĐT xác nhận đó là thực tế.',
          verdict: 'bad',
          fb: 'Bạn đi thẳng vào chiến tranh với những gì bạn không biết là đúng hay không. Trong lập luận, thế yếu nhất là <b>thừa nhận tiền đề của đối phương</b> trước khi kiểm tra nó.\n\n"Có ai cũng biết" và "thường là vậy" là hai câu nói nhiều nhất trên đời, và cả hai đều không kèm theo dữ kiện nào.',
          teach: 'Trước khi cãi về kết luận của một lập luận, hãy kiểm tra tiền đề của nó. Nếu tiền đề sai mà bạn vẫn cãi ở kết luận, bạn đang giúp tiền đề đó sống dai.' },
        { t: '"Câu này có ba chỗ cần tách ra. Một: ai đã xem bài thi trước khi thi — chưa ai nói đến ở đây, anh cứ thêm vào. Hai: bằng chứng hiện có không nói giáo viên xem bài thi. Nó nói cô Lan xem bài của một học sinh vì quan hệ họ hàng. Ba: anh đang gọi 8.402 người thích là 8.402 bằng chứng."',
          d: 'Tách từng tiền đề, gắn nhãn, đưa số liệu về chỗ của nó.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời đúng cách: không tranh cãi với <em>cảm xúc</em> của người đọc, mà tách lập luận ra thành từng tiền đề rồi kiểm tra từng cái. Người đọc không cần đồng ý với bạn — họ chỉ cần thấy bạn không làm ngỏ lời họ.\n\nVà bạn vừa làm một việc cực mạnh: bạn chỉ ra rằng "nhiều người thích" đã được dùng như bằng chứng.',
          teach: 'Nguyên tắc phản biện thân thiện: <b>công khai điều kiện mà người ta cần đúng</b>, thay vì công khai điều người ta sai. Ở đây: "nếu thông tin bạn cần là ai đã xem bài thi, thì hãy chỉ ra người đó — vì hiện chưa ai nói đến". Người đọc tự kiểm tra, và bạn không cần thắng ai.' },
        { t: '"Bạn làm ơn đừng nói như vậy, cô Lan là giáo viên rất tử tế, tội nghiệp các em quá…"',
          score: 0, trap: 'Bẻ lá cảm xúc',
          trapDesc: 'Bạn dùng cảm xúc để đáp lại cảm xúc. Người đọc không ai đổi ý vì thương; họ chỉ thấy hai bên đang tranh nhau bằng nước mắt.',
          verdict: 'bad',
          fb: 'Câu này em đẹp, nhưng nó làm đúng việc mà người bình luận kia đang làm — cùng một cấu trúc, chỉ khác dấu. 8.402 lượt thích đó không đổi vì bạn van. Nó đổi khi người đọc thấy bạn đưa ra thứ họ chưa từng được đưa ra.',
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

Cái mẹo Kiên dạy bạn — và cậu ta không biết mình đã dạy — là chính những ngụy biện mà cậu ta tin. Bạn không thể nói với cậu ta "cậu sai" một cách dễ chịu, vì cậu ta không sai về điều gì cả. Cậu ta đang bị chức vụ, bị lịch sử, bằng chứng, bị lòng tốt và bị tiếng nói của đám đông cùng lôi đi.

Nếu bạn không tìm được cách nói với một người đang tin, bạn sẽ không tìm được cách nói với 1.200 người đang tin.

Sáng hôm sau, khi bạn kể lại chuyện này cho cô Hồng, cô gật đầu rồi nói một câu làm bạn nhớ cả mùa hè:

"Người ta không bao giờ đổi ý vì bạn thắng. Họ đổi ý vì <em>tự thấy</em> mình sai. Việc của mình là chỉ cho họ tự thấy."

Rồi cô đẩy giấy về phía bạn:

"Màn bốn. Toán. Bạn sẽ thấy một cái bảng rất thú vị — và một câu hỏi rất xấu.

Câu hỏi xấu đó là: <em>từ bao nhiêu phần trăm, thì 'điểm cao' trở thành bằng chứng nghi ngờ?</em>"` }
  ]

});