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
// LANGUAGE SELECTOR
// ===================================

// ===================================
// LANGUAGE TRANSLATION SYSTEM
// ===================================

const translations = {
    pt: {
        header: { tagline: "Sua Casa de Apostas Profissional" },
        hero: {
            status: "Últimas vagas disponíveis",
            title: { line1: "Não aposte às cegas,", highlight: "aposte com dados" },
            desc: "Últimas vagas para acessar as previsões",
            cta: "Junte-se à nossa comunidade exclusiva"
        },
        about: {
            badge: "🌟 Bem-vindo",
            subtitle: "Sua casa de apostas 100% legalizada na Europa, com total transparência e segurança para suas apostas.",
            item1: { title: "93% de Acertos", desc: "Estratégias cuidadosamente analisadas por nossa equipe de especialistas profissionais." },
            item2: { title: "Ganhos Consistentes", desc: "Desfrute de acesso a dicas VIP e um ambiente seguro para apostar com total confiança." },
            item3: { title: "Nossa Missão", desc: "Ajudar você a maximizar seus resultados de forma responsável e profissional." }
        },
        video: { title: "Vídeo de Apresentação", desc: "Conheça mais sobre nossa plataforma e como podemos ajudá-lo a alcançar seus objetivos." },
        predictions: { badge: "📊 Comprovado", title: "Nossos Resultados de Sucesso", desc: "Dicas e previsões vencedoras que geram lucros reais." },
        footer: { copy: "© Copyright 2025 | WINLINE | Todos os direitos reservados.", warning: "⚠️ Jogue com responsabilidade. +18" }
    },
    en: {
        header: { tagline: "Your Professional Betting Home" },
        hero: {
            status: "Last spots available",
            title: { line1: "Don't bet blindly,", highlight: "bet with data" },
            desc: "Last spots to access predictions",
            cta: "Join our exclusive community"
        },
        about: {
            badge: "🌟 Welcome",
            subtitle: "Your 100% legalized betting house in Europe, with total transparency and safety for your bets.",
            item1: { title: "93% Accuracy", desc: "Strategies carefully analyzed by our team of professional specialists." },
            item2: { title: "Consistent Gains", desc: "Enjoy access to VIP tips and a safe environment to bet with total confidence." },
            item3: { title: "Our Mission", desc: "To help you maximize your results responsibly and professionally." }
        },
        video: { title: "Presentation Video", desc: "Learn more about our platform and how we can help you achieve your goals." },
        predictions: { badge: "📊 Proven Results", title: "Our Success Results", desc: "Winning tips and predictions that generate real profits." },
        footer: { copy: "© Copyright 2025 | WINLINE | All rights reserved.", warning: "⚠️ Gamble responsibly. 18+" }
    },
    es: {
        header: { tagline: "Tu Casa de Apuestas Profesional" },
        hero: {
            status: "Últimas plazas disponibles",
            title: { line1: "No te apuestes a ciegas,", highlight: "apuesta con datos" },
            desc: "Últimas plazas para acceder a las predicciones",
            cta: "Únete a nuestra comunidad exclusiva"
        },
        about: {
            badge: "🌟 Bienvenido",
            subtitle: "Tu casa de apuestas 100% legalizada en Europa, con total transparencia y seguridad para tus apuestas.",
            item1: { title: "93% de Aciertos", desc: "Estrategias cuidadosamente analizadas por nuestro equipo de especialistas profesionales." },
            item2: { title: "Ganancias Consistentes", desc: "Disfruta de acceso a consejos VIP y un entorno seguro para apostar con total confianza." },
            item3: { title: "Nuestra Misión", desc: "Ayudarte a maximizar tus resultados de forma responsable y profesional." }
        },
        video: { title: "Video de Presentación", desc: "Conoce más sobre nuestra plataforma y cómo podemos ayudarte a alcanzar tus objetivos." },
        predictions: { badge: "📊 Comprobado", title: "Nuestros Resultados de Éxito", desc: "Consejos y predicciones ganadoras que generan ganancias reales." },
        footer: { copy: "© Copyright 2025 | WINLINE | Todos los derechos reservados.", warning: "⚠️ Juega con responsabilidad. +18" }
    }
};

const languageSelector = document.getElementById('language');

function updateLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => { value = value ? value[k] : null; });

        if (value) {
            // Apply subtle transition
            el.style.transition = 'opacity 0.2s ease';
            el.style.opacity = '0';

            setTimeout(() => {
                el.innerText = value;
                el.style.opacity = '1';
            }, 200);
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : (lang === 'es' ? 'es-ES' : 'en-US');
}

if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        console.log(`Language switching to: ${selectedLanguage}`);

        // Visual feedback on selector
        languageSelector.style.transform = 'scale(0.95)';
        setTimeout(() => languageSelector.style.transform = 'scale(1)', 150);

        // Execute translation
        updateLanguage(selectedLanguage);
    });
}

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
// VIDEO PLACEHOLDER INTERACTION
// ===================================

const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // Placeholder for future video implementation
        console.log('Video placeholder clicked');

        // Add a visual feedback
        videoPlaceholder.style.transform = 'scale(0.98)';
        setTimeout(() => {
            videoPlaceholder.style.transform = 'scale(1)';
        }, 150);

        // You could implement a modal with video here
        alert('Vídeo em breve! Em desenvolvimento.');
    });
}

// ===================================
// FEATURE CARDS STAGGER ANIMATION
// ===================================

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===================================
// TRUST INDICATORS COUNTER ANIMATION
// ===================================

const animateCounter = (element, target, suffix = '') => {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

const trustNumbers = document.querySelectorAll('.trust-number');
const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const text = entry.target.textContent;
            const number = parseInt(text);
            const suffix = text.replace(number, '');

            if (!isNaN(number)) {
                animateCounter(entry.target, number, suffix);
                entry.target.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

trustNumbers.forEach(num => trustObserver.observe(num));

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Add keyboard navigation for cards
const interactiveCards = document.querySelectorAll('.feature-card, .result-card');
interactiveCards.forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// ===================================
// CONSOLE BRANDING
// ===================================

console.log(
    '%cWINLINE',
    'font-size: 3rem; font-weight: bold; color: #e6e6e6; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
);
console.log(
    '%cSua Casa de Apostas Profissional',
    'font-size: 1rem; color: #999999; font-style: italic;'
);
console.log(
    '%c© 2025 WINLINE. Todos os direitos reservados.',
    'font-size: 0.75rem; color: #666666;'
);

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('WINLINE website loaded successfully');

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');

    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

// ===================================
// ERROR HANDLING
// ===================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You could send this to an error tracking service
});

// ===================================
// SERVICE WORKER REGISTRATION (Optional)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
