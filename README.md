# 🌱 ONG Solidariedade SPA

Aplicação web acadêmica desenvolvida para simular uma plataforma destinada a uma organização não governamental, permitindo apresentar projetos sociais, divulgar formas de participação e cadastrar colaboradores.

O projeto evoluiu de páginas HTML estáticas para uma **Single Page Application (SPA)** desenvolvida com HTML5, CSS3 e JavaScript modular.

---

## 📚 Sobre o projeto

A proposta da aplicação é oferecer uma interface simples, acessível e responsiva para uma ONG fictícia chamada **ONG Solidariedade**.

A plataforma permite:

* apresentar informações institucionais;
* divulgar projetos sociais;
* apresentar oportunidades de voluntariado;
* cadastrar colaboradores;
* validar dados do formulário;
* armazenar cadastros no navegador;
* navegar entre diferentes áreas sem recarregar toda a página.

---

## 🎯 Objetivos

O projeto foi desenvolvido para praticar conceitos fundamentais e intermediários de desenvolvimento front-end, incluindo:

* HTML5 semântico;
* CSS3;
* Design System;
* CSS Grid;
* Flexbox;
* responsividade;
* manipulação do DOM;
* eventos JavaScript;
* Single Page Application;
* templates dinâmicos;
* validação de formulários;
* localStorage;
* modularização JavaScript;
* acessibilidade;
* Git e GitHub;
* GitFlow;
* Conventional Commits;
* preparação para ambiente de produção.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Web Storage API
* Git
* GitHub
* GitHub Desktop
* GitHub Pages
* Visual Studio Code
* Live Server

O projeto foi desenvolvido utilizando **Vanilla JavaScript**, sem frameworks ou bibliotecas externas.

---

## 📂 Estrutura de diretórios

```text
ong-solidariedade-spa/
│
├── README.md
│
├── html/
│   └── index.html
│
├── css/
│   └── style.css
│
├── imagens/
│   ├── ong.jpg
│   └── ong.webp
│
└── js/
    ├── app.js
    ├── navigation.js
    ├── templates.js
    ├── form.js
    ├── validation.js
    ├── storage.js
    └── collaborators.js
```

A organização segue o princípio de **separação de responsabilidades**, mantendo marcação, estilos, imagens e lógica JavaScript em diretórios independentes.

---

## 🧭 Arquitetura SPA

A aplicação utiliza o modelo **Single Page Application**.

Existe apenas um documento principal:

```text
html/index.html
```

As diferentes áreas são carregadas dinamicamente dentro de:

```html
<main id="app"></main>
```

A navegação utiliza rotas baseadas em hash:

```text
#inicio
#projetos
#cadastro
```

O evento `hashchange` detecta mudanças na rota e renderiza o template correspondente sem recarregar toda a página.

---

## 🧩 Templates dinâmicos

Os conteúdos da aplicação são gerados pelo arquivo:

```text
js/templates.js
```

As principais funções são:

```text
templateInicio()
templateProjetos()
templateCadastro()
```

Também foi criada uma função reutilizável para gerar cartões de projetos dinamicamente.

Os templates utilizam **Template Literals** e interpolação JavaScript para gerar elementos HTML sem repetição desnecessária de marcação.

---

## ⚙️ Modularização JavaScript

O código JavaScript foi dividido utilizando **ES6 Modules**, com `import` e `export`.

### `app.js`

Ponto de entrada da aplicação. Inicializa a SPA e executa os módulos necessários conforme a rota atual.

### `navigation.js`

Responsável pelo roteamento e pela renderização dos templates dentro do elemento `#app`.

### `templates.js`

Contém os templates responsáveis pela geração dinâmica das interfaces.

### `form.js`

Controla os eventos relacionados ao formulário, incluindo envio, máscara de telefone e mensagens apresentadas ao usuário.

### `validation.js`

Contém exclusivamente funções responsáveis pela validação dos dados.

### `storage.js`

Gerencia leitura e gravação dos colaboradores utilizando `localStorage`.

