// ============================================================
// WEB DE RAYLY: idioma, colores del día, animaciones al bajar y
// el "día de sol" interactivo. Sin librerías.
// ============================================================

// ---------- Ajustes que se tocan a mano ----------
// Los botones llevan a cada tienda. La web se publica el mismo día que la app,
// así que ya van abiertos (con false dirían "Muy pronto" y no llevarían a nada).
const TIENDAS = {
  abiertas: true,
  ios: 'https://apps.apple.com/app/id6823138029',
  android: 'https://play.google.com/store/apps/details?id=com.rayly.app'
};
// Cuando exista la cuenta, poner aquí el enlace y aparece en el pie.
const INSTAGRAM = '';

const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
// IDIOMA
// El castellano está escrito en el HTML; aquí solo va el inglés.
// ============================================================
const EN = {
  'nav.como': 'How it works',
  'nav.funciones': 'Features',
  'nav.privacidad': 'Privacy',
  'nav.nosotros': 'About',
  'nav.descargar': 'Get the app',
  'hero.chip': 'Free for iPhone and Android',
  'hero.titulo': 'Enjoy the sun, <span class="oro">the smart way.</span>',
  'hero.sub': 'Rayly works out how much sun is right for you today, based on your skin and the UV where you are. And it tells you when to turn over and when to get out of the sun.',
  'flota.uv': 'UV now',
  'flota.lado': 'per side',
  'flota.spf': 'blocks 97%',
  'cinta.1': 'Your skin type',
  'cinta.2': 'Your local UV',
  'cinta.3': 'Time to turn over',
  'cinta.4': 'Even with the app closed',
  'cinta.5': 'No account',
  'cinta.6': 'No ads',
  'cinta.7': 'Free',
  'frase': 'Half an hour of sun in January is not the same as in August. Nor is it the same for your skin as for your friend’s. <span class="oro">Rayly does the maths for you.</span>',
  'dia.titulo': 'UV changes <span class="oro">every hour.</span>',
  'dia.texto': 'Slide to see how it rises and falls on a July day by the sea. Rayly follows the forecast where you are, hour by hour, and matches it to your skin.',
  'dia.rango': 'Time of day',
  'dia.nota': 'Illustrative example. In the app, with the real forecast for your area.',
  'pasos.titulo': 'Really <span class="oro">that simple.</span>',
  'paso1.t': 'Discover your skin',
  'paso1.p': 'Eight questions, one minute. That is how Rayly learns your skin type, which sets how much sun your skin can take.',
  'paso2.t': 'See today’s sun',
  'paso2.p': 'Using the UV where you are, Rayly tells you how many minutes per side. Choose gentle, balanced or tanning.',
  'paso3.t': 'Pick the best time',
  'paso3.p': 'Today’s UV hour by hour, and the best day of the week for your plan.',
  'paso4.t': 'Lie back, it will tell you',
  'paso4.p': 'Start the timer and forget about it. It tells you when to turn over and when to get out of the sun, even with the app closed.',
  'paso5.t': 'And at night, tomorrow’s plan',
  'paso5.p': 'When the sun comes back and how much UV to expect, so you are all set.',
  'fun.titulo': 'Thought through to <span class="oro">the last ray.</span>',
  'fun.piel.t': 'Made for your skin',
  'fun.piel.p': 'From skin type I to VI. Time in the sun varies a lot from one skin to another, and Rayly takes that into account.',
  'fun.noti.t': 'Even with the app closed',
  'fun.noti.p': 'Alerts arrive even when your phone is locked.',
  'fun.comp.t': 'Share your sunny day',
  'fun.comp.p': 'A card with your photo and the day’s data, ready for your stories.',
  'fun.lugar.t': 'UV wherever you are',
  'fun.lugar.p': 'Use your location or search any city in the world.',
  'fun.spf.bloquea': 'of UV blocked',
  'fun.spf.t': 'Your protection, at a glance',
  'fun.spf.p': 'Choose your SPF and see how much UV it stops.',
  'fun.gratis.t': 'Free, no account, no ads',
  'fun.gratis.p': 'Open it, take the test and enjoy.',
  'cifra.1': 'to know your skin',
  'cifra.2': 'skin types',
  'cifra.3': 'sun plans',
  'cifra.4': 'accounts to create',
  'priv.titulo': 'Your skin is <span class="oro">your business.</span>',
  'priv.1.t': 'No account',
  'priv.1.p': 'Open the app and go. No email, no password.',
  'priv.2.t': 'Your location, only for UV',
  'priv.2.p': 'It is used to get your UV and your city. Nothing else.',
  'priv.3.t': 'Everything stays on your phone',
  'priv.3.p': 'Your skin type and settings never leave your phone. We don’t see them and we don’t sell them.',
  'priv.enlace': 'Read the privacy policy',
  'nos.titulo': 'Enjoy the sun, <span class="oro">without overdoing it.</span>',
  'nos.texto': 'Rayly is a project by PJ Climate Labs. It starts with a question we all ask ourselves at the beach: how long can I stay in the sun today? We want the answer in your pocket, clear and made for your skin.',
  'nos.contacto.t': 'Investment, press or partnerships?',
  'nos.contacto.p': 'We would love to hear from you.',
  'nos.contacto.boton': 'Get in touch',
  'ruta.1.c': 'Autumn 2026',
  'ruta.1.t': 'Launch',
  'ruta.1.p': 'On iPhone and Android at the same time, free, in Spanish and English.',
  'ruta.2.c': 'Summer 2027',
  'ruta.2.p': 'Extra features for those who want to go a step further.',
  'ruta.3.c': 'Next',
  'ruta.3.t': 'More sun, more people',
  'ruta.3.p': 'New languages and new tools to look after yourself in the sun.',
  'faq.titulo': 'What you <span class="oro">ask us.</span>',
  'faq.1.q': 'Is Rayly free?',
  'faq.1.a': 'Yes. You can use it for free and without ads. Rayly Plus will come later, with optional extra features.',
  'faq.2.q': 'Do I need to create an account?',
  'faq.2.a': 'No. Open it, take the skin test and you are done.',
  'faq.3.q': 'Will it alert me if I close the app?',
  'faq.3.a': 'Yes. The alerts to turn over and to get out of the sun arrive even if you close the app or lock your phone.',
  'faq.4.q': 'Where does the UV data come from?',
  'faq.4.a': 'From the Open-Meteo forecast for your location, updated throughout the day.',
  'faq.5.q': 'Does it replace sunscreen or a doctor?',
  'faq.5.a': 'No. Rayly gives you guidance to enjoy the sun wisely, but it is not medical advice. Use protection and, if in doubt, ask your doctor or dermatologist.',
  'faq.6.q': 'Which phones does it work on?',
  'faq.6.a': 'iPhone with iOS 15 or later, and Android 7.0 or later.',
  'final.titulo': 'Today’s sun <span class="oro">is waiting.</span>',
  'pie.privacidad': 'Privacy',
  'pie.terminos': 'Terms',
  'pie.contacto': 'Contact',
  'pie.aviso': 'Rayly gives guidance, but it is not medical advice.',
  'pie.datos': 'UV data:'
};

