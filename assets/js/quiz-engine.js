function normalizeSentence(text) {
  return text.replace(/[。！？,.!?]/g, "").replace(/\s+/g, "").trim().toLowerCase();
}

function shuffleArray(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function prepareSections(sections) {
  return sections.map((section) => ({
    ...section,
    questions: section.questions.map((question) => {
      if (question.type !== "arrange") return question;

      return {
        ...question,
        shuffledTokens: shuffleArray(
          question.words.map((word, index) => ({
            id: `${question.id}-${index}`,
            value: word
          }))
        )
      };
    })
  }));
}

function renderChoiceQuestion(question, index) {
  return `
    <article class="question-card">
      <div class="question-meta">Soal ${index + 1}</div>
      ${question.paragraph ? `<p class="paragraph-cn">${question.paragraph}</p>` : ""}
      <p class="question-hanzi">${question.prompt}</p>
      ${question.ask ? `<p class="section-desc">${question.ask}</p>` : ""}
      <div class="option-list">
        ${question.options
          .map(
            (option, optionIndex) => `
              <label class="option-item">
                <input type="radio" name="question-${question.id}" value="${optionIndex}" />
                <span>${option}</span>
              </label>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderArrangeQuestion(question, index) {
  return `
    <article class="question-card">
      <div class="question-meta">Soal ${index + 1}</div>
      <p class="section-desc">Susun kalimat dari kata acak berikut:</p>
      <p class="question-hanzi">${question.prompt}</p>
      <div class="arrange-box">
        <div class="arrange-dropzone answer-zone" data-question-id="${question.id}" data-role="answer">
          <span class="arrange-placeholder">Seret kata ke sini atau ketuk chip di bawah</span>
        </div>
        <div class="arrange-dropzone word-bank" data-question-id="${question.id}" data-role="bank">
          ${question.shuffledTokens
            .map(
              (token) => `
                <button
                  class="word-chip"
                  type="button"
                  draggable="true"
                  data-chip-id="${token.id}"
                  data-value="${token.value}"
                >${token.value}</button>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function updateArrangePlaceholder(questionId) {
  const answerZone = document.querySelector(`.answer-zone[data-question-id="${questionId}"]`);
  if (!answerZone) return;

  const placeholder = answerZone.querySelector(".arrange-placeholder");
  const chipCount = answerZone.querySelectorAll(".word-chip").length;

  if (placeholder) {
    placeholder.classList.toggle("hidden", chipCount > 0);
  }
}

function moveChip(chip, targetZone) {
  if (!chip || !targetZone) return;

  targetZone.appendChild(chip);
  updateArrangePlaceholder(targetZone.dataset.questionId);
}

function setupArrangeInteractions(root) {
  let draggedChip = null;

  root.querySelectorAll(".word-chip").forEach((chip) => {
    chip.addEventListener("dragstart", () => {
      draggedChip = chip;
      chip.classList.add("dragging");
    });

    chip.addEventListener("dragend", () => {
      chip.classList.remove("dragging");
      draggedChip = null;
    });

    chip.addEventListener("click", () => {
      const currentZone = chip.parentElement;
      const targetRole = currentZone.dataset.role === "bank" ? "answer" : "bank";
      const targetZone = root.querySelector(
        `.arrange-dropzone[data-question-id="${currentZone.dataset.questionId}"][data-role="${targetRole}"]`
      );

      moveChip(chip, targetZone);
      updateArrangePlaceholder(currentZone.dataset.questionId);
    });
  });

  root.querySelectorAll(".arrange-dropzone").forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      if (!draggedChip) return;

      const previousZone = draggedChip.parentElement;
      moveChip(draggedChip, zone);
      if (previousZone?.dataset?.questionId) {
        updateArrangePlaceholder(previousZone.dataset.questionId);
      }
    });
  });

  root.querySelectorAll(".answer-zone").forEach((zone) => {
    updateArrangePlaceholder(zone.dataset.questionId);
  });
}

function readAnswer(question) {
  if (question.type === "arrange") {
    const answerZone = document.querySelector(`.answer-zone[data-question-id="${question.id}"]`);
    if (!answerZone) return "";

    return [...answerZone.querySelectorAll(".word-chip")]
      .map((chip) => chip.dataset.value)
      .join("");
  }

  const checked = document.querySelector(`[name="question-${question.id}"]:checked`);
  return checked ? Number(checked.value) : null;
}

function checkAnswer(question, answer) {
  if (question.type === "arrange") {
    return normalizeSentence(answer) === normalizeSentence(question.correctSentence);
  }

  return answer === question.correctIndex;
}

function renderQuiz({ rootId, resultId, title, sections }) {
  const root = document.getElementById(rootId);
  const result = document.getElementById(resultId);
  const preparedSections = prepareSections(sections);

  root.innerHTML = `
    ${preparedSections
      .map(
        (section) => `
          <section class="quiz-section">
            <p class="eyebrow">${section.label}</p>
            <h2>${section.title}</h2>
            <p class="section-desc">${section.description}</p>
            ${section.questions
              .map((question, index) =>
                question.type === "arrange"
                  ? renderArrangeQuestion(question, index)
                  : renderChoiceQuestion(question, index)
              )
              .join("")}
          </section>
        `
      )
      .join("")}
    <div class="submit-row">
      <button id="submit-quiz" class="button primary" type="button">Selesai & Lihat Nilai</button>
    </div>
  `;

  setupArrangeInteractions(root);

  document.getElementById("submit-quiz").addEventListener("click", () => {
    const mistakes = [];
    let score = 0;
    let total = 0;

    preparedSections.forEach((section) => {
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
          answer:
            question.type === "arrange"
              ? question.correctSentence
              : question.options[question.correctIndex]
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
      ${
        mistakes.length
          ? `
            <div class="result-list">
              ${mistakes
                .map(
                  (item, index) => `
                    <article class="result-item">
                      <strong>Salah ${index + 1}</strong>
                      <p>${item.prompt}</p>
                      <p>Jawaban benar: ${item.answer}</p>
                      <p>Penjelasan singkat: ${item.explanation}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          `
          : `<p>Semua jawaban benar. Bagus sekali.</p>`
      }
    `;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
