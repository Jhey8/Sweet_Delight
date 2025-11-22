document.addEventListener("DOMContentLoaded", () => {
    const menuHamburguesa = document.getElementById('menuHamburguesa');
    const menuNav = document.getElementById('menuNav');

    if (menuHamburguesa && menuNav) {
        menuHamburguesa.addEventListener("click", () => {
            menuNav.classList.toggle("show");
        });

        const enlaces = menuNav.querySelectorAll("a");
        enlaces.forEach(enlace => {
            enlace.addEventListener("click", () => {
                menuNav.classList.remove("show");
            });
        });
    }
});
