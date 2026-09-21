const CHAVE_STORAGE = "colaboradoresONG";

export function obterColaboradores() {

    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

    if (!dadosSalvos) {
        return [];
    }

    try {
        const dados = JSON.parse(dadosSalvos);

        return Array.isArray(dados) ? dados : [];
    } catch (erro) {

        console.error("Erro ao ler o localStorage:", erro)

        return[];
    }

}

export function salvarColaborador(colaborador) {

    const colaboradores = obterColaboradores();

    const novoColaborador = {
        id: Date.now(),
        ... colaborador,
        criadoEm: new Date().toISOString()
    };

    colaboradores.push(novoColaborador);

    localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(colaboradores)
    );

    return novoColaborador;
}