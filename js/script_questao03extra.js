document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeProduto = document.getElementById('nomeProduto').value;
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const divDados = document.getElementById('div-dados');
    
    let margemLucro = 0;

    // Aplicação da tabela de faixas de preço
    if (valorCompra < 10.00) {
        margemLucro = 0.70; // 70%
    } else if (valorCompra >= 10.00 && valorCompra < 30.00) {
        margemLucro = 0.50; // 50%
    } else if (valorCompra >= 30.00 && valorCompra <= 50.00) {
        margemLucro = 0.40; // 40%
    } else {
        margemLucro = 0.30; // 30%
    }

    // O valor de venda é o valor de compra somado ao percentual de lucro
    const valorVenda = valorCompra * (1 + margemLucro);

    // Formatação para moeda corrente do Brasil (R$)
    const valorVendaFormatado = valorVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    divDados.innerHTML = `Produto: <strong>${nomeProduto}</strong><br>Valor de Venda: <strong>${valorVendaFormatado}</strong>`;
    divDados.style.display = 'flex';
});

document.getElementById('formulario').addEventListener('reset', function() {
    document.getElementById('div-dados').style.display = 'none';
});