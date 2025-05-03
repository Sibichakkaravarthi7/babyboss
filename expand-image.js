// expand-image.js
// Adds modal image expand-on-click/touch for toy and game images

document.addEventListener('DOMContentLoaded', function () {
  // Create modal overlay element
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-img-overlay';
  modalOverlay.innerHTML = '<img class="modal-img" src="" alt="Expanded Image"><span style="position:absolute;top:24px;right:36px;font-size:2.2rem;color:#fff;cursor:pointer;z-index:10001;user-select:none;" id="closeModal">&times;</span>';
  document.body.appendChild(modalOverlay);

  const modalImg = modalOverlay.querySelector('.modal-img');
  const closeModal = modalOverlay.querySelector('#closeModal');

  function showModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modalOverlay.classList.remove('active');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  // Close modal on click or tap outside image or on X
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay || e.target === closeModal) {
      hideModal();
    }
  });

  // Expand image on click/tap
  document.querySelectorAll('.toy-card-article img, .game-card-article img').forEach(function (img) {
    img.addEventListener('click', function () {
      showModal(img.src, img.alt);
    });
    img.addEventListener('touchstart', function () {
      showModal(img.src, img.alt);
    });
  });

  // ESC key closes modal
  document.addEventListener('keydown', function (e) {
    if (modalOverlay.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
      hideModal();
    }
  });
});
