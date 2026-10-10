/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 6: ĐÀI HỘI
   Kỹ năng: Bảo vệ lập luận & phản biện có phong cách
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 6,
  title: 'ĐÀI HỘI',
  skill: 'argument',
  skillName: 'Bảo vệ lập luận & phản biện có phong cách',
  skillIcon: '⚖️',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Hội trường, 08:55 sáng', text:
`Hội trường có 300 chỗ. Ngồi đầy. Phía trên, bảng điện tử chiếu nguyên văn lời kêu gọi từ diễn đàn — 11.904 chữ ký trong 9 giờ.

Trên bàn hội đồng kỷ luật: cô Lan Nguyễn, bên cạnh thầy Bùi Tuấn và ba giáo viên khối. Bàn đối diện là đại diện hội đồng chuyên môn, phía sau là 40 phóng viên và một chiếc livestream có 6.000 người xem.

Bạn ngồi ở bàn BĐT. Bên cạnh là Kiên, mặt tái. Cô Hồng nói nhỏ một câu duy nhất:

"Sao người đại diện bị trích dẫn sai lập luận, cứ <em>trình bày lại đúng lập luận đó</em>. Đừng trình bày lập luận mình muốn họ nghe."

Nghe xong bạn mới hiểu đây là bài khó nhất của cả vụ án. Không phải vì bạn thiếu bằng chứng.

Mà vì bạn có bằng chứng.` },

    { type: 'say', who: 'Đại diện diễn đàn (đọc từ livestream)', role: 'Không rõ tên, không rõ mặt', avatar: '📱',
      text: `Câu này được đọc ra phòng hội trường và đồng thời chiếu lên bảng điện tử, nơi có 6.000 người đang xem:

"Chúng tôi không phản đối việc BĐT điều tra. Chúng tôi chỉ nói một điều: nếu các anh chị tin một câu do chính giáo viên đó nói — 'tôi đã xem bài của Hạnh' — thì mọi việc khác anh chị làm đều thừa."` },

    { type: 'pick', tag: 'Vòng 1 · Trả lời phản biện', skill: 'argument',
      q: 'Micro vừa được chuyền tới bàn BĐT. Bạn nói gì?',
      sub: 'Bạn có 4 phút. Cả 6.000 người xem livestream đang nghe.',
      correct: 0,
      options: [
        { t: '"Chúng tôi không tin đoạn clip đó. Chúng tôi đã chỉ ra ba điểm ghép âm thanh — 12.4, 24.9, 38.3 giây — và bản ghi gốc 11 phút trong phòng giáo viên có đầy đủ câu hỏi đứng trước câu đó. Câu do người đại diện vừa đọc không phải câu chúng tôi trích, và cũng không phải câu nguyên văn nào trong hồ sơ."',
          d: 'Sửa dữ kiện, giữ lập luận, không đuổi theo cảm xúc.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời chuẩn: <b>sửa tiền đề, không đánh cảm xúc</b>. Người đọc không cần tin bạn — họ chỉ cần nhận ra lập luận của họ đang đứng trên một câu không tồn tại trong hồ sơ. Khi một lập luận mất tiền đề, nó không cần bị phản bác tiếp.\n\nVà bạn đã làm một việc rất khó: bạn không nói "các bạn sai". Bạn nói "đó không phải câu chúng tôi trích". Người bị công kích nhiều nhất là người cần nhất được phân biệt giữa "nói sai" và "không liên quan đến mình".',
          teach: 'Nguyên tắc trả lời phản biện: <b>đưa người nghe về dữ kiện</b>. Không cần họ đồng ý với kết luận của bạn — chỉ cần họ thấy tiền đề của họ có vấn đề. Sự chú ý là tài nguyên hạn chế ở hội trường này, và nó được chi cho bên nào nói rõ nhất.' },
        { t: '"Các bạn chỉ biết đọc tin đồn. 6.000 người nghe mà không ai đính chính — đó không phải hỏi tư duy, đó là đám đông."',
          d: 'Công kích người đối diện, không công kích lập luận.',
          score: 0, trap: 'Tấn công con người',
          trapDesc: 'Bạn đang trả lời "cách bạn tin" thay vì trả lời "điều bạn tin có đúng không". 6.000 người xem không thấy bạn sai — họ chỉ thấy hai bên chửi nhau, và họ sẽ ghép bạn vào phe đông.',
          verdict: 'bad',
          fb: 'Bạn vừa mất 6.000 khán giả và chỉ thắng được một vài phòng thu. Đây là cách phản biện bị thất bại nhất: đúng về nội dung, vô dụng về hành động.\n\nNhớ màn 3 — bạn đã tự dán nhãn "tấn công con người" cho câu này. Hôm nay bạn vừa viết ra nó.',
          teach: 'Một câu phản biện tốt có thể để người đối diện bỏ phiếu cho mình. Câu trên chỉ có thể khiến họ đóng livestream.' },
        { t: '"Chúng tôi xin lỗi, chúng tôi không đủ chứng cứ để kết luận. Vụ án do hội đồng quyết định, không phải BĐT."',
          d: 'Lùi toàn bộ.',
          score: 0, verdict: 'bad',
          fb: 'Bạn vừa tự bác bỏ bằng chứng mà cả tối qua bạn dựng lên. Hội đồng kỷ luật cần biết <b>mức độ chắc chắn</b> của từng phát hiện — "chắc một nửa" và "chắc một trăm phần trăm" là hai loại thông tin khác nhau hoàn toàn.\n\nRút lại toàn bộ là lựa chọn của người sợ sai, không phải của người trung thực. Trung thực là nói đúng mức độ.',
          teach: 'Khi thiếu bằng chứng, đừng nói "tôi không biết" nếu bạn biết một phần. Nói: <b>"Tôi chắc chắn về A và B. Tôi chưa đủ dữ kiện về C."</b> Câu đó vẫn có giá trị quyết định — và nó là câu của người biết mình đang nói gì.' },
        { t: '"Có mười tám người khác cũng đang đăng bình luận ủng hộ BĐT. Các bạn đang đếm rẻ."',
          d: 'Đếm số người ủng hộ.',
          score: 0, trap: 'Kêu gọi số đông',
          trapDesc: 'Bạn vừa dùng đúng cách mà diễn đàn đang dùng với bạn. 18 tiếng nói đồng ý không phải bằng chứng — và nếu họ thắng, họ sẽ cho bạn biết lý do ngay.',
          verdict: 'bad',
          fb: 'Bạn vừa thua bằng chính vũ khí của đối thủ, và thắng thêm một lần nữa nếu họ trả lời. Trong một cuộc tranh luận bằng dữ kiện, "nhiều người nói vậy" không phải bằng chứng — nó là một lỗi phương pháp mà cả hai phe đều mắc.',
          teach: 'Nhớ thí nghiệm Asch từ Màn 3. Có 18 người đồng ý không làm một lập luận đúng lên trên lập luận sai. Ngược lại, một lập luận đúng thì vẫn đúng dù cả 6.000 người bỏ phiếu kia.' }
      ],
      maxPts: 4
    },

    { type: 'classify', tag: 'Vòng 2 · Ai đang bóp méo ai', number: true, skill: 'argument',
      q: 'Trong buổi họp, có bốn lập luận được nêu. Lập luận nào <b>trình bày đối phương một cách công bằng hơn</b>, và lập luận nào <b>bóp méo</b>?',
      sub: 'Đây là kỹ năng mà người mạnh nhất cũng phải luyện: trình bày lập luận đối phương <em>tự tốt nhất có thể</em> trước khi phản công. Người thua vì bóp méo là người làm cho chính lập luận của mình trông yếu đi.',
      options: ['Bộc lộ lập luận đối phương công bằng hơn', 'Bóp méo lập luận đối phương'],
      items: [
        '"Clip chỉ chứng minh có ai đó nói câu \'tôi đã xem bài của Hạnh\'. Nó không cho biết câu đó nằm trong câu hỏi nào, và không cho biết điểm của Hạnh ra sao." — BĐT',
        '"BĐT bảo clip bị cắt ghép, nghĩa là BĐT bảo giáo viên nói dối." — trên diễn đàn',
        '"Tôi chỉ nói một điều: điểm mà cô Lan chấm cho em họ mình mà không công bố kết quả thì không ai kiểm chứng được. Tôi không nói gì hơn." — chủ nhiệm Quách',
        '"Chỉ có hai lựa chọn: hoặc BĐT đưa clip gốc ra, hoặc BĐT thừa nhận là bịa." — trên diễn đàn',
        '"Tôi không nói BĐT đúng. Tôi nói một điều khác: có một cô giáo đã bị công kích bốn ngày liền mà chưa ai hỏi cô ấy một câu. Điều đó mới là chuyện đáng nói." — cô Hồng'
      ],
      answer: [0, 1, 0, 1, 0],
      explain: [
        'Đây là bản lập luận của BĐT ở dạng trung thực nhất: nêu cái clip có, và nêu cái clip không có. Người đối phương muốn phản công cũng phải công nhận phần "có" trước.',
        'Bóp méo. "Clip bị cắt ghép" là một phát hiện kỹ thuật về <b>cách làm tệp</b>, không phải một cáo buộc về <b>nội dung lời nói</b>. Chuyển từ cái thứ nhất sang cái thứ hai là toàn bộ nội dung của lập luận sai — và nó ở đây chỉ mất mười hai chữ.',
        'Đây là phiên bản trung thực nhất của lập luận chủ nhiệm Quách. Đáng chú ý: nếu bạn trình bày đúng như vậy, ông ta còn khó phản biện hơn là bản thả bị xé trên diễn đàn. Bẻ lá một lập luận tự ngã giãn chính độ mạnh của lập luận đó.',
        'Lại một cái hộp hai lựa chọn giả. BĐT không thể đưa clip gốc ra vì clip gốc nằm trong hệ thống của trường và việc đó thuộc thẩm quyền hội đồng — nhưng BĐT hoàn toàn có thể đưa bằng chứng kỹ thuật mà họ đã có. Có hơn hai lựa chọn.',
        'Đây không phải lập luận mà là một việc đặt lại khung. Nó không bóp méo ai cả — và chính vì vậy nó mạnh nhất trong số năm câu.'
      ],
      teach: 'Đây gọi là <b>thép lập luận</b> (steelman) — bản nâng cấp công bằng nhất của phe đối phương. Người nào nói câu này thường xuyên sẽ không bao giờ bị đối thủ bẻ bằng chính lập luận của họ, vì bạn đã tự bẻ trước rồi.\n\nVà nhớ: người đối phương không phải kẻ thù. Họ là người đang sai. Hai người đó đôi khi trùng nhau, nhưng đôi khi thì không.',
      skill: 'argument' },

    { type: 'pick', tag: 'Vòng 3 · Cú gài', skill: 'argument',
      q: '09:47. Chủ nhiệm Quách đưa ra một câu hỏi trước toàn hội trường:',
      sub: '"Nếu hội đồng không kỷ luật cô Lan trong hôm nay, thì xin hỏi — tháng sau, các bạn dám báo cáo bất kỳ điều gì về giáo viên nữa không?"\n\nCả hội trường im lặng ba giây. Bạn nhìn thấy cô Lan cúi đầu. Bạn hiểu vì sao: câu đó nghe rất chính nghĩa.\n\nBạn nói gì?',
      correct: 0,
      options: [
        { t: '"Câu hỏi đó đang giả định rằng điều duy nhất có thể xảy ra là nếu không kỷ luật thì sẽ không ai dám báo cáo. Nhưng còn một khả năng nữa, và khả năng đó mới đang xảy ra: một người bị nghi ngờ vô tội trong khi mọi thứ vẫn tiếp diễn — không ai dám báo cáo vì sợ bị gộp. Đó mới là điều đang làm BĐT mất ngủ bốn ngày nay."',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời đẳng cấp cục trường. Bạn <b>không phủ nhận lo lắng của ông ta</b> — bạn thừa nhận nó có lý — rồi mở ra <em>khả năng thứ ba</em> mà cả hội trường đang bỏ qua.\n\nĐây chính là kỹ thuật diễn giải: đừng cãi với mệnh đề, hãy mở rộng tập hợp các khả năng. Ông ta đặt hai lựa chọn; bạn thêm lựa chọn thứ ba và hỏi xem lựa chọn đó có đúng không.',
          teach: 'Câu hỏi "nếu không làm A thì sẽ ra sao?" luôn dễ bị đặt trong một tình huống mà A là lựa chọn hiển nhiên. Việc của người phản biện không phải là tìm cách bác bỏ câu hỏi, mà là hỏi: <b>"còn lựa chọn nào khác ngoài hai cái này không?"</b> — và thường sẽ có.' },
        { t: '"Thầy đừng dùng trẻ em làm cái cớ. Nếu thầy tin vào điều thầy nói, thì bỏ băng quay lên và trình bày tại đây."',
          d: 'Chọn đánh bằng nghị lực.',
          score: 1, verdict: 'mid',
          fb: 'Câu này sắc, gây áp lực tốt, và có một phần đúng: nếu ông ta tin vào điều mình nói, băng quay sẽ cho thấy câu hỏi của ông ta là giả.\n\nNhưng nó là một cuộc tấn công cá nhân, và bạn vừa dạy 300 người ở đây rằng phản biện là nhắm vào điều người ta nói chứ không phải vào người nói. Câu này làm mềng hiệu trường và mất thiên hậu.\n\nĐiểm một: bạn có thể bỏ điểm này. Điểm hai: bạn đã trở thành chính thứ bạn cảnh báo.',
          teach: 'Có những câu "thắng được trong 5 giây" và đổi lại mất cả buổi. Nếu bạn không chắc mình có thể xử lý cả hai phe cùng lúc, hãy chọn phe mà bạn còn tồn tại được sau đó.' },
        { t: '"Cháu xin lỗi, cháu là học sinh, cháu không đủ tư cách nói chuyện này ở đây."',
          score: 0, verdict: 'bad',
          fb: 'Bạn vừa rút lui khỏi chính vụ án mà mình đã dựng. Việc bạn là học sinh không có nghĩa là bạn không có quyền trình bày ở đây — BĐT được mời để trình bày, và ông Quách không đứng đây vì tư cách mà vì quyền.\n\nNhưng nói "không đủ tư cách" không phải là khiêm tốn. Đó là đầu hàng, và nó khiến cả 300 người tưởng lập luận của bạn chưa đáng trình bày.',
          teach: 'Khiêm tốn và tự hạ thấp là hai thứ khác nhau. Khiêm tốn: "Tôi có thể sai, đây là giới hạn của tôi." Tự hạ thấp: "Tôi không đáng nói." Chỉ dùng thứ nhất.' },
        { t: '"Câu đó không đúng, thầy Quách, và tôi sẽ không giải thích thêm ở đây."',
          score: 0, trap: 'Tuyên bố kết luận không kèm lập luận',
          trapDesc: 'Bạn nói "không đúng" mà không chỉ ra vì sao — để bên kia đưa ra lý do. Hội trường 300 người sẽ nhớ cảm giác này, không nhớ nội dung.',
          verdict: 'bad',
          fb: 'Đây là cách khiến một hội trường bắt đầu nghi ngờ bạn. "Không đúng" không phải lập luận; nó là một cảm giác. Người nghe không kiểm tra được cảm giác, nên họ sẽ tin vào cảm giác tệ nhất mà họ có.\n\nBạn có mọi thứ cần để nói "vì sao": bản ghi 11 phút, ba điểm ghép, log 21:09. Đừng vứt đi vì ngại mất bốn phút.',
          teach: 'Bất biện không phải là giữ lại lời cuối cùng. <b>Bất biện là giữ được lời cuối cùng sau khi đã trả lời câu hỏi khó nhất.</b>' }
      ],
      maxPts: 4
    },

    { type: 'argue', tag: 'Vòng 4 · Tự trình bày', skill: 'argument', max: 3,
      q: 'Đến lượt bạn. Bốn phút, không kịch bản.',
      sub: 'Chọn một bản có sẵn hoặc tự viết. Chấm điểm theo 3 tiêu chí: bằng chứng, đối diện đối phương, điều kiện.',
      context: 'Sau câu cuối của bạn, hội đồng kỷ luật sẽ bỏ phiếu. Họ không cần bạn thắng — họ cần biết mức độ chắc chắn của từng phát hiện. Hãy nói rõ điều đó cho họ.',
      minWords: 20,
      ph: 'Lời trình bày của bạn:',
      presets: [
        { t: 'Tôi không nói cô Lan vô tội, vì BĐT chưa đủ tư liệu để nói vậy. Tôi nói điều này: clip trên diễn đàn không phải bằng chứng, vì nó bị ghép từ ba đoạn ghi khác nhau, và bản ghi gốc 11 phút của phòng giáo viên có đầy đủ câu hỏi mà clip đã cắt đi. Nếu hội đồng cần một quyết định hôm nay, xin hội đồng không lấy clip làm căn cứ. Nếu cần một quyết định về kỷ luật, tôi đề nghị đợi bản ghi gốc được thẩm xét bởi người ngoài.',
          score: 3,
          fb: 'Câu này làm ba việc trong bốn phút: nói rõ điều mình <b>không</b> khẳng định, nói rõ điều mình khẳng định, và đưa ra <b>một con đường ra khỏi tình thế</b> thay vì chỉ ra một con đường vào. Việc thứ ba là việc thật sự thay đổi kết quả phiếu bầu.' },
        { t: 'Bằng chứng cho thấy cô Lan không có động cơ, vì nếu có cô ấy sẽ không thú nhận là em họ trước ban giám hiệu.',
          score: 0,
          trap: 'Suy luận từ tâm lý',
          trapDesc: 'Bạn vừa kết luận về ý thức của một người bằng cách đoán. Không có bằng chứng nào trong hồ sơ đo được điều đó, và không tòa nào chấp nhận loại suy luận đó.',
          fb: 'Lập luận này nghe thuyết phục tuyệt vời và hoàn toàn không dùng đến gì. "Không có động cơ" là một khẳng định về tâm trạng của người khác — thứ mà tư duy phản biện không bao giờ đòi bạng chứng minh và cũng không bao giờ tin bạn về nó.\n\nLập luận này cũng sẽ tự sụp trước hội trường: ai cũng có thể hỏi "ai bảo có động cơ?" và bạn sẽ không có câu trả lời.' },
        { t: 'Chúng tôi đã đính chính công khai và xin mọi người không lan truyền. Đó là tất cả những gì BĐT làm được, phần còn lại thuộc về nhà trường.',
          score: 1,
          fb: 'Lịch sự và đúng giới hạn quyền — nhưng đây là câu của người đang rút lui, nói trong hội trường đang chờ câu trả lời. Bạn đến đây để đưa ra một điều gì đó, và bạn đưa ra việc bạn đã làm.\n\nNếu bạn chọn giới hạn phạm vi, hãy nói <b>cái mình có</b> trước, rồi nói <b>cái mình không có</b> sau. Đảo lại thứ tự, người nghe chỉ nhớ phần trống.' }
      ],
      rubric: [
        { label: 'Nêu bằng chứng cụ thể, không nói chung chung' },
        { label: 'Nói rõ điều mình không khẳng định / giới hạn phạm vi' },
        { label: 'Đưa ra một hướng ra khỏi tình thế' }
      ],
      rubricCheck: function (t) {
        return [
          { label: 'Nêu bằng chứng cụ thể, không nói chung chung', hit: LL.hasAny(t, ['clip', '47', 'ghép', '11 phút', 'bản ghi', '12.4', '24.9', '38.3', '21:09', 'camera', 'log', 'file', 'tệp']),
            note: 'Một câu "chúng tôi có bằng chứng" không phải bằng chứng. Cần thứ người nghe tự kiểm chứng lại được.' },
          { label: 'Nói rõ điều mình không khẳng định / giới hạn phạm vi', hit: LL.hasAny(t, ['không nói', 'chưa đủ', 'không phải', 'chỉ là', 'giới hạn', 'chưa thể', 'không khẳng định', 'tôi không biết', 'chưa chắc', 'chưa có', 'không cho thấy', 'chưa nên', 'chưa kết luận', 'chưa đủ căn cứ', 'không thể']),
            note: 'Chỉ ra giới hạn của mình trước khi ai phải chỉ ra giúp. Đây là thứ khiến người nghe tin phần còn lại.' },
          { label: 'Đưa ra một hướng ra khỏi tình thế', hit: LL.hasAny(t, ['đề nghị', 'nên', 'cách', 'bước', 'làm', 'tiếp theo', 'xét', 'thẩm xét', 'kiểm tra', 'đợi', 'công khai', 'câu hỏi']),
            note: 'Phản biện mà không đề xuất cách thì chỉ là phá. Chỉ ra bước tiếp theo giúp lập luận của bạn trở nên khó phản bác.' }
        ];
      },
      fb: 'Lời trình bày được chấm theo 3 tiêu chí. Cả ba đều là những thứ người nghe trong hội trường tự kiểm được — họ không cần tin bạn.',
      teach: 'Trước đám đông lớn, ba câu hỏi quan trọng nhất không phải "tôi nói gì?" mà là: <b>người nghe sẽ rời đi khi nào, họ nhớ được dòng nào, và họ cần làm gì sau đó?</b> Lập luận hay không giúp nếu nó không khiến được hành động.' },

    { type: 'multi', tag: 'Vòng 5 · Điều kiện đổi ý', skill: 'argument',
      q: 'Sau buổi họp, phóng viên hỏi bạn một câu mà ai cũng hỏi và không ai trả lời thật:',
      sub: '"Điều gì sẽ khiến BĐT đổi ý?"\n\nChọn những câu trả lời mà bạn thật lòng đồng ý — những câu làm lập luận của bạn trở nên đáng tin hơn trong mắt người đối diện.',
      items: [
        { t: 'Nếu bản ghi gốc cho thấy 47 giây đó là một cuộc họp liên tục chứ không phải ba đoạn ghép.' },
        { t: 'Nếu có bằng chứng độc lập cho thấy bài của Hạnh bị sao chép ở mức bất thường so với tần suất nền của chính câu đó.' },
        { t: 'Nếu cô Lan bị phát hiện xem bài trước khi học sinh nộp bài, có hồ sơ ghi rõ thời điểm.' },
        { t: 'Chỉ cần có đủ người bình luận đồng ý với lập luận của tôi.' },
        { t: 'Tôi sẽ đổi ý nếu cô Hồng bảo tôi đổi.' },
        { t: 'Tôi không đổi ý với bất cứ ai, kể cả với chính mình.' }
      ],
      answer: [0, 1, 2],
      fb: 'Ba điều kiện đầu đều là thông tin có thể kiểm chứng và có thể làm lập luận của bạn đổi chiều. Đó chính là lý do chúng làm bạn đáng tin hơn — và cũng là lý do chúng làm bạn trông yếu hơn một chút trong mắt phe bạn.\n\nNgười nói "tôi không đổi ý với bất cứ ai" không phải là người mạnh. Họ là người đã lờ đi việc nghĩ.',
      teach: 'Câu hỏi "điều gì sẽ khiến bạn đổi ý?" là phép thử tính chính trực, vì ai cũng nói trước khi được hỏi. <b>Câu trả lời "không có gì" là câu trả lời của người chưa bao giờ thật sự nghĩ.</b> Câu trả lời tốt luôn nằm ở dạng: "có hai hoặc ba thứ, và đây là chúng".',
      fbMid: 'Bạn chọn được phần lớn, nhưng để lại một điều kiện mà bạn không thật lòng — hoặc bỏ sót một điều kiện mà bạn có. Một danh sách điều kiện đổi ý không trung thực còn tệ hơn là không có danh sách nào.' },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'argument',
      q: 'Nhật ký: điều gì ở hội trường làm bạn khó chịu nhất?',
      sub: 'Không phải vì ai đó thắng. Mà vì bạn thấy điều gì đó trong chính mình.',
      prompt: 'Viết về một lập luận mà bạn nghe xong và thấy... hơi giống mình. Dù nó ở phe kia.',
      hint: 'Cô Hồng từng nói: "Người biết tự phòng vệ trước lập luận của mình sẽ nhanh chóng học được nhiều hơn người chỉ biết phản biện lập luận của người khác."' },

    { type: 'narr', tag: 'Kết màn 6 · Một vụ nữa', text:
`14:00. Hội trường vắng.

Hội đồng bỏ phiếu: <strong>4–3</strong>. Bốn thầy bỏ phiếu "đình chỉ thao tác chấm điểm của cô Lan cho đến khi thẩm xét xong". Ba thầy bỏ phiếu "chưa đủ căn cứ".

Không có kỷ luật. Cũng không có minh xác.

Hành lang ngoài hội trường, cô Lan đứng nói chuyện với một nhóm học sinh. Một trong số đó — Hạnh — nói với bạn một câu mà bạn phải đi về nhà, mở sổ tay ra, và ngồi nhìn nó rất lâu:

"Em nói với tớ, giáo viên em ấy không gian lận, <em>vì tờ giấy thi của em ấy có mép gấp khác</em>."

Câu đó rất buồn cười. Nhưng nó cho bạn một dữ kiện mà không ai trong cả hội trường đã hỏi:

<strong>Làm sao xác định tờ giấy thi nào bị hoán đổi, trước khi bàn thi được nộp?</strong>

Đó chính là câu hỏi mà cô Hồng nói trong tin nhắn hôm qua. Câu đúng ở đó mà chưa ai được nghe.

Bạn còn màn cuối. Và lần này, người quyết định sẽ không phải hội đồng kỷ luật.

Người quyết định là chính bạn.` }
  ]

});