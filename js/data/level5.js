/* ═══════════════════════════════════════════════════════════
   LỰC LƯỜNG — MÀN 5: BẢN ĐỀ GIẢ ĐỊNH
   Chủ đề: AI trong môn Vật lý
   Kỹ năng: Bóc giả định ẩn trong lập luận
   ═══════════════════════════════════════════════════════════ */

window.LEVELS = window.LEVELS || [];
window.LEVELS.push({

  id: 5,
  title: 'BẢN ĐỀ GIẢ ĐỊNH',
  skill: 'assumption',
  skillName: 'Bóc giả định ẩn trong lập luận',
  skillIcon: '🧩',

  steps: [

    { type: 'narr', tag: 'Mở đầu · Bàn giữa sân trường, 16:05', text:
`Bạn tìm Hải ở bàn đá giữa sân, chỗ duy nhất không có camera.

Cậu ta không giận. Bạn hơi ngạc nhiên — bạn đã chuẩn bị sẵn cả khăn giấy trong túi, giờ thấy hơi lãng phí.

"Tao đang chờ," Hải nói. "Chờ xem có ai hỏi tao không."

Bạn mở sổ tay. Bạn có bốn câu hỏi, chuẩn bị từ 23 giờ đêm qua.

Nhưng trước khi hỏi, bạn nhận ra một thứ: nếu bạn hỏi sai, bạn sẽ tự hại mình. Người bị buộc tội là nguồn thông tin cuối cùng và cũng là nguồn dễ bị nhiễu nhất. Người ta nhớ rất rõ điều tốt và nhớ rất mơ hồ điều xấu — <strong>vì bộ nhớ về lỗi lầm của mình cũng là một dạng thiên lệch.</strong>` },

    { type: 'say', who: 'Bạn', role: 'Điều tra viên BĐT', avatar: '🔎',
      text: `Trước khi tớ hỏi về vụ này, tớ hỏi về một thứ khác.

Nếu đây là bài thi của tớ, có một câu bị trừ điểm vì lý do kỹ thuật — tớ sẽ phản ứng thế nào?` },

    { type: 'say', who: 'Hải', role: 'Lớp 11A1 · bị cả lớp nghi dùng AI', avatar: '🧑‍🎓',
      text: `Tao sẽ không nộp bài của mình lần nữa.

Không phải vì giận. Vì cảm giác đó rất lạ — cả lớp mình nói chuyện với tao bằng giọng khác, như thể bài của tao không còn là của tao nữa. Có đứa còn nhắn "rồi kỳ sau dùng con này cho nhanh". Nó còn đùa. Trời ơi nó còn đùa.

Tớ nói trước: tớ không giỏi Vật lý. Tớ làm bài xong phải ngồi kiểm lại hai lần. Nếu thầy muốn hỏi gì thì hỏi — nhưng đừng xét cả lớp tội tao trong đầu, vì tao biết các bạn cũng làm bằng con đó. Chỉ là tao không đăng lên.` },

    { type: 'narr', tag: 'Bài 1', text:
`Bạn ghi lại câu trả lời của Hải, rồi lật sang trang mới.

Trên trang đó bạn vẽ một cái bảng nhỏ — cái bảng mà từ hôm nay sẽ là công cụ mạnh nhất của bạn:

<strong>BẢN ĐỒ GIẢ ĐỊNH</strong>

Mọi lập luận đều có một cái cây. Các câu bạn nói ra nằm ở cành. Nhưng mọi câu đều đứng trên một mảng rễ mà người nói <em>không bao giờ nói ra</em> — vì nếu nói ra, mình sẽ phải biện minh cho nó.

Câu hỏi bạn đặt lên đầu trang:

<em>"Nếu giả định này sai, cả lập luận có sập không?"</em>

Nếu câu trả lời là không — bạn đã tìm ra chỗ yếu.` },

    { type: 'multi', tag: 'Bài 1 · Bóc giả định', skill: 'assumption',
      q: 'Lập luận phổ biến nhất trong trường, rút gọn:',
      sub: '"Bài Hải dùng g = 9,81. Bài do AI viết thì luôn dùng 9,81. Vậy bài của Hải là do AI viết."\n\nCâu này đứng trên ba giả định mà ai cũng không nói ra. Chọn ra chúng.',
      items: [
        { t: 'Trong đề thi, 9,81 là con số bị loại trừ.' },
        { t: 'Mọi bài do AI sinh ra đều dùng 9,81.' },
        { t: 'Hải nộp bài muộn hơn các bạn khác trong lớp.' },
        { t: 'Học sinh nào dùng 9,81 thì đều không tự làm bài.' },
        { t: 'AI sinh đề thi cho chính giáo viên đó.' }
      ],
      answer: [0, 1, 3],
      fb: 'Ba giả định đúng. Mỗi giả định đều được chôn trong lập luận mà không ai bị buộc phải bảo chứng:\n\n<strong>1.</strong> 9,81 bị loại trừ. Ở đây giả định nằm ngược lại: nếu đề đã <i>ghi rõ</i> 9,8 và bài vẫn dùng 9,81, thì đó mới là điểm đáng ngờ. Người nói đảo ngược chiều giả định để lập luận nghe mạnh hơn.\n<strong>2.</strong> "Bài AI viết luôn dùng 9,81" — đây là mệnh đề tuyệt đối. Một lần nữa, chỉ cần một bài do AI viết mà dùng 9,8 là nó đổ.\n<strong>3.</strong> Dùng 9,81 ⇔ không tự làm bài. Tương quan bị biến thành nhân quả.',
      teach: 'Giả định ẩn thường nằm ở dạng "luôn luôn" hoặc "chỉ có thể". Khi nghe ai nói một điều tuyệt đối, hãy dịch nó sang một câu hỏi có thể sai: "có trường hợp nào ngược lại không?" — nếu bạn tìm ra một ví dụ duy nhất phản bác, giả định đó đã hỏng.',
      fbMid: 'Gần rồi. Bạn đã bỏ sót ít nhất một giả định đáng chú ý, và đó có thể là giả định bạn sẽ phải gặp lại nhiều nhất trong mấy ngày tới.' },

    { type: 'pick', tag: 'Bài 2 · Giả định của chính mình', skill: 'assumption',
      q: 'Bạn quay về lập luận của chính mình. Bạn viết: "Bài Hải sai kiểu của người, không phải kiểu của AI. Vậy Hải không dùng AI."',
      sub: 'Giả định ẩn nằm ở đâu trong câu đó?',
      correct: 1,
      options: [
        { t: 'Giả định ẩn nằm ở chữ "sai" — tức là bạn khá chắc mình đã tìm đủ bằng chứng.',
          score: 0, verdict: 'bad',
          fb: 'Đây là một giả định đúng, nhưng nó không phải giả định ẩn — nó đã được nói ra. Có một giả định ẩn khác, tinh vi hơn nhiều, và nó nằm ngay trong vế "vậy".',
          teach: 'Giả định ẩn hay nằm ở <b>từ nối</b>: "nên", "vì vậy", "do đó", "chứng tỏ". Chúng là nơi kẻ lập luận gài bằng chứng cần để bịp bằng chứng độc lập.' },
        { t: 'Giả định ẩn: "không có dấu vết AI trong bài thì chắc chắn bài đó không do AI tạo" — tức mọi cách dùng AI đều để lại dấu.',
          score: 3, verdict: 'good',
          fb: 'Đúng. Bạn vừa khoanh được vùng nguy hiểm: bạn đang tự dựng một giả định <em>quá rộng</em> — và giả định quá rộng là loại nguy hiểm nhất vì nó tự bào mòn uy tín của chính bạn.\n\nTrong vụ này, nhiều cách dùng AI hoàn toàn không để lại dấu vết quyết định: hỏi AI "giải thích đoạn này bằng cách khác" rồi tự viết lại bằng tay — đó là cách học tốt nhất, và nó không để lại gì trên bài. Người đã dùng AI như một người thầy tư vấn để đời, cũng không để lại dấu.\n\nBằng chứng tốt là bằng chứng <b>thu hẹp và cụ thể</b>, không phải bằng chứng hùng vĩ.',
          teach: 'Nguyên tắc của BĐT, do cô Hồng đặt ra ngày bạn vào: <b>đừng đánh bỏ cả vườn vì bạn nghi ngờ một cây.</b> Nghi ngờ toàn bộ cũng là một dạng thiên lệch — và người đọc sẽ nhận ra, dù bạn không nói ra.' },
        { t: 'Giả định ẩn: "bằng chứng thật nhất phải là log phòng máy", nghĩa là nếu không có log thì không có gì đáng tin.',
          score: 1, verdict: 'mid',
          fb: 'Bạn đang đặt tiêu chuẩn quá cao cho chính mình. Trong điều tra thực tế, bằng chứng gốc hiếm khi có — nếu bạn chỉ làm việc được khi có log, bạn sẽ bỏ mặc 99% vụ án.\n\nĐiều chỉnh: "bằng chứng nào gần với nguồn gốc nhất, ai giữ, và ai kiểm chứng lại được?" — đó là tiêu chuẩn khả thi.',
          teach: 'Tư duy phản biện không phải lúc nào cũng thắng — nhiều khi phải biết <b>biết bao nhiêu là đủ</b> để ra quyết định tốt, rồi dừng. Cứ đòi bằng chứng hoàn hảo là một trạng thái tâm lý được đặt tên là "paralysis by analysis".' },
        { t: 'Không có giả định ẩn nào. Lập luận này hoàn toàn dựa trên dữ kiện đã xác minh.',
          score: 0, verdict: 'bad',
          fb: 'Không bao giờ. <b>Mọi lập luận đều có giả định.</b> Câu này đúng về mặt kỹ thuật nhưng nó tự mâu thuẫn: nếu không có giả định, thì lập luận sẽ không cần bằng chứng nào cả — đến lúc đó nó đã không còn là lập luận nữa.\n\nThiếu giả định không phải dấu hiệu của sự chắc chắn, mà là dấu hiệu của sự bất cẩn.',
          teach: 'Câu hỏi hay để tự kiểm: <b>"câu này có còn đúng nếu tôi thay mọi chi tiết thành biến số chưa?"</b> Nếu đúng với mọi giá trị, nó gần như chẳng nói gì.' }
      ] },

    { type: 'argue', tag: 'Bài 3 · Trình bày lập luận', skill: 'assumption', max: 4,
      q: 'Bây giờ bạn phải nói ra điều đó — bằng chính giọng của bạn.',
      sub: 'Chọn một bản lập luận có sẵn, hoặc tự viết. Viết tốt hơn — nhưng đừng viết dài hơn cần thiết.',
      context: 'Bạn đang đứng trước giáo viên chủ nhiệm khối và đội phó BĐT. Có 4 phút. Người nghe sẽ phản biện bạn ngay sau câu cuối.',
      minWords: 20,
      ph: 'Lập luận của bạn:',
      presets: [
        { t: 'Bài Hải dùng g = 9,81 và đề yêu cầu 9,8, nên đó là bằng chứng Hải dùng AI.',
          score: 0,
          trap: 'Chấp nhận tiền đề của đối phương',
          trapDesc: 'Bạn lặp lại chính xác lập luận mà bạn vừa bóc rễ. Lưu ý: bạn đang ở phe cô Hồng, không phải phe đối thủ — nhưng lập luận sai thì phe nào cũng như nhau.',
          fb: 'Câu này là một lập luận, nhưng nó là lập luận của đám đông, không phải của bạn. Và bạn đã có công cụ để bác bỏ nó: con số 33 bài trên 100 cũng thiếu đơn vị và dùng 9,81 mà không có ai dùng AI.' },
        { t: 'Bài của Hải sai ở chỗ đảo chiều lực ma sát — một lỗi phải hiểu ngữ cảnh mới sinh ra, và không phải kiểu lỗi mà trợ lý AI hay mắc. Trong log phòng máy, tài khoản của Hải không có phiên truy cập công cụ AI nào trong bốn tuần. Điều này không chứng minh Hải vô tội: Hải có thể dùng điện thoại, và tôi nói trước là điều đó chưa được kiểm tra. Điều nó làm là làm yếu đi giả thuyết mà cả lớp đang bám vào. Nếu hội đồng tìm được bằng chứng khác, tôi sẽ đổi kết luận — tôi nói câu đó vì trong vụ án này không ai nên tin một ai tuyệt đối, kể cả tôi.',
          score: 4,
          fb: 'Đây là lập luận ở đúng cấp: nêu bằng chứng, giới hạn phạm vi, nói thẳng điều mình biết và điều mình không biết, và mở đường cho thông tin mới. Lưu ý ba kỹ thuật đáng học trong chính câu này: <b>giới hạn phạm vi</b> ("chưa được kiểm tra"), <b>điều kiện hóa</b> ("nếu tìm được bằng chứng khác…"), và <b>tự phòng vệ trước chính mình</b>.' },
        { t: 'Hải là người chăm chỉ, bài của cậu ta có cả lỗi lẫn dấu kết, nên chắc chắn cậu ta tự làm.',
          score: 1,
          fb: 'Bạn đang bảo vệ cậu ấy bằng một chiến lược mà cả lớp đang dùng để công kích: "người đó tốt nên không sai". Đây không phải lập luận, đây là thiên vị. Người nghe sẽ bỏ qua nó, và nếu họ nghĩ đến, họ sẽ bắt đầu nghi ngờ bạn — kể cả khi bạn đang nói thật.\n\n"Công bằng" trong điều tra có nghĩa là áp cùng một tiêu chuẩn cho mọi người — kể cả người bạn thích, và kể cả chính mình.' }
      ],
      rubric: [
        { label: 'Nêu bằng chứng cụ thể' },
        { label: 'Giới hạn phạm vi của cái bài làm chứng minh được' },
        { label: 'Có điều kiện / thừa nhận giới hạn của mình' },
        { label: 'Đối diện với lập luận đối lập' }
      ],
      rubricCheck: function (t) {
        return [
          { label: 'Nêu bằng chứng cụ thể', hit: LL.hasAny(t, ['9,81', '9.81', 'ma sát', 'log', 'phòng máy', 'lỗi', 'đơn vị', 'bài thi', 'câu 3', 'file', 'hồ sơ']),
            note: 'Lập luận không có bằng chứng đi kèm chỉ là một ý kiến được nói to.' },
          { label: 'Giới hạn phạm vi của cái bài làm chứng minh được', hit: LL.hasAny(t, ['không chứng minh', 'không phải', 'chỉ là', 'chưa đủ', 'dẫn đến', 'suy ra', 'không nói', 'làm yếu']),
            note: 'Câu "bài chứng minh X" phải đi kèm câu "bài không chứng minh Y".' },
          { label: 'Có điều kiện / thừa nhận giới hạn của mình', hit: LL.hasAny(t, ['nếu', 'chưa chắc', 'chưa biết', 'có thể', 'tôi không biết', 'chưa được kiểm tra', 'tạm', 'điều kiện', 'sẽ đổi', 'đổi kết luận']),
            note: 'Kết luận có điều kiện là dấu hiệu của người biết mình có thể sai.' },
          { label: 'Đối diện với lập luận đối lập', hit: LL.hasAny(t, ['đám đông', 'đối phương', 'mặt khác', 'lập luận kia', 'có thể nói', 'hợp lý', 'tuy nhiên', 'xét đến', 'kiên']),
            note: 'Không nhắc tới lập luận đối lập không phải là bỏ qua — người nghe sẽ tự nghĩ, và họ sẽ nghĩ tiếng của mình.' }
        ];
      },
      fb: 'Lập luận của bạn được chấm theo 4 tiêu chí: có bằng chứng, có giới hạn rõ, có điều kiện, và có đối diện với phe kia. Thiếu một tiêu chí không phải sai — nhưng là chưa đủ chắc.',
      teach: 'Người lớn khác người trẻ ở đúng một chỗ: người lớn <b>giảm từ</b>, người trẻ <b>tăng từ</b>. "Tôi nghĩ là…", "nếu không có gì ngược lại…", "tôi chưa đủ dữ kiện để…". Ba cụm đó rẻ hơn bất kỳ lập luận nào mà bạn có thêm được, và chúng làm lập luận của bạn khó phản bác hơn nhiều.' },

    { type: 'pick', tag: 'Cú bẫy ngoài đời', skill: 'assumption',
      q: '16:48. Cô Hồng đưa bạn một thông tin mới. Bạn xử lý thế nào?',
      sub: 'Trong hồ sơ của một giáo viên khối khác có một mục: "Năm học trước, bị nhắc nhở vì chấm bài có lỗi hệ thống". Người đó đã đăng bài phản bác Hải mạnh nhất trên diễn đàn.',
      correct: 1,
      options: [
        { t: 'Đưa ngay vào báo cáo. Người đã từng bị nhắc nhở thì không đáng tin. Bỏ qua lời họ.',
          score: 0, trap: 'Phá huỷ uy tín trước khi kiểm chứng',
          trapDesc: 'Bạn để lại việc họ nói trước mắt, rồi dùng lỗi quá khứ của họ để bác bỏ nó. Người đọc tinh sẽ thấy ngay bạn không có bằng chứng nào cả — và sẽ bắt đầu nghi ngờ những gì bạn viết.',
          verdict: 'bad',
          fb: 'Bạn vừa làm đúng thứ mà bạn đã cảnh báo cả lớp làm. Khác một điều: bạn đang chê họ bằng một lỗi chưa được xác minh và không liên quan gì đến nội dung.\n\nNhớ lại Màn 3: câu "Hải không học gì cả hai năm nay" chính là dạng này. Bạn đã gọi tên nó là "tấn công con người". Nếu bạn làm đúng thứ đó, bạn đã hạ mình xuống đúng cái mức bạn đang dạy người khác tránh.',
          teach: 'Về mặt đạo đức, dù lỗi quá khứ của họ có thật hay không, việc dùng nó để bác bỏ lập luận hiện tại vẫn là một lỗi. <b>Nội dung đúng không cứu được cách nói sai.</b>' },
        { t: 'Ghi vào hồ sơ như thông tin chưa kiểm chứng, tách riêng khỏi phần phân tích bài làm, và tuyệt đối không dùng để bác bỏ lời họ.',
          score: 4, verdict: 'good',
          fb: 'Đây là cách làm của một người điều tra viên thật. Bạn <b>giữ</b> thông tin, nhưng bạn <b>không lạm dụng</b> nó. Và bạn đặt nó đúng chỗ: ký hiệu "chưa kiểm chứng", cất riêng, để sau này nếu cần thì dùng cho một mục đích khác.\n\nĐây cũng chính là lý do tại sao sau này người ta có thể gọi điện cho bạn hỏi về vụ này, thay vì gọi cho người đã đăng bài kia.',
          teach: 'Có hai loại thông tin: <b>thông tin để suy luận</b> và <b>thông tin để biết mình đang ở đâu trong cuộc chơi</b>. Bạn giữ cả hai, nhưng không được trộn. Trộn là nơi phần lớn các vụ án thực sự thất bại — không phải vì thiếu dữ kiện, mà vì dùng sai dữ liệu.' },
        { t: 'Đoán thử: chắc họ đăng bài đó vì muốn đổi đề thi. Rồi báo cáo.',
          score: 0, verdict: 'bad',
          fb: 'Bạn đã nhảy từ "họ có lý do để bất đồng" sang "họ là thủ phạm" trong một bước. Ngay cả khi bạn đoán đúng, bạn cũng không được ghi nó vào báo cáo — vì nếu bạn sai, bạn vừa tự tạo ra một câu chuyện có sức phá hoại, và bạn sẽ bị nó quay lại.',
          teach: 'Trong điều tra, <b>giả thuyết về động cơ là thứ tốn kém nhất và đáng giá nhất</b>. Nó không đứng được trước bất kỳ ai. Giữ nó ở đầu, để nó sinh ra câu hỏi cần kiểm chứng, rồi mang nó đi hỏi — đừng mang nó ra tòa.' },
        { t: 'Bỏ qua hẳn. Không liên quan gì đến vụ án.',
          score: 1, verdict: 'mid',
          fb: 'Cũng chưa đúng, nhưng gần hơn. Bỏ qua là an toàn hơn dùng sai, nhưng bạn vẫn đang mất thông tin. Cách đúng ở giữa: <b>giữ, ghi rõ chưa kiểm chứng, không dùng để kết luận</b>.' }
      ],
      maxPts: 4
    },

    { type: 'journal', tag: 'Nhật ký suy nghĩ', skill: 'assumption',
      q: 'Nhật ký: giả định nào của chính bạn đang yếu nhất?',
      sub: 'Không phải giả định về vụ án. Giả định về bạn.',
      prompt: 'Viết về một điều bạn đang tin mà chưa kiểm chứng được. Ví dụ: "Tôi tin rằng…", "Điều tôi chưa kiểm chứng được là…", "Nếu điều tôi tin là sai thì kết luận của tôi cũng đổi."',
      hint: 'Cô Hồng từng nói với lớp một câu mà bạn nhớ khá lâu: "Người phân biệt được nơi nào là dữ kiện và nơi nào là niềm tin, thường là người bị ấn tượng mạnh nhất bởi điều mình vừa được nói."' },

    { type: 'narr', tag: 'Kết màn 5', text:
`19:05. Bạn ngồi lại một mình ở phòng thí nghiệm.

Bạn đã tìm ra bản đồ giả định của cả hai phe: phe buộc tội dựa vào "lỗi này chỉ AI mắc", phe bảo vệ Hải dựa vào "cậu ta tử tế nên chắc không sai".

Hai bản đồ đó giống nhau đến mức bạn nhận ra một điều:

<strong>Cả hai đều đang tranh luận bằng cách bịa thêm một điều mà không ai trong đó biết.</strong>

Ngày mai là bài học cuối. Hội đồng khối họp 09:00, và lần này người nghe không chỉ là giáo viên — còn có đại diện học sinh, và một chiếc livestream có 6.000 người xem.

Cô Hồng gửi tin lúc 23:10, chỉ có một dòng:

   "Ngày mai mày phải đứng trước 300 người và khiến họ bỏ phiếu trắng
    cho lập luận của chính họ — chứ không phải bỏ phiếu trắng cho mình."

Và bên dưới, một dòng thứ hai lạ lùng hơn nhiều:

   "À. Còn một vụ nữa em phải xử. Ở đâu đó trong bốn ngày qua,
    có một câu nói đúng mà chưa ai được nghe. Em tìm ra không?"` }
  ]

});