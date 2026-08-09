/* =====================================
   MOBILE NAVIGATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navbar nav");

    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");
        menuButton.classList.toggle("active");

    });

    /* Close menu when a link is clicked */

    nav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

    /* Close menu if window becomes desktop size */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            nav.classList.remove("active");
            menuButton.classList.remove("active");

        }

    });

});