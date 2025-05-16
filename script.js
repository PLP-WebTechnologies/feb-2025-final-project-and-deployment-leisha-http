function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optional: change icon and store theme preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Check for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }
});