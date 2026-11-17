const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('#navegacao');
const galeria = document.querySelector("#galeria");

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
function mostrarTemplos(listaTemplos) {
    galeria.innerHTML = '';

    listaTemplos.forEach((templo) => {
    const cartao = document.createElement('figure');

    cartao.innerHTML = `
    <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
    <h3>${templo.nomeDoTemplo}</h3>
    <p><strong>Localização:</strong> ${templo.localizacao}</p>
    <p><strong>Data de consagração:</strong> ${templo.consagracao}</p>
    <p><strong>Área:</strong> ${templo.area} ft²</p>
`;
    galeria.appendChild(cartao);

    })

    
};
    const templosAntigos = templos.filter((templo) => {
    const anoConsagracao = Number(templo.consagracao.split(",")[0]);

    return anoConsagracao < 1900;
});

const templosNovos = templos.filter((templo) => {
    const anoConsagracao = Number(templo.consagracao.split(",")[0]);

    return anoConsagracao > 2000;
});

const templosGrandes = templos.filter((templo) => {

    return templo.area > 90000;
});

const templosPequenos = templos.filter((templo) => {
    return templo.area < 10000;
});

mostrarTemplos(templos);
const linksFiltro = document.querySelectorAll('#navegacao a');
linksFiltro.forEach((link) => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();

        const filtro = link.dataset.filtro;
        if (filtro === 'antigos') {
           mostrarTemplos(templosAntigos);
        }

        if (filtro === 'novos') {
           mostrarTemplos(templosNovos);
        }

        if (filtro === 'grandes') {
           mostrarTemplos(templosGrandes);
        }

        if (filtro === 'pequenos') {
            mostrarTemplos(templosPequenos);  
        }

        if (filtro === 'todos') {
            mostrarTemplos(templos);
        }

        navegacao.classList.remove('aberto');
        botaoMenu.textContent = '☰';
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
    });
});

