document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btn-nova-pagina");

    botao.addEventListener("click", function() {
        // Coloque o nome exato do seu outro arquivo HTML
        const urlDestino = "index.html";

        window.location.href = urlDestino;
    });
});