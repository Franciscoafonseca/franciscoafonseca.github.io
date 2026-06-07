import { initScrollReveal } from "./effects.js";

export const projects = [
  {
    title: "Festival de Cinema Online",
    description:
      "Plataforma online para festivais de cinema, com gestão de festivais, catálogo de filmes, sessões digitais, acessos, compras e funcionalidades sociais.",
    area: "Engenharia de Software",
    languages: ["C#", "CSS", "HTML"],
    tools: [
      ".NET",
      "ASP.NET Core Web API",
      "Blazor WebAssembly",
      "Entity Framework Core",
      "SQLite",
      "Swagger/OpenAPI",
    ],
    github: "https://github.com/Franciscoafonseca/ProjetoCinema",
  },
  {
    title: "Jogo Joker 8051",
    description:
      "Projeto em C e Assembly para o microcontrolador 8051/AT89S51, simulando um concurso de perguntas com botões, temporizador, LEDs, display, jokers e buzzer.",
    area: "Arquitetura de Computadores",
    languages: ["Assembly", "C"],
    tools: ["8051", "AT89S51", "Keil uVision", "Interrupções", "Timers"],
    github: "https://github.com/Franciscoafonseca/Project3-AC-Joker",
  },
  {
    title: "Simulação Paralela de Galáxia",
    description:
      "Simulação paralela de uma galáxia em Python usando mpi4py, com partículas representando estrelas, cálculo de forças gravitacionais, comunicação MPI, medições de tempo, gráficos 2D/3D e geração de GIF.",
    area: "Computação Paralela",
    languages: ["Python"],
    tools: [
      "MPI",
      "mpi4py",
      "NumPy",
      "Matplotlib",
      "ImageIO",
      "Computação Paralela",
    ],
    github: "https://github.com/Franciscoafonseca/ProjetoPA2-Gif",
  },
  {
    title: "Sistema de Cantina em Assembly",
    description:
      "Projeto em Assembly para simulação ou gestão de uma cantina, desenvolvido no âmbito de Arquitetura de Computadores, com lógica implementada no ficheiro cantina_pepe.asm.",
    area: "Arquitetura de Computadores",
    languages: ["Assembly"],
    tools: ["Zulu Platform", "Jar Simulator"],
    github: "https://github.com/Franciscoafonseca/Project2-AC-Cantina",
  },
  {
    title: "Revisão de Bases de Crenças",
    description:
      "Sistema em Python para representação de fórmulas proposicionais, avaliação de consequência lógica, teste de tautologias e aplicação de operadores de contração de crenças.",
    area: "Inteligência Artificial",
    languages: ["Python", "TeX", "HTML"],
    tools: ["PyInstaller", "SAT"],
    github:
      "https://github.com/Franciscoafonseca/Projeto-Contracao_Bases_De_Crencas",
  },
  {
    title: "Robô 3D",
    description:
      "Projeto em JavaScript relacionado com programação de animações ou simulação 3D, organizado no repositório Project1-PA-3DRobot.",
    area: "Programação e Animação",
    languages: ["JavaScript"],
    tools: ["p5.js", "WebGL"],
    github: "https://github.com/Franciscoafonseca/Project1-PA-3DRobot",
  },
  {
    title: "Website Comprador Anónimo",
    description:
      "Aplicação web desenvolvida no âmbito de Engenharia de Requisitos, com autenticação, gestão de utilizadores, entidades, localizações, uploads e relatórios.",
    area: "Desenvolvimento Web",
    languages: ["EJS", "JavaScript"],
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
      "JWT",
      "Multer",
    ],
    github:
      "https://github.com/Franciscoafonseca/Projeto-ER-Website_Anonimo_Comprador",
  },
  {
    title: "Módulos PHP de Gestão de Base de Dados",
    description:
      "Conjunto de páginas PHP para gestão de registos, valores permitidos, inserção de valores e pesquisa, pensado para integração num sistema maior com base de dados.",
    area: "Bases de Dados",
    languages: ["PHP", "Shell"],
    tools: ["MySQL", "MariaDB", "WordPress", "Apache", "XAMPP"],
    github:
      "https://github.com/Franciscoafonseca/Projeto-SGBD-Paginas_Gestor_BD",
  },
  {
    title: "Extensão Detectora de Trackers",
    description:
      "Extensão para Firefox que deteta third-party trackers durante a navegação, compara pedidos com blocklists e apresenta os resultados numa interface interativa.",
    area: "Cibersegurança",
    languages: ["JavaScript", "CSS", "HTML"],
    tools: ["WebExtensions API", "IndexedDB", "Dexie.js", "Firefox"],
    github: "https://github.com/Franciscoafonseca/Project-ISB-Security_Plugin",
  },
  {
    title: "Classificação de Letras Manuscritas",
    description:
      "Projeto de machine learning para extração de características de letras manuscritas, aplicação de clustering e avaliação de desempenho por modelo e por letra.",
    area: "Machine Learning",
    languages: ["Python"],
    tools: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "PCA",
      "KMeans",
      "GMM",
    ],
    github:
      "https://github.com/Franciscoafonseca/Project-IS-Handwritten_Letter_Detecture",
  },
  {
    title: "Cliente de Email WPF",
    description:
      "Aplicação desktop em C# com WPF e XAML para gestão de emails, pastas, drafts, pesquisa, anexos e validação de campos, seguindo o padrão MVVM.",
    area: "Desenvolvimento Desktop",
    languages: ["C#"],
    tools: ["WPF", "XAML", ".NET", "MVVM"],
    github: "https://github.com/Franciscoafonseca/Project-IHC-Email_Client_APP",
  },
  {
    title: "Website Vulnerável vs Seguro",
    description:
      "Projeto educativo em PHP que demonstra vulnerabilidades web comuns e respetivas versões seguras, incluindo SQL Injection, XSS, controlo de acesso e exposição de dados.",
    area: "Cibersegurança",
    languages: ["PHP", "Hack"],
    tools: ["MySQL", "Tailwind CSS", "PHP Sessions"],
    github:
      "https://github.com/Franciscoafonseca/Project-ISB-Vulnerabel_Safe_WebSite",
  },
  {
    title: "House Dream",
    description:
      "Aplicação web de compra e venda de casas, com autenticação, pesquisa de imóveis, filtros, gestão de perfil, compra de casas, venda de propriedades e sistema de suporte.",
    area: "Desenvolvimento Web",
    languages: ["EJS", "JavaScript", "CSS"],
    tools: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Tailwind CSS"],
    github: "https://github.com/Franciscoafonseca/Projeto-DBW-WebSite_Casas",
  },
  {
    title: "Jogo da Barbie",
    description:
      "Jogo em Java desenvolvido com Greenfoot, com personagens, veículos, obstáculos, moedas, níveis, vidas, pontuação e diferentes fases.",
    area: "Programação Orientada a Objetos",
    languages: ["Java"],
    tools: ["Greenfoot", "OOP"],
    github: "https://github.com/Franciscoafonseca/Projeto1-POO-Jogo_Da_Barbie",
  },
  {
    title: "Sistema eHealth",
    description:
      "Aplicação Java enterprise para gestão de médicos e pacientes, associação entre entidades, persistência de dados e operações de consulta e atualização.",
    area: "Engenharia de Software",
    languages: ["Java", "HTML", "XML"],
    tools: ["Jakarta EE", "EJB", "JPA", "JSF", "EntityManager", "WildFly"],
    github: "https://github.com/Franciscoafonseca/Project-ISAP-Health_System",
  },
  {
    title: "Planeamento de Endereçamento IP",
    description:
      "Projeto de redes de computadores com criação e configuração de uma topologia no Cisco Packet Tracer, incluindo endereçamento IP e testes de conectividade.",
    area: "Redes de Computadores",
    languages: [],
    tools: ["Cisco Packet Tracer"],
    github:
      "https://github.com/Franciscoafonseca/Projeto-REDES-Planeamento_De_Enderecamento_IP",
  },
  {
    title: "Robô LEGO EV3 Autónomo",
    description:
      "Sistema de IA para robô LEGO EV3 capaz de navegar num ambiente em matriz, detetar objetos, evitar ameaças dinâmicas e calcular rotas seguras.",
    area: "Inteligência Artificial",
    languages: ["Python"],
    tools: ["LEGO Mindstorms EV3", "Pathfinding"],
    github: "https://github.com/Franciscoafonseca/Projeto-IA-Lego_Robot",
  },
  {
    title: "Leitura de Matrícula de Carro",
    description:
      "Projeto de sistemas digitais relacionado com leitura ou processamento de matrícula automóvel, incluindo ficheiros de simulação, esquemas e módulos de controlo.",
    area: "Sistemas Digitais",
    languages: ["C", "Verilog"],
    tools: ["Xilinx ISE", "Verilog", "Simulação Digital"],
    github:
      "https://github.com/Franciscoafonseca/Projeto-SD-Leitura_Matricula_Carro",
  },
  {
    title: "Simulador de Liga de Futebol",
    description:
      "Simulador de ligas de futebol em Java, com gestão de equipas, jogadores, treinadores, árbitros, partidas e atualização de estatísticas.",
    area: "Programação Orientada a Objetos",
    languages: ["Java"],
    tools: ["Maven", "OOP"],
    github: "https://github.com/Franciscoafonseca/Projeto2-POO-Liga_Futebol",
  },
  {
    title: "Simulador de Garagem",
    description:
      "Simulador em C++ para gestão de uma oficina automóvel, com fila de espera, estações de trabalho, mecânicos, prioridades e carros reparados.",
    area: "Estruturas de Dados e Algoritmos",
    languages: ["C++", "C"],
    tools: ["Visual Studio", "Árvores Binárias", "File Handling"],
    github: "https://github.com/Franciscoafonseca/Projeto2-EDA-DiaADia_Garagem",
  },

  {
    title: "Sudoku Cliente-Servidor",
    description:
      "Projeto em C com arquitetura cliente-servidor para um jogo ou sistema de Sudoku, desenvolvido no âmbito de Sistemas Operativos.",
    area: "Sistemas Operativos",
    languages: ["C"],
    tools: ["Cliente-Servidor", "Sockets", "Processos"],
    github:
      "https://github.com/Franciscoafonseca/Projeto-SO-Sudoku_Cliente_Servidor",
  },
];

