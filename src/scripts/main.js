// Alma — global scripts

(function () {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

(function () {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
  }).format(new Date());

  document.querySelectorAll("[data-starts-on]").forEach((el) => {
    const startsOn = el.getAttribute("data-starts-on");
    if (startsOn && startsOn < today) el.remove();
  });

  const empty = document.getElementById("events-empty");
  if (empty && !document.querySelector("section[data-starts-on]")) {
    empty.hidden = false;
  }
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
  const form = document.getElementById("contact-form");
  const block = document.getElementById("contact-form-block");
  const successEl = document.getElementById("contact-success");
  const errorEl = document.getElementById("contact-form-error");
  if (!form || !block || !successEl) return;

  function showError(message) {
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
  }

  function clearError() {
    if (!errorEl) return;
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }

  function setSuccessCopy(kind) {
    const titleEl = document.getElementById("contact-success-title");
    const bodyEl = document.getElementById("contact-success-body");
    if (!titleEl || !bodyEl) return;
    titleEl.textContent = successEl.getAttribute("data-title-" + kind) || "Thank you";
    bodyEl.textContent = successEl.getAttribute("data-body-" + kind) || "";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const endpoint = form.getAttribute("action");
    if (!endpoint) return;
    clearError();

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value.trim() !== "") {
      // Bots often fill hidden fields; silently drop.
      form.reset();
      return;
    }

    const message = form.querySelector("#message");
    const newsletter = form.querySelector("#newsletter");
    const subject = form.querySelector("#contact-subject");
    const hasMessage = Boolean(message && message.value.trim());
    const wantsNewsletter = Boolean(newsletter && newsletter.checked);

    if (!hasMessage && !wantsNewsletter) {
      showError("Add a message or tick the newsletter box.");
      return;
    }

    if (subject) {
      if (hasMessage && wantsNewsletter) {
        subject.value = "Alma website enquiry + newsletter";
      } else if (wantsNewsletter) {
        subject.value = "Alma newsletter signup";
      } else {
        subject.value = "Alma website enquiry";
      }
    }

    const successKind =
      hasMessage && wantsNewsletter ? "both" : wantsNewsletter ? "newsletter" : "message";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to send form");

      setSuccessCopy(successKind);
      block.classList.add("hidden");
      successEl.classList.remove("hidden");
      form.reset();
      window.setTimeout(() => {
        successEl.classList.add("hidden");
        block.classList.remove("hidden");
      }, 5000);
    } catch (error) {
      showError("Something went wrong. Please try again or email me directly.");
      console.error(error);
    }
  });
})();

(function () {
  const hero = document.getElementById("home");
  const heroImage = document.querySelector("#home picture img");
  if (!hero || !heroImage) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;

  const desktop = window.matchMedia("(min-width: 768px)");
  let ticking = false;

  function updateHeroParallax() {
    if (!desktop.matches) {
      heroImage.style.transform = "";
      ticking = false;
      return;
    }

    const sectionTop = hero.offsetTop;
    const sectionHeight = hero.offsetHeight;
    const delta = window.scrollY - sectionTop;

    // Keep the movement subtle and only while the hero is in view.
    // Scale from the bottom so translateY never uncovers the card above the photo.
    const inViewDelta = Math.max(0, Math.min(delta, sectionHeight));
    const offset = Math.min(inViewDelta * 0.18, 72);

    heroImage.style.transform =
      "translate3d(0," + offset.toFixed(2) + "px,0) scale(1.22)";
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHeroParallax);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateHeroParallax();
})();
