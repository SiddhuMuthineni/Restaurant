// Global interactions, AOS initialization, and Navbar logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if(navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  updateCartBadge();
});

// Generic ripple effect for buttons
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn');
  if (btn) {
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    // remove existing ripples
    const ripple = btn.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    
    btn.appendChild(circle);
  }
});

// Cart Badge Update
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const cart = JSON.parse(localStorage.getItem('restaurant_cart') || '[]');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;
  badge.style.display = totalCount > 0 ? 'inline-block' : 'none';
}

// Global cart update trigger hook
window.addEventListener('storage', (e) => {
  if (e.key === 'restaurant_cart') {
    updateCartBadge();
  }
});
