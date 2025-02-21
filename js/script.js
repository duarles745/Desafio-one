document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("nomeAmigo");
    const botaoAdicionar = document.getElementById("adicionar");
    const listaNomes = document.getElementById("listaNomes");
    const botaoSortear = document.getElementById("sortear");
    const resultado = document.getElementById("resultado");

    let nomes = [];

    botaoAdicionar.addEventListener("click", () => {
        const nome = inputNome.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome válido!");
            return;
        }
        
        if (nomes.includes(nome)) {
            alert("Este nome já foi adicionado!");
            return;
        }

        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    });

    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach((nome, index) => {
            const item = document.createElement("li");
            item.textContent = nome;
            
            const botaoRemover = document.createElement("button1");
            botaoRemover.textContent = "❌";
            botaoRemover.onclick = () => removerNome(index);
            
            item.appendChild(botaoRemover);
            listaNomes.appendChild(item);
        });
    }

    function removerNome(index) {
        nomes.splice(index, 1);
        atualizarLista();
    }

    botaoSortear.addEventListener("click", () => {
        if (nomes.length < 2) {
            alert("Adicione pelo menos dois nomes para o sorteio!");
            return;
        }
        
        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        resultado.textContent = ` O amigo secreto sorteado é: ${sorteado}! `;
    });
});
