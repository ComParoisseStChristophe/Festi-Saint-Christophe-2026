// Navigation commune — à inclure dans chaque page
function initNav(activePage) {
  const pages = [
    {href:'index.html', label:'Accueil'},
    {href:'editions.html', label:'Éditions'},
    {href:'2026.html', label:'2026 ✦', cta:true},
    {href:'galerie.html', label:'Galerie'},
    {href:'quiz.html', label:'Quiz'},
    {href:'partenaires.html', label:'Partenaires'},
    {href:'contact.html', label:'Contact'},
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.cta?'nav-cta':''}${activePage===p.href?' active':''}">${p.label}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" onclick="document.getElementById('mobileMenu').classList.remove('open')">${p.label}</a>`
  ).join('');

  document.getElementById('nav-links').innerHTML = links;
  document.getElementById('mobile-menu').innerHTML = mobileLinks;
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:.12});
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initFadeUp);
