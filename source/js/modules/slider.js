function initSwiper () {
  let swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },
    mousewheel: false,
    keyboard: true,

    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}

export {initSwiper};
