# Portal do Distrito LC-1 de Lions Clubes Internacional

Recriação do site institucional do DLC-1, site estático, sem build, sem dependências.
Todo o conteúdo veio do site original (`lionsclubes-dlc1.org`), reorganizado em seções.

---

## Como abrir

**Modo mais simples:** dê dois cliques em `index.html`. Funciona sem servidor.

**Com servidor local** (recomendado para testar como ficará publicado):

```bash
npx serve .
```

## Como publicar

É um site 100% estático: basta enviar a pasta inteira por FTP para a hospedagem,
ou conectá-la ao Netlify, Vercel, GitHub Pages ou Cloudflare Pages. Nada a compilar.

- **Endereços antigos continuam funcionando.** O `.htaccess` (Apache, a hospedagem atual)
  e o `_redirects` (Netlify/Cloudflare) redirecionam as 16 páginas do site anterior, como
  `/FAF/FUNDACAO_ARMANDO_FAJARDO_LIONS_CLUBES.html`, para as novas. Links já compartilhados
  e resultados do Google não quebram. No GitHub Pages esses arquivos não têm efeito.
- **Imagem de compartilhamento** (WhatsApp, Facebook): `assets/img/marcas/og-dlc1.jpg`,
  referenciada com o endereço completo `https://www.lionsclubes-dlc1.org/...`. Se o site for
  publicado em outro domínio, troque esse endereço nas páginas (busque por `og:image`).

---

## Estrutura

```
Lions/
├── index.html              Notícias (home)
├── distrito.html           Somos o DLC-1, missão, valores, estrutura
├── dirigentes.html         Governadores de 1952 até hoje (com busca)
├── governadora.html        Mensagem da Governadora + pin oficial
├── faf.html                Fundação Armando Fajardo
├── clubes.html             Lions, Leo e Castores (com busca e filtros)
├── causas.html             As oito causas globais
├── lideranca.html          Cursos de desenvolvimento da liderança
├── subsidios.html          Subsídios da LCIF
├── alac.html               Academia de Letras, Artes e Ciências
├── doe.html                Doe com segurança
├── editorial.html          Editorial do portal
├── clube-flamengo.html     ┐
├── clube-ama-xerem.html    │ Páginas de clubes
├── clube-recreio.html      │
├── clube-quitandinha.html  ┘
├── 404.html                Página de erro com a marca
├── .htaccess               Redirecionamentos 301 do site antigo (Apache) e cache
├── _redirects              Os mesmos redirecionamentos para Netlify/Cloudflare
├── favicon.ico, site.webmanifest
└── assets/
    ├── css/estilo.css      Design system (tokens, componentes, temas)
    ├── js/dados.js         ★ TODO O CONTEÚDO EDITÁVEL
    ├── js/site.js          Montagem da interface e interações
    ├── fonts/              Plus Jakarta Sans e Source Serif 4 (auto-hospedadas)
    └── img/                Fotos em WebP, logos e ícones
```

---

## Como atualizar o conteúdo

Quase tudo se edita em **um único arquivo**: `assets/js/dados.js`.
Ele é um arquivo de texto comum, abra em qualquer editor, altere e salve.

### Publicar uma notícia

Adicione um bloco no **início** da lista `noticias` (o primeiro aparece primeiro no site):

```js
{
  id: 'nome-curto-sem-espacos',
  categoria: 'Saúde',                       // Saúde | Liderança | Distrito | Inclusão | Cultura | Internacional
  titulo: 'Título da notícia',
  resumo: 'Um parágrafo descrevendo a ação, com os nomes dos companheiros envolvidos.',
  imagem: 'assets/img/noticias/arquivo.webp', // coloque a foto nessa pasta (de preferência WebP)
  url: 'clube-flamengo.html',                // opcional, página interna ou link externo
  rotuloLink: 'Saiba mais'                   // opcional, texto do botão
},
```

A categoria vira automaticamente um filtro na home. Categoria nova = filtro novo, sem mexer em código.

### Incluir ou corrigir um clube

Na lista `clubes`:

```js
{ nome: 'LC RJ Exemplo', tipo: 'lions' },                              // tipo: lions | leo | castor
{ nome: 'LC RJ Exemplo', tipo: 'lions', pagina: 'clube-exemplo.html' } // se o clube tiver página própria
```

Os contadores da página de clubes (121 / 10 / 29) se recalculam sozinhos.

### Registrar um novo governador

No **início** da lista `governadores`, o primeiro da lista é marcado como "Gestão atual":

```js
{ periodo: '2027/2028', nome: 'GD CaL Fulana de Tal', pagina: 'governadora.html' },
```

### Trocar a arte de um apoiador

Na lista `apoiadores`. O campo `fundo` é opcional e serve para artes que já vêm
com cor de fundo própria, evitando tarjas brancas em volta da imagem:

```js
{ nome: 'Nome do apoiador',
  imagem: 'assets/img/anuncios/arquivo.png',
  url: 'https://site-do-apoiador.com/',
  fundo: '#14305c' }   // opcional
```

### Trocar telefone, e-mail, endereço ou redes sociais

Tudo fica no bloco `instituicao`, no topo do arquivo. Mudou ali, muda no cabeçalho
e no rodapé de todas as páginas de uma vez.

### Criar a página de um novo clube

