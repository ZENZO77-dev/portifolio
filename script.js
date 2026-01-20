// Image preview + simple project filter + smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  // Image preview
  const fileInput = document.getElementById('fileInput');
  const profilePic = document.getElementById('profilePic');

  if (fileInput && profilePic) {
    fileInput.addEventListener('change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        profilePic.src = ev.target.result;
      };
      reader.readAsDataURL(f);
    });
  }

  // Filters
  const filters = Array.from(document.querySelectorAll('.filter'));
  const cards = Array.from(document.querySelectorAll('.project-card'));

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Smooth scroll for header links and CTAs
  document.querySelectorAll('.nav a, .btn, .contact-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
});