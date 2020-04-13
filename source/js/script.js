'use strict';
var toggles = document.querySelectorAll(".offers__toggle");
var slides = document.querySelectorAll(".offers__list");
var phoneMask = IMask(document.getElementById('free-lesson-telephone'), {
  mask: '00000000000'
});


toggles.forEach(function (el, index) {
  el.addEventListener("click", function () {
    slides.forEach(function (el, index) {
      slides[index].className = "offers__list offers-hide";
      toggles[index].className = "offers__toggle";
          })
        slides[index].className = "offers__list offers-show";
        toggles[index].className = "offers__toggle offers__toggle--active";
        })
      })

jQuery(document).ready(function($){
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

jQuery(document).ready(function($){
  $('.feedback__list').slick({
    variableWidth: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
