const hsk1Bab01 = [
  {
    label: "Bagian A",
    title: "Baca kalimat Mandarin, pilih arti yang benar",
    description: "Template final nanti bisa diisi 15 soal. Saat ini disiapkan beberapa soal contoh agar engine-nya jalan.",
    questions: [
      {
        id: "a1",
        type: "choice",
        prompt: "我是学生。",
        options: ["Saya adalah guru.", "Saya adalah murid.", "Dia adalah murid.", "Saya bukan murid."],
        correctIndex: 1,
        explanation: "我是 berarti 'saya adalah', dan 学生 berarti 'murid / pelajar'."
      },
      {
        id: "a2",
        type: "choice",
        prompt: "她是老师吗？",
        options: ["Dia seorang guru.", "Apakah dia seorang guru?", "Dia bukan seorang guru.", "Apakah dia seorang murid?"],
        correctIndex: 1,
        explanation: "Partikel 吗 di akhir kalimat mengubah kalimat biasa menjadi pertanyaan."
      },
      {
        id: "a3",
        type: "choice",
        prompt: "我不是中国人。",
        options: ["Saya orang China.", "Saya bukan orang China.", "Dia bukan orang China.", "Saya tidak pergi ke China."],
        correctIndex: 1,
        explanation: "不 + 是 membuat kalimat menjadi negatif, jadi artinya 'bukan'."
      }
    ]
  },
  {
    label: "Bagian B",
    title: "Membaca paragraf lalu jawab pertanyaan",
    description: "Template final nanti diisi 15 soal bacaan pendek. Di sini kita siapkan contoh struktur dan penilaian.",
    questions: [
      {
        id: "b1",
        type: "choice",
        paragraph: "我叫安娜。我是学生。我妈妈是老师。",
        prompt: "Siapa yang menjadi guru?",
        ask: "Pilih jawaban yang benar.",
        options: ["Anna", "Ayah Anna", "Ibu Anna", "Teman Anna"],
        correctIndex: 2,
        explanation: "Kalimat 我妈妈是老师 berarti 'Ibu saya adalah guru'."
      },
      {
        id: "b2",
        type: "choice",
        paragraph: "他叫大卫。他不是老师，他是学生。",
        prompt: "Siapakah Dawei?",
        ask: "Pilih jawaban yang benar.",
        options: ["Guru", "Murid", "Dokter", "Teman"],
        correctIndex: 1,
        explanation: "Paragrafnya jelas menyebut 他是学生, yaitu 'dia adalah murid'."
      }
    ]
  },
  {
    label: "Bagian C",
    title: "Menyusun kalimat dari kata acak",
    description: "Susun kalimat dengan drag and drop atau ketuk chip kata satu per satu jika memakai HP.",

    questions: [
      {
        id: "c1",
        type: "arrange",
        prompt: "Susun menjadi kalimat yang benar.",
        words: ["我", "是", "老师"],
        correctSentence: "我是老师。",
        explanation: "Urutan dasar yang benar adalah subjek + 是 + keterangan."
      },
      {
        id: "c2",
        type: "arrange",
        prompt: "Susun menjadi kalimat yang benar.",
        words: ["你", "好", "吗"],
        correctSentence: "你好吗？",
        explanation: "Kalimat tanya sederhana dapat dibentuk dengan menaruh 吗 di akhir."
      }
    ]
  }
];