### `collaborators.js`

Responsável pela criação e atualização da lista de colaboradores exibida na interface.

Essa divisão busca aplicar o princípio de **responsabilidade única**, reduzindo acoplamento e facilitando manutenção.

---

## ✅ Validação de dados

O formulário possui validações desenvolvidas em JavaScript.

São verificados:

* nome com pelo menos três caracteres;
* formato válido de e-mail;
* telefone contendo 10 ou 11 dígitos;
* seleção obrigatória da forma de participação.

Quando um dado apresenta inconsistência, uma mensagem específica é exibida junto ao campo correspondente.

O envio utiliza:

```javascript
event.preventDefault();
```

permitindo que o JavaScript controle completamente a validação e o armazenamento das informações.

---

## 💾 Persistência com localStorage

Os colaboradores cadastrados são armazenados utilizando a Web Storage API.

A chave utilizada é:

```text
colaboradoresONG
```

Antes do armazenamento, os dados são convertidos para string com:

```javascript
JSON.stringify()
```

Durante a leitura, são convertidos novamente para um array JavaScript utilizando:

```javascript
JSON.parse()
```

Dessa forma, os registros permanecem disponíveis mesmo depois de atualizar ou fechar o navegador.

O projeto utiliza `localStorage` apenas para fins acadêmicos e demonstração de persistência no lado do cliente.

---

## ♿ Acessibilidade

Foram implementadas práticas de acessibilidade baseadas nas recomendações da **WCAG 2.1 nível AA**.

Entre as melhorias realizadas estão:

* HTML semântico;
* textos alternativos para imagens;
* associação de `label` aos campos;
* navegação completa por teclado;
* indicação visual clara de foco;
* link para pular diretamente ao conteúdo principal;
* atributo `aria-current` para identificar a rota ativa;
* `aria-describedby` para relacionar campos às mensagens de erro;
* `aria-invalid` para indicar campos inconsistentes;
* mensagens dinâmicas com `aria-live`;
* suporte à preferência `prefers-reduced-motion`;
* hierarquia lógica de títulos;
* contraste adequado entre texto e fundo.

---

## 📱 Responsividade

A interface utiliza CSS Grid e Flexbox para adaptar o conteúdo a diferentes tamanhos de tela.

Foi implementado um Grid de 12 colunas e breakpoints para:

* desktops panorâmicos;
* desktops e tablets;
* tablets menores;
* smartphones;
* celulares com telas reduzidas.

O layout reorganiza automaticamente cards, formulários, navegação e demais componentes conforme o espaço disponível.

---

## 🎨 Design System

O CSS utiliza variáveis declaradas no `:root` para centralizar:

* cores;
* tipografia;
* espaçamentos;
* bordas;
* sombras;
* largura máxima do conteúdo.

Isso permite alterar características visuais da aplicação em um único local e manter consistência entre os componentes.

---

## 🚀 Otimizações para produção

Foram aplicadas algumas práticas de otimização, incluindo:

* utilização preferencial de imagens WebP;
* JPG como formato alternativo;
* `decoding="async"` para imagem;
* prioridade de carregamento da imagem principal;
* utilização de scripts ES6 `type="module"`;
* remoção de páginas e scripts antigos não utilizados pela SPA;
* organização dos recursos por diretórios;
* revisão de caminhos relativos;
* inclusão de descrição da página através de meta tag;
* verificação de recursos na aba Network do navegador.

---

## 🌿 Estratégia GitFlow

O desenvolvimento utiliza uma estrutura baseada no GitFlow.

### `main`

Mantém as versões consideradas estáveis e prontas para publicação.

### `develop`

Branch de integração das funcionalidades em desenvolvimento.

### `feature/*`

Utilizada para desenvolver alterações de forma isolada.

Durante o projeto foram utilizadas branches como:

```text
feature/acessibilidade
feature/otimizacao
feature/documentacao
```

Após desenvolvimento e testes, cada feature é integrada à `develop` através de Pull Request.

Quando a versão estiver pronta para lançamento, a `develop` será integrada à `main`.

