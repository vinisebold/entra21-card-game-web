let cartasJaSorteadas = [];
let ultimaCartaSorteada = null;

//Verifica qntds de carta
function selecionarCartaAleatoria() {
    if (cartasJaSorteadas.length >= 4) {
        alert("Todas as cartas já foram usadas - clique em 'Resetar Jogo'");
        return;
    }

    //Tratamento carta ja usada
    if (ultimaCartaSorteada) {
        const cartaAnterior = document.getElementById('carta' + ultimaCartaSorteada);
        cartaAnterior.classList.remove('destaque');
        cartaAnterior.classList.add('usado');
        setTimeout(() => {
            cartaAnterior.classList.add('usado-cinza');
        }, 300);
    }

    //Sorteio
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 4) + 1;
    } while (cartasJaSorteadas.includes(numeroAleatorio));

    //add carta na lista 
    cartasJaSorteadas.push(numeroAleatorio);
    ultimaCartaSorteada = numeroAleatorio;

    //
    const cartaSelecionada = document.getElementById('carta' + numeroAleatorio);
    cartaSelecionada.classList.add('destaque', 'carta-ativa');
}

//Resetar os valores
function resetarJogo() {
    cartasJaSorteadas = [];
    ultimaCartaSorteada = null;

    document.querySelectorAll('.flip-carta').forEach(carta => {
        carta.classList.remove('destaque', 'carta-ativa', 'usado', 'usado-cinza');
    });
}