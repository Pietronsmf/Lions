# Portal do Distrito LC-1 de Lions Clubes Internacional

Recriação do site institucional do DLC-1 — site estático, sem build, sem dependências.
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
├── distrito.html           Somos o DLC-1 — missão, valores, estrutura
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
Ele é um arquivo de texto comum — abra em qualquer editor, altere e salve.

### Publicar uma notícia

Adicione um bloco no **início** da lista `noticias` (o primeiro aparece primeiro no site):

```js
{
  id: 'nome-curto-sem-espacos',
  categoria: 'Saúde',                       // Saúde | Liderança | Distrito | Inclusão | Cultura | Internacional
  titulo: 'Título da notícia',
  resumo: 'Um parágrafo descrevendo a ação, com os nomes dos companheiros envolvidos.',
  imagem: 'assets/img/noticias/arquivo.jpg', // coloque a foto nessa pasta
  url: 'clube-flamengo.html',                // opcional — página interna ou link externo
  rotuloLink: 'Saiba mais'                   // opcional — texto do botão
},
```

A categoria vira automaticamente um filtro na home. Categoria nova = filtro novo, sem mexer em código.

### Incluir ou corrigir um clube

Na lista `clubes`:

```js
{ nome: 'LC RJ Exemplo', tipo: 'lions' },                              // tipo: lions | leo | castor
{ nome: 'LC RJ Exemplo', tipo: 'lions', pagina: 'clube-exemplo.html' } // se o clube tiver página própria
```

Os contadores da página de clubes (117 / 10 / 29) se recalculam sozinhos.

### Registrar um novo governador

No **início** da lista `governadores` — o primeiro da lista é marcado como "Gestão atual":

```js
{ periodo: '2027/2028', nome: 'GD CaL Fulana de Tal', pagina: 'governadora.html' },
```

### Mudar os números em destaque da home

No bloco `indicadores` — os quatro números dourados abaixo do título do hero:

```js
{ valor: '1952', rotulo: 'Berço do leonismo' },
```

### Trocar telefone, e-mail, endereço ou redes sociais

Tudo fica no bloco `instituicao`, no topo do arquivo. Mudou ali, muda no cabeçalho
e no rodapé de todas as páginas de uma vez.

### Criar a página de um novo clube

Duplique `clube-flamengo.html`, troque o texto, e aponte o clube para ela em `dados.js`
usando o campo `pagina`.

---

## Recursos da interface

- **Tema claro e escuro** — botão no cabeçalho; a escolha fica salva no navegador.
- **Busca instantânea** em clubes e governadores, com tolerância a acentos
  (digitar "petropolis" encontra "Petrópolis").
- **Filtros por categoria** nas notícias e por tipo nos clubes.
- **Índice lateral automático** nas páginas longas, gerado a partir dos títulos.
- **Barra de progresso de leitura** e botão "voltar ao topo".
- **Menu lateral no celular**, fecha com Esc ou toque fora.
- **Acessibilidade**: link "pular para o conteúdo", navegação por teclado, foco visível,
  rótulos ARIA, respeito a `prefers-reduced-motion`.
- **Impressão**: folha de estilo dedicada — as páginas de texto saem limpas no papel e em PDF.

---

## Créditos do conteúdo

Todo o texto, as fotos e os dados são do site oficial do Distrito LC-1 de Lions Clubes
Internacional, operado sob concessão de direitos outorgada à FAF — Fundação Armando
Fajardo de Lions Clubes.
