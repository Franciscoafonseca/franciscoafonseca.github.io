export function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// export function initHeroParallax() {
//   const hero = document.querySelector(".hero");
//   const heroContent = document.getElementById("heroContent");
//   const heroSoftLayer = document.querySelector(".hero-parallax-soft");

//   if (!hero || !heroContent || !heroSoftLayer) return;

//   function updateParallax() {
//     const rect = hero.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;

//     if (rect.bottom < 0 || rect.top > viewportHeight) return;

//     const contentOffset = rect.top * -0.08;
//     const softOffset = rect.top * -0.04;

//     heroContent.style.transform = `translateY(${contentOffset}px)`;
//     heroSoftLayer.style.transform = `translateY(${softOffset}px)`;
//   }

//   window.addEventListener("scroll", updateParallax, { passive: true });
//   window.addEventListener("resize", updateParallax);

//   updateParallax();
// }
