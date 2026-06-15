const formDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Pegando os valores digitados pelo usuário
    let nome = document.querySelector('#nome').value;
    let n1 = parseFloat(document.querySelector('#nota1').value);
    let n2 = parseFloat(document.querySelector('#nota2').value);
    let n3 = parseFloat(document.querySelector('#nota3').value);

    // Calculando a média aritmética
    let media = (n1 + n2 + n3) / 3;
    
    // Definindo se está Aprovado ou Reprovado com base na média 6
    let situacao = media >= 6 ? "Aprovado" : "Reprovado";

    // Modificado: adicionado o <p> para forçar o navegador a quebrar as linhas corretamente no modo flex do professor
    divResultado.innerHTML = `<p>Aluno: ${nome} <br> Média: ${media.toFixed(2).replace('.', ',')} <br> Situação: ${situacao}</p>`;
    
    // Mostra a caixinha branca
    divResultado.style.display = 'flex';
});

// Faz a caixinha branca sumir ao clicar em Limpar
formDados.addEventListener('reset', () => {
    divResultado.style.display = 'none';
});