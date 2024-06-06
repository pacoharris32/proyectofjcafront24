document.getElementById("toggleMenu").addEventListener("click", function() {
    var menu = document.getElementById("mainMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});