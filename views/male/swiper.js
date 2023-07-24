const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
