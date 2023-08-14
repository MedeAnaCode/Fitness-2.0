function initSwiper2() {
  let swiper2 = new Swiper('.reviews__slider', {
    loop: false,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
      disabledClass: 'slider-button--disabled',
    },
    mousewheel: false,
    keyboard: true,

    slidesPerView: 1,
    spaceBetween: 60,
  });
}

export {initSwiper2};
