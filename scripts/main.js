import { initNavigation } from "./navigation.js";
import { initTheme } from "./theme.js";
import { initProjectFilters } from "./projects.js";
import { initReveal } from "./reveal.js";
import { initScrollTools } from "./scroll-tools.js";
import { initHeroParallax } from "./hero-parallax.js";

initNavigation();
initTheme();
initProjectFilters();
initReveal();
initScrollTools();
initHeroParallax();

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
