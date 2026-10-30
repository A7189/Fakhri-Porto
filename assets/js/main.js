document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

const themeToggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        localStorage.setItem('theme', 'dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
});