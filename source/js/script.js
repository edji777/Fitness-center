'use strict';
var toggles = document.querySelectorAll('.offers__toggle');
var slides = document.querySelectorAll('.offers__list');
var scroll = document.querySelector('.page-header__scroll');
var phoneMask = IMask(document.getElementById('free-lesson-telephone'), {
  mask: '00000000000'
});

var getSlides = function (slide) {
  slide.forEach(function (el, index) {
    slide[index].className = 'offers__list offers-hide';
    toggles[index].className = 'offers__toggle';
  });
};

var getToggles = function (toggle) {
  toggle.forEach(function (element, index) {
    element.addEventListener('click', function () {
      getSlides(slides);
      slides[index].className = 'offers__list offers-show';
      toggles[index].className = 'offers__toggle offers__toggle--active';
    });
  });
};

getToggles(toggles);

$(scroll).click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});

jQuery(document).ready(function ($) {
  $('.instructors__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  });
});

jQuery(document).ready(function ($) {
  $('.feedback__list').slick({
    variableWidth: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
