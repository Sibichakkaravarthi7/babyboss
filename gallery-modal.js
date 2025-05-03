// Modal/lightbox for gallery images
window.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-section img');
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      showModal(img.src, img.alt);
    });
  });

  function showModal(src, alt) {
    let modal = document.getElementById('gallery-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'gallery-modal';
      modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
          <img src="${src}" alt="${alt}">
          <button class="modal-close">&times;</button>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.modal-close').onclick = closeModal;
      modal.querySelector('.modal-backdrop').onclick = closeModal;
    } else {
      modal.querySelector('img').src = src;
      modal.querySelector('img').alt = alt;
      modal.style.display = 'flex';
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
});
