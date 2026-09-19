# Onyx Stack

Frontend da Onyx Stack: infraestrutura web, automação e softwares sob medida para negócios que querem evoluir com confiança.

## Visão do produto

O site mantém a proposta original em dois caminhos comerciais:

- **Produtos prontos:** soluções de prateleira com compra direta e suporte humano.
- **Software sob medida:** briefing, orçamento e construção de sistemas feitos do zero.

### Telas

- **Início:** hero com a mensagem institucional, proposta de valor, produtos em destaque, serviços e CTA.
- **Produtos:** catálogo mockado com cards de solução e encaminhamento para contato.
- **Sob medida:** processo de briefing, desenvolvimento e acompanhamento.
- **Sobre:** contexto institucional e a proposta de trabalhar perto do negócio.
- **Contato:** formulário acessível com estados de envio, sucesso e canal direto por e-mail.

A identidade usa o símbolo e o wordmark existentes em `public/marketing`, com uma direção editorial escura, superfícies cinza e amarelo como destaque.

## Stack

- React 19 com Vite 7
- React Router 7
- Context API + Hooks
- CSS global com tokens e CSS Modules para componentes reutilizáveis
- React Icons
- ESLint 9

## Estrutura

```text
src/
	app/              entrada e roteador
	components/       layout, tema, cards e controles reutilizáveis
	context/          ThemeContext
	hooks/            tema e metadata por página
	pages/            Home, Produtos, Serviços, Sobre, Contato e 404
	services/         catálogo mockado e adaptador de contato
	styles/           tokens, estilos globais e estilos de páginas
public/marketing/   logo e variações originais
```

## Como rodar

Requer Node.js 20+ e npm ou Yarn.

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build       # gera a versão de produção em dist/
npm run preview     # serve o build localmente
npm run lint        # verifica o código
```

O repositório também inclui `flake.nix` com Node.js 22, Yarn e Chromium para quem usa Nix:

```bash
nix develop
yarn install
yarn dev
```

## Tema dark/light

O tema dark é o padrão visual, com `#0A0B0D`, cinzas escuros e amarelo `#F4C542`. O modo light usa `#F3F1EA`, superfícies brancas e amarelo `#B88900` para preservar contraste.

Ao carregar, o frontend procura `onyx-theme` no `localStorage`. Sem preferência salva, usa `prefers-color-scheme`; um script no HTML aplica o atributo antes da primeira pintura para evitar flash de tema. O botão com ícone de sol/lua fica visível no header em desktop e mobile.

## Adicionar produtos e serviços

Os dados atuais são mockados para deixar a interface pronta para uma API futura. Para adicionar um produto, inclua um objeto em `src/services/catalog.js` com `id`, `tag`, `name`, `description`, `price` e `action`. A home e a página de produtos renderizam o catálogo pelo mesmo componente.

Para adicionar um serviço, inclua `number`, `title` e `description` no array `services`. O card será reutilizado na home e na página de serviços.

Quando houver backend, substitua as funções de `src/services/` por chamadas HTTP sem alterar as páginas ou os componentes de apresentação.

## Roadmap

- Conectar catálogo e disponibilidade a uma API.
- Integrar o formulário com CRM ou serviço de e-mail.
- Adicionar checkout para produtos de prateleira.
- Criar páginas individuais de produto e cases.
- Adicionar testes de componentes e testes de navegação.
- Monitorar métricas de performance e conversão.

## Licença e créditos

Projeto privado da Onyx Stack. Os assets de marca em `public/marketing` são reutilizados do frontend original. Ícones fornecidos por React Icons. Nenhuma integração externa de dados está ativa nesta versão.
