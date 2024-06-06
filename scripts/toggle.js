// scripts/toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.querySelector('.theme-toggle-checkbox');
    
    // Inicializa el tema
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    themeToggleCheckbox.checked = isDarkMode;
    document.body.classList.toggle('dark-theme', isDarkMode);

    // Cambia el tema al hacer clic en el toggle
    themeToggleCheckbox.addEventListener('change', () => {
        const isChecked = themeToggleCheckbox.checked;
        document.body.classList.toggle('dark-theme', isChecked);
        localStorage.setItem('theme', isChecked ? 'dark' : 'light');
    });
});



//document.querySelector('.theme-toggle-checkbox').addEventListener('click', function() {
//    const currentTheme = document.body.getAttribute('data-theme');
//    if (currentTheme === 'dark') {
//        document.body.setAttribute('data-theme', 'light');
//    } else {
//        document.body.setAttribute('data-theme', 'dark');
//    }
// });
