$('.inner_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  variableWidth: true,
  nextArrow: '.slick-next',
  prevArrow: '.slick-prev',
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

// EYE_Wear slider
$('.eye_waer_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  variableWidth: false,
  nextArrow: '.right_arrow',
  prevArrow: '.left_arrow',
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$(".inner_slider").on("init", function (event, slick) {
  updateSlideNumbers(slick.currentSlide, slick.slideCount);
});

$(".inner_slider").on("afterChange", function (event, slick, currentSlide) {
  updateSlideNumbers(currentSlide, slick.slideCount);
});

function updateSlideNumbers(currentSlide, totalSlides) {
  const formattedCurrentSlide = String(currentSlide + 2).padStart(2, '0');
  const formattedTotalSlides = String(totalSlides).padStart(2, '0');

  const slideNumberText = `${formattedCurrentSlide}/${formattedTotalSlides}`;
  
  $('.slick-counter .current').text(formattedCurrentSlide); // Update current slide
  $('.slick-counter .total').text(formattedTotalSlides); // Update total slide count
  $('.slick-counter .separator').text('/'); // Update separator
}