---

## 📝 Conventional Commits

As mensagens de commit seguem uma estrutura semântica.

Exemplos utilizados:

```text
chore: estrutura inicial da aplicação SPA

feat: aprimora acessibilidade conforme WCAG 2.1 AA

perf: otimiza recursos para produção

docs: consolida documentação técnica do projeto
```

Entre os prefixos utilizados estão:

```text
feat:
fix:
docs:
perf:
refactor:
style:
chore:
```

---

## 🏷️ Versionamento

O projeto segue o princípio de **Semantic Versioning**:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
1.0.0
```

Onde:

* **MAJOR** representa alterações incompatíveis;
* **MINOR** representa novas funcionalidades compatíveis;
* **PATCH** representa correções de falhas.

---

## 📋 Gestão no GitHub

O desenvolvimento também utiliza recursos do GitHub para organização e rastreabilidade.

Foram utilizados:

* Issues;
* Milestones;
* Pull Requests;
* revisão de alterações;
* branches;
* commits semânticos.

Entre as tarefas registradas estão:

```text
Revisar acessibilidade WCAG 2.1 AA

Otimizar aplicação para produção
```

Essas tarefas foram agrupadas no planejamento da versão da aplicação.

---

## 🧪 Testes realizados

Durante o desenvolvimento foram executados testes relacionados a:

* navegação entre as rotas da SPA;
* formulário vazio;
* nome inválido;
* e-mail inválido;
* telefone inválido;
* máscara automática de telefone;
* cadastro válido;
* mensagens de erro;
* mensagem de sucesso;
* armazenamento no localStorage;
* persistência após atualização da página;
* navegação utilizando apenas teclado;
* indicação de foco;
* carregamento das imagens;
* responsividade;
* Console do navegador;
* aba Network;
* ausência de recursos com erro 404.

---

## ▶️ Executando o projeto

Clone ou baixe o repositório.

Abra a pasta no Visual Studio Code.

O arquivo principal da aplicação está localizado em:

```text
html/index.html
```

Utilizando a extensão **Live Server**, clique com o botão direito sobre esse arquivo e selecione:

```text
Open with Live Server
```

A aplicação será carregada no navegador.

---

## 🌐 Deploy

A aplicação está publicada através do Github Pages.

### Acessar a aplicação

[🌐 ONG Solidariedade SPA] (https://lucasbeatto.github.io/ong-solidariedade-spa/)

A versão publicada utiliza a branch `main` como fonte do deploy.

---

## 🤖 Uso de Inteligência Artificial

O desenvolvimento deste projeto contou com o auxílio de uma ferramenta de Inteligência Artificial como recurso de apoio ao aprendizado.

A IA foi utilizada para:

* auxiliar na interpretação dos requisitos;
* explicar conceitos técnicos;
* orientar a organização do projeto;
* auxiliar na compreensão de HTML, CSS e JavaScript;
* analisar erros encontrados durante o desenvolvimento;
* sugerir abordagens para validação e modularização;
* apoiar o entendimento de Git, GitFlow e GitHub;
* revisar práticas de acessibilidade e organização do código.

O projeto foi desenvolvido progressivamente, com testes e correções realizados durante cada etapa.

---

## 🎓 Contexto acadêmico

Este projeto foi desenvolvido para fins educacionais como parte de atividades práticas relacionadas ao desenvolvimento front-end.

Durante sua construção foram abordados conceitos desde a estruturação inicial com HTML até práticas mais avançadas de SPA, modularização, persistência, acessibilidade, versionamento e preparação para produção.

---

## 📈 Aprendizado

O desenvolvimento deste projeto envolveu vários conceitos novos e apresentou desafios durante o processo.

A construção progressiva permitiu compreender melhor como estrutura, estilos, lógica, persistência, acessibilidade e versionamento se relacionam dentro de uma aplicação web.

O projeto continuará servindo como material de estudo e referência para aprofundamento dos conceitos de desenvolvimento front-end.

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e educacionais.