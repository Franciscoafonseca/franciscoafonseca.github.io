import { initTheme } from "./theme.js";
import { initLanguage } from "./language.js";
import { initTimeline } from "./timeline.js";
import { initPosters } from "./posters.js";
import { initScrollReveal } from "./effects.js";
import { initProjects } from "./projects.js";
import { initSkills } from "./skills.js";
import { initHero } from "./hero.js";

function initInternalAnchorScroll() {
  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest('a[href^="#"]');

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();

      const header = document.querySelector("header");
      const headerOffset = (header?.offsetHeight || 72) + 34;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });

      history.pushState(null, "", href);
    },
    true,
  );
}

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
    initHero();
  } catch (error) {
    console.error("Erro em initHero:", error);
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
    initProjects();
  } catch (error) {
    console.error("Erro em initProjects:", error);
  }

  try {
    initScrollReveal();
  } catch (error) {
    console.error("Erro em initScrollReveal:", error);
  }

  initInternalAnchorScroll();

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
