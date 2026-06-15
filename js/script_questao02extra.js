document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const senha = document.getElementById('senha').value;
    const divDados = document.getElementById('div-dados');

    // Validação estrita conforme o enunciado
    if (codigo === "ABCD1234" && senha === "1234") {
        divDados.innerHTML = "<strong style='color: green;'>ACESSO PERMITIDO</strong>";
    } else {
        divDados.innerHTML = "<strong style='color: red;'>ACESSO NEGADO</strong>";
    }

    divDados.style.display = 'flex';
});

document.getElementById('formulario').addEventListener('reset', function() {
    document.getElementById('div-dados').style.display = 'none';
});