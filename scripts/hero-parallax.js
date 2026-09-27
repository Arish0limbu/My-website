export function initHeroParallax() {
  const art = document.querySelector(".hero-art");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (!art || reduced || coarse) return;

  let frame = 0;
  art.addEventListener("pointermove", (event) => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      const bounds = art.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      art.style.setProperty("--pointer-x", (x * 12).toFixed(1) + "px");
      art.style.setProperty("--pointer-y", (y * 10).toFixed(1) + "px");
      frame = 0;
    });
  }, { passive: true });
  art.addEventListener("pointerleave", () => {
    art.style.setProperty("--pointer-x", "0px");
    art.style.setProperty("--pointer-y", "0px");
  });
}
