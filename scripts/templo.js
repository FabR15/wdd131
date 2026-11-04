const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('#navegacao');

botaoMenu.addEventListener('click', () => {
    navegacao.classList.toggle('aberto');

    if (navegacao.classList.contains('aberto')) {
        botaoMenu.textContent = '✕';
        botaoMenu.setAttribute('aria-label', 'Fechar menu');
    } else {
        botaoMenu.textContent = '☰';
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
    }
});

const anoAtual = document.querySelector('#anoatual');
const ultimaModificacao = document.querySelector('#ultimaModificacao');

anoAtual.textContent = new Date().getFullYear();
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;