document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Simplificado
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Lógica simples para mostrar/esconder o menu
            if (navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'var(--bg-color)';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

                const navList = navMenu.querySelector('.nav-list');
                if (navList) {
                    navList.style.flexDirection = 'column';
                    navList.style.gap = '15px';
                }
            }
        });
    }

    // Scroll suave para os links do menu é tratado pelo CSS scroll-behavior: smooth;
});