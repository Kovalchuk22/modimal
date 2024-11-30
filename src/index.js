import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Для екранів менше 991px
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true, // додатково, якщо бажаєте динамічні кулі
        },
        navigation: false, // Вимкнути кнопки навігації
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // Для екранів 991px і більше
      991: {
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: false, // Вимкнути пагінацію
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      1100: {
        slidesPerView: 3, // 3 слайди на екранах до 1300px
      },
      900: {
        slidesPerView: 2, // 2 слайди на екранах до 900px
      },
      600: {
        slidesPerView: 1, // 1 слайд на дуже вузьких екранах
      },
    },
});
const checkbox = document.getElementById('flexCheckDefault');
const submitButton = document.getElementById('submitButton');

checkbox.addEventListener('change', function() {
    submitButton.disabled = !this.checked;
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".buut-button");  
  const closeButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu"); 

  // Відкриття мобільного меню
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  // Закриття мобільного меню
  closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});
