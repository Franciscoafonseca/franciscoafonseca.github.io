import { projects } from "./projects.js";

export function initHero() {
  initProjectCounter();
}

function initProjectCounter() {
  const counter = document.querySelector("[data-project-count]");

  if (!counter) return;

  const totalProjects = Array.isArray(projects) ? projects.length : 0;

  animateCounter(counter, totalProjects);
}

function animateCounter(element, target) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    element.textContent = String(target);
    return;
  }

  const duration = 850;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(target * easedProgress);

    element.textContent = String(currentValue);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}
