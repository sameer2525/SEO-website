/* =========================================================
   SAMEER DIGITAL MARKETING PORTFOLIO
   NAVBAR + MOBILE MENU + 3D + GSAP
   ========================================================== */

"use strict";


/* =========================================================
   DOM READY
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const body =
        document.body;

    const siteHeader =
        document.getElementById("siteHeader");

    const megaNav =
        document.getElementById("megaNav");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const menuTrigger =
        document.getElementById("navMobileTrigger");

    const closeButton =
        document.getElementById("mobileCloseButton");

    const mobileLinks =
        document.querySelectorAll(".mobile-link");

    const magneticElements =
        document.querySelectorAll(".magnetic");

    const footerYear =
        document.getElementById("footerYear");


    /* =====================================================
       YEAR
    ====================================================== */

    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       CURRENT PAGE
    ====================================================== */

    const currentPage =
        (
            window.location.pathname
            .split("/")
            .pop() ||
            "index.html"
        ).toLowerCase();


    const navItems =
        document.querySelectorAll(
            ".nav-link, .mobile-link"
        );


    navItems.forEach((link) => {

        const href =
            link
                .getAttribute("href")
                .split("#")[0]
                .toLowerCase();


        const file =
            href
                .split("/")
                .pop();


        link.classList.remove(
            "active"
        );


        if (
            file === currentPage ||
            (
                currentPage === "" &&
                file === "index.html"
            )
        ) {

            link.classList.add(
                "active"
            );

            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });


    /* =====================================================
       MOBILE MENU HELPERS
    ====================================================== */

    let menuOpen = false;


    const openMenu = () => {

        if (menuOpen) {
            return;
        }

        menuOpen = true;

        body.classList.add(
            "menu-open"
        );


        menuTrigger?.setAttribute(
            "aria-expanded",
            "true"
        );


        menuTrigger?.setAttribute(
            "aria-label",
            "Close navigation menu"
        );


        mobileMenu?.setAttribute(
            "aria-hidden",
            "false"
        );


        /*
         * GSAP animation
         */

        if (
            window.gsap &&
            !window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            gsap.fromTo(

                mobileMenu,

                {
                    clipPath:
                        "inset(0 0 100% 0)"
                },

                {
                    clipPath:
                        "inset(0 0 0% 0)",

                    duration:
                        .68,

                    ease:
                        "power4.inOut"
                }

            );


            gsap.fromTo(

                ".mobile-menu-top",

                {
                    y:
                        -20,

                    opacity:
                        0
                },

                {
                    y:
                        0,

                    opacity:
                        1,

                    duration:
                        .55,

                    delay:
                        .16,

                    ease:
                        "power3.out"
                }

            );


            gsap.fromTo(

                ".mobile-link",

                {
                    y:
                        32,

                    opacity:
                        0
                },

                {
                    y:
                        0,

                    opacity:
                        1,

                    duration:
                        .62,

                    delay:
                        .16,

                    stagger:
                        .075,

                    ease:
                        "power4.out"
                }

            );


            gsap.fromTo(

                ".mobile-menu-bottom",

                {
                    y:
                        20,

                    opacity:
                        0
                },

                {
                    y:
                        0,

                    opacity:
                        1,

                    duration:
                        .5,

                    delay:
                        .58,

                    ease:
                        "power3.out"
                }

            );


            /*
             * Background 3D movement
             */

            gsap.fromTo(

                ".mobile-ring-one",

                {
                    rotationZ:
                        -35,

                    scale:
                        .80

                },

                {
                    rotationZ:
                        -18,

                    scale:
                        1,

                    duration:
                        1.4,

                    ease:
                        "power3.out"
                }

            );


            gsap.fromTo(

                ".mobile-ring-two",

                {
                    rotationZ:
                        -45,

                    scale:
                        .75

                },

                {
                    rotationZ:
                        -18,

                    scale:
                        1,

                    duration:
                        1.1,

                    delay:
                        .12,

                    ease:
                        "power3.out"
                }

            );

        }

    };


    const closeMenu = () => {

        if (!menuOpen) {
            return;
        }

        menuOpen = false;

        body.classList.remove(
            "menu-open"
        );


        menuTrigger?.setAttribute(
            "aria-expanded",
            "false"
        );


        menuTrigger?.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        mobileMenu?.setAttribute(
            "aria-hidden",
            "true"
        );

    };


    const toggleMenu = () => {

        if (menuOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    };


    /* =====================================================
       OPEN BUTTON
    ====================================================== */

    menuTrigger?.addEventListener(
        "click",
        toggleMenu
    );


    /* =====================================================
       CLOSE BUTTON
       Explicit close button
    ====================================================== */

    closeButton?.addEventListener(
        "click",
        closeMenu
    );


    /* =====================================================
       MOBILE LINK CLICK
    ====================================================== */

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                menuOpen
            ) {

                closeMenu();

                menuTrigger?.focus();

            }

        }
    );


    /* =====================================================
       BACKDROP CLICK
    ====================================================== */

    mobileMenu?.addEventListener(
        "click",
        (event) => {

            /*
             * Clicking the background area closes menu.
             * Clicking inside the actual content doesn't.
             */

            if (
                event.target === mobileMenu ||
                event.target.classList.contains(
                    "mobile-menu-bg"
                )
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       RESIZE SAFETY
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 991 &&
                menuOpen
            ) {

                closeMenu();

            }

        },
        {
            passive:
                true
        }
    );


    /* =====================================================
       SCROLLING NAVBAR
    ====================================================== */

    let lastScroll =
        window.scrollY;

    let ticking =
        false;


    const handleScroll = () => {

        const currentScroll =
            window.scrollY;


        /*
         * Compact navbar
         */

        if (siteHeader) {

            siteHeader.classList.toggle(
                "is-scrolled",
                currentScroll > 35
            );


            /*
             * Hide on downward scrolling
             */

            if (
                currentScroll > 180 &&
                currentScroll >
                lastScroll + 6 &&
                !menuOpen
            ) {

                siteHeader.classList.add(
                    "nav-hidden"
                );

            }


            /*
             * Reveal on upward scrolling
             */

            if (
                currentScroll <
                lastScroll - 6
            ) {

                siteHeader.classList.remove(
                    "nav-hidden"
                );

            }

        }


        lastScroll =
            currentScroll;

        ticking =
            false;

    };


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    handleScroll
                );

                ticking =
                    true;

            }

        },
        {
            passive:
                true
        }
    );


    /* =====================================================
       DESKTOP 3D NAVBAR
    ====================================================== */

    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (
        megaNav &&
        finePointer
    ) {

        let raf =
            null;


        megaNav.addEventListener(
            "pointermove",
            (event) => {

                if (raf) {

                    cancelAnimationFrame(
                        raf
                    );

                }


                raf =
                    requestAnimationFrame(
                        () => {

                            const rect =
                                megaNav.getBoundingClientRect();


                            const x =
                                (
                                    event.clientX -
                                    rect.left
                                ) /
                                rect.width;


                            const y =
                                (
                                    event.clientY -
                                    rect.top
                                ) /
                                rect.height;


                            const rotateY =
                                (x - .5) * 5;


                            const rotateX =
                                -(
                                    y - .5
                                ) * 3;


                            megaNav.style.transform =
                                `
                                rotateX(${rotateX}deg)
                                rotateY(${rotateY}deg)
                                translateZ(0)
                                `;

                        }
                    );

            }
        );


        megaNav.addEventListener(
            "pointerleave",
            () => {

                megaNav.style.transform =
                    `
                    rotateX(0deg)
                    rotateY(0deg)
                    translateZ(0)
                    `;

            }
        );

    }


    /* =====================================================
       MAGNETIC BUTTONS
    ====================================================== */

    if (
        finePointer &&
        window.gsap
    ) {

        magneticElements.forEach(
            (element) => {


                element.addEventListener(
                    "pointermove",
                    (event) => {

                        const rect =
                            element.getBoundingClientRect();


                        const x =
                            event.clientX -
                            (
                                rect.left +
                                rect.width / 2
                            );


                        const y =
                            event.clientY -
                            (
                                rect.top +
                                rect.height / 2
                            );


                        gsap.to(
                            element,
                            {
                                x:
                                    x * .12,

                                y:
                                    y * .15,

                                duration:
                                    .35,

                                ease:
                                    "power3.out",

                                overwrite:
                                    true

                            }
                        );

                    }
                );


                element.addEventListener(
                    "pointerleave",
                    () => {

                        gsap.to(
                            element,
                            {
                                x:
                                    0,

                                y:
                                    0,

                                duration:
                                    .7,

                                ease:
                                    "elastic.out(1,.45)"

                            }
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       CUSTOM CURSOR
    ====================================================== */

    if (finePointer) {

        const dot =
            document.createElement(
                "div"
            );

        const ring =
            document.createElement(
                "div"
            );


        dot.className =
            "cursor-dot";

        ring.className =
            "cursor-ring";


        body.appendChild(
            dot
        );

        body.appendChild(
            ring
        );


        let mouseX =
            window.innerWidth / 2;

        let mouseY =
            window.innerHeight / 2;

        let ringX =
            mouseX;

        let ringY =
            mouseY;


        document.addEventListener(
            "pointermove",
            (event) => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                dot.style.transform =
                    `
                    translate3d(
                        ${mouseX}px,
                        ${mouseY}px,
                        0
                    )
                    `;

                dot.style.opacity =
                    "1";

                ring.style.opacity =
                    "1";

            },
            {
                passive:
                    true
            }
        );


        const renderCursor =
            () => {

                ringX +=
                    (
                        mouseX -
                        ringX
                    ) * .13;

                ringY +=
                    (
                        mouseY -
                        ringY
                    ) * .13;


                ring.style.transform =
                    `
                    translate3d(
                        ${ringX}px,
                        ${ringY}px,
                        0
                    )
                    `;


                requestAnimationFrame(
                    renderCursor
                );

            };


        renderCursor();


        document
            .querySelectorAll(
                "a, button"
            )
            .forEach(
                (element) => {

                    element.addEventListener(
                        "mouseenter",
                        () => {

                            body.classList.add(
                                "cursor-active"
                            );

                        }
                    );


                    element.addEventListener(
                        "mouseleave",
                        () => {

                            body.classList.remove(
                                "cursor-active"
                            );

                        }
                    );

                }
            );

    }


    /* =====================================================
       GSAP
    ====================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        window.gsap &&
        !reducedMotion
    ) {

        gsap.registerPlugin(
            ScrollTrigger
        );


        /* -----------------------------------------------
           NAVBAR ENTRANCE
        ------------------------------------------------ */

        gsap.fromTo(

            ".mega-nav",

            {
                y:
                    -45,

                opacity:
                    0,

                rotateX:
                    8

            },

            {
                y:
                    0,

                opacity:
                    1,

                rotateX:
                    0,

                duration:
                    1.05,

                delay:
                    .1,

                ease:
                    "power4.out"

            }

        );


        /* -----------------------------------------------
           FOOTER REVEAL
        ------------------------------------------------ */

        const footerElements =
            document.querySelectorAll(
                ".footer-eyebrow, .footer-title, .footer-copy, .footer-main-cta"
            );


        if (footerElements.length) {

            gsap.fromTo(

                footerElements,

                {
                    y:
                        50,

                    opacity:
                        0

                },

                {
                    y:
                        0,

                    opacity:
                        1,

                    duration:
                        .9,

                    stagger:
                        .1,

                    ease:
                        "power4.out",

                    scrollTrigger:
                    {
                        trigger:
                            ".site-footer",

                        start:
                            "top 82%"

                    }

                }

            );

        }


        /* -----------------------------------------------
           FOOTER CONTENT STAGGER
        ------------------------------------------------ */

        gsap.fromTo(

            ".footer-column, .footer-brand-column",

            {
                y:
                    35,

                opacity:
                    0

            },

            {
                y:
                    0,

                opacity:
                    1,

                duration:
                    .75,

                stagger:
                    .07,

                ease:
                    "power3.out",

                scrollTrigger:
                {
                    trigger:
                        ".footer-content",

                    start:
                        "top 90%"

                }

            }

        );


        /* -----------------------------------------------
           FOOTER ORBIT ROTATION
        ------------------------------------------------ */

        gsap.to(

            ".orbit-one",

            {
                rotationZ:
                    342,

                duration:
                    24,

                repeat:
                    -1,

                ease:
                    "none"

            }

        );


        gsap.to(

            ".orbit-two",

            {
                rotationZ:
                    342,

                duration:
                    17,

                repeat:
                    -1,

                ease:
                    "none"

            }

        );

    }


    /* =====================================================
       MOBILE TOUCH FEEDBACK
       ====================================================== */

    mobileLinks.forEach(
        (link) => {

            link.addEventListener(
                "touchstart",
                () => {

                    link.style.transform =
                        "translateX(5px)";

                },
                {
                    passive:
                        true
                }
            );


            link.addEventListener(
                "touchend",
                () => {

                    link.style.transform =
                        "translateX(0)";

                },
                {
                    passive:
                        true
                }
            );

        }
    );


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    const topButton =
        document.querySelector(
            ".footer-top-link"
        );


    topButton?.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            window.scrollTo({
                top:
                    0,

                behavior:
                    reducedMotion
                        ? "auto"
                        : "smooth"
            });

        }
    );


    /* =====================================================
       PAGE VISIBILITY SAFETY
    ====================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden &&
                menuOpen
            ) {

                closeMenu();

            }

        }
    );

});


// footer start////

/* =========================================================
   HOME HERO INTERACTIONS
========================================================= */
/* ==========================================================
   DIGITAL GROWTH STUDIO — HOMEPAGE INTERACTIONS
   No additional JavaScript libraries required.
========================================================== */

(() => {
    "use strict";

    const initDigitalHome = () => {
        const home = document.querySelector(".dg-home");

        if (!home || home.dataset.dgInitialised === "true") return;

        home.dataset.dgInitialised = "true";

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


        /* ==================================================
           01 — ROTATING HERO WORD
        ================================================== */

        const heroWord = home.querySelector("#dgHeroWord");

        if (heroWord && !reducedMotion) {
            const words = [
                "GROWTH.",
                "VISIBILITY.",
                "MOMENTUM.",
                "CONNECTION."
            ];

            let index = 0;

            window.setInterval(() => {
                index = (index + 1) % words.length;

                heroWord.classList.remove("dg-word-changing");
                heroWord.textContent = words[index];

                // Restart the entry animation.
                void heroWord.offsetWidth;

                heroWord.classList.add("dg-word-changing");
            }, 2600);
        }


        /* ==================================================
           02 — RESPONSIVE 3D HERO
        ================================================== */

        const stage = home.querySelector("#dgHeroStage");
        const scene = home.querySelector("#dgHeroScene");

        const finePointer = window.matchMedia(
            "(pointer: fine)"
        ).matches;

        if (stage && scene && finePointer && !reducedMotion) {
            let rafId = null;

            let targetX = 0;
            let targetY = 0;

            const onPointerMove = (event) => {
                const rect = stage.getBoundingClientRect();

                if (rect.width === 0 || rect.height === 0) return;

                const x =
                    (event.clientX - rect.left) / rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) / rect.height - 0.5;

                targetX = x * 5;
                targetY = y * -4;

                if (rafId !== null) return;

                rafId = window.requestAnimationFrame(() => {
                    scene.style.transform =
                        `rotateY(${targetX}deg) rotateX(${targetY}deg)`;

                    rafId = null;
                });
            };

            stage.addEventListener("pointermove", onPointerMove, {
                passive: true
            });

            stage.addEventListener("pointerleave", () => {
                scene.style.transform = "rotateY(0deg) rotateX(0deg)";
            });
        }


        /* ==================================================
           03 — REVEAL ON SCROLL
        ================================================== */

        const revealItems = [
            ...home.querySelectorAll("[data-reveal]")
        ];

        const canObserve = "IntersectionObserver" in window;

        if (!reducedMotion && canObserve) {
            home.classList.add("dg-motion-ready");

            const observer = new IntersectionObserver(
                (entries, currentObserver) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        entry.target.classList.add("dg-revealed");

                        // Trigger graphics when their card enters the viewport.
                        entry.target
                            .querySelectorAll(".dg-chart-path")
                            .forEach((path) => {
                                path.style.animationPlayState = "running";
                            });

                        currentObserver.unobserve(entry.target);
                    });
                },
                {
                    root: null,
                    threshold: 0.12,
                    rootMargin: "0px 0px -35px 0px"
                }
            );

            revealItems.forEach((item, index) => {
                if (
                    item.matches(
                        ".dg-specialism-card, .dg-creative-card, .dg-work-card"
                    )
                ) {
                    item.style.transitionDelay = `${(index % 3) * 70}ms`;
                }

                observer.observe(item);
            });
        } else {
            // Safe fallback: content remains visible without scroll scripting.
            revealItems.forEach((item) => {
                item.classList.add("dg-revealed");
            });
        }


        /* ==================================================
           04 — GROWTH LAB INTERACTION
        ================================================== */

        const tabs = [
            ...home.querySelectorAll(".dg-lab-tab")
        ];

        const scenes = [
            ...home.querySelectorAll(".dg-lab-scene")
        ];

        const display = home.querySelector("#dgLabDisplay");

        const labCode = home.querySelector("#dgLabCode");
        const labEyebrow = home.querySelector("#dgLabEyebrow");
        const labTitle = home.querySelector("#dgLabTitle");
        const labText = home.querySelector("#dgLabText");

        const labContent = {
            seo: {
                code: "SYSTEM / 001",
                eyebrow: "01 / DISCOVERABILITY",
                title: "Help the right people find you.",
                text:
                    "Build around search intent, technical foundations, " +
                    "relevant content and a clear internal structure."
            },

            performance: {
                code: "SYSTEM / 002",
                eyebrow: "02 / ACQUISITION",
                title: "Put the message in motion.",
                text:
                    "Plan campaigns around relevant audiences, clear " +
                    "objectives, creative testing and ongoing optimisation."
            },

            social: {
                code: "SYSTEM / 003",
                eyebrow: "03 / BRAND PRESENCE",
                title: "Give your brand a recognisable voice.",
                text:
                    "Create a consistent presence through thoughtful " +
                    "content, visual direction and audience-focused communication."
            }
        };

        let activeTab = "seo";

        const activateLabTab = (tab) => {
            const type = tab.dataset.lab;
            const data = labContent[type];

            if (!data || type === activeTab) return;

            activeTab = type;

            tabs.forEach((item) => {
                const active = item === tab;

                item.classList.toggle("active", active);
                item.setAttribute("aria-selected", String(active));
            });

            scenes.forEach((sceneItem) => {
                const isSceneActive =
                    sceneItem.classList.contains(`dg-lab-scene-${type}`);

                sceneItem.hidden = !isSceneActive;
                sceneItem.classList.toggle("dg-scene-active", isSceneActive);
            });

            if (labCode) labCode.textContent = data.code;
            if (labEyebrow) labEyebrow.textContent = data.eyebrow;
            if (labTitle) labTitle.textContent = data.title;
            if (labText) labText.textContent = data.text;

            if (display && !reducedMotion) {
                display.classList.remove("dg-lab-changing");

                // Re-run the transition on the description.
                void display.offsetWidth;

                display.classList.add("dg-lab-changing");
            }
        };

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                activateLabTab(tab);
            });
        });


        /* ==================================================
           05 — PROCESS LINE REVEAL
        ================================================== */

        const processLine = home.querySelector(".dg-process-line");

        if (processLine && "IntersectionObserver" in window) {
            const lineObserver = new IntersectionObserver(
                (entries, currentObserver) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        processLine.classList.add("dg-line-visible");
                        currentObserver.unobserve(entry.target);
                    });
                },
                {
                    threshold: 0.2
                }
            );

            lineObserver.observe(processLine);
        }


        /* ==================================================
           06 — HERO IMAGE STATUS
        ================================================== */

        const portrait = home.querySelector(".dg-portrait img");

        if (portrait) {
            portrait.addEventListener("error", () => {
                console.warn(
                    "Homepage portrait could not load. Check:",
                    portrait.getAttribute("src")
                );
            }, { once: true });
        }


        /* ==================================================
           07 — PAUSE MOTION WHEN TAB IS HIDDEN
        ================================================== */

        document.addEventListener("visibilitychange", () => {
            home.classList.toggle(
                "dg-page-hidden",
                document.hidden
            );
        });


        /* ==================================================
           08 — REDUCED MOTION
        ================================================== */

        if (reducedMotion) {
            home.querySelectorAll("[data-reveal]").forEach((item) => {
                item.classList.add("dg-revealed");
            });
        }
    };


    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDigitalHome, {
            once: true
        });
    } else {
        initDigitalHome();
    }

})();