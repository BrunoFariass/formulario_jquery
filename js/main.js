$(document).ready(function() {
    $('#telefone').mask('(00) 0000-00000');
    $('#cpf').mask('999.999.999-99');
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: {
                required: true

            },
            email: {
                required: true,
                email: true

            },
            telefone: {
                required: true

            }
        },

        messages: {
            nome: 'Por favor, insira o seu nome',
            cpf: 'Por favor, insira o seu CPF',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira um número de telefone válido',
        },
        submitHandler: function(form) {
            alert('Formulário Enviado com sucesso!!!');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    });
});
