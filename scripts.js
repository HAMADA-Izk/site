document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.opacity = 0; // Começa invisível
        card.style.transition = "opacity 1s"; // Transição suave
        card.style.opacity = 1; // Torna visível
    });
});