const STORAGE_KEY = "arish-portfolio-theme";

export function initTheme() {
  const toggle = document.querySelector("#theme-toggle");
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // The site still works when browser storage is disabled.
  }

  function applyTheme(theme) {
    const dark = theme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    if (toggle) {
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      const icon = toggle.querySelector("[aria-hidden='true']");
      if (icon) icon.textContent = dark ? "☼" : "◐";
    }
    const color = document.querySelector('meta[name="theme-color"]');
    if (color) color.content = dark ? "#10201e" : "#f5f2ea";
  }

  applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : (media.matches ? "dark" : "light"));
  toggle?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Theme switching remains available for this page view.
    }
  });
}
