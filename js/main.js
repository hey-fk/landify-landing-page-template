document.querySelector('.js-header-toggle').addEventListener('click', function () {
  document.querySelector('.js-header').classList.toggle('is-mobile-show');
});

document.querySelectorAll('.js-nav-item').forEach(function (item) {
  item.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('is-active');
  });
})


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1120: {
      slidesPerView: 6,
      spaceBetween: 64,
    },
  }
});