const NAV_OPEN_CLASS = "open";
const ARIA_EXPANDED = "aria-expanded";

function initNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (!toggle || !navLinks) {
    console.warn("Navigation elements not found");
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle(NAV_OPEN_CLASS);
    toggle.setAttribute(ARIA_EXPANDED, String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove(NAV_OPEN_CLASS);
      toggle.setAttribute(ARIA_EXPANDED, "false");
    });
  });
}
