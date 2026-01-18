
// Initialize Lucide Icons
lucide.createIcons();

// Reveal on Scroll Logic
const revealElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
};

// Smooth Scrolling for anchor links (Internal)
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        // If we are in another view, navigate home first
        if (!document.getElementById('home-view').classList.contains('active-view')) {
          navigateTo('home');
          setTimeout(() => {
             const freshTarget = document.querySelector(targetId);
             window.scrollTo({
                top: freshTarget.offsetTop - 100,
                behavior: 'smooth'
              });
          }, 600);
        } else {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
};

// Navigation hide/show on scroll
let lastScroll = 0;
const setupNavBehavior = () => {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (!nav) return;
    if (currentScroll <= 150) {
      nav.style.transform = 'translateY(0)';
      return;
    }
    
    if (currentScroll > lastScroll) {
      nav.style.transform = 'translateY(-120%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    nav.style.transition = 'transform 0.4s ease-in-out';
    lastScroll = currentScroll;
  });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  revealElements();
  setupSmoothScroll();
  setupNavBehavior();
  
  // Re-run icons for any initial state
  lucide.createIcons();
});
