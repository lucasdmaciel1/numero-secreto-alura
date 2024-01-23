let listaNumeros = [];
let numeroMaximo = 10;
let numeroAleatorio = numeroSorteado();
let tentativas = 1;

function numeroSorteado() {
    let sorteio = parseInt(Math.random() * numeroMaximo + 1);
    let tamanhoDaLista = listaNumeros.length;

    if(tamanhoDaLista == numeroMaximo) {
        listaNumeros = [];
    }

    if(listaNumeros.includes(sorteio)) {
        return numeroSorteado();
    } else {
        listaNumeros.push(sorteio);
        console.log(listaNumeros);
        return sorteio;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function cancelar() {
    document.getElementById('cancelamento');
    limparCampo();
    listaNumeros = [];
    mostrarTexto('h1', 'O jogo foi cancelado!');
    mostrarTexto('p', '');
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.querySelector('button').setAttribute('disabled', true);

}

function mostrarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoInicial() {

    mostrarTexto('h1', 'Bem vindo ao jogo do número secreto');
    mostrarTexto('p', 'Escolha um número entre 1 e 10');
}

textoInicial();

function verificarChute() {

    let chute = document.querySelector('input').value; //criamos uma variável chute e atribuimos a ela o valor digitado pelo usuário no campo input, que está sendo linkado pelo document.querySelector('input') seguido de .value para especificar chute será igual ao valor digitado no input
    let palavraTentativa = chute > 1 ? 'tentativas' : 'tentativa';

    chute = parseFloat(chute);

    if (chute < 1 || chute > 10) {
        mostrarTexto('p', 'Insira apenas números de 1 a 10!');
        return;
    }

    if (isNaN(chute)) {
        mostrarTexto('p', 'Insira apenas números!');
        return;
    }

    if (chute == numeroAleatorio) {
        mostrarTexto('h1', 'Acertou!');
        mostrarTexto('p', 'Você acertou o número com ' + tentativas + " " + palavraTentativa + '!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    } else {
        if (chute < numeroAleatorio) {
            mostrarTexto('p', 'Errou! o número é maior que ' + chute + '!');
        } else {
            mostrarTexto('p', 'Errou! o número é menor que ' + chute + '!');
        }
    }

    tentativas++;

    limparCampo();
}

function newGame() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroAleatorio = numeroSorteado();
    limparCampo();
    textoInicial();
    tentativas = 1;
}
