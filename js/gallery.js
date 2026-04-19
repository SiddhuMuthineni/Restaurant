document.addEventListener('DOMContentLoaded', () => {
  
  // Filtering logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const gridItems = document.querySelectorAll('.grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      gridItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          // Little animation trigger
          item.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
      
      // Update our active gallery items list for the lightbox sequence
      updateActiveItems();
    });
  });

  // Lightbox Logic
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  
  let activeItems = [];
  let currentIndex = 0;

  function updateActiveItems() {
    activeItems = Array.from(document.querySelectorAll('.grid-item')).filter(i => i.style.display !== 'none');
  }

  // Init items
  updateActiveItems();

  gridItems.forEach((item) => {
    item.addEventListener('click', () => {
      openLightbox(item);
    });
  });

  function openLightbox(item) {
    currentIndex = activeItems.indexOf(item);
    setLightboxContent(item);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // stop page scroll
  }

  function setLightboxContent(item) {
    const src = item.querySelector('img').getAttribute('src');
    const title = item.getAttribute('data-title');
    
    // Switch to higher res if needed for unsplash by replacing w=600 with w=1200
    // but w=600 is fine, actually let's request 1200
    let highResSrc = src.replace('w=600', 'w=1200');
    
    lbImg.src = highResSrc;
    lbCaption.textContent = title;
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % activeItems.length;
    setLightboxContent(activeItems[currentIndex]);
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    setLightboxContent(activeItems[currentIndex]);
  }

  // Listeners for Lightbox Controls
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-next').addEventListener('click', goNext);
  document.getElementById('lb-prev').addEventListener('click', goPrev);

  // Close on outside click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  });

});
