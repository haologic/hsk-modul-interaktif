const hsk1Grammar = [
  {
    title: "Kalimat nominal dengan 是",
    summary: "Dipakai untuk menyatakan identitas, profesi, atau hubungan.",
    pattern: "Subjek + 是 + nomina",
    explanation: "Pola ini sangat dasar. Kamu memakainya saat ingin mengatakan seseorang adalah guru, murid, teman, dan sejenisnya. Untuk sifat seperti bagus atau cantik, biasanya tidak memakai 是.",
    examples: [
      { cn: "我是学生。", pinyin: "Wo shi xuesheng.", id: "Saya adalah murid." },
      { cn: "他是老师。", pinyin: "Ta shi laoshi.", id: "Dia adalah guru." }
    ]
  },
  {
    title: "Kalimat tanya dengan 吗",
    summary: "Cara termudah mengubah pernyataan menjadi pertanyaan ya/tidak.",
    pattern: "Kalimat pernyataan + 吗",
    explanation: "Kalau kamu sudah punya kalimat biasa, cukup tambahkan 吗 di akhir untuk menjadikannya pertanyaan. Intonasinya naik, tapi struktur dasarnya tetap sederhana.",
    examples: [
      { cn: "你是中国人吗？", pinyin: "Ni shi Zhongguo ren ma?", id: "Apakah kamu orang Tiongkok?" },
      { cn: "她忙吗？", pinyin: "Ta mang ma?", id: "Apakah dia sibuk?" }
    ]
  },
  {
    title: "Pertanyaan A-not-A",
    summary: "Bentuk tanya lain yang sangat umum di level dasar.",
    pattern: "Kata kerja / sifat + 不 + kata kerja / sifat",
    explanation: "Bentuk ini mirip menanyakan 'apakah ... atau tidak'. Biasanya dipakai untuk bertanya dengan nada lebih alami dalam percakapan sehari-hari.",
    examples: [
      { cn: "你忙不忙？", pinyin: "Ni mang bu mang?", id: "Kamu sibuk atau tidak?" },
      { cn: "他是不是老师？", pinyin: "Ta shi bu shi laoshi?", id: "Dia guru atau bukan?" }
    ]
  },
  {
    title: "Negasi dengan 不",
    summary: "Dipakai untuk menyatakan tidak atau bukan pada kebiasaan dan sifat.",
    pattern: "Subjek + 不 + kata kerja / sifat",
    explanation: "不 biasanya dipakai untuk hal umum, kebiasaan, atau sifat. Misalnya tidak suka, tidak pergi, tidak besar, dan bukan guru.",
    examples: [
      { cn: "我不喝茶。", pinyin: "Wo bu he cha.", id: "Saya tidak minum teh." },
      { cn: "这个不大。", pinyin: "Zhege bu da.", id: "Yang ini tidak besar." }
    ]
  },
  {
    title: "Negasi dengan 没",
    summary: "Dipakai untuk mengatakan tidak punya, belum, atau tidak terjadi.",
    pattern: "Subjek + 没 + kata kerja / 有",
    explanation: "Di HSK 1 kamu paling sering melihat 没有 untuk mengatakan tidak punya atau tidak ada. Bentuk ini juga dipakai untuk menyatakan suatu aksi belum terjadi.",
    examples: [
      { cn: "我没有钱。", pinyin: "Wo mei you qian.", id: "Saya tidak punya uang." },
      { cn: "他没来。", pinyin: "Ta mei lai.", id: "Dia belum datang / dia tidak datang." }
    ]
  },
  {
    title: "Kepemilikan dengan 的",
    summary: "Menghubungkan pemilik dengan benda atau orang yang dimiliki.",
    pattern: "Pemilik + 的 + benda",
    explanation: "的 sangat penting di level dasar. Fungsinya mirip kata 'punya' atau penanda kepunyaan. Dalam beberapa hubungan dekat seperti keluarga atau teman dekat, 的 kadang bisa dihilangkan, tapi untuk pemula lebih aman dipakai dulu.",
    examples: [
      { cn: "这是我的书。", pinyin: "Zhe shi wo de shu.", id: "Ini buku saya." },
      { cn: "她是王老师的朋友。", pinyin: "Ta shi Wang laoshi de pengyou.", id: "Dia teman Guru Wang." }
    ]
  },
  {
    title: "Keterangan tempat dengan 在",
    summary: "Menunjukkan lokasi seseorang atau sesuatu.",
    pattern: "Subjek + 在 + tempat",
    explanation: "在 dipakai saat ingin bilang seseorang ada di rumah, buku ada di meja, atau kamu sedang berada di sekolah.",
    examples: [
      { cn: "我在学校。", pinyin: "Wo zai xuexiao.", id: "Saya berada di sekolah." },
      { cn: "猫在椅子上。", pinyin: "Mao zai yizi shang.", id: "Kucing ada di atas kursi." }
    ]
  },
  {
    title: "Posisi dengan 上 / 下 / 里",
    summary: "Menjelaskan letak benda secara lebih spesifik.",
    pattern: "Tempat + 上 / 下 / 里",
    explanation: "Kata-kata ini biasa datang setelah kata benda tempat. 上 berarti di atas, 下 berarti di bawah, dan 里 berarti di dalam.",
    examples: [
      { cn: "书在桌子上。", pinyin: "Shu zai zhuozi shang.", id: "Buku ada di atas meja." },
      { cn: "水在杯子里。", pinyin: "Shui zai beizi li.", id: "Air ada di dalam gelas." }
    ]
  },
  {
    title: "Menyatakan keberadaan dengan 有",
    summary: "Dipakai untuk mengatakan ada atau punya.",
    pattern: "Tempat / subjek + 有 + benda / orang",
    explanation: "有 bisa berarti 'punya' kalau subjeknya orang, dan berarti 'ada' kalau subjeknya tempat atau situasi.",
    examples: [
      { cn: "我有一个朋友。", pinyin: "Wo you yi ge pengyou.", id: "Saya punya seorang teman." },
      { cn: "学校里有很多学生。", pinyin: "Xuexiao li you hen duo xuesheng.", id: "Di sekolah ada banyak murid." }
    ]
  },
  {
    title: "Kata bantu bilangan",
    summary: "Angka biasanya butuh measure word sebelum kata benda.",
    pattern: "Angka + kata bantu + benda",
    explanation: "HSK 1 sering memakai 个 sebagai kata bantu umum. Ada juga 本 untuk buku dan 杯 untuk minuman dalam gelas atau cangkir, tetapi 个 adalah yang paling sering muncul di awal.",
    examples: [
      { cn: "三个人。", pinyin: "San ge ren.", id: "Tiga orang." },
      { cn: "两本书。", pinyin: "Liang ben shu.", id: "Dua buku." }
    ]
  },
  {
    title: "Menyatakan waktu",
    summary: "Hari, tanggal, dan jam biasanya diletakkan sebelum kata kerja.",
    pattern: "Subjek + waktu + kata kerja",
    explanation: "Dalam Mandarin, keterangan waktu sering muncul sebelum kata kerja utama. Ini membantu kalimat terdengar lebih alami sejak awal.",
    examples: [
      { cn: "我今天工作。", pinyin: "Wo jintian gongzuo.", id: "Saya bekerja hari ini." },
      { cn: "他下午三点来。", pinyin: "Ta xiawu san dian lai.", id: "Dia datang jam tiga sore." }
    ]
  },
  {
    title: "Kalimat sifat dengan 很",
    summary: "Pola dasar untuk mengatakan sifat atau keadaan.",
    pattern: "Subjek + 很 + sifat",
    explanation: "很 di kalimat dasar sering berfungsi sebagai penghubung alami antara subjek dan kata sifat, tidak selalu harus diterjemahkan 'sangat'.",
    examples: [
      { cn: "她很漂亮。", pinyin: "Ta hen piaoliang.", id: "Dia cantik." },
      { cn: "今天天气很好。", pinyin: "Jintian tianqi hen hao.", id: "Cuaca hari ini bagus." }
    ]
  },
  {
    title: "Kalimat selesai atau perubahan dengan 了",
    summary: "Menandai aksi sudah terjadi atau keadaan berubah.",
    pattern: "Subjek + kata kerja + 了",
    explanation: "Di level awal, pahami dulu 了 sebagai penanda bahwa suatu aksi sudah dilakukan. Nanti di level lebih tinggi fungsinya akan lebih luas.",
    examples: [
      { cn: "我吃了。", pinyin: "Wo chi le.", id: "Saya sudah makan." },
      { cn: "他回家了。", pinyin: "Ta hui jia le.", id: "Dia sudah pulang ke rumah." }
    ]
  },
  {
    title: "Ajakan atau permintaan dengan 请",
    summary: "Dipakai untuk meminta dengan sopan.",
    pattern: "请 + kata kerja / silakan",
    explanation: "请 bisa berarti 'silakan' atau dipakai untuk membuat permintaan terasa sopan. Ini sangat berguna dalam percakapan dasar.",
    examples: [
      { cn: "请坐。", pinyin: "Qing zuo.", id: "Silakan duduk." },
      { cn: "请问，你叫什么名字？", pinyin: "Qing wen, ni jiao shenme mingzi?", id: "Permisi, siapa namamu?" }
    ]
  },
  {
    title: "Menyatakan kemampuan dengan 会 dan 能",
    summary: "Keduanya sama-sama bisa berarti 'bisa', tetapi nuansanya berbeda.",
    pattern: "Subjek + 会 / 能 + kata kerja",
    explanation: "会 biasanya untuk kemampuan yang dipelajari, seperti bisa berbicara Mandarin. 能 lebih dekat ke mampu atau memungkinkan dalam situasi tertentu.",
    examples: [
      { cn: "我会说汉语。", pinyin: "Wo hui shuo Hanyu.", id: "Saya bisa berbicara Mandarin." },
      { cn: "今天我不能来。", pinyin: "Jintian wo bu neng lai.", id: "Hari ini saya tidak bisa datang." }
    ]
  }
];
