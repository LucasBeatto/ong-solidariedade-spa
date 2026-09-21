/* =========================
   MÁSCARA DE CPF
========================= */

const cpf = document.getElementById("cpf");

if (cpf) {

    cpf.addEventListener("input", function () {

        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 9) {
            valor = valor.replace(
                /^(\d{3})(\d{3})(\d{3})(\d{1,2})$/,
                "$1.$2.$3-$4"
            );
        } else if (valor.length > 6) {
            valor = valor.replace(
                /^(\d{3})(\d{3})(\d{1,3})$/,
                "$1.$2.$3"
            );
        } else if (valor.length > 3) {
            valor = valor.replace(
                /^(\d{3})(\d{1,3})$/,
                "$1.$2"
            );
        }

        cpf.value = valor;

    });

}


/* =========================
   MÁSCARA DE TELEFONE
========================= */

const telefone = document.getElementById("telefone");

if (telefone) {

    telefone.addEventListener("input", function () {

        let valor = telefone.value.replace(/\D/g, "");

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

        } else if (valor.length > 0) {

            valor = valor.replace(
                /^(\d{0,2})/,
                "($1"
            );

        }

        telefone.value = valor;

    });

}


/* =========================
   MÁSCARA DE CEP
========================= */

const cep = document.getElementById("cep");

if (cep) {

    cep.addEventListener("input", function () {

        let valor = cep.value.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        if (valor.length > 5) {

            valor = valor.replace(
                /^(\d{5})(\d{1,3})$/,
                "$1-$2"
            );

        }

        cep.value = valor;

    });

}


/* =========================
   MENU HAMBÚRGUER
========================= */

const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.getElementById("menuPrincipal");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", function () {

        const menuAberto =
            menuPrincipal.classList.toggle("ativo");

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );

        menuToggle.textContent =
            menuAberto ? "✕" : "☰";

    });

}


/* =========================
   DROPDOWN DE PROJETOS
========================= */

const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

if (dropdown && dropdownToggle) {

    dropdownToggle.addEventListener("click", function () {

        const aberto =
            dropdown.classList.toggle("aberto");

        dropdownToggle.setAttribute(
            "aria-expanded",
            aberto
        );

    });

}

/* =========================
   MODAL DOS PROJETOS
========================= */

const modalProjeto = document.getElementById("modalProjeto");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");

const fecharModal = document.getElementById("fecharModal");
const modalOk = document.getElementById("modalOk");

const botoesProjeto = document.querySelectorAll(".card-button");


const dadosProjetos = {

    alimentos: {
        titulo: "Campanha de Alimentos",
        texto:
            "A campanha arrecada alimentos não perecíveis para distribuição " +
            "a famílias em situação de vulnerabilidade. A comunidade pode " +
            "participar por meio da doação de alimentos ou do trabalho voluntário."
    },

    agasalho: {
        titulo: "Campanha do Agasalho",
        texto:
            "A campanha recebe roupas, cobertores e calçados em boas condições " +
            "para auxiliar pessoas durante os períodos de temperaturas mais baixas."
    },

    educacional: {
        titulo: "Apoio Educacional",
        texto:
            "O projeto promove atividades educativas e arrecada materiais " +
            "escolares para crianças e adolescentes, incentivando o acesso " +
            "à educação e o desenvolvimento da comunidade."
    }

};

botoesProjeto.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const projeto = botao.dataset.projeto;
        const dados = dadosProjetos[projeto];

        if (!modalProjeto || !dados) {
            return;
        }

        modalTitulo.textContent = dados.titulo;
        modalTexto.textContent = dados.texto;

        modalProjeto.showModal();

    });

});

function fecharJanelaModal() {

    if (modalProjeto && modalProjeto.open) {
        modalProjeto.close();
    }

}

if (fecharModal) {
    fecharModal.addEventListener("click", fecharJanelaModal);
}


if (modalOk) {
    modalOk.addEventListener("click", fecharJanelaModal);
}


if (modalProjeto) {

    modalProjeto.addEventListener("click", function (evento) {

        if (evento.target === modalProjeto) {
            fecharJanelaModal();
        }

    });

}

/* =========================
   ENVIO DO FORMULÁRIO
========================= */

const formCadastro = document.getElementById("formCadastro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

if (formCadastro && mensagemSucesso) {

    formCadastro.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formCadastro.checkValidity()) {
            formCadastro.reportValidity();
            return;
        }

        mensagemSucesso.classList.add("visivel");

        formCadastro.reset();

        mensagemSucesso.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(function () {
            mensagemSucesso.classList.remove("visivel");
        }, 6000);

    });

}