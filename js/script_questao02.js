const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    let largura = parseFloat(objFormDados.get('largura'));
    let altura = parseFloat(objFormDados.get('altura'));

    let area = largura * altura;
    let litros = area / 2;

    divResultado.innerHTML = `A área a ser pintada é de ${area.toFixed(2).replace('.', ',')}m², <br> Total de litros para pintar essa área é de ${litros.toFixed(2).replace('.', ',')}l`;
    divResultado.style.display = 'flex';
});

formDados.addEventListener('reset', () => {
    divResultado.style.display = 'none';
});