// Textos que dependen del estado (tiendas abiertas o no) o que se pintan desde aquí
const TXT = {
  es: {
    titulo: 'Rayly: cuánto sol te toca hoy',
    desc: 'Rayly calcula cuánto sol te toca hoy según tu piel y el UV de tu zona, y te avisa para darte la vuelta y para salir del sol. Gratis para iPhone y Android.',
    tiendaPronto: 'Muy pronto en',
    tiendaYa: 'Descárgala en',
    finalPronto: 'Muy pronto en tu tienda de apps. Gratis.',
    finalYa: 'Ya disponible en tu tienda de apps. Gratis.',
    niveles: ['Bajo', 'Moderado', 'Alto', 'Muy alto', 'Extremo'],
    mensajes: [
      'Sol suave. Buen momento para empezar sin prisas.',
      'Sol a gusto. Rayly te dice tus minutos por cada lado.',
      'El sol ya aprieta: tu tiempo se acorta.',
      'Hora punta del sol: pocos minutos y buena protección.',
      'UV extremo: mejor a la sombra.'
    ],
    lugares: ['Tarragona', 'Lisboa', 'Honolulu', 'Cancún', 'Sídney', 'Ciudad del Cabo', 'Bali'],
    dec: ','
  },
  en: {
    titulo: 'Rayly: how much sun is right for you today',
    desc: 'Rayly works out how much sun is right for you today, based on your skin and your local UV, and tells you when to turn over and when to get out of the sun. Free for iPhone and Android.',
    tiendaPronto: 'Coming soon on',
    tiendaYa: 'Download on',
    finalPronto: 'Coming soon to your app store. Free.',
    finalYa: 'Now on your app store. Free.',
    niveles: ['Low', 'Moderate', 'High', 'Very high', 'Extreme'],
    mensajes: [
      'Gentle sun. A good time to start, no rush.',
      'Pleasant sun. Rayly tells you your minutes per side.',
      'The sun is getting strong: your time gets shorter.',
      'Peak sun: just a few minutes and good protection.',
      'Extreme UV: better in the shade.'
    ],
    lugares: ['Tarragona', 'Lisbon', 'Honolulu', 'Cancún', 'Sydney', 'Cape Town', 'Bali'],
    dec: '.'
  }
};

