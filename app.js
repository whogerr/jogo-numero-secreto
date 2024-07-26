let listaDeNumerosSorteador = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();



function verificarChute () {
    let chute = document.querySelector('input') .value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroaleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteador = [];
    }

    if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
        return gerarNumeroaleatorio();
    } else {
        listaDeNumerosSorteador.push(numeroEscolhido);
        console.log(listaDeNumerosSorteador);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    
}