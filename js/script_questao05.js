const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let a = parseFloat(document.querySelector('#ladoA').value);
    let b = parseFloat(document.querySelector('#ladoB').value);
    let c = parseFloat(document.querySelector('#ladoC').value);

    // Validação matemática se os lados formam de fato um triângulo
    if (a + b > c && a + c > b && b + c > a) {
        let tipo = "";
        if (a === b && b === c) {
            tipo = "Equilátero";
        } else if (a === b || a === c || b === c) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }
        divResultado.innerHTML = `Os lados informados formam um Triângulo <strong>${tipo}</strong>.`;
    } else {
        divResultado.innerHTML = "Os valores informados não formam um triângulo válido.";
    }

    divResultado.style.display = 'flex';
});

formDados.addEventListener('reset', () => {
    divResultado.style.display = 'none';
});