let idioma = 'es';
const ORIGINAL = new Map();   // castellano de cada elemento, para poder volver

function leerIdiomaInicial() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'es' || q === 'en') return q;
  try { const g = localStorage.getItem('rayly-web-idioma'); if (g === 'es' || g === 'en') return g; } catch (e) {}
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}

function ponerIdioma(nuevo, guardar) {
  idioma = nuevo;
  document.documentElement.lang = nuevo;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (!ORIGINAL.has(el)) ORIGINAL.set(el, el.innerHTML);
    el.innerHTML = nuevo === 'en' && EN[k] ? EN[k] : ORIGINAL.get(el);
  });
  document.querySelectorAll('[data-en]').forEach((el) => {
    if (!el.dataset.es) el.dataset.es = el.textContent;
    el.textContent = nuevo === 'en' ? el.dataset.en : el.dataset.es;
  });
  const t = TXT[nuevo];
  document.title = t.titulo;
  const d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute('content', t.desc);
  document.querySelectorAll('[data-idioma]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.idioma === nuevo)));
  document.querySelectorAll('[data-enlace-legal]').forEach((a) => {
    const u = new URL(a.href); u.searchParams.set('lang', nuevo); a.href = u.toString();
  });
  pintarTiendas();
  duplicarCinta();
  prepararFrase();
  if (diaHora != null) pintarDia(diaHora);
  if (guardar) { try { localStorage.setItem('rayly-web-idioma', nuevo); } catch (e) {} }
}

// ---------- Botones de las tiendas ----------
function pintarTiendas() {
  const t = TXT[idioma];
  document.querySelectorAll('[data-tienda]').forEach((a) => {
    const pre = a.querySelector('[data-tienda-pre]');
    if (TIENDAS.abiertas) {
      a.href = TIENDAS[a.dataset.tienda];
      a.target = '_blank'; a.rel = 'noopener';
      a.removeAttribute('aria-disabled');
      if (pre) pre.textContent = t.tiendaYa;
    } else {
      a.href = '#descargar';
      a.setAttribute('aria-disabled', 'true');
      if (pre) pre.textContent = t.tiendaPronto;
    }
  });
  const fin = document.querySelector('[data-i18n="final.texto"]');
  if (fin) fin.textContent = TIENDAS.abiertas ? t.finalYa : t.finalPronto;
}

// ---------- Cinta: se repite el grupo para que el bucle no tenga corte ----------
function duplicarCinta() {
  const pista = document.querySelector('.cinta-pista');
  if (!pista) return;
  const grupos = pista.querySelectorAll('.cinta-grupo');
  for (let i = 1; i < grupos.length; i++) grupos[i].remove();
  const copia = grupos[0].cloneNode(true);
  copia.querySelectorAll('[data-i18n]').forEach((el) => el.removeAttribute('data-i18n'));
  pista.appendChild(copia);
}

