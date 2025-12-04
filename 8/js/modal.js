const reviewBtn = document.querySelector(".review-btn");
const modalOverlay = document.querySelector(".modal-overlay");

const burgerBtn = document.querySelector(".burger-btn");
const burgerOverlay = document.querySelector(".burger-overlay");

const modalCloseBtn = document.querySelector(".modal-close-btn");
const burgerCloseBtn = document.querySelector(".close-btn");

function openModal(event) {
  if (event.target.closest(".review-btn")) {
    modalOverlay.classList.add("is-open");
  }

  if (event.target.closest(".burger-btn")) {
    burgerOverlay.classList.add("is-open");
  }
}

function closeModal(event) {
  if (event.target.closest(".modal-close-btn")) {
    modalOverlay.classList.remove("is-open");
  }

  if (event.target.closest(".close-btn")) {
    burgerOverlay.classList.remove("is-open");
  }
}

function closeModalOverlay(event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("is-open");
  }
}

reviewBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModalOverlay);

burgerBtn.addEventListener("click", openModal);
burgerCloseBtn.addEventListener("click", closeModal)
