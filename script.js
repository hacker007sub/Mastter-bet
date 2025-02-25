document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
        startTypingEffect(); // Inicia o efeito de digitação
    }, 3000); // Exibe a tela principal após 3 segundos
});

// Função para preencher o input ao clicar nas mensagens rápidas
function setMessage(message) {
    document.getElementById("message-input").value = message;
}

// Função para simular o efeito de digitação e mensagens
function startTypingEffect() {
    let typingIndicator = document.getElementById("typing-indicator");
    let welcomeMessage = document.getElementById("welcome-message");
    let messageBox = document.getElementById("message-box");

    // Após o processamento, mostramos a mensagem de boas-vindas
    setTimeout(() => {
        typingIndicator.style.display = "none";
        welcomeMessage.style.display = "block"; // Exibe a mensagem de boas-vindas

        // Simula uma mensagem sendo enviada
        setTimeout(() => {
            let message = document.createElement("p");
            message.textContent = "Olá! Como posso te ajudar hoje?";
            messageBox.appendChild(message);
        }, 1000); // Mensagem do suporte aparece após 1 segundo
    }, 4000); // Mensagem de boas-vindas aparece após 4 segundos
}