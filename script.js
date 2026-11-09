// Menu mobile
const sidebar = document.getElementById('sidebar');
document.getElementById('burger').addEventListener('click', () => sidebar.classList.toggle('open'));

const links = document.querySelectorAll('.nav-link');
links.forEach(link => link.addEventListener('click', () => sidebar.classList.remove('open')));

// Lien actif selon la section visible
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => observer.observe(s));

// Fenêtres « En savoir plus »
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById(btn.dataset.modal).showModal());
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
  // Fermeture en cliquant à côté de la fenêtre
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
});

// Formulaire de contact : ouvre le logiciel de messagerie
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const objet = document.getElementById('objet').value;
  const message = document.getElementById('message').value;
  const body = `${message}\n\n${nom} - ${email}`;
  window.location.href = `mailto:ilianabidi@gmail.com?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(body)}`;
});
