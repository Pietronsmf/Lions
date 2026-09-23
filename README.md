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
└── assets/
    ├── css/estilo.css      Design system completo (tokens, componentes, temas)
    ├── js/dados.js         ★ TODO O CONTEÚDO EDITÁVEL
    ├── js/site.js          Montagem da interface e interações
    └── img/                Imagens do site original
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
  imagem: 'assets/img/noticias/arquivo.jpg', // coloque a foto nessa pasta
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
- **Ouro quente** `#ffc20e` para os acentos.
- **Sol de raios** (`assets/img/marcas/raios-sol.svg`) surgindo dos cantos das faixas azuis,
  a assinatura gráfica da gestão 2026/27. As posições e tamanhos ficam na propriedade
  `background` de `.hero`, `.hero-pagina`, `.secao--escura`, `.chamada` e `.destaque-citacao`.
- **Palavra-chave destacada** dentro do título: basta envolver o trecho em
  `<span class="realce">…</span>`. Fica dourado sobre azul e azul sobre fundo claro.
- **Régua dourada** sob os títulos de seção, aplicada automaticamente.
- **Favicon e ícone de app** gerados do emblema oficial do Lions:
  `favicon.ico` (16/32/48), `icone-32.png`, `icone-180.png` para iOS e
  `icone-192/512.png` no `site.webmanifest`, que permite instalar o portal
  na tela inicial do celular.
- **Véu azul** sobre as fotos das notícias, que some ao passar o mouse, para a grade
  ler como o feed sem esconder as fotos das ações.
- **Etiqueta e botão de seta dourados** nos cartões.

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
