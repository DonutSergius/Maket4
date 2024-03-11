$(document).ready(function () {
    var $qouteSlider = $(".qoute-list");

    $qouteSlider.slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      fade: true,
    });

    $qouteSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var buttonId = "btn" + (nextSlide + 1);
        setActiveButton(buttonId);
      }
    );

    $(".qoute-buttons button").click(function () {
      var index = $(this).index();
      $qouteSlider.slick("slickGoTo", index);
      setActiveButton("btn" + (index + 1));
    });

    var initialSlide = $qouteSlider.slick("slickCurrentSlide");
    var initialButtonId = "btn" + (initialSlide + 1);
    setActiveButton(initialButtonId);

    function setActiveButton(buttonId) {
      $(".qoute-buttons button").removeClass("active");
      $("#" + buttonId).addClass("active");
    }
  });