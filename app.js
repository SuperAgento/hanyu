const lessons = window.LESSON_DATA?.lessons || [];

const topicMap = {
  "Bài 1": ["8 nét", "Quy tắc viết", "Pinyin", "Thanh điệu", "你 好 吗"],
  "Bài 2": ["汉语不太难", "Gia đình", "很 太 忙", "an/en/ang"],
  "Bài 3": ["明天见", "Ngôn ngữ", "Đi bưu điện", "Ngân hàng", "j q x"],
  "Bài 4": ["你去哪儿", "Hôm nay", "Thứ trong tuần", "学校", "A 不 A"],
  "Bài 5": ["这是王老师", "Lời mời", "请进 请坐", "工作", "身体"],
};

const lessonNameMap = {
  "Bài 1": "HỌC TIẾNG TRUNG ĐỂ LÀM GÌ",
  "Bài 2": "汉语不太难",
  "Bài 3": "明天见",
  "Bài 4": "你去哪儿",
  "Bài 5": "这是王老师",
};

const audioLessons = [
  { id: "audio-01", number: 1, title: "Bài 1", theme: "你好 · Xin chào", src: "audio/lesson-01.mp3", lesson: "Bài 1" },
  { id: "audio-02", number: 2, title: "Bài 2", theme: "汉语不太难 · Tiếng Hán không khó lắm", src: "audio/lesson-02.mp3", lesson: "Bài 2" },
  { id: "audio-03", number: 3, title: "Bài 3", theme: "明天见 · Ngày mai gặp", src: "audio/lesson-03.mp3", lesson: "Bài 3" },
  { id: "audio-04", number: 4, title: "Bài 4", theme: "你去哪儿 · Bạn đi đâu?", src: "audio/lesson-04.mp3", lesson: "Bài 4" },
  { id: "audio-05", number: 5, title: "Bài 5", theme: "这是王老师 · Đây là thầy giáo Vương", src: "audio/lesson-05.mp3", lesson: "Bài 5" },
  { id: "audio-06", number: 6, title: "Bài 6", theme: "Quyển 1", src: "audio/lesson-06.mp3", lesson: "Bài 6" },
  { id: "audio-07", number: 7, title: "Bài 7", theme: "Quyển 1", src: "audio/lesson-07.mp3", lesson: "Bài 7" },
  { id: "audio-08", number: 8, title: "Bài 8", theme: "Quyển 1", src: "audio/lesson-08.mp3", lesson: "Bài 8" },
  { id: "audio-09", number: 9, title: "Bài 9", theme: "Quyển 1", src: "audio/lesson-09.mp3", lesson: "Bài 9" },
  { id: "audio-10", number: 10, title: "Bài 10", theme: "Quyển 1", src: "audio/lesson-10.mp3", lesson: "Bài 10" },
  { id: "audio-11", number: 11, title: "Bài 11", theme: "Quyển 1", src: "audio/lesson-11.mp3", lesson: "Bài 11" },
  { id: "audio-12", number: 12, title: "Bài 12", theme: "Quyển 1", src: "audio/lesson-12.mp3", lesson: "Bài 12" },
  { id: "audio-13", number: 13, title: "Bài 13", theme: "Quyển 1", src: "audio/lesson-13.mp3", lesson: "Bài 13" },
  { id: "audio-14", number: 14, title: "Bài 14", theme: "Quyển 1", src: "audio/lesson-14.mp3", lesson: "Bài 14" },
  { id: "audio-15", number: 15, title: "Bài 15", theme: "Quyển 1", src: "audio/lesson-15.mp3", lesson: "Bài 15" },
];

const audioTranscripts = window.AUDIO_TRANSCRIPTS || {};

