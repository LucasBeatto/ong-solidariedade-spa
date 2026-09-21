import {
    validarNome,
    validarEmail,
    validarTelefone,
    validarParticipacao
} from "./validation.js";


import {
    salvarColaborador
} from "./storage.js";


import {
    renderizarColaboradores
} from "./collaborators.js";


export function inicializarFormulario() {

    const formulario =
        document.getElementById("formCadastro");

    if (!formulario) {
        return;
    }


    const nome =
        document.getElementById("nome");

    const email =
        document.getElementById("email");

    const telefone =
        document.getElementById("telefone");

    const participacao =
        document.getElementById("participacao");


    telefone.addEventListener(
        "input",
        aplicarMascaraTelefone
    );


    formulario.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            limparErros();


            let formularioValido = true;


            if (!validarNome(nome.value)) {

                mostrarErro(
                    "nome",
                    "erroNome",
                    "Informe um nome com pelo menos 3 caracteres."
                );

                formularioValido = false;
            }


            if (!validarEmail(email.value)) {

                mostrarErro(
                    "email",
                    "erroEmail",
                    "Informe um endereço de e-mail válido."
                );

                formularioValido = false;
            }


            if (!validarTelefone(telefone.value)) {

                mostrarErro(
                    "telefone",
                    "erroTelefone",
                    "Informe um telefone válido."
                );

                formularioValido = false;
            }


            if (!validarParticipacao(
                participacao.value
            )) {

                mostrarErro(
                    "participacao",
                    "erroParticipacao",
                    "Selecione uma forma de participação."
                );

                formularioValido = false;
            }


            if (!formularioValido) {

                mostrarMensagem(
                    "Verifique os campos indicados.",
                    "erro"
                );

                return;
            }


            salvarColaborador({

                nome: nome.value.trim(),

                email: email.value.trim(),

                telefone: telefone.value,

                participacao:
                    participacao.value

            });


            formulario.reset();


            mostrarMensagem(
                "Cadastro realizado com sucesso!",
                "sucesso"
            );


            renderizarColaboradores();

        }
    );


    renderizarColaboradores();

}


function aplicarMascaraTelefone(evento) {

    let valor =
        evento.target.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);


    if (valor.length > 10) {

        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );

    } else if (valor.length > 6) {

        valor = valor.replace(
            /^(\d{2})(\d{4})(\d{1,4})$/,
            "($1) $2-$3"
        );

    } else if (valor.length > 2) {

        valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );

    }


    evento.target.value = valor;
}


function mostrarErro(
    idCampo,
    idErro,
    mensagem
) {

    const campo = 
        document.getElementById(idCampo);
    
    const erro =
        document.getElementById(idErro);
    
    if (campo) {
        
        campo.setAttribute(
            "aria-invalid",
            "true"
        );
    }

    if (erro) {

        erro.textContent = mensagem;
    }
}


function limparErros() {

    document
        .querySelectorAll(".erro-campo")
        .forEach(function (elemento) {

            elemento.textContent = "";

        });

    document
        .querySelectorAll(
            "#formCadastro input, #formCadastro select"
        )
        .forEach(function(campo) {

            campo.removeAttribute(
                "aria-invalid"
            );
        });
}


function mostrarMensagem(texto, tipo) {

    const mensagem =
        document.getElementById(
            "mensagemFormulario"
        );

    if (!mensagem) {
        return;
    }


    mensagem.textContent = texto;

    mensagem.className =
        "mensagem-formulario " + tipo;
}