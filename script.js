// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0';
                setTimeout(() => {
                    skillProgress.style.width = width;
                }, 100);
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Add animation to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    animateOnScroll.observe(card);
});

// Add animation to other sections
document.querySelectorAll('.internship-card, .education-card, .skill-category').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    animateOnScroll.observe(element);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:haizzadaimar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitButton.style.background = 'var(--secondary-color)';
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.style.background = '';
    }, 3000);
});

// Resume download handler
const downloadResume = document.getElementById('downloadResume');

downloadResume.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Download the actual PDF resume
    const a = document.createElement('a');
    a.href = 'images/AIMAR%20HAIZZAD%20BIN%20NASREY.pdf';
    a.download = 'AIMAR_HAIZZAD_BIN_NASREY_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Show feedback
    downloadResume.innerHTML = '<i class="fas fa-check"></i> Resume Downloaded!';
    setTimeout(() => {
        downloadResume.innerHTML = '<i class="fas fa-download"></i> Download Resume';
    }, 2000);
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Typing effect for home section (optional enhancement)
const typingEffect = () => {
    const subtitle = document.querySelector('.home-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    const type = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(type, 1000);
};

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    // Optional: Uncomment to enable typing effect
    // typingEffect();
});

// Add active class to nav links on click
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Performance optimization: Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal animation to sections
const revealSections = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('section').forEach(section => {
    revealSections.observe(section);
});

console.log('Portfolio website loaded successfully!');

