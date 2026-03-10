document.getElementById("year").textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.setAttribute("data-theme", "light");
}

function getCurrentTheme() {
  return document.body.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function updateThemeButton() {
  const currentTheme = getCurrentTheme();
  themeBtn.textContent = currentTheme === "dark" ? "LIGHT" : "DARK";
}

function setTheme(theme) {
  if (theme === "light") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.removeAttribute("data-theme");
  }

  localStorage.setItem("theme", theme);
  updateThemeButton();
}

themeBtn.addEventListener("click", () => {
  const currentTheme = getCurrentTheme();
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

const currentPage = window.location.pathname;

function updateLangButton() {
  const isEnglishPage = currentPage.includes("en.html");
  langBtn.textContent = isEnglishPage ? "PT" : "EN";
}

langBtn.addEventListener("click", () => {
  const isEnglishPage = currentPage.includes("en.html");
  window.location.href = isEnglishPage ? "index.html" : "en.html";
});

updateThemeButton();
updateLangButton();
