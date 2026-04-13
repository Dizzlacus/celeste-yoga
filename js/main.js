// Celeste Hay — global scripts

(function () {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

(function () {
  const burger = document.getElementById("nav-burger");
  const mobileMenu = document.getElementById("nav-mobile-panel");
  const iconOpen = document.getElementById("icon-hamburger");
  const iconClose = document.getElementById("icon-close");
  if (!burger || !mobileMenu || !iconOpen || !iconClose) return;

  function openMenu() {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    iconOpen.classList.add("is-hidden");
    iconClose.classList.remove("is-hidden");
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    iconOpen.classList.remove("is-hidden");
    iconClose.classList.add("is-hidden");
  }

  burger.addEventListener("click", () => {
    mobileMenu.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
})();

(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

(function () {
  const card = document.getElementById("weds-card");
  const preview = document.getElementById("weds-preview");
  const panel = document.getElementById("weds-panel");
  const btn = document.getElementById("weds-toggle");
  const label = document.getElementById("weds-toggle-label");
  const chevron = document.getElementById("weds-chevron");
  if (!card || !preview || !panel || !btn) return;

  let isOpen = false;

  function setWedsOpen(open) {
    isOpen = open;
    btn.setAttribute("aria-expanded", String(open));
    card.classList.toggle("weds-open", open);
    preview.classList.toggle("hidden", open);

    if (open) {
      panel.classList.add("is-open");
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      requestAnimationFrame(() => {
        panel.classList.remove("is-open");
        panel.style.maxHeight = "0px";
      });
    }

    if (label) {
      label.textContent = open ? "Hide Wednesday schedule" : "View full Wednesday schedule";
    }
    if (chevron) {
      chevron.classList.toggle("rotate-180", open);
    }
  }

  panel.style.maxHeight = "0px";

  btn.addEventListener("click", () => {
    setWedsOpen(!isOpen);
  });
})();

(function () {
  const form = document.getElementById("contact-form");
  const block = document.getElementById("contact-form-block");
  const successEl = document.getElementById("contact-success");
  if (!form || !block || !successEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    block.classList.add("hidden");
    successEl.classList.remove("hidden");
    form.reset();
    window.setTimeout(() => {
      successEl.classList.add("hidden");
      block.classList.remove("hidden");
    }, 3000);
  });
})();
