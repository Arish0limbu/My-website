export function initScrollTools() {
  const progress = document.querySelector("#reading-progress-bar");
  const backToTop = document.querySelector("#back-to-top");
  if (!progress) return;

  let queued = false;
  function update() {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const percent = range > 0 ? Math.min(100, Math.max(0, window.scrollY / range * 100)) : 0;
    progress.style.transform = "scaleX(" + percent / 100 + ")";
    if (backToTop) backToTop.hidden = window.scrollY < 420;
    queued = false;
  }
  function onScroll() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  backToTop?.addEventListener("click", () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });
  update();
}
