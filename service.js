
/* ==========================================
   SERVICE PAGE — INTERACTIONS
========================================== */

(() => {
  "use strict";

  const page = document.querySelector(".sv-page");

  if (!page) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* ----------------------------------------
     1. SERVICE FILTERS
  ---------------------------------------- */

  const filterButtons = page.querySelectorAll(".sv-filter");
  const serviceCards = page.querySelectorAll(".sv-card");
  const filterStatus = page.querySelector(".sv-filter-status");

  const filterMessages = {
    all: "Showing all six service areas.",
    growth: "Showing growth-focused services.",
    marketing: "Showing marketing services.",
    creative: "Showing graphic design and video editing services.",
    web: "Showing website and web-related services."
  };

  function applyFilter(filter) {
    serviceCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(/\s+/);
      const matches = filter === "all" || categories.includes(filter);

      card.hidden = !matches;

      if (!matches) {
        card.querySelectorAll("details[open]").forEach((details) => {
          details.open = false;
        });
      }
    });

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;

      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (filterStatus) {
      filterStatus.textContent =
        filterMessages[filter] || filterMessages.all;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.filter || "all");
    });
  });


  /* ----------------------------------------
     2. SCROLL REVEAL ANIMATIONS
  ---------------------------------------- */

  const revealElements = page.querySelectorAll(".sv-reveal");
  const processSection = page.querySelector(".sv-process");

  if (!reduceMotion && "IntersectionObserver" in window) {
    document.body.classList.add("sv-motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    if (processSection) {
      const processObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            processSection.classList.add("is-visible");
            observer.disconnect();
          });
        },
        {
          threshold: 0.15
        }
      );

      processObserver.observe(processSection);
    }
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

    if (processSection) {
      processSection.classList.add("is-visible");
    }
  }


  /* ----------------------------------------
     3. PAUSE DECORATIVE MOTION
        WHEN THE BROWSER TAB IS HIDDEN
  ---------------------------------------- */

  function updateVisibility() {
    page.classList.toggle("sv-page-hidden", document.hidden);
  }

  document.addEventListener("visibilitychange", updateVisibility);
  updateVisibility();


  /* ----------------------------------------
     4. SERVICE-TO-CONTACT LINKS
        ?service=seo, ?service=paid-ads etc.
  ---------------------------------------- */

  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");

  const serviceFilters = {
    seo: "growth",
    "paid-ads": "marketing",
    "social-media": "marketing",
    website: "web",
    "graphic-design": "creative",
    "video-editing": "creative"
  };

  if (requestedService && serviceFilters[requestedService]) {
    applyFilter(serviceFilters[requestedService]);
  }


  /* ----------------------------------------
     5. MOBILE-FRIENDLY FAQ BEHAVIOUR
        Native details elements already work
        with touch and keyboard.
  ---------------------------------------- */

  const faqItems = page.querySelectorAll(".sv-faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      // Keep answers independent: visitors may open
      // more than one FAQ at a time.
      item.setAttribute("aria-expanded", "true");
    });
  });


  /* ----------------------------------------
     6. OPTIONAL SUBTLE POINTER EFFECT
        Desktop pointer devices only.
  ---------------------------------------- */

  const heroVisual = page.querySelector(".sv-hero-visual");

  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  if (heroVisual && finePointer && !reduceMotion) {
    heroVisual.addEventListener("pointermove", (event) => {
      const rect = heroVisual.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroVisual.style.setProperty("--sv-pointer-x", `${x * 3}px`);
      heroVisual.style.setProperty("--sv-pointer-y", `${y * 3}px`);
    });

    heroVisual.addEventListener("pointerleave", () => {
      heroVisual.style.setProperty("--sv-pointer-x", "0px");
      heroVisual.style.setProperty("--sv-pointer-y", "0px");
    });
  }

})();
