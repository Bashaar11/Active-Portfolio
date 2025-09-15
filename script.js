
////////////////////// NAVBAR ///////////////////////////

// Add smooth scrolling behavior
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

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Add active state to current page link (demo purposes)
const currentPath = window.location.hash || '#features';
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.style.color = '#3182ce !important';
        link.style.fontWeight = '600';
    }
});



/////////////////////// HERO ///////////////////////////

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Link clicked:', this.getAttribute('href'));
        // You can add actual scroll behavior here when you have target sections
    });
});

// Add intersection observer for animations
const observerOptionsHero = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerHero = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptionsHero);

// Observe hero content
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    observerHero.observe(heroContent);
}

// Add button click effects
document.querySelectorAll('.btn-primary-hero, .btn-secondary-hero').forEach(button => {
    button.addEventListener('click', function (e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
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
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .btn-primary-hero, .btn-secondary-hero {
                position: relative;
                overflow: hidden;
            }
        `;
document.head.appendChild(style);




/////////////////////// ABOUT ///////////////////////////
// Intersection Observer for scroll animations
const observerOptionsAbout = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptionsAbout);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observerAbout.observe(el);
});

// Add counter animation for stats
function animateCounter() {
    const statsNumber = document.querySelector('.stats-number');
    const target = 77;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        statsNumber.textContent = Math.floor(current) + '%';
    }, 30);
}

// Trigger counter animation when stats card is visible (only once)
let hasAnimated = false;
const statsObserverAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            setTimeout(animateCounter, 800);
            statsObserverAbout.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsCard = document.querySelector('.stats-card');
if (statsCard) {
    statsObserverAbout.observe(statsCard);
}

// Add subtle parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-decoration');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add hover effect to image
const aboutImage = document.querySelector('.about-image');
aboutImage.addEventListener('mouseenter', () => {
    aboutImage.style.transform = 'scale(1.02) rotate(1deg)';
});

aboutImage.addEventListener('mouseleave', () => {
    aboutImage.style.transform = 'scale(1) rotate(0deg)';
});

// Add click effect to stats card
const statsCardElement = document.querySelector('.stats-card');
statsCardElement.addEventListener('click', () => {
    statsCardElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        statsCardElement.style.transform = 'scale(1)';
    }, 150);
});



/////////////////////// LOGOS ///////////////////////////
// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.company-logo, .section-header').forEach(el => {
    observer.observe(el);
});

// Add subtle hover animations with stagger effect
const companyLogos = document.querySelectorAll('.company-logo');

companyLogos.forEach((logo, index) => {
    logo.addEventListener('mouseenter', () => {
        // Add ripple effect
        const rect = logo.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(66, 153, 225, 0.1)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.pointerEvents = 'none';

        logo.style.position = 'relative';
        logo.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const styleLogos = document.createElement('style');
styleLogos.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(styleLogos);

// Add floating animation to trust icons
const trustIcons = document.querySelectorAll('.trust-icon');
trustIcons.forEach((icon, index) => {
    setInterval(() => {
        icon.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index) * 3}px)`;
    }, 16);
});

// Add click tracking (for analytics)
companyLogos.forEach(logo => {
    logo.addEventListener('click', () => {
        const companyName = logo.querySelector('.logo-text').textContent.trim();
        console.log(`Clicked on ${companyName} logo`);
        // Here you could send analytics data
    });
});




/////////////////////// CTA ///////////////////////////
function handleSignup() {
    // Add your signup logic here
    alert('Welcome to the developer community! 🚀');
}

// Add some interactive hover effects
document.querySelector('.cta-button').addEventListener('mouseenter', function () {
    this.style.background = 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)';
});

document.querySelector('.cta-button').addEventListener('mouseleave', function () {
    this.style.background = 'linear-gradient(135deg, #4285f4 0%, #1976d2 100%)';
});


// Start counter animation after page load
window.addEventListener('load', () => {
    setTimeout(animateCounter, 500);
});



/////////////////////// FOOTER ///////////////////////////
// Add smooth scrolling for anchor links
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

// Add click feedback for navigation links
document.querySelectorAll('.footer-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Create subtle feedback effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);

        console.log('Navigating to:', this.textContent);
    });
});

// Add email click functionality
document.querySelector('.contact-email').addEventListener('click', function (e) {
    // Allow default mailto behavior but add visual feedback
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Add social media click feedback
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault();

        // Add click animation
        this.style.transform = 'translateY(-2px) scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px) scale(1)';
        }, 150);

        const platform = this.getAttribute('title');
        console.log('Opening', platform, 'profile');
    });
});



/////////////////////// PROJECTS ///////////////////////////
// Handle view all projects
function handleViewAll() {
    alert('Redirecting to full projects gallery...');
}

// Add smooth hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-6px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(-4px)';
    });
});

// Handle project link clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const linkType = this.textContent.trim();
        const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;

        console.log(`Opening ${linkType} for project: ${projectTitle}`);

        // Add click feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Intersection Observer for scroll animations
const observerOptionsProjects = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerProjects = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptionsProjects);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.animationPlayState = 'paused';
    observerProjects.observe(card);
});




