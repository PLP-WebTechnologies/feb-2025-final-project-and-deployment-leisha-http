function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: change icon
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
