// ===================================
// SMOOTH SCROLL BEHAVIOR
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// HEADER SCROLL EFFECT
// ===================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.4)';
    }

    lastScroll = currentScroll;
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

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

// Observe all feature cards, result cards, and sections
const animatedElements = document.querySelectorAll(
    '.feature-card, .result-card, .section-header, .video-container'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===================================
// LANGUAGE TRANSLATION SYSTEM (ES ONLY)
// ===================================

const translations = {
    es: {
        header: { tagline: "Su Casa de Apuestas Profesional" },
        hero: {
            status: "Solo 23 plazas disponibles hoy",
            title: { line1: "No apueste a ciegas,", highlight: "apueste con datos" },
            desc: "Solo 23 plazas disponibles hoy — El grupo cierra a las 23:59h",
            cta: "Únete a nuestra comunidad exclusiva"
        },
        about: {
            badge: "🚀 Estrategias Exclusivas",
            subtitle: "Domine el mercado con inteligencia de datos y timing perfecto.",
            item1: { title: "Timing Exacto", desc: "Cuándo apostar para maximizar ganancias." },
            item2: { title: "Patrones Secretos", desc: "Cómo identificar cuándo la slot va a pagar." },
            item3: { title: "Alertas en vivo", desc: "Recibe notificaciones de las mejores slots en el momento." },
            item4: { title: "Grupo Privado", desc: "Comunidad exclusiva con +60.000 miembros." }
        },
        footer: { copy: "© Copyright 2025 | LOPES SIGNALS | Todos los derechos reservados.", warning: "⚠️ Juegue con responsabilidad. +18" }
    }
};

function updateLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => { value = value ? value[k] : null; });

        if (value) {
            el.innerText = value;
        }
    });
}

// Set initial language to Spanish
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('es');
});

// ===================================
// CTA BUTTON TRACKING
// ===================================

const ctaButtons = document.querySelectorAll('.cta-button, .footer-telegram');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        // Analytics tracking (placeholder)
        console.log('CTA clicked:', button.textContent.trim());
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy load images when implemented
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// MEMBER NOTIFICATION POPUP
// ===================================

function showMemberNotification() {
    const notification = document.getElementById('member-notification');
    if (notification) {
        notification.classList.add('show');

        // Auto hide after 6 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 6000);
    }
}

// Initial show after 10 seconds, then every 60 seconds
setTimeout(() => {
    showMemberNotification();
    setInterval(showMemberNotification, 60000);
}, 10000);

// ===================================
// CONSOLE BRANDING
// ===================================

console.log(
    '%cLOPES SIGNALS',
    'font-size: 3rem; font-weight: bold; color: #2563eb; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
);
console.log(
    '%cEstratégias Exclusivas & Timing Perfeito',
    'font-size: 1rem; color: #999999; font-style: italic;'
);
console.log(
    '%c© 2025 LOPES SIGNALS. Todos los derechos reservados.',
    'font-size: 0.75rem; color: #666666;'
);
