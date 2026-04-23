import { initThemeToggle } from './theme.js'

//toggle between light and dark mode
initThemeToggle();


//hambuger menu logic
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  menuBtn.innerHTML = isOpen
  ? '<i data-lucide="menu"></i>'
  : '<i data-lucide="x"></i>';

  lucide.createIcons();
});



lucide.createIcons();