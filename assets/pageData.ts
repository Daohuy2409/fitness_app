export interface PostInterface {
  id: number;
  title: string;
  date: Date;
  description: string;
  photoUrl: any;
  content: string;
}
interface DataInterface {
  id: number;
  name: string;
  address: string;
  location: number[];
  follow: number;
  coverPhotoUrl: any[];
  avatarUrl: any;
  post: PostInterface[];
}
export const data: DataInterface[] = [
  {
    id: 1,
    name: "Elite Fitness Xuân Thủy",
    address:
      "Indochina Plaza, 241 Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
    location: [21.036985, 105.782062],
    follow: 123456,
    coverPhotoUrl: [
      require("./images/gymID_1/gymImg_1.jpg"),
      require("./images/gymID_1/gymImg_2.jpg"),
      require("./images/gymID_1/gymImg_3.jpg"),
      require("./images/gymID_1/gymImg_4.jpg"),
    ],
    avatarUrl: require("./images/gymID_1/logo.jpg"),
    post: [
      {
        id: 1,
        title: "Ưu đãi thẻ tập tháng 777k",
        date: new Date("2024-11-15"),
        description:
          "CHỈ 777K CHO 30 NGÀY TẬP LUYỆN KHÔNG GIỚI HẠN TẠI ELITE FITNESS VỚI HƠN 55 BỘ MÔN ĐA DẠNG",
        photoUrl: require("./images/gymID_1/post_1.jpg"),
        content: `Ưu đãi thẻ tập 777K bao gồm:
ĐI KÈM thêm 01 NGƯỜI đi cùng trong 14 NGÀY
- Tập luyện hơn 55 bộ môn đa dạng từ Gym, Yoga, Group X, Bơi, Zumba, Pilates...
- Tập luyện trong không gian, thiết bị hệ thống CLB 5 sao hàng đầu.
- Dịch vụ đi kèm đầy đủ: Xông hơi, phòng tắm, locker, nước uống,...
Chương trình áp dụng cho khung giờ Offpeak:
- Từ thứ 2 đến thứ 6: 8:30 – 16:30
- Thứ 7 & Chủ nhật: Toàn thời gian 8:30 - 20:00
Chương trình áp dụng cho khách hàng:
- Chưa từng là hội viên của Elite.
- Hội viên đã tập thử hết hạn quá 6 tháng.
- Khách hàng đã từng là hội viên hết hạn quá 6 tháng.
Chương trình áp dụng từ ngày 15/11/2024 đến 28/02/2025.`,
      },
      {
        id: 2,
        title: "ELITE FITNESS TIÊN PHONG ĐƯA LESMILLS BODYATTACK VỀ VIỆT NAM",
        date: new Date("2024-10-18"),
        description:
          "BodyAttack – Bộ môn đỉnh cao của Lesmills đã chiếm lĩnh trái tim của hàng triệu tín đồ thể thao tại những quốc gia như Úc, Anh, Mỹ, New Zealand và giờ đây, lần đầu tiên có mặt tại Việt Nam – DUY NHẤT tại Elite Fitness",
        photoUrl: require("./images/gymID_1/post2.jpg"),
        content: `BodyAttack là sự kết hợp hoàn hảo giữa sức mạnh và sự bùng nổ năng lượng, mang đến cho bạn bài tập toàn thân đầy thử thách. Các động tác quen mà lạ sẽ giúp bạn vượt qua giới hạn, nâng cao sức bền và thể lực.
 Lý do bạn nên đến ngay Elite Fitness để khám phá BodyAttack:
 Để là một trong những người đầu tiên tại Việt Nam trải nghiệm bộ môn thú vị
 Được thử sức với những bài tập mới mẻ đầy thách thức
 Bài tập phù hợp với mọi cấp độ, giúp bạn đạt được kết quả tối ưu
 Tập luyện cùng Huấn luyện viên chuyên nghiệp và cộng đồng yêu thể thao ưu tú
Lớp học sẽ được chính thức bắt đầu từ tuần sau. Cùng chúng tôi bùng nổ với Lesmills BodyAttack!`,
      },
      {
        id: 3,
        title:
          "CÁC HLV ELITE FITNESS BẢN LĨNH VÀ QUYẾT TÂM CHINH PHỤC IRON MAN 70.3 PHÚ QUỐC",
        date: new Date("2024-11-21"),
        description:
          "Các HLV nhà Elite Fitness tham gia giải Iron Man với quyết tâm cao và đã giành những thành tích xuất sắc",
        photoUrl: require("./images/gymID_1/post3.jpg"),
        content: `Các HLV nhà Elite Fitness đã quyết tâm tham gia giải đấu với mong muốn vượt qua giới hạn bản thân và truyền cảm hứng đến cộng đồng. Ironman không chỉ đòi hỏi sức bền mà còn yêu cầu sự phối hợp nhịp nhàng giữa 3 bộ môn phối hợp với đường bơi biển dài 1,9km, đường đạp xe dài 90km, đường chạy dài 21,1km
    Trải qua nhiều thử thách chồng thử thách, các HLV nhà Elite đã xuất sắc hoàn thành chặng đua lên tới 113km. Tham gia giải Iron Man 70.3 lần này, 3 CLB có thành viên thi đấu gồm Elite Fitness Thảo Điền, Elite Fitness Xuân Diệu, Elite Fitness Đà Nẵng. 
    Trong sự cạnh tranh khốc liệt này, HLV Nguyễn Trà My (MyCa) tại Elite Fitnesss Vĩnh Trung đã đạt Giải nhất nhóm tuổi 25-29 & Giải ba hạng A-list nữ. 
    Hãy cùng chúc mừng và cổ vũ các HLV Elite Fitness trên hành trình tiếp theo, nơi họ sẽ tiếp tục khẳng định giá trị của sức mạnh, nghị lực và lòng kiên định nhé!`,
      },
    ],
  },
  {
    id: 2,
    name: "Level Fitness",
    address: "9 Đ. Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội",
    location: [21.04073279929369, 105.7802504965619],
    follow: 4585,
    coverPhotoUrl: [
      require("./images/gymID_2/gymImg_1.jpg"),
      require("./images/gymID_2/gymImg_2.jpg"),
      require("./images/gymID_2/gymImg_3.jpg"),
      require("./images/gymID_2/gymImg_4.png"),
    ],
    avatarUrl: require("./images/gymID_2/logo.png"),
    post: [
      {
        id: 1,
        title: "Tăng tốc độ body đón tết cùng Level Fitness",
        date: new Date("2024-11-01"),
        description:
          "TẶNG 25% - 35% chi phí tập cùng HLV với những đặc quyền chỉ có tại Level Fitness, số lượng ưu đãi có hạn",
        photoUrl: require("./images/gymID_2/post3.jpg"),
        content: `TẶNG 25% chi phí tập cùng HLV cho tất cả member mới trong tháng 11. 
TẶNG 35% chi phí tập cùng HLV khi đăng ký theo nhóm với bạn bè.
*Ưu đãi áp dụng tại cơ sở The Nine
ĐẶC QUYỀN KHI THAM GIA CHƯƠNG TRÌNH:
- 2 buổi tập thử miễn phí 
- Đo chỉ số và đánh giá thể chất toàn diện 
- Tư vấn dinh dưỡng và lộ trình chỉnh dáng: Giảm cân, giảm mỡ, tăng cơ, tăng cân, hiệu chỉnh tư thế,...
Bạn sẽ yêu thích chương trình huấn luyện bởi : 
- Chương trình cá nhân hóa, không quá sức và bám sát mục tiêu
- Giám sát chuyên nghiệp giúp bạn tập đúng và hiệu quả
- Tăng cường động lực với các coach trẻ trung, tâm lý và truyền cảm hứng, giúp bạn duy trì động lực.
- Xây dựng chế độ dinh dưỡng khoa học
- An toàn và an tâm, hạn chế chấn thương
Đừng bỏ lỡ cơ hội tập luyện tại phòng gym chất, xịn cùng đội ngũ Huấn luyện viên tuyệt vời
 Nhanh tay săn ưu đãi giới hạn chỉ 22 suất duy nhất!
`,
      },
      {
        id: 2,
        title: "Unlock - Mở khoá để bứt phá",
        date: new Date("2024-11-22"),
        description:
          "Sự kiện sinh nhật Level Fitness Center The Nine tròn 2 tuổi mang tên Unlock, với những khách mời đặc biệt và trải nghiệm tuyệt vời",
        photoUrl: require("./images/gymID_2/post2.jpg"),
        content: `Ngày 22 tháng 11 này, một sự kiện đáng mong đợi nhất sẽ được diễn ra - sinh nhật Level Fitness Center The Nine tròn 2 tuổi. Không giống như sự kiện sinh nhật mọi năm, lần này Level sẽ đưa bạn vào một thế giới đặc biệt mang tên Unlock. 
Trong thế giới này bạn sẽ được khám phá chính mình qua những vòng chơi đòi hỏi sự kết hợp giữa thể lực, tư duy và chiến thuật. Đồng thời, bạn sẽ có cuộc gặp gỡ và kết nối với những người chơi mà bạn không hề biết trước để cùng chạm tay vào phần thưởng trị giá 15 triệu đồng tiền mặt. 
Sự kiện sẽ có sự góp mặt của MC Ck Animation , DJ Duy Nguyễn và sự xuất hiện vô cùng đặc biệt của Last Fire Crew hứa hẹn sẽ mang đến cho bạn một bữa tiệc âm nhạc sôi động với những màn trình diễn đầy mãn nhãn.
`,
      },
      {
        id: 3,
        title:
          "Những món quà chăm sóc sức khoẻ thay cho lời tri ân chân thành.",
        date: new Date("2023-10-01"),
        description:
          "Level đã kết hợp với MND Citta Clinic đem đến cho khách hàng những buổi trải nghiệm chăm sóc da miễn phí",
        photoUrl: require("./images/gymID_2/post1.jpg"),
        content: `Vào dịp 20/10 vừa qua, Level đã kết hợp với MND Citta Clinic mang đến những buổi trải nghiệm tư vấn chăm sóc da miễn phí cùng các phần quà làm đẹp gửi tới Hội viên. Đây là sự hợp tác để thực hiện sứ mệnh của Level Fitness trong việc chăm sóc sức khỏe toàn diện cho mọi khách hàng.
Sức khỏe là nền tảng cho một cuộc sống trọn vẹn, và sự kết hợp giữa sức khỏe thể chất với chăm sóc sắc đẹp sẽ mang lại nhiều giá trị tích cực cho cộng đồng. Trong thời gian tới, Level Fitness Center sẽ tiếp tục lan tỏa sứ mệnh của mình bằng cách mở rộng các hoạt động hợp tác với các thương hiệu uy tín để đồng hành với khách hàng trên con đường hướng tới sức khỏe và sự tự tin!
`,
      },
    ],
  },
  {
    id: 3,
    name: "California Fitness & Yoga Center",
    address: "173 Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
    location: [21.0373068847073, 105.78462764574923],
    follow: 565,
    coverPhotoUrl: [
      require("./images/gymID_3/gymImg_1.jpg"),
      require("./images/gymID_3/gymImg_2.jpg"),
      require("./images/gymID_3/gymImg_3.jpg"),
    ],
    avatarUrl: require("./images/gymID_3/logo.jpg"),
    post: [
      {
        id: 1,
        title: `Không cần chờ lương – Mở khóa hoa hồng tự động mỗi tháng chỉ với vài cú “click" chuột!`,
        date: new Date("2024-10-13"),
        description:
          "Giới thiệu bạn bè mua gói tập nhận ngay 100% giá trị gói tháng đầu tiên và nhiều ưu đãi khác.",
        photoUrl: require("./images/gymID_3/post1.jpg"),
        content: `Cộng ngay 𝟏𝟎𝟎% giá trị hiện kim tháng đầu tiên cho mỗi Gói Tập Tháng được giới thiệu thành công! Ví dụ: bạn giới thiệu bạn bè mua gói 599k/tháng thành công, bạn nhận ngay 599k
   Cộng ngay 𝟐𝟓.𝟎𝟎𝟎 𝐕𝐍𝐃 tự động mỗi tháng – Thu nhập suốt đời khi Gói Tập Tháng còn hiệu lực.
Chỉ 30 giây, hội viên dễ dàng mời bạn bè đi tập ở mọi lúc mọi nơi:
 Bước 01: Kích hoạt tài khoản trên Zalo MiniApp: https://link.cali.vn/MiniApp
 Bước 02: Sao chép và gửi link Gói Tập Tháng đến bạn bè
 Bước 03: Nhận  thưởng và quy đổi thành tiền mặt hoặc sử dụng cho các dịch vụ   chăm sóc sức khỏe cá nhân
    Mỗi lượt chia sẻ là cơ hội để bạn lan tỏa lối sống khỏe mạnh đến cộng đồng. Cùng tham gia ngay và lan tỏa năng lượng tích cực nhé.
`,
      },
      {
        id: 2,
        title:
          "Ra mắt gói tập hỗ trợ các khách hàng đang bị gián đoạn tập luyện",
        date: new Date("2024-10-11"),
        description: "Ưu đãi lớn cho ngày khai trương",
        photoUrl: require("./images/gymID_3/post2.jpg"),
        content: `Nhằm tiếp tục xây dựng một Việt Nam khỏe mạnh và duy trì sự ổn định trong việc tập luyện, California Fitness xin giới thiệu gói hỗ trợ chuyển đổi hội viên đặc biệt. Gói này không chỉ giúp Quý Khách hàng tiếp tục thói quen tập luyện mà còn mang đến nhiều quyền lợi hấp dẫn:
🔥 02 tháng Thẻ hội viên Platinum Plus tại toàn bộ chi nhánh Cali trong khu vực của bạn.
🔥 Chương trình Corrective Exercise: 03 buổi tập định hướng cùng Huấn luyện viên Sức Khỏe, với các bài tập cá nhân hóa giúp điều chỉnh tư thế, cải thiện sự cân bằng cơ bắp và tăng cường hiệu suất thể chất. 
🔥 02 buổi tập Hypoxi - công nghệ tiên tiến hỗ trợ giảm cân và phục hồi cơ thể bằng phương pháp hút nén chân không hiện đại.
Gói hỗ trợ miễn phí này dành cho những khách hàng bị ảnh hưởng từ việc các trung tâm thể hình khác đóng cửa, cùng mọi người lấy lại động lực để bắt đầu hành trình sức khỏe mới.
⏳ Thời hạn nhận hỗ trợ: Vui lòng hoàn tất thủ tục trong vòng 30 ngày kể từ khi có thông báo.
`,
      },
      {
        id: 3,
        title:
          "Tự hào công bố 𝐂𝐚𝐥𝐢𝐟𝐨𝐫𝐧𝐢𝐚 𝐖𝐞𝐥𝐥𝐧𝐞𝐬𝐬 𝐄𝐜𝐨𝐬𝐲𝐬𝐭𝐞𝐦 - Hệ sinh thái sống khỏe toàn diện hàng đầu tại Việt Nam",
        date: new Date("2024-11-25"),
        description:
          "California Wellness Ecosystem - vũ trụ sống khỏe toàn diện của bạn, nơi chăm sóc sức khỏe thể chất, tinh thần - Hệ sinh thái sống khỏe toàn diện hàng đầu tại Việt Nam",
        photoUrl: require("./images/gymID_3/post3.jpg"),
        content: `California Wellness Ecosystem - vũ trụ sống khỏe toàn diện của bạn, nơi chăm sóc sức khỏe thể chất, tinh thần

California Wellness Ecosystem được thiết kế dựa trên sự thấu hiểu sâu sắc về lối sống và nhu cầu của cộng đồng Việt Nam, hệ sinh thái này là “một điểm đến wellness toàn diện” - nơi kết hợp công nghệ hiện đại, các giải pháp cá nhân hóa và tiêu chuẩn chăm sóc sức khỏe quốc tế, nhằm mang đến những giá trị thực tiễn và bền vững cho từng cá nhân. 
Hệ sinh thái được tạo nên bởi các khía cạnh đại diện cho các thương hiệu: 
✨ VẬN ĐỘNG - California Fitness & Yoga
✨ DINH DƯỠNG - American Standard Nutrition (ASN)
✨ CÔNG NGHỆ BẢO HIỂM - LivWell
✨ PHỤC HỒI - HYPOXI 
✨ THẨM MỸ CHỐNG LÃO HOÁ - VITA Clinic
✨ Y HỌC TÁI TẠO - Meijibio
Thông qua California Wellness Ecosystem, chúng tôi mong muốn mang đến sức khỏe, hạnh phúc và hy vọng cho tất cả 100 triệu người bằng cách gia tăng thêm 10 năm sống khỏe, tạo ra 1 tỷ năm sống khỏe hơn cho đất nước Việt Nam.
`,
      },
    ],
  },
];
