var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  touchRatio: 2,
  // slideToClickedSlide: true,
  slidesPerView: 3,
  initialSlide: 0,
  loop: true,

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    740: {
      slidesPerView: 3,
    },
  },
});
