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
    tools: ["p5.js, WebGL"],
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
  const prevBtn = document.getElementById("projectsPrevBtn");
  const nextBtn = document.getElementById("projectsNextBtn");
  const viewport = track?.parentElement;

  if (!track || !viewport || !prevBtn || !nextBtn) {
    console.warn("Projects: faltam elementos no HTML.");
    return;
  }

  let currentStartIndex = 0;

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
  function createTagsHTML(items, className) {
    if (!items || !items.length) return "";

    return items
      .flatMap((item) => String(item).split(","))
      .map((item) => item.trim())
      .filter(Boolean)
      .map(
        (item) => `<span class="tag ${className}">${escapeHTML(item)}</span>`,
      )
      .join("");
  }

  function createProjectItem(project, index) {
    const item = document.createElement("article");
    item.className = `project-item reveal-on-scroll reveal-delay-${(index % 3) + 1}`;

    const areaHTML = project.area
      ? `
        <div class="project-item-area-wrap">
          <span class="project-area-badge">${project.area}</span>
        </div>
      `
      : "";

    const languagesHTML = createTagsHTML(project.languages, "tag-language");
    const toolsHTML = createTagsHTML(project.tools, "tag-tool");

    item.innerHTML = `
      <div class="project-item-inner">
        <div class="project-item-content">
          <h3 class="project-item-title">${project.title}</h3>
          <p class="project-item-description">${project.description}</p>
          ${areaHTML}
        </div>    
        <div class="project-item-tech">
          ${toolsHTML}
          ${languagesHTML}
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