const seedVocabulary = [
  { id: "l1-wo", lesson: "Bài 1", hanzi: "我", pinyin: "wǒ", hanViet: "ngã", meaning: "tôi", note: "Bản ngã, cái tôi." },
  { id: "l1-ni", lesson: "Bài 1", hanzi: "你", pinyin: "nǐ", hanViet: "nhĩ", meaning: "bạn", note: "亻 + 冖 + 小: người bạn chơi với mình từ nhỏ." },
  { id: "l1-hao", lesson: "Bài 1", hanzi: "好", pinyin: "hǎo", hanViet: "hảo", meaning: "tốt, đẹp, khỏe", note: "女 + 子: người phụ nữ và đứa con." },
  { id: "l1-nihao", lesson: "Bài 1", hanzi: "你好", pinyin: "nǐ hǎo", hanViet: "nhĩ hảo", meaning: "xin chào", note: "Hai thanh 3 cạnh nhau đọc thành ní hǎo." },
  { id: "l1-duibuqi", lesson: "Bài 1", hanzi: "对不起", pinyin: "duìbùqǐ", hanViet: "đối bất khởi", meaning: "xin lỗi", note: "Cụm giao tiếp cơ bản." },
  { id: "l1-yi", lesson: "Bài 1", hanzi: "一", pinyin: "yī", hanViet: "nhất", meaning: "một", note: "Một nét ngang." },
  { id: "l1-er", lesson: "Bài 1", hanzi: "二", pinyin: "èr", hanViet: "nhị", meaning: "hai", note: "Hai nét ngang." },
  { id: "l1-san", lesson: "Bài 1", hanzi: "三", pinyin: "sān", hanViet: "tam", meaning: "ba", note: "Ba nét ngang." },
  { id: "l1-si", lesson: "Bài 1", hanzi: "四", pinyin: "sì", hanViet: "tứ", meaning: "bốn", note: "Tưởng tượng ô cửa sổ có rèm." },
  { id: "l1-wu", lesson: "Bài 1", hanzi: "五", pinyin: "wǔ", hanViet: "ngũ", meaning: "năm", note: "Người ngồi bó gối hoặc vắt chân chữ ngũ." },
  { id: "l1-liu", lesson: "Bài 1", hanzi: "六", pinyin: "liù", hanViet: "lục", meaning: "sáu", note: "亠 + 八: đứa trẻ 6 tuổi dang tay chân." },
  { id: "l1-qi", lesson: "Bài 1", hanzi: "七", pinyin: "qī", hanViet: "thất", meaning: "bảy", note: "Giống số 7 Việt Nam lộn ngược." },
  { id: "l1-ba", lesson: "Bài 1", hanzi: "八", pinyin: "bā", hanViet: "bát", meaning: "tám", note: "Giống cái bát úp xuống." },
  { id: "l1-jiu", lesson: "Bài 1", hanzi: "九", pinyin: "jiǔ", hanViet: "cửu", meaning: "chín", note: "Người chống tay hít đất." },
  { id: "l1-shi", lesson: "Bài 1", hanzi: "十", pinyin: "shí", hanViet: "thập", meaning: "mười", note: "Hình cây thánh giá." },
  { id: "l1-da", lesson: "Bài 1", hanzi: "大", pinyin: "dà", hanViet: "đại", meaning: "to, lớn", note: "Người dang tay chân giữa đất trời." },
  { id: "l1-bu", lesson: "Bài 1", hanzi: "不", pinyin: "bù", hanViet: "bất", meaning: "không", note: "Đọc bú khi đứng trước thanh 4." },
  { id: "l1-kou", lesson: "Bài 1", hanzi: "口", pinyin: "kǒu", hanViet: "khẩu", meaning: "miệng", note: "Giống cái miệng đang há ra." },
  { id: "l1-bai", lesson: "Bài 1", hanzi: "白", pinyin: "bái", hanViet: "bạch", meaning: "màu trắng", note: "Nét phẩy + 日: ánh mặt trời màu trắng." },
  { id: "l1-nv", lesson: "Bài 1", hanzi: "女", pinyin: "nǚ", hanViet: "nữ", meaning: "nữ, phụ nữ, con gái", note: "Người phụ nữ dang tay múa lụa." },
  { id: "l1-ma-horse", lesson: "Bài 1", hanzi: "马", pinyin: "mǎ", hanViet: "mã", meaning: "ngựa", note: "Tưởng tượng giống con ngựa." },
  { id: "l1-ma-question", lesson: "Bài 1", hanzi: "吗", pinyin: "ma", hanViet: "", meaning: "trợ từ nghi vấn: không, à, chứ", note: "口 + 马: hỏi thì phải mở miệng." },
  { id: "l2-mang", lesson: "Bài 2", hanzi: "忙", pinyin: "máng", hanViet: "mang", meaning: "bận", note: "忄 + 亡: quá bận dễ đánh mất chuyện tình cảm." },
  { id: "l2-hen", lesson: "Bài 2", hanzi: "很", pinyin: "hěn", hanViet: "ngận, hấn", meaning: "rất", note: "Thường đứng trước tính từ: 很忙, 很好." },
  { id: "l2-hanyu", lesson: "Bài 2", hanzi: "汉语", pinyin: "hànyǔ", hanViet: "Hán ngữ", meaning: "tiếng Hán", note: "汉 + 语: ngôn ngữ của người Hán." },
  { id: "l2-nan", lesson: "Bài 2", hanzi: "难", pinyin: "nán", hanViet: "nan", meaning: "khó", note: "又 + 隹: bắt đi bắt lại một chú chim rất khó." },
  { id: "l2-tai", lesson: "Bài 2", hanzi: "太", pinyin: "tài", hanViet: "thái", meaning: "quá, lắm", note: "不太 + tính từ: không quá..." },
  { id: "l2-baba", lesson: "Bài 2", hanzi: "爸爸", pinyin: "bàba", hanViet: "ba ba", meaning: "bố", note: "父 + 巴 gợi âm đọc." },
  { id: "l2-mama", lesson: "Bài 2", hanzi: "妈妈", pinyin: "māma", hanViet: "ma ma", meaning: "mẹ", note: "女 + 马: người phụ nữ trong gia đình." },
  { id: "l2-ta-male", lesson: "Bài 2", hanzi: "他", pinyin: "tā", hanViet: "tha", meaning: "anh ta, ông ấy", note: "亻 + 也." },
  { id: "l2-ta-female", lesson: "Bài 2", hanzi: "她", pinyin: "tā", hanViet: "tha", meaning: "cô ta, bà ấy", note: "女 + 也." },
  { id: "l2-nan-male", lesson: "Bài 2", hanzi: "男", pinyin: "nán", hanViet: "nam", meaning: "nam giới, con trai", note: "田 + 力: người có sức lực làm ruộng." },
  { id: "l2-gege", lesson: "Bài 2", hanzi: "哥哥", pinyin: "gēge", hanViet: "ca ca", meaning: "anh trai", note: "Dùng trong 你哥哥忙吗？" },
  { id: "l2-didi", lesson: "Bài 2", hanzi: "弟弟", pinyin: "dìdi", hanViet: "đệ đệ", meaning: "em trai", note: "Có trong 小弟, 兄弟." },
  { id: "l2-meimei", lesson: "Bài 2", hanzi: "妹妹", pinyin: "mèimei", hanViet: "muội muội", meaning: "em gái", note: "女 + 未: người con gái còn trẻ." },
  { id: "l2-jiejie", lesson: "Bài 2", hanzi: "姐姐", pinyin: "jiějie", hanViet: "tỷ tỷ", meaning: "chị gái", note: "Có trong 大姐, 好姐妹." },
  { id: "l2-xiao", lesson: "Bài 2", hanzi: "小", pinyin: "xiǎo", hanViet: "tiểu", meaning: "nhỏ, bé", note: "Cái cây bị đẽo nhỏ đi." },
  { id: "l2-nannv", lesson: "Bài 2", hanzi: "男女", pinyin: "nánnǚ", hanViet: "nam nữ", meaning: "nam nữ", note: "男 + 女." },
  { id: "l3-xue", lesson: "Bài 3", hanzi: "学", pinyin: "xué", hanViet: "học", meaning: "học", note: "Trẻ con hì hục học vã mồ hôi." },
  { id: "l3-yingyu", lesson: "Bài 3", hanzi: "英语", pinyin: "yīngyǔ", hanViet: "Anh ngữ", meaning: "tiếng Anh", note: "英 + 语." },
  { id: "l3-alaboyu", lesson: "Bài 3", hanzi: "阿拉伯语", pinyin: "Ālābó yǔ", hanViet: "A lạp bá ngữ", meaning: "tiếng Ả Rập", note: "Dịch âm từ Arabic." },
  { id: "l3-deyu", lesson: "Bài 3", hanzi: "德语", pinyin: "Déyǔ", hanViet: "Đức ngữ", meaning: "tiếng Đức", note: "Cô ấy học tiếng Đức: 她学德语。" },
  { id: "l3-eyu", lesson: "Bài 3", hanzi: "俄语", pinyin: "Éyǔ", hanViet: "Nga ngữ", meaning: "tiếng Nga", note: "亻 + 我." },
  { id: "l3-fayu", lesson: "Bài 3", hanzi: "法语", pinyin: "Fǎyǔ", hanViet: "Pháp ngữ", meaning: "tiếng Pháp", note: "氵 + 去." },
  { id: "l3-hanguoyu", lesson: "Bài 3", hanzi: "韩国语", pinyin: "Hánguóyǔ", hanViet: "Hàn quốc ngữ", meaning: "tiếng Hàn Quốc", note: "韩 + 国 + 语." },
  { id: "l3-riyu", lesson: "Bài 3", hanzi: "日语", pinyin: "Rìyǔ", hanViet: "Nhật ngữ", meaning: "tiếng Nhật", note: "日 là mặt trời." },
  { id: "l3-xibanyayu", lesson: "Bài 3", hanzi: "西班牙语", pinyin: "Xībānyáyǔ", hanViet: "Tây Ban Nha ngữ", meaning: "tiếng Tây Ban Nha", note: "西 + 班 + 牙 + 语." },
  { id: "l3-dui", lesson: "Bài 3", hanzi: "对", pinyin: "duì", hanViet: "đối", meaning: "đúng, được", note: "Làm đi làm lại từng chút một sẽ đúng." },
  { id: "l3-mingtian", lesson: "Bài 3", hanzi: "明天", pinyin: "míngtiān", hanViet: "minh thiên", meaning: "ngày mai", note: "明: 日 + 月; 天: trời/ngày." },
  { id: "l3-jian", lesson: "Bài 3", hanzi: "见", pinyin: "jiàn", hanViet: "kiến", meaning: "gặp, thấy", note: "Bộ kiến: 冂 + 儿." },
  { id: "l3-zaijian", lesson: "Bài 3", hanzi: "再见", pinyin: "zàijiàn", hanViet: "tái kiến", meaning: "tạm biệt", note: "Hẹn gặp lại." },
  { id: "l3-mingtianjian", lesson: "Bài 3", hanzi: "明天见", pinyin: "míngtiān jiàn", hanViet: "minh thiên kiến", meaning: "ngày mai gặp", note: "Câu chủ đề của Bài 3." },
  { id: "l3-qu", lesson: "Bài 3", hanzi: "去", pinyin: "qù", hanViet: "khứ", meaning: "đi", note: "土 + 厶: những gì đi qua là quá khứ." },
  { id: "l3-youju", lesson: "Bài 3", hanzi: "邮局", pinyin: "yóujú", hanViet: "bưu cục", meaning: "bưu điện", note: "Ngày mai tôi đi bưu điện: 明天我去邮局。" },
  { id: "l3-ji", lesson: "Bài 3", hanzi: "寄", pinyin: "jì", hanViet: "ký", meaning: "gửi", note: "宀 + 大 + 可." },
  { id: "l3-xin", lesson: "Bài 3", hanzi: "信", pinyin: "xìn", hanViet: "tín", meaning: "thư", note: "亻 + 言: con người truyền tải ngôn từ." },
  { id: "l3-yinhang", lesson: "Bài 3", hanzi: "银行", pinyin: "yínháng", hanViet: "ngân hàng", meaning: "ngân hàng", note: "银: kim loại bạc; 行: đi bằng hai chân." },
  { id: "l3-qu-money", lesson: "Bài 3", hanzi: "取", pinyin: "qǔ", hanViet: "thủ", meaning: "rút, lấy", note: "耳 + 又: nghe và làm lại để rút kinh nghiệm." },
  { id: "l3-qian", lesson: "Bài 3", hanzi: "钱", pinyin: "qián", hanViet: "tiền", meaning: "tiền", note: "钅 + 戈 + 一." },
  { id: "l3-beijing", lesson: "Bài 3", hanzi: "北京", pinyin: "Běijīng", hanViet: "Bắc Kinh", meaning: "Bắc Kinh", note: "北 + 京." },
  { id: "l3-zhongguo", lesson: "Bài 3", hanzi: "中国", pinyin: "Zhōngguó", hanViet: "Trung Quốc", meaning: "Trung Quốc", note: "Xuất hiện trong 去中国." },
  { id: "l3-xiexie", lesson: "Bài 3", hanzi: "谢谢", pinyin: "xièxie", hanViet: "tạ tạ", meaning: "cảm ơn", note: "Slide cuối Bài 3." },
  { id: "l4-jintian", lesson: "Bài 4", hanzi: "今天", pinyin: "jīntiān", hanViet: "kim thiên", meaning: "hôm nay", note: "今天你忙吗？ Hôm nay bạn bận không?" },
  { id: "l4-mingtian", lesson: "Bài 4", hanzi: "明天", pinyin: "míngtiān", hanViet: "minh thiên", meaning: "ngày mai", note: "明: 日 + 月; 天: ngày/trời." },
  { id: "l4-zuotian", lesson: "Bài 4", hanzi: "昨天", pinyin: "zuótiān", hanViet: "tác thiên", meaning: "hôm qua", note: "昨: thời gian 日 trôi qua rất nhanh." },
  { id: "l4-tian", lesson: "Bài 4", hanzi: "天", pinyin: "tiān", hanViet: "thiên", meaning: "ngày, trời", note: "我去中国五天。 Tôi đi Trung Quốc 5 ngày." },
  { id: "l4-xingqi", lesson: "Bài 4", hanzi: "星期", pinyin: "xīngqī", hanViet: "tinh kỳ", meaning: "tuần, thứ", note: "Dùng để hỏi/thông báo thứ trong tuần." },
  { id: "l4-xingqiyi", lesson: "Bài 4", hanzi: "星期一", pinyin: "xīngqī yī", hanViet: "", meaning: "thứ Hai", note: "一 là 1." },
  { id: "l4-xingqier", lesson: "Bài 4", hanzi: "星期二", pinyin: "xīngqī èr", hanViet: "", meaning: "thứ Ba", note: "二 là 2." },
  { id: "l4-xingqisan", lesson: "Bài 4", hanzi: "星期三", pinyin: "xīngqī sān", hanViet: "", meaning: "thứ Tư", note: "三 là 3." },
  { id: "l4-xingqisi", lesson: "Bài 4", hanzi: "星期四", pinyin: "xīngqī sì", hanViet: "", meaning: "thứ Năm", note: "四 là 4." },
  { id: "l4-xingqiwu", lesson: "Bài 4", hanzi: "星期五", pinyin: "xīngqī wǔ", hanViet: "", meaning: "thứ Sáu", note: "五 là 5." },
  { id: "l4-xingqiliu", lesson: "Bài 4", hanzi: "星期六", pinyin: "xīngqī liù", hanViet: "", meaning: "thứ Bảy", note: "六 là 6." },
  { id: "l4-xingqitian", lesson: "Bài 4", hanzi: "星期天", pinyin: "xīngqī tiān", hanViet: "", meaning: "Chủ nhật", note: "Cũng có thể nói 星期日." },
  { id: "l4-ji", lesson: "Bài 4", hanzi: "几", pinyin: "jǐ", hanViet: "kỷ", meaning: "mấy, vài", note: "今天星期几？ Hôm nay thứ mấy?" },
  { id: "l4-nar", lesson: "Bài 4", hanzi: "哪儿", pinyin: "nǎr", hanViet: "ná nhi", meaning: "ở đâu", note: "你去哪儿？ Bạn đi đâu?" },
  { id: "l4-nar-there", lesson: "Bài 4", hanzi: "那儿", pinyin: "nàr", hanViet: "ná nhi", meaning: "ở kia, đằng kia", note: "我去那儿。 Tôi đi đằng kia." },
  { id: "l4-hui", lesson: "Bài 4", hanzi: "回", pinyin: "huí", hanViet: "hồi", meaning: "về, quay về", note: "回国: về nước; 回学校: về trường." },
  { id: "l4-xuexiao", lesson: "Bài 4", hanzi: "学校", pinyin: "xuéxiào", hanViet: "học hiệu", meaning: "trường học", note: "学 + 校." },
  { id: "l4-zaijian", lesson: "Bài 4", hanzi: "再见", pinyin: "zàijiàn", hanViet: "tái kiến", meaning: "tạm biệt", note: "明天见。 Mai gặp nhé." },
  { id: "l4-duibuqi", lesson: "Bài 4", hanzi: "对不起", pinyin: "duìbuqǐ", hanViet: "đối bất khởi", meaning: "xin lỗi", note: "Cụm giao tiếp trong bài khóa." },
  { id: "l4-meiguanxi", lesson: "Bài 4", hanzi: "没关系", pinyin: "méiguānxi", hanViet: "một quan hệ", meaning: "không có gì", note: "Đáp lại 对不起." },
  { id: "l4-tiananmen", lesson: "Bài 4", hanzi: "天安门", pinyin: "Tiān'ānmén", hanViet: "Thiên An Môn", meaning: "Thiên An Môn", note: "去天安门: đi Thiên An Môn." },
  { id: "l5-zhe", lesson: "Bài 5", hanzi: "这", pinyin: "zhè", hanViet: "giá", meaning: "đây, này", note: "这 + 是: đây là..." },
  { id: "l5-shi", lesson: "Bài 5", hanzi: "是", pinyin: "shì", hanViet: "thị", meaning: "là, phải", note: "这是什么？ Đây là cái gì?" },
  { id: "l5-laoshi", lesson: "Bài 5", hanzi: "老师", pinyin: "lǎoshī", hanViet: "lão sư", meaning: "thầy, cô, giáo viên", note: "老师好！ Chào thầy cô." },
  { id: "l5-nin", lesson: "Bài 5", hanzi: "您", pinyin: "nín", hanViet: "nâm", meaning: "ngài, bạn/ông/bà trang trọng", note: "你 đặt trong 心 để thể hiện tôn trọng." },
  { id: "l5-qing", lesson: "Bài 5", hanzi: "请", pinyin: "qǐng", hanViet: "thỉnh", meaning: "xin, mời", note: "请进, 请坐, 请喝茶." },
  { id: "l5-jin", lesson: "Bài 5", hanzi: "进", pinyin: "jìn", hanViet: "tiến", meaning: "vào", note: "请进。 Mời vào." },
  { id: "l5-zuo", lesson: "Bài 5", hanzi: "坐", pinyin: "zuò", hanViet: "tọa", meaning: "ngồi", note: "请坐。 Mời ngồi." },
  { id: "l5-he", lesson: "Bài 5", hanzi: "喝", pinyin: "hē", hanViet: "hát", meaning: "uống", note: "请您喝。 Mời ngài uống." },
  { id: "l5-cha", lesson: "Bài 5", hanzi: "茶", pinyin: "chá", hanViet: "trà", meaning: "trà, chè", note: "请喝茶。 Mời uống trà." },
  { id: "l5-xiexie", lesson: "Bài 5", hanzi: "谢谢", pinyin: "xièxie", hanViet: "tạ tạ", meaning: "cảm ơn", note: "谢谢你。 Cảm ơn bạn." },
  { id: "l5-keqi", lesson: "Bài 5", hanzi: "客气", pinyin: "kèqi", hanViet: "khách khí", meaning: "khách sáo", note: "他很客气！ Anh ta rất khách sáo." },
  { id: "l5-bukeqi", lesson: "Bài 5", hanzi: "不客气", pinyin: "bú kèqi", hanViet: "bất khách khí", meaning: "không có gì, đừng khách sáo", note: "Đáp lại 谢谢." },
  { id: "l5-gongzuo", lesson: "Bài 5", hanzi: "工作", pinyin: "gōngzuò", hanViet: "công tác", meaning: "công việc, làm việc", note: "工作忙吗？ Công việc bận không?" },
  { id: "l5-shenti", lesson: "Bài 5", hanzi: "身体", pinyin: "shēntǐ", hanViet: "thân thể", meaning: "sức khỏe, cơ thể", note: "身体好吗？ Sức khỏe tốt không?" },
  { id: "l5-wang", lesson: "Bài 5", hanzi: "王", pinyin: "Wáng", hanViet: "Vương", meaning: "họ Vương", note: "王老师: thầy giáo Vương." },
];

