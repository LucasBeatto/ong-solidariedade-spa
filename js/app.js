import {
    carregarPagina
} from "./navigation.js";


import {
    inicializarFormulario
} from "./form.js";


function renderizarAplicacao(moverFoco = false) {

    const rota = carregarPagina();

    atualizarNavegacao(rota);


    if (rota === "#cadastro") {

        inicializarFormulario();

    }

    if (moverFoco) {

        const app =
            document.getElementById("app");

        if (app) {
            app.focus();
        }
    }

}

function atualizarNavegacao(rota) {

    const links =
        document.querySelectorAll(
            'nav a[href^="#"]'
        );

    links.forEach(function(link) {

        link.removeAttribute(
            "aria-current"
        );

        if (
            link.getAttribute("href") === rota
        ) {

            link.setAttribute(
                "aria-current",
                "page"
            );
        }
    });
}


renderizarAplicacao();


window.addEventListener(
    "hashchange",
    function () {

        renderizarAplicacao(true);
    }
);
