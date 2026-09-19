# Onyx Stack

Landing page da Onyx Stack, um estúdio de software que constrói produtos digitais prontos e soluções sob medida para negócios que querem evoluir com confiança.

## Proposta

A Onyx trabalha em dois caminhos:

- **Produtos prontos:** soluções de prateleira, com escopo claro e preço sob consulta.
- **Software sob medida:** aplicativos, sistemas, automações, dados, IA e infraestrutura construídos do zero ou evoluindo o que já existe.

A experiência é uma única landing page, com navegação por âncoras para `#sobre`, `#servicos`, `#produtos` e `#contato`.

## Stack

- React 19
- Vite 7
- Context API e Hooks
- CSS Modules nos componentes e tokens CSS compartilhados
- React Icons
- ESLint 9

O React Router foi removido porque o site não possui rotas internas. A publicação na Vercel funciona como uma SPA estática sem `vercel.json` ou rewrites.

## Estrutura

```text
src/
  app/
    App.jsx                 composicao da landing
  components/
    common/                 Button, Card e SectionHeading
    layout/                 Header, PageShell e Footer
    products/               ProductCard
    services/               ServiceCard
    theme/                  ThemeToggle
  context/                  ThemeContext
  hooks/                    useTheme e useDocumentMeta
  sections/                 Hero, Sobre, Servicos, Produtos, Processo, FAQ e Contato
  services/                 catalog.js e adaptador de contato
  styles/                   tokens, globais e estilos da landing
public/marketing/            logos originais da Onyx
```

## Como rodar

Requer Node.js 20+ e Yarn ou npm.

```bash
yarn
yarn dev
```

Comandos de produção:

```bash
yarn build
yarn preview
```

Também é possível usar npm:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Tema dark/light

O dark mode é o padrão e usa preto/cinza escuro com amarelo `#F4C542`. O modo claro usa `#F3F1EA`, branco e amarelo escuro `#B88900` para manter contraste.

A preferência é salva em `localStorage` com a chave `onyx-theme`. Sem uma preferência salva, o site consulta `prefers-color-scheme`. Um script no `index.html` aplica o tema antes do React montar, evitando flash do tema errado. O `ThemeToggle` fica no header e funciona com mouse, teclado e leitor de tela.

## Adicionar produtos e serviços

Edite `src/services/catalog.js`.

Para um produto, informe `id`, `tag`, `name`, `description` e `includes`. Não coloque preços numéricos: todo produto deve usar a mensagem **Preço sob consulta — cada projeto é único** e encaminhar o visitante para `#contato`.

Para um serviço, informe `icon`, `title` e `description`. O mesmo `ServiceCard` renderiza todos os itens da seção de serviços.

## Como o orçamento é solicitado

Os CTAs de produtos, serviços e hero levam à seção `#contato`. O formulário coleta nome, e-mail e contexto do projeto, apresenta estados de envio e sucesso e hoje usa `src/services/contact.js` como adaptador mockado. Esse arquivo pode ser substituído por uma chamada HTTP ou integração com CRM sem alterar a interface.

## Responsividade e acessibilidade

A interface é mobile-first:

- Até `480px`: uma coluna, menu hambúrguer, CTAs empilhados e controles com área de toque confortável.
- `481px` a `767px`: conteúdo fluido e cards em coluna.
- `768px` a `1023px`: grids de duas colunas.
- A partir de `1024px`: grids amplos, hero dividido e processo em quatro etapas.

As seções têm `scroll-margin-top` para o header fixo, o documento usa HTML semântico, há foco visível, labels em campos, `aria-label` em controles de ícone e `prefers-reduced-motion` reduz transições.

## Marca d'água

A logo `public/marketing/2025-06-28_temporary_onyx_logo_compressed.png` aparece como textura absoluta no Hero e na seção Sobre, com opacidade baixa, `pointer-events: none`, `aria-hidden` e carregamento lazy quando apropriado. Ela permanece discreta nos temas dark e light.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Use `yarn build` como comando de build.
3. Use `dist` como diretório de saída.
4. Não adicione rewrites: a aplicação possui apenas a entrada `/` e usa âncoras internas.

## Roadmap

- Conectar o formulário a e-mail, CRM ou WhatsApp.
- Substituir o catálogo mockado por API e CMS.
- Adicionar cases e depoimentos reais.
- Criar testes de acessibilidade, componentes e navegação.
- Medir performance e conversão em produção.

## Licença e créditos

Projeto privado da Onyx Stack. As logos em `public/marketing` são assets originais reutilizados da versão anterior. Ícones são fornecidos por React Icons.
