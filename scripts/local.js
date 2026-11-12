document.getElementById("anoatual").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent =
    "Última modificação: " + document.lastModified;

const temperatura = 28;
const velocidadeVento = 12;

function calcularSensacaoTermica(velocidadeVento, temperatura) {
    const potenciaVento = Math.pow(velocidadeVento, 0.16);

    return 13.12
        + (0.6215 * temperatura)
        - (11.37 * potenciaVento)
        + (0.3965 * temperatura * potenciaVento);
}

const resultado = document.getElementById("sensacaoTermica");

if (temperatura <= 10 && velocidadeVento > 4.8) {

    resultado.textContent = calcularSensacaoTermica(velocidadeVento, temperatura).toFixed(1) + " °C";

} else {
    resultado.textContent = "N/A";

}