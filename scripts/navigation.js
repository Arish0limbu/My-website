export function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  if (!toggle || !navigation) return;

  const mobile = window.matchMedia("(max-width: 680px)");
  const links = navigation.querySelectorAll("a");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    navigation.hidden = mobile.matches && !open;
    const label = toggle.querySelector(".menu-toggle-label");
    if (label) label.textContent = open ? "Close" : "Menu";
  }

  setOpen(false);
  mobile.addEventListener("change", () => setOpen(false));
  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}
