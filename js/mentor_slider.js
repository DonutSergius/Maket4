$(document).ready(function () {
    var $mentorSlider = $(".mentors-list");

    $mentorSlider.slick({
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

    $mentorSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var buttonId = "mbtn" + (nextSlide + 1);
        setActiveButton(buttonId);
      }
    );

    $(".mentors-buttons button").click(function () {
      var index = $(this).index();
      $mentorSlider.slick("slickGoTo", index);
      setActiveButton("mbtn" + (index + 1));
    });

    var initialSlide = $mentorSlider.slick("slickCurrentSlide");
    var initialButtonId = "mbtn" + (initialSlide + 1);
    setActiveButton(initialButtonId);

    function setActiveButton(buttonId) {
      $(".mentors-buttons button").removeClass("active");
      $("#" + buttonId).addClass("active");
    }
  });