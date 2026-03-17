function getCurrentTheme() {
  return document.body.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function updateThemeButton(themeBtn) {
  if (!themeBtn) return;

  const currentTheme = getCurrentTheme();
  themeBtn.textContent = currentTheme === "dark" ? "LIGHT" : "DARK";
}

function setTheme(theme, themeBtn) {
  if (theme === "light") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.removeAttribute("data-theme");
  }

  localStorage.setItem("theme", theme);
  updateThemeButton(themeBtn);
}

export function initTheme() {
  const themeBtn = document.getElementById("themeBtn");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.removeAttribute("data-theme");
  }

  updateThemeButton(themeBtn);

  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    const currentTheme = getCurrentTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme, themeBtn);
  });
}