// ============================================================
// FRASE: cada palabra se enciende al bajar
// ============================================================
let palabras = [];
function prepararFrase() {
  const p = document.getElementById('frase');
  if (!p) return;
  const envolver = (nodo) => {
    [...nodo.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((trozo) => {
          if (!trozo) return;
          if (/^\s+$/.test(trozo)) { frag.appendChild(document.createTextNode(trozo)); return; }
          const s = document.createElement('span');
          s.className = 'palabra'; s.textContent = trozo;
          frag.appendChild(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && !n.classList.contains('palabra')) {
        envolver(n);
      }
    });
  };
  envolver(p);
  palabras = [...p.querySelectorAll('.palabra')];
  // El dorado va por palabra: si no, el brillo se corta en cada una
  p.querySelectorAll('.oro .palabra').forEach((s) => s.classList.add('oro'));
  p.querySelectorAll('.oro').forEach((s) => { if (!s.classList.contains('palabra')) s.classList.remove('oro'); });
}

// ============================================================
// UN DÍA DE SOL
// Curva de ejemplo de un día de julio en la costa (pico de UV 9 a
// mediodía solar, las 14:15 en verano). Solo es ilustrativa.
// ============================================================
const uvDe = (h) => {
  const s = Math.sin(Math.PI * (h - 6.7) / 15.1);
  return s <= 0 ? 0 : 9 * Math.pow(s, 1.9);
};
const nivelDe = (uv) => (uv < 3 ? 0 : uv < 6 ? 1 : uv < 8 ? 2 : uv < 11 ? 3 : 4);
const COLOR_NIVEL = ['#4CAF50', '#EFC93D', '#F08030', '#E53935', '#8E44AD'];
const CIELO = [ // hora, color de arriba, color de abajo
  [7, '#F7C6A3', '#FDEBD9'],
  [11, '#FFE7A8', '#FFF8E8'],
  [14.25, '#FFE07F', '#FFF9E9'],
  [18, '#FFD39A', '#FFF2DE'],
  [21, '#EE9468', '#FAD2B0']
];
const hexARgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mezcla = (a, b, t) => {
  const A = hexARgb(a), B = hexARgb(b);
  return 'rgb(' + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',') + ')';
};

let diaHora = null;
let diaTocado = false;

function pintarDia(h) {
  diaHora = h;
  const t = TXT[idioma];
  const uv = uvDe(h);
  const n = nivelDe(uv);
  const hh = Math.floor(h), mm = Math.round((h - hh) * 60);
  document.getElementById('dia-hora').textContent = hh + ':' + String(mm).padStart(2, '0');
  document.getElementById('dia-uv').textContent = uv.toFixed(1).replace('.', t.dec);
  const nivel = document.getElementById('dia-nivel');
  nivel.textContent = t.niveles[n];
  nivel.style.setProperty('--nivel', COLOR_NIVEL[n]);
  document.getElementById('dia-msg').textContent = t.mensajes[n];

  // El sol recorre el arco: sale a la izquierda y se pone a la derecha
  const f = Math.min(1, Math.max(0, (h - 6.7) / 15.1));
  const ang = Math.PI * (1 - f);
  const x = 200 + 180 * Math.cos(ang), y = 200 - 180 * Math.sin(ang);
  document.getElementById('dia-sol').setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (h * 40).toFixed(0) + ')');

  // Color del cielo según la hora
  let i = 0;
  while (i < CIELO.length - 2 && h > CIELO[i + 1][0]) i++;
  const [h0, a0, b0] = CIELO[i], [h1, a1, b1] = CIELO[i + 1];
  const k = Math.min(1, Math.max(0, (h - h0) / (h1 - h0)));
  const cielo = document.getElementById('dia-cielo');
  cielo.style.setProperty('--cielo-a', mezcla(a0, a1, k));
  cielo.style.setProperty('--cielo-b', mezcla(b0, b1, k));

  document.querySelectorAll('#dia-barras i').forEach((b) => b.classList.toggle('activa', Number(b.dataset.h) === Math.round(h)));
  const rango = document.getElementById('dia-rango');
  if (Number(rango.value) !== h) rango.value = h;
}

