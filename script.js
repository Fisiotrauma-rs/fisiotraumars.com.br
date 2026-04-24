// Menu Mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu ul');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// Botão de Agendamento (direciona WhatsApp ou futuro CRM)
const btnAgendar = document.getElementById('btnAgendar');
if (btnAgendar) {
    btnAgendar.addEventListener('click', (e) => {
        e.preventDefault();
        // Em breve você trocará para o link do seu sistema de agendamento
        // Exemplo futuro: window.location.href = 'https://seucrm.com/agendar';
        window.open('https://wa.me/5554999999999?text=Olá! Gostaria de agendar uma avaliação.', '_blank');
    });
}

// Smooth Scroll para links internos (se houver âncoras)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== "#" && href !== "#servicos" && href !== "#equipe" && href !== "#depoimentos" && href !== "#convenios") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Animação de entrada para os cards (quando scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .membro, .depo-card, .bloco-horario').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Registrar Service Worker (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registrado!', reg))
            .catch(err => console.log('Erro no Service Worker:', err));
    });
}
