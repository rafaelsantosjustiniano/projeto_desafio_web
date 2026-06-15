const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let n1 = parseInt(document.querySelector('#n1').value);
    let n2 = parseInt(document.querySelector('#n2').value);
    let n3 = parseInt(document.querySelector('#n3').value);

    let media = (n1 + n2 + n3) / 3;

    divResultado.innerHTML = `A média dos números informados é de ${media.toFixed(2).replace('.', ',')}`;
    divResultado.style.display = 'flex';
});

formDados.addEventListener('reset', () => {
    divResultado.style.display = 'none';
});