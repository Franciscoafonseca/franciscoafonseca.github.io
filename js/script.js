document.getElementById("year").textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
let currentEducationIndex = 0;

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

const educationData = [
  {
    period: "2023 — Presente",
    title: "Licenciatura em Engenharia Informática",
    place: "Universidade da Madeira",
    description:
      "Percurso focado em bases sólidas de informática, programação, desenvolvimento de software, sistemas e áreas complementares da engenharia informática.",
    logo: "assets/logos/UMa.png",
    highlights: [
      "Adicionar aqui unidades curriculares ou áreas fortes",
      "Adicionar projetos ou trabalhos relevantes",
      "Adicionar notas sobre evolução técnica",
    ],
  },
  {
    period: "2023 — Presente",
    title: "Licenciatura em Engenharia Informática",
    place: "Universidade da Madeira",
    description:
      "Percurso focado em bases sólidas de informática, programação, desenvolvimento de software, sistemas e áreas complementares da engenharia informática.",
    logo: "assets/logos/UMa.png",
    highlights: [
      "Adicionar aqui unidades curriculares ou áreas fortes",
      "Adicionar projetos ou trabalhos relevantes",
      "Adicionar notas sobre evolução técnica",
    ],
  },
  {
    period: "2023 — Presente",
    title: "Licenciatura em Engenharia Informática",
    place: "Universidade da Madeira",
    description:
      "Percurso focado em bases sólidas de informática, programação, desenvolvimento de software, sistemas e áreas complementares da engenharia informática.",
    logo: "assets/logos/UMa.png",
    highlights: [
      "Adicionar aqui unidades curriculares ou áreas fortes",
      "Adicionar projetos ou trabalhos relevantes",
      "Adicionar notas sobre evolução técnica",
    ],
  },
  {
    period: "2023 — Presente",
    title: "Licenciatura em Engenharia Informática",
    place: "Universidade da Madeira",
    description:
      "Percurso focado em bases sólidas de informática, programação, desenvolvimento de software, sistemas e áreas complementares da engenharia informática.",
    logo: "assets/logos/UMa.png",
    highlights: [
      "Adicionar aqui unidades curriculares ou áreas fortes",
      "Adicionar projetos ou trabalhos relevantes",
      "Adicionar notas sobre evolução técnica",
    ],
  },
  {
    period: "2020 — 2023",
    title: "Ensino Secundário",
    place: "Adicionar escola secundária",
    description:
      "Espaço para colocares o teu percurso anterior, área de estudo, contexto académico e preparação para o ensino superior.",
    logo: "assets/logos/liceujaimemoniz.png",
    highlights: [
      "Adicionar destaque académico",
      "Adicionar atividades ou participação relevante",
    ],
  },
  {
    period: "2025",
    title: "Erasmus+",
    place: "University of Maribor",
    description:
      "Percurso focado em bases sólidas de informática, programação, desenvolvimento de software, sistemas e áreas complementares da engenharia informática.",
    logo: "assets/logos/University_of_Maribor.png",
    highlights: [
      "Adicionar aqui unidades curriculares ou áreas fortes",
      "Adicionar projetos ou trabalhos relevantes",
      "Adicionar notas sobre evolução técnica",
    ],
  },
];

const timeline = document.getElementById("educationTimeline");
const detailPeriod = document.getElementById("educationDetailPeriod");
const detailTitle = document.getElementById("educationDetailTitle");
const detailPlace = document.getElementById("educationDetailPlace");
const detailDescription = document.getElementById("educationDetailDescription");
const detailList = document.getElementById("educationDetailList");
const detailLogo = document.getElementById("educationDetailLogo");

const educationRailWrap = document.getElementById("educationRailWrap");
const educationRailGlow = document.getElementById("educationRailGlow");
const educationDots = document.getElementById("educationDots");

const timelineLeft = document.getElementById("timelineLeft");
const timelineRight = document.getElementById("timelineRight");

function setupEducationRailHover() {
  if (!educationRailWrap || !educationRailGlow) return;

  educationRailWrap.addEventListener("mousemove", (event) => {
    const rect = educationRailWrap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    educationRailGlow.style.left = `${x}px`;
  });
}

function renderEducationDots() {
  if (!educationDots) return;

  educationDots.innerHTML = "";

  educationData.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `education-dot${index === 0 ? " active" : ""}`;
    educationDots.appendChild(dot);
  });
}

function renderEducationTimeline() {
  if (!timeline) return;

  timeline.innerHTML = "";

  educationData.forEach((item, index) => {
    const node = document.createElement("article");
    node.className = `timeline-item${index === 0 ? " active" : ""}`;
    node.dataset.index = index;

    node.innerHTML = `
        <div class="timeline-logo-wrap">
            <img class="timeline-logo" src="${item.logo}" alt="Logótipo de ${item.place}">
        </div>
        <p class="timeline-period">${item.period}</p>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-place">${item.place}</p>
        `;

    node.addEventListener("click", () => setActiveEducation(index));
    timeline.appendChild(node);
  });
}
timelineLeft.addEventListener("click", () => {
  currentEducationIndex--;

  if (currentEducationIndex < 0) {
    currentEducationIndex = educationData.length - 1;
  }

  setActiveEducation(currentEducationIndex);
});

timelineRight.addEventListener("click", () => {
  currentEducationIndex++;

  if (currentEducationIndex >= educationData.length) {
    currentEducationIndex = 0;
  }

  setActiveEducation(currentEducationIndex);
});
function setActiveEducation(index) {
  currentEducationIndex = index;

  const item = educationData[index];
  if (!item) return;

  detailPeriod.textContent = item.period;
  detailTitle.textContent = item.title;
  detailPlace.textContent = item.place;
  detailDescription.textContent = item.description;
  detailLogo.src = item.logo;
  detailLogo.alt = `Logótipo de ${item.place}`;

  detailList.innerHTML = "";

  item.highlights.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    detailList.appendChild(li);
  });

  const items = document.querySelectorAll(".timeline-item");

  items.forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });

  const activeItem = items[index];

  if (activeItem) {
    activeItem.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  const dots = document.querySelectorAll(".education-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

renderEducationTimeline();
renderEducationDots();
setActiveEducation(0);
setupEducationRailHover();
