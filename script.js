function toggleMenu() {
    const nav = document.getElementById("main-nav");
    const button = document.getElementById("menu-button");
    const isOpen = nav.classList.toggle("active");

    button.innerHTML = isOpen ? "✕" : "☰";
    button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// fecha o menu automaticamente ao clicar num link (mobile)
document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.getElementById("main-nav");
        if (nav.classList.contains("active")) {
            toggleMenu();
        }
    });
});

// fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const nav = document.getElementById("main-nav");
    const button = document.getElementById("menu-button");
    const clickedInsideNav = nav.contains(event.target);
    const clickedButton = button.contains(event.target);

    if (nav.classList.contains("active") && !clickedInsideNav && !clickedButton) {
        toggleMenu();
    }
});
