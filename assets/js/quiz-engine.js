function normalizeSentence(text) {
  return text.replace(/[。！？,.!?]/g, "").replace(/\s+/g, "").trim().toLowerCase();
}

function renderChoiceQuestion(question, index) {
  return `
    <article class="question-card">
      <div class="question-meta">Soal ${index + 1}</div>
      ${question.paragraph ? `<p class="paragraph-cn">${question.paragraph}</p>` : ""}
      <p class="question-hanzi">${question.prompt}</p>
      ${question.ask ? `<p class="section-desc">${question.ask}</p>` : ""}
      <div class="option-list">
        ${question.options.map((option, optionIndex) => `
          <label class="option-item">
            <input type="radio" name="question-${question.id}" value="${optionIndex}" />
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `;
}

function renderArrangeQuestion(question, index) {
  return `
    <article class="question-card">
      <div class="question-meta">Soal ${index + 1}</div>
      <p class="section-desc">Susun kalimat dari kata berikut:</p>
      <p class="question-hanzi">${question.words.join(" / ")}</p>
      <div class="arrange-box">
        <input class="arrange-input" type="text" name="question-${question.id}" placeholder="Ketik jawaban kalimat yang benar" />
      </div>
    </article>
  `;
}

function readAnswer(question) {
  if (question.type === "arrange") {
    const input = document.querySelector(`[name="question-${question.id}"]`);
    return input ? input.value : "";
  }
  const checked = document.querySelector(`[name="question-${question.id}"]:checked`);
  return checked ? Number(checked.value) : null;
}

function checkAnswer(question, answer) {
  if (question.type === "arrange") return normalizeSentence(answer) === normalizeSentence(question.correctSentence);
  return answer === question.correctIndex;
}

function renderQuiz({ rootId, resultId, title, sections }) {
  const root = document.getElementById(rootId);
  const result = document.getElementById(resultId);

  root.innerHTML = `
    ${sections.map((section) => `
      <section class="quiz-section">
        <p class="eyebrow">${section.label}</p>
        <h2>${section.title}</h2>
        <p class="section-desc">${section.description}</p>
        ${section.questions.map((question, index) => (
          question.type === "arrange"
            ? renderArrangeQuestion(question, index)
            : renderChoiceQuestion(question, index)
        )).join("")}
      </section>
    `).join("")}
    <div class="submit-row">
      <button id="submit-quiz" class="button primary" type="button">Selesai & Lihat Nilai</button>
    </div>
  `;

  document.getElementById("submit-quiz").addEventListener("click", () => {
    const mistakes = [];
    let score = 0;
    let total = 0;

    sections.forEach((section) => {
      section.questions.forEach((question) => {
        total += 1;
        const answer = readAnswer(question);
        const isCorrect = checkAnswer(question, answer);

        if (isCorrect) {
          score += 1;
          return;
        }

        mistakes.push({
          prompt: question.prompt,
          explanation: question.explanation,
          answer: question.type === "arrange" ? question.correctSentence : question.options[question.correctIndex]
        });
      });
    });

    root.classList.add("hidden");
    result.classList.remove("hidden");
    result.innerHTML = `
      <p class="eyebrow">${title}</p>
      <h2>Nilai kamu</h2>
      <div class="big-score">${score}/${total}</div>
      <p class="section-desc">Kerjakan lagi jika ingin memperbaiki bagian yang masih salah.</p>
      ${mistakes.length ? `
        <div class="result-list">
          ${mistakes.map((item, index) => `
            <article class="result-item">
              <strong>Salah ${index + 1}</strong>
              <p>${item.prompt}</p>
              <p>Jawaban benar: ${item.answer}</p>
              <p>Penjelasan singkat: ${item.explanation}</p>
            </article>
          `).join("")}
        </div>
      ` : `<p>Semua jawaban benar. Bagus sekali.</p>`}
    `;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
