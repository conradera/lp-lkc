// Optimized navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const nav = document.getElementById('navigation');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLogo = document.getElementById('nav-logo');
    const currentYear = document.getElementById('current-year');
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const toast = document.getElementById('toast');

    // Set current year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Debounced scroll handler for better performance
    let scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }, 10);
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        const isOpen = mobileMenu.classList.contains('show');
        mobileMenu.classList.toggle('show');
        const icon = mobileMenuToggle.querySelector('i');
        
        if (mobileMenu.classList.contains('show')) {
            icon.className = 'fas fa-times';
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            // Focus first menu item for accessibility
            const firstMenuItem = mobileMenu.querySelector('button');
            if (firstMenuItem) firstMenuItem.focus();
        } else {
            icon.className = 'fas fa-bars';
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Smooth scroll to section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = nav.offsetHeight;
            const sectionTop = section.offsetTop - navHeight;
            
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (mobileMenu.classList.contains('show')) {
            toggleMobileMenu();
        }
    }

    // Scroll to top when logo is clicked
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        // Validate required fields
        if (!data.name || !data.company || !data.email || !data.message) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }

        // Validate field lengths
        if (data.name.length < 2 || data.name.length > 100) {
            showToast('Name must be between 2 and 100 characters.', 'error');
            return;
        }

        if (data.company.length < 2 || data.company.length > 100) {
            showToast('Company name must be between 2 and 100 characters.', 'error');
            return;
        }

        if (data.message.length < 10 || data.message.length > 2000) {
            showToast('Message must be between 10 and 2000 characters.', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }

        // Validate phone format if provided
        if (data.phone && data.phone.length > 0) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
            if (!phoneRegex.test(data.phone)) {
                showToast('Please enter a valid phone number.', 'error');
                return;
            }
        }

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        try {
            // In a real implementation, you would send the data to your server
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
            
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showToast('Message sent successfully! We\'ll respond within 24 hours.', 'success');
            }, 1500);
        } catch (error) {
            // Handle submission error
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            showToast('Sorry, there was an error sending your message. Please try again.', 'error');
        }
    }

    // Show toast notification
    function showToast(message, type = 'success') {
        const toastContent = toast.querySelector('.toast-content');
        const icon = toastContent.querySelector('i');
        const messageEl = toastContent.querySelector('.toast-message');
        
        // Update icon and message based on type
        if (type === 'error') {
            icon.className = 'fas fa-exclamation-circle';
            icon.style.color = '#ef4444';
        } else {
            icon.className = 'fas fa-check-circle';
            icon.style.color = '#10b981';
        }
        
        messageEl.textContent = message;
        
        // Show toast
        toast.classList.add('show');
        
        // Hide after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }

    // Optimized intersection observer for animations
    function setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, observerOptions);

        // Only observe visible elements
        const animatedElements = document.querySelectorAll('.empathy-item, .solution-feature, .case-study-card, .team-highlight');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            observer.observe(el);
        });
    }

    // Simplified counter animation
    function setupCounterAnimation() {
        const counters = document.querySelectorAll('.hero-stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 1000; // Reduced duration
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = element.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 16);
    }

    // Optimized event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToTop();
        });
    }

    // Optimized click handlers using event delegation
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.nav-link, .nav-mobile-link, button[onclick*="scrollToSection"]');
        if (target) {
            e.preventDefault();
            const sectionId = target.getAttribute('onclick')?.match(/scrollToSection\('([^']+)'\)/)?.[1];
            if (sectionId) {
                scrollToSection(sectionId);
            }
        }
    });

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Initialize only essential animations
    setupAnimations();
    setupCounterAnimation();
});

// Global functions for onclick handlers
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const nav = document.getElementById('navigation');
        const navHeight = nav ? nav.offsetHeight : 0;
        const sectionTop = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        if (mobileMenu && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
            mobileMenuToggle.focus();
        }
    }
    
    // Enter key on language toggle
    if (e.key === 'Enter' && e.target.classList.contains('language-toggle')) {
        e.preventDefault();
        toggleLanguage();
    }
});

// Optimized accessibility focus management
document.addEventListener('focusin', function(e) {
    if (e.target.matches('a[href], button, textarea, input[type="text"], input[type="email"], input[type="tel"], select')) {
        e.target.style.outline = '2px solid #F9A03F';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', function(e) {
    if (e.target.matches('a[href], button, textarea, input[type="text"], input[type="email"], input[type="tel"], select')) {
        e.target.style.outline = 'none';
        e.target.style.outlineOffset = '0';
    }
});
