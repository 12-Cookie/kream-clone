const mySwiper = new Swiper('.main_swiper', {
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
    nextEl: '.main_prev_btn',
    prevEl: '.main_next_btn',
  },
});

const mySwiper2 = new Swiper('.lookbook_swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.lookbook_prev_btn',
    prevEl: '.lookbook_next_btn',
  },
  slidesPerView: 6,
});
