var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });