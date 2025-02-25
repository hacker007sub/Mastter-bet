document.addEventListener("DOMContentLoaded", function() {
    let balanceElement = document.querySelector(".balance");
    let balance = 1000;
    let betInput = document.querySelector(".bet-input");
    let betButton = document.querySelector(".bet-button");
    let minesField = document.querySelector(".mines-field");

    function updateBalance() {
        balanceElement.textContent = `Saldo: R$ ${balance.toFixed(2)}`;
    }

    function createGrid() {
        minesField.innerHTML = "";

        let cells = [];
        for (let i = 0; i < 25; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cells.push(cell);
            minesField.appendChild(cell);
        }

        let bombIndices = new Set();
        while (bombIndices.size < 5) {
            bombIndices.add(Math.floor(Math.random() * 25));
        }

        cells.forEach((cell, index) => {
            if (bombIndices.has(index)) {
                cell.dataset.type = "bomb";
            } else {
                cell.dataset.type = "diamond";
            }

            cell.addEventListener("click", function() {
                if (this.dataset.type === "bomb") {
                    this.style.backgroundColor = "red";
                    this.innerHTML = "<img src='bomb.png' alt='Bomba' />";
                    alert("Você encontrou uma bomba! Perdeu a aposta.");
                } else {
                    this.style.backgroundColor = "green";
                    this.innerHTML = "<img src='diamond.png' alt='Diamante' />";
                    balance += 50;
                    updateBalance();
                    alert("Você encontrou um diamante! Ganhou R$50.");
                }
                this.style.pointerEvents = "none";
            });
        });
    }

    betButton.addEventListener("click", function() {
        let betAmount = parseFloat(betInput.value);
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
            alert("Aposta inválida.");
            return;
        }

        balance -= betAmount;
        updateBalance();
        createGrid();
    });

    updateBalance();
    createGrid();
});