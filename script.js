document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".v3-nav-toggle");
  const nav = document.querySelector(".v3-nav");
  if (!navToggle || !nav) {
    return;
  }

  const updateToggleState = (isOpen) => {
    navToggle.classList.toggle("open", isOpen);
    nav.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };

  navToggle.addEventListener("click", () => {
    updateToggleState(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        updateToggleState(false);
      }
    });
  });
});
