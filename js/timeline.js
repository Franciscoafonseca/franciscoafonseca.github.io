import { initScrollReveal } from "./effects.js";
const educationData = [
  {
    period: "2019 — 2022",
    title: "Ensino Secundário",
    place: "Escola Secundária Jaime Moniz",
    description:
      "Percurso no ensino secundário na área de Ciências e Tecnologias, com foco em bases científicas, raciocínio lógico, matemática e preparação para o ingresso no ensino superior na área da informática.",
    logo: "assets/logos/liceujaimemoniz.png",
    highlights: [
      "Desenvolvimento de bases sólidas em matemática, lógica e ciências",
      "Preparação académica para a entrada em Engenharia Informática",
      "Primeiro contacto com áreas ligadas à tecnologia, resolução de problemas e pensamento analítico",
    ],
  },
  {
    period: "2022 — Presente",
    title: "Licenciatura em Engenharia Informática",
    place: "Universidade da Madeira",
    description:
      "Percurso académico focado no desenvolvimento de software, programação, bases de dados, engenharia de sistemas, inteligência artificial, cibersegurança, redes, sistemas operativos e desenvolvimento web, com forte componente prática através de projetos académicos.",
    logo: "assets/logos/UMa.png",
    highlights: [
      "Desenvolvimento de projetos em Java, Python, C, C++, C#, JavaScript, PHP e Assembly",
      "Experiência prática em desenvolvimento web, aplicações desktop, sistemas distribuídos, bases de dados e inteligência artificial",
      "Projetos académicos nas áreas de machine learning, cibersegurança, e-health, redes, sistemas operativos e engenharia de software",
      "Participação em contexto académico e associativo, reforçando competências de comunicação, organização e trabalho em equipa",
    ],
  },
  {
    period: "2025",
    title: "Erasmus+",
    place: "University of Maribor",
    description:
      "Experiência académica internacional realizada na University of Maribor, permitindo contacto com novos métodos de ensino, ambientes multiculturais e diferentes abordagens ao estudo da engenharia informática.",
    logo: "assets/logos/University_of_Maribor.png",
    highlights: [
      "Adaptação a um contexto académico internacional e multicultural",
      "Desenvolvimento de autonomia, comunicação em inglês e capacidade de integração em novos ambientes",
      "Contacto com diferentes metodologias de ensino e formas de trabalho em equipa",
      "Reforço da visão global sobre tecnologia, engenharia e colaboração internacional",
    ],
  },
  {
    period: "2026 — Presente",
    title: "Mestrado em Ciência de Dados",
    place: "ISCTE Business School",
    description:
      "Percurso de mestrado focado em ciência de dados, análise avançada de informação, estatística, machine learning, inteligência artificial e apoio à tomada de decisão baseada em dados, reforçando a ligação entre tecnologia, gestão e contexto empresarial.",
    logo: "assets/logos/iscte1.png",
    highlights: [
      "Especialização em ciência de dados aplicada a problemas reais e contextos empresariais",
      "Aprofundamento de competências em análise de dados, machine learning, estatística e inteligência artificial",
      "Contacto com metodologias de apoio à decisão orientadas por dados",
      "Integração de conhecimentos técnicos de Engenharia Informática com uma visão mais estratégica e empresarial",
    ],
  },
];

let currentEducationIndex = 0;

export function initTimeline() {
  const timeline = document.getElementById("educationTimeline");
  const detailPeriod = document.getElementById("educationDetailPeriod");
  const detailTitle = document.getElementById("educationDetailTitle");
  const detailPlace = document.getElementById("educationDetailPlace");
  const detailDescription = document.getElementById(
    "educationDetailDescription",
  );
  const detailList = document.getElementById("educationDetailList");
  const detailLogo = document.getElementById("educationDetailLogo");

  const educationRailWrap = document.getElementById("educationRailWrap");
  const educationRailGlow = document.getElementById("educationRailGlow");
  const educationDots = document.getElementById("educationDots");

  const timelineLeft = document.getElementById("timelineLeft");
  const timelineRight = document.getElementById("timelineRight");

  if (
    !timeline ||
    !detailPeriod ||
    !detailTitle ||
    !detailPlace ||
    !detailDescription ||
    !detailList ||
    !detailLogo
  ) {
    console.warn("Timeline: faltam elementos HTML com os IDs corretos.");
    return;
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

  function setActiveEducation(index) {
    const item = educationData[index];
    if (!item) return;

    currentEducationIndex = index;

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

  function renderEducationTimeline() {
    timeline.innerHTML = "";

    educationData.forEach((item, index) => {
      const node = document.createElement("article");
      node.className = `timeline-item reveal-on-scroll reveal-delay-${(index % 3) + 1}${index === 0 ? " active" : ""}`;
      node.dataset.index = String(index);

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

  function setupTimelineNavigation() {
    if (timelineLeft) {
      timelineLeft.addEventListener("click", () => {
        currentEducationIndex--;

        if (currentEducationIndex < 0) {
          currentEducationIndex = educationData.length - 1;
        }

        setActiveEducation(currentEducationIndex);
      });
    }

    if (timelineRight) {
      timelineRight.addEventListener("click", () => {
        currentEducationIndex++;

        if (currentEducationIndex >= educationData.length) {
          currentEducationIndex = 0;
        }

        setActiveEducation(currentEducationIndex);
      });
    }
  }

  function setupEducationRailHover() {
    if (!educationRailWrap || !educationRailGlow) return;

    educationRailWrap.addEventListener("mousemove", (event) => {
      const rect = educationRailWrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      educationRailGlow.style.left = `${x}px`;
    });
  }

  renderEducationTimeline();
  initScrollReveal();
  renderEducationDots();
  setupTimelineNavigation();
  setupEducationRailHover();
  setActiveEducation(0);
}
