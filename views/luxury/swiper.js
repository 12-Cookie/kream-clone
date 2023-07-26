var swiper = new Swiper('.mySwiper', {
    autoplay: true,
    delay: 3000,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
