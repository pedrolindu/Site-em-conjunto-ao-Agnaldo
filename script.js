document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btnSiteExterno");

    botao.addEventListener("click", function() {
      
        const urlDestino = "https://minecraft.net";

        
        window.location.href = urlDestino;

        
    });
});