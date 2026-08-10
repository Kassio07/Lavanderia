'use strict';

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', event => {
  if (event.target.matches('a')) {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const counter = document.querySelector('[data-counter]');
const counterObserver = new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  const total = Number(counter.dataset.counter);
  let value = 0;
  const timer = setInterval(() => {
    value += 1;
    counter.textContent = value;
    if (value >= total) clearInterval(timer);
  }, 130);
  observer.disconnect();
}, { threshold: .5 });
counterObserver.observe(counter);

const compare = document.querySelector('.compare');
compare.querySelector('input').addEventListener('input', event => {
  compare.style.setProperty('--position', `${event.target.value}%`);
});

const modal = document.querySelector('.video-modal');
const modalVideo = modal.querySelector('video');
const modalTitle = modal.querySelector('h3');
const modalDescription = modal.querySelector('p');
document.querySelectorAll('.video-card').forEach(card => {
  card.querySelector('button').addEventListener('click', () => {
    modalVideo.src = card.dataset.video;
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalDescription.textContent = card.querySelector('p').textContent;
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});
function closeModal() {
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
  modal.close();
}
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
modal.addEventListener('cancel', event => { event.preventDefault(); closeModal(); });

document.querySelector('#year').textContent = new Date().getFullYear();
