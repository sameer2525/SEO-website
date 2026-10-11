/* =========================================================
   SAMEER PORTFOLIO LOADER
   5 SECOND — EVERYTHING VISIBLE FROM FIRST FRAME
   ========================================================= */

(function () {

    "use strict";


    const loader = document.getElementById("sameerLoader");

    if (!loader) {
        document.body.classList.remove("loader-active");
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        return;
    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    const TOTAL_TIME = 35000;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const progressBar =
        document.getElementById("loaderProgressBar");

    const progressText =
        document.getElementById("loaderProgressText");

    const revealLeft =
        loader.querySelector(".loader-reveal-left");

    const revealRight =
        loader.querySelector(".loader-reveal-right");

    const processItems =
        loader.querySelectorAll(".loader-process-item");

    const processNumber =
        loader.querySelector(".loader-process-current");

    const processStatus =
        loader.querySelector(".loader-status span:last-child");


    /* =====================================================
       KEEP LOADER ON SCREEN
    ===================================================== */

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    loader.style.setProperty(
        "display",
        "block",
        "important"
    );

    loader.style.setProperty(
        "opacity",
        "1",
        "important"
    );

    loader.style.setProperty(
        "visibility",
        "visible",
        "important"
    );


    /* =====================================================
       PROCESS TEXT
    ===================================================== */

    const steps = [
        {
            number: "01 / 05",
            text: "INITIALISING DIGITAL EXPERIENCE"
        },
        {
            number: "02 / 05",
            text: "UNDERSTANDING THE BRAND"
        },
        {
            number: "03 / 05",
            text: "OPTIMISING DIGITAL GROWTH"
        },
        {
            number: "04 / 05",
            text: "CRAFTING THE EXPERIENCE"
        },
        {
            number: "05 / 05",
            text: "LAUNCHING THE EXPERIENCE"
        }
    ];


    function updateStep(index) {

        processItems.forEach(function (item, i) {

            item.classList.toggle(
                "active",
                i === index
            );

        });

        if (processNumber && steps[index]) {
            processNumber.textContent =
                steps[index].number;
        }

        if (processStatus && steps[index]) {
            processStatus.textContent =
                steps[index].text;
        }

    }


    /* =====================================================
       FIRST FRAME
       EVERYTHING READY
    ===================================================== */

    updateStep(0);

    if (progressText) {
        progressText.textContent = "00";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }


    /* =====================================================
       PROGRESS 0 → 100
    ===================================================== */

    const startTime = performance.now();


    function animateLoader(now) {

        const elapsed =
            now - startTime;

        const percentage =
            Math.min(
                100,
                (elapsed / TOTAL_TIME) * 100
            );


        /* Progress number */

        if (progressText) {

            progressText.textContent =
                String(
                    Math.round(percentage)
                ).padStart(2, "0");

        }


        /* Progress bar */

        if (progressBar) {

            progressBar.style.width =
                percentage + "%";

        }


        /* =================================================
           CHANGE PROCESS EVERY 20%
        ================================================= */

        if (percentage < 20) {

            updateStep(0);

        } else if (percentage < 40) {

            updateStep(1);

        } else if (percentage < 60) {

            updateStep(2);

        } else if (percentage < 80) {

            updateStep(3);

        } else {

            updateStep(4);

        }


        if (elapsed < TOTAL_TIME) {

            requestAnimationFrame(animateLoader);

        }

    }


    requestAnimationFrame(animateLoader);


    /* =====================================================
       AFTER 5 SECONDS
    ===================================================== */

    setTimeout(function () {

        /* Ensure 100% */

        if (progressBar) {
            progressBar.style.width = "100%";
        }

        if (progressText) {
            progressText.textContent = "100";
        }

        updateStep(4);


        /* =================================================
           CINEMATIC SPLIT
        ================================================= */

        const animationOptions = {
            duration: 750,
            easing: "cubic-bezier(.77,0,.18,1)",
            fill: "forwards"
        };


        if (revealLeft) {

            revealLeft.animate(
                [
                    {
                        transform: "translateX(-100%)"
                    },
                    {
                        transform: "translateX(0%)"
                    },
                    {
                        offset: 0.7,
                        transform: "translateX(0%)"
                    },
                    {
                        transform: "translateX(-100%)"
                    }
                ],
                animationOptions
            );

        }


        if (revealRight) {

            revealRight.animate(
                [
                    {
                        transform: "translateX(100%)"
                    },
                    {
                        transform: "translateX(0%)"
                    },
                    {
                        offset: 0.7,
                        transform: "translateX(0%)"
                    },
                    {
                        transform: "translateX(100%)"
                    }
                ],
                animationOptions
            );

        }


        /* =================================================
           REMOVE AFTER REVEAL
        ================================================= */

        setTimeout(function () {

            loader.remove();

            document.body.classList.remove(
                "loader-active"
            );

            document.documentElement.style.overflow =
                "";

            document.body.style.overflow =
                "";


            window.dispatchEvent(
                new CustomEvent(
                    "portfolioLoaderComplete"
                )
            );


        }, 780);


    }, TOTAL_TIME);


})();