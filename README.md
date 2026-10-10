# LỰC LƯỜNG — Game tư duy phản biện cho học sinh 12–18 tuổi

> **"Nghe hết trước. Tính sau."**

Một game điều tra bí ẩn, 7 màn chơi, 7 kỹ năng tư duy phản biện, chạy được ngay trên trình duyệt — không cần cài gì.

[![Chơi ngay](https://img.shields.io/badge/%F0%9F%8E%AE-Chơi%20ngay-phan--bin-ff8f3d?style=for-the-badge&logo=github)](https://sinhvien-dhs.github.io/phan-bin/)
![License](https://img.shields.io/badge/license-MIT-35d0a5)
![Stack](https://img.shields.io/badge/HTML5%20%7C%20CSS3%20%7C%20VanillaJS-orange?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-offline%20ready-4d9dff?style=for-the-badge)
![Không cần build](https://img.shields.io/badge/build-kh%C3%B4ng%20c%E3%AA%A7n-f5a524?style=for-the-badge)

### ▶ Chơi thử

| Cách | Link / lệnh |
|---|---|
| **Bản chạy trên web** | https://sinhvien-dhs.github.io/phan-bin/ |
| **Chạy cục bộ** | Nhấp đúp `index.html` — không cần cài gì |
| **Chạy qua HTTP (bật PWA)** | `npx serve .` hoặc `python -m http.server 8123` |
| **Windows không có Node/Python** | `powershell -ExecutionPolicy Bypass -File .\serve.ps1` |

---

## 1. Tên game & slogan

| | |
|---|---|
| **Tên** | **LỰC LƯỜNG** *(tắt của "Lực lượng tư duy" — CLB Trinh thám học đường)* |
| **Slogan** | *"Nghe hết trước. Tính sau."* |
| **Slogan phụ** | *Bạn không đi tìm sự thật. Bạn đi tìm xem mình có đang tin đúng không.* |
| **Thể loại** | Trinh thâm điều tra / phiếu lý giáo dục / text-interaction |
| **Nền tảng** | Web (HTML/CSS/JS thuần) — chạy offline, cài được lên điện thoại như app |

---

## 2. Tóm tắt cốt truyện

**Bối cảnh:** Học viện Minerva — một trường phổ thông nhỏ, nơi học sinh tự lập **Ban Điều tra Sự thật (BĐT)**, câu lạc bộ trinh thám học đường do cô Hồng (đội phó) đứng đầu.

**Mở đầu:** 21:14 đêm chủ nhật, một tệp âm thanh dài **47 giây** do tài khoản ẩn danh đăng lên diễn đàn "Sóng Trường". Trong clip có giọng giáo viên Toán **cô Lan Nguyễn** nói câu:

> *"… ai hỏi tôi xem bài của ai? Ừ, thì tôi đã xem bài của Hạnh…"*

Và câu: *"… tôi khẳng định một điều: kỳ này điểm số này, tôi không để ai được chạy."*

Sau 12 tiếng: **4.213 lượt thích**. Bình luận ghim đầu trang: *"Gian lận là mất dạng. Kỷ luật thẳng."*

**Nhiệm vụ:** Bạn là điều tra viên BĐT. Có **48 giờ** trước khi hội đồng kỷ luật họp. Phải kết luận bằng **bằng chứng**, không phải bằng đồn đoại — và dù kết luận là gì, bạn phải sống với nó.

**Các nhân vật:**

| Nhân vật | Vai trò | Điều "thú vị" về lập luận của họ |
|---|---|---|
| **Cô Lan** — giáo viên Toán, 17 năm | Bị cáo buộc | Nói thật, nói đủ, và nói cả điều bất lợi cho mình (quan hệ họ hàng với Hạnh) |
| **Hạnh** — nữ sinh lớp 10A1 | Bị hại | Bị đoán trước khi được hỏi; đưa ra một "bằng chứng" hoàn toàn vô giá trị một cách rất thuyết phục |
| **Chủ nhiệm Quách** — Toán + chủ nhiệm khối | Phe đối lập | Lập luận không sai một chữ nào, nhưng dựng trên ba giả định ẩn |
| **Thầy Bùi Tuấn** — thủ phòng CNTT | Nguồn dữ liệu | Nói "camera ghi hết, tin tuyệt đối" — một ví dụ hoàn hảo cho việc độ chắc chắn của người nói ≠ độ chắc chắn của sự việc |
| **Kiên** — đồng đội BĐT | Người thật lòng tin sai | Không nói dối ai, chỉ lập luận sai vì tin phổ biến |
| **Cô Hồng** — đội phó | Người dạy | *"Người ta không bao giờ đổi ý vì bạn thắng. Họ đổi ý vì tự thấy mình sai."* |

**Sự thật (viết ở đây để giáo viên đọc trước, không có trong game):**
Clip được **ghép từ 3 phiên ghi âm khác nhau** của phòng học giáo viên. Bản ghi gốc 11 phút có đầy đủ câu hỏi đứng trước câu trả lời, và cô Lan đã thú nhận quan hệ họ hàng ngay trong cuộc họp. Người tạo file là chủ nhiệm Quách — không phải vì thù hận bạn thân, mà vì cô Lan từng báo cáo ông ta về một sai sót chấm điểm có thật, và ông muốn cô ấy mất uy tín để lời báo cáo đó trở nên vô nghĩa.

**Kết luận hay nhất của game** không phải "cô Lan vô tội". Nó là:

> Clip là giả. Nhưng cô Lan **có** xem bài của em họ trước khi chấm — một việc vi phạm quy trình. Và người bị thiệt nhiều nhất không phải cô ấy, cũng không phải Hạnh, mà là **tất cả những người đã tin vào đoạn clip 47 giây đó**.

---

## 3. Cấu trúc game

### 3.1 Bảy màn, bảy kỹ năng

| Màn | Tên | Kỹ năng rèn luyện | Cơ chế tương tác chính |
|---|---|---|---|
| 1 | **47 GIÂY** | Phân biệt **sự thật – ý kiến – giả thuyết** | Đọc lười thoại nguyên văn, phỏng vấn, phân loại 5 phát biểu, chọn câu "dễ bị hiểu sai nhất", quyết định phát biểu công khai đầu tiên |
| 2 | **NGUỒN GỐC** | **Đánh giá bằng chứng & độ tin cậy của nguồn** | **Bắt điểm ghép âm thanh** trên sóng (mini-game thị giác), đọc log hệ thống, biểu đồ, **xếp hạng 4 nguồn tin**, đối đáp cuộc gọi điện thoại |
| 3 | **NGỤY BIỆN GIA** | **Nhận diện ngụy biện** | Phỏng vấn người lập luận sai, gán nhãn 9 câu ngụy biện (2 bảng), **bấm chỉ vào câu lỗi** trong thông điệp thật, trả lời bình luận 8.402 lượt thích |
| 4 | **BẢNG SỐ** | **Phân tích dữ liệu, tương quan – nhân quả** | **Ước lượng tần suất nền** bằng thanh trượt, đọc biểu đồ cột & biểu đồ đường, phát hiện "số liệu bị chọn lọc", thiết kế phương án điều tra |
| 5 | **BẢN ĐỀ GIẢ ĐỊNH** | **Bóc giả định ẩn** trong lập luận | Bóc giả định ẩn của cả hai phe, **tự bắt giả định của chính mình**, viết lập luận (chấm theo 4 tiêu chí), xử lý thông tin "bất lợi cho phe mình" |
| 6 | **ĐÀI HỘI** | **Phản biện & bảo vệ lập luận** | Trả lời phản biện trước 300 người + livestream 6.000 view, phân biệt **thép lập luận / bóp méo lập luận**, đối diện "cú gài", tự trình bày 4 phút |
| 7 | **KẾT LUẬN** | **Kết luận có điều kiện & xem xét đa chiều** | Ghép 3 bằng chứng cuối, **3 kết cục khác nhau (mỗi kết cục là một đoạn văn hậu quả riêng)**, viết lời kết luận, chọn 4 việc để khép vụ án |

### 3.2 Bốn luật chơi (điều làm game này khác một bài quiz)

1. **Không có bước nào chỉ có một đáp án "đúng".** Câu hỏi ở dạng *quyết định* (bạn làm gì tiếp theo?) và *tự phòng vệ* (bạn bảo vệ lập luận nào?).
2. **Chọn sai vẫn chơi tiếp.** Không bao giờ bị kẹt — bạn chỉ phải sống với hậu quả. Ở Màn 7 có **3 kết cục**: công bằng / đúng một nửa / đồn đoại thắng.
3. **Bẫy ngụy biện được cài sẵn.** Một số lựa chọn nghe rất thuyết phục vì nó sai. Chọn vào là mắt bẫy, bị ghi vào báo cáo cuối.
4. **Mọi lựa chọn đều được phản hồi chi tiết** — kể cả lựa chọn đúng (bạn được biết vì sao mạnh *và còn thiếu gì*).

### 3.3 Cơ chế tương tác (15 loại thẻ)

`narr` (dẫn chuyện) · `say` (hội thoại) · `evidence` (thu bằng chứng) · `classify` (gán nhãn hàng loạt) · `pick` (chọn 1) · `multi` (chọn nhiều) · `rank` (xếp hạng độ tin cậy) · `interrogate` (phỏng vấn NPC) · `wave` (bắt điểm ghép âm thanh) · `chart` (đọc biểu đồ) · `estimate` (ước lượng tần suất nền) · `spot` (bấm chỉ câu lỗi) · `argue` (viết/chọn lập luận, chấm theo rubric) · `journal` (nhật ký suy nghĩ) · `final` (quyết định có hậu quả) · `group` (thẻ thảo luận nhóm)

---

## 4. Mô tả chi tiết 2 màn mẫu

### MÀN 1 — "47 GIÂY" *(Phân biệt sự thật – ý kiến – giả thuyết)*

**Mở đầu.** Bạn ngồi trong phòng kỹ thuật. Thầy Bùi Tuấn đẩy ghế về phía bạn. Đây là nguyên văn 47 giây:

```
[0:00] "... buổi họp hôm nay ai cũng biết rồi, tôi không nói nhiều."
[0:06] [tiếng thở]
[0:08] "... nói thật, cổ vẫn nghi ngờ từ hồi giữa kỳ. Có ai đó nên hỏi lại đi."
[0:17] [tiếng ghế kéo]
[0:19] "... ai hỏi tôi xem bài của ai? Ừ, thì tôi đã xem bài của Hạnh. Tôi xem để biết mà còn đối chiếu với đáp án."
[0:29] [tiếng ghế, tiếng cửa đóng]
[0:31] "... thôi, tôi nói nhiều rồi. Các anh chị tự quyết định."
[0:38] "... nhưng tôi khẳng định một điều: kỳ này điểm số này, tôi không để ai được chạy."
[0:47] — hết —
```

**Bài 1 — Phỏng vấn cô Lan** (4 câu hỏi, chọn bất kỳ câu nào). Hai trong số đó mở ra bằng chứng:

- *"Vì sao cô xem bài của Hạnh? Người khác sẽ hỏi điều này, nên tôi hỏi trước."* →
  **E-03 · Xung đột lợi ích.** Cô Lan thừa nhận Hạnh là em họ, xem bài để giải thích lý do trừ điểm.
  *Ghi chú điều tra:* "Ghi lại đúng những gì người ta khai, kể cả khi nó bất lợi cho chính người khai. Đây là mấu chốt để sau này ai cũng tin được hồ sơ của bạn."

**Bài 2 — Phân loại (chọn: Sự thật / Ý kiến / Giả thuyết)**

1. *Tệp "sự kiện 2041.wav" dài đúng 47 giây và được đăng lúc 21:14.* → **Sự thật** — kiểm chứng được ngay bằng tệp và giờ đăng.
2. *Cô Lan là người đáng ngờ nhất trong vụ này.* → **Ý kiến** — là quan điểm, dựa trên 47 giây nghe được, không thể kiểm chứng.
3. *Có ai đó đã ghép đoạn này từ hai hoặc nhiều cuộc họp khác nhau.* → **Giả thuyết** — khả dĩ, chưa có bằng chứng, nhưng có thể đi kiểm chứng.
4. *Cô Lan có quan hệ họ hàng với Hạnh.* → **Sự thật** — có trong lời khai và hồ sơ nhân sự.
5. *Nếu không tìm được bằng chứng nào khác trước Chủ nhật, Hạnh sẽ bị gạch khỏi bảng thành tích.* → **Giả thuyết** — dự báo về tương lai, có thể bị bác bỏ bằng một quyết định của nhà trường.

> **Bài học:** *"Câu này, ai kiểm chứng? Kiểm chứng bằng cách nào?"* — Trả lời được là sự thật. Không trả lời được mà vẫn khẳng định là bạn đang gặp **ý kiến đeo mặt nạ sự thật**. Và "tôi nghĩ là…" không bao giờ xấu — xấu là biến nó thành "rõ ràng là".

**Bài 3 — Đoạn nào dễ bị hiểu sai nhất?**

| | Lựa chọn | Phản hồi |
|---|---|---|
| ✅ | *"…ai hỏi tôi xem bài của ai? Ừ, thì tôi đã xem bài của Hạnh."* | **Chính xác.** Đây là *một câu hỏi và một câu trả lời nằm cạnh nhau*. Khi cắt rời, người nghe chỉ nghe thấy phần trả lời — và một câu trả lời trung thực biến thành lời tự thú. Không ai thay đổi lời nào, chỉ có ai đó bỏ đi nửa câu. → *Nguyên tắc: **ngữ cảnh là một phần của bằng chứng**.* |
| ⚠️ | *"…tôi không để ai được chạy."* | **Nghe đáng nghi, nhưng đây là thông báo chính sách, không phải thông báo kết quả.** Chính câu này lại là câu bảo vệ cô ấy — và cũng là câu khiến cô bị nghi ngờ. |
| ⚠️ | *"…thôi, tôi nói nhiều rồi."* | **Rất dễ hiểu nhầm thành "tôi không dám nói".** Trong đội học sinh, "các anh chị tự quyết định" là câu kết của người đang nhường quyền cho người lớn. |
| ❌ | *"…buổi họp hôm nay ai cũng biết rồi."* | **Câu dẫn nhập, ít giá trị phát hiện nhất.** Đừng dồn cảm giác nghi ngờ vào câu đầu tiên nghe thấy. |

**Bài 4 — BĐT đăng bài đầu tiên lên Sóng Trường (có bẫy)**

| | Lựa chọn | Phản hồi |
|---|---|---|
| ✅ | *"Chúng tôi chưa có kết luận. Hiện chúng tôi đang kiểm ba điểm trong clip. Chúng tôi sẽ công bố bằng chứng, không công bố phán đoán."* | **Câu mà ít người dám viết.** Nó lấy lại quyền kể chuyện từ diễn đàn — và bảo vệ cô ấy khỏi **thiên lệch đồng cảm**: phản ứng mạnh với lập luận trái với điều ta tin, bất kể chất lượng lập luận. |
| ⚠️ | *"Cô Lan là giáo viên 17 năm. Chắc không gian lận bài thi đâu."* | **Kêu gọi uy tín.** Không sai về sự thật, sai về luận lý. Chủ nhiệm Quách cũng 15 năm. Bạn đang dùng đúng lập luận mà dân mạng đang dùng để công kích cô ấy. |
| 🪤 | *"Clip cho thấy cô Lan đang cố tình bịa đặt để vuốt nhẹ cho em gái họ xa."* | **BẪY — Phá huỷ giả thuyết trước khi kiểm chứng (poisoning the well).** Bạn chưa kiểm chứng điều gì mà đã kết luận có dự định; "vuốt nhẹ cho em gái" là câu chuyện bạn tự dựng; và đây chính là lập luận của đám đông chỉ được viết hay hơn. → *Nguyên tắc: **đừng bắt đầu bằng việc chỉ tội**. Hãy bắt đầu bằng việc tìm cái gì đang sai trong bằng chứng.* |
| ❌ | *"Chúng tôi xin mọi người không chia sẻ thêm clip nữa."* | **Không sai, nhưng vô hiệu.** Xoá clip không làm sự thật hiện ra. Im lặng lúc này bị đọc thành đồng lòng với một trong hai phe. |

**Kết màn.** Bạn nhận ra có **3 chỗ tiếng ghế kéo** trong một "cuộc họp duy nhất". Màn 2 bắt đầu.

---

### MÀN 4 — "BẢNG SỐ" *(Tương quan – nhân quả & tần suất nền)*

**Mở đầu.** Bạn lấy đề giữa kỳ Toán 10 và phát hiện: **câu 4 có đúng một lời giải** — bắt buộc dùng HĐT1–HĐT2. Gần như học sinh nào làm đúng câu đó cũng có một trong ba lời giải giống nhau.

**Bài 1 — Ước lượng tần suất nền** *(kéo thanh trượt, cộng trừ theo độ lệch)*

> *"Trong 100 bài Toán giữa kỳ của lớp 10A1, có bao nhiêu bài có ít nhất hai ý giống hệt nhau ở câu 4?"*
> **Đáp án thật: 38.** Dữ kiện cho trước: đề thi chung cho cả khối 4 lớp, gần 80 học sinh làm đúng câu 4, trong đó có hai mẫu lời giải phổ biến nhất mỗi mẫu chiếm khoảng ¼.

*Phản hồi:* "Con số hợp lý nằm quanh 38 — và đây là con số BĐT đo lại trên **300 bài thật**: trung bình 36 bài trên 100 bài. Nghĩa là nếu bạn chấm ngẫu nhiên 100 bài, khoảng 36 bài sẽ có hiện tượng 'hai ý giống nhau'. **Đó là chuyện bình thường.**"

> **Bài học:** Tần suất nền là kỹ năng bị bỏ quên nhiều nhất của người lớn. Ta luôn chú ý đến ca lạ — và quên rằng phần lớn thời gian, phần lớn người đều ở mức trung bình. *"Cái này hiếm bao nhiêu?"* phải đứng trước *"cái này có hiếm không?"*

**Bài 2 — Đọc biểu đồ cột: "Số vụ phát hiện bài trùng ý tưởng, 3 năm học"**

Toán 41 · Lý 23 · Anh 17 · Văn 12 · Hoá 8

| | Lựa chọn | Phản hồi |
|---|---|---|
| ✅ | *"Không cho phép kết luận gì cả — số vụ tăng không đồng nghĩa tỉ lệ tăng, và tôi chưa biết quy mô hay độ nghiêm khác nhau của mỗi môn."* | **Đúng.** Toán có 4 lớp và đề riêng; Văn có 3 lớp và đề chung; đề Toán có nhiều "ý" hơn vì câu chứng minh chỉ có một lời giải. Ba yếu tố này **không liên quan gì đến mức độ gian lận**. → *Ba câu hỏi bắt buộc trước mọi biểu đồ: **Mẫu số là bao nhiêu? Đo bằng gì? Ai thu thập?*** |
| 🪤 | *"Toán bị nghi nhiều nhất, nên chắc chắn khối Toán có vấn đề chấm điểm."* | **BẪY — So sánh số tuyệt đối không có mẫu số.** Và có một cái mỉa tinh vi hơn: **đây chính là cách diễn đàn đang nghĩ về vụ án hiện tại.** Hai bước, mỗi bước nghe đều hợp lý, không bước nào được kiểm chứng. |
| ❌ | *"Số vụ tăng dần qua các năm, nghĩa là học sinh ngày càng ít liêm chính."* | **Biểu đồ này không tách theo năm** — nó gộp cả ba năm vào một con số. Bạn đọc ra xu hướng thời gian trên biểu đồ không có trục thời gian. |
| ⚠️ | *"41 vụ trên 3 năm không phải con số lớn. Không đáng để điều tra."* | **Đúng cảm giác, nhưng là lập luận ngược lại — và lập luận ngược lại cũng là một dạng thiên lệch.** |

**Bài 3 — Đường đi lên.** Số vụ khiếu nại điểm theo tháng: T9 4 · T10 3 · T11 5 · T12 7 · T1 6 · T2 4 · T3 9 · **T4 34 · T5 41** · T6 12

Đáp án: *"Tháng 4–5 là lúc bắt đầu kỳ thi. Học sinh và phụ huynh nhạy cảm với điểm hơn — **không phải gian lận xuất hiện nhiều hơn**. Nếu đây là gian lận thật, nó không tự sinh ra vào tháng 5 rồi biến mất vào tháng 6."*

> *"Đây là bài học lớn nhất về dữ liệu xã hội: **những gì được đo, thường phản ánh hành vi của người đo chứ không phải hiện tượng đang đo.** Số ca báo cáo tăng khi có chương trình đào tạo về báo cáo. Người bị hại lặng lẽ thì không có ghi chép nào."*

**Bài 4 — Cú bẫy con số** *(phân biệt bằng chứng và lập luận)*

Bài đăng viral: *"Hạnh nằm trong nhóm 5% điểm Toán cao nhất khối. Cô Lan chấm 19/20 cho một học sinh — tức là gần như không bao giờ trừ điểm. Ai lại trừ điểm một đứa giỏi? Vậy điểm của Hạnh gần như chắc chắn là do bài bị nhân bản."*

✅ Đáp án: **Đây là lập luận, không phải bằng chứng.** Hãy dựng lại chuỗi nhân quả của họ: *cô Lan có thói quen cho điểm cao → Hạnh được điểm cao → vậy bài Hạnh sai → vậy bài bị nhân bản.* Bước thứ hai đến bước thứ ba là **nhảy cóc**. Tên kỹ thuật: **đảo ngược hệ quả**.

Phản hồi cho lựa chọn sai tiêu biểu nhất: *"Bạn vừa thực hiện đúng cái bài học bên trên: **nhầm có số liệu với có bằng chứng**. '19/20' là một dữ kiệu đúng. Nhưng dữ kiệu đúng nằm giữa một lập luận sai không biến lập luận đó thành bằng chứng. Đây là cách bằng chứng giả hay mọc lên cây nhất: chỉ cần một con số thật."*

**Bài 5 — Thiết kế phương án điều tra** (chọn 4/6)

✅ Đúng: lấy đề thi đối chiếu khối · chấm thử 20 bài ngẫu nhiên lớp khác · xin danh sách học sinh từng bị khiếu nại điểm Toán · hỏi phân bố điểm của các học sinh khác trong kỳ.
❌ Sai: so sánh với 3 đứa đầu lớp *(mẫu cực nhỏ + có chọn lọc)* · hỏi cả lớp *(dựa vào tự báo cáo — ai không muốn dính vào sẽ không nói)*.

> *"Nguyên tắc chung: **càng thu thập thông tin từ những người liên quan, dữ liệu càng dễ bị méo** — và luôn méo về một hướng: hướng có lợi cho người đang nói."*

---

## 5. Hệ thống điểm "Tư duy phản biện"

### 5.1 Bảy kỹ năng và trọng số

| # | Kỹ năng | Trọng số |
|---|---|---|
| 1 | 🔎 Phân biệt sự thật – ý kiến – giả thuyết | 14 |
| 2 | 🔗 Đánh giá bằng chứng & độ tin cậy của nguồn | 16 |
| 3 | 🕸️ Nhận diện ngụy biện trong lập luận | 16 |
| 4 | 📊 Phân tích dữ liệu, tương quan và nhân quả | 13 |
| 5 | 🧩 Bóc giả định ẩn trong lập luận | 14 |
| 6 | ⚖️ Bảo vệ lập luận & phản biện có phong cách | 15 |
| 7 | 🧭 Kết luận có điều kiện & xem xét đa chiều | 12 |

### 5.2 Công thức

```
Mỗi lựa chọn  → cộng/trừ ĐIỂM THÔ cho đúng 1 kỹ năng
                → mỗi câu có trần ĐIỂM TỐI ĐA riêng (3–4 điểm)

% kỹ năng      = 100 × (điểm đạt của kỹ năng) / (điểm tối đa của kỹ năng)

ĐIỂM CT       = Σ (%kỹ năng × trọng số) / Σ (trọng số)     →  0–100
                 (chỉ tính những kỹ năng đã chơi tới)
```

**Vì sao tính theo % chứ không cộng thẳng?** Vì mỗi màn có số câu khác nhau. Nhờ vậy, ngay cả khi bạn chơi hơi loạn, báo cáo vẫn cho ra **bản đồ năng lực có thị lực** — bạn nhìn thấy rõ mình mạnh ở đâu, yếu ở đâu, thay vì một con số vô nghĩa.

### 5.3 Cách chấm từng dạng tương tác

| Dạng | Cách chấm |
|---|---|
| `pick` / `chart` / `final` | Chọn đúng = +3 hoặc +4. Chọn bẫy = 0 hoặc **−2** (kèm cảnh báo đỏ) |
| `classify` | Đúng `k`/`n` mục → `round(k/n × 100 / 25)` điểm, trần 4 |
| `multi` | Điểm = số mục đúng chưa chọn − số mục chọn thừa |
| `interrogate` | Cộng điểm theo từng câu hỏi hay; hỏi câu bất lợi cho nhân vật đáng hỏi nhất là điểm cao nhất |
| `wave` | Đúng mỗi điểm ghép = 1, trừ điểm bấm sai |
| `estimate` | Trong dung sai ±9 = 3 điểm; sai 2× = 1; xa hơn = 0 |
| `rank` | Mỗi nguồn xếp đúng = 1 |
| `spot` | Bấm đúng câu = 3 |
| `argue` | Chấm theo **rubric 3–4 tiêu chí** (có bằng chứng / giới hạn phạm vi / điều kiện / đối diện đối lập). Người chơi có thể chọn mẫu **hoặc tự viết** — tự viết được chấm tự động bằng phân tích từ khóa tiếng Việt (không dấu) |
| `journal` | **Không chấm điểm.** Lưu vào nhật ký, hiện lại ở báo cáo cuối |

### 5.4 Xếp hạng

| Điểm | Danh hiệu |
|---|---|
| ≥ 90 | **CHƯƠNG TRÌNH TRUYỀN HÌNH** — "Bạn không tìm ra sự thật. Bạn khiến người khác tự tìm ra." |
| ≥ 78 | **ĐIỀU TRA VIÊN TRƯỞNG** |
| ≥ 63 | **ĐIỀU TRA VIÊN** |
| ≥ 45 | **CỘNG TÁC VIÊN** |
| ≥ 25 | **TÂN BINH CÓ TIỀM NĂNG** |
| < 25 | **NỘI DUNG TIN GIẢ** — "Bạn đã đăng kết luận không có bằng chứng. Yên tâm, phần lớn người cũng vậy." |

### 5.5 Báo cáo cuối

Gồm: **radar 7 trục** (vẽ SVG, không cần thư viện) · điểm chi tiết từng kỹ năng kèm mẹo luyện tập · **2 điểm mạnh / 2 điểm cần cải thiện** với gợi ý cụ thể · danh sách **ngụy biện đã mắc và đã tránh** · timeline 7 màn · nhật ký suy nghĩ · biên bản nhóm (nếu chơi nhóm) · **bài tập rèn luyện về nhà** sinh tự động từ kỹ năng yếu nhất.

Xuất được ra **.txt** (để nộp bài) và **.json** (hồ sơ đầy đủ), hoặc in ra PDF.

---

## 6. Các tính năng khác

- **Hồ sơ bằng chứng** — 10 bằng chứng có nguồn, sức mạnh (Mạnh/Khá/Yếu) và *ghi chú điều tra*, mở xem bất cứ lúc nào
- **Nhật ký suy nghĩ** — mở được mọi lúc; có 4 nút gợi ý nhanh ("Điều tôi biết chắc / Điều tôi chỉ đoán / Bằng chứng còn thiếu / Quan điểm đối lập")
- **Sổ bẫy ngụy biện** — những ngụy biện đã mắc được liệt kê lại ở báo cáo cuối
- **Chế độ Thảo luận nhóm** — thẻ thảo luận kèm **đồng hồ đếm ngược** sau các màn trọng tâm, ô ghi biên bản nhóm được gom vào báo cáo
- **Lưu tự động** vào trình duyệt, nút "Tiếp tục hồ sơ đã lưu"
- **PWA** — cài được lên màn hình chính điện thoại, chạy offline
- Giao diện tối/tuỳ chọn, responsive từ 360px trở lên, không phụ thuộc thư viện ngoài

---

## 7. Chạy game

**Cách 1 — mở trực tiếp:** nhấp đúp `index.html`. Không cần cài gì.

**Cách 2 — chạy qua HTTP** (khuyến nghị, để PWA hoạt động):

```powershell
cd "D:\web số 1\tu-duy-phan-bien"
powershell -ExecutionPolicy Bypass -File .\serve.ps1
# mở http://localhost:8123/
```

Hoặc: `npx serve .` · `python -m http.server 8123` · VS Code extension "Live Server".

> Game dùng **script thuần** (không phải ES module) nên mở bằng `file://` vẫn chạy tốt.

---

## 8. Cấu trúc dự án

```
tu-duy-phan-bien/
├── index.html              # Markup 3 màn hình + 6 modal
├── LICENSE                 # MIT
├── .gitignore
├── manifest.json           # Cấu hình PWA
├── sw.js                   # Cache offline
├── serve.ps1               # Server nhẹ bằng HttpListener (không cần Node/Python)
├── assets/icon.svg         # Icon vector
├── css/
│   ├── base.css            # Biến màu, layout, modal, toast, form
│   ├── game.css            # Topbar, stage, 15 kiểu thẻ tương tác
│   └── report.css          # Báo cáo cuối, radar, xuất file
└── js/
    ├── core.js             # 7 kỹ năng, trạng thái, công thức chấm điểm, lưu/đọc
    ├── ui.js               # Toast, modal, đồng hồ 48h, HUD, hồ sơ, nhật ký
    ├── render.js           # 15 builder thẻ tương tác
    ├── engine.js           # Điều phối màn chơi, chuyển màn, hậu quả
    ├── report.js           # Radar SVG, báo cáo, xuất .txt / .json
    ├── main.js             # Boot, sự kiện, nội dung hướng dẫn
    └── data/
        ├── level1.js       # 47 GIÂY        — sự thật / ý kiến / giả thuyết
        ├── level2.js       # NGUỒN GỐC      — đánh giá bằng chứng
        ├── level3.js       # NGỤY BIỆN GIA  — nhận diện ngụy biện
        ├── level4.js       # BẢNG SỐ        — dữ liệu & tần suất nền
        ├── level5.js       # BẢN ĐỀ GIẢ ĐỊNH— giả định ẩn
        ├── level6.js       # ĐÀI HỘI        — phản biện
        └── level7.js       # KẾT LUẬN       — kết luận có điều kiện
```

**Thêm màn mới** = thêm 1 file vào `js/data/` và 1 dòng `<script>` trong `index.html`. Không cần sửa logic.

**Cấu trúc dữ liệu một màn** (rút gọn):

```js
window.LEVELS.push({
  id: 1,
  title: '47 GIÂY',
  skill: 'fact',                 // id của kỹ năng trong core.js
  skillName: 'Phân biệt sự thật – ý kiến – giả thuyết',
  steps: [
    { type: 'narr', text: '...' },
    { type: 'evidence', ev: { id:'E-01', title, source, strength: 2, text, note } },
    { type: 'pick', skill:'fact', maxPts:4, correct:0, q: '...', options: [
        { t:'...', score:4, verdict:'good', fb:'...', teach:'...' },
        { t:'...', score:-2, trap:'Tên ngụy biện', trapDesc:'...', verdict:'bad', fb:'...' }
    ]},
    { type: 'argue', skill:'perspective', max:4, q:'...', presets:[...], rubric:[...],
      rubricCheck: function(t){ return [{label, hit: LL.hasAny(t,['...']), note}]; } }
  ]
});
```

---

## 9. Gợi ý mở rộng thành phiên bản đầy đủ

### 9.1 Dùng ngay trong lớp học (1 tiết 45 phút)

| Cách | Cách làm |
|---|---|
| **Chơi cá nhân, thảo luận nhóm** | Học sinh tự chơi Màn 1–3 ở nhà. Đầu giờ lớp chia 4 nhóm, mở thẻ thảo luận của Màn 4, mỗi nhóm trình bày 3 phút, các nhóm khác đóng vai "đối thủ" phản biện bằng đúng một câu hỏi |
| **Thi theo nhóm** | Mỗi nhóm 4 người, một máy. Người chơi phải thống nhất trước khi chọn → tự nhiên hình thành thói quen "hỏi nhau trước khi quyết định" |
| **Chấm điểm học tập** | Xuất báo cáo .txt của từng học sinh. Báo cáo cho **7 điểm kỹ năng riêng** + **bài tập về nhà sinh tự động** → dùng làm cơ sở đánh giá quá trình thay vì một bài kiểm tra |
| **Chơi lại và so sánh** | Cho học sinh chơi 2 lần với chiến lược khác nhau, rồi đặt hai báo cáo cạnh nhau. Câu hỏi tốt nhất cho lớp: *"Vì sao lần hai báo cáo khác?"* |

### 9.2 Mở rộng thành sản phẩm

**Phiên bản web đầy đủ**
- **Ngân hàng câu hỏi** tách riêng khỏi cốt truyện (3–5 case mới: tin giả y tế, chiến dịch bầu cử sinh viên, quảng cáo "thần chỉ số", tin đồn công ty)
- **Lưu hồ sơ lên tài khoản** (Firebase, giống dự án SpendWise đã có sẵn trong thư mục cha — dùng lại được ngay `js/firebase.js` + `firestore.rules`)
- **Chế độ giáo viên**: xem tiến độ lớp, chấm thêm bài tự viết, xuất CSV ra điểm số
- **Bảng xếp hạng & thử thách**: "ai bắt được nhiều ngụy biện nhất trong tuần"
- **Đa ngôn ngữ** (đã tách toàn bộ nội dung vào `js/data/` nên dễ dịch)

**Bản mobile**
- Đã là PWA sẵn — chỉ cần thêm màn hình khởi động (splash) và vuốt cảm ứng
- Bọc bằng Capacitor / Cordova để lên Google Play & App Store
- Push notification nhắc "48 giờ của bạn còn …"

**Bản text-based (Python / dòng lệnh)** — xem prompt bên dưới.

### 9.3 Hướng nghiên cứu & mở rộng học thuật

- Đo **hiệu quả thay đổi điểm CT** giữa lần 1 và lần 3 → bằng chứng cho đồ án giáo dục
- Thêm nhóm **mẫu bốn vụ án khác nhau về độ khó** để tạo bài kiểm tra trực tuyến
- Thêm **chế độ "đảo vai"**: chơi lại từ góc nhìn của cô Lan / của Quách / của người bình luận trên diễn đàn → rèn đa chiều sâu hơn

---

## 10. Prompt để AI khác code lại game này

> Dùng prompt dưới đây nếu bạn muốn nhờ AI khác (hoặc chính bạn, phiên bản sau) viết lại bằng stack khác — Python text-based, React Native, hoặc Roblox/Unity.

### PROMPT A — Dịch sang Python (bản text-based chạy trong terminal)

```
Hãy viết một game text-based bằng Python 3 (chỉ dùng thư viện chuẩn, chạy được
bằng `python lucluong.py`, không cần cài gì) dựa trên đặc tả sau.

TÊN GAME: LỰC LƯỜNG
SLOGAN: "Nghe hết trước. Tính sau."
THỂ LOẠI: game điều tra bí ẩn dạng văn bản, rèn luyện tư duy phản biện cho học sinh 12-18.

BỐI CẢNH: Học viện Minerva. Đêm chủ nhật lúc 21:14, một tệp âm thanh 47 giây đăng lên
diễn đàn "Sóng Trường" khiến cả trường tố giáo viên Toán cô Lan gian lận. Người chơi là
điều tra viên của CLB Trinh thám học đường (BĐT), có 48 giờ.

CẦU TRÚC:
- 7 màn, mỗi màn rèn đúng 1 kỹ năng tư duy phản biện:
  1. Phân biệt sự thật – ý kiến – giả thuyết
  2. Đánh giá bằng chứng và độ tin cậy của nguồn
  3. Nhận diện ngụy biện
  4. Phân tích dữ liệu, tương quan và nhân quả, tần suất nền
  5. Bóc giả định ẩn trong lập luận
  6. Phản biện và bảo vệ lập luận có phong cách
  7. Kết luận có điều kiện và xem xét đa chiều
- Mỗi màn: tình huống mở → thu thập bằng chứng → phỏng vấn nhân vật → phân tích →
  quyết định → phản hồi chi tiết.
- Mỗi màn kết bằng một nhật ký suy nghĩ (người chơi gõ tự do, không chấm điểm).

LUẬT CHƠI (bắt buộc):
1. KHÔNG có bước nào chỉ có một đáp án đúng. Câu hỏi phải ở dạng quyết định
   ("bạn làm gì tiếp theo?") hoặc tự phòng vệ ("bạn bảo vệ lập luận nào?").
2. Chọn sai KHÔNG bị chặn — người chơi đi tiếp, chỉ phải sống với hậu quả.
3. Màn cuối có 3 kết cục khác nhau, mỗi kết cục là một đoạn văn hậu quả riêng.
4. Trong mỗi màn phải cài sẵn 1–2 "bẫy ngụy biện": lựa chọn nghe rất thuyết phục
   vì nó sai. Chọn vào sẽ bị ghi vào danh sách bẫy.
5. Mỗi lựa chọn đều phải có phản hồi 3 phần:
   (a) kết quả — chính xác / chưa đầy đủ / chưa đúng
   (b) giải thích vì sao (2–4 câu, gọn, không giáo dục trực tiếp quá nhiều)
   (c) một khối "BÀI HỌC" tách riêng, nêu nguyên tắc tư duy phản biện.
6. Giọng văn: gần gũi, có kịch tính, hài hước nhẹ, không khô khan, không sáo rỗng.
   Dùng "cậu/cô/chú", không dùng giọng giáo khoa dạy bài.

HỆ THỐNG ĐIỂM:
- 7 kỹ năng, trọng số: 14, 16, 16, 13, 14, 15, 12.
- Mỗi lựa chọn cộng/trừ điểm thô cho 1 kỹ năng, kèm trần điểm tối đa riêng.
- %kỹ năng = điểm đạt / điểm tối đa × 100
- Điểm CT = trung bình có trọng số của 7 kỹ năng (0-100).
- Bảng xếp hạng 6 bậc từ "Nội dung tin giả" đến "Chương trình truyền hình".

CUỐI GAME — in ra màn hình (và ghi file "bao-cao.txt") gồm:
- Điểm CT + danh hiệu
- Bảng điểm 7 kỹ năng dạng thanh ████░░░░
- 2 điểm mạnh và 2 điểm cần cải thiện, kèm gợi ý cụ thể
- Danh sách ngụy biện đã mắc bẫy và đã tránh được
- Toàn bộ nhật ký suy nghĩ của người chơi
- 3 bài tập rèn luyện về nhà, sinh tự động từ 2 kỹ năng yếu nhất
- 3 kết cục tùy lựa chọn ở màn cuối

YÊU CẦU KỸ THUẬT:
- Dữ liệu màn chơi nằm trong danh sách dict Python, tách khỏi logic, để dễ thêm màn.
- Lưu tiến trình bằng json vào ~/.lucluong_save.json, cho phép tải lại.
- Hỗ trợ tiếng Việt trên Windows console (set encoding utf-8, bật wrap).
- Không dùng emoji nếu terminal không hỗ trợ — có cờ USE_EMOJI.
- Code có comment tiếng Việt giải thích từng quyết định thiết kế.
```

### PROMPT B — Prompt "sinh màn mới" (dùng để mở rộng nhanh)

```
Hãy viết NỘI DUNG một màn chơi mới cho game LỰC LƯỜNG (game điều tra bí ẩn rèn tư duy
phản biện cho học sinh 12-18 tuổi).

Bối cảnh chung: Học viện Minerva, câu chuyện về hồ sơ #2041 (đoạn âm thanh 47 giây bị
ghép, gây oan cho giáo viên Toán cô Lan và học sinh tên Hạnh). Bạn là điều tra viên
Ban Điều tra Sự thật (BĐT), người thành lập là cô Hồng, đồng đội là Kiên.

Kỹ năng cần rèn: {{kỹ năng}}
Tên màn: {{tên}}
Bối cảnh riêng của màn: {{bối cảnh}}

YÊU CẦU:
1. Mở đầu bằng một tình huống cụ thể có con số/tên riêng (200–300 từ), KHÔNG giảng bài.
2. Có ít nhất 3 loại tương tác, trong đó 1 loại phải buộc người chơi TỰ ĐỌC DỮ LIỆU
   (bảng số, lời khai, thông báo) rồi ra quyết định.
3. Cài sẵn đúng 1 bẫy ngụy biện: lựa chọn nghe thuyết phục vì nó sai.
4. Có ít nhất 1 câu hỏi dạng "bạn sẽ nói gì?" — không phải "đáp án nào đúng?".
5. Có 1 câu hỏi buộc người chơi xét lại chính mình ("giả định nào của bạn đang yếu?").
6. Mỗi lựa chọn có phản hồi 3 phần: kết quả / giải thích 2-4 câu / khối BÀI HỌC nêu
   nguyên tắc.
7. Kết màn bằng một câu/nhịp truyện khiến người chơi muốn sang màn sau.
8. Giọng văn: gần gũi, kịch tính, hài nhẹ. Nhân vật có tên và giọng riêng.
9. Trả về đúng định dạng JSON theo schema mà tôi cung cấp.
```

---

## 11. Ghi chú cho giáo viên

- **Không có "điểm tốt" cho màn cuối.** Báo cáo cố tình không khen học sinh vì đã "thắng" — vì nhiều khi kết luận đúng là kết luận cũng phải nặng nhất.
- **Nếu học sinh chơi một mạch 7 màn và đạt ≥ 90**, hãy cho họ chơi lại với chỉ dẫn "lần này hãy thử chọn khác đi xem báo cáo đổi thế nào". Đó là lúc giá trị giáo dục của game thật sự bắt đầu.
- **Kết quả tốt nhất của tiết học** không phải điểm cao. Nó là câu hỏi *"vì sao mình tin cái này?"* — hãy hỏi lại nó ở mọi môn khác.

---

*Giấy phép: dùng tự do cho học tập và giảng dạy.*