Duplique `clube-flamengo.html`, troque o texto, e aponte o clube para ela em `dados.js`
usando o campo `pagina`.

---

## Identidade visual

O site segue o padrão das artes do Instagram [@distritolc1](https://www.instagram.com/distritolc1):

- **Azul royal** `#0b47a1` como base, com brilho `#1557c4` no centro e `#062a63` nas bordas.
- **Ouro quente** `#ffc20e` como única cor de destaque. Para texto pequeno sobre azul usa-se
  `#ffd54f`, que mantém contraste AA mesmo no ponto mais claro do gradiente.
- **Sol de raios** (`assets/img/marcas/raios-sol.svg`) surgindo dos cantos das faixas azuis,
  sempre do lado oposto ao texto. Um grão finíssimo tira o aspecto de gradiente digital.
- **Palavra-chave destacada** no título: envolva o trecho em `<span class="realce">…</span>`.
- **Régua dourada** sob os títulos de seção, aplicada automaticamente.

### Regras do sistema

Estão escritas no topo de `assets/css/estilo.css`. Em resumo:

- **Tipografia**: Plus Jakarta Sans em títulos e interface; Source Serif 4 só nos textos
  longos. As duas ficam em `assets/fonts`, sem requisição ao Google (mais rápido e sem
  enviar o IP do visitante a terceiros).
- **Formas**: botões, chips e busca em pílula; etiquetas com 6px; cartões com 20px;
  blocos de destaque com 28px.
- **Ações**: a ação principal de cada bloco é um botão; a secundária é um link com seta
  (`.link-seta`). O botão dourado leva a seta num círculo próprio (`.botao--com-icone`).
- **Rótulos acima dos títulos** (`.sobretitulo`): no máximo um a cada três seções. O do topo
  de cada página identifica a página; nas seções, o próprio título deve bastar.
- **Ícones**: [Phosphor](https://phosphoricons.com), estilo regular (licença MIT). Para um
  ícone novo, baixe o SVG de `cdn.jsdelivr.net/npm/@phosphor-icons/core@2/assets/regular/`.
- **Movimento**: só `transform` e `opacity`; toque responde no `:active`; hover só existe
  em dispositivos com mouse. Com "reduzir movimento" ligado, os deslocamentos somem e ficam
  apenas as transições de opacidade.

### Manchete das notícias

A primeira notícia de `dados.js` com `destaque: true` ocupa a linha inteira da grade, em
layout horizontal no computador. A área da imagem fica perto de 2:1, então banners com
texto não são cortados.

## Versão mobile

Testado de 320px a 1600px, em todas as páginas, sem rolagem horizontal.

- **Cabeçalho**: faixa própria de até 1320px, mais larga que o corpo do site, senão o menu
  e o botão de contato não caberiam. Abaixo de 1340px o botão fica só com o ícone e o
  subtítulo da marca recolhe; abaixo de 1180px o menu vira gaveta lateral; abaixo de
  380px fica só o emblema.
- **Alvos de toque** de no mínimo 44px; botões ocupam a largura toda.
- **Painel de busca e filtros**: em coluna, com `flex-wrap:nowrap` e `flex:0 0 auto` nos
  filhos. Sem isso, o eixo principal vira o vertical e o `flex:1 1 260px` do campo de
  busca vira 260px de *altura*, soltando a lupa do input.
- **Faixa de chips** rola na horizontal, com `min-width:0` para encolher em vez de
  esticar a página, e barra de rolagem fina.
- **Grades** usam `minmax(min(310px,100%),1fr)`: sem o `min()`, a coluna mínima fixa
  estoura telas de 320px.
- **Cartão em destaque**: `min-height` zerado no celular, porque junto de `aspect-ratio`
  ele derivava a largura (230 × 1.6 = 368px) e passava da coluna.
- **Índice das páginas longas** aparece **antes** do texto, compacto e com rolagem própria.
- **Logos dos apoiadores** em duas colunas; demais grades em coluna única.
- **Sóis de raios** reduzidos abaixo de 900px para não competirem com o texto.

## Recursos da interface

- **Botão "Contato"** no cabeçalho: abre uma janela com telefone, WhatsApp, e-mail,
  endereço e redes sociais. Fecha com Esc, com o X ou clicando fora. No celular o mesmo
  botão aparece dentro do menu lateral. Os dados vêm do bloco `instituicao`.
- **Tema claro e escuro**, botão no cabeçalho; a escolha fica salva no navegador.
- **Busca instantânea** em clubes e governadores, com tolerância a acentos
  (digitar "petropolis" encontra "Petrópolis").
- **Filtros por categoria** nas notícias e por tipo nos clubes.
- **Índice lateral automático** nas páginas longas, gerado a partir dos títulos.
- **Barra de progresso de leitura** e botão "voltar ao topo".
- **Menu lateral no celular**, fecha com Esc ou toque fora.
- **Acessibilidade**: link "pular para o conteúdo", navegação por teclado, foco visível,
  rótulos ARIA, respeito a `prefers-reduced-motion`.
- **Impressão**: folha de estilo dedicada, as páginas de texto saem limpas no papel e em PDF.

---

## Créditos do conteúdo

Todo o texto, as fotos e os dados são do site oficial do Distrito LC-1 de Lions Clubes
Internacional, operado sob concessão de direitos outorgada à FAF, Fundação Armando
Fajardo de Lions Clubes.
