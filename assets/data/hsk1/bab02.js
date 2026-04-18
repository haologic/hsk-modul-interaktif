const hsk1Bab02 = createBabStructure({
  sectionADescription: "Bagian ini melatih pemahaman arti kalimat Mandarin sederhana. Tinggal ganti isi soalnya sesuai topik Bab 2.",
  sectionAQuestions: [
    createChoiceQuestion(
      "a1",
      "你好吗？",
      ["Siapa nama kamu?", "Apakah kamu baik-baik saja?", "Kamu dari mana?", "Apakah kamu guru?"],
      1,
      "你好吗 dipakai untuk menanyakan keadaan seseorang secara sederhana."
    )
  ],
  sectionBDescription: "Isi bagian ini dengan bacaan pendek Bab 2 dan pertanyaannya.",
  sectionBQuestions: [
    createChoiceQuestion(
      "b1",
      "Siapa yang sedang belajar?",
      ["Guru", "Murid", "Ibu", "Teman"],
      1,
      "Contoh placeholder untuk Bab 2.",
      "我是学生。我在学校学习。",
      "Pilih jawaban yang benar."
    )
  ],
  sectionCDescription: "Susun kalimat dengan drag and drop, atau ketuk chip kata satu per satu jika membuka dari HP.",
  sectionCQuestions: [
    createArrangeQuestion(
      "c1",
      ["你", "好"],
      "你好。",
      "Urutan sapaan dasar dimulai dari 你 lalu 好."
    )
  ]
});
