/* ============================================================
   SAMEER KEREKAR — ABOUT PAGE INTERACTIONS
   Vanilla JavaScript / no additional library.
============================================================ */

(() => {
    "use strict";

    function initAboutPage() {
        const page = document.querySelector(".about-page");

        if (!page || page.dataset.aboutInitialised === "true") {
            return;
        }

        page.dataset.aboutInitialised = "true";

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


        /* =====================================================
           01 — HERO PORTRAIT PARALLAX
        ===================================================== */

        const heroArt = page.querySelector("#abHeroArt");
        const heroScene = page.querySelector("#abHeroScene");

        const finePointer = window.matchMedia(
            "(pointer: fine)"
        ).matches;

        if (
            heroArt &&
            heroScene &&
            finePointer &&
            !reducedMotion
        ) {
            let rafId = null;
            let targetX = 0;
            let targetY = 0;

            heroArt.addEventListener(
                "pointermove",
                (event) => {
                    const rect = heroArt.getBoundingClientRect();

                    if (!rect.width || !rect.height) return;

                    const x =
                        (event.clientX - rect.left) / rect.width - 0.5;

                    const y =
                        (event.clientY - rect.top) / rect.height - 0.5;

                    targetX = x * 5;
                    targetY = y * -4;

                    if (rafId !== null) return;

                    rafId = requestAnimationFrame(() => {
                        heroScene.style.transform =
                            `rotateY(${targetX}deg) rotateX(${targetY}deg)`;

                        rafId = null;
                    });
                },
                { passive: true }
            );

            heroArt.addEventListener("pointerleave", () => {
                heroScene.style.transform =
                    "rotateY(0deg) rotateX(0deg)";
            });
        }


        /* =====================================================
           02 — SCROLL REVEALS
        ===================================================== */

        const revealItems = [
            ...page.querySelectorAll("[data-reveal]")
        ];

        if (
            !reducedMotion &&
            "IntersectionObserver" in window
        ) {
            page.classList.add("ab-motion-ready");

            const revealObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        entry.target.classList.add("ab-revealed");

                        observer.unobserve(entry.target);
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -30px 0px"
                }
            );

            revealItems.forEach((item, index) => {
                if (
                    item.matches(
                        ".ab-job, .ab-edu-card, .ab-cert-card, " +
                        ".ab-tool-group, .ab-principle"
                    )
                ) {
                    item.style.transitionDelay =
                        `${(index % 3) * 65}ms`;
                }

                revealObserver.observe(item);
            });
        } else {
            revealItems.forEach((item) => {
                item.classList.add("ab-revealed");
            });
        }


        /* =====================================================
           03 — ANIMATED TIMELINES
        ===================================================== */

        const trackSelectors = [
            ".ab-timeline-track",
            ".ab-education-track"
        ];

        if ("IntersectionObserver" in window && !reducedMotion) {
            const trackObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        entry.target.classList.add("ab-track-visible");
                        observer.unobserve(entry.target);
                    });
                },
                {
                    threshold: 0.18
                }
            );

            trackSelectors.forEach((selector) => {
                const track = page.querySelector(selector);

                if (track) {
                    trackObserver.observe(track);
                }
            });
        } else {
            trackSelectors.forEach((selector) => {
                page.querySelector(selector)
                    ?.classList.add("ab-track-visible");
            });
        }


        /* =====================================================
           04 — EXPERIENCE DETAILS ACCORDION
        ===================================================== */

        const detailButtons = [
            ...page.querySelectorAll(".ab-details-toggle")
        ];

        detailButtons.forEach((button) => {
            const job = button.closest(".ab-job");
            const details = job?.querySelector(".ab-job-details");

            if (!details) return;

            const icon = button.querySelector("i");

            // Respect the initial HTML accessibility state.
            const initiallyExpanded =
                button.getAttribute("aria-expanded") === "true";

            details.hidden = !initiallyExpanded;

            if (icon) {
                icon.className = initiallyExpanded
                    ? "bi bi-dash"
                    : "bi bi-plus";
            }

            button.addEventListener("click", () => {
                const isExpanded =
                    button.getAttribute("aria-expanded") === "true";

                const nextState = !isExpanded;

                button.setAttribute(
                    "aria-expanded",
                    String(nextState)
                );

                details.hidden = !nextState;

                if (icon) {
                    icon.className = nextState
                        ? "bi bi-dash"
                        : "bi bi-plus";
                }
            });
        });


        /* =====================================================
           05 — INTERACTIVE SKILLS
        ===================================================== */

        const skillTabs = [
            ...page.querySelectorAll(".ab-skill-tab")
        ];

        const skillScenes = [
            ...page.querySelectorAll(".ab-skill-art")
        ];

        const skillDisplay = page.querySelector(".ab-skill-display");

        const skillCode = page.querySelector("#abSkillCode");
        const skillEyebrow = page.querySelector("#abSkillEyebrow");
        const skillTitle = page.querySelector("#abSkillTitle");
        const skillText = page.querySelector("#abSkillText");
        const skillTools = page.querySelector("#abSkillTools");

        const skillDetails = {
            seo: {
                code: "DISCIPLINE / 001",
                eyebrow: "ORGANIC VISIBILITY",
                title: "Search with intent.",
                text:
                    "Keyword research, technical SEO, on-page optimisation, " +
                    "competitor analysis, content optimisation and internal linking.",
                tools: [
                    "GOOGLE SEARCH CONSOLE",
                    "GA4",
                    "SEMRUSH"
                ]
            },

            performance: {
                code: "DISCIPLINE / 002",
                eyebrow: "PAID ACQUISITION",
                title: "Plan. Test. Optimise.",
                text:
                    "Campaign planning, Google Ads, Meta Ads, audience targeting, " +
                    "performance analysis and iterative campaign optimisation.",
                tools: [
                    "GOOGLE ADS",
                    "META ADS MANAGER",
                    "CAMPAIGN ANALYSIS"
                ]
            },

            social: {
                code: "DISCIPLINE / 003",
                eyebrow: "CONTENT & PRESENCE",
                title: "Give the brand a voice.",
                text:
                    "Social media handling, content calendars, marketing creatives, " +
                    "community engagement and brand consistency.",
                tools: [
                    "CONTENT PLANNING",
                    "SOCIAL MEDIA",
                    "CREATIVE EXECUTION"
                ]
            },

            creative: {
                code: "DISCIPLINE / 004",
                eyebrow: "WEB & CREATIVE EXECUTION",
                title: "Bring the idea to life.",
                text:
                    "WordPress website management, landing pages, web fundamentals, " +
                    "graphic design, video editing and digital content creation.",
                tools: [
                    "WORDPRESS",
                    "HTML / CSS / JS",
                    "CANVA",
                    "PHOTOSHOP"
                ]
            }
        };

        let activeSkill = "seo";

        function activateSkill(tab) {
            const type = tab.dataset.skill;
            const info = skillDetails[type];

            if (!info || type === activeSkill) return;

            activeSkill = type;

            skillTabs.forEach((item) => {
                const isActive = item === tab;

                item.classList.toggle("active", isActive);
                item.setAttribute(
                    "aria-selected",
                    String(isActive)
                );
            });

            skillScenes.forEach((scene) => {
                const sceneActive =
                    scene.classList.contains(`ab-skill-art-${type}`);

                scene.hidden = !sceneActive;
            });

            if (skillCode) {
                skillCode.textContent = info.code;
            }

            if (skillEyebrow) {
                skillEyebrow.textContent = info.eyebrow;
            }

            if (skillTitle) {
                skillTitle.textContent = info.title;
            }

            if (skillText) {
                skillText.textContent = info.text;
            }

            if (skillTools) {
                // Only our authored text is inserted; no HTML from user input.
                skillTools.replaceChildren();

                info.tools.forEach((toolName) => {
                    const pill = document.createElement("span");
                    pill.textContent = toolName;
                    skillTools.appendChild(pill);
                });
            }

            if (skillDisplay && !reducedMotion) {
                skillDisplay.classList.remove("ab-skill-changing");

                // Re-trigger the short description transition.
                void skillDisplay.offsetWidth;

                skillDisplay.classList.add("ab-skill-changing");
            }
        }

        skillTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                activateSkill(tab);
            });
        });


        /* =====================================================
           06 — CERTIFICATE IMAGE FALLBACK
           Add image files under:
           assets/images/certificates/
        ===================================================== */

        const certificateImages = [
            ...page.querySelectorAll(".ab-cert-media img")
        ];

        certificateImages.forEach((img) => {
            const wrapper = img.closest(".ab-cert-media");

            if (!wrapper) return;

            const showImage = () => {
                wrapper.classList.add("has-image");
            };

            const showFallback = () => {
                wrapper.classList.remove("has-image");
            };

            img.addEventListener("load", showImage, { once: true });
            img.addEventListener("error", showFallback, { once: true });

            // Deal with cached images or paths that are already unavailable.
            if (img.complete) {
                if (img.naturalWidth > 0) {
                    showImage();
                } else {
                    showFallback();
                }
            }
        });


        /* =====================================================
           07 — PAUSE ANIMATIONS WHEN THE TAB IS HIDDEN
        ===================================================== */

        const handleVisibility = () => {
            page.classList.toggle(
                "ab-page-hidden",
                document.hidden
            );
        };

        document.addEventListener("visibilitychange", handleVisibility);


        /* =====================================================
           08 — REDUCED MOTION
        ===================================================== */

        if (reducedMotion) {
            page.querySelectorAll("[data-reveal]").forEach((item) => {
                item.classList.add("ab-revealed");
            });
        }

    }


    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAboutPage, {
            once: true
        });
    } else {
        initAboutPage();
    }

})();