function iniciarDia() {
  const barras = document.getElementById('dia-barras');
  const rango = document.getElementById('dia-rango');
  if (!barras || !rango) return;
  for (let h = 7; h <= 21; h++) {
    const uv = uvDe(h);
    const b = document.createElement('i');
    b.dataset.h = h;
    b.style.setProperty('--h', Math.max(4, uv / 9 * 100) + '%');
    b.style.setProperty('--c', COLOR_NIVEL[nivelDe(uv)]);
    b.addEventListener('click', () => { diaTocado = true; pintarDia(h); });
    barras.appendChild(b);
  }
  rango.addEventListener('input', () => { diaTocado = true; pintarDia(Number(rango.value)); });
  pintarDia(9);

  // La primera vez que se ve, el sol hace solo el recorrido hasta mediodía
  const tarjeta = document.getElementById('dia-tarjeta');
  if (menosMovimiento) { pintarDia(14.25); return; }
  const io = new IntersectionObserver((ent) => {
    if (!ent[0].isIntersecting) return;
    io.disconnect();
    const ini = performance.now(), dur = 2600, desde = 7, hasta = 14.25;
    const paso = (ahora) => {
      if (diaTocado) return;
      const p = Math.min(1, (ahora - ini) / dur);
      const e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      pintarDia(Math.round((desde + (hasta - desde) * e) * 4) / 4);
      if (p < 1) requestAnimationFrame(paso);
    };
    setTimeout(() => requestAnimationFrame(paso), 500);
  }, { threshold: 0.5 });
  io.observe(tarjeta);
}

