document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btnSiteExterno");

    botao.addEventListener("click", function() {
        // Coloque o nome exato do seu outro arquivo HTML
        const urlDestino = "index2.html";

        window.location.href = urlDestino;
    });
});
