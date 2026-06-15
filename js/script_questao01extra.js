document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const numero = parseInt(document.getElementById('numero').value);
    const divDados = document.getElementById('div-dados');

    // Verifica se é divisível por 3 E por 7 ao mesmo tempo
    if (numero % 3 === 0 && numero % 7 === 0) {
        divDados.innerHTML = `O número <strong>${numero}</strong> é divisível por 3 e por 7.`;
    } else {
        divDados.innerHTML = `O número <strong>${numero}</strong> NÃO é divisível por 3 e por 7 simultaneamente.`;
    }

    divDados.style.display = 'flex'; // Exibe a caixa de resultado
});

// Limpa o resultado quando o formulário for resetado
document.getElementById('formulario').addEventListener('reset', function() {
    document.getElementById('div-dados').style.display = 'none';
});