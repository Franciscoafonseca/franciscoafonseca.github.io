import { initTheme } from "./theme.js";
import { initLanguage } from "./language.js";
import { initTimeline } from "./timeline.js";
import { initPosters } from "./posters.js";
import { initScrollReveal } from "./effects.js";
import { initProjects } from "./projects.js";

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

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
