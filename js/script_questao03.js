const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let distancia = parseFloat(document.querySelector('#distancia').value);
    let consumo = parseFloat(document.querySelector('#consumo').value);
    let preco = parseFloat(document.querySelector('#preco').value);

    let litrosNecessarios = distancia / consumo;
    let valorTotal = litrosNecessarios * preco;

    divResultado.innerHTML = `Combustível necessário: ${litrosNecessarios.toFixed(2).replace('.', ',')}l <br> Valor total a pagar: R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    divResultado.style.display = 'flex';
});

formDados.addEventListener('reset', () => {
    divResultado.style.display = 'none';
});