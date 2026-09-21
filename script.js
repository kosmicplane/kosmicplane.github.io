
const menuToggle=document.getElementById('menuToggle'),menuPanel=document.getElementById('menuPanel'),menuClose=document.getElementById('menuClose'),menuBackdrop=document.getElementById('menuBackdrop');
function openMenu(){if(!menuPanel)return;menuPanel.classList.add('open');menuBackdrop.classList.add('open')}function closeMenu(){if(!menuPanel)return;menuPanel.classList.remove('open');menuBackdrop.classList.remove('open')}
menuToggle?.addEventListener('click',openMenu);menuClose?.addEventListener('click',closeMenu);menuBackdrop?.addEventListener('click',closeMenu);document.querySelectorAll('.menu-panel a').forEach(a=>a.addEventListener('click',closeMenu));
document.querySelectorAll('[data-modal]').forEach(card=>card.addEventListener('click',()=>{const m=document.getElementById(card.dataset.modal);if(m){m.classList.add('open');document.body.style.overflow='hidden'}}));
function closeModal(m){m.classList.remove('open');document.body.style.overflow=''}document.querySelectorAll('.modal').forEach(m=>{m.querySelector('.modal__close')?.addEventListener('click',()=>closeModal(m));m.querySelector('.modal__backdrop')?.addEventListener('click',()=>closeModal(m))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();document.querySelectorAll('.modal.open').forEach(closeModal)}});const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
