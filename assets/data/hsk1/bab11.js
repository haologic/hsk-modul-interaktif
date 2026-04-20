const hsk1Bab11 = createBabStructure({
  sectionADescription: "Bagian A Bab 11 sudah disiapkan. Nanti isi 15 soal arti kalimat Mandarin sesuai topik bab ini.",
  sectionAQuestions: [
    createChoiceQuestion(
      "a1",
      "这是我的书。",
      ["Ini buku saya.", "Itu buku dia.", "Ini rumah saya.", "Itu sekolah saya."],
      0,
      "这是 berarti 'ini', 我的 berarti 'milik saya', dan 书 berarti 'buku'."
    )
  ],
  sectionBDescription: "Bagian B Bab 11 disiapkan untuk bacaan pendek dan 15 soal pemahaman paragraf.",
  sectionBQuestions: [
    createChoiceQuestion(
      "b1",
      "Siapa yang minum teh?",
      ["Ibu", "Ayah", "Teman", "Guru"],
      2,
      "Paragraf placeholder ini menyebut teman yang sedang minum teh.",
      "我和朋友在饭店。他喝茶，我喝水。",
      "Pilih jawaban yang benar."
    )
  ],
  sectionCDescription: "Bagian C Bab 11 sudah siap untuk model susun kalimat drag and drop.",
  sectionCQuestions: [
    createArrangeQuestion(
      "c1",
      ["我", "喝", "水"],
      "我喝水。",
      "Urutan dasarnya tetap subjek + kata kerja + objek."
    )
  ]
});
