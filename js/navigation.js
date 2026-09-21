import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

export function carregarPagina() {

    const app = document.getElementById("app");

    const rota = window.location.hash || "#inicio";

    if (rota == "#projetos") {

        app.innerHTML = templateProjetos();

    } else if (rota == "#cadastro") {

        app.innerHTML = templateCadastro();

    } else {

        app.innerHTML = templateInicio();
    }

    return rota;
}