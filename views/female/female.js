// import {mainVis} from './data.js'

const swiper = new Swiper('.main-vis > .swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".main-vis .swiper-next",
    prevEl: ".main-vis .swiper-prev",
  },
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Swiper('.social .swiper', {
  loop:true,
});