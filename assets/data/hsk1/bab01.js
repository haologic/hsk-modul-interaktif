const hsk1Bab01 = createBabStructure({
  sectionADescription: "Bagian ini melatih pemahaman arti kalimat Mandarin sederhana. Nanti format ini bisa langsung diperluas sampai 15 soal.",
  sectionAQuestions: [
    createChoiceQuestion(
      "a1",
      "我是学生。",
      ["Saya adalah guru.", "Saya adalah murid.", "Dia adalah murid.", "Saya bukan murid."],
      1,
      "我是 berarti 'saya adalah', dan 学生 berarti 'murid atau pelajar'."
    ),
    createChoiceQuestion(
      "a2",
      "她是老师吗？",
      ["Dia seorang guru.", "Apakah dia seorang guru?", "Dia bukan seorang guru.", "Apakah dia seorang murid?"],
      1,
      "Partikel 吗 di akhir kalimat mengubah kalimat biasa menjadi pertanyaan."
    ),
    createChoiceQuestion(
      "a3",
      "我不是中国人。",
      ["Saya orang China.", "Saya bukan orang China.", "Dia bukan orang China.", "Saya tidak pergi ke China."],
      1,
      "不 + 是 membuat kalimat menjadi negatif, jadi artinya 'bukan'."
    )
  ],
  sectionBDescription: "Bagian ini melatih pemahaman bacaan pendek. Nanti pola yang sama bisa dipakai untuk 15 soal per bab.",
  sectionBQuestions: [
    createChoiceQuestion(
      "b1",
      "Siapa yang menjadi guru?",
      ["Anna", "Ayah Anna", "Ibu Anna", "Teman Anna"],
      2,
      "Kalimat 我妈妈是老师 berarti 'Ibu saya adalah guru'.",
      "我叫安娜。我是学生。我妈妈是老师。",
      "Pilih jawaban yang benar."
    ),
    createChoiceQuestion(
      "b2",
      "Siapakah Dawei?",
      ["Guru", "Murid", "Dokter", "Teman"],
      1,
      "Paragrafnya jelas menyebut 他是学生, yaitu 'dia adalah murid'.",
      "他叫大卫。他不是老师，他是学生。",
      "Pilih jawaban yang benar."
    )
  ],
  sectionCDescription: "Susun kalimat dengan drag and drop, atau ketuk chip kata satu per satu jika membuka dari HP.",
  sectionCQuestions: [
    createArrangeQuestion(
      "c1",
      ["我", "是", "老师"],
      "我是老师。",
      "Urutan dasar yang benar adalah subjek + 是 + keterangan."
    ),
    createArrangeQuestion(
      "c2",
      ["你", "好", "吗"],
      "你好吗？",
      "Kalimat tanya sederhana dapat dibentuk dengan menaruh 吗 di akhir."
    )
  ]
});
