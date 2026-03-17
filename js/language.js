function isEnglishPage() {
  return window.location.pathname.toLowerCase().includes("en.html");
}

function updateLangButton(langBtn) {
  if (!langBtn) return;
  langBtn.textContent = isEnglishPage() ? "PT" : "EN";
}

export function initLanguage() {
  const langBtn = document.getElementById("langBtn");

  updateLangButton(langBtn);

  if (!langBtn) return;

  langBtn.addEventListener("click", () => {
    window.location.href = isEnglishPage() ? "index.html" : "en.html";
  });
}
