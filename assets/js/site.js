/* =========================================================================
   DLC-1 · Comportamento e montagem da interface
   Depende de assets/js/dados.js (objeto global DLC1)
   Ícones: Phosphor Icons, estilo regular, licença MIT (phosphoricons.com)
   ========================================================================= */
(function () {
  'use strict';

  const inst = DLC1.instituicao;
  const paginaAtual = document.body.dataset.pagina || '';
  const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Utilidades ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const FAIXA_ACENTOS = new RegExp('[\\u0300-\\u036f]', 'g');
  const semAcento = (t) => (t || '').normalize('NFD').replace(FAIXA_ACENTOS, '').toLowerCase();

  function guardar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) { /* modo privado */ }
  }
  function ler(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
  }

  /* ---------- Ícones ---------- */
  const ICONES = {
    seta: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/></svg>',
    topo: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"/></svg>',
    menu: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/></svg>',
    fechar: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>',
    sol: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>',
    lua: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/></svg>',
    busca: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/></svg>',
    facebook: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"/></svg>',
    instagram: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>',
    telefone: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"/></svg>',
    email: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/></svg>',
    contato: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"/></svg>',
    whatsapp: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"/></svg>',
    local: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"/></svg>',
    olho: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/></svg>',
    gota: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"/></svg>',
    prato: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"/></svg>',
    folha: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z"/></svg>',
    coracao: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"/></svg>',
    estrela: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"/></svg>',
    escudo: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z"/></svg>',
    maos: '<svg class="ic" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"/></svg>'
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
      <header class="cabecalho" id="cabecalho">
        <div class="container cabecalho__interno">
          <a class="marca" href="index.html" aria-label="Página inicial do Distrito LC-1">
            <img class="marca__emblema" src="assets/img/marcas/emblema-lions.webp" alt="" width="150" height="146" decoding="async">
            <span class="marca__texto">
              <span class="marca__nome">Distrito LC-1</span>
              <span class="marca__desc">Lions Clubes Internacional</span>
            </span>
          </a>

          <nav class="nav" aria-label="Navegação principal">
            <ul class="nav__lista">${itens}</ul>
          </nav>

          <div class="cabecalho__acoes">
            <button class="botao-contato" id="abrir-contato" type="button" aria-haspopup="dialog" title="Falar com o Distrito">
              ${ICONES.contato}<span>Contato</span>
            </button>
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
            <button class="botao botao--primario" type="button" data-abrir-contato>
              ${ICONES.contato} Falar com o Distrito
            </button>
          </div>
        </div>
      </div>

      <dialog class="dialogo-contato" id="dialogo-contato" aria-labelledby="titulo-contato">
        <div class="dialogo-contato__topo">
          <img src="assets/img/marcas/emblema-lions.webp" alt="" width="150" height="146">
          <div>
            <h2 id="titulo-contato">Fale com o Distrito</h2>
            <p>${inst.nome}</p>
          </div>
          <button class="dialogo-contato__fechar" type="button" data-fechar-contato aria-label="Fechar">${ICONES.fechar}</button>
        </div>

        <div class="dialogo-contato__corpo">
          <a class="contato-item" href="tel:+552122622198">
            <span class="contato-item__icone" aria-hidden="true">${ICONES.telefone}</span>
            <span class="contato-item__texto">
              <span class="contato-item__rotulo">Telefone</span>
              <span class="contato-item__valor">${inst.telefone}</span>
            </span>
          </a>

          <a class="contato-item" href="${inst.whatsappUrl}" target="_blank" rel="noopener">
            <span class="contato-item__icone" aria-hidden="true">${ICONES.whatsapp}</span>
            <span class="contato-item__texto">
              <span class="contato-item__rotulo">WhatsApp</span>
              <span class="contato-item__valor">${inst.whatsapp}</span>
            </span>
          </a>

          <a class="contato-item" href="mailto:${inst.email}">
            <span class="contato-item__icone" aria-hidden="true">${ICONES.email}</span>
            <span class="contato-item__texto">
              <span class="contato-item__rotulo">E-mail</span>
              <span class="contato-item__valor">${inst.email}</span>
            </span>
          </a>

          <div class="contato-item contato-item--endereco">
            <span class="contato-item__icone" aria-hidden="true">${ICONES.local}</span>
            <span class="contato-item__texto">
              <span class="contato-item__rotulo">Endereço</span>
              <span class="contato-item__valor">${inst.endereco}</span>
            </span>
          </div>

          <div class="dialogo-contato__sociais">
            <a href="${inst.facebook}" target="_blank" rel="noopener">${ICONES.facebook} Facebook</a>
            <a href="${inst.instagram}" target="_blank" rel="noopener">${ICONES.instagram} Instagram</a>
          </div>
        </div>
      </dialog>`;

    iniciarTema();
    iniciarGaveta();
    iniciarContato();
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

    alvo.innerHTML = `
      <footer class="rodape">
        <div class="container">
          <div class="rodape__grade">
            <div>
              <a class="rodape__logo" href="index.html">
                <img src="assets/img/marcas/logo-dlc1-banner.webp" alt="Lions Internacional, Distrito LC-1 Brasil" width="640" height="183" loading="lazy" decoding="async">
              </a>
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
              <h4>Participe</h4>
              <ul class="rodape__lista">
                <li><a href="clubes.html">Encontrar um clube</a></li>
                <li><a href="doe.html">Doe com segurança</a></li>
                <li><a href="lideranca.html">Cursos de liderança</a></li>
                <li><a href="subsidios.html">Solicitar subsídios</a></li>
                <li><a href="mailto:${inst.email}" data-abrir-contato>Ser voluntário</a></li>
              </ul>
            </div>

            <div>
              <h4>Institucional</h4>
              <ul class="rodape__lista">${institucionais}</ul>
            </div>
          </div>

          <div class="rodape__base">
            <p class="rodape__expediente"><strong>Expediente:</strong> ${inst.expediente}</p>
            <p>#oMINIMÍDIA Hub de Comunicação</p>
          </div>
        </div>
      </footer>`;
  }

  /* =======================================================================
     TEMA CLARO / ESCURO
     ======================================================================= */
  /* cor da barra do celular acompanha o topo da página, não a cor da marca */
  const COR_TOPO = { claro: '#ffffff', escuro: '#0c1323' };
  /* o estado vive aqui, não no DOM: com a transição animada o atributo só muda
     quando o navegador roda o callback, e cliques rápidos leriam o valor antigo */
  let temaAtual = 'claro';

  function aplicarTema(tema) {
    temaAtual = tema;
    document.documentElement.setAttribute('data-tema', tema);
    $$('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', COR_TOPO[tema]));
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
      const novo = temaAtual === 'escuro' ? 'claro' : 'escuro';
      temaAtual = novo;
      guardar('dlc1-tema', novo);
      /* dissolve em vez de piscar; sem o recurso, com menos movimento ou com a aba
         em segundo plano (quando a transição não roda), troca direto */
      const animar = document.startViewTransition && !menosMovimento.matches &&
                     document.visibilityState === 'visible';
      if (animar) {
        const transicao = document.startViewTransition(() => aplicarTema(novo));
        /* cliques rápidos fazem o navegador pular a transição anterior; isso é esperado */
        transicao.ready.catch(() => {});
      } else {
        aplicarTema(novo);
      }
    });
  }

  /* =======================================================================
     JANELA DE CONTATOS
     ======================================================================= */
  function iniciarContato() {
    const dialogo = $('#dialogo-contato');
    if (!dialogo) return;

    const nativo = typeof dialogo.showModal === 'function';
    const aberto = () => (nativo ? dialogo.open : dialogo.hasAttribute('open'));
    let fechando = false;

    function abrir() {
      if (aberto()) return;
      fechando = false;
      dialogo.classList.remove('is-fechando');
      if (nativo) {
        dialogo.showModal();
      } else {
        /* navegador sem <dialog> modal: posiciona a janela na mão */
        dialogo.style.cssText = 'position:fixed;z-index:300;top:50%;left:50%;transform:translate(-50%,-50%);margin:0';
        dialogo.setAttribute('open', '');
        document.body.style.overflow = 'hidden';
      }
      const primeiro = $('.contato-item', dialogo);
      if (primeiro) primeiro.focus();
    }

    function concluirFechamento() {
      if (!fechando) return;
      fechando = false;
      dialogo.classList.remove('is-fechando');
      if (nativo) dialogo.close();
      else { dialogo.removeAttribute('open'); document.body.style.overflow = ''; }
    }

    function fechar() {
      if (!aberto() || fechando) return;
      fechando = true;
      if (menosMovimento.matches || !nativo) { concluirFechamento(); return; }
      dialogo.classList.add('is-fechando');
      dialogo.addEventListener('animationend', concluirFechamento, { once: true });
      setTimeout(concluirFechamento, 220); /* garantia caso a animação não dispare */
    }

    /* qualquer elemento com data-abrir-contato abre a janela; sem JS o link continua valendo */
    document.addEventListener('click', (e) => {
      const gatilho = e.target.closest('#abrir-contato, [data-abrir-contato]');
      if (!gatilho) return;
      e.preventDefault();
      const gaveta = $('#gaveta');
      if (gaveta && gaveta.classList.contains('is-aberta')) {
        gaveta.classList.remove('is-aberta');
        document.body.style.overflow = '';
      }
      abrir();
    });

    $$('[data-fechar-contato]', dialogo).forEach((b) => b.addEventListener('click', fechar));

    /* clique fora da janela fecha */
    dialogo.addEventListener('click', (e) => {
      if (e.target !== dialogo) return;
      const r = dialogo.getBoundingClientRect();
      const fora = e.clientY < r.top || e.clientY > r.bottom || e.clientX < r.left || e.clientX > r.right;
      if (fora) fechar();
    });

    /* um link escolhido fecha a janela */
    $$('a', dialogo).forEach((a) => a.addEventListener('click', fechar));

    /* Esc nativo vira fechamento animado */
    dialogo.addEventListener('cancel', (e) => { e.preventDefault(); fechar(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && aberto()) { e.preventDefault(); fechar(); }
    });

    dialogo.addEventListener('close', () => { document.body.style.overflow = ''; });
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
  function cartaoNoticia(n, i) {
    const externo = n.url && /^https?:/.test(n.url);
    const atributos = externo ? ' target="_blank" rel="noopener"' : '';
    /* a primeira notícia marcada como destaque vira manchete de duas colunas */
    const manchete = n.destaque && i === 0 ? ' cartao--destaque' : '';

    const acao = n.url
      ? `<a class="cartao__link" href="${n.url}"${atributos}>${n.rotuloLink || 'Saiba mais'} ${ICONES.seta}</a>`
      : '<span class="cartao__nota">Ação permanente do Distrito</span>';

    return `
      <article class="cartao${manchete} revelar" data-categoria="${n.categoria}">
        <div class="cartao__midia">
          <img src="${n.imagem}" alt="${n.titulo}" loading="lazy" decoding="async">
        </div>
        <div class="cartao__corpo">
          <span class="etiqueta">${n.categoria}</span>
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
        .map((c, i) => `<button class="chip${i === 0 ? ' is-ativo' : ''}" type="button" data-filtro="${c}" aria-pressed="${i === 0}">${c}</button>`)
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
        $$('.chip', filtros).forEach((c) => {
          c.classList.toggle('is-ativo', c === botao);
          c.setAttribute('aria-pressed', String(c === botao));
        });
        let visiveis = 0;
        $$('.cartao', lista).forEach((card) => {
          const mostrar = filtro === 'Todas' || card.dataset.categoria === filtro;
          card.hidden = !mostrar;
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

    lista.innerHTML = html + '<div class="aviso-vazio aviso-vazio--grade" id="clubes-vazio" hidden><b>Nenhum clube encontrado</b>Revise a busca ou escolha outra categoria.</div>';

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
        el.hidden = !mostrar;
        if (mostrar) visiveis++;
      });
      if (contador) {
        const nome = tipoAtivo === 'todos' ? 'clubes' : grupos[tipoAtivo].toLowerCase();
        contador.innerHTML = `<b>${visiveis}</b> ${nome}`;
      }
      if (vazio) vazio.hidden = visiveis !== 0;
    }

    if (busca) busca.addEventListener('input', aplicar);
    if (filtros) {
      $$('.chip', filtros).forEach((c) => c.setAttribute('aria-pressed', String(c.classList.contains('is-ativo'))));
      filtros.addEventListener('click', (e) => {
        const botao = e.target.closest('[data-tipo]');
        if (!botao) return;
        tipoAtivo = botao.dataset.tipo;
        $$('.chip', filtros).forEach((c) => {
          c.classList.toggle('is-ativo', c === botao);
          c.setAttribute('aria-pressed', String(c === botao));
        });
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
        ? `<a href="${g.pagina}">${g.nome}</a>`
        : (g.link ? `<a href="${g.link}" target="_blank" rel="noopener">${g.nome}</a>` : g.nome);
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

    lista.innerHTML = html + '<div class="aviso-vazio" id="governadores-vazio" hidden><b>Nenhum registro encontrado</b>Tente outro nome ou período.</div>';

    const busca = $('#busca-governadores');
    const contador = $('#contador-governadores');
    const vazio = $('#governadores-vazio');

    function aplicar() {
      const termo = semAcento(busca ? busca.value.trim() : '');
      let visiveis = 0;
      $$('.governador', lista).forEach((el) => {
        const mostrar = !termo || el.dataset.busca.indexOf(termo) !== -1;
        el.hidden = !mostrar;
        if (mostrar) visiveis++;
      });
      if (contador) contador.innerHTML = `<b>${visiveis}</b> ${visiveis === 1 ? 'gestão' : 'gestões'}`;
      if (vazio) vazio.hidden = visiveis !== 0;
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

  /* Faixa compacta das oito causas, na seção azul da home */
  function montarFaixaCausas() {
    const lista = $('#faixa-causas');
    if (!lista) return;
    lista.innerHTML = DLC1.causas.map((c) => `
      <li class="causa-mini">
        <span class="causa-mini__icone" aria-hidden="true">${ICONES[c.icone] || ICONES.estrela}</span>
        ${c.nome}
      </li>`).join('');
  }

  /* =======================================================================
     APOIADORES
     ======================================================================= */
  function montarApoiadores() {
    const lista = $('#lista-apoiadores');
    if (!lista) return;
    lista.innerHTML = DLC1.apoiadores.map((a) => {
      /* `fundo` casa a cor do bloco com a da arte, evitando tarjas brancas */
      const fundo = a.fundo ? ` style="background:${a.fundo}"` : '';
      return `
      <a class="apoiador" href="${a.url}" target="_blank" rel="noopener" title="${a.nome}">
        <img src="${a.imagem}" alt="${a.nome}"${fundo} loading="lazy" decoding="async">
      </a>`;
    }).join('');
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
      if (painel) painel.hidden = true;
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
     REVELAÇÃO AO ROLAR
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
        /* cascata curta: 60ms entre itens, nunca mais que 300ms */
        setTimeout(() => e.target.classList.add('is-visivel'), Math.min(i * 60, 300));
        obs.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    alvos.forEach((a) => obs.observe(a));
  }

  /* =======================================================================
     ESTADO DA ROLAGEM, sem ouvir o evento scroll
     Sentinelas invisíveis dizem quando o cabeçalho deve ganhar sombra
     e quando o botão de voltar ao topo deve aparecer.
     ======================================================================= */
  function iniciarRolagem() {
    const cabecalho = $('#cabecalho');
    const voltar = $('#voltar-topo');

    if (voltar) {
      voltar.innerHTML = ICONES.topo;
      voltar.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: menosMovimento.matches ? 'auto' : 'smooth' });
      });
    }

    if (!('IntersectionObserver' in window)) return;

    const sentinela = (topo) => {
      const s = document.createElement('div');
      s.setAttribute('aria-hidden', 'true');
      s.style.cssText = `position:absolute;top:${topo}px;left:0;width:1px;height:1px;pointer-events:none;visibility:hidden`;
      document.body.prepend(s);
      return s;
    };

    if (cabecalho) {
      new IntersectionObserver(([e]) => {
        cabecalho.classList.toggle('is-fixo', !e.isIntersecting);
      }).observe(sentinela(8));
    }

    if (voltar) {
      new IntersectionObserver(([e]) => {
        voltar.classList.toggle('is-visivel', !e.isIntersecting && e.boundingClientRect.top < 0);
      }).observe(sentinela(640));
    }
  }

  /* =======================================================================
     NÚMEROS CALCULADOS A PARTIR DOS DADOS
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
    montarFaixaCausas();
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