// ============================================================
// APARECER AL BAJAR + CONTADORES
// ============================================================
function iniciarRevelar() {
  const els = document.querySelectorAll('[data-revela]');
  if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('visto')); return; }
  const io = new IntersectionObserver((ent) => {
    ent.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visto');
      io.unobserve(e.target);
      const num = e.target.querySelector('[data-cuenta]');
      if (num) contar(num);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  els.forEach((e) => io.observe(e));
}

function contar(el) {
  const fin = Number(el.dataset.cuenta);
  if (menosMovimiento) { el.textContent = fin; return; }
  const desde = fin === 0 ? 9 : 0;
  const ini = performance.now(), dur = 1100;
  const paso = (ahora) => {
    const p = Math.min(1, (ahora - ini) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(desde + (fin - desde) * e);
    if (p < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

// ============================================================
// TODO LO QUE DEPENDE DE CUÁNTO SE HA BAJADO (un solo bucle)
// ============================================================
const $ = (id) => document.getElementById(id);
const limitar = (v, a, b) => Math.min(b, Math.max(a, v));
let pasoActual = 0;

function alBajar() {
  const y = window.scrollY;
  const vh = window.innerHeight;

  $('nav').classList.toggle('con-fondo', y > 24);

  // Color del día: manda la sección que pasa por la mitad de la pantalla
  let tema = null;
  document.querySelectorAll('main > [data-tema]').forEach((s) => {
    const r = s.getBoundingClientRect();
    if (r.top <= vh * 0.5 && r.bottom > vh * 0.5) tema = s.dataset.tema;
  });
  if (tema && document.body.dataset.tema !== tema) {
    document.body.dataset.tema = tema;
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', tema === 'dia' ? '#FBF6EC' : tema === 'tarde' ? '#F7E2C6' : '#14100A');
  }

  if (!menosMovimiento) {
    // Portada: el sol gira más rápido al bajar
    if (y < vh * 1.4) {
      const sol = $('hero-sol');
      if (sol) sol.style.transform = 'rotate(' + (y * 0.12).toFixed(2) + 'deg)';
    }

    // Sol del final: sube cuando llegas
    const fs = $('final-sol');
    if (fs) {
      const r = fs.parentElement.getBoundingClientRect();
      const p = limitar((vh - r.top) / (r.height + vh * 0.2), 0, 1);
      fs.style.transform = 'translateY(' + ((1 - p) * 30).toFixed(1) + '%) rotate(' + (p * 40).toFixed(1) + 'deg)';
    }
  }

  // Frase: se encienden las palabras
  const frase = $('frase');
  if (frase && palabras.length) {
    const r = frase.getBoundingClientRect();
    const p = limitar((vh * 0.82 - r.top) / (vh * 0.42 + r.height * 0.55), 0, 1);
    const n = Math.round(p * palabras.length);
    palabras.forEach((w, i) => w.classList.toggle('luz', i < n));
  }

  // Cómo funciona: el paso depende de lo bajado dentro del bloque
  const cuerpo = $('pasos-cuerpo');
  if (cuerpo) {
    const r = cuerpo.getBoundingClientRect();
    const p = limitar(-r.top / (r.height - vh), 0, 0.999);
    const n = Math.floor(p * 5);
    if (n !== pasoActual) {
      pasoActual = n;
      document.querySelectorAll('.pantalla').forEach((im, i) => im.classList.toggle('activa', i === n));
      document.querySelectorAll('.paso').forEach((li, i) => li.classList.toggle('activo', i === n));
      document.querySelectorAll('.pasos-puntos i').forEach((d, i) => d.classList.toggle('activo', i === n));
      $('pasos-escena-movil').classList.toggle('con-noti', n === 3);
    }
  }

  // Hoja de ruta: la línea se va llenando
  const ruta = $('ruta');
  if (ruta) {
    const r = ruta.getBoundingClientRect();
    $('ruta-progreso').style.setProperty('--p', limitar((vh * 0.75 - r.top) / r.height, 0, 1).toFixed(3));
  }
}

let pendiente = false;
function pedirFrame() {
  if (pendiente) return;
  pendiente = true;
  requestAnimationFrame(() => { pendiente = false; alBajar(); });
}

// ============================================================
// DETALLES DE LAS CAJAS
// ============================================================
function iniciarCajas() {
  // Fototipos: el elegido va pasando de uno a otro
  const puntos = document.querySelectorAll('#piel-puntos i');
  let ip = 2;
  const marcarPiel = () => puntos.forEach((p, i) => p.classList.toggle('elegido', i === ip));
  marcarPiel();

  // Ciudades del mundo
  const lugar = $('lugar-nombre');
  let il = 0;

  // SPF y cuánto UV frena
  const SPF = [[15, 93], [30, 97], [50, 98]];
  let is = 1;

  if (menosMovimiento) return;
  // Datos de la portada: se turnan en la etiqueta de debajo del sol
  const datos = document.querySelectorAll('#hero-datos .dato');
  let id = 0;
  setInterval(() => {
    datos[id].classList.remove('activo');
    id = (id + 1) % datos.length;
    datos[id].classList.add('activo');
  }, 2800);
  setInterval(() => { ip = (ip + 1) % 6; marcarPiel(); }, 1700);
  setInterval(() => {
    if (!lugar) return;
    lugar.classList.add('cambia');
    setTimeout(() => {
      const l = TXT[idioma].lugares;
      il = (il + 1) % l.length;
      lugar.textContent = l[il];
      lugar.classList.remove('cambia');
    }, 350);
  }, 2200);
  setInterval(() => {
    is = (is + 1) % SPF.length;
    $('spf-num').textContent = 'SPF ' + SPF[is][0];
    $('spf-pct').textContent = SPF[is][1] + '%';
    $('spf-barra').style.setProperty('--p', SPF[is][1] + '%');
  }, 2600);

  // Las cajas se inclinan un poco siguiendo el ratón (solo con ratón)
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-inclina]').forEach((c) => {
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const yy = (e.clientY - r.top) / r.height - 0.5;
        c.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg');
        c.style.setProperty('--rx', (-yy * 6).toFixed(2) + 'deg');
      });
      c.addEventListener('pointerleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
    });
  }
}

// ============================================================
// ARRANQUE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  if (INSTAGRAM) {
    const ig = $('enlace-instagram');
    if (ig) { ig.href = INSTAGRAM; ig.hidden = false; }
  }
  document.querySelectorAll('[data-idioma]').forEach((b) => b.addEventListener('click', () => ponerIdioma(b.dataset.idioma, true)));
  document.querySelectorAll('[data-tienda]').forEach((a) => a.addEventListener('click', (e) => {
    if (!TIENDAS.abiertas && a.closest('#descargar')) e.preventDefault();
  }));

  iniciarDia();
  ponerIdioma(leerIdiomaInicial(), false);
  iniciarRevelar();
  iniciarCajas();

  window.addEventListener('scroll', pedirFrame, { passive: true });
  window.addEventListener('resize', pedirFrame);
  alBajar();
});
