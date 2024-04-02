$(document).ready(function() {

    $('#telefone').mask('(00)00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form) {
            alert('Cadastro concluído com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let campoIncorretos = validador.numberOfInvalids();
            if(campoIncorretos) {
                alert('Existem campos incorretos ou vazios!')
            }
        }
    })
})