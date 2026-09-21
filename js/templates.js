export function templateInicio() {

    return `
        <section>
            <h2>
                Transformando vidas através da solidariedade
            </h2>

            <img
                src="../imagens/ong.jpg"
                alt="Voluntários entregando cestas básicas para famílias em ação solidária"
            >

            <p>
                A ONG Solidariedade trabalha para promover ações sociais, apoiar famílias em situação de vulnerabilidade e incentivar a participação da comunidade em projetos solidários.
            </p>

        </section>

        <section>

            <h2>Nossa missão</h2>

            <p>
                Nossa missão é conectar pessoas que desejam ajudar com comunidades que precisam de apoio, promovendo inclusão, cidadania e qualidade de vida.
            </p>
        
        </section>

        <section>

            <h2>Entre em contato</h2>

            <p>
                <strong>Telefone:</strong>
                (69 99999-9999)
            </p>

            <p>
                <strong>E-mail:</strong>
                contato@ongsolidariedade.org
            </p>

        </section>
    `;
}

export function templateProjetos() {

    return `
        <section>

            <h2>Nossos projetos</h2>

            <p>
                Conheça algumas das iniciativas desenvolvidas pela ONG Solidariedade.
            </p>

        </section>

        <section>

            <div class="grid-12">

                ${criarCardProjeto(
                    "Campanha de Alimentos",
                    "Doação",
                    "Arrecadamos alimentos não perecíveis para famílias em situação de vulnerabilidade."
                )}

                ${criarCardProjeto(
                    "Campanha do Agasalho",
                    "Campanha ativa",
                    "Recebemos roupas, cobertores e calçados para distribuição nos períodos mais frios."
                )}

                ${criarCardProjeto(
                    "Apoio Educacional",
                    "Voluntariado",
                    "Desenvolvemos atividades educativas e arrecadamos materiais escolares."
                )}

            </div>

        </section>

    `;
}

function criarCardProjeto(titulo, categoria, descricao) {

    return `
        <article class="col-4 card-projeto">

            <h3>${titulo}</h3>

            <span class="badge">
                ${categoria}
            </span>

            <p>
                ${descricao}
            </p>

        </article>

    `;
}

export function templateCadastro() {

    return `
        <section>

            <h2>Seja um colaborador</h2>

            <p>
                Preencha seus dados para participar
                das ações da ONG Solidariedade.
            </p>

        </section>


        <section>

            <form id="formCadastro" novalidate>

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        autocomplete="name"
                    >

                    <small
                        id="erroNome"
                        class="erro-campo"
                        aria-live="polite"
                    ></small>


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                    >

                    <small
                        id="erroEmail"
                        class="erro-campo"
                        aria-live="polite"
                    ></small>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        maxlength="15"
                        inputmode="numeric"
                    >

                    <small
                        id="erroTelefone"
                        class="erro-campo"
                        aria-live="polite"
                    ></small>

                </fieldset>


                <fieldset>

                    <legend>Participação</legend>

                    <label for="participacao">
                        Como deseja colaborar?
                    </label>

                    <select
                        id="participacao"
                        name="participacao"
                    >

                        <option value="">
                            Selecione
                        </option>

                        <option value="voluntario">
                            Trabalho voluntário
                        </option>

                        <option value="doacao">
                            Doações
                        </option>

                        <option value="eventos">
                            Participação em eventos
                        </option>

                    </select>

                    <small
                        id="erroParticipacao"
                        class="erro-campo"
                        aria-live="polite"
                    ></small>

                </fieldset>


                <button type="submit">
                    Enviar cadastro
                </button>


                <div
                    id="mensagemFormulario"
                    class="mensagem-formulario"
                    role="status"
                    aria-live="polite"
                ></div>

            </form>

        </section>


        <section>

            <h2>Colaboradores cadastrados</h2>

            <p>
                Registros armazenados neste navegador:
            </p>

            <ul id="listaColaboradores"></ul>

        </section>
    `;
}