import {
    obterColaboradores
} from "./storage.js";

export function renderizarColaboradores() {

    const lista =
        document.getElementById(
            "listaColaboradores"
        );

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    const colaboradores =
        obterColaboradores();

    if (colaboradores.length === 0) {

        const item =
            document.createElement("li");
        
        item.textContent =
            "Nenhum colaborador cadastrado.";
        
        lista.appendChild(item);

        return;
    }

    colaboradores.forEach(function (colaborador) {

        const item =
            document.createElement("li");
        
        item.textContent =
            colaborador.nome +
            " - " +
            colaborador.participacao;

        lista.appendChild(item);

    });
}

