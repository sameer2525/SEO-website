
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".sk-portfolio");
  if (!root) return;

  /* =========================================
     CASE STUDY GALLERY
     Each project has its own three images.
     ========================================= */

  const modal = root.querySelector("#sk-gallery");
  const modalTitle = root.querySelector("#sk-gallery-title");
  const modalType = root.querySelector("#sk-gallery-type");
  const modalSummary = root.querySelector("#sk-gallery-summary");
  const modalImage = root.querySelector("#sk-gallery-image");
  const modalCount = root.querySelector("#sk-gallery-count");
  const modalThumbs = root.querySelector("#sk-gallery-thumbnails");
  const previousButton = root.querySelector(".sk-gallery-prev");
  const nextButton = root.querySelector(".sk-gallery-next");
  const closeButtons = root.querySelectorAll("[data-gallery-close]");

  let activeCase = null;
  let activeImageIndex = 0;
  let lastFocusedElement = null;

  function getCaseData(caseId) {
    const mainButton = root.querySelector(
      `.sk-case-open[data-case="${caseId}"]`
    );

    if (!mainButton) return null;

    const card = mainButton.closest(".sk-case-card");
    const mainImage = mainButton.querySelector(".sk-case-cover img");

    if (!card || !mainImage) return null;

    const supportingImages = [...card.querySelectorAll(".sk-thumb img")];

    const images = [mainImage, ...supportingImages]
      .map((img) => ({
        src: img.getAttribute("src"),
        alt: img.getAttribute("alt") || "Project image"
      }))
      .filter((img) => img.src);

    return {
      title: mainButton.dataset.title || "Project case study",
      category: mainButton.dataset.category || "PORTFOLIO",
      description: mainButton.dataset.description || "",
      images
    };
  }

  function renderGalleryImage() {
    if (!activeCase || !activeCase.images.length || !modalImage) return;

    const current = activeCase.images[activeImageIndex];

    modalImage.src = current.src;
    modalImage.alt = current.alt;

    if (modalTitle) modalTitle.textContent = activeCase.title;
    if (modalType) modalType.textContent = activeCase.category;
    if (modalSummary) modalSummary.textContent = activeCase.description;

    if (modalCount) {
      modalCount.textContent =
        `${String(activeImageIndex + 1).padStart(2, "0")} / ` +
        `${String(activeCase.images.length).padStart(2, "0")}`;
    }

    [...modalThumbs.children].forEach((button, index) => {
      const selected = index === activeImageIndex;

      button.classList.toggle("is-active", selected);

      if (selected) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }

  function openGallery(caseId, requestedIndex = 0) {
    if (!modal || !modalThumbs) return;

    const data = getCaseData(caseId);
    if (!data || !data.images.length) return;

    activeCase = data;
    activeImageIndex = Math.max(
      0,
      Math.min(requestedIndex, data.images.length - 1)
    );

    lastFocusedElement = document.activeElement;
    modalThumbs.replaceChildren();

    data.images.forEach((image, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sk-gallery-thumb";
      button.setAttribute(
        "aria-label",
        `Show image ${index + 1} of ${data.images.length}`
      );

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = "";

      button.appendChild(img);

      button.addEventListener("click", () => {
        activeImageIndex = index;
        renderGalleryImage();
      });

      modalThumbs.appendChild(button);
    });

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    renderGalleryImage();
    modal.querySelector(".sk-gallery-close")?.focus();
  }

  function closeGallery() {
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function moveGallery(direction) {
    if (!activeCase || activeCase.images.length < 2) return;

    const total = activeCase.images.length;
    activeImageIndex = (activeImageIndex + direction + total) % total;

    renderGalleryImage();
  }

  root.querySelectorAll(".sk-case-open").forEach((button) => {
    button.addEventListener("click", () => {
      openGallery(button.dataset.case, 0);
    });
  });

  root.querySelectorAll(".sk-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".sk-case-card");
      if (!card) return;

      const thumbnails = [...card.querySelectorAll(".sk-thumb")];
      const index = thumbnails.indexOf(button);

      // Gallery image 0 is the main cover. Thumbnails begin at image 1.
      openGallery(button.dataset.case, index + 1);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeGallery);
  });

  previousButton?.addEventListener("click", () => moveGallery(-1));
  nextButton?.addEventListener("click", () => moveGallery(1));

  document.addEventListener("keydown", (event) => {
    if (!modal?.classList.contains("is-open")) return;

    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") moveGallery(-1);
    if (event.key === "ArrowRight") moveGallery(1);
  });

  /* =========================================
     INTERACTIVE PROCESS / GROWTH LAB
     ========================================= */

  const processSteps = [
    {
      number: "01",
      symbol: "?",
      title: "Understand the challenge.",
      text: "Before choosing a tactic, I look at the goal, audience, current performance and the problem that needs solving.",
      tags: ["RESEARCH", "CONTEXT", "OBJECTIVES"]
    },
    {
      number: "02",
      symbol: "↗",
      title: "Find the right direction.",
      text: "I use research, audience intent and available data to choose a practical approach instead of relying on guesswork.",
      tags: ["STRATEGY", "PRIORITIES", "PLANNING"]
    },
    {
      number: "03",
      symbol: "✳",
      title: "Turn ideas into output.",
      text: "From optimisation and campaigns to creative content, I focus on implementing the plan carefully and consistently.",
      tags: ["EXECUTION", "DETAIL", "CONSISTENCY"]
    },
    {
      number: "04",
      symbol: "↻",
      title: "Learn. Refine. Repeat.",
      text: "I review the available evidence, identify what can improve and adjust the next steps based on what the data actually shows.",
      tags: ["MEASURE", "LEARN", "IMPROVE"]
    }
  ];

  const processButtons = root.querySelectorAll(".sk-process-step");
  const processNumber = root.querySelector("#sk-process-visual-number");
  const processSymbol = root.querySelector("#sk-process-visual-symbol");
  const processTitle = root.querySelector("#sk-process-output-title");
  const processText = root.querySelector("#sk-process-output-text");
  const processTags = root.querySelector("#sk-process-output-tags");
  const processVisual = root.querySelector("#sk-process-visual");

  function setProcessStep(index) {
    const step = processSteps[index];
    if (!step) return;

    processButtons.forEach((button, buttonIndex) => {
      const selected = buttonIndex === index;

      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    if (processNumber) processNumber.textContent = step.number;
    if (processSymbol) processSymbol.textContent = step.symbol;
    if (processTitle) processTitle.textContent = step.title;
    if (processText) processText.textContent = step.text;

    if (processTags) {
      processTags.replaceChildren();

      step.tags.forEach((tag) => {
        const chip = document.createElement("span");
        chip.textContent = tag;
        processTags.appendChild(chip);
      });
    }

    if (processVisual) {
      processVisual.classList.remove("sk-process-changing");
      void processVisual.offsetWidth;
      processVisual.classList.add("sk-process-changing");
    }
  }

  processButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setProcessStep(Number(button.dataset.step));
    });
  });

  setProcessStep(0);

  /* =========================================
     SCROLL REVEAL
     ========================================= */

  const revealElements = root.querySelectorAll(
    ".sk-social-card, .sk-web-card, .sk-graphic-card, .sk-video-card"
  );

  revealElements.forEach((element) => element.classList.add("sk-reveal"));

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sk-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("sk-visible"));
  }

  /* =========================================
     PLACEHOLDER LINKS
     Replace href="#" with actual project URLs.
     ========================================= */

  root.querySelectorAll("[data-link-needed]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });
  });

  /* =========================================
     SUBTLE HERO PORTRAIT PARALLAX
     ========================================= */

  const hero = root.querySelector(".sk-hero");
  const portrait = root.querySelector(".sk-portrait-wrap");

  if (
    hero &&
    portrait &&
    window.matchMedia("(pointer: fine)").matches &&
    !prefersReducedMotion
  ) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      portrait.style.translate = `${x * 8}px ${y * 6}px`;
    });

    hero.addEventListener("pointerleave", () => {
      portrait.style.translate = "";
    });
  }
});
