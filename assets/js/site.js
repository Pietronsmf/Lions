/* =========================================================================
   DLC-1 · Comportamento e montagem da interface
   Depende de assets/js/dados.js (objeto global DLC1)
   ========================================================================= */
(function () {
  'use strict';

  const inst = DLC1.instituicao;
  const paginaAtual = document.body.dataset.pagina || '';

  /* ---------- Utilidades ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const semAcento = (t) => (t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  function guardar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) { /* modo privado */ }
  }
  function ler(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
  }

  /* ---------- Ícones ---------- */
  const ICONES = {
    seta: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    topo: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    fechar: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    sol: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    lua: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>',
    busca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    telefone: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',
    email: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 7l9 6 9-6"/></svg>',
    /* Ícones das causas globais */
    olho: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    gota: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s6 6.3 6 10.3a6 6 0 01-12 0c0-4 6-10.3 6-10.3z"/><path d="M9.5 13.5h5"/></svg>',
    prato: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/></svg>',
    folha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 5-15 16-16 0 11-5 16-12 16H4z"/><path d="M9 15c2-3 5-5 8-6"/></svg>',
    coracao: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.4 5.6a5 5 0 00-7.1 0L12 6.9l-1.3-1.3a5 5 0 10-7.1 7.1L12 21l8.4-8.3a5 5 0 000-7.1z"/></svg>',
    estrela: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.6l6.5-.9z"/></svg>',
    escudo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5l8 3.2v6c0 5-3.4 8.9-8 10-4.6-1.1-8-5-8-10v-6z"/><path d="M9 12l2 2 4-4.2"/></svg>',
    maos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V6.5a1.5 1.5 0 013 0V11"/><path d="M10 10.5V5a1.5 1.5 0 013 0v5.5"/><path d="M13 10.5V7a1.5 1.5 0 013 0v6"/><path d="M16 11.5a1.5 1.5 0 013 0V15a6 6 0 01-6 6h-1a7 7 0 01-7-7v-3a1.5 1.5 0 013 0"/></svg>'
  };

  /* =======================================================================
     CABEÇALHO
     ======================================================================= */
  function montarCabecalho() {
    const alvo = $('#cabecalho-site');
    if (!alvo) return;

    const itens = DLC1.menu.map((m) => {
      const atual = m.id === paginaAtual ? ' aria-current="page"' : '';
      return `<li><a class="nav__link" href="${m.url}"${atual}>${m.rotulo}</a></li>`;
    }).join('');

    const itensGaveta = DLC1.menu.map((m) => {
      const atual = m.id === paginaAtual ? ' aria-current="page"' : '';
      return `<a class="gaveta__link" href="${m.url}"${atual}>${m.rotulo}<span>${m.descricao}</span></a>`;
    }).join('');

    alvo.innerHTML = `
      <div class="barra-topo">
        <div class="container">
          <span class="barra-topo__lema">${inst.lema} · ${inst.lemaDistrital}</span>
          <div class="barra-topo__contatos">
            <a href="tel:+552122622198">${ICONES.telefone} ${inst.telefone}</a>
            <a href="${inst.whatsappUrl}" target="_blank" rel="noopener">${ICONES.telefone} ${inst.whatsapp}</a>
            <a href="mailto:${inst.email}">${ICONES.email} ${inst.email}</a>
          </div>
        </div>
      </div>

      <header class="cabecalho" id="cabecalho">
        <div class="container cabecalho__interno">
          <a class="marca" href="index.html" aria-label="Página inicial do Distrito LC-1">
            <span class="marca__escudo" aria-hidden="true">LC1</span>
            <span class="marca__texto">
              <span class="marca__nome">Distrito LC-1</span>
              <span class="marca__desc">Lions Clubes Internacional</span>
            </span>
          </a>

          <nav class="nav" aria-label="Navegação principal">
            <ul class="nav__lista">${itens}</ul>
          </nav>

          <div class="cabecalho__acoes">
            <button class="botao-icone" id="alternar-tema" type="button" aria-label="Alternar tema claro e escuro" title="Alternar tema"></button>
            <button class="botao-icone botao-menu" id="abrir-menu" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="gaveta">${ICONES.menu}</button>
          </div>
        </div>
      </header>

      <div class="gaveta" id="gaveta" role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <div class="gaveta__fundo" data-fechar-gaveta></div>
        <div class="gaveta__painel">
          <div class="gaveta__topo">
            <span class="gaveta__titulo">Navegação</span>
            <button class="botao-icone" type="button" data-fechar-gaveta aria-label="Fechar menu">${ICONES.fechar}</button>
          </div>
          <nav class="gaveta__lista" aria-label="Navegação principal (celular)">${itensGaveta}</nav>
          <div class="gaveta__rodape">
            <strong style="display:block;color:var(--ink);margin-bottom:.4rem">Fale com o Distrito</strong>
            <a href="${inst.whatsappUrl}" target="_blank" rel="noopener">${inst.whatsapp}</a><br>
            <a href="mailto:${inst.email}">${inst.email}</a>
          </div>
        </div>
      </div>`;

    iniciarTema();
    iniciarGaveta();
  }

  /* =======================================================================
     RODAPÉ
     ======================================================================= */
  function montarRodape() {
    const alvo = $('#rodape-site');
    if (!alvo) return;

    const institucionais = DLC1.linksInstitucionais
      .map((l) => {
        const externo = /^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : '';
        return `<li><a href="${l.url}"${externo}>${l.rotulo}</a></li>`;
      }).join('');

    const navegacao = DLC1.menu
      .map((m) => `<li><a href="${m.url}">${m.rotulo}</a></li>`).join('');

    alvo.innerHTML = `
      <footer class="rodape">
        <div class="container">
          <div class="rodape__grade">
            <div>
              <div class="rodape__marca">
                <span class="marca__escudo" aria-hidden="true">LC1</span>
                <span>
                  <b>Distrito LC-1</b>
                  <span>${inst.lema}</span>
                </span>
              </div>
              <address class="rodape__endereco">
                ${inst.nome}<br>
                ${inst.endereco}<br>
                <a href="tel:+552122622198">${inst.telefone}</a> &nbsp;|&nbsp;
                <a href="${inst.whatsappUrl}" target="_blank" rel="noopener">${inst.whatsapp}</a><br>
                <a href="mailto:${inst.email}">${inst.email}</a>
              </address>
              <div class="rodape__sociais">
                <a class="rodape__social" href="${inst.facebook}" target="_blank" rel="noopener" aria-label="Facebook do Distrito LC-1">${ICONES.facebook}</a>
                <a class="rodape__social" href="${inst.instagram}" target="_blank" rel="noopener" aria-label="Instagram do Distrito LC-1">${ICONES.instagram}</a>
              </div>
            </div>

            <div>
              <h4>Navegue</h4>
              <ul class="rodape__lista">${navegacao}</ul>
            </div>

            <div>
              <h4>Institucional</h4>
              <ul class="rodape__lista">${institucionais}</ul>
            </div>

            <div>
              <h4>Participe</h4>
              <ul class="rodape__lista">
                <li><a href="doe.html">Doe com segurança</a></li>
                <li><a href="lideranca.html">Cursos de liderança</a></li>
                <li><a href="subsidios.html">Solicitar subsídios</a></li>
                <li><a href="clubes.html">Encontrar um clube</a></li>
                <li><a href="mailto:${inst.email}">Ser voluntário</a></li>
              </ul>
            </div>
          </div>

          <div class="rodape__base">
            <p class="rodape__expediente"><strong style="color:rgba(255,255,255,.8)">Expediente:</strong> ${inst.expediente}</p>
            <p>#oMINIMÍDIA Hub de Comunicação</p>
          </div>
        </div>
      </footer>`;
  }

  /* =======================================================================
     TEMA CLARO / ESCURO
     ======================================================================= */
  function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    const botao = $('#alternar-tema');
    if (botao) {
      botao.innerHTML = tema === 'escuro' ? ICONES.sol : ICONES.lua;
      botao.setAttribute('aria-label', tema === 'escuro' ? 'Ativar tema claro' : 'Ativar tema escuro');
    }
  }

  function iniciarTema() {
    const salvo = ler('dlc1-tema');
    const prefereEscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTema(salvo || (prefereEscuro ? 'escuro' : 'claro'));

    const botao = $('#alternar-tema');
    if (!botao) return;
    botao.addEventListener('click', () => {
      const novo = document.documentElement.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
      aplicarTema(novo);
      guardar('dlc1-tema', novo);
    });
  }

  /* =======================================================================
     MENU LATERAL (CELULAR)
     ======================================================================= */
  function iniciarGaveta() {
    const gaveta = $('#gaveta');
    const abrir = $('#abrir-menu');
    if (!gaveta || !abrir) return;

    const alternar = (aberta) => {
      gaveta.classList.toggle('is-aberta', aberta);
      abrir.setAttribute('aria-expanded', String(aberta));
      document.body.style.overflow = aberta ? 'hidden' : '';
      if (aberta) {
        const primeiro = $('.gaveta__link', gaveta);
        if (primeiro) primeiro.focus();
      } else {
        abrir.focus();
      }
    };

    abrir.addEventListener('click', () => alternar(true));
    $$('[data-fechar-gaveta]', gaveta).forEach((b) => b.addEventListener('click', () => alternar(false)));
    $$('.gaveta__link', gaveta).forEach((a) => a.addEventListener('click', () => alternar(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && gaveta.classList.contains('is-aberta')) alternar(false);
    });
  }

  /* =======================================================================
     NOTÍCIAS
     ======================================================================= */
  function cartaoNoticia(n) {
    const externo = n.url && /^https?:/.test(n.url);
    const atributos = externo ? ' target="_blank" rel="noopener"' : '';
    const classeEtiqueta = {
      'Saúde': 'etiqueta--saude',
      'Liderança': 'etiqueta--ouro',
      'Internacional': 'etiqueta--destaque'
    }[n.categoria] || '';

    const acao = n.url
      ? `<a class="cartao__link" href="${n.url}"${atributos}>${n.rotuloLink || 'Saiba mais'} ${ICONES.seta}</a>`
      : '<span style="font-size:.78rem;color:var(--ink-3)">Ação permanente do Distrito</span>';

    return `
      <article class="cartao revelar" data-categoria="${n.categoria}">
        <div class="cartao__midia">
          <img src="${n.imagem}" alt="${n.titulo}" loading="lazy" decoding="async">
          <span class="etiqueta ${classeEtiqueta}">${n.categoria}</span>
        </div>
        <div class="cartao__corpo">
          <h3 class="cartao__titulo">${n.titulo}</h3>
          <p class="cartao__texto">${n.resumo}</p>
          <div class="cartao__rodape">${acao}</div>
        </div>
      </article>`;
  }

  function montarNoticias() {
    const lista = $('#lista-noticias');
    if (!lista) return;

    const categorias = ['Todas'].concat(
      DLC1.noticias.map((n) => n.categoria).filter((v, i, a) => a.indexOf(v) === i)
    );

    const filtros = $('#filtros-noticias');
    if (filtros) {
      filtros.innerHTML = categorias
        .map((c, i) => `<button class="chip${i === 0 ? ' is-ativo' : ''}" type="button" data-filtro="${c}">${c}</button>`)
        .join('');
    }

    lista.innerHTML = DLC1.noticias.map(cartaoNoticia).join('');

    const contador = $('#contador-noticias');
    const atualizarContador = (n) => {
      if (contador) contador.innerHTML = `<b>${n}</b> ${n === 1 ? 'publicação' : 'publicações'}`;
    };
    atualizarContador(DLC1.noticias.length);

    if (filtros) {
      filtros.addEventListener('click', (e) => {
        const botao = e.target.closest('[data-filtro]');
        if (!botao) return;
        const filtro = botao.dataset.filtro;
        $$('.chip', filtros).forEach((c) => c.classList.toggle('is-ativo', c === botao));
        let visiveis = 0;
        $$('.cartao', lista).forEach((card) => {
          const mostrar = filtro === 'Todas' || card.dataset.categoria === filtro;
          card.style.display = mostrar ? '' : 'none';
          if (mostrar) visiveis++;
        });
        atualizarContador(visiveis);
      });
    }

    observarRevelacao();
  }

  /* =======================================================================
     CLUBES
     ======================================================================= */
  function montarClubes() {
    const lista = $('#lista-clubes');
    if (!lista) return;

    const rotulos = { lions: 'LC', leo: 'LEO', castor: 'CAS' };
    const grupos = { lions: 'Lions Clubes', leo: 'Leo Clubes', castor: 'Clubes de Castores' };

    const html = DLC1.clubes.map((c) => {
      const link = c.pagina
        ? `<a class="clube__pagina" href="${c.pagina}">Ver página ${ICONES.seta}</a>`
        : '';
      return `
        <div class="clube clube--${c.tipo}" data-tipo="${c.tipo}" data-busca="${semAcento(c.nome)}">
          <span class="clube__marcador" aria-hidden="true">${rotulos[c.tipo]}</span>
          <span class="clube__nome">${c.nome}</span>
          ${link}
        </div>`;
    }).join('');

    lista.innerHTML = html + '<div class="aviso-vazio" id="clubes-vazio" style="display:none;grid-column:1/-1"><b>Nenhum clube encontrado</b>Revise a busca ou selecione outra categoria.</div>';

    const busca = $('#busca-clubes');
    const filtros = $('#filtros-clubes');
    const contador = $('#contador-clubes');
    const vazio = $('#clubes-vazio');
    let tipoAtivo = 'todos';

    function aplicar() {
      const termo = semAcento(busca ? busca.value.trim() : '');
      let visiveis = 0;
      $$('.clube', lista).forEach((el) => {
        const okTipo = tipoAtivo === 'todos' || el.dataset.tipo === tipoAtivo;
        const okTermo = !termo || el.dataset.busca.indexOf(termo) !== -1;
        const mostrar = okTipo && okTermo;
        el.style.display = mostrar ? '' : 'none';
        if (mostrar) visiveis++;
      });
      if (contador) {
        const nome = tipoAtivo === 'todos' ? 'clubes' : grupos[tipoAtivo].toLowerCase();
        contador.innerHTML = `<b>${visiveis}</b> ${nome}`;
      }
      if (vazio) vazio.style.display = visiveis === 0 ? '' : 'none';
    }

    if (busca) busca.addEventListener('input', aplicar);
    if (filtros) {
      filtros.addEventListener('click', (e) => {
        const botao = e.target.closest('[data-tipo]');
        if (!botao) return;
        tipoAtivo = botao.dataset.tipo;
        $$('.chip', filtros).forEach((c) => c.classList.toggle('is-ativo', c === botao));
        aplicar();
      });
    }
    aplicar();
  }

  /* =======================================================================
     GOVERNADORES
     ======================================================================= */
  function montarGovernadores() {
    const lista = $('#lista-governadores');
    if (!lista) return;

    const html = DLC1.governadores.map((g, i) => {
      const atual = i === 0 ? ' governador--atual' : '';
      const nome = g.pagina
        ? `<a href="${g.pagina}" style="color:var(--brand);font-weight:700">${g.nome}</a>`
        : (g.link ? `<a href="${g.link}" target="_blank" rel="noopener" style="color:var(--brand)">${g.nome}</a>` : g.nome);
      const selo = i === 0
        ? '<span class="governador__selo">Gestão atual</span>'
        : (g.nota ? `<span class="governador__selo">${g.nota}</span>` : '<span></span>');
      return `
        <div class="governador${atual}" data-busca="${semAcento(g.nome + ' ' + g.periodo)}">
          <span class="governador__ano">${g.periodo}</span>
          <span class="governador__nome">${nome}</span>
          ${selo}
        </div>`;
    }).join('');

    lista.innerHTML = html + '<div class="aviso-vazio" id="governadores-vazio" style="display:none"><b>Nenhum registro encontrado</b>Tente outro nome ou período.</div>';

    const busca = $('#busca-governadores');
    const contador = $('#contador-governadores');
    const vazio = $('#governadores-vazio');

    function aplicar() {
      const termo = semAcento(busca ? busca.value.trim() : '');
      let visiveis = 0;
      $$('.governador', lista).forEach((el) => {
        const mostrar = !termo || el.dataset.busca.indexOf(termo) !== -1;
        el.style.display = mostrar ? '' : 'none';
        if (mostrar) visiveis++;
      });
      if (contador) contador.innerHTML = `<b>${visiveis}</b> ${visiveis === 1 ? 'gestão' : 'gestões'}`;
      if (vazio) vazio.style.display = visiveis === 0 ? '' : 'none';
    }

    if (busca) busca.addEventListener('input', aplicar);
    aplicar();
  }

  /* =======================================================================
     CAUSAS GLOBAIS
     ======================================================================= */
  function montarCausas() {
    const lista = $('#lista-causas');
    if (!lista) return;
    lista.innerHTML = DLC1.causas.map((c) => `
      <article class="pilar revelar">
        <span class="pilar__icone" aria-hidden="true">${ICONES[c.icone] || ICONES.estrela}</span>
        <h3>${c.nome}</h3>
        <p>${c.texto}</p>
      </article>`).join('');
    observarRevelacao();
  }

  /* =======================================================================
     INDICADORES DO DISTRITO (home)
     ======================================================================= */
  function montarIndicadores() {
    const lista = $('#lista-indicadores');
    if (!lista) return;
    lista.innerHTML = DLC1.indicadores.map((i) => `
      <div class="hero__numero">
        <b>${i.valor}</b>
        <span>${i.rotulo}</span>
      </div>`).join('');
  }

  /* =======================================================================
     APOIADORES
     ======================================================================= */
  function montarApoiadores() {
    const lista = $('#lista-apoiadores');
    if (!lista) return;
    lista.innerHTML = DLC1.apoiadores.map((a) => `
      <a class="apoiador" href="${a.url}" target="_blank" rel="noopener" title="${a.nome}">
        <img src="${a.imagem}" alt="${a.nome}" loading="lazy" decoding="async">
      </a>`).join('');
  }

  /* =======================================================================
     ÍNDICE AUTOMÁTICO (páginas longas)
     ======================================================================= */
  function montarIndice() {
    const caixa = $('#indice-lista');
    const prosa = $('.prosa');
    if (!caixa || !prosa) return;

    const titulos = $$('h2', prosa);
    if (titulos.length < 3) {
      const painel = $('.indice');
      if (painel) painel.style.display = 'none';
      return;
    }

    caixa.innerHTML = titulos.map((h, i) => {
      if (!h.id) h.id = 'secao-' + (i + 1);
      return `<a href="#${h.id}">${h.textContent}</a>`;
    }).join('');

    const links = $$('a', caixa);
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle('is-ativo', l.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-120px 0px -70% 0px' });
    titulos.forEach((h) => obs.observe(h));
  }

  /* =======================================================================
     EFEITOS DE ROLAGEM
     ======================================================================= */
  function observarRevelacao() {
    const alvos = $$('.revelar:not(.is-visivel)');
    if (!alvos.length) return;
    if (!('IntersectionObserver' in window)) {
      alvos.forEach((a) => a.classList.add('is-visivel'));
      return;
    }
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add('is-visivel'), Math.min(i * 60, 300));
        obs.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    alvos.forEach((a) => obs.observe(a));
  }

  function iniciarRolagem() {
    const progresso = $('#barra-progresso');
    const voltar = $('#voltar-topo');
    const cabecalho = $('#cabecalho');

    if (voltar) {
      voltar.innerHTML = ICONES.topo;
      voltar.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    let agendado = false;
    function aoRolar() {
      const y = window.scrollY;
      if (cabecalho) cabecalho.classList.toggle('is-fixo', y > 12);
      if (voltar) voltar.classList.toggle('is-visivel', y > 600);
      if (progresso) {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        progresso.style.width = (total > 0 ? (y / total) * 100 : 0) + '%';
      }
      agendado = false;
    }

    window.addEventListener('scroll', () => {
      if (agendado) return;
      agendado = true;
      window.requestAnimationFrame(aoRolar);
    }, { passive: true });

    aoRolar();
  }

  /* =======================================================================
     ANO CORRENTE
     ======================================================================= */
  function preencherDinamicos() {
    $$('[data-ano-leonistico]').forEach((el) => { el.textContent = inst.anoLeonistico; });
    $$('[data-total-clubes]').forEach((el) => {
      el.textContent = DLC1.clubes.filter((c) => c.tipo === 'lions').length;
    });
    $$('[data-total-leo]').forEach((el) => {
      el.textContent = DLC1.clubes.filter((c) => c.tipo === 'leo').length;
    });
    $$('[data-total-castores]').forEach((el) => {
      el.textContent = DLC1.clubes.filter((c) => c.tipo === 'castor').length;
    });
    $$('[data-total-governadores]').forEach((el) => { el.textContent = DLC1.governadores.length; });
  }

  /* =======================================================================
     INICIALIZAÇÃO
     ======================================================================= */
  function iniciar() {
    montarCabecalho();
    montarRodape();
    montarNoticias();
    montarClubes();
    montarGovernadores();
    montarCausas();
    montarIndicadores();
    montarApoiadores();
    montarIndice();
    preencherDinamicos();
    iniciarRolagem();
    observarRevelacao();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
