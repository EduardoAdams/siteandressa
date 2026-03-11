document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       HEADER – Scroll shadow
       ===================================================== */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    /* =====================================================
       MENU MOBILE – Hamburger toggle
       ===================================================== */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('nav');

    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
            const isOpen = nav.classList.contains('open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen);
        });

        // Fecha o menu ao clicar em um link
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }

    /* =====================================================
       NAV – Link ativo ao scrollar
       ===================================================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const setActiveLink = () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                link.classList.toggle('active', scrollY >= top && scrollY < bottom);
            }
        });
    };
    window.addEventListener('scroll', setActiveLink, { passive: true });

    /* =====================================================
       FAQ – Acordeão
       ===================================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-q');
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Fecha todos os outros
            faqItems.forEach(other => other.classList.remove('open'));
            // Abre o atual (se estava fechado)
            if (!isOpen) item.classList.add('open');
        });
    });

    /* =====================================================
       ANIMAÇÕES DE SCROLL – Intersection Observer
       ===================================================== */
    const animatedEls = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.dataset.delay || 0;
                setTimeout(() => el.classList.add('visible'), parseInt(delay));
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.12 });

    animatedEls.forEach(el => observer.observe(el));

    /* =====================================================
       SMOOTH ANCHOR – Corrige offset do header fixo
       ===================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});