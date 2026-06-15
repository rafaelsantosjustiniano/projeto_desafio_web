const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let nome = document.querySelector('#nome').value;
    let peso = parseFloat(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#altura').value);

    let imc = peso / (altura * altura);
    let faixa = "";

    if (imc < 20) {
        faixa = "abaixo do peso";
    } else if (imc >= 20 && imc <= 25) {
        faixa = "normal";
    } else if (imc > 25 && imc <= 30) {
        faixa = "excesso de peso";
    } else if (imc > 30 && imc <= 35) {
        faixa = "obesidade";
    } else {
        faixa = "obesidade mórbida";
    }

    // Corrigido com a tag <p> para as quebras de linha funcionarem perfeitamente no CSS
    divResultado.innerHTML = `<p>Paciente: ${nome} <br> IMC: ${imc.toFixed(2).replace('.', ',')} <br> Faixa de Risco: <strong>${faixa}</strong></p>`;
    divResultado.style.display = 'flex';
});

formDados.addEventListener('reset', () => {
    divResultado.style.display = 'none';
});