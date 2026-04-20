function displayText(value, fallback = "Belum diisi") {
  return value && String(value).trim() ? value : fallback;
}

function renderVocabTable(items) {
  const tbody = document.getElementById("vocab-table-body");
  const count = document.getElementById("vocab-count");

  tbody.innerHTML = items.map((item) => `
    <tr>
      <td class="vocab-hanzi">${item.hanzi}</td>
      <td>${item.pinyin}</td>
      <td>${item.meaning}</td>
      <td>
        <div class="example-cn">${displayText(item.exampleCn, "Contoh kalimat menyusul")}</div>
        <div class="example-note">${displayText(item.examplePinyin, "-")}</div>
      </td>
      <td>${displayText(item.exampleId, "Arti contoh menyusul")}</td>
    </tr>
  `).join("");

  count.textContent = `${items.length} kata ditampilkan`;
}

function filterVocab(keyword) {
  const normalized = keyword.trim().toLowerCase();
  if (!normalized) return hsk1Vocab;

  return hsk1Vocab.filter((item) =>
    [item.hanzi, item.pinyin, item.meaning, item.exampleCn, item.exampleId]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}

const searchInput = document.getElementById("vocab-search");
renderVocabTable(hsk1Vocab);
searchInput.addEventListener("input", (event) => {
  renderVocabTable(filterVocab(event.target.value));
});
