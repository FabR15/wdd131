const params = new URLSearchParams(window.location.search);

const produto = params.get("produto");
const classificacao = params.get("classificacao");
const dataInstalacao = params.get("data-instalacao");

const contadorElemento = document.querySelector("#review-count");
const mensagemElemento = document.querySelector("#confirmation-message");

const envioValido = produto && classificacao && dataInstalacao;

let contador = Number(localStorage.getItem("reviewCount")) || 0;

if (envioValido) {
    contador++;

    localStorage.setItem("reviewCount", contador);

    mensagemElemento.textContent = "Obrigado pela sua avaliação!";
} else {
    mensagemElemento.textContent = "Nenhuma avaliação foi enviada.";

    document.querySelector(".confirmation p").textContent =
        "Por favor, preencha o formulário antes de acessar esta página.";
}

contadorElemento.textContent = contador;