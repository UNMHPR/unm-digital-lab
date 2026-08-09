document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navbar nav");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.textContent = isOpen ? "✕" : "☰";

    });


    const menuLinks = navigation.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰";

        });

    });

});