const seedRadicals = [
  { id: "stroke-dian", type: "Nét", symbol: "丶", name: "diǎn", meaning: "nét chấm", note: "Một dấu chấm, từ trên xuống dưới." },
  { id: "stroke-pie", type: "Nét", symbol: "丿", name: "piě", meaning: "nét phẩy", note: "Nét cong kéo xuống từ phải qua trái." },
  { id: "stroke-heng", type: "Nét", symbol: "一", name: "héng", meaning: "nét ngang", note: "Kéo từ trái sang phải." },
  { id: "stroke-shu", type: "Nét", symbol: "丨", name: "shù", meaning: "nét sổ thẳng", note: "Kéo từ trên xuống dưới." },
  { id: "stroke-na", type: "Nét", symbol: "㇏", name: "nà", meaning: "nét mác", note: "Kéo xuống từ trái qua phải." },
  { id: "stroke-ti", type: "Nét", symbol: "㇀", name: "tí", meaning: "nét hất", note: "Đi lên từ trái qua phải." },
  { id: "stroke-gou", type: "Nét", symbol: "亅", name: "gōu", meaning: "nét móc", note: "Móc lên ở cuối nét khác." },
  { id: "stroke-zhe", type: "Nét", symbol: "乛", name: "zhé", meaning: "nét gập", note: "Nét gập giữa hai nét." },
  { id: "rule-1", type: "Quy tắc", symbol: "一 → 丨", name: "ngang trước sổ sau", meaning: "Nét ngang viết trước, nét sổ viết sau.", note: "Ví dụ: 十." },
  { id: "rule-2", type: "Quy tắc", symbol: "丿 → ㇏", name: "phẩy trước mác sau", meaning: "Nét xiên trái viết trước, xiên phải viết sau.", note: "Ví dụ: 八." },
  { id: "rule-3", type: "Quy tắc", symbol: "上 → 下", name: "trên trước dưới sau", meaning: "Nét phía trên viết trước nét phía dưới.", note: "Ví dụ: 二, 三." },
  { id: "rule-4", type: "Quy tắc", symbol: "左 → 右", name: "trái trước phải sau", meaning: "Nét bên trái viết trước nét bên phải.", note: "Ví dụ: 川." },
  { id: "rule-5", type: "Quy tắc", symbol: "外 → 内", name: "ngoài trước trong sau", meaning: "Viết khung ngoài rồi viết phần trong.", note: "Ví dụ: 月." },
  { id: "rule-6", type: "Quy tắc", symbol: "进 → 关", name: "vào trước đóng sau", meaning: "Viết phần vào khung rồi mới đóng khung.", note: "Ví dụ: 回." },
  { id: "rule-7", type: "Quy tắc", symbol: "中 → 两边", name: "giữa trước hai bên sau", meaning: "Viết nét giữa trước, hai bên sau.", note: "Ví dụ: 小." },
  { id: "rad-ren", type: "Bộ thủ", symbol: "亻", name: "bộ nhân đứng", meaning: "người", note: "Xuất hiện trong 你, 他, 信." },
  { id: "rad-nv", type: "Bộ thủ", symbol: "女", name: "bộ nữ", meaning: "phụ nữ, con gái", note: "Xuất hiện trong 好, 妈, 她, 妹, 姐." },
  { id: "rad-kou", type: "Bộ thủ", symbol: "口", name: "bộ khẩu", meaning: "miệng", note: "Xuất hiện trong 吗, 语." },
  { id: "rad-ma", type: "Bộ thủ", symbol: "马", name: "bộ mã", meaning: "ngựa", note: "Gợi âm trong 吗, 妈." },
  { id: "rad-xin", type: "Bộ thủ", symbol: "忄", name: "bộ tâm đứng", meaning: "tâm tư, tình cảm", note: "Xuất hiện trong 忙." },
  { id: "rad-shui", type: "Bộ thủ", symbol: "氵", name: "bộ chấm thủy", meaning: "nước", note: "Xuất hiện trong 汉, 法." },
  { id: "rad-yan", type: "Bộ thủ", symbol: "讠", name: "bộ ngôn", meaning: "ngôn ngữ, lời nói", note: "Xuất hiện trong 语, 说." },
  { id: "rad-zi", type: "Bộ thủ", symbol: "子", name: "bộ tử", meaning: "trẻ con, con", note: "Xuất hiện trong 好, 学." },
  { id: "rad-mu", type: "Bộ thủ", symbol: "木", name: "bộ mộc", meaning: "gỗ, cây", note: "木, 林, 森." },
  { id: "rad-yue", type: "Bộ thủ", symbol: "月", name: "bộ nguyệt", meaning: "mặt trăng, tháng", note: "Xuất hiện trong 明." },
  { id: "rad-ri", type: "Bộ thủ", symbol: "日", name: "bộ nhật", meaning: "mặt trời, ngày", note: "Xuất hiện trong 白, 明, 日语." },
  { id: "rad-jin", type: "Bộ thủ", symbol: "钅", name: "bộ kim", meaning: "kim loại", note: "Xuất hiện trong 银, 钱." },
  { id: "rad-mian", type: "Bộ thủ", symbol: "宀", name: "bộ miên", meaning: "mái nhà", note: "Xuất hiện trong 寄." },
  { id: "rad-fu", type: "Bộ thủ", symbol: "阝", name: "bộ liễu/ấp", meaning: "cây liễu, vùng đất", note: "Xuất hiện trong 阿, 邮." },
  { id: "rad-tian", type: "Bộ thủ", symbol: "田", name: "bộ điền", meaning: "ruộng", note: "Xuất hiện trong 男." },
  { id: "rad-li", type: "Bộ thủ", symbol: "力", name: "bộ lực", meaning: "sức lực", note: "Xuất hiện trong 男." },
  { id: "rad-chi", type: "Bộ thủ", symbol: "彳", name: "bộ xích/nhân kép", meaning: "bước chân, đi", note: "Xuất hiện trong 很, 行, 德." },
  { id: "rad-you", type: "Bộ thủ", symbol: "又", name: "bộ hựu", meaning: "làm lại, tay phải", note: "Xuất hiện trong 汉, 难, 对, 取." },
  { id: "rad-cao", type: "Bộ thủ", symbol: "艹", name: "bộ thảo", meaning: "cỏ, cây cỏ", note: "Xuất hiện trong 英." },
  { id: "rad-wei", type: "Bộ thủ", symbol: "囗", name: "bộ vi", meaning: "bao quanh", note: "Xuất hiện trong 国." },
  { id: "rad-yu", type: "Bộ thủ", symbol: "玉", name: "bộ ngọc", meaning: "ngọc", note: "Xuất hiện trong 国." },
  { id: "rad-mi", type: "Bộ thủ", symbol: "冖", name: "bộ mịch", meaning: "khăn, dải lụa", note: "Xuất hiện trong 你, 学." },
  { id: "rad-shi", type: "Bộ thủ", symbol: "尸", name: "bộ thi", meaning: "thân người", note: "Xuất hiện trong 局." },
  { id: "rad-jiong", type: "Bộ thủ", symbol: "冂", name: "bộ quynh", meaning: "vùng biên giới, khung", note: "Xuất hiện trong 见, 英." },
  { id: "rad-chuo", type: "Bộ thủ", symbol: "辶", name: "bộ quai sước", meaning: "bước chân đi, di chuyển", note: "Xuất hiện trong 这, 进." },
  { id: "rad-wen", type: "Bộ thủ", symbol: "文", name: "bộ văn", meaning: "văn chương, văn vở", note: "Xuất hiện trong 这." },
  { id: "rad-xin-heart", type: "Bộ thủ", symbol: "心", name: "bộ tâm", meaning: "tim, tấm lòng", note: "Xuất hiện trong 您." },
  { id: "rad-dao", type: "Bộ thủ", symbol: "刂", name: "bộ đao đứng", meaning: "dao, gươm", note: "Xuất hiện trong 师." },
  { id: "rad-jin-cloth", type: "Bộ thủ", symbol: "巾", name: "bộ cân", meaning: "khăn, vải", note: "Xuất hiện trong 师." },
  { id: "rad-men", type: "Bộ thủ", symbol: "门", name: "bộ môn", meaning: "cửa", note: "Xuất hiện trong 天安门." },
  { id: "rad-zou", type: "Bộ thủ", symbol: "走", name: "bộ tẩu", meaning: "đi, chạy", note: "Xuất hiện trong 起." },
  { id: "rad-ji-self", type: "Bộ thủ", symbol: "己", name: "bộ kỷ", meaning: "bản thân mình", note: "Xuất hiện trong 起." },
  { id: "rad-shen", type: "Bộ thủ", symbol: "身", name: "bộ thân", meaning: "thân thể", note: "Xuất hiện trong 身体, 谢." },
  { id: "rad-cun", type: "Bộ thủ", symbol: "寸", name: "bộ thốn", meaning: "tấc, chút một", note: "Xuất hiện trong 对, 谢." },
  { id: "rad-bao", type: "Bộ thủ", symbol: "勹", name: "bộ bao", meaning: "bao bọc, ôm", note: "Xuất hiện trong 喝." },
  { id: "rad-zhi", type: "Bộ thủ", symbol: "夂", name: "bộ truy", meaning: "đi, bước đi", note: "Xuất hiện trong 客." },
  { id: "rad-jing", type: "Bộ thủ", symbol: "井", name: "bộ tỉnh", meaning: "cái giếng", note: "Xuất hiện trong 进." },
  { id: "rad-ben", type: "Bộ thủ", symbol: "本", name: "chữ bản", meaning: "gốc, căn bản", note: "Xuất hiện trong 体." },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

let customVocab = storage.get("hanReview.customVocab", []);
let customRadicals = storage.get("hanReview.customRadicals", []);
let remembered = new Set(storage.get("hanReview.remembered", []));
let listenedAudio = new Set(storage.get("hanReview.listenedAudio", []));
let foundationFilter = "all";

const cardState = {
  mode: "vocab",
  lesson: "all",
  deck: [],
  index: 0,
  flipped: false,
};

const quizState = {
  mode: "meaning",
  lesson: "all",
  current: null,
  answered: false,
  correct: 0,
  total: 0,
};

const audioState = {
  index: 0,
  speed: 1,
  activeTranscriptIndex: -1,
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function allVocab() {
  return [...seedVocabulary, ...customVocab];
}

function allRadicals() {
  return [...seedRadicals, ...customRadicals];
}

const foundationGroups = [
  {
    type: "Nét",
    title: "Nét viết",
    intro: "8 nét cơ bản để nhận diện và viết chữ Hán từ đầu.",
  },
  {
    type: "Quy tắc",
    title: "Quy tắc viết",
    intro: "7 quy tắc thứ tự nét giúp chữ cân và dễ nhớ hơn.",
  },
  {
    type: "Bộ thủ",
    title: "Bộ thủ",
    intro: "Các bộ thủ nền tảng xuất hiện trong từ mới của 3 bài.",
  },
];

function lessonTitles(includeAll = true) {
  const titles = lessons.map((lesson) => lesson.title);
  return includeAll ? ["all", ...titles, "Tự thêm"] : titles;
}

function fillLessonSelect(select, includeAll = true) {
  const current = select.value;
  select.innerHTML = lessonTitles(includeAll)
    .map((value) => `<option value="${escapeHtml(value)}">${value === "all" ? "Tất cả" : escapeHtml(value)}</option>`)
    .join("");
  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
  }
}

function saveAll() {
  storage.set("hanReview.customVocab", customVocab);
  storage.set("hanReview.customRadicals", customRadicals);
  storage.set("hanReview.remembered", [...remembered]);
  storage.set("hanReview.listenedAudio", [...listenedAudio]);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function matchesQuery(item, query, fields) {
  if (!query) return true;
  const text = fields.map((field) => item[field] || "").join(" ");
  return normalize(text).includes(normalize(query));
}

function entryById(id) {
  return allVocab().find((item) => item.id === id) || allRadicals().find((item) => item.id === id);
}

function updateStats() {
  const slideCount = lessons.reduce((sum, lesson) => sum + lesson.slideCount, 0);
  const rememberedWords = allVocab().filter((item) => remembered.has(item.id)).length;
  $("#statLessons").textContent = lessons.length;
  $("#statSlides").textContent = slideCount;
  $("#statWords").textContent = allVocab().length;
  $("#statSaved").textContent = rememberedWords;
}

function renderLessonCards() {
  $("#lessonCards").innerHTML = lessons.map((lesson) => {
    const topics = topicMap[lesson.title] || [];
    const textSlides = lesson.slides.filter((slide) => slide.lines.length).length;
    return `
      <article class="lesson-card">
        <div>
          <p class="eyebrow">${escapeHtml(lesson.title)}</p>
          <h3>${escapeHtml(lessonNameMap[lesson.title] || lesson.slides[0]?.lines[0] || lesson.title)}</h3>
          <p>${lesson.slideCount} slide · ${textSlides} slide có chữ</p>
        </div>
        <div class="lesson-topics">
          ${topics.map((topic) => `<span class="pill">${escapeHtml(topic)}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderSlides() {
  const lessonValue = $("#slideLessonFilter").value;
  const query = $("#slideSearch").value.trim();
  const selectedLessons = lessons.filter((lesson) => lessonValue === "all" || lesson.title === lessonValue);
  const slides = selectedLessons.flatMap((lesson) => lesson.slides
    .filter((slide) => slide.lines.length)
    .map((slide) => ({ ...slide, lessonTitle: lesson.title })))
    .filter((slide) => {
      if (!query) return true;
      return normalize(`${slide.lessonTitle} ${slide.index} ${slide.lines.join(" ")}`).includes(normalize(query));
    });

  const list = slides.slice(0, 160);
  $("#slideList").innerHTML = list.length ? list.map((slide) => `
    <article class="slide-item">
      <h3>${escapeHtml(slide.lessonTitle)} · Slide ${slide.index}</h3>
      <div class="slide-lines">
        ${slide.lines.slice(0, 9).map((line) => `<span>${escapeHtml(line)}</span>`).join("")}
        ${slide.lines.length > 9 ? `<span>+${slide.lines.length - 9} dòng nữa</span>` : ""}
      </div>
    </article>
  `).join("") : `<div class="empty-state">Không có slide phù hợp.</div>`;
}

function filteredVocab() {
  const lesson = $("#vocabLessonFilter").value;
  const status = $("#statusFilter").value;
  const query = $("#vocabSearch").value.trim();
  return allVocab().filter((item) => {
    const byLesson = lesson === "all" || item.lesson === lesson;
    const byStatus = status === "all" || (status === "saved" ? remembered.has(item.id) : !remembered.has(item.id));
    return byLesson && byStatus && matchesQuery(item, query, ["hanzi", "pinyin", "hanViet", "meaning", "note", "lesson"]);
  });
}

function renderVocab() {
  const items = filteredVocab();
  $("#vocabList").innerHTML = items.length ? items.map((item) => `
    <article class="vocab-card">
      <div class="hanzi">${escapeHtml(item.hanzi)}</div>
      <div class="vocab-meta">
        <h3>${escapeHtml(item.meaning)}</h3>
        <p>${escapeHtml(item.pinyin || "")}${item.hanViet ? ` · ${escapeHtml(item.hanViet)}` : ""}</p>
        <p>${escapeHtml(item.lesson)}</p>
        ${item.note ? `<div class="vocab-note">${escapeHtml(item.note)}</div>` : ""}
      </div>
      <div class="vocab-actions">
        <button class="icon-button" data-action="speak" data-id="${escapeHtml(item.id)}" title="Nghe phát âm">
          <i data-lucide="volume-2"></i>
        </button>
        <button class="icon-button ${remembered.has(item.id) ? "remembered" : ""}" data-action="remember" data-id="${escapeHtml(item.id)}" title="Đánh dấu đã nhớ">
          <i data-lucide="check"></i>
        </button>
      </div>
    </article>
  `).join("") : `<div class="empty-state">Không có từ phù hợp.</div>`;
  refreshIcons();
}

function renderRadicals() {
  const query = $("#radicalSearch").value.trim();
  const baseItems = allRadicals();
  const visibleItems = baseItems.filter((item) => {
    const byGroup = foundationFilter === "all" || item.type === foundationFilter;
    return byGroup && matchesQuery(item, query, ["symbol", "name", "meaning", "note", "type"]);
  });

  $("#strokeCount").textContent = baseItems.filter((item) => item.type === "Nét").length;
  $("#ruleCount").textContent = baseItems.filter((item) => item.type === "Quy tắc").length;
  $("#radicalCount").textContent = baseItems.filter((item) => item.type === "Bộ thủ").length;

  const activeGroups = foundationGroups
    .filter((group) => foundationFilter === "all" || group.type === foundationFilter)
    .map((group) => ({
      ...group,
      items: visibleItems.filter((item) => item.type === group.type),
    }));

  const customItems = foundationFilter === "all"
    ? visibleItems.filter((item) => !foundationGroups.some((group) => group.type === item.type))
    : [];

  const sections = activeGroups
    .filter((group) => group.items.length || query)
    .map((group) => `
      <section class="foundation-section">
        <div class="foundation-section-head">
          <div>
            <p class="eyebrow">${escapeHtml(group.title)}</p>
            <h3>${escapeHtml(group.intro)}</h3>
          </div>
          <span class="pill">${group.items.length} mục</span>
        </div>
        ${group.items.length ? `
          <div class="foundation-grid">
            ${group.items.map(renderFoundationCard).join("")}
          </div>
        ` : `<div class="empty-state">Không có mục phù hợp trong nhóm này.</div>`}
      </section>
    `);

  if (customItems.length) {
    sections.push(`
      <section class="foundation-section">
        <div class="foundation-section-head">
          <div>
            <p class="eyebrow">Tự thêm</p>
            <h3>Các mục nền tảng bạn tự lưu ngoài 3 nhóm chính.</h3>
          </div>
          <span class="pill">${customItems.length} mục</span>
        </div>
        <div class="foundation-grid">
          ${customItems.map(renderFoundationCard).join("")}
        </div>
      </section>
    `);
  }

  $("#foundationSections").innerHTML = sections.length
    ? sections.join("")
    : `<div class="empty-state">Không có mục phù hợp.</div>`;
}

function renderFoundationCard(item) {
  return `
    <article class="radical-card">
      <span class="pill">${escapeHtml(item.type)}</span>
      <div class="radical-symbol">${escapeHtml(item.symbol)}</div>
      <h3>${escapeHtml(item.name || item.meaning)}</h3>
      <p>${escapeHtml(item.meaning)}</p>
      ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
    </article>
  `;
}

function buildCardDeck(keepIndex = false) {
  const oldId = cardState.deck[cardState.index]?.id;
  const lesson = $("#cardLessonFilter").value;
  cardState.lesson = lesson;
  cardState.deck = cardState.mode === "vocab"
    ? allVocab().filter((item) => lesson === "all" || item.lesson === lesson)
    : allRadicals();
  if (keepIndex && oldId) {
    const nextIndex = cardState.deck.findIndex((item) => item.id === oldId);
    cardState.index = nextIndex >= 0 ? nextIndex : 0;
  } else {
    cardState.index = Math.min(cardState.index, Math.max(cardState.deck.length - 1, 0));
  }
  cardState.flipped = false;
  $("#cardLessonWrap").style.display = cardState.mode === "vocab" ? "grid" : "none";
  renderCard();
}

function renderCard() {
  const item = cardState.deck[cardState.index];
  $("#flashcard").classList.toggle("flipped", cardState.flipped);
  if (!item) {
    $("#cardFront").innerHTML = `<p class="answer">Không có thẻ phù hợp.</p>`;
    $("#cardBack").innerHTML = "";
    $("#cardProgress").textContent = "";
    return;
  }

  if (cardState.mode === "vocab") {
    $("#cardFront").innerHTML = `
      <div class="big">${escapeHtml(item.hanzi)}</div>
      <p class="sub">${escapeHtml(item.pinyin || "")}</p>
      <span class="pill">${escapeHtml(item.lesson)}</span>
    `;
    $("#cardBack").innerHTML = `
      <p class="answer">${escapeHtml(item.meaning)}</p>
      <p class="sub">${escapeHtml(item.hanViet || "")}</p>
      ${item.note ? `<p class="sub">${escapeHtml(item.note)}</p>` : ""}
    `;
  } else {
    $("#cardFront").innerHTML = `
      <div class="big">${escapeHtml(item.symbol)}</div>
      <span class="pill">${escapeHtml(item.type)}</span>
    `;
    $("#cardBack").innerHTML = `
      <p class="answer">${escapeHtml(item.name || item.meaning)}</p>
      <p class="sub">${escapeHtml(item.meaning)}</p>
      ${item.note ? `<p class="sub">${escapeHtml(item.note)}</p>` : ""}
    `;
  }
  $("#cardProgress").textContent = `${cardState.index + 1}/${cardState.deck.length} · ${remembered.has(item.id) ? "đã nhớ" : "đang ôn"}`;
}

function moveCard(delta) {
  if (!cardState.deck.length) return;
  cardState.index = (cardState.index + delta + cardState.deck.length) % cardState.deck.length;
  cardState.flipped = false;
  renderCard();
}

function shuffleDeck() {
  for (let i = cardState.deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardState.deck[i], cardState.deck[j]] = [cardState.deck[j], cardState.deck[i]];
  }
  cardState.index = 0;
  cardState.flipped = false;
  renderCard();
}

function speak(text) {
  if (!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function randomItems(pool, count) {
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

function buildQuestion() {
  const pool = allVocab().filter((item) => quizState.lesson === "all" || item.lesson === quizState.lesson);
  if (pool.length < 4) {
    $("#quizQuestion").innerHTML = `<p class="prompt">Cần ít nhất 4 từ để tạo quiz.</p>`;
    $("#quizOptions").innerHTML = "";
    $("#quizFeedback").textContent = "";
    return;
  }
  const answer = pool[Math.floor(Math.random() * pool.length)];
  const distractors = randomItems(pool.filter((item) => item.id !== answer.id), 3);
  const choices = randomItems([answer, ...distractors], 4);
  quizState.current = { answer, choices };
  quizState.answered = false;

  if (quizState.mode === "meaning") {
    $("#quizQuestion").innerHTML = `
      <p class="prompt">Chọn nghĩa của</p>
      <div class="main">${escapeHtml(answer.hanzi)}</div>
      <p>${escapeHtml(answer.pinyin || "")}</p>
    `;
    $("#quizOptions").innerHTML = choices.map((item) => `
      <button class="quiz-option" data-answer-id="${escapeHtml(item.id)}">${escapeHtml(item.meaning)}</button>
    `).join("");
  } else {
    $("#quizQuestion").innerHTML = `
      <p class="prompt">Chọn chữ Hán cho</p>
      <div class="main">${escapeHtml(answer.meaning)}</div>
      <p>${escapeHtml(answer.pinyin || "")}</p>
    `;
    $("#quizOptions").innerHTML = choices.map((item) => `
      <button class="quiz-option" data-answer-id="${escapeHtml(item.id)}">${escapeHtml(item.hanzi)}</button>
    `).join("");
  }
  $("#quizFeedback").textContent = "";
  refreshIcons();
}

function renderQuizScore() {
  $("#quizScore").textContent = `${quizState.correct} đúng · ${quizState.total} câu`;
}

function chooseAnswer(id, button) {
  if (quizState.answered || !quizState.current) return;
  quizState.answered = true;
  quizState.total += 1;
  const isCorrect = id === quizState.current.answer.id;
  if (isCorrect) {
    quizState.correct += 1;
    remembered.add(id);
    $("#quizFeedback").textContent = "Đúng rồi.";
  } else {
    $("#quizFeedback").textContent = `Đáp án đúng: ${quizState.current.answer.hanzi} · ${quizState.current.answer.meaning}`;
  }
  $$(".quiz-option").forEach((option) => {
    const optionId = option.dataset.answerId;
    option.disabled = true;
    if (optionId === quizState.current.answer.id) option.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");
  saveAll();
  updateStats();
  renderVocab();
  renderCard();
  renderQuizScore();
}

function renderCustomList() {
  const items = [
    ...customVocab.map((item) => ({ ...item, kind: "vocab" })),
    ...customRadicals.map((item) => ({ ...item, kind: "radical" })),
  ];
  $("#customList").innerHTML = items.length ? items.map((item) => {
    const title = item.kind === "vocab"
      ? `${item.hanzi} · ${item.meaning}`
      : `${item.symbol} · ${item.meaning}`;
    const detail = item.kind === "vocab"
      ? `${item.pinyin || ""} ${item.hanViet || ""} · ${item.lesson}`
      : `${item.name || ""} · ${item.type}`;
    return `
      <article class="custom-item">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(detail.trim())}</p>
        </div>
        <button class="icon-button" data-delete-kind="${item.kind}" data-id="${escapeHtml(item.id)}" title="Xóa">
          <i data-lucide="trash-2"></i>
        </button>
      </article>
    `;
  }).join("") : `<div class="empty-state">Chưa có mục tự thêm.</div>`;
  refreshIcons();
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "--:--";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function currentAudioLesson() {
  return audioLessons[audioState.index] || audioLessons[0];
}

function updateAudioProgress() {
  const audio = $("#lessonAudio");
  const item = currentAudioLesson();
  if (!audio || !item) return;
  const status = listenedAudio.has(item.id) ? "đã nghe" : "đang nghe";
  $("#audioProgress").textContent = `${audioState.index + 1}/${audioLessons.length} · ${status} · ${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  updateTranscriptHighlight();
}

function renderAudioTranscript(item) {
  const transcript = audioTranscripts[item.id];
  const lines = transcript?.lines || [];
  const container = $("#audioTranscript");
  const meta = $("#audioTranscriptMeta");
  if (!container || !meta) return;

  audioState.activeTranscriptIndex = -1;
  meta.textContent = `${lines.length} dòng`;
  container.innerHTML = lines.length ? lines.map((line, index) => `
    <button class="transcript-line" data-time="${Number(line.time) || 0}" type="button">
      <span class="transcript-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="transcript-copy">
        <span class="transcript-hanzi">${escapeHtml(line.hanzi || "")}</span>
        <span class="transcript-pinyin">${escapeHtml(line.pinyin || "")}</span>
      </span>
    </button>
  `).join("") : `<p class="empty-state">Chưa có transcript.</p>`;
}

function updateTranscriptHighlight() {
  const audio = $("#lessonAudio");
  const container = $("#audioTranscript");
  if (!audio || !container) return;

  const rows = [...container.querySelectorAll(".transcript-line")];
  if (!rows.length) return;

  let activeIndex = -1;
  rows.forEach((row, index) => {
    if ((Number(row.dataset.time) || 0) <= audio.currentTime + 0.2) {
      activeIndex = index;
    }
  });

  if (activeIndex === audioState.activeTranscriptIndex) return;
  audioState.activeTranscriptIndex = activeIndex;
  rows.forEach((row, index) => row.classList.toggle("active", index === activeIndex));
}

function renderAudio() {
  const audio = $("#lessonAudio");
  const item = currentAudioLesson();
  if (!audio || !item) return;

  if (audio.getAttribute("src") !== item.src) {
    audio.src = item.src;
    audio.load();
  }
  audio.playbackRate = audioState.speed;
  $("#audioLessonLabel").textContent = "Quyển 1";
  $("#audioTitle").textContent = item.title;
  $("#audioTheme").textContent = item.theme;
  $("#markListened").classList.toggle("remembered", listenedAudio.has(item.id));
  $("#markListened span").textContent = listenedAudio.has(item.id) ? "Đã nghe" : "Đánh dấu";
  renderAudioTranscript(item);

  $("#audioList").innerHTML = audioLessons.map((lesson, index) => `
    <button class="audio-item ${index === audioState.index ? "active" : ""} ${listenedAudio.has(lesson.id) ? "done" : ""}" data-audio-index="${index}">
      <span class="audio-number">${lesson.number.toString().padStart(2, "0")}</span>
      <span>
        <strong>${escapeHtml(lesson.title)}</strong>
        <small>${escapeHtml(lesson.theme)}</small>
      </span>
      <i data-lucide="${listenedAudio.has(lesson.id) ? "check-circle-2" : "circle"}"></i>
    </button>
  `).join("");
  updateAudioProgress();
  refreshIcons();
}

function selectAudio(index, autoplay = false) {
  const audio = $("#lessonAudio");
  const wasPlaying = audio && !audio.paused;
  audioState.index = (index + audioLessons.length) % audioLessons.length;
  renderAudio();
  if (audio && (autoplay || wasPlaying)) {
    audio.play().catch(() => {});
  }
}

function seekAudio(delta) {
  const audio = $("#lessonAudio");
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min((audio.duration || 0), audio.currentTime + delta));
  updateAudioProgress();
}

function setAudioSpeed(speed) {
  audioState.speed = speed;
  const audio = $("#lessonAudio");
  if (audio) audio.playbackRate = speed;
}

function rerenderAll() {
  fillLessonSelect($("#vocabLessonFilter"), true);
  fillLessonSelect($("#cardLessonFilter"), true);
  fillLessonSelect($("#quizLessonFilter"), true);
  updateStats();
  renderLessonCards();
  renderSlides();
  renderVocab();
  renderRadicals();
  buildCardDeck(true);
  renderCustomList();
  renderQuizScore();
  renderAudio();
}

function bindEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      tab.classList.add("active");
      $(`#${tab.dataset.tab}`).classList.add("active");
      refreshIcons();
    });
  });

  $("#audioList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-audio-index]");
    if (!button) return;
    selectAudio(Number(button.dataset.audioIndex), true);
  });
  $("#audioTranscript").addEventListener("click", (event) => {
    const row = event.target.closest("[data-time]");
    const audio = $("#lessonAudio");
    if (!row || !audio) return;
    audio.currentTime = Number(row.dataset.time) || 0;
    updateTranscriptHighlight();
    audio.play().catch(() => {});
  });
  $("#prevAudio").addEventListener("click", () => selectAudio(audioState.index - 1, true));
  $("#nextAudio").addEventListener("click", () => selectAudio(audioState.index + 1, true));
  $("#rewindAudio").addEventListener("click", () => seekAudio(-10));
  $("#forwardAudio").addEventListener("click", () => seekAudio(10));
  $("#markListened").addEventListener("click", () => {
    const item = currentAudioLesson();
    listenedAudio.has(item.id) ? listenedAudio.delete(item.id) : listenedAudio.add(item.id);
    saveAll();
    renderAudio();
  });
  $("#lessonAudio").addEventListener("timeupdate", updateAudioProgress);
  $("#lessonAudio").addEventListener("loadedmetadata", updateAudioProgress);
  $("#lessonAudio").addEventListener("ended", () => {
    const item = currentAudioLesson();
    listenedAudio.add(item.id);
    saveAll();
    renderAudio();
  });
  $$("[data-audio-speed]").forEach((button) => {
    button.addEventListener("click", () => {
      $$("[data-audio-speed]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      setAudioSpeed(Number(button.dataset.audioSpeed));
    });
  });

  $("#slideLessonFilter").addEventListener("change", renderSlides);
  $("#slideSearch").addEventListener("input", renderSlides);
  $("#vocabLessonFilter").addEventListener("change", renderVocab);
  $("#statusFilter").addEventListener("change", renderVocab);
  $("#vocabSearch").addEventListener("input", renderVocab);
  $("#radicalSearch").addEventListener("input", renderRadicals);
  $$("[data-foundation-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      $$("[data-foundation-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      foundationFilter = button.dataset.foundationFilter;
      renderRadicals();
    });
  });

  $("#vocabList").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const item = entryById(button.dataset.id);
    if (!item) return;
    if (button.dataset.action === "speak") {
      speak(item.hanzi);
    }
    if (button.dataset.action === "remember") {
      remembered.has(item.id) ? remembered.delete(item.id) : remembered.add(item.id);
      saveAll();
      updateStats();
      renderVocab();
      renderCard();
    }
  });

  $$(".segment[data-card-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".segment[data-card-mode]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      cardState.mode = button.dataset.cardMode;
      buildCardDeck();
    });
  });

  $("#cardLessonFilter").addEventListener("change", () => buildCardDeck());
  $("#shuffleCards").addEventListener("click", shuffleDeck);
  $("#prevCard").addEventListener("click", () => moveCard(-1));
  $("#nextCard").addEventListener("click", () => moveCard(1));
  $("#flipCard").addEventListener("click", () => {
    cardState.flipped = !cardState.flipped;
    renderCard();
  });
  $("#flashcard").addEventListener("click", () => {
    cardState.flipped = !cardState.flipped;
    renderCard();
  });
  $("#flashcard").addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      cardState.flipped = !cardState.flipped;
      renderCard();
    }
  });
  $("#markKnown").addEventListener("click", () => {
    const item = cardState.deck[cardState.index];
    if (!item) return;
    remembered.add(item.id);
    saveAll();
    updateStats();
    renderVocab();
    moveCard(1);
  });
  $("#markAgain").addEventListener("click", () => {
    const item = cardState.deck[cardState.index];
    if (!item) return;
    remembered.delete(item.id);
    saveAll();
    updateStats();
    renderVocab();
    moveCard(1);
  });

  $$(".segment[data-quiz-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".segment[data-quiz-mode]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      quizState.mode = button.dataset.quizMode;
      buildQuestion();
    });
  });
  $("#quizLessonFilter").addEventListener("change", (event) => {
    quizState.lesson = event.target.value;
    buildQuestion();
  });
  $("#quizOptions").addEventListener("click", (event) => {
    const button = event.target.closest(".quiz-option");
    if (button) chooseAnswer(button.dataset.answerId, button);
  });
  $("#nextQuestion").addEventListener("click", buildQuestion);

  $("#vocabForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    customVocab.push({
      id: `custom-vocab-${Date.now()}`,
      hanzi: data.hanzi.trim(),
      pinyin: data.pinyin.trim(),
      hanViet: data.hanViet.trim(),
      meaning: data.meaning.trim(),
      lesson: data.lesson,
      note: data.note.trim(),
    });
    saveAll();
    event.currentTarget.reset();
    rerenderAll();
  });

  $("#radicalForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    customRadicals.push({
      id: `custom-radical-${Date.now()}`,
      symbol: data.symbol.trim(),
      name: data.name.trim(),
      meaning: data.meaning.trim(),
      type: data.type,
      note: data.note.trim(),
    });
    saveAll();
    event.currentTarget.reset();
    rerenderAll();
  });

  $("#customList").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-delete-kind]");
    if (!button) return;
    if (button.dataset.deleteKind === "vocab") {
      customVocab = customVocab.filter((item) => item.id !== button.dataset.id);
    } else {
      customRadicals = customRadicals.filter((item) => item.id !== button.dataset.id);
    }
    remembered.delete(button.dataset.id);
    saveAll();
    rerenderAll();
  });

  $("#exportData").addEventListener("click", () => {
    const payload = {
      customVocab,
      customRadicals,
      remembered: [...remembered],
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "so-on-tieng-trung.json";
    link.click();
    URL.revokeObjectURL(link.href);
  });

  $("#importData").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(reader.result);
        const mergeById = (oldItems, newItems = []) => {
          const map = new Map(oldItems.map((item) => [item.id, item]));
          newItems.forEach((item) => map.set(item.id || `import-${Date.now()}-${Math.random()}`, item));
          return [...map.values()];
        };
        customVocab = mergeById(customVocab, payload.customVocab);
        customRadicals = mergeById(customRadicals, payload.customRadicals);
        remembered = new Set([...remembered, ...(payload.remembered || [])]);
        saveAll();
        rerenderAll();
      } catch {
        alert("File sao lưu không đọc được.");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  });
}

function init() {
  fillLessonSelect($("#slideLessonFilter"), true);
  $("#slideLessonFilter").value = "Bài 1";
  fillLessonSelect($("#vocabLessonFilter"), true);
  fillLessonSelect($("#cardLessonFilter"), true);
  fillLessonSelect($("#quizLessonFilter"), true);
  bindEvents();
  rerenderAll();
  buildQuestion();
  refreshIcons();
}

document.addEventListener("DOMContentLoaded", init);
