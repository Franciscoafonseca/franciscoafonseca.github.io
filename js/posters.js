import { initScrollReveal } from "./effects.js";
export function initPosters() {
  const posters = [
    { file: "almeirim.jpeg", title: "Poster de Padel 2" },
    { file: "masters.jpeg", title: "Poster de Padel 1" },
    { file: "mimosa.jpeg", title: "Poster de Padel 4" },
    { file: "oeiras.jpeg", title: "Poster de Padel 1" },
    { file: "primeiro.jpeg", title: "Poster de Padel 4" },
    { file: "santarem.jpeg", title: "Poster de Padel 5" },
    { file: "tirso.jpeg", title: "Poster de Padel 3" },
  ];

  const track = document.getElementById("posterTrack");
  const prevBtn = document.getElementById("posterPrevBtn");
  const nextBtn = document.getElementById("posterNextBtn");
  const lightbox = document.getElementById("posterLightbox");
  const lightboxImage = document.getElementById("posterLightboxImage");
  const lightboxClose = document.getElementById("posterLightboxClose");
  const lightboxBackdrop = document.getElementById("posterLightboxBackdrop");
  const viewport = track?.parentElement;

  if (
    !track ||
    !viewport ||
    !prevBtn ||
    !nextBtn ||
    !lightbox ||
    !lightboxImage ||
    !lightboxClose ||
    !lightboxBackdrop
  ) {
    console.warn("Posters: faltam elementos no HTML.");
    return;
  }

  let currentStartIndex = 0;

  function createPosterItem(poster, index) {
    const item = document.createElement("article");
    item.className = `poster-item reveal-on-scroll reveal-delay-${(index % 3) + 1}`;

    item.innerHTML = `
    <div class="poster-item-thumb">
      <img src="assets/posters/${poster.file}" alt="${poster.title}" loading="lazy">
    </div>
    <div class="poster-item-info">
      <h3>${poster.title}</h3>
    </div>
  `;

    item.addEventListener("click", () => openLightbox(poster));
    return item;
  }
  function renderPosters() {
    track.innerHTML = "";
    posters.forEach((poster, index) => {
      track.appendChild(createPosterItem(poster, index));
    });

    initScrollReveal();
  }

  function getVisibleCount() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }

  function getMaxStartIndex() {
    return Math.max(0, posters.length - getVisibleCount());
  }

  function getStepSize() {
    const firstItem = track.querySelector(".poster-item");
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

    if (currentStartIndex > maxStartIndex) {
      currentStartIndex = maxStartIndex;
    }

    scrollToIndex(currentStartIndex, false);
  }

  function openLightbox(poster) {
    lightboxImage.src = `assets/posters/${poster.file}`;
    lightboxImage.alt = poster.title;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("poster-lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("poster-lightbox-open");

    setTimeout(() => {
      lightboxImage.src = "";
      lightboxImage.alt = "";
    }, 200);
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  window.addEventListener("resize", syncOnResize);

  renderPosters();
  syncOnResize();
}
