import { initNavigation } from "./navigation.js";
import { initTheme } from "./theme.js";
import { initProjectFilters } from "./projects.js";

initNavigation();
initTheme();
initProjectFilters();

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
