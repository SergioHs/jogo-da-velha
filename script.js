         // Definir jogadores
        const jogador1 = "X";
        const jogador2 = "O";

        // Definir jogador atual
        let jogadorAtual = jogador1;

        // Definir células vazias
        const celulasVazias = [];

        // Definir células
        const celulas = document.querySelectorAll("td");
        celulas.forEach((celula) => {
            celula.addEventListener("click", jogar);
            celulasVazias.push(celula);
        });

        // Definir botão resetar
        const resetar = document.getElementById("reset");
        resetar.addEventListener("click", resetarJogo);

        // Função para jogar
        function jogar() {
            // Verificar se a célula está vazia
            if (this.innerHTML !== "") {
                return;
            }

            // Adicionar marcação do jogador atual
            this.innerHTML = jogadorAtual;

            // Verificar se houve vitória
            if (verificarVitoria(jogadorAtual)) {
                alert(jogadorAtual + " venceu!");
                resetarJogo();
                return;
            }

            // Verificar se houve empate
            if (celulasVazias.length === 1) {
                alert("Empate!");
                resetarJogo();
                return;
            }

            // Trocar jogador atual
            if (jogadorAtual === jogador1) {
                jogadorAtual = jogador2;
            } else {
                jogadorAtual = jogador1;
            }

            // Remover célula da lista de células vazias
            const index = celulasVazias.indexOf(this);
            celulasVazias.splice(index, 1);
        }

        // Função para verificar se houve vitória
        function verificarVitoria(jogador) {
            // Verificar linhas
            for (let i = 0; i < 9; i += 3) {
                if (celulas[i].innerHTML === jogador &&
                    celulas[i + 1].innerHTML === jogador &&
                    celulas[i + 2].innerHTML === jogador) {
                    return true;
                }
            }

             // Verificar colunas
            for (let i = 0; i < 3; i++) {
                if (celulas[i].innerHTML === jogador &&
                    celulas[i + 3].innerHTML === jogador &&
                    celulas[i + 6].innerHTML === jogador) {
                    return true;
                }
            }

            // Verificar diagonais
            if (celulas[0].innerHTML === jogador &&
                celulas[4].innerHTML === jogador &&
                celulas[8].innerHTML === jogador) {
                return true;
            }

            if (celulas[2].innerHTML === jogador &&
                celulas[4].innerHTML === jogador &&
                celulas[6].innerHTML === jogador) {
                return true;
            }

            // Não houve vitória
            return false;
        }

        // Função para resetar o jogo
        function resetarJogo() {
            celulas.forEach((celula) => {
                celula.innerHTML = "";
            });

            jogadorAtual = jogador1;
            celulasVazias.splice(0, celulasVazias.length);
            celulas.forEach((celula) => {
                celulasVazias.push(celula);
            });
        }
