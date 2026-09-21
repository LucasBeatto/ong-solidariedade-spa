import {
    carregarPagina
} from "./navigation.js";


import {
    inicializarFormulario
} from "./form.js";


function renderizarAplicacao() {

    const rota = carregarPagina();


    if (rota === "#cadastro") {

        inicializarFormulario();

    }

}


renderizarAplicacao();


window.addEventListener(
    "hashchange",
    renderizarAplicacao
);
