// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Highlight shop name on scroll
window.addEventListener('scroll', function() {
  const shopName = document.querySelector('.shop-name-highlight');
  if (shopName) {
    if (window.scrollY > 100) {
      shopName.classList.add('scrolled');
    } else {
      shopName.classList.remove('scrolled');
    }
  }
});