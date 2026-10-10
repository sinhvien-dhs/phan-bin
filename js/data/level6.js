/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 6: HỘI NGHỊ
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Bảo vệ lập luận & phản biện có phong cách
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 6,
  title: 'HỘI NGHỊ',
  skill: 'argument',
  skillName: 'Bảo vệ lập luận & phản biện có phong cách',
  skillIcon: '⚖️',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Hội trường, 08:55 sáng', text:
`Hội trường có 300 chỗ. Ngồi đầy. Phía trên, bảng điện tử chiếu nguyên văn bài đăng — 3.214 lượt thích, 1.902 bình luận, và một danh sách dài các phần mềm mà bọn trẻ đang dùng để "làm bài nhanh hơn".

Trên bàn hội đồng: thầy Tuấn, ba giáo viên khối Vật lý, một đại diện phụ trách đạo đức học đường. Bàn đối diện là đại diện học sinh khối 11. Phía sau là 40 phóng viên và một chiếc livestream có 6.000 người xem.

Hai vấn đề đang chờ bạn ở đây, và chúng **khác nhau**:

1. **Hải dùng AI hay không** — một vụ cá nhân.
2. **Nhà trường có nên cho phép dùng AI trong môn Vật lý không** — một vụ chính sách.

Người ngồi trong phòng quan tâm cả hai, nhưng chỉ một trong hai là thứ bạn có thể quyết định hôm nay.

Bạn ngồi ở bàn BĐT. Bên cạnh là Kiên, mặt tái. Cô Hồng nói nhỏ một câu duy nhất:

"Trong lúc đó bên kia sẽ trích dẫn sai lập luận của mình. Cứ <em>trình bày lại đúng lập luận đó</em>. Đừng trình bày lập luận mình muốn họ nghe."

Nghe xong bạn mới hiểu đây là bài khó nhất của cả vụ án. Không phải vì bạn thiếu bằng chứng.

Mà vì bạn có bằng chứng.` },

    { type: 'say', who: 'Đại diện học sinh khối 11 (đọc từ livestream)', role: 'Bầu cử chủ tọa cuộc họp', avatar: '📱',
      text: `Câu này được đọc ra phòng hội trường và đồng thời chiếu lên bảng điện tử, nơi có 6.000 người đang xem:

"Nếu BĐT bảo dấu vết g = 9,81 không đủ để kết tội, thì theo BĐT học sinh sử dụng công cụ AI để giải hộ bài là hoàn toàn không bị phát hiện, và quy định nào cũng vô nghĩa. Nếu vậy thì cứ bỏ hết quy chế đi."` },

    { type: 'pick', tag: 'Vòng 1 · Trả lời phản biện', skill: 'argument',
      q: 'Micro vừa được chuyền tới bàn BĐT. Bạn nói gì?',
      sub: 'Bạn có 4 phút. Cả 6.000 người xem livestream đang nghe.',
      correct: 0,
      options: [
        { t: '"Chúng tôi chưa nói dấu vết g = 9,81 là không đủ để kết tội ai. Chúng tôi nói nó không đủ để kết tội HẢI — vì dấu vết đó xuất hiện ở 33 bài trên 100 trước khi lớp nào dùng công cụ. Còn về quy chế: dấu vết giống nhau chỉ bắt được người sao chép nguyên văn, còn người hỏi AI để giải thích rồi tự viết lại thì không để lại gì cả. Chúng tôi đề xuất quy chể đánh giá theo hai đầu: bài có lỗi không nói gì, nhưng độ nguyên văn và lý do sai có nói."',
          d: 'Tách hai vấn đề, đính chính tiền đề, đề xuất lưới an toàn.',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời ở đẳng cấp cao. Ba kỹ thuật được dùng cùng lúc: <b>đính chính tiền đề</b> (bạn không nói cái bạn chưa nói), <b>tách hai vấn đề</b> (vụ cá nhân và vụ chính sách), và <b>đề xuất lưới thay vì đề xuất cấm</b>.\n\nPhần cuối là phần quan trọng nhất. "Độ nguyên văn và lý do sai" là hai tiêu chí mà học sinh thực sự có thể bị đánh giá — và vì nó đo được cái có thật, nó vừa chống gian lận vừa không cấm học.',
          teach: 'Nguyên tắc trả lời phản biện: <b>đưa người nghe về dữ kiện</b>. Không cần họ đồng ý với kết luận của bạn — chỉ cần họ thấy tiền đề của họ có vấn đề. Và khi đã chặn được một hướng tiêu cực, hãy đưa ra <b>một lối thay thế khả thi</b> trong cùng câu — đó là việc thay đổi kết quả phiếu bầu.' },
        { t: '"Các bạn chỉ biết đọc bình luận. 6.000 người nghe mà không ai đính chính — đó không phải hỏi tư duy, đó là đám đông."',
          d: 'Công kích người đối diện, không công kích lập luận.',
          score: 0, trap: 'Tấn công con người',
          trapDesc: 'Bạn đang trả lời "cách bạn tin" thay vì trả lời "điều bạn tin có đúng không". 6.000 người xem không thấy bạn sai — họ chỉ thấy hai bên chửi nhau, và họ sẽ ghép bạn vào phe đông.',
          verdict: 'bad',
          fb: 'Bạn vừa mất 6.000 khán giả và chỉ thắng được một vài phòng thu. Đây là cách phản biện bị thất bại nhất: đúng về nội dung, vô dụng về hành động.\n\nNhớ Màn 3 — bạn đã tự dán nhãn "tấn công con người" cho câu này. Hôm nay bạn vừa viết ra nó.',
          teach: 'Một câu phản biện tốt có thể khiến cả người đối diện bỏ phiếu cho mình. Câu trên chỉ khiến họ đóng livestream.' },
        { t: '"Chúng tôi xin lỗi, chúng tôi không đủ chứng cứ để kết luận. Vụ này do hội đồng quyết định, không phải BĐT."',
          d: 'Lùi toàn bộ.',
          score: 0, verdict: 'bad',
          fb: 'Bạn vừa tự bác bỏ bằng chứng mà cả tối qua bạn dựng lên. Hội đồng cần biết <b>mức độ chắc chắn</b> của từng phát hiện — "chắc một nửa" và "chắc một trăm phần trăm" là hai loại thông tin khác nhau hoàn toàn.\n\nRút lại toàn bộ là lựa chọn của người sợ sai, không phải của người trung thực. Trung thực là nói đúng mức độ.',
          teach: 'Khi thiếu bằng chứng, đừng nói "tôi không biết" nếu bạn biết một phần. Nói: <b>"Tôi chắc chắn về A và B. Tôi chưa đủ dữ kiện về C."</b> Câu đó vẫn có giá trị quyết định — và nó là câu của người biết mình đang nói gì.' },
        { t: '"Có mười tám người khác cũng đang đồng tình với BĐT. Các bạn đang đếm rẻ."',
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
      q: 'Trong buổi họp, có năm lập luận được nêu. Lập luận nào <b>trình bày đối phương một cách công bằng hơn</b>, và lập luận nào <b>bóp méo</b>?',
      sub: 'Đây là kỹ năng mà người mạnh nhất cũng phải luyện: trình bày lập luận đối phương <em>tự tốt nhất có thể</em> trước khi phản công. Người thua vì bóp méo là người làm cho chính lập luận của mình trông yếu đi.',
      options: ['Bộc lộ lập luận đối phương công bằng hơn', 'Bóp méo lập luận đối phương'],
      items: [
        '"Dấu vết g = 9,81 chỉ nói rằng bài bị thuận tay sao chép, không nói rằng ai đó đã nhờ AI giải." — BĐT' ,
        '"BĐT bảo dấu vết đó không đủ kết tội, nghĩa là BĐT bảo quy định nào cũng vô nghĩa." — trên diễn đàn',
        '"Tôi chỉ nói một điều: tôi không thể xác minh bài của em Hải có bị can thiệp hay không, vì bài làm nộp tay không lưu metadata. Tôi không nói em ấy có hay không." — thầy Tuấn',
        '"Chỉ có hai lựa chọn: hoặc cấm AI triệt để trong môn Vật lý, hoặc chấp nhận rằng việc học gần như biến mất." — trên diễn đàn',
        '"Tôi không nói BĐT đúng. Tôi nói một điều khác: học sinh lớp 11A1 đã bị cả lớp đoán oan suốt bốn ngày mà không ai sửa lại. Điều đó mới là chuyện đáng nói." — cô Hồng'
      ],
      answer: [0, 1, 0, 1, 0],
      explain: [
        'Đây là bản lập luận của BĐT ở dạng trung thực nhất: nêu cái dấu vết có, và nêu cái dấu vết không có. Người đối phương muốn phản công cũng phải công nhận phần "có" trước.',
        'Bóp méo. "Dấu vết không đủ kết tội Hải" là một phát hiện có giới hạn về <b>một người</b>; "quy định nào cũng vô nghĩa" là một kết luận về <b>cả hệ thống quy định</b>. Chuyển từ cái thứ nhất sang cái thứ hai là toàn bộ nội dung của lập luận sai — và nó ở đây chỉ mất mười mấy chữ.',
        'Đây là phiên bản trung thực nhất của lập luận thầy Tuấn. Đáng chú ý: nếu bạn trình bày đúng như vậy, ông còn khó phản biện hơn là bản thả bị xé trên diễn đàn. Bẻ lá một lập luận tự ngã giãn chính độ mạnh của lập luận đó.',
        'Lại một cái hộp hai lựa chọn giả. Có ít nhất ba lựa chọn thứ ba nữa: đánh giá theo mức độ nguyên văn, cho dùng AI ở phần luyện tập nhưng không ở phần thi, hoặc yêu cầu khai báo công khai công cụ. Chỉ cần một trong ba cũng làm cái hộp này vỡ.',
        'Đây không phải lập luận mà là một việc đặt lại khung. Nó không bóp méo ai cả — và chính vì vậy nó mạnh nhất trong số năm câu.'
      ],
      teach: 'Đây gọi là <b>thép lập luận</b> (steelman) — bản nâng cấp công bằng nhất của phe đối phương. Người nào nói câu này thường xuyên sẽ không bao giờ bị đối thủ bẻ bằng chính lập luận của họ, vì bạn đã tự bẻ trước rồi.\n\nVà nhớ: người đối phương không phải kẻ thù. Họ là người đang sai. Hai người đó đôi khi trùng nhau, nhưng đôi khi thì không.',
      skill: 'argument' },

    { type: 'pick', tag: 'Vòng 3 · Cú gài', skill: 'argument',
      q: '09:47. Chủ nhiệm khối đưa ra một câu hỏi trước toàn hội trường:',
      sub: '"Nếu hội đồng không kỷ luật Hải trong hôm nay, thì xin hỏi — tháng sau, khi phát hiện học sinh khối mình dùng công cụ để làm bài thi, các thầy sẽ dám báo cáo không?"\n\nCả hội trường im lặng ba giây. Bạn nhìn thấy Hải cúi đầu. Bạn hiểu vì sao: câu đó nghe rất chính nghĩa.\n\nBạn nói gì?',
      correct: 1,
      options: [
        { t: '"Câu hỏi đó đang giả định rằng điều duy nhất có thể xảy ra là nếu không kỷ luật thì sẽ không ai dám báo cáo. Nhưng còn một khả năng nữa, và khả năng đó mới đang xảy ra: một học sinh bị nghi oan trong cả lớp mà không có ai sửa lại. Đó mới là điều đang làm cả khối im lặng."',
          score: 4, verdict: 'good',
          fb: 'Đây là câu trả lời đẳng cấp cục trường. Bạn <b>không phủ nhận lo lắng của ông ta</b> — bạn thừa nhận nó có lý — rồi mở ra <em>khả năng thứ ba</em> mà cả hội trường đang bỏ qua.\n\nĐây chính là kỹ thuật diễn giải: đừng cãi với mệnh đề, hãy mở rộng tập hợp các khả năng. Ông ta đặt hai lựa chọn; bạn thêm lựa chọn thứ ba và hỏi xem lựa chọn đó có đúng không.',
          teach: 'Câu hỏi "nếu không làm A thì sẽ ra sao?" luôn dễ bị đặt trong một tình huống mà A là lựa chọn hiển nhiên. Việc của người phản biện không phải là tìm cách bác bỏ câu hỏi, mà là hỏi: <b>"còn lựa chọn nào khác ngoài hai cái này không?"</b> — và thường sẽ có.' },
        { t: '"Câu này đặt sai đề. Đây không phải chuyện Hải hay không dùng AI. Đây là chuyện hội đồng có quyền gì trong lúc đó. Quyền của hội đồng là họp khảo, không phải phán quyết. Còn nếu các anh muốn nói về việc báo cáo, thì xin mời — nhưng đó là câu hỏi khác, và nó nên được trả lời sau, không phải ở giữa cuộc họp về một học sinh."',
          d: 'Công khai điều kiện mà người nói đã bỏ qua, rồi tách vấn đề.',
          score: 4, verdict: 'good',
          fb: 'Câu này cũng rất mạnh, theo hướng khác: nó chỉ ra rằng câu hỏi đang trả lời <em>một câu hỏi khác</em>. Ông ta đang dùng "nếu không kỷ luật thì không ai dám báo cáo" để đòi hội đồng ra một quyết định cá nhân.\n\nNó mạnh về mặt nguyên tắc, nhưng yếu hơn một chút về mặt chính trị: bạn vừa bác bỏ câu hỏi của người quyền lực trước 300 người và 40 phóng viên. Nếu bạn cảm thấy mình không giữ được cả hai phe, hãy chọn câu trước — nó khiến cả hội trường tự thấy lựa chọn thứ ba mà không cần bạn tranh cãi.',
          teach: 'Hai kiểu phản biện: <b>thêm lựa chọn</b> và <b>tách câu hỏi</b>. Cái thứ hai mạnh về nguyên tắc nhưng tốn nhiều uy tín hơn. Trong hội trường thật, hãy chọn cái nào giữ được nhiều người nghe theo mình hơn.' },
        { t: '"Cháu xin lỗi, cháu là học sinh, cháu không đủ tư cách nói chuyện này ở đây."',
          score: 0, verdict: 'bad',
          fb: 'Bạn vừa rút lui khỏi chính vụ án mà mình đã dựng. Việc bạn là học sinh không có nghĩa là bạn không có quyền trình bày ở đây — BĐT được mời để trình bày.\n\nNhưng nói "không đủ tư cách" không phải là khiêm tốn. Đó là đầu hàng, và nó khiến cả 300 người tưởng lập luận của bạn chưa đáng trình bày.',
          teach: 'Khiêm tốn và tự hạ thấp là hai thứ khác nhau. Khiêm tốn: "Tôi có thể sai, đây là giới hạn của tôi." Tự hạ thấp: "Tôi không đáng nói." Chỉ dùng thứ nhất.' },
        { t: '"Câu đó không đúng, thầy, và tôi sẽ không giải thích thêm ở đây."',
          score: 0, trap: 'Tuyên bố kết luận không kèm lập luận',
          trapDesc: 'Bạn nói "không đúng" mà không chỉ ra vì sao — để bên kia đưa ra lý do. Hội trường 300 người sẽ nhớ cảm giác này, không nhớ nội dung.',
          verdict: 'bad',
          fb: 'Đây là cách khiến một hội trường bắt đầu nghi ngờ bạn. "Không đúng" không phải lập luận; nó là một cảm giác. Người nghe không kiểm tra được cảm giác, nên họ sẽ tin vào cảm giác tệ nhất mà họ có.\n\nBạn có mọi thứ cần để nói "vì sao": biểu đồ 4.000 bài, log 9 máy, con số 33/100. Đừng vứt đi vì ngại mất bốn phút.',
          teach: 'Bất biện không phải là giữ lại lời cuối cùng. <b>Bất biện là giữ được lời cuối cùng sau khi đã trả lời câu hỏi khó nhất.</b>' }
      ],
      maxPts: 4
    },

    { type: 'argue', tag: 'Vòng 4 · Tự trình bày', skill: 'argument', max: 3,
      q: 'Đến lượt bạn. Bốn phút, không kịch bản.',
      sub: 'Chọn một bản có sẵn hoặc tự viết. Chấm điểm theo 3 tiêu chí: bằng chứng, đối diện đối phương, điều kiện.',
      context: 'Sau câu cuối của bạn, hội đồng sẽ bỏ phiếu. Họ không cần bạn thắng — họ cần biết mức độ chắc chắn của từng phát hiện. Hãy nói rõ điều đó cho họ.',
      minWords: 20,
      ph: 'Lời trình bày của bạn:',
      presets: [
        { t: 'Tôi không nói Hải vô tội, vì chưa ai kiểm tra được điện thoại của cậu ấy. Tôi nói điều này: dấu vết g = 9,81 xuất hiện ở 33 bài trên 100 trong ba năm trước, trước khi lớp nào dùng công cụ, nên nó không chứng minh điều gì về Hải. Tôi không nói việc Hải dùng công cụ là bình thường — tôi nói việc đó chưa được kiểm tra, và kết luận "không có bằng chứng" khác hẳn "có bằng chứng ngược lại". Nếu hội đồng cần một quyết định hôm nay, xin hội đồng đình chỉ xử lý vụ Hải và chuyển câu hỏi quy chế sang phiên sau, nơi có thể hỏi cả khối.',
          score: 3,
          fb: 'Câu này làm ba việc trong bốn phút: nói rõ điều mình <b>không</b> khẳng định, nói rõ điều mình khẳng định, và đưa ra <b>một con đường ra khỏi tình thế</b> thay vì chỉ ra một con đường vào. Việc thứ ba là việc thật sự thay đổi kết quả phiếu bầu.' },
        { t: 'Bằng chứng cho thấy Hải không có động cơ, vì nếu có hắn sẽ không thú nhận là đã mở Google.',
          score: 0,
          trap: 'Suy luận từ tâm lý',
          trapDesc: 'Bạn vừa kết luận về ý thức của một người bằng cách đoán. Không có bằng chứng nào trong hồ sơ đo được điều đó, và không tòa nào chấp nhận loại suy luận đó.',
          fb: 'Lập luận này nghe thuyết phục tuyệt vời và hoàn toàn không dùng đến gì. "Không có động cơ" là một khẳng định về tâm trạng của người khác — thứ mà tư duy phản biện không bao giờ đòi bạn chứng minh và cũng không bao giờ tin bạn về nó.\n\nLập luận này cũng sẽ tự sụp trước hội trường: ai cũng có thể hỏi "ai bảo có động cơ?" và bạn sẽ không có câu trả lời.' },
        { t: 'Chúng tôi đã đính chính công khai và xin mọi người không lan truyền. Đó là tất cả những gì BĐT làm được, phần còn lại thuộc về hội đồng.',
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
          { label: 'Nêu bằng chứng cụ thể, không nói chung chung', hit: LL.hasAny(t, ['9,81', '9.81', 'đề', 'bài', 'log', 'phòng máy', 'máy', '33', '100', 'hồ sơ', 'tệp', 'camera', 'điểm']),
            note: 'Một câu "chúng tôi có bằng chứng" không phải bằng chứng. Cần thứ người nghe tự kiểm chứng lại được.' },
          { label: 'Nói rõ điều mình không khẳng định / giới hạn phạm vi', hit: LL.hasAny(t, ['không nói', 'chưa đủ', 'không phải', 'chỉ là', 'giới hạn', 'chưa thể', 'không khẳng định', 'tôi không biết', 'chưa chắc', 'chưa có', 'không cho thấy', 'chưa nên', 'chưa kết luận', 'chưa đủ căn cứ', 'không thể']),
            note: 'Chỉ ra giới hạn của mình trước khi ai phải chỉ ra giúp. Đây là thứ khiến người nghe tin phần còn lại.' },
          { label: 'Đưa ra một hướng ra khỏi tình thế', hit: LL.hasAny(t, ['đề nghị', 'nên', 'cách', 'bước', 'làm', 'tiếp theo', 'xét', 'thẩm xét', 'kiểm tra', 'đợi', 'công khai', 'câu hỏi', 'quy chế', 'đình chỉ']),
            note: 'Phản biện mà không đề xuất cách thì chỉ là phá. Chỉ ra bước tiếp theo giúp lập luận của bạn trở nên khó phản bác.' }
        ];
      },
      fb: 'Lời trình bày được chấm theo 3 tiêu chí. Cả ba đều là những thứ người nghe trong hội trường tự kiểm được — họ không cần tin bạn.',
      teach: 'Trước đám đông lớn, ba câu hỏi quan trọng nhất không phải "tôi nói gì?" mà là: <b>người nghe sẽ rời đi khi nào, họ nhớ được dòng nào, và họ cần làm gì sau đó?</b> Lập luận hay không giúp nếu nó không khiến được hành động.' },

    { type: 'multi', tag: 'Vòng 5 · Điều kiện đổi ý', skill: 'argument',
      q: 'Sau buổi họp, phóng viên hỏi bạn một câu mà ai cũng hỏi và không ai trả lời thật:',
      sub: '"Điều gì sẽ khiến BĐT đổi ý?"\n\nChọn những câu trả lời mà bạn thật lòng đồng ý — những câu làm lập luận của bạn trở nên đáng tin hơn trong mắt người đối diện.',
      items: [
        { t: 'Nếu log phòng máy hoặc dữ liệu thiết bị cho thấy Hải đã dùng công cụ AI trong lúc làm bài.' },
        { t: 'Nếu có bằng chứng độc lập cho thấy bài Hải được tạo từ công cụ, không phải bởi Hải, với lỗi đặc trưng khác hẳn lỗi đã thấy.' },
        { t: 'Nếu Hải thừa nhận đã dùng công cụ và đồng thời bị xác nhận đã sao chép nguyên văn kết quả trả lời.' },
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

Hội đồng bỏ phiếu: <strong>5–4</strong>. Bốn thầy bỏ phiếu "kỷ luật Hải 0 điểm bài này". Ba thầy bỏ phiếu "chưa đủ căn cứ". Hai thầy bỏ phiếu "tạm đình chỉ chấm, mở rộng điều tra".

Không có phán quyết. Cũng không có minh xác.

Hành lang ngoài hội trường, Hải đang nói chuyện với một nhóm bạn. Một trong số đó — Đức, lớp 11A2 — nói với bạn một câu mà bạn phải đi về phòng thí nghiệm, mở sổ tay ra, và ngồi nhìn nó rất lâu:

"Anh ơi, anh lấy số liệu 33 bài trên 100 ở đâu vậy? Tại vì lớp em tuần trước làm bài kiểm tra, mình cũng dùng 9,81 — mình làm bằng tay, không dùng gì hết."

Rồi Đức thêm một câu, nhỏ hơn:

"Nhưng mà... chỗ khó nhất, lúc làm xong câu 5, mình có mở AI hỏi một câu. Một câu thôi. Mình đã xoá lịch sử."

Bạn nhìn cậu ta. Cậu ta không giấu. Cậu ta đang sợ.

Câu đó cho bạn một dữ kiện mà không ai trong cả hội trường đã hỏi, và nó đáng giá hơn mọi thứ bạn đã tìm được trong bốn ngày qua:

<strong>Quy chế của trường, tính đến giây, có thể chưa tồn tại.</strong>

Vậy thì "vi phạm quy chế" nghĩa là gì? Bạn có trả lời được không — trong vòng 48 giờ, bằng bằng chứng?

Người quyết định sẽ không phải hội đồng kỷ luật.

Người quyết định là chính bạn.` }
  ]

});