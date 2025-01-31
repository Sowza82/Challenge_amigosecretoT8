let amigos = []; // Lista para armazenar os nomes

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    if (!validarNome(nome)) {
        alert("Por favor, digite um nome válido!");
        return;
    }

    amigos.push(nome); // Adiciona o nome à lista
    atualizarLista(); // Atualiza a exibição na tela
    input.value = ""; // Limpa o campo de entrada
}

// Função para validar se o nome é válido
function validarNome(nome) {
    return nome !== ""; // Valida se o nome não está vazio
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos nomes

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    const amigoSorteado = sorteioAleatorio(amigos);
    exibirResultado(amigoSorteado);
}

// Função para realizar o sorteio aleatório
function sorteioAleatorio(lista) {
    const indexSorteado = Math.floor(Math.random() * lista.length);
    return lista[indexSorteado];
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong> 🎁</li>`;
}
