function createChoiceQuestion(id, prompt, options, correctIndex, explanation, paragraph, ask) {
  return {
    id,
    type: "choice",
    prompt,
    options,
    correctIndex,
    explanation,
    ...(paragraph ? { paragraph } : {}),
    ...(ask ? { ask } : {})
  };
}

function createArrangeQuestion(id, words, correctSentence, explanation) {
  return {
    id,
    type: "arrange",
    prompt: "Susun menjadi kalimat yang benar.",
    words,
    correctSentence,
    explanation
  };
}

function createBabStructure(config) {
  return [
    {
      label: "Bagian A",
      title: "Baca kalimat Mandarin, pilih arti yang benar",
      description: config.sectionADescription,
      questions: config.sectionAQuestions
    },
    {
      label: "Bagian B",
      title: "Membaca paragraf lalu jawab pertanyaan",
      description: config.sectionBDescription,
      questions: config.sectionBQuestions
    },
    {
      label: "Bagian C",
      title: "Menyusun kalimat dari kata acak",
      description: config.sectionCDescription,
      questions: config.sectionCQuestions
    }
  ];
}
