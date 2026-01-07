function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.className === "nav-menu") {
        menu.className += " active";
    } else {
        menu.className = "nav-menu";
    }
}