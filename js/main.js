// Accordion
const accordionContainers = document.querySelectorAll('.accordion-container');

for (let i = 0; i < accordionContainers.length; i++) {
  let accordionContainer = accordionContainers[i];
  accordionContainer.addEventListener('click', function() {
    this.classList.toggle('is-open-accordion');
  });
}

// Logo Bar Slider
$(document).ready(function(){
  $('.logo-bar__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<i class="logo-bar__prev-arrow fas fa-caret-left"></i>',
    nextArrow: '<i class="logo-bar__next-arrow fas fa-caret-right"></i>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});
