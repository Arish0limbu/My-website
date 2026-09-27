export function initReveal() {
  const targets = [...document.querySelectorAll("[data-reveal], .project-card")];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!targets.length) return;
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  document.documentElement.classList.add("has-motion");
  targets.forEach((target, index) => {
    if (target.classList.contains("project-card")) target.style.setProperty("--reveal-delay", Math.min(index, 4) * 90 + "ms");
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((target) => observer.observe(target));
}
