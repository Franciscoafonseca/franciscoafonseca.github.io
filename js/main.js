import { initTheme } from "./theme.js";
import { initLanguage } from "./language.js";
import { initTimeline } from "./timeline.js";
import { initPosters } from "./posters.js";
import { initScrollReveal } from "./effects.js";
import { initProjects } from "./projects.js";
import { initSkills } from "./skills.js";
import { initHero } from "./hero.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    initTheme();
  } catch (error) {
    console.error("Erro em initTheme:", error);
  }

  try {
    initLanguage();
  } catch (error) {
    console.error("Erro em initLanguage:", error);
  }

  try {
    initSkills();
  } catch (error) {
    console.error("Erro em initSkills:", error);
  }

  try {
    initTimeline();
  } catch (error) {
    console.error("Erro em initTimeline:", error);
  }

  try {
    initPosters();
  } catch (error) {
    console.error("Erro em initPosters:", error);
  }

  try {
    initScrollReveal();
  } catch (error) {
    console.error("Erro em initScrollReveal:", error);
  }

  try {
    initProjects();
  } catch (error) {
    console.error("Erro em initProjects:", error);
  }

  try {
    initHero();
  } catch (error) {
    console.error("Erro em initHero:", error);
  }
  initInternalAnchorScroll();

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
function initInternalAnchorScroll() {
  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest('a[href^="#"]');

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));

      if (!target) return;

      event.preventDefault();

      const header = document.querySelector("header");
      const headerOffset = (header?.offsetHeight || 72) + 24;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    },
    true,
  );
}
