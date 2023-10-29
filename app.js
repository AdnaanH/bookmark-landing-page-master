document.getElementById("ham-menu").addEventListener("click", function() {
    var menuArea = document.getElementById("menu-area");
    var hamMenu = document.getElementById("ham-menu");
    var socialsTop = document.getElementById("socials-top");

    if (menuArea.style.display === "flex") {
        menuArea.style.display = "none";
        hamMenu.classList.remove("bi-x");
        hamMenu.classList.add("bi-list");
        socialsTop.style.display = "none";
    } else {
        menuArea.style.display = "flex";
        hamMenu.classList.remove("bi-list");
        hamMenu.classList.add("bi-x");
        socialsTop.style.display = "flex";

        hamMenu.addEventListener("click", function() {
            menuArea.style.display = "none";
            hamMenu.classList.remove("bi-x");
            hamMenu.classList.add("bi-list");
        });
    }
});
