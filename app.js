let amigos = []; // Lista para armazenar os nomes

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!validarNome(nome)) {
        alert("Por favor, digite um nome válido!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function validarNome(nome) {
    return nome !== "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    const amigoSorteado = sorteioAleatorio(amigos);
    exibirResultado(amigoSorteado);
}

function sorteioAleatorio(lista) {
    const indexSorteado = Math.floor(Math.random() * lista.length);
    return lista[indexSorteado];
}

function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong> 🎁</li>`;

    // Pergunta após exibir o resultado
    setTimeout(() => {
        const novoSorteio = confirm("Deseja realizar um novo sorteio?");
        if (novoSorteio) {
            amigos = []; // Limpa a lista de amigos
            atualizarLista(); // Atualiza a lista na tela
            document.getElementById("resultado").innerHTML = ""; // Limpa o resultado anterior
            sortearAmigo(); // Realiza um novo sorteio
        }
    }, 500); // Atraso para garantir que o resultado seja exibido primeiro
}