export function initProjects() {
  const track = document.getElementById("projectsTrack");
  const filtersContainer = document.getElementById("projectFilters");
  const prevBtn = document.getElementById("projectsPrevBtn");
  const nextBtn = document.getElementById("projectsNextBtn");
  const viewport = track?.parentElement;

  if (!track || !viewport || !prevBtn || !nextBtn) {
    console.warn("Projects: faltam elementos no HTML.");
    return;
  }

  const PROJECT_CATEGORIES = {
    "Software & Web": [
      "Engenharia de Software",
      "Desenvolvimento Web",
      "Desenvolvimento Desktop",
      "Programação Orientada a Objetos",
    ],

    "Dados & IA": [
      "Machine Learning",
      "Inteligência Artificial",
      "Bases de Dados",
    ],

    "Segurança & Redes": ["Cibersegurança", "Redes de Computadores"],

    Sistemas: [
      "Arquitetura de Computadores",
      "Sistemas Digitais",
      "Sistemas Operativos",
      "Estruturas de Dados e Algoritmos",
      "Computação Paralela",
    ],

    Criatividade: [
      "Programação e Animação",
      "Design Visual",
      "Comunicação Visual",
    ],
  };

  const FILTERS = ["Todos", ...Object.keys(PROJECT_CATEGORIES)];

  let currentStartIndex = 0;
  let currentFilter = "Todos";
  let filteredProjects = [...projects];

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeTags(items) {
    if (!items) return [];

    const values = Array.isArray(items) ? items : [items];

    return values
      .flatMap((item) => String(item).split(","))
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function getProjectCategory(area) {
    for (const [category, areas] of Object.entries(PROJECT_CATEGORIES)) {
      if (areas.includes(area)) return category;
    }

    return "Outros";
  }

  function createTagsHTML(items, className, limit = 4) {
    const tags = normalizeTags(items).slice(0, limit);

    if (!tags.length) return "";

    return tags
      .map(
        (item) =>
          `<span class="project-tag ${className}">${escapeHTML(item)}</span>`,
      )
      .join("");
  }

  function createGitHubIcon() {
    return `
      <svg
        class="github-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.98c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    `;
  }

  function renderFilters() {
    if (!filtersContainer) return;

    filtersContainer.innerHTML = `
      <div class="project-filter-dropdown" id="projectFilterDropdown">
        <button
          class="project-filter-toggle"
          id="projectFilterToggle"
          type="button"
          aria-expanded="false"
          aria-controls="projectFilterMenu"
        >
          <span class="project-filter-content">
            <span class="project-filter-label">Filtro</span>
            <strong id="projectFilterCurrent">${escapeHTML(currentFilter)}</strong>
          </span>

          <svg
            class="project-filter-chevron"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4Z" />
          </svg>
        </button>

        <div class="project-filter-menu" id="projectFilterMenu" hidden>
          ${FILTERS.map(
            (filter) => `
              <button
                class="project-filter-option ${
                  filter === currentFilter ? "active" : ""
                }"
                type="button"
                data-filter="${escapeHTML(filter)}"
              >
                ${escapeHTML(filter)}
              </button>
            `,
          ).join("")}
        </div>
      </div>
    `;

    const dropdown = filtersContainer.querySelector("#projectFilterDropdown");
    const toggle = filtersContainer.querySelector("#projectFilterToggle");
    const menu = filtersContainer.querySelector("#projectFilterMenu");
    const currentLabel = filtersContainer.querySelector(
      "#projectFilterCurrent",
    );

    function closeFilter() {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }

    function toggleFilter(event) {
      event.stopPropagation();

      const isOpen = dropdown.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.hidden = !isOpen;
    }

    toggle.addEventListener("click", toggleFilter);

    menu.addEventListener("click", (event) => {
      const option = event.target.closest("[data-filter]");

      if (!option) return;

      applyFilter(option.dataset.filter);

      currentLabel.textContent = currentFilter;

      menu.querySelectorAll(".project-filter-option").forEach((button) => {
        button.classList.toggle(
          "active",
          button.dataset.filter === currentFilter,
        );
      });

      closeFilter();
    });

    document.addEventListener("click", (event) => {
      if (!filtersContainer.contains(event.target)) {
        closeFilter();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeFilter();
    });
  }

  function applyFilter(filter) {
    currentFilter = filter;

    filteredProjects =
      filter === "Todos"
        ? [...projects]
        : projects.filter(
            (project) => getProjectCategory(project.area) === filter,
          );

    currentStartIndex = 0;

    renderProjects();
    scrollToIndex(0, false);
    updateNavigationState();
  }

  function createProjectItem(project, index) {
    const item = document.createElement("article");

    item.className = `project-item reveal-on-scroll reveal-delay-${
      (index % 3) + 1
    }`;

    const languagesHTML = createTagsHTML(project.languages, "tag-language", 4);
    const toolsHTML = createTagsHTML(project.tools, "tag-tool", 4);

    item.innerHTML = `
      <div class="project-item-inner">
        <div class="project-card-header">
          <span class="project-area">${escapeHTML(project.area)}</span>
          <h3 class="project-item-title">${escapeHTML(project.title)}</h3>
        </div>

        <p class="project-item-description">
          ${escapeHTML(project.description)}
        </p>

        <div class="project-item-tech">
          ${languagesHTML}
          ${toolsHTML}
        </div>

        <div class="project-item-footer">
          <a
            class="project-github-button"
            href="${escapeHTML(project.github)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver projeto ${escapeHTML(project.title)} no GitHub"
          >
            ${createGitHubIcon()}
            <span>Ver no GitHub</span>
          </a>
        </div>
      </div>
    `;

    return item;
  }

  function renderProjects() {
    track.innerHTML = "";

    if (!filteredProjects.length) {
      track.innerHTML = `
        <article class="project-item">
          <div class="project-item-inner">
            <div class="project-card-header">
              <h3 class="project-item-title">Nenhum projeto encontrado</h3>
            </div>

            <p class="project-item-description">
              Não existem projetos associados a este filtro.
            </p>
          </div>
        </article>
      `;
      return;
    }

    filteredProjects.forEach((project, index) => {
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
    return Math.max(0, filteredProjects.length - getVisibleCount());
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

  function updateNavigationState() {
    const maxStartIndex = getMaxStartIndex();
    const shouldDisable = maxStartIndex === 0;

    prevBtn.disabled = shouldDisable;
    nextBtn.disabled = shouldDisable;
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
    updateNavigationState();
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

      maxHeight = Math.max(maxHeight, inner.offsetHeight);
    });

    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  window.addEventListener("resize", syncOnResize);

  renderFilters();
  renderProjects();
  syncOnResize();
}
