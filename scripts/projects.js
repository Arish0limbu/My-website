export function initProjectFilters() {
  const buttons = [...document.querySelectorAll(".project-filters [data-filter]")];
  const cards = [...document.querySelectorAll(".project-card[data-category]")];
  const status = document.querySelector("#project-status");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      let visibleCount = 0;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      cards.forEach((card) => {
        const visible = filter === "all" || card.dataset.category === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (status) {
        status.textContent = filter === "all"
          ? "Showing all " + visibleCount + " projects."
          : "Showing " + visibleCount + " " + filter + " " + (visibleCount === 1 ? "project." : "projects.");
      }
    });
  });
}
