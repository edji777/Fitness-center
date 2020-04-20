'use strict';
var toggles = document.querySelectorAll('.offers__toggle');
var slides = document.querySelectorAll('.offers__list');

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
