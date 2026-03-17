import { initScrollReveal } from "./effects.js";

export function initProjects() {
  const projects = [
    {
      title: "Letter Classification ML",
      description:
        "Sistema de classificação de letras com diferentes algoritmos de machine learning, divisões de imagem e análise comparativa de desempenho.",
      languages: ["Python", "TensorFlow", "Scikit-learn"],
      github: "https://github.com/teu-username/letter-classification-ml",
    },
    {
      title: "E-Health System",
      description:
        "Sistema de e-saúde para gestão de pacientes e visitas médicas, preparado para evolução modular e novas regras de negócio.",
      languages: ["Java", "Jakarta EE", "WildFly"],
      github: "https://github.com/teu-username/e-health-system",
    },
    {
      title: "WPF Mail Client",
      description:
        "Cliente de e-mail com interface gráfica em WPF, com foco em organização visual, estrutura limpa e boa experiência de utilização.",
      languages: ["C#", "WPF", "XAML"],
      github: "https://github.com/teu-username/wpf-mail-client",
    },
    {
      title: "Portfolio Website",
      description:
        "Website pessoal responsivo com foco em apresentação profissional, animações suaves, modo claro/escuro e organização modular.",
      languages: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/teu-username/portfolio-website",
    },
    {
      title: "Image Processing Study",
      description:
        "Projeto experimental de processamento e segmentação de imagem para apoio à análise de desempenho em tarefas de classificação.",
      languages: ["Python", "OpenCV", "NumPy"],
      github: "https://github.com/teu-username/image-processing-study",
    },
  ];

  const track = document.getElementById("projectsTrack");
  const prevBtn = document.getElementById("projectsPrevBtn");
  const nextBtn = document.getElementById("projectsNextBtn");
  const viewport = track?.parentElement;

  if (!track || !viewport || !prevBtn || !nextBtn) {
    console.warn("Projects: faltam elementos no HTML.");
    return;
  }

  let currentStartIndex = 0;

  function createProjectItem(project, index) {
    const item = document.createElement("article");
    item.className = `project-item reveal-on-scroll reveal-delay-${(index % 3) + 1}`;

    const languagesHTML = project.languages
      .map((language) => `<span>${language}</span>`)
      .join("");

    item.innerHTML = `
      <div class="project-item-inner">
        <div class="project-item-content">
          <h3 class="project-item-title">${project.title}</h3>
          <p class="project-item-description">${project.description}</p>

          <div class="project-item-languages">
            ${languagesHTML}
          </div>
        </div>

        <div class="project-item-footer">
          <a
            class="project-github-button"
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir projeto no GitHub: ${project.title}"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.374 6.839 9.73.5.094.682-.222.682-.494 0-.243-.009-.889-.014-1.744-2.782.617-3.37-1.37-3.37-1.37-.454-1.183-1.11-1.497-1.11-1.497-.908-.636.069-.623.069-.623 1.004.072 1.532 1.056 1.532 1.056.892 1.565 2.341 1.113 2.91.851.091-.667.35-1.113.636-1.369-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.389-2.036 1.029-2.754-.103-.26-.446-1.305.098-2.72 0 0 .84-.276 2.75 1.052A9.303 9.303 0 0 1 12 6.844c.85.004 1.705.118 2.504.347 1.909-1.328 2.748-1.052 2.748-1.052.546 1.415.203 2.46.1 2.72.64.718 1.028 1.634 1.028 2.754 0 3.943-2.339 4.811-4.566 5.064.359.317.678.942.678 1.898 0 1.371-.012 2.476-.012 2.814 0 .274.18.593.688.492A10.019 10.019 0 0 0 22 12.253C22 6.59 17.523 2 12 2Z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    `;

    return item;
  }

  function renderProjects() {
    track.innerHTML = "";

    projects.forEach((project, index) => {
      track.appendChild(createProjectItem(project, index));
    });

    syncProjectHeights();
    initScrollReveal();
  }

  function getVisibleCount() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }

  function getMaxStartIndex() {
    return Math.max(0, projects.length - getVisibleCount());
  }

  function getStepSize() {
    const firstItem = track.querySelector(".project-item");
    if (!firstItem) return 0;

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.gap) || 24;

    return firstItem.offsetWidth + gap;
  }

  function scrollToIndex(index, smooth = true) {
    const step = getStepSize();
    if (!step) return;

    viewport.scrollTo({
      left: index * step,
      behavior: smooth ? "smooth" : "auto",
    });
  }

  function goNext() {
    const maxStartIndex = getMaxStartIndex();

    currentStartIndex =
      currentStartIndex >= maxStartIndex ? 0 : currentStartIndex + 1;

    scrollToIndex(currentStartIndex, true);
  }

  function goPrev() {
    const maxStartIndex = getMaxStartIndex();

    currentStartIndex =
      currentStartIndex <= 0 ? maxStartIndex : currentStartIndex - 1;

    scrollToIndex(currentStartIndex, true);
  }

  function syncOnResize() {
    const maxStartIndex = getMaxStartIndex();

    syncProjectHeights();

    if (currentStartIndex > maxStartIndex) {
      currentStartIndex = maxStartIndex;
    }

    scrollToIndex(currentStartIndex, false);
  }

  function syncProjectHeights() {
    const items = track.querySelectorAll(".project-item");
    if (!items.length) return;

    items.forEach((item) => {
      item.style.height = "auto";
    });

    let maxHeight = 0;

    items.forEach((item) => {
      const inner = item.querySelector(".project-item-inner");
      if (!inner) return;

      const height = inner.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  window.addEventListener("resize", syncOnResize);

  renderProjects();
  syncOnResize();
}
