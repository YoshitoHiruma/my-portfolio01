var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    980: {
      slidesPerView: 3,
    },


  },
});