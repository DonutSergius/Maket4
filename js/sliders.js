$(document).ready(function () {
    const $slider = $(".course-elem");
    const $sliderButtonsContainer = $(".slider-buttons");
  
    $slider.slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  
    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        setActiveButton("cbtn" + nextSlide);
      }
    );
  
    $slider.on("setPosition", function (event, slick) {
      const totalSlides = slick.slideCount;
      const slidesToShow = slick.slickGetOption("slidesToShow");
      const shouldShowButtons = totalSlides > slidesToShow;
  
      if (shouldShowButtons) {
        $sliderButtonsContainer.show();
      } else {
        $sliderButtonsContainer.hide();
      }
    });
  
    $(".slider-buttons button").click(function () {
        var index = $(this).index();
        $slider.slick("slickGoTo", index);
        setActiveButton("cbtn" + index);
    });  
  
  
    function setActiveButton(buttonId) {
      $(".slider-buttons button").removeClass("active");
      $("#" + buttonId).addClass("active");
    }
  });
  