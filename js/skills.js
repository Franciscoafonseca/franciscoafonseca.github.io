import { projects } from "./projects.js";

const SKILLS_LIMITS = {
  languages: 8,
  tools: 8,
  areas: 4,
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeItems(value) {
  if (!value) return [];

  const values = Array.isArray(value) ? value : [value];

  return values
    .flatMap((item) => String(item).split(","))
    .map((item) => item.trim())
    .filter(Boolean);
}

function collectUniqueProjectItems(key) {
  const itemsMap = new Map();

  projects.forEach((project) => {
    normalizeItems(project[key]).forEach((item) => {
      const normalizedKey = item.toLowerCase();

      if (!itemsMap.has(normalizedKey)) {
        itemsMap.set(normalizedKey, item);
      }
    });
  });

  return Array.from(itemsMap.values());
}

function getRandomItems(items, limit) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, limit);
}

function renderSkillGroup(containerId, items, emptyMessage) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`Skills: elemento #${containerId} não encontrado.`);
    return;
  }

  if (!items.length) {
    container.innerHTML = `<span class="chip">${escapeHTML(emptyMessage)}</span>`;
    return;
  }

  container.innerHTML = items
    .map((item) => `<span class="chip">${escapeHTML(item)}</span>`)
    .join("");
}

export function initSkills() {
  const randomLanguages = getRandomItems(
    collectUniqueProjectItems("languages"),
    SKILLS_LIMITS.languages,
  );

  const randomTools = getRandomItems(
    collectUniqueProjectItems("tools"),
    SKILLS_LIMITS.tools,
  );

  const randomAreas = getRandomItems(
    collectUniqueProjectItems("area"),
    SKILLS_LIMITS.areas,
  );

  renderSkillGroup(
    "skillsLanguages",
    randomLanguages,
    "Sem linguagens registadas",
  );

  renderSkillGroup("skillsTools", randomTools, "Sem ferramentas registadas");

  renderSkillGroup("skillsAreas", randomAreas, "Sem áreas registadas");
}
