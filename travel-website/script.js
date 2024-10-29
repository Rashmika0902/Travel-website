// Toggle login box
document.querySelector('.login').addEventListener('click', () => {
    alert('Login functionality coming soon!');
  });
  
  // Search functionality
  document.querySelector('.search input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      alert(`Searching for: ${event.target.value}`);
    }
  });
  
  // Smooth scrolling for internal links
  document.querySelectorAll('.nav__links a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  