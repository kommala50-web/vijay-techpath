// Ctrl + K focus search
document.addEventListener("keydown", (e) => {
  const search = document.getElementById("searchInput");
  if (!search) return;

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    search.focus();
  }
});

// Search filter cards
const searchInput = document.getElementById("searchInput");
const grid = document.getElementById("topicsGrid");

if (searchInput && grid) {
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase().trim();
    const cards = grid.querySelectorAll(".card");

    cards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? "" : "none";
    });
  });
}

/* =======================
   CODE MODAL LOGIC
======================= */

const modal = document.getElementById("codeModal");
const modalCode = document.getElementById("modalCode");
const closeBtn = document.querySelector(".close-modal");

// Open modal
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".show-code-btn");
  if (!btn) return;

  const codeId = btn.dataset.code;
  const codeEl = document.getElementById(codeId);
  if (!codeEl) return;

  modalCode.textContent = codeEl.textContent;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close modal
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("code-modal")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
