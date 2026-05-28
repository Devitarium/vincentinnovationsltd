// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}
 
// Cycler
let currentCard = 0;
const cards = document.querySelectorAll('.cycle-card');
const dots = document.querySelectorAll('.cycle-dot');
function showCard(index) {
  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  cards[index].classList.add('active');
  dots[index].classList.add('active');
  currentCard = index;
}
dots.forEach(dot => dot.addEventListener('click', () => showCard(parseInt(dot.dataset.dot))));
setInterval(() => showCard((currentCard + 1) % cards.length), 3000);
 
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => observer.observe(el));
 
// Modal
const modalData = [
  {
    image: 'images/enliven-preview.png',
    type: 'Website Development',
    title: 'Enliven Decorative Services',
    desc: 'Designed and developed a full multi page website for Enliven Decorative Services, a professional painting and decorating company based in Lagos. The site features a hero image carousel, a services breakdown, a portfolio section, and a contact page all built to reflect the brand\'s identity and convert visitors into enquiries. Delivered fully responsive across desktop and mobile.',
    link: 'https://devitarium.github.io/enliven/'
  },
  {
    image: 'images/areaplug-preview.png',
    type: 'Website Development',
    title: 'FuoyePlug. University Startup Platform',
    desc: 'Built the full web application for FuoyePlug, a student-founded startup at the Federal University Oye-Ekiti. The platform serves as a regional business discovery directory allowing students to find and list campus and off campus businesses, filter by category, location, and delivery options. The website itself is the product. The project was commissioned to us pre-launch, and we received permission to feature it in our portfolio. Currently populated with test data ahead of official launch.',
    link: 'https://devitarium.github.io/Areaplug/'
  },
  {
    image: 'images/gbp-preview.png',
    type: 'Google Business Profile',
    title: 'Novara Logistics Ltd. Google Business Profile',
    desc: 'Created and fully optimised a Google Business Profile for Novara Logistics LTD, a logistics service company based in Apapa, Lagos. The profile is now live on Google Maps and Google Search complete with business category, address, phone number, and photos making it easy for customers to find, contact, and get directions to the business directly from search results.',
    link: 'https://www.google.com/search?q=novara+logistics+ltd'
  },
  {
    image: 'images/cac-preview.JPG',
    type: 'CAC Registration',
    title: 'Brayan Foods. Company & Business Name Registration',
    desc: 'Managed end to end CAC registration for a client who required both a company incorporation and a business name registration. Successfully processed the Certificate of Incorporation for Brayan Food Exports Ltd as a Private Company Limited by Shares, and the Certificate of Registration for Brayan Foods and Export Services both issued by the Corporate Affairs Commission. The client received both certificates without dealing with the paperwork process directly.',
    link: null
  }
];
function openModal(index) {
  const d = modalData[index];

  const modalImgEl = document.getElementById('modalImg');
  if (d.image) {
    modalImgEl.innerHTML = `<img src="${d.image}" alt="${d.title}">`;
  } else {
    modalImgEl.innerHTML = `<i data-lucide="${d.icon}"></i>`;
    lucide.createIcons({ el: modalImgEl });
  }

  document.getElementById('modalType').textContent = d.type;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalDesc').textContent = d.desc;

  const linkEl = document.getElementById('modalLink');
  if (d.link) {
    linkEl.href = d.link;
    linkEl.style.display = 'inline-flex';
  } else {
    linkEl.style.display = 'none';
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
lucide.createIcons();