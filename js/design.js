"use strict";
const swiper = new Swiper(".swiper", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});
